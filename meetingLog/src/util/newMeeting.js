import React, { Component,useState,useEffect } from 'react'
import { variables } from '../Variables'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
export function AddClick(){

    const [meeting, setNewmeeting] = useState({dialogueId:0,dialogueSubject:"",dialogueContent:"",dateOfmeeting:"",priority:""});
    const handleChange = (e) => {
        setNewmeeting({...meeting,[e.target.name]: e.target.value})
    
  }
  



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const eventHandler = (event) => {
    fetch(variables.API_URL+'Meeting', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meeting),
    })
      .then((res) => res.json())
      .then((result) => {
        handleClose();
        window.location.reload();
        
      })
      .catch((err) => console.log('error'))
  }


  return (
    <>
    
      <Button variant="primary" onClick={handleShow}>
        Add new Meeting Note
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Meeting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Id</span>
                </div>
                <input type="text" class="form-control" placeholder="Id" aria-label="Id" aria-describedby="basic-addon1" value = {meeting.dialogueId} name = 'dialogueId' onChange ={handleChange} />
                <br></br>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Subject</span>
                </div>
                <input type="text" class="form-control" placeholder="Subject" aria-label="Subject" aria-describedby="basic-addon2" value = {meeting.dialogueSubject} name = 'dialogueSubject' onChange ={handleChange} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Content</span>
                </div>
                <textarea type="text" class="form-control" placeholder="Content" aria-label="Content" aria-describedby="basic-addon3" value = {meeting.dialogueContent} name = 'dialogueContent' onChange ={handleChange} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">DoM</span>
                </div>
                <input type="date" class="form-control" placeholder="dateOfmeeting" aria-label="dateOfmeeting" aria-describedby="basic-addon4" value = {meeting.dateOfmeeting} name = 'dateOfmeeting' onChange ={handleChange} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">priority</span>
                </div>
                <input type="text" class="form-control" placeholder="priority" aria-label="priority" aria-describedby="basic-addon5" value = {meeting.priority} name = 'priority' onChange ={handleChange}/>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={eventHandler}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export function EditClick(meet){
    const [meeting, updateNewmeeting] = useState({id:meet.words.id,dialogueId:meet.words.dialogueId, dialogueSubject:meet.words.dialogueSubject,dialogueContent:meet.words.dialogueContent,dateOfmeeting:meet.words.dateOfmeeting,priority:meet.words.priority});
    const handleChange = (e) => {
        updateNewmeeting({...meeting,[e.target.name]: e.target.value})
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eventHandler = (event) => {
    console.log(meeting)
    fetch(variables.API_URL+'Meeting', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meeting),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("Successfully updated");
        window.location.reload();
        
        
      })
      .catch((err) => console.log(err))
  }
  return (
    <>
    
      <Button variant="second" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Id</span>
                </div>
                <input type="text" class="form-control" placeholder="Id" aria-label="Id" aria-describedby="basic-addon1" value = {meeting.dialogueId} name = 'dialogueId' onChange ={handleChange} />
                <br></br>
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Subject</span>
                </div>
                <input type="text" class="form-control" placeholder="Subject" aria-label="Subject" aria-describedby="basic-addon2" value = {meeting.dialogueSubject} name = 'dialogueSubject' onChange ={handleChange} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Content</span>
                </div>
                <input type="text" class="form-control" placeholder="Content" aria-label="Content" aria-describedby="basic-addon3" value = {meeting.dialogueContent} name = 'dialogueContent' onChange ={handleChange} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">meeting</span>
                </div>
                <input type="text" class="form-control" placeholder="dateOfmeeting" aria-label="dateOfmeeting" aria-describedby="basic-addon4" value = {meeting.dateOfmeeting} name = 'dateOfmeeting' onChange ={handleChange} />
            </div>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">priority</span>
                </div>
                <input type="text" class="form-control" placeholder="priority" aria-label="priority" aria-describedby="basic-addon5" value = {meeting.priority} name = 'priority' onChange ={handleChange}/>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={eventHandler}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export function DeleteClick(meet){

    const eventHandler = (event) => {
        if(window.confirm('Are you sure?')){
            fetch(variables.API_URL+'Meeting/'+meet.words.id,{
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
            .then(res=>res.json())
            .then((result)=>{
                alert("Deleted");
                window.location.reload();
            },(error)=>{
                alert('Failed');
            })
            }
      }
    return (
        <>
          <Button variant="third" onClick={eventHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
          </Button>
    </>)
}


