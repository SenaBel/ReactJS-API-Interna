import React, { Component } from 'react';
import api from './api'


class App extends Component {

  state = {
    artigos: [],
  }

  async componentDidMount(){
    const response = await api.get('/artigo')

    // console.log(response.data)

    this.setState({artigos: response.data})
  }

  render() {
    const {artigos} = this.state
    console.log(artigos)
    return (
      <div>
        <h1>List Articles</h1>
        <ul>
          {artigos.map(artigo => (

            <li key={artigo._id}>
              <h2>Titulo: {artigo.titulo} </h2>
              <p>Conteúdo: {artigo.conteudo} </p>
            </li>

          ))}
        </ul>
      </div>
    );
  }
}

export default App
