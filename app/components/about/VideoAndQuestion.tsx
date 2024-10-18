"use client";
import Image from "next/image";
import React, { useState } from "react";
import videoWep from "/public/assets/images/about/video.webp";
import CrossMarquee from "../marquee/CrossMarquee";
import mittiQuestions from "@/mitti-video-questions.json";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";

interface IData {
  id: number;
  question: string;
  answer: string;
}

const data: IData[] = mittiQuestions;

const VideoAndQuestion = () => {
  return (
    <div className="bg-mitti-bodyColor">
      <CrossMarquee />
      <div className="mx-auto max-w-screen-2xl py-20">
        <Image
          src={videoWep}
          width={1100}
          height={300}
          alt="video_"
          className="h-96 w-full"
        />
        <QuestionSection />
      </div>
    </div>
  );
};

export default VideoAndQuestion;

const QuestionSection = () => {
  const [answerShow, setAnswerShow] = useState<null | number>(null);

  const handleDisplay = (showID: number) => {
    setAnswerShow((prevID) => (prevID === showID ? null : showID));
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-10">
      {data?.map((list) => (
        <div className="py-2" key={list.id}>
          <div
            className=" text-mitti-secondaryTextColor flex justify-between items-center cursor-pointer"
            onClick={() => handleDisplay(list.id)}
          >
            <h1 className="font-serif font-bold text-xl  py-4 border-b border-b-mitti-secondaryTextColor w-full">
              {list.question}
            </h1>
            <ArrowUpCircleIcon
              className={`             
                size-10 transition-all ease-linear duration-200
                ${answerShow === list.id ? "rotate-0" : " rotate-180"}`}
            />
          </div>
          {answerShow === list.id && (
            <p
              className={`
             text-xl text-mitti-paragraphColor py-2        
            ${answerShow == list.id ? "" : " -translate-y-96"}`}
            >
              {list.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};
