import { NavLink, useLocation } from 'react-router-dom';
import s from './style.module.scss'
import { useEffect, useState } from 'react'

export const SideMenu = () => {

  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setIsOpen(false));
    
    return () => {
      window.removeEventListener('scroll', () => setIsOpen(false));
    }
  }, [])

  useEffect(() => {

    // console.log(location);
    if (
        location.pathname.includes('business-register') ||
        location.pathname.includes('welcome')
        ) {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
    setIsOpen(false)
    
  }, [location])

  return (
    <>
      {
        isShow 
        ? (
          <div className={`${s['side-menu']}`}
            style={{
              width: isOpen ? '180px' : '70px'
            }}>
            <ul>
              <li onClick={ toggleMenu }>
                <span className={`${ s.icon }`}>
                  <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 16H23V13.3333H0V16ZM0 9.33333H23V6.66667H0V9.33333ZM0 0V2.66667H23V0H0Z" fill="#818181"/>
                  </svg>
                </span>
                <span style={{
                    opacity: isOpen ? 1 : 0
                  }}>Menu</span>
              </li>

              <li>
                <NavLink 
                  to={ '/admin/dashboard' }
                  className={({ isActive, isPending }) => {
                    return isActive ? `${ s.active}` : isPending ? "pending" : "";
                  }}
                  >
                  <span className={`${ s.icon }`}>
                    <svg width="28" height="24" viewBox="0 0 28 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.25 22.4H12.75V16H11V22.4H5.75V16H4V22.4C4 22.8243 4.18437 23.2313 4.51256 23.5314C4.84075 23.8314 5.28587 24 5.75 24H23.25C23.7141 24 24.1592 23.8314 24.4874 23.5314C24.8156 23.2313 25 22.8243 25 22.4V16H23.25V22.4Z" />
                      <path d="M27.8162 8.04433L24.2462 0.963237C24.1014 0.674081 23.878 0.430741 23.6013 0.260577C23.3246 0.0904126 23.0056 0.000171337 22.68 0H5.32001C4.99443 0.000171337 4.67536 0.0904126 4.39867 0.260577C4.12198 0.430741 3.89864 0.674081 3.75376 0.963237L0.183763 8.04433C0.0618727 8.28687 -0.00105727 8.55434 1.34374e-05 8.82533V11.4981C-0.00078546 11.9036 0.141621 12.2966 0.402513 12.6089C0.788089 13.0472 1.2643 13.3981 1.79878 13.6377C2.33326 13.8772 2.91348 13.9999 3.50001 13.9973C4.45706 13.9988 5.38492 13.6706 6.12501 13.0688C6.86509 13.6709 7.79275 14 8.75 14C9.70726 14 10.6349 13.6709 11.375 13.0688C12.1151 13.6709 13.0427 14 14 14C14.9573 14 15.8849 13.6709 16.625 13.0688C17.3651 13.6709 18.2927 14 19.25 14C20.2073 14 21.1349 13.6709 21.875 13.0688C22.7011 13.7415 23.7581 14.0704 24.8236 13.9862C25.8892 13.9021 26.8804 13.4115 27.5887 12.6175C27.8528 12.3065 27.9983 11.9134 28 11.5068V8.82533C28.0011 8.55434 27.9381 8.28687 27.8162 8.04433ZM11.375 9.02492V10.344L10.6575 11.2812C10.4372 11.5789 10.1494 11.821 9.81724 11.9879C9.48508 12.1548 9.11797 12.2417 8.74563 12.2417C8.37329 12.2417 8.00618 12.1548 7.67403 11.9879C7.34187 11.821 7.05401 11.5789 6.83376 11.2812L6.12501 10.3092V9.02492L8.39126 1.73556H12.25L11.375 9.02492ZM21.875 10.3092L21.1662 11.2812C20.946 11.5789 20.6581 11.821 20.326 11.9879C19.9938 12.1548 19.6267 12.2417 19.2544 12.2417C18.882 12.2417 18.5149 12.1548 18.1828 11.9879C17.8506 11.821 17.5628 11.5789 17.3425 11.2812L16.625 10.3092V9.02492L15.75 1.73556H19.6437L21.875 9.02492V10.3092Z" />
                    </svg>
                  </span>
                  <span style={{
                      opacity: isOpen ? 1 : 0
                    }}>Mi Tienda</span>
                </NavLink>
              </li>
              
              <li>
                <NavLink 
                  to={ '/admin/my-acount' }
                  className={({ isActive, isPending }) => {
                    return isActive ? `${ s.active}` : isPending ? "pending" : "";
                  }}
                  >
                  <span className={`${ s.icon }`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_555_1208" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <path d="M12 9.77778C12.5107 9.77778 13.0164 9.67719 13.4882 9.48175C13.96 9.28632 14.3887 8.99987 14.7499 8.63875C15.111 8.27763 15.3974 7.84892 15.5929 7.3771C15.7883 6.90528 15.8889 6.39959 15.8889 5.88889C15.8889 5.37819 15.7883 4.8725 15.5929 4.40068C15.3974 3.92885 15.111 3.50015 14.7499 3.13903C14.3887 2.77791 13.96 2.49146 13.4882 2.29602C13.0164 2.10059 12.5107 2 12 2C10.9686 2 9.97945 2.40972 9.25014 3.13903C8.52083 3.86834 8.11111 4.85749 8.11111 5.88889C8.11111 6.92029 8.52083 7.90944 9.25014 8.63875C9.97945 9.36806 10.9686 9.77778 12 9.77778ZM2 21.3333V22H22V21.3333C22 18.8444 22 17.6 21.5156 16.6489C21.0895 15.8127 20.4096 15.1328 19.5733 14.7067C18.6222 14.2222 17.3778 14.2222 14.8889 14.2222H9.11111C6.62222 14.2222 5.37778 14.2222 4.42667 14.7067C3.59043 15.1328 2.91054 15.8127 2.48444 16.6489C2 17.6 2 18.8444 2 21.3333Z" fill="white" stroke="white" strokeWidth="2.22222" strokeLinecap="round" strokeLinejoin="round"/>
                      </mask>
                      <g mask="url(#mask0_555_1208)">
                       <path d="M-1.33398 -1.33325H25.3327V25.3334H-1.33398V-1.33325Z" />
                      </g>
                    </svg>
                  </span>
                  <span style={{
                      opacity: isOpen ? 1 : 0
                    }}>Mi Cuenta</span>
                </NavLink>
              </li>
{/* 
              {
                menuList.map( (item, i) => (
                  <li key={i}>
                    <NavLink 
                      to={ item.url }
                      className={({ isActive, isPending }) => {
                        return isActive ? `${ s.active}` : isPending ? "pending" : "";
                      }}
                      >
                      <span className={`${ s.icon }`}><img src={ `/src/assets/svg/${item.icon}.svg` } alt="icon" /></span>
                      <span style={{
                          opacity: isOpen ? 1 : 0
                        }}>{ item.name }</span>
                    </NavLink>
                  </li>
                ))
              } */}
              
            </ul>
          </div>
        )  
        : null  
      }
    </>
  )
}
