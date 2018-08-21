import React from 'react';
import { connect } from "react-redux";
import {getChatLog} from '../service';
import {bindActionCreators} from 'redux';
import Message from '../components/Message';




class MessageList extends React.Component{

    componentDidMount(){
        this.props.getChatLog();
       
    }

    render() {
        console.log(this.props)

        if(this.props.isLoading != false){
            return <div>
                <p> Messages Loading...</p>
                </div>
        }
        else{
            return <div>
           
           <h1>Message List</h1>
            
           <ul>
                {this.props.messages.map((message) => (
                    
                    <Message key={message.id} message={message.message} />
                    
                   
                ))}
            </ul>

        </div>

        }
        
      }
}
// const mapDispatchToProps = dispatch => ({
//     getChatLog: messages => dispatch(getChatLog()),

// })

const mapDispatchToProps = dispatch => bindActionCreators({ getChatLog }, dispatch);

function mapStateToProps(state){
    return {
            messages: state.messages,
            isLoading: state.isLoading
            
    };
}




export default connect(mapStateToProps, mapDispatchToProps)(MessageList);