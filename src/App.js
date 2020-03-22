import React from "react";
import "./App.css";

import { makeStyles, Hidden } from "@material-ui/core/";
import Signup from "./Signup";
const useStyles = makeStyles(theme => ({
  subtext: {
    fontSize: "24px",
    lineHeight: "36px",
    color: "rgb(51, 49, 47)",
    opacity: "0.6",
    maxWidth: "350px",
    marginTop: "30px",
    marginBottom: "28px",
    textAlign: "left"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className="middle">
        <div className="grid1">
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1584394298/Vertical_Frame_-_Only_Screen_-_Blue_Shadow.png"
            alt="mockup"
          />
        </div>

        <div className="grid2">
          <img
            src="https://res.cloudinary.com/dxrvvjvpf/image/upload/v1584394201/Group_28_1.png"
            alt="logo"
            className="logo"
          />
          <br />
          <p className="subtext">
            Get a live feed of what people are saying AND doing around you
            during this crisis. Completely anonymous.
          </p>

          <Signup />
          <Hidden xsDown>
            <img
              className="apple"
              src="https://cdn.worldvectorlogo.com/logos/download-on-the-app-store-apple.svg"
              alt="appstore"
              height="55"
            />
          </Hidden>
        </div>
      </div>

      {/* </Grid> */}
      <div className="footer">
        <div className="footerbox">
          <div className="sociallinks">
            <a>
              <img
                src="https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png"
                alt="insa"
                style={{ height: "24px", width: "24px", padding: "0px 12px" }}
              />
            </a>

            <a>
              <img
                src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-linkedin-3.png"
                alt="insa"
                style={{ height: "24px", width: "24px", padding: "0px 12px" }}
              />
            </a>
            <a>
              <img
                src="https://cdn.worldvectorlogo.com/logos/dribbble-icon.svg"
                alt="insa"
                style={{ height: "24px", width: "24px", padding: "0px 12px" }}
              />
            </a>
          </div>
          <ul className="footerlinks">
            <li>
              <a>2020 rona.</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Terms</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
