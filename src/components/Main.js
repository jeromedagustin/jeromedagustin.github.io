import PropTypes from 'prop-types'
import React from 'react'

import { Intro, About, Work } from './Articles'





class Main extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name] : value,
    });
  }


  handleSubmit = event => {
    event.preventDefault();
    this.props.onCloseArticle();
    alert('Email Sent!');
  }

  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <Intro article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
        <About article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
        <Work article={this.props.article} articleTimeout={this.props.articleTimeout} close={close}/>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
