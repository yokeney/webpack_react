import React, { Component } from 'react';
import ReactDom from 'react-dom';

// import './css/index.less'
import './css/test.scss'
import './css/index.css'
import './css/style.css'

class App extends Component {
    render() {
        return (
          <div className="container"><p className="qq">asdsad</p></div>
        )
    }
};

ReactDom.render(
  <App />,
    document.getElementById('root')
)
