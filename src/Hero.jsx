import heroImg from "./assets/hero.svg";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Omnis atque ullam molestiae dolor rem quia sunt
                        inventore. Mollitia rem est id inventore, minima
                        voluptatibus? Temporibus, neque?
                    </p>
                </div>
                <div className="img-container">
                    <img
                        src={heroImg}
                        alt="woman and the browser"
                        className="img"
                    />
                </div>
            </div>
        </section>
    );
};
export default Hero;
