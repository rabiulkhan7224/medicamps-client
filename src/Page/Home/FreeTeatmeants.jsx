import { useState } from 'react';
import doctor from '../../assets/freeaportmeant.webp'
import useAxiosPublic from '../../hooks/useAxiosPublic';
const FreeTeatmeants = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "", phone: "" });
    const [status, setStatus] = useState("");
    const axiosPublic = useAxiosPublic()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData('')
        try {
            const response = await axiosPublic.post("/free-tm-sendMail", formData);
            setStatus(response.data.message);
            setFormData({ name: "", email: "", message: "", phone: "" });

        } catch (error) {
            setStatus("Failed to send message.");
        }}




        return (
            <div>


                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src={doctor}
                            className="max-w-sm rounded-lg shadow-2xl shadow-white hover:shadow-primarycolor  " />
                        <div>
                            <h1 className="text-5xl font-bold">Apply for free treatmeants</h1>


                            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-2 mt-4">
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="input input-bordered input-md w-full max-w-xs" required />
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="input input-bordered input-md w-full max-w-xs" required />
                                <input type="number" name="phone" placeholder="Your Phone number" value={formData.phone} onChange={handleChange} className="input input-bordered input-md w-full max-w-xs" required />
                                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="textarea textarea-bordered textarea-md w-full max-w-xs" rows="4" required></textarea>
                                <button type="submit" className="btn bg-secondarycolor ">Send Message</button>

                            </form>
                            {status && <p className=" mt-4">{status}</p>}
                        </div>
                    </div>
                </div>

            </div>
        );
    };

    export default FreeTeatmeants;