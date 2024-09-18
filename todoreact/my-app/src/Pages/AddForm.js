import React, {  useEffect, useState } from "react";
import { Form, useNavigate,Button,InputGroup,FormControl } from 'react-bootstrap';
import axios from 'axios';



const AddForm = ({onItemCreate}) => {
    const[newItem, setNewItem]= React.useState('');
  const onChange =(event)=>{
        setNewItem(event.target.value);
  };

  const onCreate =(event)=>{
    event.preventDefault();
    onItemCreate(newItem);
    setNewItem('');
  }

  return(
    <Form onSubmit={onCreate}>
      <InputGroup>
      <FormControl 
        value={newItem}onChange={onChange}type="text" placeholder=""></FormControl>
      <Button type="submit" variant="primary" disabled={!newItem.length}>
        Add
      </Button>
      </InputGroup>
    </Form>

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

export default AddForm;
