import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { showUser } from '../features/userDetailSlice';

export const Read = () => {
  const dispatch = useDispatch();


  // const userSlice = useSelector((state) => state.app); //vikrant dai
  const {users, loading} = useSelector((state) => state.app); 

  useEffect(() => {
    dispatch(showUser());
  }, [dispatch]);


  // if (userSlice?.loading) {
  //   return <h2>Loading</h2>;
  // }
  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      <h2>All data</h2>
      <div>
        {/* {userSlice?.users && userSlice?.users.map((user) => ( */}
        {users && users.map((user) => (

          <div key={user.id} className="card w-50 mx-auto my-2">
            <div className="card-body">
              <h5 className="card-title">Name: {user.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">Email: {user.email}</h6>
              <p className="card-text">Gender: {user.gender}</p>
              <button className="card-link">View</button>
              <Link to={`/edit/${user.id}`} className="card-link">
                Edit
              </Link>
              <button className="card-link">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
