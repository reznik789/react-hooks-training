import React from "react";
import { arrayOf, string } from "prop-types";

const List = 

({data}) => {
  return (
    <div>
      <ul>
        {data.map(link => (
          <li key={link}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  data: arrayOf(string).isRequired
};

export { List };
