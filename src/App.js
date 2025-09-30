import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { CardAlphaCompo } from "./sections/alphabet/CardAlphaCompo";
import Home from "./pages/Home";
import SectionLayout from "./layouts/SectionLayout";


function App() {
  return (
    <>
    <div className="App">
      <h1>Hi masooma salam </h1>
      <MainLayout/>
    </div>


        <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />

          {/* بخش آموزش */}
          {/* *************************************** Alphabet pages********************* */}
          <Route 
            path="alphabet"
            element={
              <SectionLayout
                basePath="/alphabet"
                menuItems={[
                  // { label: "صفحه اصلی", path: "" },
                  { label: "کارت الفبا", path: "" },
                  // { label: "بخش های کلمات", path: "syllableApp" },
                  // { label: "کارت کلمات", path: "wordGameWithCategories" },
                  // { label: "حرف قرمز کلمه", path: "highlightLetterText" },
                  // { label: "با هم بخوانیم", path: "sylabeWords" },
                  // { label: "داستان", path: "./story/storyPage3" },
                  // { label: "معنی لغات جدید", path: "learnNewWords" },
                  // { label: "اتاق بازی", path: "gameRoom" },
                  // { label: "جدول کلمات", path: "tableWords" },
                  // { label: "زبان", path: "language" },
                ]}
              />
            }
          >
            <Route path="" element={<CardAlphaCompo />} />
            {/* <Route path="syllableApp" element={<SyllableApp />} />
            <Route path="wordGameWithCategories" element={<WordGameWithCategories />} />
            <Route path="highlightLetterText" element={<HighlightLetterText />} />
            <Route path="sylabeWords" element={<SylabeWords />} />
            <Route path="story/StoryPage3" element={<StoryPage3 groupKey='alefba' />} />
            <Route path="learnNewWords" element={<LearnNewWords />} />
            <Route path="gameRoom/*" element={<GameRoom />} />
            <Route path="tableWords/*" element={<TableWords />} /> */}

            {/* <Route path="sentenceBuilder" element={<SentenceBuilder />} />
            <Route path="dragDropQuiz" element={<DragDropQuiz />} />
            <Route path="typingQAImageSlider" element={<TypingQAImageSlider />} />
            <Route path="language" element={<Language />} /> */}
          </Route>






        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
