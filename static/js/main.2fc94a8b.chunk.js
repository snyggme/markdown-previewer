(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(21)},15:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(9),r=n.n(o),s=(n(15),n(3)),c=n(4),l=n(7),d=n(5),u=n(6),h=n(1),m=n(2),f=n.n(m),w=function(e){return i.a.createElement("header",null,i.a.createElement("span",null,e.name),i.a.createElement("div",{className:"panel",onClick:e.onClick},i.a.createElement("i",{className:e.icon})))},p=function(e){function t(e){return Object(s.a)(this,t),Object(l.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("preview").innerHTML=f()(this.props.text)}},{key:"componentDidUpdate",value:function(){document.getElementById("preview").innerHTML=f()(this.props.text)}},{key:"render",value:function(){return i.a.createElement("div",{className:this.props.newClass},i.a.createElement(w,{name:"Previewer",onClick:this.props.onClick,icon:this.props.icon}),i.a.createElement("div",{id:"preview"}))}}]),t}(a.Component),v=function(e){return i.a.createElement("div",{className:e.newClass},i.a.createElement(w,{name:"Editor",onClick:e.onClick,icon:e.icon}),i.a.createElement("textarea",{onInput:e.markedCallback,id:"editor",type:"text"},b))},b="# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n  \nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n",k=(n(18),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={text:b,editorClass:"editor-container",previewClass:"preview-container",icon:"fa fa-arrows-alt",toggle:!0},n.markedCb=n.markedCb.bind(Object(h.a)(Object(h.a)(n))),n.handleEditor=n.handleEditor.bind(Object(h.a)(Object(h.a)(n))),n.handlePreview=n.handlePreview.bind(Object(h.a)(Object(h.a)(n))),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"markedCb",value:function(e){this.setState({text:e.target.value})}},{key:"handleEditor",value:function(){this.state.toggle?this.setState({editorClass:"editor-container full-screen",previewClass:"hide",icon:"fa fa-compress"}):this.setState({editorClass:"editor-container",previewClass:"preview-container",icon:"fa fa-arrows-alt"}),this.setState(function(e){return{toggle:!e.toggle}})}},{key:"handlePreview",value:function(){this.state.toggle?this.setState({previewClass:"preview-container full-screen",editorClass:"hide",icon:"fa fa-compress"}):this.setState({previewClass:"preview-container",editorClass:"editor-container",icon:"fa fa-arrows-alt"}),this.setState(function(e){return{toggle:!e.toggle}})}},{key:"render",value:function(){return i.a.createElement("div",{className:"grid"},i.a.createElement(v,{markedCallback:this.markedCb,onClick:this.handleEditor,newClass:this.state.editorClass,icon:this.state.icon}),i.a.createElement(p,{text:this.state.text,onClick:this.handlePreview,newClass:this.state.previewClass,icon:this.state.icon}))}}]),t}(i.a.Component));f.a.setOptions({breaks:!0});var C=k;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.2fc94a8b.chunk.js.map