import React from "react";
import "./App.css";
import Signup from "./Signup";
import iphone from "./iphone.png";
import icon from "./icon.png";
// import { makeStyles, Hidden } from "@material-ui/core/";

// const useStyles = makeStyles((theme) => ({
//   subtext: {
//     fontSize: "24px",
//     lineHeight: "36px",
//     color: "rgb(51, 49, 47)",
//     opacity: "0.6",
//     maxWidth: "350px",
//     marginTop: "30px",
//     marginBottom: "28px",
//     textAlign: "left",
//   },
// }));

function App() {
  // const classes = useStyles();
  return (
    <div className="App">
      <body>
        <header class="container">
          <div class="responsive intro-container">
            <div class="app-icon">
              <img alt="App icon" src={icon} />
              <p style={{ fontWeight: 800, letterSpacing: -2 }}>rona.</p>
            </div>
            <div class="intro">
              <h2>
                Get a <span style={{ fontWeight: 600 }}>live feed</span> and
                centralized local information about the spread of COVID-19
                Virus. Completely{" "}
                <span style={{ fontWeight: 600 }}>anonymous</span> and{" "}
                <span style={{ fontWeight: 600 }}>free</span> to use.
              </h2>
            </div>
            {/* <span class="primary-btn app-store-btn"> */}
            <Signup />
            {/* </span> */}
          </div>
          <div class="responsive iphone">
            <div class="iphone-screenshot"></div>
            <img class="iphone-mask" alt="rona" src={iphone} />
          </div>
        </header>
        <footer class="container footer">
          <div class="sep"></div>
          <p class="responsive credit">Made with ♥ in New York, NY</p>
          <div class="responsive contact">
            <a href="mailto:dkorongy@gmail.com?subject=Rona App">Support</a>
            <a href="">Press Kit</a>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
