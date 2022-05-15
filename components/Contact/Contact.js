import React, { Component } from 'react';
import LabelInput from '../Inputs/LabelInput';
import { Button } from '@material-ui/core';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import LabelTextAreaInput from '../Inputs/LabelTextAreaInput';
import ThankYouScreen from './ThankYou';
// import Loading
// commit

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Firstname: '',
      FirstnameFlag: false,
      FirstnameErrorMsg: 'Name Required',

      Companyname: '',
      CompanynameFlag: false,
      CompanynameErrorMsg: 'Company Name Required',

      email: '',
      emailFlag: false,
      emailErrorMsg: 'Email Required',

      phone: '',
      phoneErrorMsg: 'Field Required',
      phoneFlag: '',

      description: '',
      descriptionError: 'Field Required',
      descriptionFlag: '',

      success1: false,
    };
    this.oldState = {
      ...this.state,
    };
  }
  ClearState = () => {
    this.setState({
      ...this.oldState,
    });
  };
  // todo: FirstnameHandler onChange function ..........................
  FirstnameHandler = (e) => {
    const reg = /^[a-zA-Z.\s]*$/;
    // const reg = /[A-Za-z_.-]/;
    const validReg = reg.test(e.target.value);
    if (validReg) {
      this.setState({ FirstnameFlag: false });
    } else {
      this.setState({
        FirstnameFlag: true,
        FirstnameErrorMsg: 'Use only Alphabets and space',
      });
    }
    // if (e.target.value.length < 33) {
    //   this.setState({ Firstname: e.target.value });
    // }
    this.setState({ Firstname: e.target.value });
  };

  // todo: Email Handler
  emailHandler = (e) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validReg = reg.test(e.target.value);
    if (validReg) {
      this.setState({ emailFlag: false });
    } else {
      this.setState({
        emailFlag: true,
        emailErrorMsg: '',
      });
    }
    this.setState({ email: e.target.value });
  };

  // todo: CompanynameHandler onChange function ..........................
  CompanynameHandler = (e) => {
    // const reg = /^[a-zA-Z\s]*$/;
    const reg = /^[a-zA-Z0-9_ `',&.-]*$/;
    const validReg = reg.test(e.target.value);
    if (validReg) {
      this.setState({ CompanynameFlag: false });
    } else {
      this.setState({
        CompanynameFlag: true,
        CompanynameErrorMsg:
          'Use only Alphabets, numeric , hyphen , underscore, comma, ampersand, period, apostrophe and space',
      });
    }
    // if (e.target.value.length < 33) {
    //   this.setState({ Companyname: e.target.value });
    // }
    this.setState({ Companyname: e.target.value });
  };

  // todo: DescriptionHandler onChange function ..........................
  DescriptionHandler = (e) => {
    if (e.target.value === '') {
      this.setState({ descriptionFlag: false });
    }
    if (e.target.value.length > 0 && e.target.value.trim().length === 0) {
      this.setState({ descriptionFlag: true });
    } else {
      this.setState({ descriptionFlag: false });
    }
    this.setState({ description: e.target.value });
  };

  phoneHandler = (phone) => {
    console.log('phone', phone);
    this.setState({
      phone: phone,
      phoneFlag: false,
    });

    if (phone.length == 0) {
      this.setState({
        phoneFlag: false,
      });
    }

    if (phone.length < 11) {
      this.setState({
        phone: phone,
        phoneFlag: true,
        phoneErrorMsg: 'Enter Valid Number',
      });
    }
  };

  submitHandler = () => {
    if (this.state.FirstnameFlag || this.state.Firstname === '') {
      this.setState({
        FirstnameErrorMsg:
          this.state.FirstnameFlag && this.state.Firstname.length > 0
            ? this.state.FirstnameErrorMsg
            : 'Name Required',
        FirstnameFlag: true,
      });
    } else if (this.state.phone === '' || this.state.phoneFlag) {
      this.setState({
        phoneErrorMsg:
          this.state.phoneFlag && this.state.phone.length > 0
            ? this.state.phoneErrorMsg
            : 'Phone Number Required',
        phoneFlag: true,
      });
    } else if (this.state.emailFlag || this.state.email === '') {
      this.setState({
        emailErrorMsg:
          this.state.emailFlag && this.state.email.length > 0
            ? 'Enter Valid Email'
            : 'Email Required',
        emailFlag: true,
      });
    } else if (this.state.CompanynameFlag || this.state.Companyname === '') {
      this.setState({
        CompanynameErrorMsg:
          this.state.CompanynameFlag && this.state.Companyname.length > 0
            ? this.state.CompanynameErrorMsg
            : 'Company Name Required',
        CompanynameFlag: true,
      });
    } else if (this.state.descriptionFlag || this.state.description === '') {
      this.setState({
        descriptionError:
          this.state.descriptionFlag && this.state.description.length > 0
            ? this.state.descriptionError
            : 'Message Required',
        descriptionFlag: true,
      });
    } else {
      console.log('asdasdasdjahsdjhas');
      let data = {
        first_name: this.state.Firstname,
        phone: this.state.phone,
        email: this.state.email,
        company_name: this.state.Companyname,
        message: this.state.description,
        // last_name: this.state.Secondname,
      };
      // alert(JSON.stringify(data))
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(`${process.env.ROOT_URL}/api/admin/contact_us`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          this.ClearState();
          this.setState({ success1: true });
        })
        .catch((error) => {
          console.log('error', error);
          this.ClearState();
        });
    }
  };

  _handleKeyEnter = (event) => {
    switch (event.keyCode) {
      case 13:
        this.submitHandler();
        break;
      default:
        break;
    }
  };

  render() {
    const {
      Firstname,
      FirstnameFlag,
      FirstnameErrorMsg,

      email,
      emailErrorMsg,
      emailFlag,

      phone,
      phoneErrorMsg,
      phoneFlag,

      Companyname,
      CompanynameFlag,
      CompanynameErrorMsg,

      description,
      descriptionFlag,
      descriptionError,
    } = this.state;
    return (
      <div>
        {!this.state.success1 ? (
          <div className='wrap-contact'>
            <div className='container'>
              <div className='mbile-c'>
                <div className='row'>
                  <div className='col-sm-12 text-center'>
                    <div className='contact-c'>
                      <h2>Contact Us</h2>
                    </div>
                  </div>
                </div>
                <div className='row mt-4'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-4'>
                    <LabelInput
                      type='text'
                      name='First Name'
                      placeholder='Full Name'
                      inputValue={Firstname}
                      errorMsg={FirstnameErrorMsg}
                      flag={FirstnameFlag}
                      onChange={this.FirstnameHandler}
                    />
                  </div>
                  <div className='col-sm-4'>
                    <div style={{ width: '100%', float: 'left' }}>
                      <div className='mbl-sn'>
                        <PhoneInput
                          country={'us'}
                          // value={
                          //   this.state.phone !== '' ? this.state.phone : null
                          // }
                          value={this.state.phone}
                          onChange={(phone) => this.phoneHandler(phone)}
                          placeholder={'Phone'}
                          phone={phone}
                          phoneFlag={phoneFlag}
                          phoneErrorMsg={phoneErrorMsg}
                        />
                        <p
                          className='drop_down_input_error_text'
                          style={{
                            display: this.state.phoneFlag ? 'block' : 'none',
                            color: 'red',
                            fontSize: '12px',
                            marginLeft: '15px',
                          }}
                        >
                          {this.state.phoneErrorMsg}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-2'></div>
                </div>
                {/* 3rd Row */}
                <div className='row mt-4'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-8'>
                    <LabelInput
                      type='email'
                      name='Email'
                      placeholder='Email'
                      inputValue={email}
                      errorMsg={emailErrorMsg}
                      flag={emailFlag}
                      onChange={this.emailHandler}
                    />
                  </div>
                  <div className='col-sm-2'></div>
                </div>
                <div className='row mt-4'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-8'>
                    <LabelInput
                      type='text'
                      name='Company Name'
                      placeholder='Company Name'
                      inputValue={Companyname}
                      errorMsg={CompanynameErrorMsg}
                      flag={CompanynameFlag}
                      onChange={this.CompanynameHandler}
                    />
                  </div>
                  <div className='col-sm-2'></div>
                </div>
                <div className='row mt-4'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-8'>
                    <LabelTextAreaInput
                      type='textarea'
                      // star='*'
                      // label='Description (Optional)'
                      placeholder='Message'
                      name='description'
                      inputValue={description}
                      errorMsg={descriptionError}
                      flag={descriptionFlag}
                      onChange={this.DescriptionHandler}
                      maxLength={350}
                    />
                  </div>
                  <div className='col-sm-2'></div>
                </div>
                <div className='row'>
                  <div className='col-sm-2'></div>
                  <div className='col-sm-8'>
                    <div className='button-con'>
                      <Button
                        onClick={this.submitHandler}
                        variant='contained'
                        color='primary'
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                  <div className='col-sm-2'></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <ThankYouScreen />
        )}
      </div>
    );
  }
}

export default Contact;
