import { useState, useEffect } from "react";
import "./Users.css";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsersData();
  }, []);
  //   var data = [<p>hi</p>, <p>hello</p>];

  const getUsersData = () => {
    axios
      .get("https://randomuser.me/api/?results=150")
      .then((res) => {
        console.log(res.data.results); //res = {}
        setUsers(res.data.results);
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  };

  return (
    <div className="usersContainer">
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, quasi?
        Minima, ullam totam fuga quas tempore itaque hic placeat voluptas?
        Tenetur harum doloribus odio. Magni sint rerum nulla officiis recusandae
        nisi! Commodi maiores dicta eos recusandae blanditiis reprehenderit
        laborum iste vero fugiat officiis numquam, illum exercitationem eius
        natus quaerat neque earum tempore quisquam veniam, quam iusto reiciendis
        id expedita dolor. Eum dolorem quisquam, cupiditate velit pariatur nihil
        ipsum quos tempore magni possimus aut voluptatum soluta illum, autem
        natus est nulla dolore iure! Ab aliquid officiis, autem distinctio vel,
        magnam sunt illo, odit provident harum ipsum sint suscipit ipsa? Dicta
        harum, autem, explicabo id, cumque nihil sequi cupiditate quisquam animi
        ut cum aspernatur excepturi! Explicabo nobis voluptates nisi alias ea
        dolore tempora cumque numquam molestiae officia, nostrum dicta odio
        architecto rerum eos commodi sint! Nesciunt veniam eum autem praesentium
        saepe repudiandae voluptatibus aspernatur iure quas culpa itaque, id
        aliquam consectetur ipsam eius facere numquam quam libero non vel iusto
        dolores labore adipisci aut. Praesentium, repudiandae neque? Quibusdam
        ipsam vel rerum quae magnam, nihil hic consequuntur quasi dignissimos
        quod numquam qui explicabo, quam totam, sit dolor nobis est officiis
        distinctio voluptatum facere at. Exercitationem enim numquam fuga
        suscipit delectus laborum, accusantium corrupti.
      </p>

      {/* <h2>{data}</h2> */}

      {/* <div className="usersCard">
        {users.length > 0 && (
          <ol>
            {users.map(function (ele) {
              return (
                <li>
                  {ele.name.first} {ele.name.last}
                </li>
              );
            })}
          </ol>
        )}
      </div> */}

      <div className="usersCard">
        {users.length > 0 &&
          users.map((user) => {
            return (
              <div className="card">
                <img src={user.picture.medium} width="300" height={200} />
                <h3>
                  {user.name.first} {user.name.last}
                </h3>
                <p>{user.email}</p>
                <p>{user.gender}</p>
                <button>Profile Details</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Users;
