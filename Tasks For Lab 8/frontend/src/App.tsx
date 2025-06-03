
import Form from "./components/Form"
import { Toaster } from "react-hot-toast";
import CompanyList from "./components/CompanyList";
import { useState } from "react";

function App() {
  const [showcompanies, setShowCompanies] = useState(false);

  return (
    <>
      <Form/>
      <br/>
      <button onClick={() => setShowCompanies(!showcompanies)}>
        {showcompanies ? "Hide Companies" : "Show Companies"}
      </button> 
      {showcompanies && <CompanyList/>}
      
      <Toaster/>
    </>
  )
}

export default App
