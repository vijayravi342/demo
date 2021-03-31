import React,{useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'





const Edit = ({Id,current, setId}) => {
    const [ew, setEw]=useState({id: Id,Name: '',Age:'',Friends: ''});
    const dispatch = useDispatch();
    
    useEffect(()=>{

        dispatch ({type:'UPDATE', payload: ew})

    },[dispatch, ew]);

    const AddOb =()=>{

    }

   
  
  const rows = useSelector(state => state.Post)
  return (
    <div>
       
        <table>
        <tr><th>Name</th> <th>Value</th></tr>
        
         {rows.map(post=> post.id===current?(
          <tr key={post.id} >
             <tr ><td>Name</td><td>{post.Name}</td> <Button mt="100px" variant="contained" color="Secondary" name="Name" size="small" onClick={(e)=>setEw({...ew, Name: delete post.Name})} >Delete</Button></tr>
             <tr><td>Age</td><td>{post.Age}</td><Button variant="contained" color="Secondary" size="small" name="Age" onClick={(e)=>setEw({...ew, Age: delete post.Age})}>Delete</Button> </tr>
             <tr><td>Friends</td><td>{post.Friends}</td><Button variant="contained" color="Secondary" size="small" name="Friends" onClick={(e)=>setEw({...ew, Friends: delete post.Friends})}>Delete</Button></tr>
             <tr><button >Add Row</button></tr>
             <tr><button onClick={()=> setId(!Id)} >Back</button></tr>
          </tr>
        ):null)
      }</table>
       
    </div>
  )
}

export default Edit