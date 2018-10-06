import React, { Component } from 'react'
import marked from 'marked'
import Preview from './components/Preview'
import { Panel } from './components/Panel'
import { Editor, editorText } from './components/Editor'
import './App.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: editorText,
      editorClass: 'editor-container',
      previewClass: 'preview-container',
      icon: 'fa fa-arrows-alt',
      toggle: true
    }
    this.markedCb = this.markedCb.bind(this);
    this.handleEditor = this.handleEditor.bind(this);
    this.handlePreview = this.handlePreview.bind(this);
  }
  
  markedCb(e) {
    this.setState({
      text: e.target.value
    })
  }
  
  handleEditor() {
    if (this.state.toggle) {
      this.setState({
        editorClass: 'editor-container full-screen',
        previewClass: 'hide',
        icon: 'fa fa-compress'
      })
    } else {
      this.setState({
        editorClass: 'editor-container',
        previewClass: 'preview-container',
        icon: 'fa fa-arrows-alt'
      })  
    }
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }
  
  handlePreview() {
    if (this.state.toggle) {
      this.setState({
        previewClass: 'preview-container full-screen',
        editorClass: 'hide',
        icon: 'fa fa-compress'
      })
    } else {
      this.setState({
        previewClass: 'preview-container',
        editorClass: 'editor-container',
        icon: 'fa fa-arrows-alt'
      })
    } 
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }))
  }

  render() {
    return (
      <div className="grid">
          <Editor markedCallback={this.markedCb} onClick={this.handleEditor} newClass={this.state.editorClass} icon={this.state.icon}/>
        <Preview text={this.state.text} onClick={this.handlePreview} newClass={this.state.previewClass} icon={this.state.icon}/>
      </div>
    )
  }
}

marked.setOptions({
  breaks: true
});

export default App;
