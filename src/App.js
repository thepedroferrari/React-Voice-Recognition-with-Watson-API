import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

const token = "%2FMs%2FvKHSR1woZC0ONa%2Fq%2F2bIbaqX5AmAPYjA1y%2F2YFTuBUZQKCCfdqdBekVFk0mJvghBA7MAFl1N7pMyRFzucuFiZG1doUgEyP0zeT4Gul1fc3%2Fi68WwvQ01XAvTksZTve6znJWfAWi3ik1HiBpYLp%2FP8HzPeQc0jyvlPyQKAKXCcE%2BzuVNG2sVgZShgLPRaVDO1E6nPZe9wxF90%2BGOAbNyVQo3H3Ye6bKPHrA0JcIGKT17Ir4lVj5bmJYZSNEgeUwq6GmVlSRDzt7uuVhdbPZngjoJr%2BH86l5Qv033QHlDYvmVOXGjan%2BfIAuUaxSExLffiGPjSS7xLZ7OedRByCRlQfPPJy0QAVNRcEiuDB2edHbsMOlB0uidieW252eymLUvKjQeDYnqgqAPY%2F7ShKEqa9PAPub6uBZVdbltAQYSRX%2FXuPYdb5yLmWfUJd%2B15xlDjJggiUOZuHkyNwO2rwpW%2BWgMLYyNLqgV%2BTjVOfiGhUvNeyvJSP6Yfvb1mghpewmrOrYpgKIz3aTClxURoWkfpq3vZHrpMMOLe%2FNi3e7lls2MBjy4fYQ7%2BycM2hwm807I3bN6VFdcfsK%2BsbAabf7e%2BD2lK8dfOWGgT6%2FVLf0lcjKtk0qOGjXVb1zrxOFhdXIG5Pli84JGZ64j0vT%2FrwiwkfzUhUU4XI%2F653e1Y1FT%2BTr9LwOmmf08Ic%2BBMMlcDIUmAxIPDPzJKnq5xZV3lDm28vJSvQME2bzFpaJaJW%2B00wvQXVRyr%2FmyN4L7diYLMG68HdjDDe5fSTYnvIatWQELzBkARnT0YWz%2BXv%2FvsvDIuIXg4FkybpMuv9YQzmKTKu8vJ44Bo5U2%2BoSk3ANATsgqG4UUI1MnSvE5s9qgWuEFmBR31ZLKOGbDAAcUH6xmDimOdgJRZM6ZphwU9pTX3LtksW1oAKl10eN0i1r266pD3T4kjfgIqH31QCQvUzawXFjUsg9QVSQhDlaP%2F2cjZs8f1AfzKPkzn";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }


  onListenClick() {

    document.querySelector('button').classList.add('listening');
    document.querySelector('button').textContent = 'Listening';

     fetch('https://stream.watsonplatform.net/speech-to-text/api/v1/models?watson-token=' + token)
    .then(function(response) {
        return response.text();
    }).then( (token) => {
      var stream = recognizeMic({
          token: '%2FMs%2FvKHSR1woZC0ONa%2Fq%2F2bIbaqX5AmAPYjA1y%2F2YFTuBUZQKCCfdqdBekVFk0mJvghBA7MAFl1N7pMyRFzucuFiZG1doUgEyP0zeT4Gul1fc3%2Fi68WwvQ01XAvTksZTve6znJWfAWi3ik1HiBpYLp%2FP8HzPeQc0jyvlPyQKAKXCcE%2BzuVNG2sVgZShgLPRaVDO1E6nPZe9wxF90%2BGOAbNyVQo3H3Ye6bKPHrA0JcIGKT17Ir4lVj5bmJYZSNEgeUwq6GmVlSRDzt7uuVhdbPZngjoJr%2BH86l5Qv033QHlDYvmVOXGjan%2BfIAuUaxSExLffiGPjSS7xLZ7OedRByCRlQfPPJy0QAVNRcEiuDB2edHbsMOlB0uidieW252eymLUvKjQeDYnqgqAPY%2F7ShKEqa9PAPub6uBZVdbltAQYSRX%2FXuPYdb5yLmWfUJd%2B15xlDjJggiUOZuHkyNwO2rwpW%2BWgMLYyNLqgV%2BTjVOfiGhUvNeyvJSP6Yfvb1mghpewmrOrYpgKIz3aTClxURoWkfpq3vZHrpMMOLe%2FNi3e7lls2MBjy4fYQ7%2BycM2hwm807I3bN6VFdcfsK%2BsbAabf7e%2BD2lK8dfOWGgT6%2FVLf0lcjKtk0qOGjXVb1zrxOFhdXIG5Pli84JGZ64j0vT%2FrwiwkfzUhUU4XI%2F653e1Y1FT%2BTr9LwOmmf08Ic%2BBMMlcDIUmAxIPDPzJKnq5xZV3lDm28vJSvQME2bzFpaJaJW%2B00wvQXVRyr%2FmyN4L7diYLMG68HdjDDe5fSTYnvIatWQELzBkARnT0YWz%2BXv%2FvsvDIuIXg4FkybpMuv9YQzmKTKu8vJ44Bo5U2%2BoSk3ANATsgqG4UUI1MnSvE5s9qgWuEFmBR31ZLKOGbDAAcUH6xmDimOdgJRZM6ZphwU9pTX3LtksW1oAKl10eN0i1r266pD3T4kjfgIqH31QCQvUzawXFjUsg9QVSQhDlaP%2F2cjZs8f1AfzKPkzn',
          objectMode: true, // send objects instead of text
          extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
          format: false // optional - performs basic formatting on the results such as capitals an periods
      });
      stream.on('data', (data) => {
        this.setState({
          text: data.alternatives[0].transcript
        })
        document.querySelector('.quote__credits').classList.remove("hidden");
      });
      stream.on('error', function(err) {
          console.log(err);
      });
      document.querySelector('#stop').onclick = stream.stop.bind(stream);
      document.querySelector('.quote__credits').classList.add("hidden");
    }).catch(function(error) {
        console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <figure className="quote">
          <blockquote className="quote__body">{this.state.text} &nbsp;</blockquote>
          <figcaption className="quote__credits hidden">You, <cite>just now</cite></figcaption>
        </figure>
        <button onClick={this.onListenClick.bind(this)}>Speak</button>
      </div>
    );
  }
}

export default App;
