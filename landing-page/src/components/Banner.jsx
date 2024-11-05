import React from "react";
import imageBanner from "/public/development-4536630_1280.png";

function Banner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
        <section className="flex flex-col items-center justify-center gap-7 ">
        <div className="text-3xl text-white font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas,
            sapiente.
        </div>
        <div className="text-xl text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            voluptatum.
        </div>
        <video className="h-[600px]" src="https://ik.imagekit.io/ikmedia/example_video.mp4" 
            autoPlay
            muted
            playsInline
            loop
        />
        </section>
    </div>
  );
}

export default Banner;
