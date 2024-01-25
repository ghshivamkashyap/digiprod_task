import React from "react";

const Map = () => {
  return (
    <div className="flex flex-col px-[10%] justify-center items-center">
      <div className="text-rose-50 font-semibold text-4xl py-6 text-center">
        Map Screen
      </div>
      <div className="w-full flex justify-center  rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6895.430200770246!2d75.69325609271537!3d30.216677849348915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910f8bd26a61ba3%3A0xa45e3a23dfc09f9b!2sSant%20Longowal%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1706201344998!5m2!1sen!2sin"
          width="1000"
          height="450"
        //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
