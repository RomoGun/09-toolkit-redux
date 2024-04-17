import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'
import { decrement, increment, incrementBy2 } from './Store/Slices/Counter';

function App() {
  
  const { counter } = useSelector( state => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is { counter }</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <br />
        <br />
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <br />
        <br />
        <button onClick={ () => dispatch( incrementBy2(2) ) }>
          Increment by 2
        </button>
      </div>
    </>
  )
}

export default App
