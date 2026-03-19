import Reunionisland01 from "../assets/Uploads/Reunion-island-01.jpg";
import Reunionisland02 from "../assets/Uploads/Reunion-island-02.jpg";
import Reunionisland03 from "../assets/Uploads/Reunion-island-03.jpg";
import Reunionisland04 from "../assets/Uploads/Reunion-Island-04.jpg";
import Reunionisland05 from "../assets/Uploads/Reunion-Island-05.jpg";
import Reunionisland06 from "../assets/Uploads/Reunion-Island-06.jpg";
import Reunionisland07 from "../assets/Uploads/Reunion-Island-07.jpg";
import Reunionisland08 from "../assets/Uploads/Reunion-Island-08.jpg";

export function Reunion() {
  return (
    // GLOBAL REUNION
    <section>
      <header>
        <h2 className=" text-[#4f74bf] mx-2 front-normal text-[4rem] font-Smooch my-2 py-2">Indtryk fra Réunion</h2>
      </header>
      <figure className="grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-4  my-2 mx-0 px-0">
        <img src={Reunionisland01} alt="Réunion Island-01" />
        <img src={Reunionisland02} alt="Réunion Island-02" />
        <img src={Reunionisland03} alt="Réunion Island-03" />
        <img src={Reunionisland04} alt="Réunion Island-04" />
        <img src={Reunionisland05} alt="Réunion Island-05" />
        <img src={Reunionisland06} alt="Réunion Island-06" />
        <img src={Reunionisland07} alt="Réunion Island-07" />
        <img src={Reunionisland08} alt="Réunion Island-08" />
      </figure>
    </section>
  );
}
