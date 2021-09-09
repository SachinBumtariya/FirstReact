//Using JSX & without using JSX return
import React from 'react';

const Hello = () => {
    //Using JSX 

    // return (
    // <div>
    //     <h1>Using Jsx </h1>
    // </div>
    // );

    //without using JSX

    //return React.createElement('div',null,'<h1>Without JSX</h1>')
    return React.createElement(
        'div',
        null,
        React.createElement('h1',null,'Without JSX')
        )
}

export default Hello