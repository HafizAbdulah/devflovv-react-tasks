import React from 'react'
import Social from './data/Socialprofile'
const Tool=(props)=>{
   
        const {link,image}= props.socialprofile;
        return(
            <span>
                 <a href={link}><img src={image} alt='social' style={{width:35, hight:35, margin:10}}/>
                 </a>


            </span>
        )
    }


const Profile=()=>{
 
    return (
      <div>
        <h2> Connect with me!</h2>
        <div>
            {
                Social.map(Social=> {
                    return <Tool key={Social.id} socialprofile ={Social}/>

                })
            }
        </div>
      </div>
    )
  }
  export default Profile ;
