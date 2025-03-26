import { useState } from "react";

function RandomObjectPicker({ items, heading, text, className, src, alt}) {
    const [randomItem, setRandomItem] = useState(null);

    // items = array

    const pickRandom = () => {
      if (items && items.length > 0) {
        // call random by it's index
        const randomIndex = Math.floor(Math.random() * items.length);
        setRandomItem(items[randomIndex]);
      }
    };
  
  
    return (
      <div className={className}>
      
        <img src={src} alt={alt} />
        <h2>{heading}</h2>
        {/* this part is how to implement random item */}
        {randomItem && (
          <div>
            <h3>{text}</h3>
            <p>{JSON.stringify(randomItem, null, 2)}</p>
          </div>
        )}

        <button onClick={pickRandom}>GO!</button>
      </div>
    );
  }
  
  export default RandomObjectPicker;