import { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "../css/Statistics.css";
import { getDomains } from '../api/api';
import { Splitter, SplitterPanel } from 'primereact/splitter';

const UrlCard = (data) => {
    return (
        <Card className="p-card-urllist">
            <div className="flex flex-column">
                <span><strong>Dominio:</strong> {data.name}</span>
                <span><strong>Frecuencia de aparición:</strong> {data.frequency}</span>
            </div>
        </Card>
    );
}

const Statistics = () => {
    const datascroller = useRef(null);
    const [domains, setDomains] = useState([]);
    const footer = <Button className="p-button-custom mb-3" type="text" icon="pi pi-plus" label="Cargar" onClick={() => datascroller.current.load()} />

    useEffect(() => {
        getDomains().then(data => {
            setDomains(data);
        })
    }, []);

    return (
        <Splitter className="p-c-splitter">
            <SplitterPanel className="flex align-items-center justify-content-center">
                <Panel header="URL's consideradas como phishing" className="p-panel-urllist px-3 pt-3">
                    <div className="card">
                        <DataScroller ref={datascroller} value={domains} itemTemplate={UrlCard} rows={3}
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
