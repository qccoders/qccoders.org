import React from 'react'
import Header from './Header'
import GroupDetails from './GroupDetails'

//styles
import './index.css';

const App = props => (
  <div className='Home'>
    <Header className='Header'/>
    <div className="App container-fluid">
      <div className="row">
        <div className="col">
          <GroupDetails />
        </div>
      </div>
    </div>
  </div>
);

export default App;
