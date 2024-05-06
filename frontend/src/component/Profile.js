import React, { useState } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { useContext } from 'react';
function Profile() {

    const {username, passwords} = useContext(LoginContext);


  return (
    <div>
      <h1>Profile username is :{username}</h1>
      <p>Email: {username}</p>
      <p>Bio: {passwords}</p>
    </div>
  );
}

export default Profile;