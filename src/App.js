import React, {Component} from "react";

class App extends Component {
      constructor(props){
        super(props)
        // code here
        this.state = {
          userInput: "",
          songs: ["Despacito", "Summer Of 69", "Hotel California", "Single Ladies", "If I were a boy", "Run the World", "Waka Waka" ]
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.filterSongs = this.filterSongs.bind(this);
      }

      handleClick(e){
        // code here
        e.preventDefeault();
      }

      filterSongs(e){
        // code here
        this.setState({
          userInput: e.target.value
        })
      }

      render(){
        const filteredSongs = this.state.songs.filter(song => {
          return song.toLowerCase().includes(this.state.userInput)
        });
        return(
          <div data-testid="app" >
            <h1> SEARCH SONG </h1>
            <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.filterSongs} />
                    <input type="submit" value="Filter" />
            </form>
            {filteredSongs.map( (song) =>  <p key={song}> {song} </p>)}
          </div>

        )
      }
}
export default App
