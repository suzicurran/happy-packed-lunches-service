import React from "react";
import StreakBlockContainer from "./StreakBlockContainer";
import { fetchTest } from "./queries";

const LoginForm = () => (
  <form action="/login" method="post">
    <div>
      <label>Username:</label>
      <input type="text" name="username" />
      <br />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" name="password" />
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>HAPPY PACKED LUNCHES</p>
      </header>
      <LoginForm />
      <StreakBlockContainer />
    </div>
  );
}

export default App;
