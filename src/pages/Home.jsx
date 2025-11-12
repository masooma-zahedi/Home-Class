import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import StoryPage3 from "../sections/story/StoryPage3";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import BouncingBalls from "../sections/alphabet/BouncingBalls";
import ObjectSentenceGame from "../sections/alphabet/ObjectSentenceGame";
import WordFlipBox from "../sections/alphabet/WordFlipBox";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-center rounded my-2 mx-1" style={{color:" #772245"}}>بچه ها امروز حرف ه را یاد گرفتند و کلمات حرف ق را با هم تمرین کردیم. بچه ها از روی کلمات یک بار بخوانند و یک بار بنویسند .</h4>
      <WordFlipBox/>
    {/* <ObjectSentenceGame/> */}
    {/* <BouncingBalls/> */}
    {/* <BrokenGlass/> */}
    {/* <StoryPage3 groupKey="alefba" wantedTitle="دارویِ تَلخ" /> */}
    <CardAlphaCompo/> 
    {/* <DragDropQuiz/> */}
  </>)
}
