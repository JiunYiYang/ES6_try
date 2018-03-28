import React, { Component } from 'react';

class Gallery extends Component {
  render() {
    let altImg = 'https://cdn0.iconfinder.com/data/icons/thin-photography/57/thin-367_photo_image_wall_unavailable_missing-512.png';
    return (
      <div>
        {
          this.props.items.map((item, index) => {
            let { title, description, authors, publishedDate, infoLink, imageLinks } = item.volumeInfo;
            return (
              <a
                key={index}
                className="book"
                href={infoLink}
                target="_blank"
              >
                <img
                  src={imageLinks !== undefined ? imageLinks.thumbnail : altImg}
                  alt="book"
                  className="book-img"
                />
                <div className="book-text">{title}</div>
              </a>
            )
          })
        }
      </div>
    )
  }
}

export default Gallery;
