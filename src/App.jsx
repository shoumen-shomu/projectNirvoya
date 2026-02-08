
// import Home from './components/pages/Home'
// import { Routes , Route } from 'react-router-dom'
// import RootLayouts from './components/layouts/RootLayouts'
// import ProductDetails from './components/pages/ProductDetails'
// import Allproducts from './components/pages/Allproducts'
// // import About from './components/pages/About'
// // import Error from './components/pages/Error'


// function App () {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<RootLayouts />}>
//           <Route index element={<Home/>} />
//           <Route path="/productDetails" element={<ProductDetails/>} />
//           <Route path="/allproducts" element={<Allproducts/>} />
//         </Route>
//           {/* <Route path="*" element={<Error/>} /> */}
//       </Routes>
//     </>
//   )
// }

// export default App


import { Routes , Route } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import RootLayouts from './components/layouts/RootLayouts'
import Loading from './components/Loading'

const Home = lazy(() => import('./components/pages/Home'))
const ProductDetails = lazy(() => import('./components/pages/ProductDetails'))
const Allproducts = lazy(() => import('./components/pages/Allproducts'))

function App () {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home/>} />
            <Route path="/productDetails" element={<ProductDetails/>} />
            <Route path="/allproducts" element={<Allproducts/>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App