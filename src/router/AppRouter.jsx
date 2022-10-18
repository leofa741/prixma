
import {  Route, Link,  Navigate,Routes} from 'react-router-dom';
import {Home,Services,Login,Novedades,NotFound} from '../pages';
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
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact  path="/novedades" element={<Novedades />} />
        <Route  exact path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/" />} />
        
    </Routes>
    <Social/>

    <Footer />

    </>
  )
}
