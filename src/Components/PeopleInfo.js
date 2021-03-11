import React, { useState } from "react";
import {companyData} from '../data/companyData';
import '../css/div.css';






function PeopleInfo(){
    const [search,setSearch] = useState("");
    

function handleChange (e) {
    setSearch(e.target.value)
    
}



function filterData(postDetail){
    for (let language of postDetail.languages){
        return postDetail.position.toLowerCase().includes(search.toLowerCase())
        || language.toLowerCase().includes(search.toLowerCase())
    }
}


    

const filteredData = companyData.filter(filterData)


// const filteredData=PostData.filter(postDetail => {
//   return  postDetail.position.toLowerCase().includes(search.toLowerCase())
//    })
    return(
        <>
<input 
class="input"
type="text" 
placeholder='Search'
value={search}
onChange={handleChange}></input>




            {filteredData.map((postDetail,index) =>{
           return  <div class="main-div">
               <div class ="company-info">
               <div class = "image">
               <img alt ="company-logo" src={postDetail.logo} />
               </div>
               <div class ="main-info">
               <ul class="primary-info">
                
                <li>{postDetail.company}</li>
                
               
                <li id="feature">{postDetail.featured ? "featured" : false}</li>
                <li>{postDetail.new?"new":null}</li>
                
                </ul>
                <h3>{postDetail.position}</h3>
                
                <ul>
              
               
              <li>{postDetail.postedAt}</li>
              <li>{postDetail.contract}</li>
              <li>{postDetail.location}</li>
              </ul>
            
            </div>
               </div>
              
           <div class ="languages">
           <ul>
            <li>
                <button>{postDetail.role}</button>
                
            </li>
            
            <li>
            <button>
                {postDetail.level}
                </button>
                </li>

            <li>
            <button>
                {postDetail.languages[0]}
                </button>
                </li>

            <li>
                <button>{postDetail.languages[1]}</button></li>

            <li><button>{postDetail.languages[2]}</button></li>

                </ul>
           </div>
           
           
            </div>
            
        })}

        
        </>
        
)
        
    
}



export default PeopleInfo