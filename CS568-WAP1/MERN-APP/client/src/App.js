import "./App.css";
import "./style.css";
import "./user.css";

import { useEffect, useState } from "react";
import axios from "axios";

import Users from "./components/Users";
import UserForm from "./components/UserForm";

function App() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setusers(response.data);
    });
  }, []);

  const removeUser = (id) => {
    setusers(users.filter((u) => u._id !== id));
  };

  return (
    <div className="App">
      <h2>Users</h2>
      <>
        {users.map((user) => {
          return (
            <>
              <Users
                key={user._id}
                id={user._id}
                fname={user.firstname}
                lname={user.lastname}
                dob={user.dob}
                about={user.about}
                education={user.education}
                email={user.email}
                gender={user.gender}
                hobbies={user.hobbies}
                removeUser={removeUser}
              ></Users>
            </>
          );
        })}
      </>
      <UserForm />
    </div>
  );
}
export default App;

// export default class App extends Component {
//   state = {
//     posts: [],
//   };
//   componentDidMount = () => {
//     axios.get("http://localhost:3000/users").then((response) => {
//       console.log(response);
//       this.setState({ posts: response.data });
//     });
//   };

//   render() {
//     return this.state.posts.map((item) => {
//       return (
//         <>
//           <Users
//             key={item._id}
//             fname={item.firstname}
//             lname={item.lastname}
//             dob={item.dob}
//           ></Users>
//         </>
//       );
//     });
//   }
// }
