import React from 'react'

import './social.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import threads from '../../assets/img/threads-by-instagram-logo-.png';
import newTwitterlogox from '../../assets/img/x-logo-twitter.png';


export const Social = () => {
	return (
		<>


			<div className="social">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}
					<li><a href="https://twitter.com/puentesdig" target="_blank" className="icon-twitter"><img  src={newTwitterlogox} alt="tnewTwitterlogox" /></a></li>

				</ul>

			</div>
			<div className="social1">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}
					<li><a href="https://www.linkedin.com/in/leonardofdev/" target="_blank" className="icon-linkedin"><LinkedInIcon /></a></li>

				</ul>

			</div>
			<div className="social2">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}
					<li><a href="https://www.instagram.com/puentesdigitales.com.ar/" target="_blank" className="icon-instagram"><InstagramIcon /></a></li>

					{/* <li><a href="https://wa.me/+541536038167" target="_blank" className="icon-whatsapp"><WhatsAppIcon/> </a></li>
			<li><a href="mailto:infoplataformaweb@gmail.com" target="_blank" className="icon-mail"><MailOutlineIcon/> </a></li>	 */}

				</ul>

			</div>
			<div className="social3">
				<ul>				
					<li><a href="https://www.threads.net/@puentesdigitales.com.ar" target="_blank" className="icon-threads"><img  src={threads} alt="threads" /></a></li>
	
				</ul>

			</div>

			<div className="social4">
				<ul>
					{/* <li><a href="https://www.facebook.com/www.puentesdigitales.com.ar" target="_blank" className="icon-facebook"><FacebookIcon/></a></li> */}

					<li><a href="mailto:infoplataformaweb@gmail.com" target="_blank" className="icon-mail"><MailOutlineIcon />Contact </a></li>
				</ul>

			</div>
		</>
	)
}
