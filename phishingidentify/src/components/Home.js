import { Card } from 'primereact/card';
import "../css/Home.css";
import { useNavigate } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {
    const navigate = useNavigate();

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
            <div className="flex p-card-container mt-7 text-center">
                <Card className="mb-5 mr-4 ml-4 p-container text-center p-card-home m-auto">
                    <img className="p-image" alt="analyse" src="analyse.png" height="100"></img>
                    <div className="p-overlay" onClick={() => {
                        navigate("/analyse")
                    }}>
                        <div className="p-text">Analizar</div>
                    </div>
                </Card>
                <Card className="mb-5 mr-4 ml-4 p-container text-center p-card-home m-auto">
                    <img className="p-image" alt="analyse" src="statistics.png" height="100"></img>
                    <div className="p-overlay" onClick={() => {
                        navigate("/statistics")
                    }}>
                        <div className="p-text">Estadísticas</div>
                    </div>
                </Card>
                <Card className="mb-5 mr-4 ml-4 p-container text-center p-card-home m-auto">
                    <img className="p-image" alt="analyse" src="contact.png" height="100"></img>
                    <div className="p-overlay" onClick={() => {
                        navigate("/contact")
                    }}>
                        <div className="p-text">Conócenos</div>
                    </div>
                </Card>
            </div>
        </div >
    );
}

export default Home;