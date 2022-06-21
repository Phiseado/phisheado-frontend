import { useEffect, useRef, useState } from 'react';
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { DataScroller } from 'primereact/datascroller';
import { Button } from 'primereact/button';
import "../css/Statistics.css";
import { getDomains, getPieChart, getBarChart } from '../api/api';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import { Chart } from 'primereact/chart';
import { Dropdown } from 'primereact/dropdown';
import { AutoComplete } from 'primereact/autocomplete';

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
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [domainsFiltered, setDomainsFiltered] = useState(null);
    const [domainsSuggestions, setDomainsSuggestions] = useState(null);
    const [filtered, setFiltered] = useState(false);

    const filteringOptions = [
        { name: 'Hoy', code: 'TODAY' },
        { name: 'Esta semana', code: 'WEEK' },
        { name: 'Este mes', code: 'MONTH' }
    ];

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
        getBarChart({ "filter": "Este mes" }).then(data => {
            setBarChart({
                labels: data.chart.map(item => item.country__name),
                datasets: [
                    {
                        label: 'Casos de phishing reportados',
                        backgroundColor: '#ffab80 ',
                        data: data.chart.map(item => item.total)
                    }
                ]
            })
        })
    }, []);

    const onFilterChange = (e) => {
        setSelectedFilter(e.value);
        console.log(e.value.name)
        getBarChart({ "filter": e.value.name }).then(data => {
            setBarChart({
                labels: data.chart.map(item => item.country__name),
                datasets: [
                    {
                        label: 'Casos de phishing reportados',
                        backgroundColor: '#ffab80 ',
                        data: data.chart.map(item => item.total)
                    }
                ]
            })
        })
    }

    const searchDomains = (event) => {
        let query = event.query;
        let filteredDomains = []
        for (let i = 0; i < domains.length; i++) {
            let domain = domains[i];
            if (domain.name.toLowerCase().includes(query.toLowerCase())) {
                filteredDomains.push(domain);
            }
        }
        setDomainsSuggestions(filteredDomains);
    }

    return (
        <Splitter className="p-c-splitter">
            <SplitterPanel className="flex align-items-center justify-content-center">
                <Panel header="URL's consideradas como phishing" style={{ height: "100vh" }} className="p-panel-urllist px-3 pt-3">
                    <div className='mb-3'>
                        <AutoComplete className="w-full" placeholder='Buscar por dominio' value={domainsFiltered} suggestions={domainsSuggestions} completeMethod={searchDomains} field="name" onChange={(e) => { setDomainsFiltered(e.value); setFiltered(false) }} onSelect={() => setFiltered(true)} onClear={() => setFiltered(false)} />
                    </div>
                    <DataScroller ref={datascroller} value={filtered ? [domainsFiltered] : domains} itemTemplate={UrlCard} rows={3}
                        loader footer={footer} />
                </Panel>
            </SplitterPanel>
            <SplitterPanel className="flex flex-column align-items-center justify-content-center">
                <Panel header="Estadísticas" className="p-panel-urllist px-3 pt-3">
                    <div className='text-center mb-6'>
                        <div className='flex flex-column'>
                            <span className='text-2xl font-bold'>Ranking de países según casos de phishing detectados</span>
                            <Dropdown className="h-3rem mt-4 mb-4 text-align-left" value={selectedFilter} options={filteringOptions} onChange={onFilterChange} optionLabel="name" placeholder="Selecciona un filtro" />
                            <Chart className="m-auto" type="bar" data={barChart} />
                        </div>
                    </div>
                    <div className='text-center'>
                        <span className='text-2xl font-bold'>Gráfico de casos detectados reales</span>
                        <Chart className="p-piechart m-auto" type="pie" data={pieChart} />
                    </div>
                </Panel>
            </SplitterPanel>
        </Splitter >
    )
}

export default Statistics;
