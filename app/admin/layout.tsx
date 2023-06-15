"use client"

import NavBar from "@/components/layout/navbar/page"
import SideBar from "@/components/layout/sidebar/page"

import useLayoutStore from "../store/zustand/layout"

type Props = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  const { collapse, collapseToggle } = useLayoutStore((state: any) => state)
  return (
    <>
      <div
        className={`transition-body fixed hidden h-screen md:block ${
          collapse ? "md:w-[240px]" : "md:w-[80px]"
        }`}
      >
        <SideBar />
      </div>
      <div
        className={`transition-body fixed w-full ${
          collapse ? "md:left-[240px]" : "md:left-[80px]"
        } ${
          collapse
            ? "md:h-screen md:w-[calc(100%-240px)]"
            : "md:h-screen md:w-[calc(100%-80px)]"
        }`}
      >
        <nav className="flex h-[70px] w-full items-center justify-between pl-2 pr-8">
          <NavBar />
        </nav>
        <div className="h-[calc(100vh-70px)] bg-[#EBEFF3] shadow-inner md:rounded-tl-xl ">
          {children}
        </div>
      </div>
    </>
  )
}

export default AdminLayout
