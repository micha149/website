import React, { ReactElement } from 'react';
import clsx from 'clsx';

let GLOBAL_ID = 0;

type LogoLoinkProps = {
    className?: string,
    description: string,
    href: string,
    logo: ReactElement<React.SVGProps<SVGSVGElement>, 'svg'>,
};

const LogoLoinkProps = ({ className, description, href, logo }: LogoLoinkProps): JSX.Element => {
    const id = GLOBAL_ID++;
    return (
        <a
            id={`logo-link-${id}`}
            aria-label={description}
            className={clsx(
                'block w-24 h-24 transition transform duration-500',
                'hover:text-sky-600 hover:scale-110',
                className,
            )}
            href={href}
        >
            {React.cloneElement(logo, { className: 'w-full h-full', 'aria-labelledby': `logo-link-${id}` })}
        </a>
    );
};

export default LogoLoinkProps;
