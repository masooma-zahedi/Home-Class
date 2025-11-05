import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import StoryPage3 from "../sections/story/StoryPage3";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-center rounded my-2 mx-1" style={{color:" #772245"}}>بچه ها حرف ق را یاد گرفتند. باقی داستان خوانده شد و قسمت پایین عکس داستان را بچه ها بنویسند. جمله سازی با تصویر را هم تمرین کنند .</h4>
    <ObjectSentenceGame/>
    {/* <BouncingBalls/> */}
    {/* <BrokenGlass/> */}
    <StoryPage3 groupKey="alefba" wantedTitle="دارویِ تَلخ" />
    <CardAlphaCompo/> 
    {/* <DragDropQuiz/> */}
  </>)
}
