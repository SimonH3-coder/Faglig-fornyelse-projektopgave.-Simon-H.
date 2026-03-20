import SliderPlaneInSunrise from "../assets/Slider-Plane-In-Sunrise.jpg";
import SliderPlaneInSunset from "../assets/Slider-Plane-In-Sunset.jpg";
import SliderPlaneonRunway from "../assets/Slider-Plane-on-Runway.jpg";
import { Slider } from "./Slider";

const slides = [
  { src: SliderPlaneInSunrise alt: "Plane in Sunrise"},
  { src: SliderPlaneInSunset alt: "Plane in Sunset"},
  { src: SliderPlaneonRunway alt: "Plane on Runway"},
];

export function Slidertravel() {
  return <Slider title="Om BrianAir" slides={slides} />;
   
}
