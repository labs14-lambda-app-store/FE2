import React, { useState, useEffect } from "react";
import axios from 'axios'

const ProjectForm = props => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  // const [ url, setUrl ] = useState('')
  const [ hosted_url, setHostedUrl ] = useState('')
  const [ frontend_url, setFrontendUrl ] = useState('')
  const [ backend_url, setBackendUrl] = useState('')
  const [ category_id, setCategory ] = useState('')
  const [ submitted_at, setSubmit] = useState('')
  const [ display_image, setImage] = useState('')
  const [ tags, setTags] = useState('')

  const handlePost = e => {
    e.preventDefault()

    let newPost = { name, description, url}

    axios.post(`https://lambdaappstore2.herokuapp.com/api/projects`, newPost)
      .then(res => console.log(res.status))
      .catch(err => console.log(err.message))
  }
  return (
        <div>
          <h2>this will be a form</h2>
          <form>
            <input
              type="text"
              value={name} /*???*/
              placeholder="project name..."
              onChange={e => setName(e.target.value)}
            />
                                    <input
              type="text"
              value={category_id} /*???*/
              placeholder="category..."
              onChange={e => setCategory(e.target.value)}
            />
            <input
              type="text"
              value={description} /*???*/
              placeholder="project description..."
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="text"
              value={hosted_url} /*???*/
              placeholder="hosted url..."
              onChange={e => setHostedUrl(e.target.value)}
            />
            <input
              type="text"
              value={frontend_url} /*???*/
              placeholder="frontend url..."
              onChange={e => setFrontendUrl(e.target.value)}
            />

            <input
              type="text"
              value={backend_url} /*???*/
              placeholder="backend url..."
              onChange={e => setBackendUrl(e.target.value)}
            />
            
            <input
              type="text"
              value={submitted_at} /*???*/
              placeholder="backend url..."
              onChange={e => setSubmit(e.target.value)}
            />
             <input
              type="text"
              value={display_image} /*???*/
              placeholder="backend url..."
              onChange={e => setImage(e.target.value)}
            />
                         <input
              type="text"
              value={tags} /*???*/
              placeholder="backend url..."
              onChange={e => setTags(e.target.value)}
            />
            <button type='submit' onClick={e => handlePost(e)}>
              Submit Post
            </button>
          </form>
        </div>
      );
}
export default ProjectForm;
