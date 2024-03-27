import React from 'react';
import image4 from "../images/OIP.png";
import {Link} from "react-router-dom";



function Kick() {
  return (
    <div>
      <body>
        <div class="urban-kick">
            <div class="kick-image">
                <img src={image4} alt="Kick scooter"/>
            </div>
            <div class="kick-info">
                <h1>Kick Scooter:</h1>
<ol>
<li><b>Description:</b> A kick scooter is a small, lightweight vehicle propelled by pushing off the ground with one foot while standing on the scooter's deck.</li>
<li><b>Design:</b> Typically features a narrow deck mounted on two or three wheels, with a handlebar for steering.</li>
<li><b>Usage:</b> Popular among children and adults for leisurely rides, short commutes, and urban transportation.</li>
<li><b>Portability:</b> Foldable models available, making them convenient for commuting and storage.</li>
<li><b>Types:</b> Variations include electric kick scooters equipped with motors for assisted propulsion.</li>
</ol>
<Link to="/">
<button class="scooter-button">Go back</button>
</Link>
</div>
        </div>
      </body>
    </div>
  )
}

export default Kick
