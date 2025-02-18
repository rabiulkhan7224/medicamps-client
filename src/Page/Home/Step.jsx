
const Step = () => {
    return (
        <section className=" p-10 text-center">
        <h2 className="text-3xl font-bold">Our Working Best Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 container mx-auto">
          <div className="bg-base-100 p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold">Step 1</h3>
            <p className="mt-2">Register and set up your medical camp effortlessly.</p>
          </div>
          <div className="bg-base-100 p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold">Step 2</h3>
            <p className="mt-2">Efficiently manage volunteers and participants for smooth operations.</p>
          </div>
          <div className="bg-base-100 p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold">Step 3</h3>
            <p className="mt-2">Ensure medical supplies and logistics are in place before the event.</p>
          </div>
          <div className="bg-base-100 p-6 shadow-md rounded-md">
            <h3 className="text-xl font-bold">Step 4</h3>
            <p className="mt-2">Analyze outcomes and improve future medical camps efficiently.</p>
          </div>
        </div>
      </section>
    );
};

export default Step;