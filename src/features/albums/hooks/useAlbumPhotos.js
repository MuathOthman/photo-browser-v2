import useSWR from 'swr';

export const useAlbumPhotos = (albumId) => useSWR(albumId ? `/albums/${albumId}/photos` : null);