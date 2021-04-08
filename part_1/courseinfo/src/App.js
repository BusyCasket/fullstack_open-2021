import React from 'react';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  /* step 01 - hardcoding a lot
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  */

  /* step 02 - more efficient with two arrays
  const parts = props.parts;
  const exercises = props.exercises;
  */
  const content = props.content;
  return (
    <div>
      {
        /*
          step 03 - reduced to one array of objects which can be "looped" through here
        */
        content.map((instance, index) => {
          return <Part key={index} part={instance.part} exercises={instance.exercises} />;
        })
      }
      {/* step 02 - more efficient with two arrays
      <Part part={parts[0]} exercises={exercises[0]} />
      <Part part={parts[1]} exercises={exercises[1]} />
      <Part part={parts[2]} exercises={exercises[2]} />
      */}
    </div>
  );
};

const Total = (props) => {
  const total = props.total.reduce((sum, part) => {
    // step 03 - important: the key of returned object and (initially) passed in object as "sum" must be identical (in this case "exercises")
    return { exercises: sum.exercises + part.exercises };
  });
  return <p>{total.exercises}</p>;
};

const App = () => {
  /* step 01 - hardcoding a lot
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;
  */

  /* step 02 - more efficient with two arrays
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14];
  */

  /*
    step 03 - reduced to one array of objects
  */
  const course = {
    name: 'Half Stack application development',
    content: [
      {
        part: 'Fundamentals of React',
        exercises: 10,
      },
      {
        part: 'Using props to pass data',
        exercises: 7,
      },
      {
        part: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.content} />
      <Total total={course.content} />
    </div>
  );
};

export default App;
