import { useState } from 'react';
import doctor from '../../assets/freeaportmeant.webp'
import useAxiosPublic from '../../hooks/useAxiosPublic';
const FreeTeatmeants = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const axiosPublic=useAxiosPublic()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPublic.post("/free-tm-sendMail", formData);
            setStatus(response.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setStatus("Failed to send message.");
        }
    };



    return (
        <div>


            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={doctor}
                        className="max-w-sm rounded-lg shadow-2xl shadow-white hover:shadow-primarycolor  " />
                    <div>
                        <h1 className="text-5xl font-bold">Apply for free treatmeants</h1>
                        <form className='grid md:grid-cols-2 gap-2 mt-4'>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered input-md w-full max-w-xs" />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered input-md w-full max-w-xs" />
                            <input
                                type="number"
                                placeholder="Your Phone number"
                                className="input input-bordered input-md w-full max-w-xs" />
                            <textarea
                                placeholder="write here"
                                className="textarea textarea-bordered textarea-md w-full max-w-xs"></textarea>
                            <input className="btn bg-secondarycolor" type="submit" value="Send Message" />
                        </form>
                        {status && <p className="text-green-600 mt-4">{status}</p>}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FreeTeatmeants;