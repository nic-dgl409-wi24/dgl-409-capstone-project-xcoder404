import React from "react";
import scooterBack from "../images/scooterBack.png";
import avatar1 from "../images/alexander (1).jpg";
import avatar2 from "../images/alexander (2).jpg";
import avatar3 from "../images/alexander (3).jpg";

function About() {
  return (
    <div>
      <body>
        <div class="about-head">
          <h1>Who we are?</h1>
          <p>
            Welcome to UrbanGlide, your premier destination for electric scooter
            rentals! At UrbanGlide, we are passionate about providing convenient
            and eco-friendly transportation solutions for urban adventurers and
            commuters alike. As a team of dedicated enthusiasts, we strive to
            offer top-quality electric scooters paired with exceptional customer
            service. Whether you're exploring the bustling city streets,
            commuting to work, or simply enjoying a leisurely ride, UrbanGlide
            has you covered. Join us in our mission to revolutionize urban
            mobility and experience the freedom of gliding through your city in
            style.
          </p>
        </div>
        <div>
          <img src={scooterBack} class="back-image"></img>
        </div>
        <div class="urban-discovery">
          <h2>
            Discover the Freedom of Urban<span class="title-color">Glide</span>
          </h2>
          <div class="urban-lists">
            <h3>
              <span class="title-color">Convenient</span> Rentals:
            </h3>
            <div class="urban-sublist">
              <p>
                &bull; Use a visually appealing background image or video
                showing people using UrbanGlide e-scooters.
              </p>
              <p>
                &bull; Display a bold heading like "Convenient Rentals" or "Rent
                with Ease."
              </p>
              <p>
                &bull; Provide a brief description of the rental process,
                emphasizing the user-friendly nature of the mobile app.
              </p>
              <p>
                &bull; Include a prominent CTA button labeled "Rent Now" or "Get
                Started" that directs users to the rental page or app download.
              </p>
            </div>
            <h3>
              <span class="title-color">Safety</span> First:
            </h3>
            <div class="urban-sublist">
              <p>
                &bull; Select a background image or color scheme that conveys
                safety and security, such as a helmet or safety gear.
              </p>
              <p>
                &bull; Use a heading like "Safety is Our Priority" or "Ride with
                Confidence."
              </p>
              <p>
                &bull; Provide details about the safety measures taken by
                UrbanGlide, including regular maintenance and adherence to
                safety standards.
              </p>
              <p>
                &bull; Incorporate testimonials or quotes from satisfied
                customers regarding their positive experiences with UrbanGlide's
                safety features.
              </p>
            </div>
            <h3>
              <span class="title-color">Eco</span> Friendly Travel:
            </h3>
            <div class="urban-sublist">
              <p>
                &bull; Use a visually appealing background image or video
                showing people using UrbanGlide e-scooters.
              </p>
              <p>
                &bull; Display a bold heading like "Convenient Rentals" or "Rent
                with Ease."
              </p>
              <p>
                &bull; Provide a brief description of the rental process,
                emphasizing the user-friendly nature of the mobile app.
              </p>
              <p>
                &bull; Include a prominent CTA button labeled "Rent Now" or "Get
                Started" that directs users to the rental page or app download.
              </p>
            </div>
          </div>
        </div>
        <div class="urban-reviews">
          <h2>Happy <spa class="title-color">Customers</spa></h2>
          <div class="reviews">
            <div class="review-card">
              <img src={avatar1}></img>
              <h3>Nicholas Horn</h3>
              <p>
                UrbanGlide has transformed my city travels. Easy booking,
                well-maintained eScooters, and a commitment to sustainability
                make each ride enjoyable.
              </p>

            </div>
            <div class="review-card">
              <img src={avatar3}></img>
              <h3>Alexander Hipp</h3>
              <p>
                UrbanGlide's user-friendly app and reliable eScooters make
                commuting a breeze. Clean, efficient, and affordable – it's
                become my go-to transportation choice.
              </p>
            </div>
            <div class="review-card">
              <img src={avatar2}></img>
              <h3>Christopher Campbell</h3>
              <p>
                UrbanGlide has simplified my urban errands. With fun rides,
                convenient pickup spots, and affordable rates, it's become an
                essential part of my city lifestyle.
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default About;
