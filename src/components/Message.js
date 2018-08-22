import React from 'react';

class Message extends React.Component{

    constructor(props){
        super(props)
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
        
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }

    render() {
        return (
            <div>
              
              <p onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>{this.props.message} </p>
              
              {this.state.isHovering && <div>{this.props.member.email}</div>}
            </div>
          );
      }
}

export default Message;