import React, { useState } from 'react'
import { useEffect } from 'react'
import { getRepos } from '../../actions'
import { Repo, Spinner } from '../../../../Components'
import { useInfiniteScroll } from '../../hooks'
import './Home.scss'

const Home = () => {
    // const [ loading, setLoading ] = useState(false)
    // const [ repos, setRepos ] = useState([])

    const {
        data,
        setData,
        hasMore,
        setHasMore,
        loading,
        setLoading,
        error,
        setError,
        page,
        setPage,
        dataAtTheBottomOfTheList,
    } = useInfiniteScroll()

    useEffect( () => {
        const request = async () => {

            setLoading(true)
            getRepos({page})
            .then( res => {
                setLoading(false)

                if (res?.err) {
                    setError(res?.err)
                } else {
                    setError('')
                    // setRepos(res?.items)
                    setData(d => {
                        return [
                            ...new Set([...d, ...res?.items]
                            ?.reduce((map, obj) => map.set(obj.id, obj), new Map()).values()
                            )
                        ]
                    })
                    setHasMore( res?.total_count > data?.length )                  
                }
            })
            .catch( err => {
                setLoading(false)
                setError(err)
            })
        }

        request()
    },[page])

  return (
    <div className='home'>
        {
            loading && !data?.length && page === 1 &&
            <Spinner />
        }
        {
            data?.length ?
            data?.map( (repo,index) => (
                <Repo
                    ref={
                        data?.length === index + 1 ?
                        dataAtTheBottomOfTheList :
                        undefined
                    }
                    key={index}
                    repo={repo}
                />
            ) ) :
            null
        }

        {
            hasMore && loading &&
            <Spinner />
        }
    </div>
  )
}

export { Home }