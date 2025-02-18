import doctor from '../../assets/freeaportmeant.webp'
const FreeTeatmeants = () => {
    return (
        <div>


            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={doctor}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <form className='grid md:grid-cols-2 gap-2'>
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
                            <input className="btn bg-secondarycolor" type="submit" value="Send Message" />
                        </form>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FreeTeatmeants;