// // src/components/UserList.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Replace 'http://localhost:3000' with your actual backend URL
//     axios.post('http://localhost:3001/users')
//       .then(response => setUsers(response.data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.fullname}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Replace 'http://localhost:3001' with your actual backend URL
    axios.get('http://localhost:3001/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.fullname}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
