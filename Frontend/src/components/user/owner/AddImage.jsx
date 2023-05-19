/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";

const MyComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div>
      <div className="col-auto">
        <div className="row g-3 ">
          <label for="formFileSm" className="form-label"></label>
          <input
            class="form-control form-control-sm "
            id="formFileSm"
            accept=".jpg,.gif,.png"
            onChange={handleImageChange}
            type="file"
          />
        </div>
        {selectedImage && (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
        )}
      </div>
    </div>
  );
};

export default MyComponent;
