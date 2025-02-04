import React, { Suspense ,lazy} from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function Quote() {
  return (
    <Suspense fallback={<div>Loading assets</div>}>
    <Spline className="absolute pb-20"
    scene="https://prod.spline.design/lumIMzlv1eDmfnZg/scene.splinecode" 
  
  />
  </Suspense>
  )
}
