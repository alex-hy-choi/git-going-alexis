
import { useState } from "react";
import BlueyImage from '../assets/Blueyimg.png';
import BingoImage from '../assets/bingoimg.png';

function StyleChange({children}) {
  // the actual style  
  const [clzz, setClzz] = useState("default1");

  // the name of the btn
    const [title, setTitle] = useState("Bingo Mode");
  // the color of the btn
    const [changeBtn, setChangeBtn] = useState("bingo");
  // image
  const[imgSRC, setSRC] = useState(BlueyImage)
  const[altText, setAlt] = useState("bluey")
  
    const changeStyle = () => {
      if (clzz === "default1"){

      setClzz("default2")
      setTitle("Bluey Mode")
      setChangeBtn("bluey")
      setSRC(BingoImage)
      setAlt("bingo")

    } else {
        setClzz("default1")
        setTitle("Bingo Mode")
        setChangeBtn("bingo")
        setSRC(BlueyImage)
        setAlt("bluey")

    }

    };
  
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

