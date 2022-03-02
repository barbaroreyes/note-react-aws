import Amplify from 'aws-amplify';
import awsConfi from './aws-exports'
import './App.css';
Amplify.configure(awsConfi) ;
function App() {
  return (
    <div className="App">
      Note App
    </div>
  );
}

export default App;
