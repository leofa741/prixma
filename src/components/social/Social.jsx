import React from 'react'

import './social.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Social = () => {
  return (
    <>
    	<div className="social">
		<ul>
			<li><a href="https://www.facebook.com/MiPlataformaWeb" target="_blank" className="icon-facebook"><FacebookIcon/></a></li>
			{/* <li><a href="http://www.twitter.com/falconmasters" target="_blank" className="icon-twitter"><TwitterIcon/></a></li> */}
			<li><a href="https://www.linkedin.com/in/leonardofarena/" target="_blank" className="icon-linkedin"><LinkedInIcon/></a></li>
			<li><a href="https://www.instagram.com/puentesdigitales.com.ar/" target="_blank" className="icon-instagram"><InstagramIcon/></a></li>
			{/* <li><a href="http://www.youtube.com/falconmasters" target="_blank" className="icon-youtube"><YouTubeIcon/></a></li> */}
			<li><a href="mailto:infoplataformaweb@gmail.com" target="_blank" className="icon-mail"><MailOutlineIcon/> </a></li>
	


		</ul>
		
	</div>
    
    </>
  )
}
