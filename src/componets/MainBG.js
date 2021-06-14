import './MainBG.css'

const MainBG = () => {
    return (
        <div>
            <div id="main-bg"></div>
            <div style={
                {
                    height: "50vh",
                    background: "url('./alex-shutin-qYezrKbDGK8-unsplash.jpg') center / cover no-repeat"
                }
            }></div>
        </div>
    );
}

export default MainBG;