import React from "react";

class Dropdown extends React.Component {
  ref = React.createRef();
  state = { open: false };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.ref.current && !this.ref.current.contains(event.target)) {
      this.setState({ open: false });
    }
  };

  onOptionClick = (option) => {
    this.setState({ open: false });
    this.props.addField(option);
  };

  render() {
    const optionsList = this.props.options.map((option) => {
      return (
        <li key={option[0]} onClick={() => this.onOptionClick(option[0])}>
          {option[0]}
        </li>
      );
    });

    const showList = this.state.open && (
      <div className="options">
        <ul>{optionsList}</ul>
      </div>
    );

    return (
      <div className="dropdown" ref={this.ref}>
        <button
          type="button"
          className="button"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          +
        </button>
        {showList}
      </div>
    );
  }
}

export default Dropdown;
