import React from "react";
import MainTwo from "./../components/Main";
import About from "./../components/About";
import Search from "./../components/Search";
import EmailForm from "./../components/Emailform";
import axios from 'axios';

class Landing extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      cottageToEmailId: '',
      cottageToEmailName: ''
    }
  }

  clearEmailForm(){
    document.getElementById('emailFrom').value = '';
    document.getElementById('emailSubject').value = '';
    document.getElementById('emailBody').value = '';
    this.setState({cottageToEmailId: ''});
    this.setState({cottageToEmailName: ''});
  }

  selectCottage(e) {
    e.preventDefault();
    let cottageChosen = e.target.dataset.id;
    let cottageChosenName = e.target.dataset.name;
    this.setState({cottageToEmailId: cottageChosen});
    this.setState({cottageToEmailName: cottageChosenName});
    document.getElementById('emailForm').classList.remove("invisible");
    document.getElementById('emailForm').scrollIntoView(true);
  }

  sendEmail(e){
    e.preventDefault();
    console.log("Email Sent to " + this.state.cottageToEmailId);
    document.getElementById('emailForm').classList.add("invisible");
    document.getElementById('Search').scrollIntoView(true);
    // set route to send through the email
    axios({
      method: 'post',
      url: 'send/mail',
      params: {
        emailTo: this.state.cottageToEmailId,
        emailFrom: document.getElementById('emailFrom').value,
        emailSubject: document.getElementById('emailSubject').value,
        emailBody: document.getElementById('emailBody').value
      }
    }).then((response) => {
      console.log(response);
    })
    this.clearEmailForm();
    this.emailSentMessage();
  }

  emailSentMessage(){
    let toast = document.getElementById('toast');
    toast.classList.remove('invisible');
    setTimeout(function(){toast.classList.add('invisible')}, 2000);
  }

  render() {
    return (
      <div>
        <MainTwo />
        <About />
        <Search clickHandler={(e) => {this.selectCottage(e)}}/>
        <EmailForm to={this.state.cottageToEmailName} clickHandler={(e) => {this.sendEmail(e)}}/>
      </div>
    )
  }
}

export default Landing;
