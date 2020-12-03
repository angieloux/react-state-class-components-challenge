import React, {Component} from "react";

class App extends Component {
      constructor(props){
        super(props)
        // code here
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
