import React from 'react';


const MessageDisplay = (props) => {
    return (
        <>
            <h1>Message Display - Current Message</h1>
            <pre>{props.message}</pre>
        </>
    );
};

export default MessageDisplay;