import React from 'react';
import books from '../books.json';
import '../App.css';

class Booklist extends React.Component {
  render () {
    return (
      <div className=' booklist '>
        {books.map((bookDetail, index) => {
          return (
            <div>
              <h1>{bookDetail.title}</h1>
              <img src={bookDetail.coverImageUrl} alt='cover art images' />
              <h3>{bookDetail.author}</h3>
              <a href={bookDetail.url}>link to text</a>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Booklist
