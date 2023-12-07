import { useLocation } from "react-router-dom"

const routes: Route[] = [
    {
      path: '/',
      name: 'Home'
    },
    {
      path: '/user/1',
      name: 'User 1'
    },
    {
      path: '/user/2',
      name: 'User 2'
    },
    {
      path: '/user/3',
      name: 'User 3'
    },
    {
      path: '/user/4',
      name: 'User 4'
    },
    {
      path: '/todo',
      name: 'Todo'
    },
    {
      path: '/products',
      name: 'Products'
    },
    {
      path: '/counter',
      name: 'Counter'
    }
  ]

export default function Header({ darkMode, setDarkMode }: {darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>}) {
  const location = useLocation();
    return (
        <ul style={{ display: 'flex', alignItems: 'center' }}>
          <li style={{ display: 'inline-block'}}>
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className={darkMode ? 'i-line-md-moon-filled-alt-loop' : 'i-line-md-moon-filled-alt-to-sunny-filled-loop-transition'}
              style={{ height: '20px' }}
            />
          </li>
          {routes.map((route, index) => {
            const hightlightRoute = route.path == location.pathname ? "underline" : "none"
              return (
                <li key={`link-${index}`} style={{ textDecorationLine: hightlightRoute, display: 'inline-block', marginLeft: '10px'}}>
                  <a style={{ color: 'inherit' }} href={route.path}>{route.name}</a>
                </li>
              )
            })
          }
        </ul>
    )
}