import React from 'react';

const Hello = (props) => {
  return (
    <div>
      {' '}
      <p>Hello {props.name}, you are {props.age} years old</p>{' '}
    </div>
  );
};
const App = () => {
  const name = "Carla";
  const age = 34;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age="31" />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
