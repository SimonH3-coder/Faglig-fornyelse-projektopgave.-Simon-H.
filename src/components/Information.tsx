import Checkin from "../assets/Check-in.jpg";
import Planes from "../assets/Planes.jpg";
import Crew from "../assets/Crew.jpg";

export function Information() {
  return (
    <section>
      <div>
        <figure>
          <img src={Checkin} alt="Check-in" />
          <figcaption>
            <h3>TjekIn</h3>
            <article>
              <p>
                Hvis du har reserveret en plads på forhånd, kan du tjekke ind online op til 60 dage før planlagt afrejse. Dine udgående og indgående flyafgange skal dog være inden for de 60 dage fra afrejse.
                <p>Hvis du ikke har reserveret en plads, og du tildeles en tilfældigt, åbner tjek-ind 24 timer før afrejse og lukker 2 timer før. </p>
              </p>
              <footer>
                <a href="#">Mere:</a>
              </footer>
            </article>
          </figcaption>
        </figure>

        <figure>
          <img src={Planes} alt="Planes" />
          <figcaption>
            <h3>Flyene</h3>
            <article>
              <p>BrianAir fokuserer på en flåde bestående hovedsageligt af én flytype: selskabet har per 2021 over 450 narrow body-fly af typen Boeing 737.</p>
              <p> De nye CFM56 turbofan-motorer, som med forbedret ydeevne, mindre brændstofforbrug og langt mindre støjforurening.</p>
              <footer>
                <a href="#">Mere:</a>
              </footer>
            </article>
          </figcaption>
        </figure>

        <figure>
          <img src={Crew} alt="Crew" />
          <figcaption>
            <h3>Crew</h3>
            <article>
              <p>Kabinepersonel er ansvarlige for passagerernes sikkerhed og komfort ombord på flyet, og derfor anvender BrianAir kun uddannet personale i besætningen. </p>
              <p>Alle besætningsmedlemmer er certificerede og udannede indenfor gældende standarder. Vi ser frem til at give dig en god oplevelse.</p>
              <footer>
                <a href="#">Mere:</a>
              </footer>
            </article>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
