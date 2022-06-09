import { useState, useRef, useMemo } from 'react';
import { Panel } from 'primereact/panel';
import "../css/AnalyseMessage.css";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { analyseMessage, reportMessage } from '../api/api';
import { Messages } from 'primereact/messages';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import countryList from 'react-select-country-list'

const AnalyseMessage = () => {
    const [incomingMessage, setIncomingMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [cardResult, setCardResult] = useState(false)
    const [analyseResult, setAnalyseResult] = useState("")
    const msg = useRef(null);
    const [countryDialog, setCountryDialog] = useState(false)
    const [country, setCountry] = useState("")
    const countries = useMemo(() => countryList().getData(), [])

    const selectCountry = () => {
        setCountryDialog(true)
    }

    const analyseIncomingMessage = async () => {
        if (country === "") {
            setCountryDialog(true)
        } else {
            setCountryDialog(false)
            if (incomingMessage === "") {
                msg.current.show({ severity: 'info', detail: 'El mensaje no debe estar vacío' })
                return
            }
            setIsLoading(true)
            let message = {
                "message": incomingMessage
            }

            const timeout = setTimeout(() => {
                msg.current.show({ severity: 'info', detail: 'El tiempo de respuesta ha excedido' })
                setIsLoading(false)
            }, 15000);

            try {
                const response = await analyseMessage(message)
                setIsLoading(false)
                clearTimeout(timeout)
                setCardResult(true)
                setAnalyseResult(response.result)
            }
            catch (error) {
                setIsLoading(false)
                clearTimeout(timeout)
                msg.current.show({ severity: 'error', detail: 'Error al analizar el mensaje' })
            }
        }
    }

    const reportIncomingMessage = async () => {
        let body = {
            "message": incomingMessage,
            "isoCode": country.value,
            "isPhishing": true
        }
        let response = await reportMessage(body)
        if (response.result) {
            setCardResult(false)
            msg.current.show({ severity: 'success', detail: 'Mensaje denunciado correctamente' })
        }
    }

    const changeMessageState = async () => {
        let body = {
            "message": incomingMessage,
            "isoCode": "es",
            "isPhishing": false
        }
        let response = await reportMessage(body)
        if (response.result) {
            setCardResult(false)
            msg.current.show({ severity: 'success', detail: 'Respuesta guardada correctamente' })
        }
    }

    const renderFooter = () => {
        return (
            <div className='text-center'>
                <Button className="p-button-custom" label="Aceptar" icon="pi pi-check" onClick={analyseIncomingMessage} autoFocus />
            </div>
        );
    }

    return (
        <div className="flex flex-column align-items-center mt-5">
            <Dialog header="Selecciona tu país" visible={countryDialog} style={{ width: '20vw' }} footer={renderFooter} onHide={() => setCountryDialog(false)}>
                <Dropdown className="w-full" value={country} options={countries} onChange={(value) => setCountry(value)} placeholder={country.value} filter={true} />
            </Dialog>
            <Messages ref={msg}></Messages>
            <img className="p-image" alt="analyse" src="analyse.png" height="200"></img>
            <span className="text-4xl mt-4">Analiza tu mensaje</span>
            {!cardResult ?
                <Panel header="Inserte un texto con URL para analizar" className="px-3 mt-7">
                    <div className="flex flex-column">
                        <InputTextarea className="mb-3" value={incomingMessage} onChange={(e) => setIncomingMessage(e.target.value)} rows={7} cols={110} />
                        {isLoading ? < ProgressSpinner /> : <Button className="p-button-raised m-auto p-button-custom" label="Analizar" icon="pi pi-search" onClick={selectCountry} />}
                    </div>
                </Panel> :
                <Panel header="Resultado del análisis" className={"px-3 mt-7 p-result-panel " + (analyseResult ? "red" : "green")}>
                    <div className="flex flex-column text-center">
                        {!analyseResult ?
                            <span> El mensaje no es considerado como phishing </span> :
                            <div>
                                <span> ¡Cuidado! El mensaje podría ser phishing </span>
                                <div className="mt-5">
                                    <Button className="p-button-raised m-auto p-button-custom mr-3 p-button-report" label="Denunciar" icon="pi pi-exclamation-circle" onClick={reportIncomingMessage} />
                                    <Button className="p-button-raised m-auto p-button-custom mr-3 p-button-false" label="No es phishing" icon="pi pi-check-circle" onClick={changeMessageState} />
                                </div>
                            </div>
                        }
                    </div>
                </Panel>
            }
            {!cardResult ? "" :
                <Button className="align-items-end p-button-raised m-auto p-button-custom mt-2" label="Volver" icon="pi pi-arrow-circle-left" onClick={() => setCardResult(false)} />
            }
        </div>
    )
}

export default AnalyseMessage;