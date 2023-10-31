import { useNavigate } from 'react-router-dom';
import s from './style.module.scss'
import { useEffect, useState } from 'react'

const menuList = [
  {
    icon: 'icon-menu',
    name: 'Menú',
    url: '/',
  },
  {
    icon: 'icon-folder',
    name: 'Folder',
    url: '/',
  },
  {
    icon: 'icon-shop',
    name: 'Shop',
    url: '/admin/dashboard',
  },
  {
    icon: 'icon-user',
    name: 'User',
    // url: '/admin/profile',
    url: '/',
  },
]


export const SideMenu = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenu = (idx: number, item: { icon: string, name: string, url: string } ) => {
    console.log(idx);
    console.log(item);
    if (idx === 0) {
      setIsOpen(!isOpen)
    } else {
      navigate(item.url)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setIsOpen(false));
    
    return () => {
      window.removeEventListener('scroll', () => setIsOpen(false));
    }
  }, [])
  

  return (
    <div className={`${s['side-menu']}`}
      style={{
        position: 'fixed',
        width: isOpen ? '225px' : '70px'
      }}>
      <ul>
        {
          menuList.map( (item, i) => (
            <li key={i} onClick={ () => handleMenu(i, item) }>
              {/* <NavLink 
                to={ item.url }
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "blue" : "inherit",
                  };
                }}
                className={({ isActive, isPending }) => {
                  return isActive ? "active" : isPending ? "pending" : "";
                }}
              > */}
                <span className={`${ s.icon }`}><img src={ `/src/assets/svg/${item.icon}.svg` } alt="icon" /></span>
                <span style={{
                  opacity: isOpen ? 1 : 0
                }}>{ item.name }</span>
              {/* </NavLink> */}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
