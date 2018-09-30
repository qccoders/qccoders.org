import React, {Component} from 'react'
import logoSample from '../../../img/logos/sample_logo.png'
import JobPosts from './JobPosts'

//styles
import './index.css'

const employers = [
  {
    name: 'Aquent',
    logo: logoSample,
    jobs: [
      {
        id:1,
        title: 'Junior Frontend Dev',
        description: 'A hard worker'
      },
      {
        id:2,
        title: 'Mid Frontend Dev',
        description: 'A better worker'
      },
      {
        id:3,
        title: 'Senior Frontend Dev',
        description: 'A super hard worker...the best'
      },
  ]
  }
]

class EmployerList extends Component {

  renderEmployers = () => {
    console.log(employers)
    return employers.map(employer => {
      return (
        <li key={employer.name}>
          <img src={employer.logo} alt={employer.name} /> 
          <JobPosts jobs={employer.jobs}/>
        </li>
      )
    }) 
  }

  render() {
    
    return (
      <div>
        <ul>
          {this.renderEmployers()}
        </ul>
      </div>
    )
    }
}

export default EmployerList