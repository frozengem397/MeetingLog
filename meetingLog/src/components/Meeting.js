import React, { Component,useState,useEffect } from 'react'
import { variables } from '../Variables'
import { AddClick,EditClick,DeleteClick } from '../util/newMeeting';

export function Meeting() {
    
    const[meetings, setMeetings] = useState([]);

    useEffect(() =>{
    fetch(variables.API_URL+'Meeting')
    .then(res => {
        return res.json();
    })
    .then(data => {
        setMeetings(data)
    })

    },[]);

    const p_sort_up = [...meetings].sort((a, b) => (a.priority < b.priority) ? 1 : -1);
    const p_sort_down = [...meetings].sort((a, b) => (a.priority > b.priority) ? 1 : -1);

    const date_sort_up = [...meetings].sort((a, b) => (a.dateOfmeeting < b.dateOfmeeting) ? 1 : -1);
    const date_sort_down = [...meetings].sort((a, b) => (a.dateOfmeeting > b.dateOfmeeting) ? 1 : -1);
    

    
    
    

    return (
      <div>
        <AddClick />
        
        <table className ="table table-striped" paginator rows={1}>
            <thead>
            <tr>
                <th>
                    MeetingId

                </th>
                <th>
                    Meeting Subject

                </th>
                <th>
                    Meeting content
                </th>
                <th>
                <button type ="button" className ="btn btn-edit" onClick={() =>setMeetings(date_sort_up)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-up" viewBox="0 0 16 16">
                                <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
                                <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
                                            <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
                            </svg>
                    </button> Meeting Date  <button type ="button" className ="btn btn-edit" onClick={() =>setMeetings(date_sort_down)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-down-alt" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
                        <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                        </svg>
                    </button>
                </th>
                <th>
                    <button type ="button" className ="btn btn-edit" onClick={() =>setMeetings(p_sort_up)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-up" viewBox="0 0 16 16">
                                <path d="M12.438 1.668V7H11.39V2.684h-.051l-1.211.859v-.969l1.262-.906h1.046z"/>
                                <path fill-rule="evenodd" d="M11.36 14.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.835 1.973-1.835 1.09 0 2.063.636 2.063 2.687 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
                                            <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z"/>
                            </svg>
                    </button> priority  <button type ="button" className ="btn btn-edit" onClick={() =>setMeetings(p_sort_down)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sort-numeric-down-alt" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.36 7.098c-1.137 0-1.708-.657-1.762-1.278h1.004c.058.223.343.45.773.45.824 0 1.164-.829 1.133-1.856h-.059c-.148.39-.57.742-1.261.742-.91 0-1.72-.613-1.72-1.758 0-1.148.848-1.836 1.973-1.836 1.09 0 2.063.637 2.063 2.688 0 1.867-.723 2.848-2.145 2.848zm.062-2.735c.504 0 .933-.336.933-.972 0-.633-.398-1.008-.94-1.008-.52 0-.927.375-.927 1 0 .64.418.98.934.98z"/>
                        <path d="M12.438 8.668V14H11.39V9.684h-.051l-1.211.859v-.969l1.262-.906h1.046zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z"/>
                        </svg>
                    </button> 
                </th>
                <th>
                    Actions
                </th>

            </tr>
            </thead>
            <tbody>
                {meetings?.map(words => 
                    <tr key = {words.Id}>
                        <td>{words.dialogueId}</td>
                        <td>{words.dialogueSubject}</td>
                        <td>{words.dialogueContent}</td>
                        <td>{words.dateOfmeeting}</td>
                        <td >{words.priority}</td>
                        <td> <EditClick words ={words}/> <DeleteClick words ={words}/></td>
                    </tr>
                    
                    
                    )}
            </tbody>
        </table>
        

      </div>
    )
  }


