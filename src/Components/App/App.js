import './App.css';
import SearchResults from "../SearchResults/SearchResults";
import React from 'react'
import Playlist from "../Playlist/Playlist";

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
          ],
          playlistName: 'test_pl',
          playlistTracks: []
      };
      this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
      if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
        return;
      } else {
          this.state.playlistTracks.push(track);
      }
  }

  render() {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <div className="App-playlist">
                <SearchResults searchResults={this.state.searchResults}/>
                <Playlist playlistName={this.state.playlistName}
                          playlistTracks={this.state.playlistTracks} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
