import React, { Component } from 'react';
import Hero from './Hero';
import Cart from './Cart';
import FeatureList from './FeatureList';
import './App.css';

export default class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  }

  render() {   
    return (
      <div className="App">
        <Hero />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureList 
              features={this.props.features}
              selected={this.state.selected}
              updateFeature={(feature, newValue) => this.updateFeature(feature, newValue)}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            <Cart selected={this.state.selected}/>
          </section>
        </main>
      </div>
    );
  }
}

