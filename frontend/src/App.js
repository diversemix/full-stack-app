import './App.scss';
import { useFetch } from "react-async"

function App() {  
    const headers = { Accept: "application/json" }
    // TODO: Make host, port config values
    const { data, error, isPending } = useFetch("http://localhost:3001/widgets", {headers});

    var value = data;
    if (isPending) {
        value = "Waiting for data...";
    } else if (error) {
        value = error;
    } else {
        value = JSON.stringify(value, null, 2);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Full Stack App</h1>
            </header>
            <p>
                Demo of a full stack app
            </p>
            <textarea readOnly value={value} />
        </div>
    );
}

export default App;
