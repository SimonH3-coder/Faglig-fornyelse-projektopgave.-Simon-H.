import SoMeFb from "../assets/SoMe-Fb.svg";
import SoMeInsta from "../assets/SoMe-Insta.svg";
import SoMeYouTube from "../assets/SoMe-YouTube.svg";
export function Footermain() {
  return (
    // GLOBAL FOOTER
    <footer className=" grid bg-[#4f74bf] text-[#ededed]">
      <ul className="flex flex-col font-[Montserrat, sans-serif] items-start list-none m-8 p-0 ml-8 ">
        <h4 className="text-[#e4b834] font-[Smooch_Sans] text-[2.5rem]">BrianAir</h4>
        <li>Esplanaden 50</li>
        <li>1098 Copenhagen K</li>
        <li>+45 2244 5066</li>
        <li>Email: info@brianair.dk</li>
      </ul>

      <ul className="flex flex-col font-[Montserrat, sans-serif] items-start list-none m-8 p-0  ml-8">
        <h4 className="text-[#e4b834] font-[Smooch_Sans] text-[2.5rem]">Information:</h4>
        <li>Spanske Bank, 9245 6543 7698</li>
        <li>Betalingsbetingelser: 30 dage.</li>
        <li>CVR Nr. 34632430</li>
        <li>money@brianair.dk</li>
      </ul>

      <div>
        <h4 className="text-[#e4b834] font-[Smooch_Sans] text-[2.5rem] ml-8">Externe links:</h4>
        <figure className="flex justify-between gap-4 px-[30%] mt-8">
          <img className="w-[30%] h-auto" src={SoMeFb} alt="Facebook" />
          <img className="w-[30%] h-auto" src={SoMeInsta} alt="Instagram" />
          <img className="w-[30%] h-auto" src={SoMeYouTube} alt="YouTube" />
        </figure>
      </div>
    </footer>
  );
}
