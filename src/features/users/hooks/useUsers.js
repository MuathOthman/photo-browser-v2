import useSWR from 'swr';

export const useUsers = () => useSWR('/users');
