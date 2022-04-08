import { useState, useRef } from 'react';
import { Panel } from 'primereact/panel';
import "../css/AnalyseMessage.css";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { analyseMessage } from '../api/api';
import { Messages } from 'primereact/messages';

const AnalyseMessage = () => {
    const [incomingMessage, setIncomingMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [cardResult, setCardResult] = useState(false)
    const [analyseResult, setAnalyseResult] = useState("")
    const msg = useRef(null);

    const analyseIncomingMessage = async () => {
        if (incomingMessage === "") {
            msg.current.show({ severity: 'info', detail: 'El mensaje no debe estar vacío' })
            return
        }
        setIsLoading(true)
        let message = {
            "message": incomingMessage
        }

        const timeout = setTimeout(() => {
            msg.current.show({ severity: 'error', detail: 'El tiempo de respuesta ha excedido' })
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

    return (
        <div className="flex flex-column align-items-center mt-5">
            <Messages ref={msg}></Messages>
            <img className="p-image" alt="analyse" src="analyse.png" height="200"></img>
            <span className="text-4xl mt-4">Analiza tu mensaje</span>
            {!cardResult ?
                <Panel header="Inserte un texto con URL para analizar" className="px-3 mt-7">
                    <div className="flex flex-column">
                        <InputTextarea className="mb-3" value={incomingMessage} onChange={(e) => setIncomingMessage(e.target.value)} rows={7} cols={110} />
                        {isLoading ? < ProgressSpinner /> : <Button className="p-button-raised m-auto p-button-custom" label="Analizar" icon="pi pi-search" onClick={analyseIncomingMessage} />}
                    </div>
                </Panel> :
                <Panel header="Resultado del análisis" className={"px-3 mt-7 p-result-panel " + (analyseResult ? "red" : "green")}>
                    <div className="flex flex-column text-center">
                        {!analyseResult ?
                            <span> El mensaje no es considerado como phishing </span> :
                            <span> ¡Cuidado! El mensaje podría ser phishing </span>
                        }
                        <Button className="p-button-raised m-auto p-button-custom mt-3" label="Volver" icon="pi pi-arrow-circle-left" onClick={() => setCardResult(false)} />
                    </div>
                </Panel>
            }
        </div>
    )
}

export default AnalyseMessage;