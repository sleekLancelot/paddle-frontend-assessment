import axios from 'axios'
import { buildQueryString, monthAgo } from '../utils';

export const getRepos = async (params) => {
    const date = monthAgo().toLocaleDateString('en-CA')

    const queryString = buildQueryString( {
        q: `created:>${date}`,
        sort: 'stars',
        order: 'desc',
        // per_page: 100,
        page: 1,
        ...params,
    } );

    try {
        const res = await axios.get(`https://api.github.com/search/repositories?${queryString || ''}`)
        console.log(res)
        if (res.status >= 200) return res.data
    } catch (err) {
        console.log(err)
    }

}