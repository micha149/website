import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type ButtonProps = {
    icon?: JSX.Element,
    href: string,
    children: ReactNode,
    className?: string,
};

const isInternal = (href: string) => !href.startsWith('http');

const ButtonLink = ({ children, className, href, icon }: ButtonProps): JSX.Element => {
    const content = icon? [
        React.cloneElement(icon, {className: 'w-6 h-6 mr-2'}),
        <span>{children}</span>
    ] : children;

    const commonProps = {
        className: clsx(
            'inline-flex border py-2 border-sky-500 rounded items-center',
            'hover:bg-sky-500 hover:text-white',
            'focus-visible:ring-2 focus-visible:ring-pink-500 ring-offset-2 dark:ring-offset-slate-900 focus:outline-none',
            icon ? 'pl-8 pr-10' : 'px-10',
            className,
        ),
    };

    if (isInternal(href)) {
        return <Link to={href} {...commonProps}>{content}</Link>;
    }

    return <a href={href} {...commonProps}>{content}</a>;
};

export default ButtonLink;
