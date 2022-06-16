import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../css/Home.css";
import { Card } from 'primereact/card';
import { ProgressBar } from 'primereact/progressbar';

const NoAvailable = (props) => {

    const getPercentage = () => {
        switch (props.hour) {
            case 2:
                return 0
            case 3:
                return 16.67
            case 4:
                return 33.33
            case 5:
                return 50
            case 6:
                return 66.67
            case 7:
                return 83.33
            case 8:
                return 100
            default:
                return 100
        }
    }

    return (
        <div className="flex flex-column align-items-center mt-5 w-full">
            <img className="p-logo-app" alt="logo" src="phishing-logo.png" height="300"></img>
            <span className="text-4xl mt-4">Phisheado</span>
            <div className="flex">
                <AnimationOnScroll animateIn="animate__bounceInLeft ">
                    <span className="p-eslogan mr-1">Tu phishing</span>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__bounceInRight animate__delay-1s ">
                    <span style={{ color: "red" }}>eliminado</span>
                </AnimationOnScroll>
            </div>
            <Card title="Horario de disponibilidad:" className='mt-5 text-center w-full md:w-5'>
                <p>El servicio estará activo de 8 AM a 2 AM (GMT+2). Disculpe las molestias.</p>
                <i class="pi pi-envelope"></i>
                <a style={{ textDecoration: "none" }} className="ml-2" href='mailto:phishingidentify@gmail.com'>phishingidentify@gmail.com</a>
                <ProgressBar className='mt-5' value={getPercentage()} />
            </Card>
        </div>
    )
}

export default NoAvailable;