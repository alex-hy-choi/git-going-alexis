import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from "react";

import './index.css'
import App from './App.jsx'
import RandomObjectPicker from "./components/Randomizer.jsx";
import StyleChange from "./components/StyleChange.jsx"

import {EPISODE} from "./Data.js"
import {CHILI} from "./Data.js"
import {GAMES} from "./Data.js"


// images used in the randomizers, any other images are called in their components
import BanditImage from './assets/Bandit.png';
import ChilliImage from './assets/Chilli.png';
import Chattermax from './assets/chatter.png';

// started/placeholder todo list items
const DATA = [
  { id: "todo-0", name: "Chores", completed: true },
  { id: "todo-1", name: "Playtime", completed: false },
  { id: "todo-2", name: "Dinner", completed: false },
];


createRoot(document.getElementById('root')).render(
  // style change affects the style of it's children
  <StyleChange>
    <StrictMode>
      
      <div className="component-container">
        {/* for flexboxy stuff, two columns -> L and R */}
        {/* both columns use the same style guide for spacing */}
        <div id="left-column" className="column">
          {/* spotify iframe!!! */}
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
          {/* todo app */}
          <App tasks={DATA} />
          </div>
        {/* three different randomizers */}
        <div id="right-column" className="column">
          <RandomObjectPicker  items={GAMES} heading="Random Game Generator" text="Go Play:" className="column-object" src={Chattermax} alt="chattermax" />
          <RandomObjectPicker  items={CHILI} heading="Chili's Life Lessons" text="Advice:" className="column-object" src={ChilliImage} alt="chili"/>
          <RandomObjectPicker  items={EPISODE} heading="Random Episode Generator" text="Go Watch:" className="column-object" src={BanditImage} alt="bandit"/>
        </div>

      </div>
    </StrictMode>
  </StyleChange>
)

