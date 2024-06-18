"use client"
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { frontNavLinks } from '@/constants'
import { usePathname } from 'next/navigation';
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const pathname = usePathname();
  const worksPattern = /^\/works\/w\d+$/;
  const type = (pathname === '/' || worksPattern.test(pathname)) ? 'home' : 'page';
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    const waitForCssLoad = setTimeout(() => {
      setIsMobile(window.innerWidth < 768);
    }, 100); // 100ms 等待时间

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(waitForCssLoad);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      {isMobile ? (
        <div className="relative z-20">
          <div className="flex justify-between items-center p-4  text-black">
            <Link href='/' className="text-xl font-bold">
              <Image src='/assets/images/logo.png' alt="logo" width={100} height={24} priority={false} />
            </Link>
            <div onClick={toggleMenu} className="focus:outline-none">
              <FaBars />
            </div>
          </div>
          {menuOpen && (
            <div className="absolute top-0 left-0 w-full bg-white text-black p-4 text-2xl">
              <div onClick={toggleMenu} className=" p-4 absolute top-0 right-0">
                <FaBars />
              </div>
              <ul className='mt-3 space-y-2'>
                {frontNavLinks.map((item, index) => (
                  <li key={`mobile-nav-${index}`} className="py-2">
                    <Link href={item.route} className="block" onClick={toggleMenu}>
                      {item.label}
                    </Link>
                    {item.sub && (
                      <ul className="pl-4 mt-3 space-y-2">
                        {item.sub.map((subitem, subindex) => (
                          <li key={`mobile-subnav-${subindex}`} className="py-1">
                            <Link href={subitem.route} className="block" onClick={toggleMenu}>
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ):(
        <div className="z-20 absolute top-0  bg-black/0 w-full flex items-center px-10 pt-8 pb-6 space-x-10 group/navbarC">
          {type==="home" && <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b via-black/30 from-black/50 transition-all opacity-0 group-hover/navbarC:opacity-100 -z-10 pointer-events-none"></div>}
          <Link href='/' className="w-[10%]">
            {
              type==='home'? 
              <Image src='/assets/images/logo_w.png' alt="image" width={200} height={24} priority={false}/>
              :
              <Image src='/assets/images/logo.png' alt="image" width={200} height={24} priority={false}/>
            }
          </Link>

          <ul className={`flex flex-center w-full space-x-10 ${type==="home" ? 'text-white ' : ' text-black '} `}>
            {frontNavLinks.map((item,index)=>{
              return(
                <li key={`navtitle`+index} className={`group relative dropdown ${type==="home" ? 'text-white/80 ' : ' text-[#494949] '}`}>
                  <a href={item.route} className={`${type==="home" ? 'hover:text-white ' : ' hover:text-black '} `}>{item.label}</a>
                  {item.sub &&
                    <div className="group-hover:block dropdown-menu absolute hidden h-auto left-1/2 -translate-x-1/2  ">

                      <ul className="top-0 bg-black/70 shadow px-6 py-6 w-auto  ">
                          {item.sub.map((subitem,index)=>{
                            return(
                              <li key={`navsub`+index} className="py-1">
                                <Link href={subitem.route} className="block text-white/80 font-bold break-keep  hover:text-white cursor-pointer">
                                  {subitem.label}
                                </Link>
                              </li>
                            )
                          })}
                      </ul>
                    </div>
                  }
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </>

  )
}

export default Navbar