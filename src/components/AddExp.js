import React, { useState } from "react";

const AddExp = () => {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [whatToBring, setWhatToBring] = useState([]);
  const createExp = async (e) => {
    e.preventDefault();
    const expData = {
      title,
      pictureUrl,
      country,
      price,
      duration,
      whatToBring,
    };
    const newExp = await fetch("http://localhost:5000/exps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expData),
    });
    alert("exp created");
  };
  return (
    <div>
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
        <label htmlFor="whatToBring">What to bring</label>
        <input
          type="text"
          name="what To Bring"
          onChange={(e) => setWhatToBring(e.target.value)}
        />
        <br />
        <input type="submit" value="create experiences" />
      </form>
    </div>
  );
};

export default AddExp;
