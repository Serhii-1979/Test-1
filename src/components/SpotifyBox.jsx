import "./spotify.css";
import imgLogo from "../assets/g10.svg";
import appleBtn from "../assets/Subtract.svg";
import GoogleBtn from "../assets/GoogleBtn.svg";
import XBtn from "../assets/XBtn.svg";


function SpotifyBox() {
  return (
    <div className="spotBox">
      <div className="box">
        <div className="spotBox_title">
          <img src={imgLogo} alt="img" />
        </div>
        <div className="spotBox_text">
          <div className="spotBox_text-h2">
            <h2>LIFE IS WASTED ON THE LIVING</h2>
            <p>
              Sign in <br />
              with
            </p>
          </div>


          <div className="spotBox_btn">

            <button className="spotBox_btn-cont">
              <img src={appleBtn} />
            </button>
            <button className="spotBox_btn-cont">
              <img className="spotBox_btn-google" src={GoogleBtn} />
            </button>
            <button className="spotBox_btn-cont">
              <img className="spotBox_btn-x" src={XBtn} />
            </button>

          </div>


        </div>
      </div>
    </div>
  );
}
export default SpotifyBox;
