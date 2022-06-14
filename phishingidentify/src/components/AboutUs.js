import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "../css/Aboutus.css";

const AboutUs = () => {
    return (
        <div className='p-4'>
            <AnimationOnScroll animateIn="animate__bounceInLeft ">
                <div className="grid grid-nogutter surface-0 text-800">
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            <div className="text-6xl text-primary font-bold mb-3">Nuestro objetivo</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">
                                Debido a que el uso de Internet se ha visto incrementado desde sus inicios de forma exponencial,
                                existen ahora más usuarios vulnerables a posibles ataques informáticos.
                                Una de los amenazas más conocidas a nivel mundial es el <b>phishing</b>,
                                una técnica usada por ciberdelicuentes para obtener datos personales de un individuo, como su número de cuenta bancaria.
                                Este método de estafa está tan presente en la actualidad que es extraño encontrar a una persona que no haya recibido en
                                algún momento un mensaje con este propósito maligno.
                            </p>
                            <p className="mt-0 mb-4 text-700 line-height-3">
                                De este modo, nuestro objetivo consistirá en la creación de un sistema capaz de detectar casos de phishing basado en la
                                detección automática para evitar situaciones no deseadas.
                            </p>
                        </section>
                    </div>
                    <div className="col-12 md:col-6 overflow-hidden">
                        <img src="arco.jpeg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                    </div>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__bounceInRight ">
                <div className="grid grid-nogutter surface-0 text-800 mt-8">
                    <div className="col-12 md:col-6 overflow-hidden">
                        <img src="us.jpeg" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(0 0, 92% 0, 100% 100%, 0% 100%)' }} />
                    </div>
                    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                        <section>
                            <div className="text-6xl text-primary font-bold mb-3">Nuestra historia</div>
                            <p className="mt-0 mb-4 text-700 line-height-3">
                                Somos dos estudiantes de la Universidad de Sevilla, cursando el último año del grado de Ingeniería Informática - Ingeniería del Software.
                                Gracias a nuestro espíritu autodidacta y gran interés en el ámbito de la Inteligencia Artificial y la seguridad informática, decidimos
                                realizar un Trabajo Fin de Grado que mantuviese relación con ambas temáticas. De esta forma surgió Phishing Alert, "insertar eslogan".
                            </p>
                        </section>
                    </div>
                </div>
            </AnimationOnScroll>
            <div className='text-center mt-8'>
                <div className="text-6xl text-primary font-bold mb-3">¿Quiénes somos?</div>
                <div className='p-photos flex justify-content-center'>
                    <Card title="María Isabel Ramos" className="mr-4" style={{ width: '25rem', marginBottom: '2em' }}>
                        <Image src="Maribel.jpeg" alt="Image" width="250" />
                        <p className="m-0 mt-3" style={{ lineHeight: '1.5' }}>
                            ¡Accede a mi perfil de Github! <br></br>
                            <i class="pi pi-github"></i>
                            <a className="ml-2" href='https://github.com/maribelrb22' style={{ color: '#000000', textDecoration: 'none' }}>github.com/maribelrb22</a>
                        </p>
                    </Card>
                    <Card title="Javier Vilariño" style={{ width: '25rem', marginBottom: '2em' }}>
                        <Image src="Javi.jpeg" alt="Image" width="250" />
                        <p className="m-0 mt-3" style={{ lineHeight: '1.5' }}>
                            ¡Accede a mi perfil de Github! <br></br>
                            <i class="pi pi-github"></i>
                            <a className="ml-2" href='https://github.com/javivm17' style={{ color: '#000000', textDecoration: 'none' }}>github.com/javivm17</a>
                        </p>
                    </Card>
                </div>
            </div>
        </div >
    )
}
export default AboutUs