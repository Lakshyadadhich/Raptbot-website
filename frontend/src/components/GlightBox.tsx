'use client'
import 'glightbox/dist/css/glightbox.min.css'
import React, { ReactNode, useEffect } from 'react'

type PropsType = {
  children: ReactNode
}

const GlightBox = ({ children }: PropsType) => {
  useEffect(() => {
    import('glightbox').then((module) => {
      const lightbox = module.default({
        selector: '.glightbox',
      })
    })
  }, [])

  return <>{children}</>
}
export default GlightBox
