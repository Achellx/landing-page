import React from 'react';

const links = [
    { text: 'Mision', href: '#mision' },
    { text: 'Vision', href: '#vision' },
    { text: 'Servicios', href: '#servicios' }
];

function Navbar() {
    return (
        <nav className='flex flex-row h-auto via-slate-900 p-6 justify-between gap-3 relative'>
            <div className='text-zinc-400'>
                logo
            </div>
           <div className='flex gap-5'> 
                {links.map((link, index) => (
                    <a key={index} href={link.href} className='text-zinc-400 text-base mx-2 hover:opacity-50 ease-in duration-300'>
                        {link.text}
                    </a>
                ))}
           </div>
        </nav>
    )
}

export default Navbar;