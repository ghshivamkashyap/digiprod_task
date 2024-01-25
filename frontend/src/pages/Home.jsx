// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Home = () => {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     async function getAllImages() {
//       try {
//         const res = await fetch(
//           "https://digiprod.onrender.com/api/getallimages"
//         );
//         if (res.ok) {
//           const data = await res.json();
//           setImages(data.data);
//           console.log("images are -", data.data);
//         } else {
//           console.error("Error in fetching images");
//         }
//       } catch (error) {
//         console.error("Error in fetching images:", error);
//       }
//     }
//     getAllImages();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className=" flex flex-col ">
//       <div className=" text-rose-50 font-semibold text-4xl py-6 justify-center  text-center items-center ">
//       Carousal Screen-1
//       </div>
//       <Slider className=" p-4 rounded-sm " {...settings}>
//         {images.map((image, index) => (
//           <div key={index} className="relative">
//             <img
//               src={image.image}
//               className="block w-full h-[400px] object-cover"
//               alt={`image ${image?.name}`}
//             />
//             {/* Add your content here if needed */}
//             <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
//               <h5 className="text-xl">{`Slide ${index + 1} label`}</h5>
//               <p>{`Some representative placeholder content for slide ${
//                 index + 1
//               }.`}</p>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BottomNavigation from "../components/BottomNavigation";

const Home = () => {
  const [images, setImages] = useState([]);
  const sliderRef = React.createRef();

  useEffect(() => {
    async function getAllImages() {
      try {
        const res = await fetch(
          "https://digiprod.onrender.com/api/getallimages"
        );
        if (res.ok) {
          const data = await res.json();
          setImages(data.data);
          console.log("images are -", data.data);
        } else {
          console.error("Error in fetching images");
        }
      } catch (error) {
        console.error("Error in fetching images:", error);
      }
    }
    getAllImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="flex overflow-clip flex-col">
      <div className="text-rose-50 font-semibold text-4xl py-6 justify-center text-center items-center">
        Carousal Screen-1
      </div>
      <Slider ref={sliderRef} className="p-4 rounded-sm" {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.image}
              className="block  w-full h-[450px] object-contain"
              alt={`image ${image?.name}`}
            />
            {/* Add your content here if needed */}
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
              <h5 className="text-xl">{`Slide ${index + 1} label`}</h5>
              <p>{`Some representative placeholder content for slide ${
                index + 1
              }.`}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex justify-center mt-4">
        <button
          onClick={goToPrev}
          className="mr-4 px-4 py-2 bg-gray-500 text-white"
        >
          Previous
        </button>
        <button onClick={goToNext} className="px-4 py-2 bg-blue-500 text-white">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
