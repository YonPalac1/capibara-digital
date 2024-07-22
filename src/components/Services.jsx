const Services = ({n, title, para, type}) => {
    return <a href={`/service/${type}`}>
        <div className="container">
            <span>{n}</span>
            <h3>{title}</h3>
            <p>{para}</p>
            
            <div className="arrow_div">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.9851 16.7134L28.1333 28.6449M28.1333 28.6449L16.2018 28.7931M28.1333 28.6449L14.0403 14.8977" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    </a>
}
export default Services;