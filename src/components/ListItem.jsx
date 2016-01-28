var React = require('react');
var ListItem = React.createClass({
  render: function() {
    return (
      <li>
        <h4>{this.props.language}</h4>
      </li>  
      );
  }
});

module.exports = ListItem;

