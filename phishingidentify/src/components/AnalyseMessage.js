import { useState } from 'react';
import { Panel } from 'primereact/panel';
import "../css/AnalyseMessage.css";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const AnalyseMessage = () => {
    const [analyseMessage, setAnalyseMessage] = useState('');
    return (
        <div className="flex flex-column align-items-center mt-5">
            <img className="p-image" alt="analyse" src="analyse.png" height="200"></img>
            <span className="text-4xl mt-4">Analiza tu mensaje</span>
            <Panel header="Inserte un texto con URL para analizar" className="px-3 p-input-text-area mt-7">
                <div className="flex flex-column">
                    <InputTextarea className="mb-3" value={analyseMessage} onChange={(e) => setAnalyseMessage(e.target.value)} rows={7} cols={110} />
                    <Button className="p-button-raised m-auto p-button-custom" label="Analizar" icon="pi pi-search" />
                </div>
            </Panel>
        </div>
    )
}

export default AnalyseMessage;