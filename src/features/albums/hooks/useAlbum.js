import useSWR from 'swr';

export const useAlbum = (id) => useSWR(id ? `/albums/${id}` : null);