import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const NAME = 'Page2'
export default function Page2() {

  const style = {
    container: {
      backgroundColor: 'lightyellow',
      height: '100px'
    }
  }

  console.log(`${NAME} initiated`);

  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(`UseEffect called in ${NAME}`);
  }, []);

  return (
    <div style={style.container}>
      <div>{NAME}</div>
      <br />
      
      <Button variant="primary" onClick={() => { setShow(true) }}>
        Launch Bootstrap Modal
      </Button>

      <Modal show={show} onHide={() => { setShow(false) }}>

        <Modal.Header closeButton>
          <Modal.Title>Heading Text</Modal.Title>
        </Modal.Header>

        <Modal.Body>Modal content will sit here</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => { setShow(false) }}>Close</Button>
          <Button variant="primary" onClick={() => { setShow(false) }}>Submit</Button>
        </Modal.Footer>

      </Modal>

    </div>


  )
};