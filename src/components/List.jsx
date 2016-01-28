var React = require('react');
var ListItem = require('./ListItem.jsx');

var languages = [{"id":1,"text":"English"},{"id":2,"text":"German"},{"id":3,"text":"French"},{"id":4,"text":"Spanish"}];

var List = React.createClass({
  render: function() {
    var listItems = languages.map(function(item) {
      return <ListItem key={item.id} language={item.text} />
    });

    return (<ul>{listItems}</ul>);
  }
});

module.exports = List;