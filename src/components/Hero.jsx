import { Link } from "react-router";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Book Your Ride Today</h1>

        <p>
          Safe, reliable, and affordable transportation available whenever you
          need it.
        </p>

        <Link to="/booking" className="hero-btn">
          Book a Ride
        </Link>
      </div>
    </section>
  );
}

export default Hero;
