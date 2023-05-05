import react, { useState } from 'react';


const MessageForm = (props) => {
    // Declaring state variables
    const [msg, setMsg] = useState("");

    // Handles our form submission
    const handleSubmit = (e) => {
        // Prevents page reload on submit click
        e.preventDefault();
        // Sends message to message board
        props.onNewMessage(msg);
        // Clears the text box
        setMsg("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Message Form - Set Message</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
            ></textarea> <br />
            <input type="submit" value="Send Message" />
        </form>
    );
};

export default MessageForm;