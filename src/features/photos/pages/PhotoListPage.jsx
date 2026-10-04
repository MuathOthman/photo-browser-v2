import PhotoGrid from "../components/PhotoGrid.jsx";
import {useInfinitePhotos} from "../hooks/useInfinitePhotos.js";
import FeaturedPhoto from "./FeaturedPhoto.jsx";

const PhotoListPage = () => {
    const {photos, error, isLoading, isLoadingMore, hasMore, loadMore} = useInfinitePhotos();
    return (
        <>
            <FeaturedPhoto />
            <div>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {photos.length > 0 && <PhotoGrid photos={photos}/>}
            </div>
                {hasMore ? (
                    <div className="flex justify-center py-8">
                        <button
                            onClick={loadMore}
                            disabled={isLoadingMore}
                            className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:brightness-110 disabled:cursor-wait disabled:opacity-60"
                        >
                            {isLoadingMore ? 'Loading…' : 'Load more'}
                        </button>
                    </div>
                ) : (
                    <p className="py-8 text-center text-neutral-500">You've reached the end.</p>
                )}
        </>
    );
};

export default PhotoListPage;