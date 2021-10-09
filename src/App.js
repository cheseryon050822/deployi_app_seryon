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
  const [texter,setTexter]=useState()
  const [maseege,setMseege]=useState()
  const eirian=()=>{
    setTexter(texter)
    console.log(texter)
    setMseege(texter)
  }
  const [error,setError]=useState()
  const back=()=>{
    setError("文字を入力してください")
    console.log(error)
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
        <Button onClick={overdrive}>reset</Button>{count}
      </div>
       <form name="OHGI72">
       <input id="starplatinam"type="text" onChange={e=>setTexter(e.target.value)}>
       </input>
       
       <button  type="button" onClick={back}>表示</button>{error}
       </form>
    </div>    
     );
};

export default App;
