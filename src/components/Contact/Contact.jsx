import React, { useRef, useState, useContext } from 'react';
import './Contact.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Typography, TextField, Button, Link } from '@mui/material';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
const Contact = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_f4vc5ab','template_ktirleq',formRef.current,'user_f7DFpuPBGVMbDjaenAkdF')
        .then((result) => {
            console.log(result.text);
            setEmailSent(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className='contact-main'>
            <div className='contact-left-bar'></div>
            <div className='contact-main-wrapper'>
                <div className='contact-left' style={{backgroundColor:darkMode ? 'var(--primary)': 'var(--darkprimary)', color:darkMode ? 'black' : 'white'}}>
                    <h1 className='contact-left-title'>Contact Me</h1>
                    <div className='contact-left-icons-wrapper'>
                        <Link href='https://www.facebook.com/ashmeet.singh.5059' target='_blank' className='contact-left-icons-div'>
                            <FacebookIcon style={{color: darkMode ? 'var(--secondary)':'white'}} className='contact-left-icon' />
                             <Typography style={{backgroundImage:darkMode ? 'linear-gradient(to bottom, var(--primary) 50%, var(--secondary) 50%)' : 'linear-gradient(to bottom,black 50%, var(--secondary) 50%)', color:darkMode ? 'var(--secondary)':'white'}} className='contact-left-icons-text'>Facebook</Typography>
                        </Link>
                        <Link href='https://www.instagram.com/ashmeet_kalsi/' target='_blank' className='contact-left-icons-div'>
                            <InstagramIcon style={{color: darkMode ? 'var(--secondary)':'white'}} className='contact-left-icon' />
                            <Typography style={{backgroundImage:darkMode ? 'linear-gradient(to bottom, var(--primary) 50%, var(--secondary) 50%)' : 'linear-gradient(to bottom,black 50%, var(--secondary) 50%)', color:darkMode ? 'var(--secondary)':'white'}} className='contact-left-icons-text'>Instagram</Typography>
                        </Link>
                        <Link href='https://www.linkedin.com/in/ashmeet-singh-kalsi-119b56201/' target='_blank' className='contact-left-icons-div'>
                            <LinkedInIcon style={{color: darkMode ? 'var(--secondary)':'white'}} className='contact-left-icon' />
                            <Typography style={{backgroundImage:darkMode ? 'linear-gradient(to bottom, var(--primary) 50%, var(--secondary) 50%)' : 'linear-gradient(to bottom,black 50%, var(--secondary) 50%)', color:darkMode ? 'var(--secondary)':'white'}} className='contact-left-icons-text'>LinkedIn</Typography>
                        </Link>
                        <Link href='https://github.com/AshmeetSingh123' target='_blank' className='contact-left-icons-div'>
                            <GitHubIcon style={{color: darkMode ? 'var(--secondary)':'white'}} className='contact-left-icon' />
                            <Typography style={{backgroundImage:darkMode ? 'linear-gradient(to bottom, var(--primary) 50%, var(--secondary) 50%)' : 'linear-gradient(to bottom,black 50%, var(--secondary) 50%)', color:darkMode ? 'var(--secondary)':'white'}} className='contact-left-icons-text'>Github</Typography>
                        </Link>
                        <Link href=' https://wa.me/918826345426' target='_blank' className='contact-left-icons-div'>
                            <WhatsAppIcon style={{color: darkMode ? 'var(--secondary)':'white'}} className='contact-left-icon' />
                            <Typography style={{backgroundImage:darkMode ? 'linear-gradient(to bottom, var(--primary) 50%, var(--secondary) 50%)' : 'linear-gradient(to bottom,black 50%, var(--secondary) 50%)', color:darkMode ? 'var(--secondary)':'white'}} className='contact-left-icons-text'>+91-8826345426</Typography>
                        </Link>
                    </div>
                </div>
                <div className='contact-right'>
                    <h1 className='contact-right-title'>Let's get in Touch.</h1>
                    <form ref={formRef} onSubmit={handleSubmit} className='contact-right-form'>
                        <TextField className='contact-right-form-textfield' name='name' label="Name" variant="outlined" />
                        <TextField className='contact-right-form-textfield' name='subject' label="Subject" variant="outlined" />
                        <TextField className='contact-right-form-textfield' name='email' label="Email" variant="outlined" />
                        <TextField 
                            className='contact-right-form-textfield'
                            id="filled-multiline-static"
                            label="Message"
                            multiline
                            rows={5}
                            name='message'
                            defaultValue="Type your message."
                            variant="outlined"
                        />
                        <Button type='submit' className='contact-right-form-button' variant="outlined" disabled={emailSent ? true : false}>Submit</Button>
                        {
                            emailSent && <p style={{color:'white'}}>Your message has been sent.</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
