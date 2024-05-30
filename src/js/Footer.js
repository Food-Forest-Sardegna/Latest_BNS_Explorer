import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://foodforestsardegna.gitbook.io/educational-library/'
}, {
    id: 'discord',
    url: 'https://www.instagram.com/foodforestsardegna/'
}, {
    id: 'telegram',
    url: 'https://telegram.me/FoodForestSardegna'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version</div>
            <div>FFT Team</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://fftexplorer.com" target="_blank">FFT</a>
            </div>
        </div>
    );
}

export default Footer;
