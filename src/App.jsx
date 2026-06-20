
// // import React from 'react'
// // import Header from './components/Header';
// // import { BrowserRouter, Route, Routes } from 'react-router';
// // import Features from './pages/Features';
// // import About from './pages/About';
// // import Pricing from './pages/Pricing';
// // import Feedback from './pages/Feedback';
// // import Home from './pages/Home';

// // const App = () => {
// //   return (
// //     <>
// //     <BrowserRouter>
// //     <Header/>

// //     <Routes>
// //       <Route path="/" element={<Home/>}></Route>
// //       <Route path="/features" element={<Features/>}></Route>
// //       <Route path="/about-us" element={<About/>}></Route>
// //       <Route path="/pricing" element={<Pricing/>}></Route>
// //       <Route path="/feedback" element={<Feedback/>}></Route>

// //     </Routes>


    
// //     </BrowserRouter>

     
// //     </>
// //   )
// // }

// // export default App;


// import React, { lazy, Suspense } from 'react'
// import { CirclesWithBar } from 'react-loader-spinner'

// const Home = lazy(() => import("./pages/Home"))

// const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<CirclesWithBar
// height="100"
// width="100"
// color="#4fa94d"
// outerCircleColor="#4fa94d"
// innerCircleColor="#4fa94d"
// barColor="#4fa94d"
// ariaLabel="circles-with-bar-loading"
// wrapperStyle={{}}
// wrapperClass=""
// visible={true}
// />} >
//            <Home />
//       </Suspense>
//     </div>
//   )
// }

// export default App;

import React from 'react'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
        <Home/>
    </div>
  )
}

export default App

