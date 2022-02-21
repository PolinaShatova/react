import { Message } from './components';

// const Button = () => {
//   return (<button disabled>btn</button>);
// }
const content = 'any text'

function App() {
  return (
    <div className="App">
      <Message content = {content} />
    </div>
  );
}

export default App;
