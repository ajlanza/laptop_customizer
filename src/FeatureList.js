import React, { Component } from 'react';
import FeatureItem from './FeatureItem';
import slugify from 'slugify';
export default class FeatureList extends Component {

  render() {
    return Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
        const options = this.props.features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <FeatureItem 
                key={itemHash} 
                item={item}
                feature={feature}
                selected={this.props.selected}
                updateFeature={this.props.updateFeature}
              />
          );
        });
          
        return (
          <fieldset className="feature" key={featureHash}>
            <legend className="feature__name">
              <h3>{feature}</h3>
            </legend>
            {options}
          </fieldset>
        );
      });
  }
}