import React from 'react'
import Image from './image'
import PropTypes from "prop-types"
import Birthday from './birthday'

profile.propTypes = {
  name:PropTypes.string,
  userBio:PropTypes.string,
  job:PropTypes.string,
  adress:PropTypes.string,
  handleName:PropTypes.func,
  profileImage:PropTypes.string,
  birthday:PropTypes.string,
  age:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])
};

function profile({
  name='Sarah Mouizi default',
  userBio='Masters degree in international trade',
  job='Web developer',
  adress='Tunis',
  birthday,
  age=20,
  handleName,
  profileImage
}) {

  return (
    <div>
      <Image imagePath={profileImage} />
      <h1>{name}</h1>

      {/*<Birthday birthday={birthday} />*/}
      <Birthday birthday={birthday}/>

      <h1>{userBio.toUpperCase()}</h1>
      <h1>{job}</h1>
      <h1>{age}</h1>
      <h1>{adress}</h1>
      {/*<button onClick={ ()=>{ handleName(name)}   }>Alert</button>*/}

      <button onClick={ ()=>{handleName(name)} }>Alert</button>

    </div>
  )
}


export default profile
