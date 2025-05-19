import { Component } from "react";

class User extends Component {
  constructor() {
    super();

    this.state = {
      topic1: "Properties",
      topics2: "elements",
      topics3: "flex",
      topic4: "grid",
    };
  }

  updateData = () => {
    this.setState({
      topic1: "Prop1",
      topics2: "state",
      topics3: "FC",
      topic4: "Context API",
    });
  };

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <ol>
          <li>{this.state.topic1}</li>
          <li>{this.state.topics2}</li>
          <li>{this.state.topics3}</li>
          <li>{this.state.topic4}</li>
        </ol>

        <button onClick={this.updateData}>Update Topics</button>
      </div>
    );
  }
}

export default User;
