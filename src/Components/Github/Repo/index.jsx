import React, { forwardRef } from 'react'
import moment from 'moment'
import './Repo.scss'
import { formatNumber } from '../../../utils'

const Repo = ( {repo}, ref ) => {

  return (
    <div className='repo' ref={ref}>

      <div className="avatar">
        <img src={repo?.owner?.avatar_url} alt="" />
      </div>

      <div className="content">
        <h6 className="repoName">{repo?.name}</h6>
        <p className="description">{repo?.description ?? ''}</p>

        <div className="info">
          <span className="star box">stars: {formatNumber(repo?.stargazers_count) ?? ''}</span>
          <span className="issue box">issues: {formatNumber(repo?.open_issues_count) ?? ''}</span>
          <span className="extra">submitted {moment(`${repo?.created_at}`).fromNow()} by {repo?.owner?.login}</span>
        </div>
      </div>

    </div>
  )
}

export default forwardRef(Repo)