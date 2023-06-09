import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3035/users/");
    setUserData(response.data);
    console.log(userData);
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="App">
      <h2>json Server get data</h2>
      {userData.map((data) => (
        <div>{data.id} - {data.name}</div>
      ))}
    </div>
  );
}

export default App;
