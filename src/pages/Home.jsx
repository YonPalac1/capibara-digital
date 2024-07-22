
import capy from "../images/capy_dig.png";
import trello from "../images/trello.png";

import Services from "../components/Services";
import Cards from "../components/Cards";
import Works from "../components/Works";

import { SERVICES_CONSTANT, PLANS, WORKS } from "../constants/constants";
import MarqueeComponent from "../components/MarqueeComponent";

const Home = () => {
    return <>
    <header>
        <div className="container">
            <div className="title">
                <h1>Lleva tu negocio al <span className="resalt">siguiente nivel</span> con un sitio <span className="resalt">web</span> profesional<span className="resalt">.</span></h1>
                <p>Quieres un sitio web moderno y atractivo? ¡Lo podemos hacer!</p>
                <a className="link_to_talk">agenda una consulta</a>
            </div>
            <div className="capy">
                <img src={capy} alt="capivara digital desarrollo web"></img>
            </div>
        </div>
    </header>

    <MarqueeComponent />

    <section className="sketch">
        <div className="container">
            <div>
                <h2>invierte en tu <span className="resalt">éxito</span> elige el plan <span className="resalt">ideal</span>.</h2>
                <p>Precios que te sorprenderán, resultados que te encantarán.</p>
            </div>
        </div>
    </section>

    <section className="container">
        <div className="cards" id="plans">
            {
                PLANS?.map((item, i) => {
                    return <Cards 
                    key={i} 
                    type={item.type} 
                    service={item.service} 
                    options={item.options}
                    price={item.price}
                    reserve={item.reserve}
                    />
                })
            }
        </div>
    </section>

    <section className="services" id="services">
        {
            SERVICES_CONSTANT?.map((item, i) => {
                return <Services key={i} n={item.i} title={item.title} para={item.paragraph} type={item.type} />
            })
        }
    </section>

    <Works works={WORKS} />

    <section className="sketch ">
        <div className="container">
            <div  className="title">
                <h2>como <span className="resalt">trabajamos</span>?</h2>
                <p> nos encanta mantenerte informado sobre el progreso de tu proyecto web. Por eso, utilizamos <span className="resalt">Trello</span>, una herramienta que nos permite:</p>
            </div>
            <div className="trello_section">
                <div className="trello_ventages">
                    <div>
                        <h4><span className="resalt">Organizar las tareas:</span></h4>
                        <p>Cada paso del proyecto tendrá su propia tarjeta en Trello, para que puedas ver claramente en qué estamos trabajando y cuándo estará listo.</p>
                    </div>
                    <div>
                        <h4><span className="resalt">Comunicación transparente:</span></h4>
                        <p>Podrás comentar en las tarjetas, adjuntar archivos y hacer preguntas en cualquier momento. ¡Todo el equipo estará al tanto!</p>
                    </div>
                    <div>
                        <h4><span className="resalt">Visualización del progreso:</span></h4>
                        <p>Verás el avance del proyecto en tiempo real, ya que movemos las tarjetas entre columnas según su estado (por ejemplo, "En desarrollo", "En revisión", "Listo").</p>
                    </div>
                </div>
                <div className="trello">
                    <img src={trello} alt="trello cards"></img>
                </div>
            </div>

            <div className="trello_cards">
                <div className="trello_card">
                    <h3>¿Como funciona?</h3>
                    <hr />
                    <div>
                        <h4><span className="resalt">1.</span> Te crearemos un tablero:</h4>
                        <p>Una vez iniciado el proyecto, te invitaremos a un tablero de Trello compartido.</p>
                    </div>
                    <div>
                        <h4><span className="resalt">2.</span> Verás las tarjetas:</h4>
                        <p>Cada tarea tendrá su propia tarjeta, con información detallada como título, descripción, responsables y fecha límite.</p>
                    </div>
                    <div className="comments">
                        <h4><span className="resalt">3.</span> ¡Comunica y participa!:</h4>
                        <p>Puedes comentar en las tarjetas, adjuntar archivos, hacer preguntas y seguir el progreso del proyecto en tiempo real.</p>
                    </div>
                </div>
                <div className="trello_card">
                    <h3>Beneficios para ti:</h3>
                    <hr />
                    <div>
                        <h4><span className="resalt">*</span> Comunicación clara y transparente:</h4>
                        <p>Siempre sabrás en qué estamos trabajando y cuándo estará listo.</p>
                    </div>
                    <div>
                        <h4><span className="resalt">*</span> Acceso a la información:</h4>
                        <p>Consulta el estado del proyecto, deja comentarios y participa en cualquier momento.</p>
                    </div>
                    <div>
                        <h4><span className="resalt">*</span> Mayor organización:</h4>
                        <p>El proyecto estará dividido en tareas claras y fáciles de seguir.</p>
                    </div>
                    <div>
                        <h4><span className="resalt">*</span> Agilidad y eficiencia:</h4>
                        <p>Nos comunicaremos de forma rápida y efectiva para que tu proyecto avance sin problemas.</p>
                    </div>
                </div>
            </div>
            <h3 className="agile">¡Adoptamos una metodología ágil y transparente para que tu proyecto web sea un éxito!</h3>
        </div>
    </section>

</>
}
export default Home;