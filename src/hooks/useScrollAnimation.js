import { useEffect, useState } from 'react';

export default function useScrollAnimation(triggerOffset = 100) {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        const handle = () => {
            if (window.scrollY > triggerOffset) setTrigger(true);
            else setTrigger(false);
        };
        window.addEventListener('scroll', handle);
        return () => window.removeEventListener('scroll', handle);
    }, [triggerOffset]);

    return trigger;
}
