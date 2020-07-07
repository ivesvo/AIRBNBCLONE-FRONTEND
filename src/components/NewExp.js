import React, { useState } from "react";
import '../App.css';

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
    const newExp = await fetch("http://localhost:5000/experiences", {
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
        <div><h2>Create Your Amazing Online Experience</h2></div>
      <form onSubmit={createExp}>
        <label htmlFor="title">Title</label>
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
        <br />
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default NewExp;