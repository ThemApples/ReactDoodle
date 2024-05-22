import { Navbar } from "./assets/navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "./assets/footer"

export function Layout(){
    return(
        <>
        <Navbar/>
        <main>
           <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default Layout;