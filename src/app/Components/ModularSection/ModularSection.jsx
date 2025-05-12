import React from 'react'
import Image from "next/image";
import Button from '../Button/Button';

const ModularSection = () => {
  return (
    <section className='modular-section py-5'>
   <div className="container">
      <div className="row">
        <div className="col-md-5">
            <div className="modular-content">
             <h5>Modular solutions</h5>
                <h2>An all-in-one platform for managing and enhancing relationships</h2>
                <p>Cut costs, increase revenue, and run your business smarter with SORIN — a fully integrated, AI-powered platform. Manage relationships, automate workflows, and scale new growth opportunities with ease.</p>
            </div>
        </div>
        <div className="col-md-7 p-3">
            <Image width={700} height={500} src="/"/>
        </div>
      </div>
      </div>
         <div className="container two">
      <div className="row">
        <div className="col-md-5">
            <div className="modular-content">
                <h4 className='d-flex align-items-center '><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 2.25H5.25C4.45462 2.25087 3.69206 2.56722 3.12964 3.12964C2.56722 3.69206 2.25087 4.45462 2.25 5.25V18.75C2.25087 19.5454 2.56722 20.3079 3.12964 20.8704C3.69206 21.4328 4.45462 21.7491 5.25 21.75H18.75C19.5454 21.7491 20.3079 21.4328 20.8704 20.8704C21.4328 20.3079 21.7491 19.5454 21.75 18.75V5.25C21.7491 4.45462 21.4328 3.69206 20.8704 3.12964C20.3079 2.56722 19.5454 2.25087 18.75 2.25V2.25ZM17.0742 8.73234L10.7742 16.2323C10.7051 16.3147 10.6191 16.3812 10.5221 16.4273C10.425 16.4735 10.3192 16.4983 10.2117 16.5H10.1991C10.0939 16.5 9.99 16.4778 9.89398 16.435C9.79797 16.3922 9.71202 16.3297 9.64172 16.2516L6.94172 13.2516C6.87315 13.1788 6.81981 13.0931 6.78483 12.9995C6.74986 12.9059 6.73395 12.8062 6.73805 12.7063C6.74215 12.6064 6.76617 12.5084 6.8087 12.4179C6.85124 12.3275 6.91142 12.2464 6.98572 12.1796C7.06002 12.1127 7.14694 12.0614 7.24136 12.0286C7.33579 11.9958 7.43581 11.9822 7.53556 11.9886C7.63531 11.995 7.73277 12.0213 7.82222 12.0659C7.91166 12.1106 7.99128 12.1726 8.05641 12.2484L10.1794 14.6072L15.9258 7.76766C16.0547 7.61863 16.237 7.52631 16.4335 7.51066C16.6299 7.49501 16.8246 7.55728 16.9754 7.68402C17.1263 7.81075 17.2212 7.99176 17.2397 8.18793C17.2582 8.3841 17.1988 8.57966 17.0742 8.73234V8.73234Z" fill="#7BF1A8"/></svg> Task flow</h4>
                <h3>Effortless Task Management, All in One Place</h3>
                <p>TaskFlow helps you organize, prioritize, and track tasks in real-time—keeping your goals clear and your team aligned — all in one place.</p>
                 <Button
                        text="Start managing task"
                        type="blackButtonWithBackground"
                    ></Button>
                    <ul className='px-0'>
                      <div>
                        <a href="">Task</a> Automate task creation, assignment, and tracking.
                      </div>
                         <div>
                        <a href="">Flow</a>  Prioritize tasks and collaborate seamlessly.
                      </div>
                            <div>
                        <a href="">Sync </a> Get real-time updates and stay aligned on goals.
                      </div>
                    </ul>
            </div>
        </div>
        <div className="col-md-7 p-3">
            <Image width={700} height={500} src="/"/>
        </div>
      </div>
      </div>
             <div className="container two">
      <div className="row">
        <div className="col-md-5">
            <div className="modular-content">
                <h4 className='d-flex align-items-center  '> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 4H14.82C14.4 2.84 13.3 2 12 2C10.7 2 9.6 2.84 9.18 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM12 3.75C12.41 3.75 12.75 4.09 12.75 4.5C12.75 4.91 12.41 5.25 12 5.25C11.59 5.25 11.25 4.91 11.25 4.5C11.25 4.09 11.59 3.75 12 3.75ZM9.1 18H7V15.86L12.96 9.9L15.08 12.02L9.1 18ZM16.85 10.27L15.79 11.33L13.67 9.21L14.73 8.15C14.93 7.95 15.24 7.95 15.44 8.15L16.85 9.56C17.05 9.76 17.05 10.07 16.85 10.27Z" fill="#75257D"/></svg> Note Sync</h4>
                <h3>Effortless Personalization for Every Note</h3>
                <p>Easily capture meetings, moments, and milestones with personalized notes. Keep them organized and accessible whenever you need them.</p>
                 <Button
                        text="Create New Note"
                        type="blackButtonWithBackground"
                    ></Button>
                    <ul className='px-0'>
                      <div>
                        <a href="">Memo</a>  for organizing quick notes and reminders
                      </div>
                         <div>
                        <a href="">Log</a>  for tracking key events and milestones
                      </div>
                            <div>
                        <a href="">Journal </a> for personal note-taking and idea capturing
                      </div>
                    </ul>
            </div>
        </div>
        <div className="col-md-7 p-3">
            <Image width={700} height={500} src="/"/>
        </div>
      </div>
      </div>
         <div className="container two">
      <div className="row">
        <div className="col-md-5">
            <div className="modular-content">
                <h4 className=' d-flex align-items-center '><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10ZM16 18H8V17.43C8 16.62 8.48 15.9 9.22 15.58C10.07 15.21 11.01 15 12 15C12.99 15 13.93 15.21 14.78 15.58C15.52 15.9 16 16.62 16 17.43V18Z" fill="#00BBA7"/></svg> ContactHub</h4>
                <h3>Streamlined Contact Management</h3>
                <p>Stay organized and connected with simple, powerful tools designed for ease. Manage all your contacts, track interactions, and never miss a follow-up.</p>
                 <Button
                        text="Manage Contacts"
                        type="blackButtonWithBackground"
                    ></Button>
                    <ul className='px-0'>
                      <div>
                        <a href="">Inbox</a>   for managing conversations and customer communications
                      </div>
                         <div>
                        <a href="">Pipeline</a> for tracking deals and sales progress
                      </div>
                    </ul>
            </div>
        </div>
        <div className="col-md-7 p-3">
            <Image width={700} height={500} src="/"/>
        </div>
      </div>
      </div>
        <div className="container two">
      <div className="row">
        <div className="col-md-5">
            <div className="modular-content">
                <h4 className='d-flex align-items-center '><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2L6.01 8L10 12L6.01 16.01L6 22H18V16L14 12L18 8.01V2H6ZM16 16.5V20H8V16.5L12 12.5L16 16.5Z" fill="#9FD3EA"/></svg> TrackIQ</h4>
                <h3>Smart Activity Tracking</h3>
                <p>Monitor every interaction and stay updated on key activities in real time.</p>
                 <Button
                        text="Track Now"
                        type="blackButtonWithBackground"
                    ></Button>
                    <ul className='px-0'>
                      <div>
                        <a href="">Log </a> Capture every activity across teams in one view.
                      </div>
                         <div>
                        <a href="">Pulse </a> Get instant insights into user actions and engagement.
                      </div>
                       <div>
                        <a href="">Timeline </a> Visualize all key events and actions in real time.
                      </div>
                    </ul>
            </div>
        </div>
        <div className="col-md-7 p-3">
            <Image width={700} height={500} src="/"/>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ModularSection
