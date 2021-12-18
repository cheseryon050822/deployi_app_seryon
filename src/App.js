import Button from '@restart/ui/esm/Button';
import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import axios from 'axios'



const App = () => {
  const [count,setCount]=useState(0)
  const [cpuhand,setCpuhand]=useState()
  const [rock,setRock]=useState("グー")
  const [scissor,setScissor]=useState("チョキ")
  const [paper,setPaper]=useState("パー")
  const[myhand,setMyhand]=useState("")
  const[judge,setJudge]=useState()
  const[data,setData]=useState()

  
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
  
  useEffect(() => {
    winorlose()
  })
  
const winorlose=()=>{
    if(myhand==="グー" && cpuhand==="チョキ") {
     setJudge('勝ち！')
   }else if(myhand==="グー" && cpuhand==="パー"){
     setJudge('負け…')
   }else if(myhand==="グー" && cpuhand==="グー"){
     setJudge('引き分け')
   }else if(myhand==="チョキ" && cpuhand==="パー"){
     setJudge('勝ち！')
   }else if(myhand==="チョキ" && cpuhand==="グー"){
     setJudge('負け…')
   }else if(myhand==="チョキ" && cpuhand==="チョキ"){
     setJudge('引き分け')
   }else if(myhand==="パー" && cpuhand==="チョキ"){
     setJudge('負け…')
   }else if(myhand==="パー" && cpuhand==="グー"){
     setJudge('勝ち！')
   }else if(myhand==="パー" && cpuhand==="パー"){
     setJudge('引き分け')
   }
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
    console.log(rock)
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
  winorlose()
  }
  useEffect(() => {
    axios.get('https://qiita.com/api/v2/items')
    .then(res =>  {
        console.log(res,'res check') 
        setData(res.data)
    console.log(data)
    })
  　},[])
  
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
      <div>
        勝敗:{judge}
      </div>
       <form name="OHGI72">
       <input id="starplatinam"type="text" onChange={e=>setTexter(e.target.value)}>
       </input>
       
       <button  type="button" onClick={back}>表示</button>
       <div className="donden">
       {error}
       </div>
       </form>
    </div>
  )
};

export default App;
