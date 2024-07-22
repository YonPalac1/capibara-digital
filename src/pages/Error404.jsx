import MarqueeComponent from "../components/MarqueeComponent";

const Error404 = () => {
    return <header>
        <div className="container">
            <div className="title">
                <h2>Error <span className="resalt">404</span>.</h2>
                <p>Página no encontrada.</p>
            </div>
        </div>
        <MarqueeComponent />
    </header>
}
export default Error404;