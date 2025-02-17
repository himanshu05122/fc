import React from 'react';

const Cards = () => {
  return (
    <>
     <div className=' '> 
     <h1 className='text-black-400 text-2xl mt-5  items-center text-center  '>
        Cheap Flight Tickets <span className='text-gray-600 text-2xl'>Prices are at FareClubs!</span>
      </h1>
     </div>

      <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 mt-10 mx-4 mr-20 ml-20 gap-5'>
        
        {/* Card 1 */}
        <div className="card bg-base-100 image-full w-full h-55 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGv5BV3XCf-uIqPL_BpNVBCvsZT2PPFCogtA&s"
              className="w-full h-55 object-cover rounded-lg"
              alt="Shoes"
            />
          </figure>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 image-full w-full h-55 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <figure>
            <img
              src="https://gos3.ibcdn.com/top-1569824183.jpg"
              className="w-full h-55 object-cover rounded-lg"
              alt="Shoes"
            />
          </figure>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 image-full w-full h-55 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <figure>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-EQb9e2AKAJKgDDvMJnpmTqplTzyMRJx8w&s"
              className="w-full h-55 object-cover rounded-lg"
              alt="Shoes"
            />
          </figure>
        </div>

        {/* Card 4 */}
        <div className="card bg-base-900 image-full object-contain w-full h-55 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <figure className="object-contain">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzlVR9yR4vBii20Kd9juIEA5DPEwHyB8_Mwg&s"
              className="w-full h-55 object-cover rounded-lg"
              alt="Shoes"
            />
          </figure>
        </div>

        {/* Card 5 */}
        <div className="card bg-base-100 image-full w-full h-55 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <figure>
            <img
              src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116-2662116.jpg&fm=jpg"
              className="w-full h-55 object-cover rounded-lg"
              alt="Shoes"
            />
          </figure>
        </div>

        {/* Card 6 */}
        <div className="card bg-base-100 image-full w-full h-55 shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
          <figure>
            <img
              src="https://plus.unsplash.com/premium_photo-1673971706769-13a9499e3794?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D"
              className="w-full h-55 object-cover rounded-lg"
              alt="Shoes"
            />
          </figure>
        </div>

      </div>

      <h1 className='text-black-400 text-2xl mt-5 items-center text-center'>
        Cheap Flight Tickets <span className='text-gray-600 text-2xl'>Prices are at FareClubs!</span>
      </h1>
    </>
  );
};

export default Cards;