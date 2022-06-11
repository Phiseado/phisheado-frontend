import { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "../css/Statistics.css";
import { getDomains, getPieChart, getBarChart } from '../api/api';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Chart } from 'primereact/chart';

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
    const [barChart, setBarChart] = useState([]);
    const footer = <Button className="p-button-custom mb-3" type="text" icon="pi pi-plus" label="Cargar" onClick={() => datascroller.current.load()} />

    useEffect(() => {
        getDomains().then(data => {
            setDomains(data);
        })
        getPieChart().then(data => {
            let phishingPercentage = data.phishing / (data.phishing + data.non_phishing) * 100;
            let nonPhishingPercentage = data.non_phishing / (data.phishing + data.non_phishing) * 100;
            setPieChart({
                labels: ['% de casos reales de phishing', '% de casos falsos de phishing'],
                datasets: [
                    {
                        data: [phishingPercentage, nonPhishingPercentage],
                        backgroundColor: ['#80d8ff', '#ff99c6'],
                        hoverBackgroundColor: ['#80d8ff', '#ff99c6'],
                    }
                ]
            })
        })
        getBarChart().then(data => {
            setBarChart({
                labels: data.map(item => item.country__name),
                datasets: [
                    {
                        label: 'Casos de phishing reportados',
                        backgroundColor: '#ffab80 ',
                        data: data.map(item => item.total)
                    }
                ]
            })
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
                <Panel header="Estadísticas" className="p-panel-urllist px-3 pt-3">
                    <div className='text-center mt-5 mb-7'>
                        <span className='text-2xl font-bold'>Ranking de países según casos de phishing detectados</span>
                        <Chart className="m-auto" type="bar" data={barChart} style={{ width: '60%' }} />
                    </div>
                    <div className='text-center'>
                        <span className='text-2xl font-bold'>Gráfico de casos detectados reales</span>
                        <Chart className="m-auto" type="pie" data={pieChart} style={{ width: '40%' }} />
                    </div>
                </Panel>
            </SplitterPanel>
        </Splitter >
    )
}

export default Statistics;
