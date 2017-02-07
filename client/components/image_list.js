import React from 'react';

import ImageDetail from './image_detail';

const ImageList = (props) => {
  const renderedImages = props.images
  .filter(image => !image.is_album)
  .map(image => {
    return <ImageDetail key={image.title} image={image} />;
  });

  return (
    <div className="image-list">
      <ul>
        {renderedImages}
      </ul>
    </div>
  );
};

export default ImageList;
