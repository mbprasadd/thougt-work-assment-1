import { Component } from "react";
import "./styles.css";

class App extends Component {
  state = {};

  componentDidMount() {
    this.displayData();
  }

  displayData = async () => {
    let options = {
      method: "GET",
    };

    let url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";

    let response = await fetch(url, options);
    console.log(response);
    if (response.ok) {
      let fetchedData = await response.json();
      console.log(fetchedData);
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}

export default App;
