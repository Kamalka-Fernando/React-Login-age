import Login from './ui/web/login';
import './App.css';


function App() {
  return (
    <div className="App">
      <Login />
    </div>
    const username = { data };
    
    const { data, isPending, error } = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="Home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {data }<br/>
  
        </div>
     );
  );
}

export default App;
