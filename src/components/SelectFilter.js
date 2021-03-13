import React from 'react'

function SelectFilter({ onChange, value }) {
  return (
    <select FilterclassName="form-control" value={value} onChange={onChange}>
      <option value="">Select filter</option>
      <option value="popularity">Popularity</option>
      <option value="relevancy">Relevance</option>
      <option value="publishedAt">Published date</option>
    </select>
  )
}
export default SelectFilter;
