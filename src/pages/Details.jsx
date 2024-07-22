import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";

import MarqueeComponent from "../components/MarqueeComponent";
import { PLANS } from "../constants/constants";
import circle from "../images/circle_text.png";
import FormContact from "../components/Forms";


const Details = () => {
    const { type } = useParams();
    const [load, setLoad] = useState(true);
    const [item, setItem] = useState([]);

    useEffect(() => {
        setLoad(true)
        const searchParams = async () => {
            await setItem(PLANS.filter(a => a.type === type))

            setLoad(false)
        }
        searchParams();
    }, [type])

    return <section className="details">
        <header>
            <div className="container">
                <div className="title">
                    <h1>Comentanos sobre tus <span className="resalt">ideas</span>.</h1>
                    <p>Llena el formulario y veamos como podemos asistir a tus necesidades. Me contactaré a la brevedad!</p>
                </div>
            </div>
        </header>
        <MarqueeComponent />

        <div className="details_forms">
            <div className="container">
                {load ?
                    <div className="circle_text">
                        <img src={circle} alt="capivara digital"></img>
                        <p>Cargando...</p>
                    </div>
                    :
                    <>
                        <div className="cards">
                            <div className="card">
                                <h3>{item[0].type}</h3>
                                <p>{item[0].service}</p>
                                <div className="options">
                                    {
                                        item[0].options?.map((item, i) => {
                                            return <span key={i}>{item}</span>
                                        })
                                    }
                                    <h4>{item[0].price}</h4>
                                </div>
                            </div>
                        </div>
                        <FormContact type={item[0].type} load={load} />
                    </>
                }
            </div>
        </div>
    </section>
}
export default Details;