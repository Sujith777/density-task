import React from "react";

const Privacy = () => {
  return (
    <div className="w-full h-screen text-center p-16 flex justify-center items-center">
      <div className="text-lg flex flex-col justify-center items-center gap-4">
        <p>We take privacy seriously</p>
        <p className="text-3xl font-bold">Before you get started</p>
        <p>
          &ldquo;We won&apos;t share your answers with anyone (and won&apos;t
          ever tell you which friend said what about you.)&rdquo;
        </p>
        <p className="my-4">with love, Team Ahead.</p>
        <button className="rounded-full bg-black text-white py-2 px-4">
          Start a test
        </button>
        <p className="text-zinc-800 text-sm">Take only 5 minutes</p>
      </div>
    </div>
  );
};

export default Privacy;
