import AllProjects from './AllProjects';
import { useState } from 'react';
function Home() {
    const [listClick, setlistClick] = useState(false);
    const [projectname,setprojectname] = useState('');
    const [projectclick,setprojectclick] = useState(false);

    function handleChange(e){
        e.preventDefault();
        setprojectname(e.target.value);
    }

    function handleClick(e){
        e.preventDefault();
        setprojectclick(!projectclick);
        let result = fetch(`http://localhost:8080/api/Project/${projectname}`, {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: {
           "Title": projectname
          }
        }
        )

    }
    return (
      <div >
        <h1>To Do List</h1>
        <div className="create-div">
          <input type='text' onChange={handleChange}/>
          <button className="btn-add" onClick={handleClick}>Create new project</button>
  
        </div>
        <div className="list-div">
          <button onClick={() => setlistClick(!listClick)}>List all projects</button>
          {listClick ? <AllProjects  /> : <></>}
        </div>
      </div >
    );
  }
  export default Home;