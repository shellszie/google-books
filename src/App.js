import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BookViewer from './BookViewer.js';

function App() {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () =>  setLoading(true); //setShow(true);
 
  // const [books, setBooks] = useState([]);
  // const [loading, setLoading] = useState(true);


// useEffect(() => {

  // var google = null;

    // const loadScript = (url) => {
    //   return new Promise((resolve, reject) => {
    //     const script = document.createElement('script');
    //     script.src = url;
    //     script.type = "text/javascript";
        
    //     script.onload = function () {
          
    //         console.log("Script loaded successfully in declaration callback!");
    //         // google.books.load();
    //       alert("Script is done loading");
          
          
    //     };
        
    //     script.onerror = (error) => reject(error);
    //     document.head.appendChild(script);
    //   });
    // };

    // const fetchBooks = () => {
    //   debugger
    //   google.books.load();

    //   // After loading the books API, perform a search (for example, searching for 'react')
    //   const viewer = new google.books.DefaultViewer(document.getElementById('book-canvas'));
    //   viewer.load('ISBN:9780394800028');  // Example book ID
    // };

    // Load the Google Books API script and fetch books once it's loaded
    // loadScript('https://www.gstatic.com/books/jsapi.js')
    // loadScript('https://www.google.com/books/jsapi.js');
    //   .then(() => {
    // //     //fetchBooks();
    //     console.log("Script loaded successfully in loadScript callback!");
    //      // google.books.load();
    // //     // setLoading(false);
    //   })
    //    .catch((error) => {
    //      console.error('Error loading Google Books API', error);
    

    //    });

    // Cleanup on unmount (remove script tag if needed)
    // return () => {
    //   const script = document.querySelector(`script[src='www.google.com/books/jsapi.js']`);
    //   if (script) {
    //     script.remove();
    //   }
    // };

  // }, []);


  return (
    <>
      <BookViewer/>
{/*      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      {loading ? (
        <p>Loading...</p>
        ) : (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <h3>{book.volumeInfo.title}</h3>
              <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown Author'}</p>
            </li>
          ))}
        </ul>
        )}*/}
      {/*<div id="book-canvas" style={{ height: '600px', border: '1px solid #ccc' }}></div>*/}

{/*      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>        

         <div id="book-canvas" style={{ height: '600px', border: '1px solid #ccc' }}></div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>*/}
    </>
  );
}

export default App;
