import BrianAirLogo from "../assets/BrianAir-Logo.svg";
import HeroImageBrianairInteriur from "../assets/Hero-Image-Brianair-Interiur.jpg";

export function Home() {
  return (
    // GLOBAL HEADER
    <header className="relative">
      <figure className="absolute top-8 left-8 w-[30vw] bg-[#fcfbfc77] p-8">
        <img src={BrianAirLogo} alt="Brian Air Logo" />
      </figure>
      <img src={HeroImageBrianairInteriur} alt="Hero-Image-Brianair-Interiur" />
    </header>
  );
}
