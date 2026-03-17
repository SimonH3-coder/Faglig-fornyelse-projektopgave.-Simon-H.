<link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"></link>;

export function Navagation() {
  return (
    // GLOBAL NAVIGATION
    <nav className="flex flex-col font-[Montserrat, sans-serif]  bg-[#4f74bf] text-[#e4b834] min-[600px]:flex-row min-[600px]:justify-between min-[1300px]:justify-between">
      <ul className="flex flex-col m-0 list-none min-[600px]:flex-row min-[1300px]:justify-between">
        <li>
          <a href="#" className="block py-2 px-4 no-underline text-[#e4b834] bg-[#4f74bf] transition ease-in-out duration-300 hover:[filter:brightness(0.8)_contrast(2)] min-[1300px]:p-4">
            Forside
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 no-underline text-[#e4b834] bg-[#4f74bf] transition ease-in-out duration-300 hover:[filter:brightness(0.8)_contrast(2)] min-[1300px]:p-4">
            DESTINATION
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 no-underline text-[#e4b834] bg-[#4f74bf] transition ease-in-out duration-300 hover:[filter:brightness(0.8)_contrast(2)] min-[1300px]:p-4">
            OM BRIANAIR
          </a>
        </li>
        <li>
          <a href="#" className="block py-2 px-4 no-underline text-[#e4b834] bg-[#4f74bf] transition ease-in-out duration-300 hover:[filter:brightness(0.8)_contrast(2)] min-[1300px]:p-4">
            KONTAKT
          </a>
        </li>
      </ul>
      <ul className="m-0 flex list-none flex-col p-0 min-[600px]:flex-row min-[1300px]:justify-between">
        <li>
          <a href="#" className="block px-4 py-2 no-underline text-white bg-[#26658d] transition duration-300 ease-in-out hover:filter-[brightness(0.8)_contrast(2)] min-[1300px]:p-4">
            SIGNIN
          </a>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 no-underline text-[#080705] bg-[#f4c95d] transition duration-300 ease-in-out hover:filter-[brightness(0.8)_contrast(2)] min-[1300px]:p-4">
            SIGNUP
          </a>
        </li>
      </ul>
    </nav>
  );
}
