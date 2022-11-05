
import {  Route, Routes} from 'react-router-dom';
import {Home,Services,Login,Novedades,NotFound,WebDesign,PuentesDigitales,Ecomerce, ConcecionariosOnline, MagnamentSystem, AppPedidosY, ShiftMagnamentSystem, Design, Customers} from '../pages';
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
        <Route path="/webdesign" element={<WebDesign />} />
        <Route path="/ecomerce" element={<Ecomerce />} />
        <Route path="/concesionarioweb" element={<ConcecionariosOnline />} />
        <Route path="/appnative" element={<AppPedidosY />} />
        <Route path="/shiftmagnamentsystem" element={<ShiftMagnamentSystem />} />
        <Route path="/magnamentsystem" element={<MagnamentSystem />} />
        <Route path="/design" element={<Design />} />
        <Route path="/puentesdigitales" element={<PuentesDigitales />} />
        <Route path="/customers" element={<Customers />} />
        <Route  exact path="/login" element={<Login />} />
        <Route path="/*" element={<NotFound/>} />
        
    </Routes>
    <Social/>

    <Footer />

    </>
  )
}
