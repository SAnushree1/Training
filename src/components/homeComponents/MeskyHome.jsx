import React from "react";

const MeskyHome = () => {
  return (
    <div className=" text-white bg-warm-red flex flex-col items-center w-full">
        <div className="p-10 max-w-4xl text-center">
            <h1 className="font-bold text-3xl p-5">You know the world can be a healthier, cleaner place</h1>
            <p>We know deep inside that what we consume, makes us who we are. Foods, skincare, reading, videos, the people we know. Thus we strive each day to learn more about what we eat, what we use and who we meet. So do I.</p>
        </div>
        <div className="flex justify-center">
            <img src="assets/meskyHome.png" alt="mesky title image" />
        </div>
    </div>
  );
};

export default MeskyHome;