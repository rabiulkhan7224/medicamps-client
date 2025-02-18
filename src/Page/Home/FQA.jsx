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
                <div className="collapse-title text-xl font-medium">Where Can I Go To Provide A Sample For Testing?</div>
                <div className="collapse-content ">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What happens to my sample once I have provided it?</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">What happens to my sample once I have provided it?</div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
            </div>
            </div>

        </div>
    );
};

export default FQA;