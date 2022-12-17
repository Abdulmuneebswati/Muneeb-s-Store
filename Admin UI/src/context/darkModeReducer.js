import { useState } from "react";
import darkModeContext from "./darkModeContext";

const ModeState = (props)=>{
    const initialMode = false;
    const[mode,setMode] = useState(initialMode);
    
    const darkMode = (type)=>{
        switch(type){
            case "LIGHT":{
               return setMode(false);
            }
            case "DARK":{
                return setMode(true);
            }
            case "TOGGLE":{
                return setMode(!mode);
            }
            default:
                return mode;
        }
    }
    return(
        <darkModeContext.Provider value={{mode,darkMode}}>
            {props.children}
        </darkModeContext.Provider>
    )
}
export default ModeState;