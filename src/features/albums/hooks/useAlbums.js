import useSWR from 'swr';

export const useAlbums = () => useSWR('/albums');
