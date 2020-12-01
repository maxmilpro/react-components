// TODO

var groceries = ['Milk', 'Bread', 'Cheese'];

var GroceryList = () => (
  <ul>
    {groceries.map((grocery) =>
      <GroceryListItem item={grocery} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render () {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseOver={this.onListItemHover.bind(this)}>{this.props.item}</li>
    )
  }
}

ReactDOM.render(<GroceryList />, document.getElementById("app"));

