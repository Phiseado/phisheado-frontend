import { useState } from 'react';
import { Panel } from 'primereact/panel';
import "../css/InputMessage.css";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const InputMessage = () => {
    const [inputMessage, setInputMessage] = useState('');
    return (
        <Panel header="Inserte un texto con URL para analizar" className="px-3 p-input-text-area">
            <div className="flex flex-column">
                <InputTextarea className="mb-3" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} rows={7} cols={110} />
                <Button className="p-button-raised m-auto" label="Analizar" icon="pi pi-search" />
            </div>
        </Panel>
    )
}

export default InputMessage;