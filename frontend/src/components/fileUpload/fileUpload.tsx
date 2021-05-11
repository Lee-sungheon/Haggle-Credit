import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import axios, { AxiosResponse } from "axios";

const spring_URL = process.env.VUE_APP_SPRING_URL;

export function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
  };

  const saveIP = (imageList: ImageListType) => {
    console.log(imageList);
    axios.post(`${spring_URL}/image/itemPhotoUpload`, imageList)
    .then(res => {
        console.log(res);
    })
  };

  const updateProfile = (imageList: ImageListType) => {
    console.log(imageList);
    axios.post(`${spring_URL}/image/profileUpload`, imageList)
    .then(res => {
        console.log(res);
    })
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.dataURL} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
            <button onClick={() => saveIP(imageList)}>ItemPhoto저장버튼!</button>
            <button onClick={() => updateProfile(imageList)}>Profile저장버튼!</button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
