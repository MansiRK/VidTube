import './App.css';
import'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header';
import Sidebar from  './components/sidebar'

function App() {
  return (
    <div className="main">
      {/* YouTube */}
      <Header/>
      <Sidebar/>
    </div>
  );
}

export default App;
