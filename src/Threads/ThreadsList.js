
import axios from "axios";
import "./Threads.css";
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from "react";

export function ThreadsList() {

    const [threadsList, setThreadsList] = useState([])


    useEffect(() => {
        try{axios.get("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
            .then((response) => {
                console.log(response.data)
                setThreadsList(response.data)
            })
            }catch(error){
                console.log("エラーが発生しました")
            }
        }, [])


    //無記名関数がお作法
    function showList() {
        return (
            threadsList.map(data => <tr><td className="threadNames"><Link to={"thread/"+data.id} state={{title:data.title}} >{data.title}</Link></td></tr>)
        )
    }

    return (
        <div className="content">
            <h2 className="title">新着スレッド</h2>
            <table className="threadName">
                <tbody>
                    {showList()}
                </tbody>
            </table>
        </div>

    )
}

export default ThreadsList;