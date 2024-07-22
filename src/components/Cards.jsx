import arrow from "../images/arrow.png"

const Cards = ({type, service, options, price, reserve}) => {
    return <div className="card">
        <h3>{type}</h3>
        <p>{service}</p>
        <div className="options">
        {
            options?.map((item, i) => {
                return <span key={i}>{item}</span>
            })
        }
        <h4>{price}</h4>
        <a href={`/details/${type}`}>reservar este plan</a>
        </div>
    </div>
}

export default Cards;