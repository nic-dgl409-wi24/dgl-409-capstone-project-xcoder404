import React from "react";
import image from "../images/kelly-sikkema-N4tDi48Ct-A-unsplash (1).jpg";
import image1 from "../images/egor-litvinov-RlHI0cCNThY-unsplash.jpg";
import image2 from "../images/jiangxulei1990-feX-KFWRR5o-unsplash (1).jpg";
import image3 from "../images/waldemar-kYbYIWdJRh0-unsplash.jpg";

function Blogs() {
  return (
    <div>
      <body>
        <h1 class="blog-title">
          Urbanglide <span class="title-color">Chronicles</span>
        </h1>

        <div class="blog-content">
          <div class="blog-image">
            <img src={image}></img>
            <span>INDUSTRY OVERVIEW</span>
            <h3>
              Our personal best: Record ridership drives 45% growth in first
              half of 2023
            </h3>
          </div>
          <div class="blog-side">
            <h2 class="side-head">MOST RECENT</h2>
            <span>
              <b>Uncovering City Charms</b>
            </span>
            <h3>
              Embark on urban adventures and discover hidden gems with eScooter
              rides.
            </h3>
            <span>
              <b>eScooter Escapes</b>
            </span>
            <h3>
              Experience the thrill of exploring your city's vibrant
              neighborhoods on eScooters.
            </h3>{" "}
            <span>
              <b>City Thrills</b>
            </span>
            <h3>
              Ride into excitement as you explore iconic landmarks and local
              hotspots.
            </h3>{" "}
            <span>
              <b>Urban Odyssey</b>
            </span>
            <h3>
              Embark on an epic journey through bustling streets and scenic
              pathways.
            </h3>{" "}
            <span>
              <b>eScooter Diaries</b>
            </span>
            <h3>
              Share in the excitement of exploring cities and unlocking hidden
              treasures.
            </h3>
          </div>
        </div>
        <div class="travel-guide">
          <h2>
            Travle <span class="title-color">Guide</span>
          </h2>
          <div class="travel-cards">
            <div>
              <img src={image1} alt=""></img>
              <h3 class="title-color">Bus</h3>
              <ul><li>Check local bus routes and schedules.</li>
                <li>Board the bus nearest to the rental location.</li>
                <li>Follow signs or directions from the bus stop.</li>
                <li>Estimate travel time based on bus schedule and distance.</li></ul>
            </div>
            <div>
              <img src={image2}></img>
              <h3 class="title-color">Walk</h3>
              <ul>
                <li>Consult map or GPS for walking route.</li>
                <li>Follow pedestrian pathways and sidewalks.</li>
                <li>Explore neighborhood scenery along the way.</li>
                <li>Estimate walking time based on distance and walking speed.</li>
              </ul>
            </div>
            <div>
              <img src={image3}></img>
              <h3 class="title-color">Taxi</h3>
              <ul>
                <li>Hail a taxi or use a ride-hailing app.</li>
                <li>Provide rental location address to the taxi driver.</li>
                <li>Enjoy direct and convenient transportation.</li>
                <li>Consider traffic conditions for estimated travel time.</li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Blogs;
