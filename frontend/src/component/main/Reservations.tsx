import { useState } from "react";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Dayjs } from "dayjs";
import axios from "axios";
import { Link } from "react-router-dom";
interface date {
  name: string;
  phone: string;
  date: number;
  month: number;
  year: number;
  person: string;
  area: string;
  time: string;
}
function Reservations() {
  const [person, setPerson] = useState(String);
  const [monthIndex, setMonthIndex] = useState(Number);
  const [day, setDay] = useState(Number);
  const [year, setYear] = useState(Number);
  const [reservedComplete, setReservedComplete] = useState(false);
  const [name, setName] = useState(String);
  const [phone, setPhone] = useState(String);
  const [area, setArea] = useState(String);
  const [time, setTime] = useState(String);
  const [complete, setComplete] = useState(false);
  const [customerId, setCustomerId] = useState(String);
  const reservation = async () => {
    if (
      name &&
      phone &&
      day !== null &&
      monthIndex !== null &&
      year !== null &&
      person &&
      area &&
      time
    ) {
      const reservationDate: date = {
        name: name,
        phone: phone,
        date: day,
        month: monthIndex + 1,
        year: year,
        person: person,
        area: area,
        time: time,
      };

      const respond = await axios.post(
        "http://localhost:3002/reserved",
        reservationDate
      );
      setCustomerId(respond.data._id);
      if (respond.status === 200) {
        setReservedComplete(true);
      }
    } else {
      setComplete(true);
      setTimeout(() => {
        setComplete(false);
      }, 2000);
    }
  };
  console.log(customerId);
  return (
    <div className="flex flex-col h-full w-full justify-between items-center">
      <Nav></Nav>
      {reservedComplete ? (
        <>
          <div className="flex flex-col justify-start w-10/12 max-w-4xl items-center h-full">
            <p>Your Reservations Code is</p>
            <p className="border-2 p-5 border-slate-800 mt-3">{customerId}</p>
            <div className="border-t-2 border-slate-700 mt-10 w-10/12  max-w-md flex justify-center">
              <p className="mt-3">
                Check Reservations
                <Link to="/checkReservations">
                  <button className="btn btn-active btn-link text-red-500">
                    Click
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="w-10/12 max-w-md flex justify-center border-b-2 border-red-600">
              <p className="mt-3 text-center">Check Reservations</p>
              <Link to="/checkReservations">
                <button className="btn btn-active btn-link text-red-500 ">
                  Click
                </button>
              </Link>
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center mt-3">
              <p className="underline text-2xl">Reservations</p>
              <label className="form-control w-8/12 max-w-xs">
                <div className="label">
                  <span className="label-text">Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(ev) => {
                    setName(ev.target.value);
                  }}
                />
              </label>
              <label className="form-control w-8/12 max-w-xs">
                <div className="label">
                  <span className="label-text">Phone Number</span>
                </div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="input input-bordered w-full max-w-xs"
                  onChange={(ev) => {
                    setPhone(ev.target.value);
                  }}
                />
              </label>
              <label className="form-control w-8/12  max-w-xs">
                <div className="label">
                  <span className="label-text underline">Party Size</span>
                </div>
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={(ev) => {
                    setPerson(ev.target.value);
                  }}
                >
                  <option selected disabled>
                    Person
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </select>
              </label>
              <div className="w-full flex flex-col justify-center items-center">
                <div className="max-w-xs w-8/12">
                  <div className="label">
                    <span className="label-text underline">Date</span>
                  </div>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      onChange={(value: Dayjs | null) => {
                        if (value) {
                          setMonthIndex(value.month());
                          setDay(value.date());
                          setYear(value.year());
                        }
                      }}
                      className="w-full"
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="flex justify-center items-center w-8/12">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text underline">Area</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs h-fit text-pretty"
                    onChange={(ev) => {
                      setArea(ev.target.value);
                    }}
                  >
                    <option selected disabled>
                      Choose an area.
                    </option>
                    <option>Open Back Yard - Outside</option>
                    <option>Café Hub - Inside</option>
                    <option>Café Hub - Bar</option>
                  </select>
                </label>
              </div>
              <div className="flex justify-center items-center w-8/12">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text underline">Time</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-xs"
                    onChange={(ev) => {
                      setTime(ev.target.value);
                    }}
                  >
                    <option selected disabled>
                      Time
                    </option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                    <option>17:00</option>
                    <option>18:00</option>
                  </select>
                </label>
              </div>
              <div className="h-60 flex justify-center">
                {complete ? (
                  <>
                    <div
                      role="alert"
                      className="alert alert-error mb-5 p-2 w-11/12 mt-5 h-fit"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>
                        Please complete all fields before submitting your
                        reservation..
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-success text-white mt-5 mb-5"
                      onClick={reservation}
                    >
                      Submit
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <Footer></Footer>
    </div>
  );
}

export default Reservations;
