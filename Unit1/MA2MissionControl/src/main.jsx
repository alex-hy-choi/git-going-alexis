import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from "react";

import './index.css'
import App from './App.jsx'
import RandomObjectPicker from "./components/Randomizer.jsx";
import StyleChange from "./components/StyleChange.jsx"
import Modal from "./components/Modal.jsx"

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const QUOTES = [

]

const GAMES = ["Keepy Uppy", "Restaurant", "Verandah Santa"]

const EPISODE = ["Keepy Uppy", "Restaurant", "Verandah Santa"]

const CHILI = ["Life Lesson 1", "Lesson 2", "Lesson 3"]

const CONTENT = {"title": "TITLE SAMPLE", "img": "images/one.svg"}



createRoot(document.getElementById('root')).render(
  <StyleChange>
    <StrictMode>
    
      <div className="component-container">
        <div id="left-column">
          <App tasks={DATA} />
          <iframe 
            style={{ "borderRadius": "12px"}} 
            src="https://open.spotify.com/embed/album/4ke6cauk7sHuydZCrkgD7s?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
          </div>

        <div id="right-column">
          <RandomObjectPicker  items={GAMES} heading="Random Game Generator" text="This is..." className="column"/>
          <RandomObjectPicker  items={EPISODE} heading="Random Episode Generator" text="This is..." className="column"/>
          <RandomObjectPicker  items={CHILI} heading="Chili's Life Lessons" text="This is..." className="column"/>
        </div>

        {/* <Modal content={CONTENT}/> */}
      </div>
    </StrictMode>
  </StyleChange>
)

