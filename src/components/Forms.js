import React, { Component } from 'react';

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      comments: '',
      skills: ''
    };
  }

  handleUsenameChange = event => {
    this.setState({
      userName: event.target.value
    });
  };
  handleCommentsChange = event => {
    this.setState({
      comments: event.target.value
    });
  };
  handleSkillsChange = event => {
    this.setState({
      skills: event.target.value
    });
  };

  handleSubmit = event => {
    alert(
      `${this.state.userName}, ${this.state.comments}, ${this.state.skills}`
    );
    event.preventDefault();
  };

  render() {
    const { userName, comments, skills } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="">User Name</label>
            <input
              type="text"
              value={userName}
              onChange={this.handleUsenameChange}
            />
          </div>

          <div>
            <label htmlFor="">comments</label>
            <textarea
              type="text"
              value={comments}
              onChange={this.handleCommentsChange}
            />
          </div>

          <div>
            <label htmlFor="">User Name</label>
            <select value={skills} onChange={this.handleSkillsChange}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>

          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
