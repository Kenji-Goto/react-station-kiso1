import axios from 'axios'
import './Threads.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TheradContent from './ThreadContent';


export function Threads() {

    const [threadName,setThreadName] = useState();


    const createThread = () =>{
        axios.post("https://railway.bulletinboard.techtrain.dev/threads", {
            "title": threadName
        })
    }

   

    return (
        <div className='content'>
            <h2 className='title'>スレッド新規作成</h2>
            <form>
                <input type='text' placeholder='スレッドタイトル' id="threadName" name="message" onChange={(e)=>{setThreadName(e.target.value)}} required />
            </form>
            <div className='Flex'>
                <Link to="/">Topに戻る</Link>
                <a href='/'>
                    <button type='button' onClick={createThread}>作成</button>
                </a>
            </div>
        </div>
    )

}

export default Threads;