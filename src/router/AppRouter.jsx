
import {Routes, Route} from 'react-router-dom';
import {Home,Services,Login,NotFound} from '../pages';
import {Footer, NavBar, Social} from '../components';


export const AppRouter = () => {

    const auttStatus = 'not-authenticated';

  return (   
    <>
     <NavBar/>
    <Routes>
        {/* {
            auttStatus === 'authenticated' ? (
                <>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                </>
            ) : (
                <Route path="/" element={<Login />} />
            )

        }
       */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        
    </Routes>
    <Social/>

    <Footer />

    </>
  )
}
