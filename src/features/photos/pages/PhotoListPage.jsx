import useSWR from "swr";
import PhotoGrid from "../components/PhotoGrid.jsx";

const PhotoListPage = () => {
    const {data: photos, error, isLoading} = useSWR('/photos?_limit=20');
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {photos && <PhotoGrid photos={photos}/>}
        </div>
    );
};

export default PhotoListPage;