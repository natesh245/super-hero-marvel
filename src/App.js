import React from "react";

import "./App.css";

import CharacterCard from "./CharacterCard/CharacterCard";
import SearchForm from "./SearchForm/SearchForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      searchInput: "",
      cards: <h2>search for your Marvel Hero/Villains</h2>,
    };
    this.SubmitHandler = this.SubmitHandler.bind(this);
    this.RequestHandler = this.RequestHandler.bind(this);
    this.ClickHandler = this.ClickHandler.bind(this);
  }

  ClickHandler(event) {
    console.log(event.target);
  }

  SubmitHandler(event) {
    event.preventDefault();

    this.setState({
      searchInput: event.target.children[0].value,
    });
  }

  RequestHandler() {
    this.setState({ cards: <p>loading.....</p> });
    const nameStartsWith = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${this.state.searchInput}&limit=100&ts=hello&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=5d15ba411c15d546cee77f749c09da2c`;
    fetch(nameStartsWith)
      .then((response) => response.json())
      .then((chars) => {
        this.setState({ results: chars.data.results });
      })
      .then(() => {
        this.cards = this.state.results.map((result) => {
          const thumbnailurl =
            result.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
              ? result.thumbnail.path +
                "/landscape_incredible." +
                result.thumbnail.extension
              : "https://westpawprint.com/wp-content/uploads/2020/01/marvel.jpg";

          return (
            <CharacterCard
              name={result.name}
              key={result.id}
              thumbnail={thumbnailurl}
              onClick={this.ClickHandler}
            />
          );
        });
        this.setState({
          cards: this.cards,
        });
        console.log(this.state.results);
      });
  }
  render() {
    return (
      <div className="App">
        <SearchForm SubmitHandler={this.SubmitHandler} />
        <h3>
          {this.state.results.length === 0
            ? "0 character loaded"
            : `${this.state.results.length} characters loaded`}
        </h3>
        <div className="char-container">{this.state.cards}</div>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevStates, snapshot) {
    if (this.state.searchInput !== prevStates.searchInput) {
      this.RequestHandler();
    }

    if (this.state.searchInput === "") {
      alert("enter the search element");
    }
  }
}

export default App;
