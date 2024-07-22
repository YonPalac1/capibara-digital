import Marquee from "react-fast-marquee";
import star from "../images/star.png";

import { SERVICES_CONSTANT } from "../constants/constants";

const MarqueeComponent = ({services}) => {
    return <section className="marquee">
    <Marquee direction="right">
        {
            SERVICES_CONSTANT?.map((item, i) => {
                return <div className="items" key={i}>
                    <h2>{item.title}</h2>
                    <img src={star}></img>
                </div>
            })
        }
    </Marquee>
    <Marquee>
        {
            SERVICES_CONSTANT?.map((item, i) => {
                return <div className="items" key={i}>
                    <h2>{item.title}</h2>
                    <img src={star}></img>
                </div>
            })
        }
    </Marquee>
</section>
}
export default MarqueeComponent;