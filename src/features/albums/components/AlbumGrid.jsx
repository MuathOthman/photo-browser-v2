import AlbumCard from "./AlbumCard.jsx";

const AlbumGrid = ({ albums, ownerName }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-7">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} ownerName={ownerName(album)} />
                ))}
        </div>
    );
};

export default AlbumGrid;