import { Component } from "react";
import "./styles.css";

class App extends Component {
  state = { input: "", mealsData: [] };

  componentDidMount() {
    this.displayData();
  }

  displayData = async () => {
    let options = {
      method: "GET",
    };
    let url = "https://www.themealdb.com/api/json/v1/1/search.php?s";
    let response = await fetch(url, options);
    console.log(response);
    if (response.ok) {
      let fetchedData = await response.json();

      let newData = fetchedData.meals;
      this.setState({ mealsData: newData });
    }
  };

  searchInput = (event) => {
    this.setState({ input: event.target.value });
  };

  searchButton = () => {};

  render() {
    const { input, mealsData } = this.state;

    let name = mealsData.filter((each) => {
      each.strMeal == input;
    });

    return (
      <div className="App">
        <h1>Meal Finder Application</h1>
        <input
          type="search"
          onChange={this.searchInput}
          id="inputSearch"
          placeholder="Search Meal"
        />
        <br />
        <button className="buttonsearch" onClick={this.searchButton}>
          search
        </button>
        <p className="mealName">{name}</p>
      </div>
    );
  }
}

export default App;
