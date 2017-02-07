import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

import ImageList from './components/image_list';

class App extends Component {
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
      .then(response => this.setState({ images: response.data.data }));
  }

  render() {
    return (
      <div className='app'>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

Meteor.startup(() => {
  render(<App />, document.querySelector('#root'));
});
