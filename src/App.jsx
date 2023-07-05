import React, { Component } from "react";
import './App.css'
class App extends Component {
  state = {
    person: {
      fullName: "Kelechi David",
      bio: "I'm a software engineer.",
      imgSrc: "./src/assets/kc.PNG",
      profession: "Software Engineer",
    },
    show: false,
    intervalId: null,
    timeSinceMounted: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMounted: prevState.timeSinceMounted + 1,
      }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, timeSinceMounted } = this.state;

    return (
      <div>
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile}>Toggle Profile</button>
        {show && (
          <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt="my photo" className="image"/>
            <p>Profession: {person.profession}</p>
          </div>
        )}
        <p>Time since mounted: {timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;
