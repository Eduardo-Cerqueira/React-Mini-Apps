import { Link, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"

type Route = {
    path: string,
    name: string
}

const routes: Route[] = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/search',
      name: 'Search'
    }
  ]

export default function Header() {
  const location = useLocation();
    return (
      <>
        <ul style={{ display: 'flex', alignItems: 'center' }}>
          {routes.map((route, index) => {
            const hightlightRoute = route.path == location.pathname ? "underline" : "none"
              return (
                <li key={`link-${index}`} style={{ textDecorationLine: hightlightRoute, display: 'inline-block', marginLeft: '10px'}}>
                  <Link to={route.path} style={{ color: 'inherit' }}>{route.name}</Link>
                </li>
              )
            })
          }
        </ul>
      </>
    )
}