import { useState, useEffect } from "react";
import Images from "./Pictures";
import AddPicture from "../AddPicture/AddPicture";

export default function Body({}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex flex-wrap justify-center">
        <Images images={images} />
      </div>
      <div className="mt-4">
        <AddPicture images={images} />
      </div>
    </div>
  );
}
