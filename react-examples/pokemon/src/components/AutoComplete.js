import { useState } from "react";

const AutoComplete = ({ suggestions }) => {
  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search Pokemon"
        className="search-pokemon"
      />
    </>
  );
};
export default AutoComplete;
