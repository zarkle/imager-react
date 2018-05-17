import React from 'react'

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      error: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit(e) {
    e.preventDefault()
    let { username, email, password } = this.state
    this.props.onComplete({ username, email, password })
    .catch(error => this.setState({ error }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.error ?
          <div>
            <p>{this.state.error.message}</p>
          </div>
          :
          undefined
        }

        {this.props.buttonText === 'signup' ?
          <input
            type="email"
            name="email"
            placeholder="email@email.com"
            value={this.state.email}
            onChange={this.handleChange}/>
          :
          undefined
        }

        <input
          type="text"
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}/>

        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    )
  }
}
