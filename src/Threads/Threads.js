import axios from 'axios'


export function Threads(){
axios.get("https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0/threads?offset=1")
.then((response) => {
    console.log(response.data)
})
.catch((error)=>console.log(error))


return(
    <p>新着スレッド</p>
)

}

export default Threads;