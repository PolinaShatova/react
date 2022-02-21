import { Message } from './components';

// const Button = () => {
//   return (<button disabled>btn</button>);
// }

function App() {
  return (
    <div className="App">
      <message>Lorem ipsum sodales vivamus proin curabitur, mauris lectus integer sagittis odio, at eget mauris diam, donec maecenas orci auctor,</message>
      <message content={'Lorem ipsum sodales vivamus proin'}>
      </message>
    </div>
  );
}

export default App;
