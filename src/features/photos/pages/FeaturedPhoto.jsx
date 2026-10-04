import { Link } from 'react-router-dom';
import HeroBanner from '../../../components/HeroBanner';
import { useUser } from '../../users/hooks/useUser';
import { fullUrl } from '../../../utils/images';
import {usePhotoWithAlbum} from "../hooks/usePhotoWithAlbum.js";

const TOTAL_PHOTOS = 5000;
const featuredId = Math.floor(Math.random() * TOTAL_PHOTOS) + 1;

const FeaturedPhoto = () => {
    const { data: photo, error } = usePhotoWithAlbum(featuredId);
    const album = photo?.album;
    const { data: user } = useUser(album?.userId);

    if (error) return null;

    return (
        <HeroBanner
            image={fullUrl(featuredId)}
            badge="Picked for you"
            title={
                photo ? (
                    <Link to={`/photos/${featuredId}`} className="hover:underline">
                        {photo.title}
                    </Link>
                ) : 'Loading…'
            }
        >
            {album ? (
                <Link to={`/albums/${album.id}`} className="hover:underline">{album.title}</Link>
            ) : '…'}
            {' · '}
            {user ? (
                <Link to={`/users/${user.id}`} className="hover:underline">{user.name}</Link>
            ) : '…'}
        </HeroBanner>
    );
};

export default FeaturedPhoto;