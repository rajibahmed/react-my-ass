import React from 'react';
import axios from 'axios';

const Card = (props) => (
  <div>
    { props.name }
  </div>
)

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {projects: [ {name: 'hellow'}, {name: 'meiww'} ] } ;
  }
   componentDidMount() {
     var self = this;

    axios.get('https://api.github.com/users/rajibahmed/repos',{
      headers: {
        accept: 'application/json'
      }
    })
      .then(response => response.data )
      .then((data) => { return data.map(r => { name: r.full_name } ) })
      .then(names => self.setState({ projects: names } ))
  }
  render() {
    let projects = this.state.projects
    return (
      <div>
        { projects.map( (project, i) => <Card key={i} {...project} /> ) }
      </div>
    );
  }
}
