import React from 'react';
import Link from 'next/link';

const ButtonOutline = ({link, title}) => {
    return(
        <Link href={link ? link : '/'}>
            <a className="button-outline">{title}</a>
        </Link>
    )
};


export default ButtonOutline;