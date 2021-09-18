import React from 'react'


const App = () => {
  const ann =()=>{
    console.log('Hello world')
  }
  return (
    <div>
      <button onClick={ann}>
        押してください
      </button>  
    </div>  

      
     );
};

export default App;
