import {useRef, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const BookViewer = () => { 
   const canvasRef = useRef();     
   
   const [loaded, setLoaded] = useState(false);  
   
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
   useEffect(()=> {      
      const scriptTag = document.createElement('script')                
      scriptTag.src= 'https://www.google.com/books/jsapi.js'       
      scriptTag.addEventListener('load', ()=>setLoaded(true))       
      scriptTag.id = "google-script"      
      document.body.appendChild(scriptTag);       
    }, []);      

   
   useEffect(()=>{            
       if (!loaded) return             
       else{         
            if(window.viewer){            
               let viewer = new window.google.books.DefaultViewer(canvasRef.current); 
               viewer.load('ISBN:9780394800028');                    
             }        
             else{          
               
               window.google.books.setOnLoadCallback(() => {                 
                let viewer = new window.google.books.DefaultViewer(canvasRef.current);         
                window.viewer = viewer         
                window.viewer.load('ISBN:9780394800028');        
                });
               window.google.books.load();                             
           }              
       }
   }, [loaded])      

   
 const divStyle = {
    height: '600px',
    width: '500px'
  };

       return (    
    <>
     <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

{/*          <div>        
              {loaded ?             
                   <div>                
                      <div ref={canvasRef} id="viewerCanvas" style={divStyle}></div>            
                   </div> 
                   : 
              'Script not loaded'}      
          </div>   */}


<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div ref={canvasRef} id="viewerCanvas" style={divStyle}></div>   

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </> 
      )

}

export default BookViewer;
