import React , {useEffect} from 'react'
import LoginPage from './LoginPage'
import logo from "./logo.png"


function Home() {

  useEffect(() => {
    console.log("In Home Page");
    document.title="SAP Material Management";
    
  }, []);
  return (
    <div>
        <div className='row'>
        <div className='col-5'>
        <LoginPage/>
        </div>
        <div className='col-7'>
        <img src={logo} alt='Logo'/>
        </div>
      </div>
        
    </div>
  )
}

export default Home