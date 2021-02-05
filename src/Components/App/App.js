import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import React from 'react'

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          searchResults : [
              {
                  name: 'name1',
                  artist: 'artist1',
                  album: 'aa'
              },
              {
                  name: 'name1',
                  artist: 'artist1',
                  album: 'aa'
              },
              {
                  name: 'name1',
                  artist: 'artist1',
                  album: 'aa'
              },
          ]
      }
  }

  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
