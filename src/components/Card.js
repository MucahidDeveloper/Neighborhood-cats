import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5">
      <img
        alt="cute cat"
        src={`https://robohash.org/${id}?set=set4`}
        height={200}
        width={200}
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
