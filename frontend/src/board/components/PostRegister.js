import React,{useState} from 'react'
import '../styles/PostRegister.css'
import { Button } from '@material-ui/core';


const PostWrite = () => {
    
    const [post, setPost] = useState({
        title: '',
        content : ''
    })

    const {title, content} = 'post'

    const handleClick = e => {
        e.preventDefault()
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        let handleErrors = response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response;
        }
        alert(`작성 클릭: ${JSON.stringify({...post})}`)
          PostWrite({...post})
        
        .then(res => {
          alert(`게시물 작성 완료 : ${res.data.result} `)
          // history.push('login')
          
        })
        .catch(err => {
          alert(`게시물 작성 실패 : ${err} `)
    
        })
    
    
    
      }
    
    
    const handleChange = e => {
        const {name, value} = e.target
        setPost({
            ...post,
            [name] : value
        })
    }


    return (<>
    <div className="PostWrite">
    <form onSubmit={handleSubmit} method="post" style={{border:"1px solid #ccc"}}>
      <div className="container">
        <h1>Post</h1>
        <p>Post your Article</p>
        <hr/>

        <label for="title"><b>title</b></label>
        <input type="text" placeholder="Enter title" onChange={handleChange}  name="title" value={title}/>

        <label for="content"><b>content</b></label>
        <input type="text" placeholder="Enter content" onChange={handleChange}  name="content" value={content}/>
        <div class="clearfix">
          <button type="submit" className="signupbtn">Post</button>
          <button type="button" className="cancelbtn" onClick={handleClick}>Cancel</button>
          
        </div>
      </div>
  </form>
</div>
</>)
}


export default PostWrite