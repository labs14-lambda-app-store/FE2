import React, { useState, useEffect } from "react";
import axios from 'axios'

const ProjectForm = props => {
  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ url, setUrl ] = useState('')
  const [ hostedUrl, setHostedUrl ] = useState('')
  const [ category, setCategory ] = useState('')

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
              value={category} /*???*/
              placeholder="category..."
              onChange={e => setCategory(e.target.value)}
            />
            <input
              type="text"
              value={description} /*???*/
              placeholder="add new project..."
              onChange={e => setDescription(e.target.value)}
            />
            <input
              type="text"
              value={url} /*???*/
              placeholder="add new project..."
              onChange={e => setUrl(e.target.value)}
            />
            <input
              type="text"
              value={url} /*???*/
              placeholder="hosted url..."
              onChange={e => setUrl(e.target.value)}
            />
            <input
              type="text"
              value={url} /*???*/
              placeholder="frontend url..."
              onChange={e => setUrl(e.target.value)}
            />

            <input
              type="text"
              value={url} /*???*/
              placeholder="backend url..."
              onChange={e => setUrl(e.target.value)}
            />
            <button type='submit' onClick={e => handlePost(e)}>
              Submit Post
            </button>
          </form>
        </div>
      );
}
export default ProjectForm;
