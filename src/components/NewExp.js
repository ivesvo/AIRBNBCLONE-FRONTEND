import React, { useState } from "react";
import '../App.css';
import {Form, Button} from 'react-bootstrap'

const NewExp = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [description, setDescription] = useState("");
  const [tags,setTags] = useState([])
  const [hostname, setHostName] = useState("")


  const createExp = async (e) => {
    e.preventDefault();
    const expData = {
      title,
      description,
      pictureUrl,
      country,
      price,
      duration,
      tags,
      hostname
    };
    const newExp = await fetch("https://myhause.herokuapp.com/experiences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expData),
    });
    alert("exp created");
  };
  return (
    <div className="App">
        <div 
        style={{margin:"30px"}}><h2>Create Your Amazing Online Experience</h2></div>
      <Form onSubmit={createExp} style={{margin:"30px"}}>
      <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="Title"  
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>

     <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="Description" 
          as="textarea" 
          rows="3" 
          type="text"
          name="title"
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>

     <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="Country" 
     
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>


     <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="Price" 

          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>
     


     <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="Duration" 
     
          type="number"
          name="title"
          value={duration}
          onChange={(e) => setDuration(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>

     <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="Host Name" 
          
          type="text"
          name="hostname"
          value={hostname}
          onChange={(e) => setHostName(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>

     <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="Tag" 
          
          type="text"
          name="tag"
          value={tags}
          onChange={(e) => setTags(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>


     <Form.Group controlId="formBasicEmail">
       
        <Form.Control placeholder="PictureURL" 
          
          type="text"
          name="pictureURL"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)} />
        <Form.Text className="text-muted">
         
        </Form.Text>
     </Form.Group>

        {/* <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <br />

        <label htmlFor="title">Price</label>
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />

        <label htmlFor="title">Duration</label>
        <input
          type="number"
          name="duration"
          onChange={(e) => setDuration(e.target.value)}
        />
        <br />

        <label htmlFor="title">Picture Url</label>
        <input
          type="text"
          name="picture url"
          onChange={(e) => setPictureUrl(e.target.value)}
        />
        <br />

        <label htmlFor="title">Description</label>
        <input
          type="text"
          name="picture url"
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />

        <label htmlFor="country">Host Name</label>
        <input
          type="text"
          name="hostname"
          onChange={(e) => setHostName(e.target.value)}
        />
        <br />

        <label htmlFor="title">Tag</label>
        <input
          type="text"
          name="picture url"
          onChange={(e) => setTags([e.target.value])}
        />
        <br /> */}
        <Button style={{color:"white", backgroundColor:"transparent" }}type="submit" value="Create">Create</Button>
        <div>
        <a href="/"><i class="fal fa-chevron-left"></i></a>
        </div>
          
      </Form>
    </div>
  );
};

export default NewExp;