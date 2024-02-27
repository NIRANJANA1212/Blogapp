import { TextField, Typography, Button} from '@mui/material'
import React from 'react'


const AddBlog = () => {
  return (
    <div>
        
        <Typography align='center' variant='h2' color='primary'>AddBlog</Typography>
        <br/><br/><br/>
        <TextField variant='outlined' label='Blog Name' focused color='primary' />
        <br/>
        <TextField variant='outlined' label='Author name'/>
        <br/>
        <TextField variant='outlined' label='Description'/>
        <br/><br/><br/>
        <Button variant='contained'>Submit</Button>



    </div>
  )
}

export default AddBlog