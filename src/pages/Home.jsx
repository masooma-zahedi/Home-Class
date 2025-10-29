import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import StoryPage3 from "../sections/story/StoryPage3";
import DragDropQuiz from "../sections/word/DragDropQuiz";
import BouncingBalls from "../sections/alphabet/BouncingBalls";

export default function Home() {
  return (<>
  <h4 className="bg-warning p-2 text-center rounded my-2 mx-1" style={{color:" #772245"}}>امروز حرف ف را یاد گرفتیم. بچه ها از روی کلمات حرف ف یکبار بنویسند. و داستان را تا بالای عکس بخوانند.</h4>
    <CardAlphaCompo/> 
    <BouncingBalls/>
    {/* <BrokenGlass/> */}
    <StoryPage3 groupKey="alefba" wantedTitle="دارویِ تَلخ" />
    {/* <DragDropQuiz/> */}
  </>)
}
