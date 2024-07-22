import { useState } from "react";

const Works = ({works}) => {
    const [array, setArray] = useState(works)

    const handleValue = (e) => {
        if (e.target.value === "todos") return setArray(works) 
        setArray(works.filter(a => a.type === e.target.value))
    }


    return <>
        <section className="container works" id="works">
            <div className="title">
                <h2>llevando tu <span className="resalt">negocio</span> al siguiente <span className="resalt">nivel</span>.</h2>
                <p>nuestro trabajo en acción.</p>
            </div>
            <div className="tags">
                <button onClick={handleValue} value="todos">todos</button>
                <button onClick={handleValue} value="web">páginas web</button>
                <button onClick={handleValue} value="aplicaciones">aplicaciones</button>
                <button onClick={handleValue} value="tiendas">tiendas</button>
            </div>
        </section>

        <section className="works_img container">
            {
                array?.map((item, i) => {
                    return <img src={item.img} alt={item.type} key={i} />
                })
            }
        </section></>
}
export default Works;