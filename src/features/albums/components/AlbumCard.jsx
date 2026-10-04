import { Link } from 'react-router-dom';
import { albumCoverUrl } from '../../../utils/images';

const AlbumCard = ({ album, ownerName }) => {
    return (
        <Link to={`/albums/${album.id}`} className="group block">
            <div className="overflow-hidden rounded-xl">
                <img
                    src={albumCoverUrl(album.id)}
                    alt=""
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-auto bg-neutral-200 dark:bg-neutral-800 transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <h2 className="mt-3 truncate font-semibold">{album.title}</h2>
            <p className="mt-0.5 text-sm text-neutral-500">{ownerName}</p>
        </Link>
    );
};

export default AlbumCard;