import React, { Component } from 'react';
import Dashboard from './components/Dashboard'
import './App.css';
import { isError } from 'util';

class App extends Component {
  
  state = {
    text: "",
    todos: [],
    user: null,
    isAuthenticated: false 
  }
  
  handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(() => {
      console.log("User Logged In Successfully")
    })
    .catch(error => {
      console.log("Something Went Wrong: ", error.message)
    })
  }



handleChange = e => {
  this.setState({ [e.target.name]: e.target.value})
}

//set up subs

//firebase.auth().onAuthStateChanged(user => (
  //user?
  //this.setState({
    //isAuthenticated: true,
    //user: user.displayName
  //})
//))


  render(){
  return (
    <div className="App">
    <h1> Welcome to React Fire Todos</h1>
    <Dashboard
    text={this.state.text}
    handleChange={this.handleChange}
    />
    </div>
  );
  }
  
  handleSubmit = e => {
    e.prevent.database().ref('todos')
    .push({ text: this.state.text })
    .then(() => {
      this.setState({ text: "" })
      console.log("Data Created Successfully")
    })
    .catch(error => {
      console.log("Something Went Wrong: ", error)
    })
  }

  handleRemove = todoId => {
    firebase.database().ref('todos/${todoId}')
    .remove()
    .then(() => console.log("Data Removed Successfully"))
    .catch(error => {
      console.log("Something Went Wrong", error)
    })
  }

  handleLogout =
  firebase.auth().signOut()
  .then(() => {
    console.log("User Logged Out Successfully")
  })
  .catch(error => {
    console.log("Something Went Wrong: ", error.message)
  })



  componentDidMount(){
    firebase.database().ref('todos')
    .on('value', snapshot => {
      const newStateArray = []
      snapshot.forEach(childSnapshot => {
        newStateArray.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      this.setState({ todos: newStateArray })
    })
  }
  
  render() {
    return (
      <div className="App">
        <H1>Welcome to React Fire Todos</H1>
        <Dashboard 
        text={this.state.text}
        todos={this.state.todos}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
