
import { useState } from "react";

function StyleChange({children}) {
    const [clzz, setClzz] = useState("default1");
  
    const changeStyle = () => {
      if (clzz === "default1"){

      setClzz("default2")
    } else {
        setClzz("default1")

    }

    };
  
    return (
      <div className={clzz}>
        <button onClick={changeStyle}>Change Style</button>
        {children}
      </div>
    );
  }
  
  export default StyleChange;

