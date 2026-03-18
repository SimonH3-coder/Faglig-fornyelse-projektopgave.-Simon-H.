import SliderPlaneInSunrise from "../assets/Slider-Plane-In-Sunrise.jpg";
import SliderPlaneInSunset from "../assets/Slider-Plane-In-Sunset.jpg";
import SliderPlaneonRunway from "../assets/Slider-Plane-on-Runway.jpg";

export function Slidertravel() {
  return (
    <div>
      <img src={SliderPlaneInSunrise} alt="Plane in Sunrise" width="100%" />
      <img src={SliderPlaneInSunset} alt="Plane in Sunset" width="100%" />
      <img src={SliderPlaneonRunway} alt="Plane on Runway" width="100%" />
      <button className="w3 button w3-black w3-display-left" onClick="plusDivs(-1)">
        &#10094;
      </button>
      <button className="w3 button w3-black w3-display-right" onClick="plusDivs(1)">
        &#10095;
      </button>
    </div>
  );
}
