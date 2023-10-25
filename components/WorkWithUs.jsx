import Image from "next/image";
import React from "react";

const WorkWithUs = () => {
  return (
    <div className="flex h-screen relative gap-8 py-16 bg-violet-200 rounded-lg px-32 mx-8">
      <div className="flex sticky basis-1/2 flex-col gap-8 p-4">
        <p className="text-4xl font-bold">Work with us</p>
        <div className="flex flex-col my-4 w-[80%] gap-4">
          <div className="flex flex-col gap-2 bg-white p-8 rounded-lg">
            <Image src="/ghost.png" alt="ghost" height={50} width={50} />
            <p className="text-xl font-bold">About</p>
            <p className="text-md w-[80%]">
              At ahead, our goal is to make self-improvement fun and lasting. We
              know there&apos;s a way how to make it work. And that&apos;s what
              ahead is all about!
            </p>
          </div>
        </div>
        <div className="flex -mt-16 w-[80%] flex-col gap-4">
          <div className="flex flex-col gap-2 bg-yellow-100 p-8 rounded-lg">
            <p className="text-xl font-bold">Product</p>
            <p className="text-md w-[80%]">
              Sure you can spend ages on reading books or sitting in seminars on
              how to become a better spouse, parent, or manager - like we did...
            </p>
          </div>
        </div>
      </div>
      <div className="flex basis-1/2 flex-col gap-8 p-4 items-end justify-items-end">
        <p className="text-4xl font-bold text-violet-600">ahead</p>
        <div className="h-screen p-4 overflow-y-scroll flex flex-col gap-8">
          <div className="flex flex-col justify-items-end items-end">
            <div className="bg-white rounded-lg p-8 w-[80%] flex flex-col gap-4">
              <p className="font-bold text-lg">
                Power through, even though the going gets tough.
              </p>
              <p className="text-md">
                We help you spot and work around whatever stands in the way, be
                it bad habits, fears, etc.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-items-end items-end flex-wrap gap-8">
            <div className="bg-white rounded-lg p-8 w-[80%] flex flex-col gap-4">
              <p className="font-bold text-lg">
                Learn more about who you are and where you want to go.
              </p>
              <p className="text-md">
                We ask questions to help you better understand why you do things
                the way you do.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-items-end items-end flex-wrap gap-8">
            <div className="bg-white rounded-lg p-8 w-[80%] flex flex-col gap-4">
              <p className="font-bold text-lg">
                Play and grow together with the others on the same journey.
              </p>
              <p className="text-md">
                Ahead feels like a game, not like a chore. See yourself grow
                everyday towards achieving your goals.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-items-end items-end flex-wrap gap-8">
            <div className="bg-white rounded-lg p-8 w-[80%] flex flex-col gap-4">
              <p className="font-bold text-lg">
                Master how to make it happen in real life.
              </p>
              <p className="text-md">
                We support you towards ninja-level skills with sleek tools such
                as dry-runs, quizzes and flashcards.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-items-end items-end flex-wrap gap-8">
            <div className="bg-white rounded-lg p-8 w-[80%] flex flex-col gap-4">
              <p className="font-bold text-lg">
                Learn about practical skills that you can actually use in real
                life.
              </p>
              <p className="text-md">
                We teach you smart psychological techniques and habit-forming
                strategies that are easy to apply.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-items-end items-end flex-wrap gap-8">
            <div className="bg-white rounded-lg p-8 w-[80%] flex flex-col gap-4">
              <p className="font-bold text-lg">
                Get support that&apos;s made for your needs.
              </p>
              <p className="text-md">
                We build your personal roadmap of lessons and actions towards
                your goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
