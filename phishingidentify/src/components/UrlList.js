import { useRef } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "../css/UrlList.css";
import urls from "./urls.json";

const UrlCard = (data) => {
    return (
        <Card className="pb-3">
            <div className="flex flex-column">
                <span><strong>Dominio:</strong> {data.domain}</span>
                <span><strong>Frecuencia de aparición:</strong> {data.frequency}</span>
                <span><strong>Países de aparición:</strong> {data.country}</span>
            </div>
        </Card>
    );
}

const UrlList = () => {
    const datascroller = useRef(null);
    const footer = <Button type="text" icon="pi pi-plus" label="Cargar" onClick={() => datascroller.current.load()} />

    return (
        <Panel header="URL's consideradas como phishing" className="p-panel-urllist pl-3">
            <div className="card">
                <DataScroller ref={datascroller} value={urls} itemTemplate={UrlCard} rows={5}
                    loader footer={footer} />
            </div>
        </Panel>
    )
}

export default UrlList;
