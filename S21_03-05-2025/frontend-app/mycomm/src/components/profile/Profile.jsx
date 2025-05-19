import React from "react";
import "./Profile.css";
import Address from "../address/Address";
import Contacts from "../contacts/Contacts";
import { data } from "./ProfileData";
function Profile() {
  var city = "hyderabad";
  var state = "TS";

  return (
    <div className="profileContainer">
      <img
        src="https://c.pxhere.com/photos/93/c7/businessman_man_portrait_male_costume_business_office_office_style-815849.jpg!d"
        width={300}
        height={400}
      />

      <div>
        <div>
          <dl>
            <dt>
              <b>User Name</b>
            </dt>
            <dd>Raj Verma</dd>
            <dt>
              <b>Gender</b>
            </dt>
            <dd>male</dd>
          </dl>
        </div>

        <div className="rightCompContainer">
          <Address city={city} state={state} addressInfo={data} />
          <Contacts />
        </div>
        <button>Raj Reddy </button>
        <button>Sneha Reddy</button>
      </div>
    </div>
  );
}

export default Profile;
