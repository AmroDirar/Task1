import logo from './logo.svg';
import './App.css';
import Classcomponent from './Classcomponent';
import Functioncomponent from './Functioncomponent';
function App() {
  var name;
  var message;
  return (
   <>
   <Classcomponent message={"hello"} name={"class component"}/>
   <Functioncomponent message={"greetings"} name={"function component"}/>

   </>
  );
}

export default App;
