import { useEffect, useState, useRef, useCallback } from 'react'

const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [page, setPage] = useState(1)

    // useEffect( () => {
    //     if ( primaryParamValue ) {
    //         setLoading(true)
    //         request({
    //             page,
    //             ...otherParams,
    //         })
    //         .then( resp => {
    //             setLoading(false)
    //             if ( Array.isArray( resp?.data ) ) {
    //                 setData(d => {
    //                     return [
    //                         ...new Set([...d, ...resp?.data]
    //                             ?.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()
    //                             )
    //                     ]
    //                 })
    //                 setHasMore( resp?.pagination?.totalPages > page )
    //             } else {
    //                 setError( () => returnError(resp?.error))
    //             }
    //         })
    //     }

    //     return () => {}
    // },[ page, primaryParamValue ])

    // I abandoned this because Intersection Observer is a DOM API, so it won't work on mobile apps.
    const observer = useRef()
    const dataAtTheBottomOfTheList = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            setPage(prevPageNumber => prevPageNumber + 1)
        }
        })
        if (node) observer.current.observe(node)
    }, [loading, hasMore])

  return {
    loading,
    setLoading,
    error,
    setError,
    data,
    setData,
    hasMore,
    setHasMore,
    page,
    setPage,
    dataAtTheBottomOfTheList,
  }
}

export { useInfiniteScroll }