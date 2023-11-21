import axios from 'axios'
import './Threads.css';
import { Link } from 'react-router-dom';


export function Threads() {



    function createThread(threadName) {
        axios.post("https://railway.bulletinboard.techtrain.dev/threads", {
            "title": threadName
        })
    }



    return (
        <div className='content'>
            <h2 className='title'>スレッド新規作成</h2>
            <form>
                <input type='text' placeholder='スレッドタイトル' id="threadName" />
            </form>
            <div className='Flex'>
                <Link to="/">Topに戻る</Link>
                <a href='/'>
                    <button type='button' onClick={() => createThread(document.getElementById("threadName").value)}>作成</button>
                </a>
            </div>
        </div>
    )

}

export default Threads;