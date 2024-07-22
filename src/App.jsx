import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Error404 from "./pages/Error404";
import Service from "./pages/Service";

import capy_icon from "./images/capy_dig.png";
import icon from "./images/icon.png";
import trama from "./images/trama.webp";
import circle from "./images/circle_text.png";

const App = () => {
    const [menu, setMenu] = useState(false);

    return (<>
        <BrowserRouter>
            <nav>
                <div className="container">
                    <a href="/" className="icon">
                        <img src={icon} alt="capibara digital icono" />
                    </a>

                    <div className="burguer">
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" onClick={() => setMenu(!menu)}>
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ffffff" />
                        </svg>
                        {
                            menu ?
                        <div className="menu_burguer">
                            <a href="#plans">Planes</a>
                            <a href="#services">Servicios</a>
                            <a href="#works">Trabajos</a>
                            <a href="#contact">Contacto</a>
                        </div>
                        : <></>
                        }
                    </div>

                    <div className="menu">
                        <a href="#plans">Planes</a>
                        <a href="#services">Servicios</a>
                        <a href="#works">Trabajos</a>
                        <a href="#contact">Contacto</a>
                    </div>
                </div>
            </nav>

            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/details/:type?" element={<Details />} />
                <Route exact path="/service/:type?" element={<Service />} />
                <Route path="*" element={<Error404 />} />
            </Routes>

            <section className="container contact" id="contact">
                <img src={trama} className="img_bg"></img>
                <div className="title">
                    <h2>Alguna <span className="resalt">pregunta</span> para nosotros?</h2>
                    <p>Escribenos directamente y charlemos!</p>
                </div>

                <div className="social">
                    <svg fill="#04e52a" height="30px" width="30px" version="1.1" id="Capa_1"
                        viewBox="0 0 75.294 75.294" xmlSpace="preserve">
                        <g>
                            <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9
            c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089
            H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065
            c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016
            c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102
            c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069
            c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"/>
                        </g>
                    </svg>
                    <a href="mailto:capibara-digital@gmail.com" target="_blank">
                        milangadev@gmail.com
                    </a>
                </div>
                <div className="social">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="#04e52a" >
                        <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#04e52a" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#04e52a" />
                    </svg>
                    <a href="https://wa.me/+5491139366942" target="_blank">
                        +54 11-3936-6942 (arg)
                    </a>
                </div>

                <div className="circle_text">
                    <img src={circle} alt="capivara digital"></img>
                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.9851 16.7134L28.1333 28.6449M28.1333 28.6449L16.2018 28.7931M28.1333 28.6449L14.0403 14.8977" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </section>

            <footer className="container footer">
                <p>Copyright @ 2024 Milanga Digital. All right reserved</p>
            </footer>
        </BrowserRouter>

    </>
    )
}
export default App;