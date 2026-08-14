import Add from "./Components/Add"
import Dashboard from "./Components/Dashboard"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Edit from "./Components/Edit"
import Delete from "./Components/Delete"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/edit/:id" element={<Edit/>} />
          <Route path="/delete/:id" element={<Delete/>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
