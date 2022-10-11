import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Button,  Container} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {BsMusicNoteBeamed} from 'react-icons/bs';
import StarRating  from '../Components/Rating'


const Songs = () => {
  const [rating,setRating]=useState(0);
  const navigate=useNavigate();
  const AddSong=()=>{
     navigate("/addsong")
  }


  const handleChange = (value) => {
    setRating(value);
  }


  return (
    <Container>
  
   <Container style={{width:"20%", margin:"4% 0% 0% 90%"}} >
  <Button onClick={AddSong} variant={'success'} > <BsMusicNoteBeamed/> Add Song</Button>
   </Container>
   

    <Table striped >
    <thead>
      <tr>
        <th>ArtWork</th>
        <th>Song</th>
        <th>Date of Release</th>
        <th>Artists</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>      <StarRating style={ {cursor:"pointer"}}
       count={5}
       size={40}
       value={rating}
       activeColor ={'yellow'}
       inactiveColor={'#7e7e7e'}
       onChange={handleChange}  />  </td>
      </tr>
    </tbody>
  </Table>
  </Container>
  )
}

export default Songs