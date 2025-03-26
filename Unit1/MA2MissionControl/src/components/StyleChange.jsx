
import { useState } from "react";
import BlueyImage from '../assets/Blueyimg.png';
import BingoImage from '../assets/bingoimg.png';

// style change alters the style of its children
function StyleChange({children}) {
  // the actual style  
  const [clzz, setClzz] = useState("default1");

  // the name of the btn
    const [title, setTitle] = useState("Bingo Mode");
  // the color of the btn
    const [changeBtn, setChangeBtn] = useState("bingo");
  // 'caption' image -> bluey or bingo
  const[imgSRC, setSRC] = useState(BlueyImage)
  const[altText, setAlt] = useState("bluey")
  

    const changeStyle = () => {
      if (clzz === "default1"){

        // when the style changes to bingo mode (w/ bluey button)
      setClzz("default2")
      setTitle("Bluey Mode")
      setChangeBtn("bluey")
      setSRC(BingoImage)
      setAlt("bingo")

    } else {
      
      // when the style changes to bluey mode (w/ bingo button)
      setClzz("default1")
        setTitle("Bingo Mode")
        setChangeBtn("bingo")
        setSRC(BlueyImage)
        setAlt("bluey")

    }

    };
    

    // the header is also added here (title of page)
    return (
      <div className={clzz}>
        <div id="header">
          <h1>Bluey!</h1>
          <img src={imgSRC} alt={altText} id="main-img" />
          <button id={changeBtn} onClick={changeStyle}>{title}</button>
        </div>
        {children}
      </div>
    );
  }
  
  export default StyleChange;

