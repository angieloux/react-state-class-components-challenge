import React, {Component} from "react";

class App extends Component {
      constructor(props){
        super(props)
        // code here
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.filterSongs = this.filterSongs.bind(this);
      }

      handleClick(){
        // code here
      }

      filterSongs(){
        // code here
      }
      render(){
        return(
          <div>
            <h1> SEARCH SONG </h1>
            <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.filterSongs} />
                    <input type="submit" value="Filter" />
            </form>
            {/* list songs here */}
          </div>

        )
      }
}
export default App
