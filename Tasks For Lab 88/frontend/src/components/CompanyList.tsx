import axios from "axios"
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

interface Company {
  _id?: string;
  company_name: string;
  email: string;
  location: string;
}

const CompanyList = () => {
    const [companies, setCompanies] = useState<Company[]>([]);
    useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/list");
        setCompanies(response.data);
        console.log(response.data);
        toast.success("Company data fetched successfully!");
      } catch (error) {
        toast.error("Error fetching company data");
        console.error(error);
      }
    };

    fetchCompanies(); // Only once on mount
  }, []);
  let serial = 1;
  const updateCompanyName = async (id: string) =>{
    const newName = prompt("Enter new company name:");
    if(!newName) {
      toast.error("Company name cannot be empty!");
      return;
    }

    const response = await axios.put(`http://localhost:5000/api/list/${id}`,{
        company_name: newName
    });

    setCompanies(prev =>
      prev.map(company =>
        company._id === id ? { ...company, company_name: newName } : company
      )
    );
    console.log(response.data);
    toast.success("Company name updated successfully!");
  }

  const deleteCompany = async (id: string) => {
    const response = await axios.delete(`http://localhost:5000/api/list/${id}`);
    console.log(response.data);
    setCompanies(prev => prev.filter(company => company._id !== id));
    toast.success("Company deleted successfully!");
  }


  return (
    <div>
        <h1>Company List</h1>

        {   
            
            companies.map((company, index) => (
            // Displaying each company in the list
            <div key={index}>
                <h4>{serial++} {company.company_name}</h4> 
                <button onClick={()=> updateCompanyName(company._id!)}>Update Company Name</button>

                <p>Email: {company.email}</p>
                <p>Location: {company.location}</p>
                <button style={{background:"red"}} onClick={()=> deleteCompany(company._id!)}>Delete Company {company.company_name}</button>

            </div>
        ))
        }
        
    </div>
  )
}

export default CompanyList