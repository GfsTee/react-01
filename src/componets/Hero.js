import './Hero.css'
import CommentCard from "./CommentCard";
const Hero = () => {
    return (
        <div id="hero">

            <h1 style={
                {
                    color: "red",
                    fontSize: "33px",
                    textAlign: "center"
                }
            }>Welcome</h1>
            <div className="comments">
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    );
}

export default Hero;