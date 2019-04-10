import React from 'react'
import './PostCreate.css'
import { Context } from '../App'

class PostCreate extends React.Component {
  state = {
    author: '',
    title: '',
    send: false
  }

  handleChange = event => {
    const { name, value } = event.target

    if (name && value) this.setState({[name]: value})
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await this.props.context.putDataFromLocalAPI('posts', this.state)

    if (response.ok) {
      this.setState({author: '', title: '', send: true})

      window.setTimeout(() => this.setState({send: false}), 2000)
    }
  }

  render () {
    return (
      <>
        <form className="App-form" onSubmit={this.handleSubmit}>
          <label>
            Autor:
            <input
              onChange={this.handleChange}
              name="author"
              value={this.state.author}
            />
          </label>
          <label>
            Titulo:
            <input
              onChange={this.handleChange}
              name="title"
              value={this.state.title}
            />
          </label>
          <input type="submit" value="Enviar" />
        </form>
        { this.state.send ? <p>Datos enviados</p> : null }
      </>
    )
  }
}

function PostCreateWrapper(props) {
  return (
    <Context.Consumer>
      { context => <PostCreate context={context} {...props} /> }
    </Context.Consumer>
  )
}

export default PostCreateWrapper
