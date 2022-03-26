import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import "../css/UrlList.css";
import urls from "./urls.json";

const UrlCard = ({ domain, frequency, country }) => {
    return (
        <Card className="pb-3">
            <div className="flex flex-column">
                <span><strong>Dominio:</strong> {domain}</span>
                <span><strong>Frecuencia de aparición:</strong> {frequency}</span>
                <span><strong>Países de aparición:</strong> {country}</span>
            </div>
        </Card>
    );
}

const UrlList = () => {
    return (
        <Panel header="URL's consideradas como phishing" className="pl-3">
            {urls.map((urlsProps) => (
                <UrlCard {...urlsProps}></UrlCard>
            ))}
        </Panel>
    )
}

export default UrlList;
