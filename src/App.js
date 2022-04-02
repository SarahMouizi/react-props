import './App.css';
import Profile from './profile/profileComponent'

let data={
  fullName: 'Sarah Mouizi',
  bio: 'Masters degree in international trade',
  profession: 'Web developer',
  age:34,
  info:{
    birthday: '27/04/88',
    adress: 'Tunis'
  },
  image: './logo192.png'
}

let {fullName, bio, age, profession, info:{birthday,adress},image} = data


const handleName =(userName)=>{
  alert(userName)
}


function App() {
  return (
    <div className="App">

      <Profile birthday={birthday} name={fullName} userBio={bio} age={age} job={profession} adress={adress} profileImage={image} handleName={handleName}/>
      
    </div>
  );
}

export default App;
