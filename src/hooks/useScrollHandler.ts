import { useEffect, useRef } from 'react';

type ScrollHandler = (value: number) => void;

const useScrollHandler = (handler: ScrollHandler): void => {
    const requestRef = useRef<number>();

    useEffect(() => {
        const handlerCallback = () => handler(window.scrollY);

        const handleScroll = () => {
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
            requestRef.current = requestAnimationFrame(handlerCallback);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (requestRef.current !== undefined) {
                cancelAnimationFrame(requestRef.current);
            }
        }
    }, []);
};

export default useScrollHandler;
