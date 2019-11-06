import React, {Component} from 'react';

import App from './src/App';

export default class AppView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  	const msg = this.props.msg;

    return (
      <div>
        <App msg={msg}/>
      </div>
    );
  }
}
