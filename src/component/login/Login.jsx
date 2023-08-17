import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./login.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
const Login = () => {
    const form = useRef();
    const [submitted, setSubmitted] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c6aoais', 'template_6hagx5m', form.current, 'z4Ts5ch1-8Ph7wQiE')
      .then((result) => {
        console.log(result.text);
        console.log('message sent');
        setSubmitted(true);
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="login">
        <div className="leftlogin">
            <h1 className="p">Contact US</h1>
            <div className="address">
           <HomeOutlinedIcon style={{ fontSize: '45px' }} className='icons1'/>
           <div className='t'>
           55 GirajVihar AjmerRoad Jaipur
           </div>
            </div>
            <div className="email">
            <EmailOutlinedIcon style={{ fontSize: '45px' }} className='icons1'/>
            <div className='t'> aasthastones@gmail.com</div>
           
            </div>
            <div className="phone">
              <PhoneAndroidOutlinedIcon style={{ fontSize: '45px' }} className='icons1'/>
              <div className='t'> 9414459167</div>

             
            </div>
        </div>
        <div className="middlelogin">
        {submitted ? (
          <div className="thank-you-message">Thanks for submitting!</div>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" id="" placeholder="FirstName" name="user_first_name" />
            <input type="text" id="" placeholder="LastName" name="user_last_name" />
            <input type="email" id="" placeholder="Email" name="user_email" />
            <input type="number" id="" placeholder="Phone" name="user_phone" />
            <input type="text" id="" placeholder="Address" name="user_address" />
               <br></br>
            <input type="submit" value="Submit" className='mybuttonlogin' style={{background:"rgb(194 156 108)",color:"white"}}/>
          </form>
        )}
      </div>
        {/* <div className="rightlogin">
            <button className="mybuttonlogin">Call Now</button>
        </div> */}
    </div>

  )
}

export default Login
