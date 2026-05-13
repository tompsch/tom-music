import { createContext, useContext } from "react";
import { useState } from "react";


const PlaybackContext = createContext({playback:false, setPlayback: () => {}});

export const PlaybackProvider = ({children}) => {

    const [playback,setPlayback] = useState(null);
    console.log(playback)
    return (
        <PlaybackContext.Provider value={{playback,setPlayback}}>
            {children}
        </PlaybackContext.Provider>
);

};



export const usePlayback = () => useContext(PlaybackContext);