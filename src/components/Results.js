
import React, { Component } from 'react';



class Results extends Component {
  constructor() {
    super();
    this.state = {
      effect: "",
    }
  }

  getUserChoice = (e) => {
    this.setState({
      effect: e.target.value,
    })
  }

  render() {
    return <div className="results">
        <div className="wrapper">
          <section id="query" className="query">
            <form>
              <select name="effects">
              <option onClick={this.getUserChoice} value="relaxed">relaxed</option>
              <option onClick={this.getUserChoice} value="creative">creative</option>
              <option onClick={this.getUserChoice} value="focused">focused</option>
              <option onClick={this.getUserChoice} value="happy">happy</option>
              <option onClick={this.getUserChoice} value="anxious">relief from anxiety</option>
              <option onClick={this.getUserChoice} value="pain">relief from pain</option>
              </select>
            </form>
          </section>
        </div>
      </div>;
  }
}

export default Results;