import SliderPlaneInSunrise from "../assets/Slider-Plane-In-Sunrise.jpg";
import SliderPlaneInSunset from "../assets/Slider-Plane-In-Sunset.jpg";
import SliderPlaneonRunway from "../assets/Slider-Plane-on-Runway.jpg";

export function Slidertravel() {
  return (
    <div className="relative w-full h-auto">
      <h2 className="font-smooch text-[4rem] text-[#4f74bf] text-[8vw] mt-8 mr-4 mb-2 ml-0">Om BrianAir</h2>
      <img className="transition duration-400 cursor-pointer [filter.brightness(500)]" src={SliderPlaneInSunrise} alt="Plane in Sunrise" width="100%" />
      <img className="transition duration-400 cursor-pointer [filter.brightness(500)]" src={SliderPlaneInSunset} alt="Plane in Sunset" width="100%" />
      <img className="transition duration-400 cursor-pointer [filter.brightness(500)]" src={SliderPlaneonRunway} alt="Plane on Runway" width="100%" />
      <button className="w3 button w3-black w3-display-left absolute top-1/2 -translate-y-1/2 bg-transparent border-0 text-[#ffffff6] text-[3rem] cursor-pointer transition duration-300 r-0" onClick="plusDivs(-1)">
        &#10094;
      </button>
      <button className="w3 button w3-black w3-display-right absolute top-1/2 -translate-y-1/2 bg-transparent border-0 text-[#ffffff6] text-[3rem] cursor-pointer transition duration-300 r-0" onClick="plusDivs(1)">
        &#10095;
      </button>
    </div>
  );
}
