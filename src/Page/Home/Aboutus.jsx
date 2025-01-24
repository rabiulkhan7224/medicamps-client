import React from 'react';

const Aboutus = () => {
    return (
        <section className="bg-base-100 text-base-content py-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 text-accentcolor">About Us</h1>
            <p className="text-lg mb-6">
              At <span className="font-bold text-primarycolor">Medi Camps</span>, we are dedicated to promoting health awareness and creating opportunities for communities to access quality healthcare. Our mission is to provide health services, education, and resources to those in need, bridging the gap between individuals and the care they deserve.
            </p>
          </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Card 1 */}
            <div className="card  shadow-xl">
              <div className="card-body text-center">
                <h2 className="card-title text-lg text-primary">Our Mission</h2>
                <p className="text-sm">
                  To empower communities with the knowledge and tools they need to live healthier lives through accessible and affordable health camps.
                </p>
              </div>
            </div>
    
            {/* Card 2 */}
            <div className="card  shadow-xl">
              <div className="card-body text-center">
                <h2 className="card-title text-lg text-primary">Our Vision</h2>
                <p className="text-sm">
                  A world where every individual has access to the care they need, fostering a culture of health, wellness, and awareness for all.
                </p>
              </div>
            </div>
    
            {/* Card 3 */}
            <div className="card  shadow-xl">
              <div className="card-body text-center">
                <h2 className="card-title text-lg text-primary">Our Values</h2>
                <p className="text-sm">
                  Compassion, accessibility, and a commitment to excellence drive every decision we make, ensuring the best for our communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default Aboutus;