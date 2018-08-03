import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countdown from 'react-countdown-now';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <div className="App-header-container">
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <p className="App-intro">We're Getting Married</p>
              <h1 className="App-title">Yuda & Nike</h1>
              <p className="App-intro">
                <Route path="/invite/:name" render={({ match }) => {
                  return <span><strong>{match.params.name}</strong>, </span>
                }} />
                you are invited to join us celebrating our wedding on:</p>
              <p className="App-date">16.09.2018</p>
              <Countdown
                date={'Sun, 16 Sep 2018 09:00:00'}
                renderer={({ completed, days, hours, minutes, seconds }) => {
                  if (completed) {
                    return null;
                  }
                  return <p>{days}:{hours}:{minutes}:{seconds}</p>
                }}
              />
            </div>
          </header>
          <section>

          </section>

        </div>
      </Router>
    );
  }
}

export default App;
