import { useEffect, useState, useRef, useCallback } from 'react'

const useInfiniteScroll = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [data, setData] = useState([])
    const [hasMore, setHasMore] = useState(false)
    const [page, setPage] = useState(1)

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