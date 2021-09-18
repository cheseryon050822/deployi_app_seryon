import React from 'react'


const App = () => {
  const ann =()=>{
    console.log('Hello world')
  }
  const open = ()=>{
    window.alert("Hello world!");
    alert("Hello world!");
  }
  return (
    <div>
      <button onClick={ann}>
        押してください
      </button>
      <button onClick={open}>
         上からくる
      </button>  
    </div>  

      
     );
};

export default App;
