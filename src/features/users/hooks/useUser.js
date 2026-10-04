import useSWR from 'swr';

export const useUser = (id) => useSWR(id ? `/users/${id}` : null);