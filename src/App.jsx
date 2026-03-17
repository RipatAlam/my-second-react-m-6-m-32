import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";
import "./App.css";

import { Suspense } from "react";

const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const fetchFriends = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
  }

const fetchPosts = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

function App() {
  //const friendsPromise = fetchFriends();
  //const postsPromise = fetchPosts();

  function handleClick() {
    alert("Sucessfully clicked");
  }

  const handleClickTwo = () => {
    alert("Sucessfully click two");
  };


  const handleClickThree = (num) => {
    const result = num + 5;
    alert("Sucessfully Add New Number: " + result);
  };

  return (
    <>
      <h1>Get started</h1>

    <Players></Players>

      {/*<Suspense fallback={<h4>Post are comming...</h4>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>*/}

      {/*<Suspense fallback={<h1>Loading...</h1>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>*/}

      {/*<Suspense fallback={<h1>Friends are coming for treat...</h1>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>*/}
      
      <Batsman></Batsman>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClickTwo}>Click Me Two</button>
      <button onClick={() => handleClickThree(10)}>Click Me Three</button>
    </>
  );
}

export default App;
