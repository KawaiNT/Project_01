import React, { Component } from 'react';
import './App.css';
import ScrollView from "./ScrollView";
import ScrollElement from "./ScrollElement";

class App extends Component {
  state = {
    persons: []
  }

  componentWillMount() {
    fetch('https://demo7725858.mockable.io/listPerson', {
      method: 'get'
    })
    .then(response => response.json())
      .then(data => this.setState({ persons: data.items }));
  }

  scrollTo = (name) => {
    this._scroller.scrollTo(name);
  }

  render() {
    return (
      <div className="app">
        {
          this.state.persons.map(({name}) => <button onClick={() => this.scrollTo(name)}>{name}</button>)
        }
        <ScrollView ref={scroller => this._scroller = scroller}>
          <div className="scroller">
            {this.state.persons.map(({ name, image}) => {
              return (
                <ScrollElement name={name}>
                  <div className="item">
                    <img src={image} />
                    {name}
                  </div>
                </ScrollElement>
              )
            })}
          </div>
        </ScrollView>
      </div>
    );
  }
}

export default App;
