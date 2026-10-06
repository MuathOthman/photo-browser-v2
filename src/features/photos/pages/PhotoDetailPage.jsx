import { Link, useParams } from 'react-router-dom';
import { useUser } from '../../users/hooks/useUser';
import { fullUrl } from '../../../utils/images';
import NotFoundPage from '../../../pages/NotFoundPage';
import PhotoActionBar from "../components/PhotoActionBar.jsx";
import {usePhotoWithAlbum} from "../hooks/usePhotoWithAlbum.js";

const PhotoDetailPage = () => {
    const { id } = useParams();

    const { data: photo, error } = usePhotoWithAlbum(id);
    const album = photo?.album;
    const { data: user } = useUser(album?.userId);

    if (error?.status === 404) return <NotFoundPage />;

    return (
        <>
            <main className="mx-auto max-w-4xl px-4 pt-6 pb-32">
                <img
                    src={fullUrl(id)}
                    alt={photo?.title ?? ''}
                    width={1200}
                    height={800}
                    className="w-full rounded-2xl bg-neutral-200 dark:bg-neutral-800"
                    fetchPriority="high"
                />

                {error && <p className="mt-6 text-neutral-500">Couldn't load this photo.</p>}

                <h1 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
                    {photo ? photo.title : 'Loading…'}
                </h1>

                <p className="mt-2 text-sm text-neutral-500">
                    In{' '}
                    {album ? <Link to={`/albums/${album.id}`} className="font-semibold text-neutral-900 dark:text-neutral-100 underline decoration-accent decoration-2 underline-offset-4">{album.title}</Link> : '…'}
                    {' · by '}
                    {user ? <Link to={`/users/${user.id}`} className="font-semibold text-neutral-900 dark:text-neutral-100 underline decoration-accent decoration-2 underline-offset-4">{user.name}</Link> : '…'}
                </p>
            </main>
            <PhotoActionBar/>
        </>
    );
};

export default PhotoDetailPage;