import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./list.css";

// import components
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const List = () => {
  const { state } = useLocation();
  const [destination, setDestination] = useState(state.destination);
  const [date, setDate] = useState(state.date);
  const [options, setOptions] = useState(state.options);

  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearchTitle">Search</h1>

            <div className="listItem">
              <label htmlFor="destination">Destination</label>
              <input type="text" placeholder={destination} />
            </div>

            <div className="listItem">
              <label htmlFor="date">Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].startDate,
                  "MM/dd/yyyy"
                )}`}{" "}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate(item.selection)}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            <div className="listItem">
              <label htmlFor="options">Options</label>
              <div className="listItemOptions">
                <div className="listOptionItem">
                  <span className="listOptionText">
                    Min Price <small> (per night)</small>
                  </span>
                  <input type="text" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">
                    Max Price <small>(per night)</small>
                  </span>
                  <input type="text" className="listOptionInput" />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Adults</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adults}
                    min={1}
                  />
                </div>

                <div className="listOptionItem">
                  <span className="listOptionText">Children </span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="listOptionItem">
                  <span className="listOptionText">Room </span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button className="search">Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
