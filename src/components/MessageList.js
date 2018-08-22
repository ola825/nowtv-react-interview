import React from 'react';
import { connect } from "react-redux";
import {getChatLog, getMembersList} from '../service';
import {bindActionCreators} from 'redux';
import Message from '../components/Message';




class MessageList extends React.Component{

    componentDidMount(){
        this.props.getChatLog();
        this.props.getMembersList();
        
       
    }


    findMemberById(id){
        return this.props.members.find(function (member) { return member.id === id; }) 
    }

    findMessageById(id){
        console.log("Finding message with ID:" + id);
        console.log(this.props.messages.find(function (message) { return message.id === id; }))
    }

    render() {
        

        if(this.props.isLoading != false){
            return <div>
                <p> Messages Loading...</p>
                </div>
        }
        else{
            return <div>
           
           <h1>Message List</h1>

            
           <ul>
               
               {console.log(this.props)}
               {/* {this.findMessageById("b03569ae-ccbf-4975-8040-4daba638b407")} */}
                {this.props.messages.map((message) => (
                    
                    <Message key={message.id} message={message.message} member={this.findMemberById(message.userId)} />
                    
                ))}
            </ul>

        </div>

        }
        
      }
}
// const mapDispatchToProps = dispatch => ({
//     getChatLog: messages => dispatch(getChatLog()),

// })

const mapDispatchToProps = dispatch => bindActionCreators({getChatLog, getMembersList}, dispatch);

function mapStateToProps(state){
    return {
            messages: state.messages,
            members: state.members,
            isLoading: state.isLoading
            
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(MessageList);