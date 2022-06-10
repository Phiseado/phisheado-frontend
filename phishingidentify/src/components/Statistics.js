import { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "../css/Statistics.css";
import { getDomains, getPieChart } from '../api/api';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { PieChart } from 'react-minimal-pie-chart';
import { ColorPicker } from 'primereact/colorpicker';


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
    const [pieChart, setPieChart] = useState([]);
    const shiftSize = 7;
    const footer = <Button className="p-button-custom mb-3" type="text" icon="pi pi-plus" label="Cargar" onClick={() => datascroller.current.load()} />
    const defaultLabelStyle = {
        fontSize: '8px',
    }

    useEffect(() => {
        getDomains().then(data => {
            setDomains(data);
        })
        getPieChart().then(data => {
            setPieChart([
                { title: 'Phishing', value: data.phishing, color: '#80d8ff' },
                { title: 'No Phishing', value: data.non_phishing, color: '#ff99c6' }
            ]);
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
            <SplitterPanel className="flex flex-column align-items-center justify-content-center">
                <div className='text-center h-30rem'>
                    <span className='text-2xl font-bold'>Gráfico de casos detectados reales</span>
                    <div className='flex mt-4'>
                        <div><ColorPicker disabled value="#80d8ff" /> Phishing detectado correctamente</div>
                        <div className='ml-3'><ColorPicker disabled value="#ff99c6" /> Falsos casos de phishing</div>
                    </div>
                    <PieChart data={pieChart}
                        radius={PieChart.defaultProps.radius - shiftSize}
                        segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
                        label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
                        labelStyle={{
                            ...defaultLabelStyle,
                        }}
                        animate
                    />
                </div>
            </SplitterPanel>
        </Splitter >


    )
}

export default Statistics;
