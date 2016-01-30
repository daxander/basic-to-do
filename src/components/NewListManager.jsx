var React = require('react');
var NewList = require('./NewList.jsx');

var NewListManager = React.createClass({
  getInitialState: function() {
    return {
      lists: [], newListTitle: ''
    };
  },
  onChange: function(e) {
    this.setState({newListTitle: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();

    var currentLists = this.state.lists;

    currentLists.push(this.state.newListTitle);

    this.setState({lists: currentLists, newListTitle:''});
  },
  render: function() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newListTitle} />
          <button>New List</button>
        </form>
        <NewList lists={this.state.lists} />
      </div>
    );
  }
});

module.exports = NewListManager;