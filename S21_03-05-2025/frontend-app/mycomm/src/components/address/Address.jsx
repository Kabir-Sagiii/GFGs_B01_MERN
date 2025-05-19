import React from "react";

function Address(props) {
  return (
    <div>
      <dl>
        <dt>
          <b>City Name</b>
        </dt>
        <dd>{props.addressInfo.city}</dd>

        <dt>
          <b>State Name</b>
        </dt>
        <dd>{props.addressInfo.state}</dd>
      </dl>
    </div>
  );
}

export default Address;
