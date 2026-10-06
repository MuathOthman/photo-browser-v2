import PhotoGrid from "../components/PhotoGrid.jsx";
import {useInfinitePhotos} from "../hooks/useInfinitePhotos.js";
import FeaturedPhoto from "../components/FeaturedPhoto.jsx";

const PhotoListPage = () => {
    const { photos, error, isLoading, isLoadingMore, hasMore, loadMore, retry } = useInfinitePhotos();

    return (
        <>
            <FeaturedPhoto />
            <div>
                {isLoading && <p>Loading...</p>}
                {photos.length > 0 && <PhotoGrid photos={photos} />}
            </div>

            {isLoading ? null : error ? (
                <div role="alert" className="flex flex-col items-center gap-3 py-8">
                    <p className="text-neutral-500">Couldn't load photos.</p>
                    <button
                        onClick={retry}
                        className="rounded-full bg-accent px-6 py-3 font-semibold text-white hover:brightness-110"
                    >
                        Try again
                    </button>
                </div>
            ) : hasMore ? (
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