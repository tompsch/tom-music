import { use, useEffect, useRef, useState } from "react";
import classes from "./VideoPlayer.module.css"
import pauseIcon from "../../assets/pause.svg"
import playIcon from "../../assets/play.svg"
import replayIcon from "../../assets/replay.svg"
import { usePlayback } from '../../context/PlaybackContext';


export default function VideoPlayer ({src, poster}) {

    const ref = useRef(undefined);
    const [playing, setPlaying] = useState(false);
    const [ended, setEnded] = useState(false);
    const [hovered, setHovered] = useState(false);
    const leaveTimeout = useRef(null);
    const { playback, setPlayback } = usePlayback();

    const isPlaying = (ref) => {
       if(ref.current.paused) {
            return false;
       }
       else return true;
    }

    const playVideo = async (video) => {
        try {
            await video.play();
            setPlaying(true);
            setEnded(false);
            setPlayback(ref.current);

        } catch(e) {
            setPlaying(false);
            console.log(e);
        }
    }
    const handlePlay = () => {
        setPlayback(false);
        if(!isPlaying(ref)) {
            playVideo(ref.current);
        } else if (isPlaying(ref)) {
            ref.current.pause();
            setPlaying(false);
        }
    }

    useEffect(()=>{
        if(playback && playback !== ref.current) {
            console.log("i will pause this video")
            ref.current.pause();
            setPlaying(false);
        }
    },[playback])

    useEffect(()=>{
        const handleEnd = () =>{
            setEnded(true);
            setPlaying(false);
        }
        const video = ref.current;
        if(video) {
            video.addEventListener("ended", handleEnd);
            return () => video.removeEventListener("ended", handleEnd);
        }
    },[]);

    return(
        <div onClick={handlePlay} className={`${classes.videoContainer}`}
                onMouseEnter={()=> {
                    if(leaveTimeout.current) {
                        clearTimeout(leaveTimeout.current)
                    }
                    setHovered(true);}}
                onMouseLeave={()=> {
                    if(playing) {
                         leaveTimeout.current=setTimeout(()=>(setHovered(false)),1000);
                    } else if (!playing) {
                        setHovered(false);
                    }
                    }}>
            <video ref={ref} src={src} poster={poster} className={`${playing ? classes.playing : classes.paused}`}></video>
            {<img src={!ended ? (playing ? pauseIcon : playIcon) : undefined} className={`${classes.controlImg} ${playing ? classes.pause : classes.play} ${hovered && classes.hovered}`}></img>}
            {<img src={ended ? replayIcon : undefined} className={`${classes.controlImg} ${classes.replay}`}></img>}
        </div>
    )
}
