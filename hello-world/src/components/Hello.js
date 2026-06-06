import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Maxwell</h1>
    //     </div>
    // )

    return React.createElement(
        'div', 
        {className: 'hello'}, 
        React.createElement('h1', null, 'Hello Maxwell'))
}

export default Hello