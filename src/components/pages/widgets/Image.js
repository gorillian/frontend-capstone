import React, { useState } from "react";

const FileUploader = (props) => {
  const [image, setImage] = useState([]);
  const [isImage, setIsImage] = useState(false);
  const hiddenInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenInput.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];
    setImage(URL.createObjectURL(fileUploaded));
    setIsImage(true);
  };
  return (
    <div className="image-widget-wrapper">
      <div className="image-space">
        {isImage ? <img src={image} alt="img" /> : "Image will display here"}
      </div>
      <input
        type="file"
        ref={hiddenInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button className="filechoose" onClick={handleClick}>
        Choose a file
      </button>
      <div>
        <button onClick={() => props.history.push("../")}>Go Back</button>
      </div>
    </div>
  );
};
export default FileUploader;
