import React from "react";

class SearchNav extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark justify-content-between mb-4">
        <a className="navbar-brand">
          <i className="fab fa-unsplash fa-2x"></i>
          <span style={{ color: "orange" }}>Unsplach_</span>
          <span style={{ color: "white" }}>Finder</span>
        </a>
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default SearchNav;
