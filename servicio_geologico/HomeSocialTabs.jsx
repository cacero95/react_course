import React, { Component } from 'react';
class HomeSocialTabs extends Component {
  state = {
    update:null
  }
  
  handleClick = (param) => {
    let twitter = document.getElementById('Twitter')
    let facebook = document.getElementById('Facebook')
    let youtube = document.getElementById('Youtube')
    switch(param){
      case "Twitter":
        twitter.className = "activated"
        facebook.className = "desactivate"
        youtube.className = "desactivate"
        this.template(
          <div className="animated fadeInRightBig">
            <p>Noticias en Twitter</p>
          </div>
        )
      break
      case "Facebook":
        facebook.className = "activated"
        twitter.className = "desactivate"
        youtube.className = "desactivate"
        this.template(
          <div className="animated fadeIn">
            <p>Noticias en Facebook</p>
          </div>
        )
      break
      case "Youtube":
        youtube.className = "activated"
        facebook.className = "desactivate"
        twitter.className = "desactivate"
        this.template(
          <div className="animated fadeInRight">
            <p>Noticias en Youtube</p>
          </div>
        )
      break
    }
  }
  template(param){
    if(param){
      this.setState({
        update:param
      })
      return param
    }
    else {
      return(
        <div className="animated fadeInRightBig">
          <p>Noticias en Twitter</p>
        </div>
      )
    }
  }
  render(){
    return(
      <div className="HomeSocialTabs">
        <div className="SocialTitles">
          <span className="activated" key="Twitter" id="Twitter" onClick={()=>{this.handleClick('Twitter')}}>Twitter</span>
          <span className="desactivate" key="Facebook" id="Facebook" onClick={()=>{this.handleClick('Facebook')}}>Facebook</span>
          <span className="desactivate" key="Youtube" id="Youtube" onClick={()=>{this.handleClick('Youtube')}}>Youtube</span>
        </div>
        <div className="SocialDesc">
          {
            this.state.update === null ? this.template() : this.state.update
          }
        </div>
      </div>
    )
  }
}

export default HomeSocialTabs;