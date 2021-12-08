import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary'
import Router from './Router/Router';
import EvilHackers from './components/EvilHackers';

function App() {
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={EvilHackers}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ErrorBoundary >
    </div>
  );
}

export default App;
