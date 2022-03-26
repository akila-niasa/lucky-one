import React from 'react';

const Question = () => {
    return (
        <div className='container'>
            <div className='p-3'>
                <h1>HOW REACT WORKS</h1>
                <p>React isn't an  framework, it is a library for building composable user interfaces.When we create a script and give it to the browser then browser create a DOM stracture.React create virtual DOM.After that compare between two DOM.If there anything change between two DOM React gives it back.when there something change between two DOM React gives us the changes.</p>
            </div>
            <div className='p-3'>
                <h1>DIFFERENCE BETWEEN PROPS AND STATES</h1>
                <p>PROPS:Props always get propertice from parent component. It can't be modified.It gives us the value which we can use.
                    </p>
                    <p>
                    STATE:State always create propresties. It change can be asynchonous way.It can be modifed by useing this.useState.
                </p>
            </div>
        </div>
    );
};

export default Question;