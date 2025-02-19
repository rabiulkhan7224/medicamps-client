import faqimg from '../../assets/faq.webp';
const FQA = () => {
    return (
        <div className='grid md:grid-cols-2 gap-2'>
            <div>
        <img src={faqimg} className='w-full rounded-lg shadow-2xl' alt="faq" />
            </div>
           
            <div className='flex flex-col items-center justify-center space-y-3 '>
            <div><p> <span className='bg-secondarycolor text-blue-600 p-1 rounded-sm ' >COMMON QUERIES</span></p></div>
                <h1 className='text-2xl md:text-4xl font-bold'>Asked Questions</h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">How can I find a medical camp near me?</div>
                <div className="collapse-content ">
                    <p>You can browse the list of upcoming medical camps on our website under the “available Camps” section. You can also filter by location and specialty to find the best camp for your needs.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium"> How do I register for an account and log in?</div>
                <div className="collapse-content">
                    <p>Click the "Register" button, fill in your details, and create an account. Once registered, use your email and password to log in. You can also sign in with Google for quick access.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Is free treatment available for everyone?</div>
                <div className="collapse-content">
                    <p>Yes, free treatment is available for eligible patients. You need to apply for free treatment through the application form on our website. Our team will review your request and notify you via email if you qualify.</p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default FQA;