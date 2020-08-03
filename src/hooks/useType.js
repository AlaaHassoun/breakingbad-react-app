import useFetch from './useFetch';

export default function useType(type,id) {
    return useFetch(id ? `${type}/${id}` : `${type}`)
}