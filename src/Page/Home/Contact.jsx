import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const axiosPublic=useAxiosPublic()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPublic.post("/send-contact-email", formData);
            setStatus(response.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send message.");
        }
    };

    return (
        <section id="contact" className="container mx-auto p-10 text-center">
            {/* wpsn plpy ydxe uigv */}
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="mt-4">Have questions? Reach out to us anytime.</p>
        <form onSubmit={handleSubmit} className="mt-6">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-2 border rounded w-full mb-4" required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-2 border rounded w-full mb-4" required />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="p-2 border rounded w-full mb-4" rows="4" required></textarea>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded shadow-md">Send Message</button>
            {status && <p className="mt-4">{status}</p>}
        </form>
      </section>
    );
};

export default Contact;