import React from "react";

type Props = {};

const MonthDropdown = (props: Props) => {
  const months = [
    {
      id: 1,
      label: "January",
      value: "jan",
    },
    {
      id: 2,
      label: "February",
      value: "feb",
    },
    {
      id: 3,
      label: "March",
      value: "mar",
    },
    {
      id: 4,
      label: "April",
      value: "apr",
    },
    {
      id: 5,
      label: "May",
      value: "may",
    },
    {
      id: 6,
      label: "June",
      value: "jun",
    },
    {
      id: 7,
      label: "July",
      value: "jul",
    },
    {
      id: 8,
      label: "August",
      value: "aug",
    },
    {
      id: 9,
      label: "September",
      value: "sep",
    },
    {
      id: 10,
      label: "October",
      value: "oct",
    },
    {
      id: 11,
      label: "November",
      value: "nov",
    },
    {
      id: 12,
      label: "December",
      value: "dec",
    },
  ];
  return (
    <select
      name="month"
      id="month"
      className="text-primary-blue outline-none w-fit"
    >
      {months.map((month) => (
        <option value={month.value} key={month.id} className="text-black">
          {month.label}
        </option>
      ))}
    </select>
  );
};

export default MonthDropdown;
