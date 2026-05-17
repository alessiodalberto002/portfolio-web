import Hero from "./components/Hero"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkLink from "./page/WorkLink";


function App() {


  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/worklink" element={<WorkLink />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
