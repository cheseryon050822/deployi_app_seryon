import Button from '@restart/ui/esm/Button';
import React,{useState} from 'react'



const App = () => {
  const [count,setCount]=useState(0)
  const ann =()=>{
    console.log('Hello world')
  }
  const open = ()=>{
    window.alert("Hello world!");
    alert("Hello world!");
  }
  const wanabeeee =()=> {
    setCount(count+1)
　}
  const ureeeyyy =()=>{
    setCount(count-1)
  }
  const overdrive =()=>{
     setCount(count*0)
  }

  return (
    <div>
      <button onClick={ann}>
        押してください
      </button>
      
      <button onClick={open}>
         上からくる
      </button>  
      <div>
        <Button onClick={wanabeeee}>いいね</Button>
        <Button onClick={ureeeyyy}>ダメだね</Button>
        <Button onClick={overdrive}>reset</Button>
        {count}
      </div>
    </div>  
　　
      
     );
};

export default App;
