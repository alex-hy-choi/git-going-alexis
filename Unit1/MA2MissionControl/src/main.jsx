import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from "react";

import './index.css'
import App from './App.jsx'
import RandomObjectPicker from "./components/Randomizer.jsx";
import StyleChange from "./components/StyleChange.jsx"

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const QUOTES = ["Quote 1", "Quote 2", "Quote 3"]

const GAMES = ["Keepy Uppy", "Restaurant", "Verandah Santa"]

const EPISODE = ["Keepy Uppy", "Restaurant", "Verandah Santa"]

const CHILI = ["Life Lesson 1", "Lesson 2", "Lesson 3"]


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA} />
    <iframe 
      style={{ "borderRadius": "12px"}} src="https://open.spotify.com/embed/album/4ke6cauk7sHuydZCrkgD7s?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <StyleChange>
      <div id="column1" style={{"display": "flex", "flexDirection":"row", "justifyContent": "space-between"}}>
        <RandomObjectPicker  items={GAMES} heading="heading" text="This is..." />
        <RandomObjectPicker  items={QUOTES} heading="quotes" text="This is..." />
        <RandomObjectPicker  items={EPISODE} heading="quotes" text="This is..." />
      </div>
    </StyleChange>
  </StrictMode>
)

