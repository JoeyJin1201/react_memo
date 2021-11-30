import { useState, useEffect, useCallback } from 'react';

const RandomUser = () => {

  const [userData, setUser] = useState();
  function putUser(val) {
    setUser(val);
  }

  const getUser = useCallback(() => {
    const gettingUser = async () => {
      const res = await fetch('https://randomuser.me/api/');

      // 解構 const results = await res.json().results === const { results } = await res.json()
      const { results } = await res.json();

      console.log(results);
      putUser(results[0]);
    };
    gettingUser();
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div>
      <button onClick={getUser}>test</button>
      <div>
        <img src={userData ? userData.picture.large : null} alt="" />
        <p>{userData ? `${userData.name.title}. ${userData.name.first} ${userData.name.last}` : null}</p>
      </div>
    </div>
  );
};

export default RandomUser;
