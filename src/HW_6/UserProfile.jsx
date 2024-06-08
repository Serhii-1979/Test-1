import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { debounce } from "lodash";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomUserId = () => {
    return Math.floor(Math.random() * 10) + 1;
  };

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    const userId = getRandomUserId();
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      console.log("Response status:", response.status);
      console.log("Response data:", response.data);
      
      const userData = response.data;
      setUser({
        name: {
          first: userData.name.split(' ')[0],
          last: userData.name.split(' ')[1] || "User",
        },
        email: userData.email || "No email",
        phone: userData.phone || "No phone",
        picture: {
          large: `https://i.pravatar.cc/150?u=${userData.username}`,
        },
      });
    } catch (error) {
      setError("Error fetching the user data");
      console.error("Error fetching the user data", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedFetchUser = useCallback(debounce(fetchUser, 500), [fetchUser]);

  useEffect(() => {
    debouncedFetchUser();
  }, [debouncedFetchUser]);

  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          user && (
            <div className={styles.userInfo}>
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                onError={(e) => { e.target.onerror = null; e.target.src="https://via.placeholder.com/150"; }}
              />
              <h2>{`${user.name.first} ${user.name.last}`}</h2>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <button onClick={debouncedFetchUser}>Load New User</button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default UserProfile;
