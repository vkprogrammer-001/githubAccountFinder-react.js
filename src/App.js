import { Fragment, useState } from "react";
import "./App.css";
import UserCard from "./components/user-card/user-card";


export default function App() {
  
  // useState : is used to set state variables .
  // we will use this useStates to save user input and api result data .
  
  const [inputValue, setInputValue] = useState("");

  const [results, setResults] = useState([]);


  function handleOnChange(event) {
    // console.log(event)
    setInputValue(event.target.value);
  }



  //  js  : synchronous : step by step 


  // line 1
  // line 2
  //  line 3

  async function onSearchSubmit() {
    //  line one : geting data from api 
    //  rsetting the response data

    const results =  await findGithubAccounts(inputValue);

    // console.log(results[0])
    setResults(results);

  }

  const API_URL = "https://api.github.com";

  async function findGithubAccounts(query) {
    try {
      const response = await fetch(`${API_URL}/search/users?q=${query}`);
      const json = await response.json();
      return json.items || [];
    } catch (e) {
      throw new Error(e);
    }
  }

  // function foo (query) {
  //   const result = []
  //   fetch(`${API_URL}/search/users?q=${query}`)
  //   .then((response) => response.json())
  //   .then(data => {
  //     setResults(data?.items)
  //   })
  //   .catch(error => console.log(error))
  // }

  return (
      <main className="main">

        <h2>Project 5: GitHub Account Finder</h2>

        <div className="search-form">

            <input
              placeholder="Enter username or email"
              // onChange={handleOnChange}
              onChange={handleOnChange}
            />
            <button 
              onClick={onSearchSubmit}
              >Search</button>

        </div>

          <h3>Results</h3>
          <div id="results">
            <Fragment>
              {results.map((user) => (
                <UserCard
                  profileLink={user.avatar_url}
                  accountLink={user.html_url}
                  username={user.login}
                />
              ))}
            </Fragment>
          </div>
      </main>
  );
}
