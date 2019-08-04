import React from "react";
import "./Chat.css";
import Message from "../Message";

class Chat extends React.Component {

    state = {messages: [], messageInput: ''};

    changeInputMessage = (event) => {
        const {value} = event.target;
        this.setState({messageInput: value});
    };

    sendMessageOnEnter = (event) => {
        if (event.key === 'Enter') {
            this.setState({messages: [...this.state.messages, {text: this.state.messageInput}], messageInput: ''});
        }
    };

    render() {
        return <div className="chat">
            <div className="message-list">
                <div className="messages">
                    {this.state.messages.map((msg, index) =>
                        <Message key={index} text={msg.text}/>
                    )}
                </div>
            </div>
            <input type="text" className="input-message"
                   value={this.state.messageInput}
                   onChange={this.changeInputMessage}
                   onKeyPress={this.sendMessageOnEnter}/>
        </div>;
    }
}

export default Chat;