import React, { useState } from 'react';

import { Modal, Form, Header, Button } from 'semantic-ui-react';

import { Customers } from "../modules/Endpoints"

export function LoginModal({isVisible, hide}) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    Customers.create({
      firstName,
      lastName
    });
    hide();
    
  }

  
   return (
     <Modal open={isVisible} onClose={hide} size="small">
      <Header content="Register an account"/>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}} />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}}/>
          </Form.Field>
          <Button type="submit" onClick={handleSubmit}>Send it!</Button> 
        </Form>


      </Modal.Content>


     </Modal>
   )
} 