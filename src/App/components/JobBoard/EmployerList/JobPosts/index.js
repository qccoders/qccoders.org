import React, {Component} from 'react'

//styles
import './index.css'

export default class JobPosts extends Component {

  renderJobs = () => {
    return this.props.jobs.map((job) => {
      return (
        <li key={job.id}>
          <h4>{job.title}</h4>
          <p>{job.description}</p>
        </li>
      )
    })
  } 

  render() {
    return (
      <ul>
      {this.renderJobs()}
      </ul>
    )
  }
}
