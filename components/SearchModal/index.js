"use client"

import React, { useContext, useState } from 'react';
import "./styles.css"
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';
import CartContext from '../../auth/store/cart-context';
import { useSelector } from 'react-redux';
import Cart from '../Cart';
import { Button } from '@mui/material';
import { db } from '../../auth/firebase';


const SearchModal = ({ isOpen, onClose }) => {
  const modalClassName = isOpen ? "modal-overlay open" : "modal-overlay";
  const contentClassName = isOpen ? "modal-content open" : "modal-content";
  const authId = useSelector((state) => state.authId);
  const commaNumber = require('comma-number')
  const [posts1, setPosts1] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  React.useEffect(() => {
    db.collection('electronics').onSnapshot((snapshot) => {
      setPosts1(snapshot.docs.map((doc) => doc.data()));
    });

    if (posts1 !== undefined) {
      const finalPosts = posts1.filter((res) => {
        return res?.title?.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
      });

      setFilteredPosts(finalPosts);
    }
  }, [searchTerm]);

  const [searchTerm1, setSearchTerm1] = useState('');

  const handleInputChange = (e) => {
    if (isOpen) {
      setSearchTerm(e.target.value);
    }
  };


  return (
    <div style={{
      zIndex:1500,
      padding:5
    }} className={modalClassName}>
      <div className={contentClassName}>
      <div style={{width:'100%',alignItems:'center',justifyContent:'space-between',display:'flex'}}>
      <span style={{fontWeight:'bold',cursor:'pointer'}} ></span> <span><Button onClick={onClose} style={{height:35}} variant="outlined">Cancel</Button></span> <span></span>
    </div>

    <div
    style={{
      height: 'calc(100vh - 130px)',
      overflowY: 'auto'
     }}
    >
     
       
  </div>
  
     <div>
     <input
     placeholder="Search what you're looking for?"
     value={searchTerm}
     onChange={handleInputChange}
     type="text"
     name="search"
   />
     </div>
      </div>
    </div>
  );
};

export default SearchModal;
