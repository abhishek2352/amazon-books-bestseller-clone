import React, { useState } from 'react';

function Bestsellers({ bestsellers }) {
const [selectedBook, setSelectedBook] = useState(null);

function handleClick(book) {
setSelectedBook(book === selectedBook ? null : book);
}

return (
<div>
   <div className="book-list">

     {bestsellers.map((book) => (
      <div className="center-text">

            <div className="book" key={book.id}>
               <img src={book.imageUrl} alt={book.title} onClick={() => handleClick(book)} />
              <div className="book-info">
                  <p className="book-title">{book.title}</p>
                     <p className="book-author">{book.author}</p>
                     </div>
                 </div>
{selectedBook === book && (
<div className="selected-book-info">
<p><bold>Name of the book:</bold> {selectedBook.title}</p>
<p><bold>Author:</bold> {selectedBook.author}</p>
</div>
)}
</div>
))}
</div>
</div>
);
}

export default Bestsellers;