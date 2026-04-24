import React, { useState } from 'react'

const Profile = () => {

  const [profile, setProfile] = useState({
    name:"",
    age:"",
  });

  const handleChange = (e) => {
    const {name,value} = e.target;

    setProfile((prevProfile) =>({
      ...prevProfile, [name] : value
    }));

  };

  return (
    <div>
      <div>
          <h2>user profile</h2>
          <label> Name:
              <input 
              type="text"
              name="name"
              value={profile.name} 
              onChange={handleChange}
              />
          </label>
      </div>
      <div>
        <label>age:
          <input
             type="number" 
             name='age'
             value={profile.age}
             onChange={handleChange}
          />
        </label>
      </div>

      <h2>profile information::</h2>
      <p> name : {profile.name} </p>
      <p> age : {profile.age} </p>
    </div>
  )
}

export default Profile
