import React, { useState, useEffect } from "react";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log("Fetching users...");
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log("Users fetched:", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchUserData = async () => {
    if (selectedUserId) {
      console.log("Fetching user data for ID:", selectedUserId);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${selectedUserId}`);
        const data = await response.json();
        console.log("User data fetched:", data);
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  const handleSelectChange = (event) => {
    setSelectedUserId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    fetchUserData();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">Selecciona un dentista de Charly Clinic:</label>
        <select id="userId" value={selectedUserId} onChange={handleSelectChange}>
          <option value="">Seleccionar...</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>{user.name}</option>
          ))}
        </select>
        <button type="submit">Obtener información del dentista</button>
      </form>
      {userData && (
        <div>
          <h2>Información del dentista</h2>
          <p><strong>Nombre:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Telefono:</strong> {userData.phone}</p>
          <p><strong>Telefono:</strong> {userData.phone}</p>
        </div>
      )}
    </div>
  );
};

export default Form;
