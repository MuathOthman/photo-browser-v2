import { Link, useParams } from 'react-router-dom';
import { useAlbum } from '../hooks/useAlbum';
import { useAlbumPhotos } from '../hooks/useAlbumPhotos';
import { useUser } from '../../users/hooks/useUser';
import PhotoGrid from '../../photos/components/PhotoGrid';
import NotFoundPage from '../../../pages/NotFoundPage';
import { albumCoverUrl } from '../../../utils/images';
import HeroBanner from "../../../components/HeroBanner.jsx";

const AlbumPage = () => {
    const { id } = useParams();

    const { data: album, error } = useAlbum(id);
    const { data: photos } = useAlbumPhotos(id);
    const { data: user } = useUser(album?.userId);

    if (error?.status === 404) return <NotFoundPage />;

    return (
        <>
            <HeroBanner
                image={albumCoverUrl(id, 1600, 800)}
                badge="Album"
                headingLevel="h1"
                title={album ? album.title : 'Loading…'}
            >
                by{' '}
                {user ? (
                    <Link to={`/users/${user.id}`} className="font-semibold text-white underline underline-offset-4">
                        {user.name}
                    </Link>
                ) : '…'}
                {photos && ` · ${photos.length} photos`}
            </HeroBanner>

            {error && <p className="p-4">Couldn't load this album.</p>}
            {photos ? <PhotoGrid photos={photos} /> : <p className="p-4">Loading photos…</p>}
        </>
    );
};

export default AlbumPage;