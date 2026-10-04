import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <p className="text-8xl font-bold tracking-tighter text-accent">404</p>
            <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">Page not found</h1>
            <p className="mt-2 text-neutral-500">The photo, album or page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="mt-8 rounded-full bg-accent px-6 py-3 font-semibold text-white hover:brightness-110"
            >
                Back to photos
            </Link>
        </div>
    );
};

export default NotFoundPage;