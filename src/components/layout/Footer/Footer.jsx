import React from 'react';
import { Link } from 'react-router-dom';
import logoFooter from '@/assets/logofooter.png';

const Footer = () => {
    return (
        <footer>
			<div className='footer-style'>
				<Link to={'/'}>
					<div>
						<img src={logoFooter} alt="Logo Kasa" title="Logo Kasa" />
					</div>
				</Link>
				<div>
					<p>© 2020 Kasa. All rights reserved</p>
				</div>
			</div>
		</footer>
    );
};

export default Footer;