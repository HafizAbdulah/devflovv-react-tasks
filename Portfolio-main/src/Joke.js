import React, { Component } from 'react'

export default class Joke extends Component {
    state={joke: {}, jokes: []};

    componentDidMount(){

        fetch('https://official-joke-api.appspot.com/random_joke')
        .then (response => response.json())
        .then (json => this.setState({joke:json}))
        // .catch (error => alert (error.message));
    }

    fetchJockes =()=>{
        fetch('https://official-joke-api.appspot.com/random_five')
        .then (response => response.json())
        .then (json => this.setState({jokes:json}))
        // .catch (error => alert (error.message))
    }
  render() {
    const {setup,punchline}=this.state.joke
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <p>{setup} <em>{punchline}</em></p>
        <button onClick = {this.fetchJockes}>click me!</button>
        {this.state.jokes.map(joke => (<Joke key={joke.id} joke={joke} />))}
      </div>
    )
  }
}
