import { Link } from "react-router-dom";
import logo from "../images/footer_logo.png";

import Navigation from "./Navigation";

function Footer({ bgColor }) {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={` ${bgColor ? bgColor : ""} m-h-screen mt-12 w-screen px-6`}
    >
      <section
        id="footer"
        className=" container mx-auto overflow-hidden  p-2  "
      >
        <div className="relative  flex  flex-wrap items-center justify-between gap-6  ">
          {/* <div className="absolute -left-10 -right-10 -z-50 rounded-md  bg-accent100 p-3" /> */}
          <Link to="/" className="-m-1.5 flex items-center  p-1.5">
            <span className="sr-only">Pizzarella</span>
            <img className="h-8  w-auto sm:h-16" src={logo} alt="logo" />
          </Link>
          <ul className=" flex justify-between gap-3 sm:gap-5">
        
            <Navigation />
          </ul>
          <ul className="ml-auto flex gap-5 sm:ml-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.5em"
              viewBox="0 0 512 512"
            >
              {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>{" "}
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
            </li>
          </ul>
        </div>
        <hr className="border-1 my-12 border-bg300" />
        <div className="flex  flex-wrap justify-center gap-3 text-sm md:gap-12 md:text-base ">
          <p className="order-3 flex justify-center gap-3  sm:order-1 sm:flex">
            <span className="year">{currentYear}</span>
            <span> &copy;gregsypek.</span>
            <span>All rights reserved.</span>
          </p>
          <ul className="order-1 flex justify-evenly gap-3  sm:order-1 ">
            <li className="text-center">Privacy Policy</li>
            <li className="text-center">Terms of Service</li>
            <li className="text-center">Cookies Settings</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Footer;
