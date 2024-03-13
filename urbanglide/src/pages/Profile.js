import React, { useState, useEffect } from "react";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem("userData");
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage)); // Parse the stored JSON string
    }
  }, []);

  return (
    <div>
        <div class="urban-profile">
      <h2>User Profile</h2>
      {userData && (
        <div class="user-info">
          <p><strong>Email:</strong> {userData.emailId}</p>
          <p><strong>First Name:</strong> {userData.firstName}</p>
          <p><strong>Last Name:</strong> {userData.lastName}</p>
          <p><strong>Phone Number:</strong> {userData.phoneNo}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default Profile;
