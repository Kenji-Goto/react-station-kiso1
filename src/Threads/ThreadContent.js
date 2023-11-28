import "axios"
import "./Threads.css"
import {useState,useEffect} from "react"
import {useLocation, useParams} from "react-router-dom"
import axios from "axios"

function TheradContent(){
    
    const location = useLocation()
    const [contents,setContents] = useState();
    const id = useParams();
    const threadName = location.state.title;


    useEffect(()=>{
        try{
            axios.get("https://railway.bulletinboard.techtrain.dev/threads/"+id+"/posts?offset=0")
            .then(res => {
                setContents(res.data)
  
            })
        }catch(error){
            console.log(error)
        }
    })

    const showContent = () => {
        return(
            contents.map((content)=> <tr><td>{content}</td></tr>)
        )
        
    }


    return(
        <div>
        <h1>スレッドの詳細</h1>
            <div className="Flex"> 
                <table>
                    <tbody>
                    {showContent}
                    </tbody>
                </table>
                <div>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )

}
export default TheradContent;