import AttContext from './AttContext.js';
import React,{useContext} from 'react'


const Item = ({obj}) => {
  const {data,setData,setType} = useContext(AttContext);

  const remove = (num)=>{
    const copyData = data.filter((obj)=>obj.num !== num)
    setData(copyData);
  }

  return (
   
        <li>
            <span>{obj.name}</span>
            <button onClick={()=>setType([false,obj.num])}>수정</button>
            <button onClick={()=>remove(obj.num)}>삭제</button>
        </li>
        
  )
}

export default Item