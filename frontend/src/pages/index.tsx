import Loader from '@/components/Loader'
import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

const index = () => {
  useEffect(() => {
    navigate('/home')
  }, [])
  return (
    <>
      <Loader />
    </>
  )
}

export default index
