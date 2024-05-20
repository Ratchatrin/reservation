import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWindowWidth);
  return (
    <>
      {/* <div className="grid grid-cols-2 items-center justify-items-center">
        <img
          src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
          alt="logo"
          className="w-9/12"
        />
        <div>
          <button className="btn  bg-red-400 text-white mr-3">LogIn</button>
          <button className="btn bg-red-700 text-white">SignIn</button>
        </div>
      </div> */}
      <div className="flex justify-evenly items-center w-full ">
        <Link to="/" className="flex justify-center ">
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
            alt="logo"
            className="w-3/12 max-w-2xl min-w-32"
          />
        </Link>
        {windowWidth < 1024 ? (
          <>
            <div className="dropdown dropdown-end w-4/12">
              <div
                tabIndex={0}
                role="button"
                className="btn mr-10 bg-transparent border-none outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/reservations">
                  <li>
                    <a>Reservations</a>
                  </li>
                </Link>
                <li>
                  <a>Food</a>
                </li>
                <li>
                  <a>Drinks</a>
                </li>
                <li>
                  <a>Location</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="flex text-2xl gap-3 mr-5  ">
              <a
                href="https://i.pinimg.com/564x/00/3f/64/003f64625fd41adbf8f8742b3efe0209.jpg"
                target="_blank"
              >
                <p>Food</p>
              </a>
              <a
                href="https://i.pinimg.com/564x/59/f6/95/59f695029a952c355f4a4b253fd3be26.jpg"
                target="_blank"
              >
                <p>Drinks</p>
              </a>
              <p>Locations</p>
              <Link to="/reservations">
                <p>Reservations</p>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Nav;
