import React from 'react'
import SearchForm from '../components/searchForm'
import PicesFilters from '../components/pricesFilters'
import FlightResult from '../components/flightResult'
import  Recommandation from '../components/recommandation'


export default function dashboard() {
  return (
    <div>
      
      <SearchForm/>
      <PicesFilters/>
      <FlightResult/>
      <Recommandation/>

    </div>
  )
}
