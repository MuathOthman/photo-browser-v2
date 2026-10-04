import PhotoCard from "./PhotoCard.jsx";

const PhotoGrid = ({ photos }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 px-3">
            {
                photos.map((photo, index) => (
                    <PhotoCard key={photo.id} photo={photo} priority={index < 4}/>
                ))
            }
        </div>
    );
};

export default PhotoGrid;