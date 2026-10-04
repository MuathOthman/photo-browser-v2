import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PhotoActionBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [copied, setCopied] = useState(false);

    const goBack = () => {
        if (location.key === 'default') {
            navigate('/');
        } else {
            navigate(-1);
        }
    };

    const share = async () => {
        const url = window.location.href;

        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <button
                onClick={goBack}
                aria-label="Go back"
                className="grid size-12 place-items-center rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-2xl"
            >
                ‹
            </button>

            <button
                onClick={share}
                className="h-12 min-w-[220px] rounded-full bg-share px-6 font-semibold text-white hover:brightness-110"
            >
                {copied ? 'Link copied' : 'Share'}
            </button>
        </div>
    );
};

export default PhotoActionBar;