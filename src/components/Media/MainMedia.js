import classes from "../Media/MainMedia.module.css"
import donnalee from "../../assets/media/donnalee.mp4"
import donnaPic from "../../assets//media/donnaPic.jpeg"
import rio from "../../assets//media/rio.mp4"
import rioPic from "../../assets//media/rioPic.jpeg"
import birthday from "../../assets//media/birthday.mp4"
import birthdayPic from "../../assets//media/birthdayPic.jpeg"
import blue from "../../assets//media/blue.mp4"
import bluePic from "../../assets//media/bluePic.jpeg"
import mediodia from "../../assets//media/mediodia.mp4"
import mediodiaPic from "../../assets//media/mediodiaPic.jpeg"
import toy from "../../assets//media/toy.mp4"
import toyPic from "../../assets//media/toyPic.jpeg"
import youtube1 from "../../assets//media/youtube1.mp4"
import youtube1Pic from "../../assets//media/youtube1Pic.jpg"
import youtube2 from "../../assets//media/youtube2.mp4"
import youtube2Pic from "../../assets//media/youtube2Pic.jpg"
import VideoPlayer from "../Core/VideoPlayer"
import Heading from "../Core/Heading"
import videocam from "../../assets/videocam.svg"

export default function MainMedia () {

    return (
        <main className={`${classes.mediaMain} animated`}>
            <Heading
                logoAlt={["Videocamera and sun kind-of-logo","Tipo de logo con un sol y un videocámara"]}
                insideAlt={["A videocamera", "Una videocámara"]}
                insideSrc={videocam}
                h1={["Music", "Música"]}
            />
            <section className={classes.videoWrapper}>
                <div className={classes.ytVideoDiv}>
                    <VideoPlayer src={youtube1} poster={youtube1Pic} />
                </div>
                <div className={classes.ytVideoDiv}>
                    <VideoPlayer src={youtube2} poster={youtube2Pic} />
                </div>
            </section>
            <section className={classes.instagramPosts}>
                <div className={classes.videoContainer}>
                    <VideoPlayer src={donnalee} poster={donnaPic} />
                </div>
                <div className={classes.videoContainer}>
                    <VideoPlayer src={mediodia} poster={mediodiaPic} />
                </div>
                <div className={classes.videoContainer}>
                    <VideoPlayer src={rio} poster={rioPic} />
                </div>
                <div className={classes.videoContainer}>
                    <VideoPlayer src={birthday} poster={birthdayPic} />
                </div>
                <div className={classes.videoContainer}>
                    <VideoPlayer src={blue} poster={bluePic} />
                </div>
                <div className={classes.videoContainer}>
                    <VideoPlayer src={toy} poster={toyPic} />
                </div>
            </section>
        </main>
    )
}


