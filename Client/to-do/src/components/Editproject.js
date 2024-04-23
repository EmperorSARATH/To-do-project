import { useEffect, useState } from 'react';
import './Editproject.css';
import { useLocation } from 'react-router-dom';
function Editproject() {

	const location = useLocation();

	const Title = location.state.Title;
	const Id = location.state.Id;

	let [todolist,settodolist] = useState([]);
	const [name,setname] = useState("");
		
	function handleOnchange(e){
		e.preventDefault();
		let Lname =e.target.value;
		setname(Lname);
	
	}

	 async function handleClick(){
		if(todolist===null){
			settodolist([name]);
			try {
				let result = await fetch(`http://localhost:8080/api/Project/${Id}`, {
				  method: 'PUT',
				  headers: { 'Content-Type': 'application/json' },
				  body: JSON.stringify({
					todo_list: [name],
				  }),
				});
				// Handle result if needed
			  } catch (error) {
				console.log(error);
			  }

		}else{
			settodolist([...todolist,name]);
		
		
		 try {
			let result = await fetch(`http://localhost:8080/api/Project/${Id}`, {
			  method: 'PUT',
			  headers: { 'Content-Type': 'application/json' },
			  body: JSON.stringify({
				todo_list: [...todolist, name],
			  }),
			});
			// Handle result if needed
		  } catch (error) {
			console.log(error);
		  }

		}
		

	}

	useEffect(()=>{
		fetch(`http://localhost:8080/api/${Id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
       settodolist(data.todo_list);

      });

	  setTimeout(() => {
		console.log(todolist);
	  }, 2000);



	},[])

	


	return (
		<div className='edit-main'>
		
			<h1>Edit {Title}</h1>
			<div className="task-entry">
			<h2>Enter tasks</h2>
			<input className='input-tasks' type="text" onChange={handleOnchange} />
			<button onClick={handleClick}>Add</button>
			</div>
			{
				todolist?.map((item)=>{
					return (
					
						<div className='to-do-box' key={item}>
							<div className='item-box'>
							{item}
							</div> 
						
						<div className='status-chk'>
						<input className='message-checkbox' type='checkbox' id={item} onChange={
							async()=>{
								
									if(document.getElementById(item).checked){
										try{
										let result = await fetch(`http://localhost:8080/api/todo/COMPLETED`, {
											mode:"no-cors",
										  method: 'POST',
										  headers: { 'Content-Type': 'application/json' },
										  body: JSON.stringify({
											status:"COMPLETED"
										  }),
										});
										// Handle result if needed
									  } catch (error) {
										console.log(error);
									  }
									
									}
							
							}
						}/>
						
						<label for="completed">Completed</label><br/>
						<button onClick={()=>{
							

							try {
								 settodolist( todolist.filter((i)=>{
									return i!=item;
								}))
								todolist=todolist.filter((i)=>{
									return i!=item;
								});
								console.log(todolist);
								let result =  fetch(`http://localhost:8080/api/Project/${Id}`, {
								  method: 'PUT',
								  headers: { 'Content-Type': 'application/json' },
								  body: JSON.stringify({
									todo_list: [...todolist],
								  }),
								});
								// Handle result if needed
							  } catch (error) {
								console.log(error);
							  }
						}} style={{backgroundColor:"lightpink"}}>&#x2715;</button>

						</div>
						</div>
					
					)
				})


				
			}
		</div>

	);
}

export default Editproject;
