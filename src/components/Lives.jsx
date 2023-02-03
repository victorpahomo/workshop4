import React from 'react'

export const getFromLocalStorage = () => {
    const lives = localStorage.getItem("lives") ? JSON.parse(localStorage.getItem("lives")) : localStorage.setItem("lives", JSON.stringify(4));
    return JSON.parse(lives)
  };
  
  export const Lives = () => {
    const [dataLives, setDataLives] = React.useState(getFromLocalStorage());
  
    return (
      <div>
        <h2>Data from Local Storage: {JSON.stringify(dataLives)}</h2>
      </div>
    );
  };

