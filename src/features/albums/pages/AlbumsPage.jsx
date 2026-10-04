import {useAlbums} from "../hooks/useAlbums.js";
import {useUsers} from "../../users/hooks/useUsers.js";
import AlbumGrid from "../components/AlbumGrid.jsx";

const AlbumsPage = () => {
    const { data: albums, error, isLoading } = useAlbums();
    const { data: users } = useUsers();

    const ownerName = (album) => users?.find((user) => user.id === album.userId)?.name;

    return (
        <div className="px-4 md:px-8 pt-12 md:pt-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Albums</h1>
            <p className="mt-3 text-neutral-500">
                {albums && users ? `${albums.length} albums from ${users.length} photographers` : '\u00a0'}
            </p>

            {isLoading && <p className="mt-10">Loading…</p>}
            {error && <p className="mt-10">Couldn't load albums.</p>}

            {albums && (
                <div className="mt-10">
                    <AlbumGrid albums={albums} ownerName={ownerName} />
                </div>
            )}
        </div>
    );
};

export default AlbumsPage;