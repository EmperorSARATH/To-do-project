import { useEffect, useState } from 'react';
import {
  Link,
} from "react-router-dom";
import "./AllProjects.css";

function AllProjects() {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8080/api')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllProjects([data]);

      });
  },[])

 
 
  return (
    <div>
      {allProjects.map((item) => {
        return (
          <div >
            {
              item.map((title)=>{
                return (
                  <div className="list-items">
                    {title.title}
                    <Link to='/Editproject' state={{Title:title.title,Id:title.id}}><button>Edit &rarr;</button></Link>
                  </div> 
                )
              })
            }
          </div>
        )
      })}
    </div>

  )
}

export default AllProjects;
