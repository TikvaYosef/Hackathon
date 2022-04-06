import React from 'react'
import "./Footer.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const Footer = () => {
    return (

        <div className="Footer">
            <ul className='footersection'>
                <li className='lifooter'>
                    <p>Amir Mangisto</p>
                    <a href='https://github.com/Amir-Mangisto' target="_blank"><GitHubIcon></GitHubIcon> </a>
                    <a href='https://www.linkedin.com/in/amir-mangisto-03a19a226/' target="_blank"><LinkedInIcon></LinkedInIcon></a>
                </li>
                <li className='lifooter'>
                    <p>Tikva Yosef</p>
                    <a href='https://github.com/TikvaYosef' target="_blank"><GitHubIcon></GitHubIcon> </a>
                    <a href='https://www.linkedin.com/in/tikva-yosef-406bba223/' target="_blank"><LinkedInIcon></LinkedInIcon></a>
                </li>
                <li className='lifooter'>
                    <p>Jacov Shiber</p>
                    <a href='https://github.com/JacobShiber' target="_blank"><GitHubIcon></GitHubIcon> </a>
                    <a href='https://www.linkedin.com/in/yaakov-shiber-31a466226/' target="_blank"><LinkedInIcon></LinkedInIcon></a>
                </li>
                <li className='lifooter'>
                    <p>Matan Ysayas</p>
                    <a href='https://github.com/matan-ysayas' target="_blank"><GitHubIcon></GitHubIcon> </a>
                    <a href='https://www.linkedin.com/in/matan-ysayas-94b105226/' target="_blank"><LinkedInIcon></LinkedInIcon></a>
                </li>
                <li className='lifooter'>
                    <p>Shay Belayneh</p>
                    <a href='https://github.com/ShayBelayneh' target="_blank"><GitHubIcon></GitHubIcon> </a>
                    <a href='https://www.linkedin.com/in/shay-belayneh/' target="_blank"><LinkedInIcon></LinkedInIcon></a>
                </li>
            </ul>
        </div>


    )
}
