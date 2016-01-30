var React = require('react');
var ListManager = require('./ListManager.jsx')

var NewList = React.createClass({
  render: function() {

    var createList = function(title, index) {
      return (
        <ListManager key={index + title} title={title} />
      );
    };

    return (
      <div>{this.props.lists.map(createList)}</div>
    );
  }
});

module.exports = NewList;