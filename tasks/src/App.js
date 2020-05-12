import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import './App.css';

class Home extends React.Component{
  state = {
    loading: true,
    tasks: [],
  }

  componentDidMount(){
    axios({
      method: "GET",
      url:"http://localhost:3000",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(({ data }) => this.setState({ tasks: data, loading: false })) 
    .catch(error => console.dir(error))

  }
  render(){
    const {loading, tasks } = this.state
    if (loading) return <p>...Loading</p>
     return (
       <div classname="tasks">
       {tasks && tasks.length > 0 && tasks.map(task => (
         <div classname="task" key={task.id}>
         <h2>{task.title}</h2>
         <p>{task.description}</p>
          </div>
       ))}
       </div>

    )
  }
}

class createTasks extends React.Component {
  state = {
    title: "",
    description:"",
    done:"true"
  }

  handleChange = (e) =>  {
    const { name: value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "POST",
      baseURL: "http://localhost:3000",
      url: "/",
      data: this.state,
      headers={
        "Content-Type": "application/json"
      }
    })
    .then(() => this.props.history.push("/")) 
  } 

  render(){
    return(
       <form onSubmit={this.handleSubmit}>
        <label htmlFor="title"> Title</label>
        <input 
          type="text"
          name="title"
          id="title"
          onChange={this.handleChange}
          value={this.state.title}
      />
      <label htmlFor="description"> Description</label>
        <input 
          type="text"
          name="description"
          id="description"
          onChange={this.hand}
          value={this.state.description}
        />
      <button type="submit"> Create Task</button>
    </form>) 
   
  } 
  
}

// class UpdateTasks extends React.Component {
//   state = {
//     title: "",
//     description:"",
//     done:"true"
//   }

//   handleChange = (e) =>  {
//     const { name: value } = e.target;
//     this.setState({ [name]: value })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();

//     axios({
//       method: "PUT",
//       baseURL: "http://localhost:3000",
//       url:`/${this.props.params.id}`,
//       data: this.state,
//       headers={
//         "Content-Type": "application/json"
//       }
//     })
//     .then(() => this.props.history.push("/")) 
//   } 

//   render(){
//     return(
//        <form onSubmit={this.handleChange}>
//         <label htmlFor="title"> Title</label>
//         <input 
//           type="text"
//           name="title"
//           id="title"
//           onSubmit={this.state.task}
//           value={this.state.title}
//       />
//       <label htmlFor="description"> Description</label>
//         <input 
//           type="text"
//           name="description"
//           id="description"
//           onSubmit={this.state.description}
//           value={this.state.description}
//         />
//       <button type="submit"> Create Task</button>
//     </form>) 
   
//   }

  
// }

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" component={Home}> </Route>
        <Route exact path="/create" component={createTasks}> </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
