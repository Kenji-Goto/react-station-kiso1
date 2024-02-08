import "axios"
import "./Threads.css"
import {useState,useEffect} from "react"
import {useLocation, useParams} from "react-router-dom"
import axios from "axios"

function TheradContent(){
    
    const location = useLocation()
    const [contents,setContents] = useState();
    const [post,setPost] = useState()
    const [textareaValue,setTextareaValue] = useState()
    const {id} = useParams();
    const threadName = location.state.title;


    useEffect(()=>{
        try{
            axios.get(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts?offset=0`)
            .then(res => {
                setContents(res.data.posts)
                
            })
        }catch(error){
            console.log(error)
        }
    })

    const showContent = () =>{
        
        try{
            return(contents.map(data => <tr><td className="threadNames">{data.post}</td></tr>))
        }catch(error){
            console.log(error)
        }
        
    }

    const postContent = () =>{
        try{
            axios.post(`https://railway.bulletinboard.techtrain.dev/threads/${id}/posts`,{
                "post":post
            }).then(document.getElementsByName("textarea")[0].value = "")
        }catch(error){
            console.log(error)
        }
    }


    return(
        <div className="content">
        <h1>スレッドの詳細</h1>
            <div className="Flex"> 
                <div className="threadContent">
                    <h3>{threadName}</h3>
                    <table>
                        <tbody>
                        {showContent()}
                        </tbody>
                    </table>
                </div>
                <div className="threadContentPost">
                    <textarea onChange={(e)=>setPost(e.target.value)} name="textarea" placeholder="投稿しよう！"></textarea><br />
                    <input type="submit" onClick={postContent}/>
                </div>
            </div>
        </div>
    )

}
export default TheradContent;