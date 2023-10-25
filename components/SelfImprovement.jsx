import Image from "next/image";
import React from "react";

const SelfImprovement = () => {
  return (
    <div className="flex h-screen flex-col gap-20 relative mx-8 p-16">
      <div className="flex flex-col gap-4">
        <p className="text-lg">
          What&apos;s wrong with self-improvement & how we&apos;re fixing it
        </p>
        <div className="flex gap-4">
          <p className="text-4xl font-bold">Self-Improvement. Ugh</p>
          <Image
            className="object-cover rotate-45 rounded-full"
            src="/ghost.png"
            alt="ghost"
            height={50}
            width={50}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto h-[60%] overflow-auto w-[40%]">
        <ul className="list-disc flex flex-col gap-8">
          <li>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">
                It&apos;s not as easy as 1-2-3.
              </p>
              <p className="text-md">
                The journey of change may be long, but our sessions are quick.
                We get to the point and tell you what you want to know. (And
                nothing else.)
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">Old habits are hard to break.</p>
              <p className="text-md">
                And bad habits die hard. Fortunately, we give you great,
                science-backed techniques to use.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">
                You and your motivation don&apos;t have a long-term
                relationship.
              </p>
              <p className="text-md">
                Luckily, we can proactively prepare you for the marathon, not
                just the race. Effective, memorable exercises will help you
                stick to your goals.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">
                Books just don&apos;t offer practical experience.
              </p>
              <p className="text-md">
                Remember when you learned a bike just by reading? Yeah, we
                don&apos;t either. We help you take concrete small steps towards
                your goals. Learning just a bit, and then immediately springing
                into action.
              </p>
            </div>
          </li>
          <li>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">
                Inspiration is great, but then what?
              </p>
              <p className="text-md">
                We make sure the energy from all the content you consume does
                not fizzle out.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="flex gap-8 px-8">
        <div className="flex basis-1/3">
          <p className="text-2xl font-bold">Be the best you with EQ</p>
        </div>
        <div className="flex basis-1/3 w-[60%]">
          <p className="text-lg text-gray-700">
            Not having your own emotions in control might be holding you back.
          </p>
        </div>
        <div className="flex basis-1/3">
          <p className="text-lg text-gray-700">
            Additionally not understanding those of others stops you from being
            the parent, friend you can be.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelfImprovement;
