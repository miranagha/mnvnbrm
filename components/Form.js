import React from "react";
import Link from 'next/link'

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      email: "",
      pickUp: "",
      delivery: "",
      items: ""
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    fetch(`/send-email`, {
      method: "POST",
      body: JSON.stringify(this.state),
      credentials: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }
  )
  .then(res => {
        this.setState({
            submitted: true,
            name: "",
            phone: "",
            email: "",
            pickUp: "",
            delivery: "",
          items: ""
        });
      })
      .catch(err => console.log(err));
    };

  render() {
    return (
      <form className="contact-form">
        <fieldset>
          <legend className='legend' style={{color:'#fff'}}>Request a free quote now:</legend>
          <br />
          <input
            name="name"
            placeholder='Name'
            value={this.state.name}
            onChange={e => this.change(e)}
          />
          <br />
          <br />
          <input
            name="phone"
            placeholder='Phone Number'
            value={this.state.phone}
            onChange={e => this.change(e)}
          />
          <br />
          <br />
          <input
            name="email"
            placeholder='Email'
            value={this.state.email}
            onChange={e => this.change(e)}
          />
          <br />
          <br />
          <input
            name="pickUp"
            placeholder='Pick up address (postcode)'
            value={this.state.pickUp}
            onChange={e => this.change(e)}
          />
          <br />
          <br />
          <input
            name="delivery"
            placeholder='Delivery address (postcode)'
            value={this.state.delivery}
            onChange={e => this.change(e)}
          />
          <br />
          <br />
          <textarea
            placeholder='Please tell us what you move (items)'
            cols="27"
            rows="4"
            name="items"
            type="textarea"
            value={this.state.items}
            onChange={e => this.change(e)}
          />
          <br />
          {this.state.submitted ? 
            window.location.href='/thank-you'
           : null}
          <button
            type="submit"
            className="btn btn-block btn-l"
            onClick={e => this.onSubmit(e)}
          >
            Send
          </button>
        </fieldset>
      </form>
    );
  }
}
