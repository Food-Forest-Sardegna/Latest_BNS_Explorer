import React from 'react';

const socialLinks = [
{
    id: 'telegram',
    url: 'https://telegram.me/+IHQKlfg7iiY3MTM0'
},
{
    id: 'github',
    url: 'https://github.com/Food-Forest-Sardegna'
}

];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: 1.0.0</div>
            <div>DFN Natzione Sardìnnia</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://natzionesardinnia.com" target="_blank">Website</a>
            </div>
        </div>
    );
}

export default Footer;