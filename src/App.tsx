import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

function Homepage() {
    return(
        <div>
          <h1 className="font-bold text-2xl underline text-red-700">Hello react</h1>
            <h1>Hello Abrit react in electron!</h1>
            <p>Homepage</p>
        </div>
    )
}

export default function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    );
  }