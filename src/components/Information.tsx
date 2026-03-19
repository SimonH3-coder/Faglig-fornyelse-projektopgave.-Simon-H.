import Checkin from "../assets/Check-in.jpg";
import Planes from "../assets/Planes.jpg";
import Crew from "../assets/Crew.jpg";

export function Information() {
  return (
    <section>
      <div className="gap-0.5 grid md:grid-cols-3">
        <figure className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
          <img src={Checkin} alt="Check-in" />
          <figcaption className="text-[#333333] text-2xl font-Montserrat,sans-serif my-4 mx-0 py-4 px-0">
            <h3 className="text-[#4f74bf] font-smooch my-2 mx-0 py-2 px-0 text-[2rem]">TjekIn</h3>
            <article>
              <p className="my-2 mx-0 py-2 px-0">
                Hvis du har reserveret en plads på forhånd, kan du tjekke ind online op til 60 dage før planlagt afrejse. Dine udgående og indgående flyafgange skal dog være inden for de 60 dage fra afrejse.
                <p className="my-2 mx-0 py-2 px-0">Hvis du ikke har reserveret en plads, og du tildeles en tilfældigt, åbner tjek-ind 24 timer før afrejse og lukker 2 timer før. </p>
              </p>
              <footer className="text-[#4f74bf] text-underline ">
                <a href="#">Mere:</a>
              </footer>
            </article>
          </figcaption>
        </figure>

        <figure className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
          <img src={Planes} alt="Planes" />
          <figcaption className="text-[#333333] text-2xl font-Montserrat,sans-serif my-4 mx-0 py-4 px-0">
            <h3 className="text-[#4f74bf] font-smooch my-2 mx-0 py-2 px-0 text-[2rem]">Flyene</h3>
            <article>
              <p className="my-2 mx-0 py-2 px-0">BrianAir fokuserer på en flåde bestående hovedsageligt af én flytype: selskabet har per 2021 over 450 narrow body-fly af typen Boeing 737.</p>
              <p className="my-2 mx-0 py-2 px-0"> De nye CFM56 turbofan-motorer, som med forbedret ydeevne, mindre brændstofforbrug og langt mindre støjforurening.</p>
              <footer className="text-[#4f74bf] text-underline ">
                <a href="#">Mere:</a>
              </footer>
            </article>
          </figcaption>
        </figure>

        <figure className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
          <img src={Crew} alt="Crew" />
          <figcaption className="text-[#333333] text-2xl font-Montserrat,sans-serif my-4 mx-0 py-4 px-0">
            <h3 className="text-[#4f74bf] font-smooch my-2 mx-0 py-2 px-0 text-[2rem]">Crew</h3>
            <article>
              <p className="my-2 mx-0 py-2 px-0">Kabinepersonel er ansvarlige for passagerernes sikkerhed og komfort ombord på flyet, og derfor anvender BrianAir kun uddannet personale i besætningen. </p>
              <p className="my-2 mx-0 py-2 px-0">Alle besætningsmedlemmer er certificerede og udannede indenfor gældende standarder. Vi ser frem til at give dig en god oplevelse.</p>
              <footer className="text-[#4f74bf] text-2xl font-Montserrat,sans-serif my-4 mx-0 py-4 px-0">
                <a href="#">Mere:</a>
              </footer>
            </article>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
