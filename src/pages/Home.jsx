import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import StoryPage3 from "../sections/story/StoryPage3";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import WordFlipBox from "../sections/alphabet/WordFlipBox";
import VideoCard from "../sections/alphabet/VideoCard";
import DragWriteBoxWithGuides from "../sections/alphabet/DragWriteBoxWithGuides ";
import MatchingLettersPicturs from "../sections/alphabet/MatchingLettersPicturs";
import { SylabeWords } from "../sections/alphabet/SylabeWords";
import WordGameWithCategories from "../sections/alphabet/WordGameWithCategories";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-center rounded my-2 mx-1" style={{color:" #1a2099ff"}}>بچه ها حرف ع را یاد گرفتند . کلمات حرف ع را بخوانند و از روی 10 کلمه آن بنویسند .</h4>
      {/* <ObjectSentenceGame/> */}

      {/* <WordFlipBox/> */}
    {/* <WordGameWithCategories initialCategory="زمستان" /> */}
      {/* <VideoCard
        title="قصه کوتاه امروز"
        description="متن فارسی داستان زیر را بخوانید."
        videoFileName={`${process.env.PUBLIC_URL}/video/bigThings.mp4`}  // فقط اسم فایل ویدیوی mp4
      /> */}
    {/* <MatchingLettersPicturs/> */}
    {/* <SylabeWords/> */}
    {/* <BrokenGlass/> */}
    <BouncingBalls/>
    <StoryPage3 groupKey="alefba" wantedTitle="اُمید و ظَرفِ غَذا" />

    {/* <div className="container  mt-4" dir="rtl">
      <DragWriteBoxWithGuides width={840} height={520} showGuides={true} downloadName="persian_practice.png" textTitle="آیلین و سِتایِش هَر روز با هَم بازی می کُنَند."/>
    </div> */}

    <CardAlphaCompo/> 
    {/* <DragDropQuiz/> */}
  </>)
}
