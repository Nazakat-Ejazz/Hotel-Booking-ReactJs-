import { React, useState } from "react";
import "./header.css";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faPerson,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// react-date-range css
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  // destination
  const [destination, setDestination] = useState("");

  // Date => inside header search
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // PersonCount => inside header search

  const [openOptions, setOpenOptions] = useState(false);

  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  // handle search item counts
  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // handle Search
  const navigate = useNavigate();
  const handleSearch = () => {
    // console.log(destination + date.toString() + options.toString);
    navigate("/hotels", { state: { destination, date, options } });
  };
  return (
    <div>
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentals</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts ? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels unlock instant savings of 10% or
                more with a free lamadev booking account!
              </p>
              <button className="headerBtn">Sign In / Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going ?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>

                <div className="headerSearchItem">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="headerIcon"
                  />
                  <span
                    className="headerSearchText"
                    onClick={() => {
                      setOpenDate(!openDate);
                      openOptions && setOpenOptions(false);
                    }}
                  >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
                  {openDate && (
                    <DateRange
                      className="date"
                      editableDateInput={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelectin={false}
                      ranges={date}
                      minDate={new Date()}
                    />
                  )}
                </div>

                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    className="headerSearchText"
                    onClick={() => {
                      setOpenOptions(!openOptions);
                      openDate && setOpenDate(false);
                    }}
                  >{`${options.adults} adults , ${options.children} children ,room# ${options.room}`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => {
                              handleOptions("adults", "d");
                            }}
                            disabled={options.adults <= 1}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adults}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => {
                              handleOptions("adults", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => {
                              handleOptions("children", "d");
                            }}
                            disabled={options.children <= 1}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => {
                              handleOptions("children", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            className="optionCounterButton"
                            onClick={() => {
                              handleOptions("room", "d");
                            }}
                            disabled={options.room <= 1}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => {
                              handleOptions("room", "i");
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
