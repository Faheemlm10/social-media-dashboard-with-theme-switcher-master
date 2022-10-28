import "./App.css";
import facebook from "./images/icon-facebook.svg";
import up from "./images/icon-up.svg";
import twitter from "./images/icon-twitter.svg";
import instagram from "./images/icon-instagram.svg";
import youtube from "./images/icon-youtube.svg";
import down from "./images/icon-down.svg";
import { useRef,useState } from "react";

function App() {
  const random = useRef();
  const [dark,setDark] = useState(false);
  const title = document.querySelector(".title");
  const body = document.getElementsByTagName("BODY")[0];
  const box1 = document.querySelector(".box-1");
  const box2 = document.querySelector(".box-2");
  const box3 = document.querySelector(".box-3");
  const box4 = document.querySelector(".box-4");
  const followers = document.querySelector(".followers-h1");
  const handleChange = (event) => {
    setDark(!dark);
    body.classList.toggle("dark");
    // title.classList.toggle("dark");
    // box1.classList.toggle("dark");
    // box2.classList.toggle("dark");
    // box3.classList.toggle("dark");
    // box4.classList.toggle("dark");
    // followers.classList.toggle(".dark");
 
    
  };

  return (
    <div className="main">
      <div className="first">
        <div>
          <h1 className={dark  ? " dark title": "title"}>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </div>
        <div className="switch">
          <p>Dark mode</p>
          <label className="switch" onChange={handleChange}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="second">
        <div className={dark ? "box  box-1 dark": "box box-1"}>
          <div className="socials">
            <img src={facebook} alt="" />
            <p>@nathanf</p>
          </div>
          <div className="followers">
            <h1 useRef={random} className={dark  ? " dark followers-h1": "followers-h1"}>1987</h1>
            <p>Followers</p>
          </div>
          <div className="rate rate-1">
            <img src={up} alt="" />
            <p>12 today</p>
          </div>
        </div>

        <div className={dark ? "box  box-2 dark": "box box-2"}>
          <div className="socials">
            <img src={twitter} alt="" />
            <p>@nathanf</p>
          </div>
          <div className="followers">
            <h1 className={dark  ? " dark followers-h1": "followers-h1"}>1044</h1>
            <p>Followers</p>
          </div>
          <div className="rate rate-2">
            <img src={up} alt="" />
            <p>99 today</p>
          </div>
        </div>
        <div className={dark ? "box  box-3 dark": "box box-3"}>
          <div className="socials">
            <img src={instagram} alt="" />
            <p>@nathanf</p>
          </div>
          <div className="followers">
            <h1 className={dark  ? " dark followers-h1": "followers-h1"}>11k</h1>
            <p>Followers</p>
          </div>
          <div className="rate rate-3">
            <img src={up} alt="" />
            <p>1099 today</p>
          </div>
        </div>
        <div className={dark ? "box  box-4 dark": "box box-4"}>
          <div className="socials">
            <img src={youtube} alt="" />
            <p>@nathanf</p>
          </div>
          <div className="followers">
            <h1 className={dark  ? " dark followers-h1": "followers-h1"}>8239</h1>
            <p>Subscribers</p>
          </div>
          <div className="rate rate-4">
            <img src={down} alt="" />
            <p>12 today</p>
          </div>
        </div>
      </div>

      <div className="third">
        <h1 className={dark  ? " overview dark ": null}>Overview-Today</h1>
      </div>
      <div className="fourth fourth-1">
        <div className={dark  ? " box-four dark ": "box-four"} ref={random}>
          <div className="box-four-first">
            <p>Page views</p>
            <img src={facebook} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>87</h2>
            <div>
              <img src={up} alt="" />
              <p>3%</p>
            </div>
          </div>
        </div>
        <div className={dark  ? " box-four dark ": "box-four"}>
          <div className="box-four-first">
            <p>Likes</p>
            <img src={facebook} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>52</h2>
            <div>
              <img src={down} alt="" />
              <p>2%</p>
            </div>
          </div>
        </div>
        <div className={dark  ? " box-four dark ": "box-four"}>
          <div className="box-four-first">
            <p>Likes</p>
            <img src={instagram} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>5462</h2>
            <div>
              <img src={up} alt="" />
              <p>2257%</p>
            </div>
          </div>
        </div>
        <div className={dark  ? " box-four dark ": "box-four"}>
          <div className="box-four-first">
            <p>Profile Views</p>
            <img src={instagram} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>52k</h2>
            <div>
              <img src={up} alt="" />
              <p>1375%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth fourth-2">
        <div className={dark  ? " box-four dark ": "box-four"}>
          <div className="box-four-first">
            <p>Retweets</p>
            <img src={twitter} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>117</h2>
            <div>
              <img src={up} alt="" />
              <p>303%</p>
            </div>
          </div>
        </div>
        <div className={dark  ? " box-four dark ": "box-four"}>
          <div className="box-four-first">
            <p>Likes</p>
            <img src={twitter} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>507</h2>
            <div>
              <img src={up} alt="" />
              <p>553%</p>
            </div>
          </div>
        </div>
        <div className={dark  ? " box-four dark ": "box-four"}>
          <div className="box-four-first">
            <p>Likes</p>
            <img src={youtube} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>107</h2>
            <div>
              <img src={down} alt="" />
              <p>19%</p>
            </div>
          </div>
        </div>
        <div className={dark  ? " box-four dark ": "box-four"}>
          <div className="box-four-first">
            <p>Total Views</p>
            <img src={youtube} alt="" srcset="" />
          </div>
          <div className="box-four-second">
            <h2 className={dark  ? " number-dark ": null}>1407</h2>
            <div>
              <img src={down} alt="" />
              <p>12%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
