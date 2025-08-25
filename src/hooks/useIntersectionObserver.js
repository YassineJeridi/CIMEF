import { useEffect, useRef, useState } from 'react';

export default function useIntersectionObserver(options) {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            options
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options]);

    return [ref, isIntersecting];
}
