
import axios from "axios";
import "./Threads.css";
import { useEffect, useState } from "react";

export function ThreadsList() {

    const [threadsList, setThreadsList] = useState([])


    useEffect(() => {
        axios.get("https://railway.bulletinboard.techtrain.dev/threads?offset=0")
            .then((response) => {
                console.log(response)
                setThreadsList(response.data)

            })
    }, [])



    function showList() {
        return (
            threadsList.map(data => <tr><td className="threadNames">{data.title}</td></tr>)
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