import ImagesItem from "./ImagesItem";
import "../App.css";
function ImageList({imagesPlaceHolder}) {
    return (
    <div className="imageList">
       {imagesPlaceHolder.map((image,index)=>{
        return <ImagesItem key={index} image={image}></ImagesItem>})
       }
    </div>
    );
}

export default ImageList;