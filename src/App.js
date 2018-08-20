import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countdown from 'react-countdown-now';
import locationLogo from './images/location.svg';
import arrowRight from './images/right-arrow.svg';
import arrowLeft from './images/left-arrow.svg';
import Carousel from 'nuka-carousel';
import yudaFoto from './images/blue-yuda.png';
import nikeFoto from './images/blue-nike.png';

export class PagingDots extends React.Component {
  getIndexes(count, inc) {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  }

  getListStyles() {
    return {
      position: 'relative',
      margin: 0,
      top: -10,
      padding: 0
    };
  }

  getListItemStyles() {
    return {
      listStyleType: 'none',
      display: 'inline-block'
    };
  }

  getButtonStyles(active) {
    return {
      border: 0,
      background: 'transparent',
      color: '#330b0b',
      cursor: 'pointer',
      padding: 10,
      outline: 0,
      fontSize: 24,
      opacity: active ? 1 : 0.5
    };
  }

  render() {
    const indexes = this.getIndexes(
      this.props.slideCount,
      this.props.slidesToScroll
    );
    return (
      <ul style={this.getListStyles()}>
        {indexes.map(index => {
          return (
            <li style={this.getListItemStyles()} key={index}>
              <button
                style={this.getButtonStyles(this.props.currentSlide === index)}
                onClick={this.props.goToSlide.bind(null, index)}
              >
                &bull;
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

class App extends Component {
  componentDidMount() {
    window.scrollTo(0, 1);
  }
  render() {
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <Carousel
              renderCenterLeftControls={({ previousSlide, currentSlide }) => {

                return (
                  <a href={'#'} style={{ opacity: currentSlide === 0 ? .5 : 1 }} onClick={(e) => {
                    e.preventDefault()
                    previousSlide()
                  }} title="Previous"><img src={arrowLeft} /></a>
                )
              }}
              renderCenterRightControls={({ nextSlide, currentSlide, slideCount }) => {

                return (
                  <a href={'#'} style={{ opacity: currentSlide === (slideCount - 1) ? .5 : 1 }}
                    onClick={(e) => {
                      e.preventDefault()
                      nextSlide()
                    }}
                    title="Next"><img src={arrowRight} /></a>
                )
              }}

              renderBottomCenterControls={(props) => (<PagingDots {...props} />)}
            >
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
                    return <p className="App-countdown">{days}:{hours}:{minutes}:{seconds}</p>
                  }}
                />
                <p className="App-location"><a href="https://www.google.com/maps/search/?api=1&query=-6.9069256,108.46252240000001" target="_blank"><img src={locationLogo} alt="Click here for the location" /> <span style={{ display: 'block' }}>Location</span></a></p>

              </div>
              <div className="App-header-container">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p className="App-intro">The Groom</p>
                <h1 className="App-title">Yuda Sukmana</h1>
                <p className="App-intro"><img style={{ maxWidth: 400, width: '80%', height: 'auto', border: '2px solid #330b0b' }} src={yudaFoto} /></p>
                <p className="App-intro">

                  a passionate & creative full-stack developer, was born in Tasikmalaya on April 24th 1992.

                </p>

              </div>
              <div className="App-header-container">
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <p className="App-intro">The Bride</p>
                <h1 className="App-title">Nike Sartika</h1>
                <p className="App-intro"><img style={{ maxWidth: 400, width: '80%', height: 'auto', border: '2px solid #330b0b' }} src={nikeFoto} /></p>
                <p className="App-intro">
                  an electrical engineering teacher, was born in Cirebon on April 2nd 1993.
                </p>

              </div>
            </Carousel>
          </header>
          {/* <section className="App-section-profile">
            <div className="App-profile-container">
              <div>
                <h3 className="profile-title">The Groom</h3>
                <p> Yuda Sukmana</p>
                <p> A passionate and creative Full-Stack developer </p>
              </div>
            </div>

          </section> */}

        </div>
      </Router>
    );
  }
}

export default App;
