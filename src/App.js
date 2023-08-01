import logo from './logo.svg';
import './App.css';
import FormControls from './components/FormControls';
import MemoDemo from './components/MemoDemo';
import ParentComp from './components/ParentComp';
import APIFetch from './components/APIFetch';
import PaginationFrontend from './MachineCoding/PaginationFrontend';
import PaginationBackend from './MachineCoding/PaginationBackend';

function App() {
  return (
    <div className="App">
      {/* <FormControls /> */}
      {/* <MemoDemo /> */}
      {/* <ParentComp /> */}
      {/* <APIFetch /> */}
      {/* <PaginationFrontend /> */}
      <PaginationBackend />
    </div>
  );
}

export default App;
