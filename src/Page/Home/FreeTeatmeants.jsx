import doctor from '../../assets/freeaportmeant.webp'
const FreeTeatmeants = () => {
    return (
        <div>
            <div className='flex items-center '>
                <div className='w-2/5 h-screen'>
                    <img src={doctor} alt="doctor" />
                </div>
                <div>
                    <form>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-md w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-md w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-md w-full max-w-xs" />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-md w-full max-w-xs" />
                            <input type="submit" value="Send Message" />
                            </form>
                </div>
            </div>

        </div>
    );
};

export default FreeTeatmeants;