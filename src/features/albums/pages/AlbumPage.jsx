import { Link, useParams } from 'react-router-dom';
import { useAlbum } from '../hooks/useAlbum';
import { useAlbumPhotos } from '../hooks/useAlbumPhotos';
import { useUser } from '../../users/hooks/useUser';
import PhotoGrid from '../../photos/components/PhotoGrid';
import NotFoundPage from '../../../pages/NotFoundPage';
import { albumCoverUrl } from '../../../utils/images';

const AlbumPage = () => {
    const { id } = useParams();

    const { data: album, error } = useAlbum(id);
    const { data: photos } = useAlbumPhotos(id);
    const { data: user } = useUser(album?.userId);

    if (error?.status === 404) return <NotFoundPage />;

    return (
        <>
            <section className="relative m-3 h-[50vh] min-h-[360px] overflow-hidden rounded-2xl bg-neutral-300 dark:bg-neutral-800">
                <img
                    src={albumCoverUrl(id, 1600, 800)}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 md:p-12">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                        Album
                    </span>
                    <h1 className="mt-4 text-3xl md:text-6xl font-bold tracking-tight text-white">
                        {album ? album.title : 'Loading…'}
                    </h1>
                    <p className="mt-3 text-sm text-white/80">
                        by{' '}
                        {user ? (
                            <Link to={`/users/${user.id}`} className="font-semibold text-white underline underline-offset-4">
                                {user.name}
                            </Link>
                        ) : '…'}
                        {photos && ` · ${photos.length} photos`}
                    </p>
                </div>
            </section>

            {error && <p className="p-4">Couldn't load this album.</p>}
            {photos ? <PhotoGrid photos={photos} /> : <p className="p-4">Loading photos…</p>}
        </>
    );
};

export default AlbumPage;