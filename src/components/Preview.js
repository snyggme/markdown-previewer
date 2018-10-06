import React, { Component } from 'react'
import marked from 'marked'
import { Panel } from './Panel'

class Preview extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.getElementById('preview').innerHTML = marked(this.props.text)
  }
  componentDidUpdate() {
    document.getElementById('preview').innerHTML = marked(this.props.text)
  }
  render() {
    return (
      <div className={this.props.newClass}>
        <Panel name='Previewer' onClick={this.props.onClick} icon={this.props.icon}/>
        <div id="preview"></div>
      </div>
    )
  }
}

export default Preview