import Aos from 'aos'
import React, { ReactNode, Suspense, useEffect } from 'react'
import Loader from './Loader'

const BasicLayout = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  )
}   

export default BasicLayout
