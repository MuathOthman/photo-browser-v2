import useSWR from 'swr';

export const useUserAlbums = (userId) => useSWR(userId ? `/users/${userId}/albums` : null);