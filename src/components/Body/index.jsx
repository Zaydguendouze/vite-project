import Images from "../Pictures";
import BtnPictureAdd from "./BtnPictureAdd";

export default function Body() {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="flex flex-wrap justify-center">
        <Images />
      </div>
      <div className="mt-4">
        <BtnPictureAdd />
      </div>
    </div>
  );
}
