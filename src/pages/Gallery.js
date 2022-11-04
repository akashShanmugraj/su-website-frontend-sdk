import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import Layout from "./Layout";

const Gallery = () => {
  return (
    <Layout>
      <div className="p-8 w-full">
        <h1 className="text-black tracking-wider text-4xl font-bold uppercase mb-4">
          Gallery
        </h1>
        <GalleryAccordion title="Republic Day 2022" />
        <GalleryAccordion title="Republic Day 2022" />
        <div className="[column-width:33vw] md:[column-width:25vw] lg:[column-width:20vw] [column-gap:1rem] w-full mt-8 pr-8">
          {/* <div className="grid  [grid-template-columns:repeat(auto-fill,250px)] [grid-auto-rows:10px] [justify-content:center]"> */}
        </div>
      </div>
    </Layout>
  );
};

export const GalleryAccordion = ({ title = "" }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=7", {})
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

  const [isHidden, setIsHidden] = useState(false);

  return (
    <div className="w-full lg:p-4">
      <div className="flex items-center space-x-4 mb-4">
        <button onClick={(e) => setIsHidden(!isHidden)}>
          {isHidden ? (
            <MdOutlineKeyboardArrowRight size={36} />
          ) : (
            <MdOutlineKeyboardArrowDown size={36} />
          )}
        </button>
        <h1 className="text-3xl font-semibold">{title}</h1>
      </div>
      {!isHidden && (
        <div className="flex flex-wrap">
          {photos.map((photo) => (
            <img
              // loading="lazy"
              src={photo.image_url}
              alt={photo.title}
              className="h-36 block"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
