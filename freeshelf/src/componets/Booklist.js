import React from 'react';
import books from '../books.json';
import '../App.css';

class Booklist extends React.Component {
  constructor () {
    super()
    this.state = {
      isExpanded: false,
      selectedBooks: []
    }
  }

  handleClick (event) {
    if (
      this.state.selectedBooks.includes(parseInt(event.target.parentElement.id))
    ) {
      this.setState({
        isExpanded: false,
        selectedBooks: this.state.selectedBooks.filter(
          (id) => id !== parseInt(event.target.parentElement.id)
        )
      })
    } else {
      this.setState({
        isExpanded: !this.state.selectedBooks.includes(
          parseInt(event.target.parentElement.id)
        ),
        selectedBooks: [
          ...this.state.selectedBooks,
          parseInt(event.target.parentElement.id)
        ]
      })
    }
  }

  render () {
    return (
      <div className=' booklist '>
        {books.map((bookDetail, index) => {
          return (
            <div key={index} id={index}>
              <h1>{bookDetail.title}</h1>
              <img src={bookDetail.coverImageUrl} alt='cover art images' />
              <h3>{bookDetail.author}</h3>
              <a href={bookDetail.url}>link to text</a>
              <p>{bookDetail.shortDescription}</p>
              <button onClick={(event) => this.handleClick(event)}>
                {this.state.isExpanded &&
                this.state.selectedBooks.includes(index)
                  ? 'less info'
                  : 'more info'}
              </button>
              {this.state.selectedBooks.includes(index) && (<div>
                <p> 
              Publisher:{''}
              {publisher === null ? <em>info not avaliable</em> : publisher}
              </p>
              <p>
                Publication Date:{''}
                {publisher === null ? <em>info not avaliable</em>:publicationDate}
              </p>
              <p>Full Description: {bookDetail.detailedDescription}</p>
            </div>
          )
        }
      </div>
    )
  }
  )
}

export default Booklist
