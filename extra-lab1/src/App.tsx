import './App.css';
import HelperComponent from './components/HelperComponent';
import ParentComponent from './components/ParentComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      Learn react
      <ParentComponent />
      <HelperComponent />
    </div>
  );
}

export default App;


/* Agenda

1. Typescript and JS
  - Typescript in functional components (defining types)
  - Destructuring objects
  - Spread operator

2. Assistance with Lab4

*/