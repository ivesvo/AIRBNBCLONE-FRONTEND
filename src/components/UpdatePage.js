import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function UpdatePage() {
  let { expId } = useParams();
  console.log("id", expId);

  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);
  const [whatToBring, setWhatToBring] = useState([]);
  const getData = async () => {
    const getExp = await fetch(`http://localhost:5000/experiences/${expId}`);
    const data1 = await getExp.json();
    console.log("data", data1);
    setTitle(data1.data.title);
    setCountry(data1.data.country);
    setPictureUrl(data1.data.pictureUrl);
    setPrice(data1.data.price);
    setDuration(data1.data.duration);
    setWhatToBring(data1.data.whatToBring);
  };
//   const deleteExp = async () => {};
  const updateExp = async (e) => {
    const expData = {
      title: title,
      _id: expId,
      country: country,
      pictureUrl: pictureUrl,
      price: price,
      duration: duration,
      whatToBring: whatToBring,
    };
    const upExp = await fetch(`http://localhost:5000/exps`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expData),
    });
    console.log("get old exp", upExp);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <form onSubmit={updateExp}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title">Country</label>
        <input
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label htmlFor="title">Picture URL</label>
        <input
          type="text"
          name="pictureUrl"
          value={pictureUrl}
          onChange={(e) => setPictureUrl(e.target.value)}
        />
        <label htmlFor="title">Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="title">Duration</label>
        <input
          type="text"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label htmlFor="title">What To Bring</label>
        <input
          type="text"
          name="whatToBring"
          value={whatToBring}
          onChange={(e) => setWhatToBring(e.target.value)}
        />
      </form>
      <Button onClick={() => updateExp()}>Update</Button>
    </div>
  );
}