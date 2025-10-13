
import { Outlet } from 'react-router-dom'
import Navbar from '../component/web/navbar/Navbar'

export default function Layout({user}, {setUser}) {
  return (
    <>
    <Navbar user={user} setUser={setUser}/>
    <Outlet/>
    
    </>
  )
}
