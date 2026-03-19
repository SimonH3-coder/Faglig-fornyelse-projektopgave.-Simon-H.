import islandmp4 from "../assets/Uploads/island.mp4";

export function Destination() {
  return (
    // GLOBAL DESTINATION
    <section className="container mx-auto px-4">
      <h2 className="text-[#4f74bf] mx-2 font-normal text-[4rem] font-Smooch my-2 py-2">Destination Juni 2025</h2>
      <figure className="grid gap-4 grid-cols-1 md:grid-cols-2 ">
        <video className="block w-full" src={islandmp4} controls></video>
        <figcaption className="text-[#333333] text-[1.5rem] font-Montserrat my-4 py-4 px-0">
          <article>
            <h3 className="text-[#4f74bf] mx-2 front-normal text-[2rem] font-Montserrat my-2 py-2">Réunion island</h3>
            <p className="my-2 py-2 px-0">
              <strong>Øst for Madagaskar,</strong> og <strong>Vest for Mauritius </strong> ligger det tropiske paradis <strong>Réunion Island.</strong>
              Øen er et <strong>Fransk Departement.</strong>
            </p>
            <p className="my-2 py-2 px-0">
              Réunion er et multikulturelt samfund sammensat af mennesker oprindeligt fra Frankrig, Mozambique, Indien, Kina, Madagaskar og Comorerne. Hovedsprogene er <strong>Creolsk og Fransk.</strong> Og møntfoden er Euro.
            </p>
            <p className="my-2 py-2 px-0">Den ophavsmæssige mangfoldigheden sætter især sit tydelige præg på det lokale "Creolske" køkken. Øens "Cirques", Piton del la Furnaise, imponerende vandfald og de fascinerende lava-tunneller er unikke for Réunion</p>
            <p className="my-2 py-2 px-0">Kolonitiden har efterladt farverige, velbevarede bygninger, og den livlige kulturelle blanding smitter af på både sproget og i køkkenet. Juni til august er den tørreste periode, hvor der også er mindre varmt.</p>
            <footer className="flex justify-end">
              <a className="text-[#333333] text-base font-Montserrat my-4 py-4" href="#">
                Læs mere:
              </a>
            </footer>
          </article>
        </figcaption>
      </figure>
    </section>
  );
}
