import { useEffect, useState } from "react";
import Picture from "./Picture";

export default function Images({ images }) {
  return images.map((name, index) => (
    <Picture imageName={name} index={index} key={index} />
  ));
}
