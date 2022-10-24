import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./Layout";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=20&page=1", {})
      .then((res) => {
        setPhotos(
          res.data.map((photo) => ({
            title: photo.author,
            image_url: photo.download_url,
            _id: photo.id,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <div className="p-8 w-full">
        <h1 className="text-black tracking-wider text-4xl font-bold uppercase">
          Gallery
        </h1>
        <div className="[column-width:33vw] md:[column-width:25vw] lg:[column-width:20vw] [column-gap:1rem] w-full mt-8 pr-8">
          {/* <div className="grid  [grid-template-columns:repeat(auto-fill,250px)] [grid-auto-rows:10px] [justify-content:center]"> */}
          {photos.map((photo) => (
            <div className="inline-block w-full m-2">
              <img
              loading="lazy"
                src={photo.image_url}
                alt={photo.title}
                className="w-full block"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
