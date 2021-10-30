import Button from '@restart/ui/esm/Button';
import React,{useState} from 'react'
import "./App.css"

const App = () => {
  const [count,setCount]=useState(0)
  const [cpuhand,setCpuhand]=useState()
  const [rock,setRock]=useState("グー")
  const [scissor,setScissor]=useState("チョキ")
  const [paper,setPaper]=useState("パー")
  const[myhand,setMyhand]=useState("")
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
  const stand =()=>{
    setCount(count*5)
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
      
   
  const iwa =()=>{
    janken()
    setMyhand("グー")
    console.log()
  }
  const hasami =()=>{
    janken()
    setMyhand("チョキ")
    console.log(scissor)
  }
  const kami=()=>{
    janken()
    setMyhand("パー")
    console.log(paper)
  }

  const janken =()=>{
  const messages = ['グー','チョキ','パー'];
  const messageNo = Math.floor( Math.random() * 3);
  
  setCpuhand(messages[messageNo]);
  }
  console.log(cpuhand)
  return (
    <div>
      <button onClick={ann}>
        押してください
      </button>
      
      <button onClick={open}>
         上からくる
      </button>  
      <div>
        <Button onClick={iwa}>グー</Button>
        <Button onClick={hasami}>チョキ</Button>
        <Button onClick={kami}>パー</Button>
      </div>
      <div>
        自分の手{myhand}
      </div>
        <div>
        相手の手{cpuhand}
      </div>
       <form name="OHGI72">
       <input id="starplatinam"type="text" onChange={e=>setTexter(e.target.value)}>
       </input>
       
       <button  type="button" onClick={back}>表示</button>
       <div className="donden">
       {error}
       </div>
       </form>
       <div>
       <Button onClick={wanabeeee}>いいね</Button>
        <Button onClick={ureeeyyy}>ダメだね</Button>
        <Button onClick={overdrive}>reset</Button>{count}

       </div>

    </div>    
     );
};

export default App;
