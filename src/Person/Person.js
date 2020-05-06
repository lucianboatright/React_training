import React from 'react';

const person = () => {
    return <p>Im a Person and this is dynamic {Math.floor(Math.random() * 20)}</p>
};

export default person