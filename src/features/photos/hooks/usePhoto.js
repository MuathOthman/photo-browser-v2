import useSWR from 'swr'

export const usePhoto = (id) => useSWR(`/photos/${id}`);