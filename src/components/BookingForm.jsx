import { useState } from "react";

function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    service: "Airport Transfer",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";

    if (!formData.pickup.trim())
      newErrors.pickup = "Pickup location is required.";

    if (!formData.dropoff.trim())
      newErrors.dropoff = "Dropoff location is required.";

    if (!formData.date) newErrors.date = "Please select a date.";

    if (!formData.time) newErrors.time = "Please select a time.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Ride booked successfully!");

      setFormData({
        name: "",
        phone: "",
        pickup: "",
        dropoff: "",
        date: "",
        time: "",
        service: "Airport Transfer",
      });
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label>Passenger Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <p className="error">{errors.name}</p>

      <label>Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <p className="error">{errors.phone}</p>

      <label>Pickup Location</label>
      <input
        type="text"
        name="pickup"
        value={formData.pickup}
        onChange={handleChange}
      />
      <p className="error">{errors.pickup}</p>

      <label>Dropoff Location</label>
      <input
        type="text"
        name="dropoff"
        value={formData.dropoff}
        onChange={handleChange}
      />
      <p className="error">{errors.dropoff}</p>

      <label>Date</label>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <p className="error">{errors.date}</p>

      <label>Time</label>
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      <p className="error">{errors.time}</p>

      <label>Service</label>

      <select name="service" value={formData.service} onChange={handleChange}>
        <option>Airport Transfer</option>
        <option>City Ride</option>
        <option>Luxury Ride</option>
        <option>Corporate Travel</option>
      </select>

      <button type="submit">Book Ride</button>
    </form>
  );
}

export default BookingForm;
