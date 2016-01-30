var React = require('react');

var ListItem = React.createClass({
  getInitialState: function() {
    return {
      complete: false
    };
  },
  handleComplete: function(){
    this.setState({complete: !this.state.complete})
  },
  render: function() {
    var complete = this.state.complete;
    var style = {
      'text-decoration': 'none'
    };
    if (complete) {
      style = {
        'text-decoration': 'line-through'
      };
    }
    return (
      <li>
        <h4 onClick={this.handleComplete} style={style}>{this.props.text}</h4>
      </li>
    );
  }
});

module.exports = ListItem;