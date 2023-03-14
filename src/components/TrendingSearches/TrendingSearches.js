import { useEffect, useState } from 'react'
import getTrendingSearchesServcie from 'services/getTrendingSearchesService'
import Category from 'components/Category'

export default function TrendingSearches () {
  const [trends, setTrends] = useState([])

  useEffect(() => {
    getTrendingSearchesServcie().then(setTrends);
  }, [])

  return <Category name='Tendencias' options={trends} />
}