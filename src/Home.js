import { useNavigate } from "react-router-dom";



  function Home(){
   const navigate = useNavigate()
    return(
        <div className="home">
            
            <img className="homeimg" src="https://www.shareicon.net/data/512x512/2016/11/22/854957_email_512x512.png"/>
            
            
            <h3>Email-Account: pavun923@gmail.com</h3>
            <button onClick={()=>navigate("/list")}>View-Inbox</button>
            
        </div>
    )
  }
  export default Home;