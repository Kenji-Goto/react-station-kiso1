import "axios"
import "./Threads.css"
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import axios from "axios"

function TheradContent(){
    

    const [content,setContent] = useState();
    const id = useParams();


    useEffect(()=>{
        try{
            axios.get("https://railway.bulletinboard.techtrain.dev/threads/"+id+"/posts?offset=0")
            .then(res => {
                setContent(res.data)
                
            })
        }catch(error){
            console.log(error)
        }
        
    })


    return(
        <div>
            <h1>スレッドの詳細</h1>
        </div>
    )

}
export default TheradContent;