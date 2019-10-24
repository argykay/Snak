import React, { Component } from "react";
import "./App.css";

class DailyHint extends Component {
  render() {
    return (
      <div className="background">
        <div className="mobile-container">
          <div className="page-title">Daily Hint</div>
          <div className="dh-image-bg">
            <div className="dh-image">
              <svg
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 133 180.4"
              >
                <path
                  class="cls-1"
                  d="M13,73.39H30.3a0,0,0,0,1,0,0V151a0,0,0,0,1,0,0H13A12,12,0,0,1,1,139V85.39A12,12,0,0,1,13,73.39Z"
                />
                <path
                  class="cls-1"
                  d="M13,78.57H25.13a0,0,0,0,1,0,0v67.22a0,0,0,0,1,0,0H13a6.87,6.87,0,0,1-6.87-6.87V85.43A6.87,6.87,0,0,1,13,78.57Z"
                />
                <line
                  class="cls-1"
                  x1="47.11"
                  y1="73.39"
                  x2="47.11"
                  y2="156.13"
                />
                <line
                  class="cls-1"
                  x1="97.1"
                  y1="73.39"
                  x2="97.1"
                  y2="156.13"
                />
                <line
                  class="cls-1"
                  x1="72.1"
                  y1="86.46"
                  x2="72.1"
                  y2="156.13"
                />
                <path
                  class="cls-1"
                  d="M63.8,63.89v115A10.37,10.37,0,0,0,74.14,189.2h62.91a10.37,10.37,0,0,0,10.34-10.34V73.71"
                  transform="translate(-33.5 -9.8)"
                />
                <path
                  class="cls-1"
                  d="M147.4,73.71A18.1,18.1,0,1,0,143.26,38,14.2,14.2,0,0,0,123.34,21a19.82,19.82,0,0,0-34-1,25.43,25.43,0,0,0-25.54,44"
                  transform="translate(-33.5 -9.8)"
                />
                <path
                  class="cls-1"
                  d="M63.8,63.89a25.3,25.3,0,0,0,13.36,3.79,25.62,25.62,0,0,0,3.89-.3,19.39,19.39,0,0,0,34.22-9.15,14.14,14.14,0,0,0,15.07,3.38,18.09,18.09,0,0,0,17.06,12.1"
                  transform="translate(-33.5 -9.8)"
                />
                <line
                  class="cls-1"
                  x1="30.3"
                  y1="169.06"
                  x2="113.9"
                  y2="169.06"
                />
              </svg>
            </div>
            <div className="daily-word">Øl</div>
          </div>
          <button className="main-button">start</button>
        </div>
      </div>
    );
  }
}
export default DailyHint;
