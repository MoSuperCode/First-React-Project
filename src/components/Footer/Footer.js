import "./Footer.css";
import salat from "../../images/salat.jpeg";
import pizza from "../../images/pizza.jpeg";
import frikadelle from "../../images/frikadellen.jpeg";
import glass from "../../images/glass.jpeg";
import pizza2 from "../../images/pizza2.jpeg";
import scampi from "../../images/scampi.jpeg";
import spagetthi from "../../images/spagetthi.jpeg";
import teller from "../../images/teller.jpeg";

function Footer() {
    return (
        <footer className="footer">
            <section className="grid2x4">
                <figure>
                    <img src={salat}></img>
                    <figcaption>Fusce dictum finibus</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$45/$55</h2>
                </figure>
                <figure>
                    <img src={pizza}></img>
                    <figcaption>Aliquam sagittis</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$65/$70</h2>
                </figure>
                <figure>
                    <img src={frikadelle}></img>
                    <figcaption>Sed varius turpis</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$30.50</h2>
                </figure>
                <figure>
                    <img src={glass}></img>
                    <figcaption>Aliquam sagittis</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$25.50</h2>
                </figure>
                <figure>
                    <img src={pizza2}></img>
                    <figcaption>Maecenas eget justo</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$25.50</h2>
                </figure>
                <figure>
                    <img src={scampi}></img>
                    <figcaption>Quisque et felis eros</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$25.50</h2>
                </figure>
                <figure>
                    <img src={spagetthi}></img>
                    <figcaption>sed ultricies dui</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$25.50</h2>
                </figure>
                <figure>
                    <img src={teller}></img>
                    <figcaption>Donec porta consequat</figcaption>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Aenean</p>
                    <h2>$25.50</h2>
                </figure>
            </section>
        </footer >
    );
}


export default Footer;