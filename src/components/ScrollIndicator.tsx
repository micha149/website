import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Image as ArrowDown } from '../images/arrow-down.svg';

type ScrollIndicatorProps = {
    className?: string,
    disabled?: boolean,
};

const ScrollIndicator = ({ className, disabled = false }: ScrollIndicatorProps): JSX.Element => {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        if (!disabled) {
            ref.current.style.animationPlayState = 'running';
            return;
        }

        const handleAnimationEnd = () => {
            if (ref.current) {
                ref.current.style.animationPlayState = 'paused';
            };
        }

        ref.current.addEventListener('animationiteration', handleAnimationEnd, { once: true });

        return () => {
            ref.current?.removeEventListener('animationiteration', handleAnimationEnd);
        }
    }, [disabled]);

    return (
        <div className={clsx(className, 'py-6 flex justify-center items-center')}>
            <ArrowDown ref={ref} className="w-20 animate-scroll" />
        </div>
    );
};

export default ScrollIndicator;
