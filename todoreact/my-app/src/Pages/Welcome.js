import React, {  useEffect, useState } from "react";
import { Form, useNavigate,Button,InputGroup,FormControl, Col } from 'react-bootstrap';
import axios from 'axios';
import AddForm from './AddForm';
import Item from './Item';

const BASE_URL ='http://localhost:3001/list'

const Welcome = () => {
  const [lists,setLists]= useState(null);
  useEffect(()=>{
    axios.get(BASE_URL)
    .then((res)=>{
      console.log(res)
      setLists(res.data.data)
    });
  },[]);

  const onItemCreate= async(newItem)=>{

   const response = await axios.post(BASE_URL, {name: newItem});
    setLists([...lists,{name: newItem, completed:false, id:response.data.id}])
  };

  if (lists === null) return <div>Loading..</div>
  const onItemDelete = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
    setLists(lists.filter(item => item.id !== id));
  };

  const onToggleComplete = async (id, completed) => {
    await axios.put(`${BASE_URL}/${id}`, { completed: !completed });
    setLists(lists.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };
  return (
    <div>
      <AddForm onItemCreate={onItemCreate} />
      {lists?.map((list) => (
        <div key={list.id} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '10px 0' }}>
          <input
            type="checkbox"
            checked={list.completed}
            onChange={() => onToggleComplete(list.id, list.completed)}
            style={{ marginRight: '10px' }}
          />
          <span style={{ textDecoration: list.completed ? 'line-through' : 'none', marginRight: '10px' }}>
            {list.name}
          </span>
          <button onClick={() => onItemDelete(list.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  container: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  button: {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Welcome;
