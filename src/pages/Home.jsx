import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import StoryPage3 from "../sections/story/StoryPage3";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import WordFlipBox from "../sections/alphabet/WordFlipBox";
import VideoCard from "../sections/alphabet/VideoCard";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-center rounded my-2 mx-1" style={{color:" #772245"}}>بچه ها فیلم زیر را ببینند و فارسی آن را یاد بگیرند. داستان را دو خط اول را خواندیم ، آن را بخوانند .</h4>
      {/* <WordFlipBox/> */}
      <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/bigThings.mp4`}  // فقط اسم فایل ویدیوی mp4
      />

    {/* <ObjectSentenceGame/> */}
    {/* <BouncingBalls/> */}
    {/* <BrokenGlass/> */}
    <StoryPage3 groupKey="alefba" wantedTitle="گُلدانِ نازنین" />
    <CardAlphaCompo/> 
    {/* <DragDropQuiz/> */}

  </>)
}
