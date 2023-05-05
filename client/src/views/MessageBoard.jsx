import React, { useState } from 'react';
import MessageForm from '../components/MessageForm';
import MessageDisplay from '../components/MessageDisplay';

const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");

    const youveGotMail = ( newMessage ) => {
        setCurrentMsg( newMessage );
    }

    return (
        <div>
            <MessageForm onNewMessage={ youveGotMail } />
            <MessageDisplay message={ currentMsg } />
        </div>
    )
}

export default MessageBoard