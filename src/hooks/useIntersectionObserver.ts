import { useEffect, useMemo, useState, RefObject } from 'react'

const IS_SSR = typeof window === 'undefined'

const useIntersectionObserver = (ref: RefObject<Element>, options?: IntersectionObserverInit) => {
    const [inView, setInView] = useState(false);

    const observer = useMemo(() => {
        if (IS_SSR) {
            return;
        }

        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            const isIntersecting = entries[entries.length - 1].isIntersecting;
            setInView(isIntersecting);
        }

        return new IntersectionObserver(handleIntersect, options);
    }, [options]);

    useEffect(() => {
        if (!observer || !ref.current) {
            return;
        }

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [ref, observer]);

    return inView;
}

export default useIntersectionObserver;
