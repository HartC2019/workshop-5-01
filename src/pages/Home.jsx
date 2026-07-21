import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <>
      <Hero />

      <section className="features">
        <h2>Why Choose Us?</h2>

        <div className="card-grid">
          <ServiceCard
            icon="🚖"
            title="Professional Drivers"
            description="Experienced drivers focused on safety and customer service."
          />

          <ServiceCard
            icon="🕒"
            title="24/7 Availability"
            description="Book transportation any time, day or night."
          />

          <ServiceCard
            icon="💰"
            title="Affordable Rates"
            description="Competitive pricing without sacrificing quality."
          />

          <ServiceCard
            icon="⭐"
            title="Trusted Service"
            description="Reliable transportation trusted by our customers."
          />
        </div>
      </section>
    </>
  );
}

export default Home;
