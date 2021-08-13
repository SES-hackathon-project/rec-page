import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Recommendation from './components/recommendation.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      recs: []
    }
  }

  componentDidMount() {
    const apiUrl = "later";
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          recs: data
        })
      })
  }

  render() {
    const rec = {
      rec_name: "restaurant 1"
    };
    this.state.recs = [rec, rec, rec, rec]
    return (
      <div>
        <div className="all-recs">
          {this.state.recs.map((rec) => {
            return <Recommendation rec={rec}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
