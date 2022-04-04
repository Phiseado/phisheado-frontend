import { useRef } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "../css/Statistics.css";
import urls from "./urls.json";
import { Splitter, SplitterPanel } from 'primereact/splitter';

const UrlCard = (data) => {
    return (
        <Card className="pb-3 p-card-urllist">
            <div className="flex flex-column">
                <span><strong>Dominio:</strong> {data.domain}</span>
                <span><strong>Frecuencia de aparición:</strong> {data.frequency}</span>
                <span><strong>Países de aparición:</strong> {data.country}</span>
            </div>
        </Card>
    );
}

const Statistics = () => {
    const datascroller = useRef(null);
    const footer = <Button className="p-button-custom" type="text" icon="pi pi-plus" label="Cargar" onClick={() => datascroller.current.load()} />

    return (
        <Splitter className="mb-5">
            <SplitterPanel className="flex align-items-center justify-content-center">
                <Panel header="URL's consideradas como phishing" className="p-panel-urllist pl-3">
                    <div className="card">
                        <DataScroller ref={datascroller} value={urls} itemTemplate={UrlCard} rows={3}
                            loader footer={footer} />
                    </div>
                </Panel>
            </SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">
                Panel 2
            </SplitterPanel>
        </Splitter>


    )
}

export default Statistics;
