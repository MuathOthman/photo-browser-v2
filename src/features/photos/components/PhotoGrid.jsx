import PhotoCard from "./PhotoCard.jsx";

const PhotoGrid = ({ photos }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-3">
            {
                photos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo}/>
                ))
            }
        </div>
    );
};

export default PhotoGrid;