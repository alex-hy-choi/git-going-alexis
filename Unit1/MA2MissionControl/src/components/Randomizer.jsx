import { useState } from "react";

function RandomObjectPicker({ items, heading, text }) {
    const [randomItem, setRandomItem] = useState(null);
  
    const pickRandom = () => {
      if (items && items.length > 0) {
        const randomIndex = Math.floor(Math.random() * items.length);
        setRandomItem(items[randomIndex]);
      }
    };
  
    return (
      <div>
        <button onClick={pickRandom}>{heading}</button>
        {randomItem && (
          <div>
            <h3>{text}</h3>
            <pre>{JSON.stringify(randomItem, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  }
  
  export default RandomObjectPicker;