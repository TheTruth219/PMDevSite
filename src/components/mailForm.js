// import PropTypes from "prop-types"
import React,{Component} from "react"
import styled from "styled-components"
// import axios from "axios"

const API_PATH = 'http://localhost:8000/index.php';

const MailFormBase = styled.div`
max-width: 420px;
margin: 0 auto;
box-sizing: border-box;

     

 p {
     text-align: center;
     font-weight: 500;
}
 input[type=text],input[type=email], select, textarea {
     width: 100%;
     padding: 12px;
     border: 1px solid #ccc;
     border-radius: 4px;
     box-sizing: border-box;
     margin-top: 6px;
     margin-bottom: 16px;
     resize: vertical;
}
 input[type=submit] {
     background-color: #4CAF50;
     color: white;
     padding: 12px 20px;
     border: none;
     border-radius: 4px;
     cursor: pointer;
}
 input[type=submit]:hover {
     background-color: #45a049;
}
 .container {
     border-radius: 5px;
     background-color: #f2f2f2;
     padding: 20px;
}
  



`
export default class MailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent: false,
            error: null
          }
      }
      handleFormSubmit = e => {
        e.preventDefault();
        axios({
          method: 'post',
          url: `${API_PATH}`,
          headers: { 'content-type': 'application/json' },
          data: this.state
        })
          .then(result => {
            this.setState({
              mailSent: result.data.sent
            })
          })
          .catch(error => this.setState({ error: error.message }));
      };
  
render(){

    return (
        <MailFormBase >
            <p>Contact Me</p>
                <div>
                <form action="#">
                <label>First Name</label>
                <input type="text"id="fname"name="firstname"placeholder="Your name.." value={this.state.fname}
                onChange={e => this.setState({ fname: e.target.value })}/>
                <label>Last Name</label>
                <input type="text"id="lname" name="lastname" placeholder="Your last name.."
                value={this.state.lname}
                onChange={e => this.setState({ lname: e.target.value })}
                />


                <label>Email</label>
                <input type="email"id="email"name="email"placeholder="Your email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
                />


                <label>Subject</label>
                <textarea id="subject"name="subject"placeholder="Write something.."
                onChange={e => this.setState({ message: e.target.value })}
                value={this.state.message}
                >
                </textarea>
                <input onClick={e => this.handleFormSubmit(e)} type="submit"value="Submit"/>

                <div>
                    {this.state.mailSent?<div>Thank you for contacting us.</div>:<div>This was an error</div>}
                
                    
                    </div>
                </form>
                </div>
        </MailFormBase>
        );

}


};



