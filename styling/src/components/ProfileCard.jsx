import React from 'react'

const ProfileCard = () => {
  return (
    <div style={styles}>
      <h1>internal css </h1>
      <p>this is how we apply internal css by using styles as object</p>
    </div>
  )
}

const styles = {
    backgroundColor:'lightGray',
    padding:'15px',
    borderRadius:'8px',
    color:'black',
    marginTop:'5px'
};

export default ProfileCard
