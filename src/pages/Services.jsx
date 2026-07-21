import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <section>
      <h1>Our Services</h1>

      <div className="card-grid">
        <ServiceCard
          icon="✈️"
          title="Airport Transfer"
          description="Reliable transportation to and from the airport."
        />

        <ServiceCard
          icon="🏙️"
          title="City Ride"
          description="Quick transportation anywhere around town."
        />

        <ServiceCard
          icon="💼"
          title="Corporate Travel"
          description="Professional transportation for business travelers."
        />

        <ServiceCard
          icon="🚘"
          title="Luxury Ride"
          description="Premium vehicles for special occasions."
        />
      </div>
    </section>
  );
}

export default Services;
