import { useEffect, useState } from "react";

export default function Body() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
      });
  }, []);

  return <div>{images.map((img) => img + " +")}</div>;
}
