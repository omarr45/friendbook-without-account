import './App.css';

import { submitMessage } from './utils/functions';

window.Buffer = window.Buffer || require('buffer').Buffer;

function App() {
  return (
    <div className='App'>
      <h2>First, add the key to local storage</h2>
      <button
        onClick={() => {
          try {
            submitMessage({
              message: 'Message: test from Omar',
              content: 'Content: test from Omar',
            });
          } catch (e) {
            console.log('error', e);
          } finally {
            console.log('finished');
          }
        }}>
        Click me to send a test message
      </button>
    </div>
  );
}

export default App;
