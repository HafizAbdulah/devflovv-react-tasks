import React from 'react'
import image from './data/Black';

const Cool=(props)=>{
   
        const{ title, image, description, link } = props.Black;

        return(
            <div style={{display:'inline-block', width:300, margin:10 }}> 
                <h3> {title}</h3>
                <img src={image} alt= 'profile' style={{width:200, hight:120}}/>
                <p> {description}</p>
                <a href="link">{link}</a>

            </div>

        )
    }


 const Project = ()=> {
 
    return (
      <div>
        <h1>Highlighted Words</h1>
        <div>
            {
                image.map(image =>{
                    return(
                        < Cool key={image.id}Black={image}/>

                    );
                }

                )
            }
        </div>
      </div>
    )
  }
  export default  Project ;
