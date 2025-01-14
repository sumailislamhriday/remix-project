import React, { useContext, useRef } from 'react'
import { SearchContext } from '../context/context'

export const Replace = props => {
  const { setReplace } = useContext(SearchContext)
  const timeOutId = useRef(null)
  const change = e => {
    clearTimeout(timeOutId.current)
    timeOutId.current = setTimeout(() => setReplace(e.target.value), 500)
  }

  return (
    <>
      <div className="search_plugin_find-part">
      <label>replace</label>
        <input
          id='search_replace'
          placeholder="Replace"
          className="form-control"
          onChange={change}
        ></input>
      </div>
    </>
  )
}
