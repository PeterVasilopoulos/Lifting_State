import React from 'react'

const MessageHistory = (props) => {


    return (
        <div>
            <hr />
            <h1>Message History</h1>
            {
                props.messageArray.map((msg, i) => {
                    return(
                        <div key={i}>
                            <p>{msg}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MessageHistory