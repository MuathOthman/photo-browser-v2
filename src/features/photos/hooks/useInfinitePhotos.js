import useSWRInfinite from "swr/infinite";

const LIMIT = 20;

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && previousPageData.length < LIMIT) return null;
  return `/photos?_page=${pageIndex + 1}&_limit=${LIMIT}`;
}

export const useInfinitePhotos = () => {
    const { data, error, isLoading, size, setSize } = useSWRInfinite(getKey, {
        revalidateFirstPage: false,
    });

    const photos = data ? data.flat() : [];
    const isLoadingMore = !error && (isLoading || (data && data[size - 1] === undefined));
    const hasMore = !data || data[data.length - 1].length === LIMIT;
    const loadMore = () => setSize((s) => s + 1);

    return { photos, error, isLoading, isLoadingMore, hasMore, loadMore };
}