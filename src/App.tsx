import React from "react";
import "./App.css";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Works from "./components/Works";
import Timeline from "./components/Timeline";
import Credits from "./components/Credits";
import Videos from "./components/Videos";

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Profile />
        <Timeline />
        <Works />
        <Videos />
        <Credits />
      </Layout>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
};

export default App;
