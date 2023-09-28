import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './component/layout/Navbar';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-content-between h-screen">
        <Navbar />
        <main className="container mx-auto px-4">
          Content
        </main>
      </div>
    </Router>
  );
}

export default App;
