import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const UserList = () => {
  const [programmerList, setProgrammerList] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/api/programmer')
    .then(res => {
      console.log(res.data);
      setProgrammerList(res.data);
    }, err => console.log(err));
  })
  return(
    <div>
      <h1>axios</h1>
    </div>
  )
}