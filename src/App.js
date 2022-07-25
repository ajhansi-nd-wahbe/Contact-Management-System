// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import './style.css';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  let submit = (e) => {
    e.preventDefault();
    alert(`${firstName},${date},${email},${pincode}`);

    setFirstName("");
    setLastName("");
    setDate("");
    setEmail("");
    setAddress("");
    setCity("");
    setPincode("");
    setMobileNo("");
  }
  return (
    <div className="App">
      <h1>Contact Management System</h1>
      <div class="search">
      <section> 
      <img 
          height={100} 
          src="https://images.pexels.com/photos/733857/pexels-photo-733857.jpeg"
          alt=""
          />
      </section>
      <p>Enter your details here and we store them safely for you!</p>
        <input class = "search bar" type = "text" placeholder = "Search by Name"/>
        <button type = "submit"></button><br/><br/>
      </div>
      <form onSubmit = {submit} >
        <section class="left-side">
          First Name: <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/><br/><br/>
          Last Name: <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/><br/><br/>
          DOB: <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/><br/><br/>
          Email ID: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br/>
        </section>

        <section class="right-side">
        Address: <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}/><br/><br/>
        City: <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/><br/><br/>
        Pincode: <input type="number" value={pincode} onChange={(e) => setPincode(e.target.value)}/><br/><br/>
        Mobile No: <input type="number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)}/><br/><br/>
        </section>

        <section class="create-button">
          <button>
          Create User
          </button>
        </section>

      </form>
    </div>
  ); 
}

export default App;

