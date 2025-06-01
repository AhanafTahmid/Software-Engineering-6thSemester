import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const Form = () => {
    const [company_namee, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");


    //function to handle form submission
    const handleupload =  async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!company_namee || !email || !location) {
            toast.error("Please fill all the fields");
            return;
        }
        

         await axios.post("http://localhost:5000/api/list", {
            company_name: company_namee,
            email: email,
            location: location
    });

        setCompanyName("");
        setEmail("");
        setLocation("");
    //console.log("uploaded");
    toast.success(`Added ${company_namee} to Database successfully!`);
    }
    
  return (
    <>
        <form >
          <input type="text" placeholder="Enter Company Name" value={company_namee}
          onChange={(e) => setCompanyName(e.target.value)}/>
          <input type="text" placeholder="Enter email" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
          <input type="text" placeholder="Enter location" value={location}
          onChange={(e) => setLocation(e.target.value)}/>
          <button onClick={handleupload}>Add to Database</button>
        </form>
    </>
  )
}

export default Form;