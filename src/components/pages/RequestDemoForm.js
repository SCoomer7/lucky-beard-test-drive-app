import React from "react";
import Texts from "./Texts";
import './styles/RequestDemoForm.css';
import RequestForm from './RequestForm';
import Articles from "./Articles";


// This is the request form page with three components header, form & articles.
const RequestDemoForm = () => {

  return (
    <section className="container">
      <div className='header'>
        <Texts className='header-text' text='Request a demo'/>
        <Texts className='header-description' text='If you are a professional, we offer a desktop admin platform, to allow a better and faster management of your whole business'/>
      </div>
      <RequestForm/>
      <Articles/>
    </section>
  );
};

export default RequestDemoForm;
