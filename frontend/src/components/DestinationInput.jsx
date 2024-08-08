/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const DestinationInput = ({
  destination,
  setDestination,
  startDate,
  setStartDate,
  days,
  setDays,
}) => {
  return (
    <section className="max-w-lg my-10 px-6">
      <div>
        <label
          htmlFor="destination"
          className="block text-sm font-medium text-gray-700"
        >
          Destination:
        </label>
        <input
          type="text"
          name="destination"
          className="border-2 rounded-sm border-black"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />

        <label
          htmlFor="start-date"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date :
        </label>
        <input
          type="date"
          id="start-date"
          className="border-2 rounded-sm border-black w-1/2"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <label
          htmlFor="days"
          className="block text-sm font-medium text-gray-700"
        >
          Days
        </label>
        <select
          id="days"
          className="border-2 rounded-sm border-black w-1/2"
          value={days}
          onChange={(e) => setDays(e.target.value, 10)}
          required
        >
          {[...Array(30).keys()].map((day) => (
            <option key={day + 1} value={day + 1}>
              {day+1} day{day > 0 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default DestinationInput;
