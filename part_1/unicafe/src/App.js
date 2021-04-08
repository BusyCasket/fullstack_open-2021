import React, { useState } from 'react';

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ stats }) => {
  const good = stats[0].stat;
  const neutral = stats[1].stat;
  const bad = stats[2].stat;

  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const pos = good / all;

  if (all > 0) {
    return (
      <table>
        <tbody>
          {stats.map((stat, i) => (
            <Statistic key={i} text={stat.name} value={stat.stat > 0 ? stat.stat : ''} />
          ))}
          <Statistic text="all" value={all} />
          <Statistic text="average" value={isNaN(avg) ? 0 : avg} />
          <Statistic text="positive" value={isNaN(pos) ? 0 : pos} />
        </tbody>
      </table>
    );
  } else {
    return <p>no feedback given</p>;
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stats = [
    {
      name: 'good',
      stat: good,
    },
    {
      name: 'neutral',
      stat: neutral,
    },
    {
      name: 'bad',
      stat: bad,
    },
  ];

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>feedback statistics</h2>
      <Statistics stats={stats} />
    </div>
  );
};

export default App;
