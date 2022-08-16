import React, { useState } from 'react';
import UserList from './components/UserList/UserList';
import UserInfo from './components/UserInfo/UserInfo';
import style from './App.module.css';


function App() {
  const [userInfo, setNewUserInfo] = useState('');

  const addNewUser = userData => {
    setNewUserInfo(prevState => {
      return [userData, ...prevState];
    });
  };

  return (
    <div className={style.container}>
      <UserInfo onAddNewUser={addNewUser} />
      <UserList data={userInfo} />
    </div>
  );
}

export default App;
