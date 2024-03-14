import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice';
import { useNavigate } from 'react-router-dom';

export const Create = () => {
    const [users, setUsers] = useState({});

    const navigate = useNavigate(); 

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})

        // console.log(users);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(users);

      dispatch(createUser(users));

      navigate('/read');

    }


  return (
    <div>
      <h2>Enter the data</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            onChange={getUserData}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="enter email"
            onChange={getUserData}

          />
        </div>
        <div>
          <input
            type="number"
            name="age"
            placeholder="enter age"
            onChange={getUserData}
            
          />
        </div>
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={getUserData}

          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={getUserData}

          />
          <label>Female</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

