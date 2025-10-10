import React from "react";
import { CardAlphaCompo } from "../sections/alphabet/CardAlphaCompo";
import BrokenGlass from "../sections/alphabet/BrokenGlass";
import StoryPage3 from "../sections/story/StoryPage3";

export default function Home() {
  return (<>
    <CardAlphaCompo/> 
    {/* <BrokenGlass/> */}
    <StoryPage3 groupKey="alefba" wantedTitle="مَن وَ ماکارونی" />
  </>)
}
