import axios from "axios";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
import { useState } from "react";
interface customer {
  name: string;
  phone: string;
  date: number;
  month: number;
  year: number;
  person: string;
  area: string;
  time: string;
}
function Check() {
  const monthArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [reservationsCode, setReservationsCode] = useState(String);
  const [reservation, setReservation] = useState<customer[]>([]);
  const getData = async () => {
    const data = await axios.get(
      `http://localhost:3002/getReserved/${reservationsCode}`
    );
    if (data.status === 200) {
      setReservation([data.data]);
      setReservationsCode("");
    }
  };
  console.log(reservation);
  return (
    <>
      <div className="flex flex-col h-full w-full justify-between items-center">
        <Nav></Nav>
        <div className="h-full w-10/12 max-w-sm">
          <div className="flex flex-col justify-center items-center">
            <label className="form-control w-full max-w-xs ">
              <div className="label">
                <span className="label-text text-2xl underline">
                  Reservations Code
                </span>
              </div>
              <input
                type="text"
                placeholder="Reservations Code"
                className="input input-bordered w-full max-w-xs mt-3"
                onChange={(ev) => {
                  setReservationsCode(ev.target.value);
                }}
                value={reservationsCode}
              />
            </label>
            <button
              className="btn btn-success text-white mt-5 mb-5"
              onClick={getData}
            >
              Submit
            </button>
          </div>
          {reservation.length === 0 ? (
            <></>
          ) : (
            <>
              <div className="border-t-2 border-red-500">
                {reservation.map((customer: customer) => {
                  return (
                    <div className="mt-8">
                      <p className="text-3xl">Hello {customer.name}</p>
                      <p className="text-xl">Your Reservation is </p>
                      <div className="flex">
                        <p>Date : &nbsp;</p>
                        <span>
                          {customer.date}&nbsp;/&nbsp;
                          {monthArr[customer.month - 1]}&nbsp;/&nbsp;
                          {customer.year}
                        </span>
                      </div>
                      <p>Time : &nbsp;{customer.time}</p>
                      <p>Area : &nbsp;{customer.area}</p>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Check;
