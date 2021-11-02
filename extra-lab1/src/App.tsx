import './App.css';
import HelperComponent from './components/HelperComponent';
import ParentComponent from './components/ParentComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <ParentComponent />
      <HelperComponent />
    </div>
  );
}

export default App;


/* Agenda

1. Typescript and JS
  - Typescript in functional components (defining types)
  - show React Developer Tools and debugger
  - Destructuring objects
  - Spread operator

2. Assistance with Labs, state handling in lab3, we went over a question
   on implementing the search input field along with it's functionality

*/