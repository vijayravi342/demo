import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import Edit from './edit'

const Post = () => {

  const [id,setId]=useState(false);
  const [current, setCurrent]=useState(0);
  const rows = useSelector(state => state.Post)
 

  console.log(current);
  return (
    <div>
   
    
    {id? (
      
      <Edit Id={id} current={current} setId={setId}/>
      ):(<div>
      {


        rows.map(post=>(
          <table>
          <tr><th>Name</th> <th>Value</th></tr>
          <tr key={post.id}>
             <tr><td>Name</td><td>{post.Name}</td> </tr>
             <tr><td>Age</td><td>{post.Age}</td> </tr>
             <tr><td>Friends</td><td>{post.Friends}</td> </tr>
             <tr><Button variant="contained" color="Primary" size="small" onClick={()=>(setCurrent(post.id), setId(!id))}>Edit</Button></tr>
          </tr>
          </table>
        ))
      }
    </div>)}
    
     
    </div>
  )
}

export default Post
