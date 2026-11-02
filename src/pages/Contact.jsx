import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Shukriya ${form.name}! Aap ka message mil gaya.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" rows="4" value={form.message} onChange={handleChange} required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
