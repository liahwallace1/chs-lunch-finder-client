import React from 'react'
import ReactDOM from 'react-dom'

import {ScriptCache} from './lib/ScriptCache'
import GoogleApi from './lib/GoogleApi'

this.scriptCache = cache({
  google: 'https://api.google.com/some/script.js'
});

GoogleApi({
  apiKey: 'AIzaSyBHctnD2biEXNByZnGKdXRq836H0WPHu-8',
  libraries: ['places']
});

const Container = React.createClass({
  render: function() {
    return <div>Google</div>;
  }
})
export default GoogleApiComponent({
  apiKey: __GAPI_KEY__
})(Container)
