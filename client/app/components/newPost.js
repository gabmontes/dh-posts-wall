import React, { Component } from 'react'

export default class NewPost extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  onChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  onClick() {
    const { onSubmit } = this.props
    onSubmit(this.state.value)
    this.setState({
      value: ''
    })
  }
  render() {
    const { fetching } = this.props
    const { value } = this.state
    return (
      <div style={{ margin: 10 }}>
        <div>
          <textarea onChange={this.onChange} value={value}/>
        </div>
        <button
          onClick={this.onClick}
          disabled={fetching || !value}>
          Enviar
        </button>
      </div>
    )
  }
}
