import useSWR from 'swr';

export const usePhotoWithAlbum = (id) => useSWR(id ? `/photos/${id}?_expand=album` : null);