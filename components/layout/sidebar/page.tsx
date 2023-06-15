import Image from "next/image"
import Link from "next/link"

import { Icons } from "@/components/icons"
import useLayoutStore from "@/app/store/zustand/layout"

type Props = {}

const SideBar = (props: Props) => {
  const { collapse } = useLayoutStore((state: any) => state)
  const menuList = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <Icons.dashboard />,
      color: "#FF7878",
    },
    {
      name: "HRM",
      path: "/admin/dashboard",
      icon: <Icons.hrm />,
      color: "#00C1C1",
    },

    {
      name: "Job Processing",
      path: "/admin/dashboard",
      icon: <Icons.briefcase />,
      color: "#BC74F4",
    },

    {
      name: "Central Store",
      path: "/admin/dashboard",
      icon: <Icons.archive />,
      color: "#6096FF",
    },

    {
      name: "Work Shop",
      path: "/admin/dashboard",
      icon: <Icons.workshop />,
      color: "#36A83C",
    },
    {
      name: "Ship / Establishment",
      path: "/admin/dashboard",
      icon: <Icons.ship />,
      color: "#F574B2",
    },
    {
      name: "Outer Agency",
      path: "/admin/dashboard",
      icon: <Icons.building />,
      color: "#FCAF11",
    },
    {
      name: "Costing",
      path: "/admin/dashboard",
      icon: <Icons.bdCurrency />,
      color: "#C54522",
    },
    {
      name: "Basic Parameters",
      path: "/admin/dashboard",
      icon: <Icons.basicParameter />,
      color: "#7886FF",
    },
    {
      name: "Users Management",
      path: "/admin/dashboard",
      icon: <Icons.userManagement />,
      color: "#48B2F2",
    },
    {
      name: "Docs",
      path: "/admin/dashboard",
      icon: <Icons.docs />,
      color: "#19C29A",
    },
  ]
  return (
    <>
      <div className="flex h-[80px] items-center justify-center border-b">
        <Image
          src={
            collapse ? "/assets/images/logo.png" : "/assets/images/logo2.png"
          }
          alt=""
          width={collapse ? "220" : "50"}
          height="70"
        />
      </div>
      <div className="mt-6">
        <ul className="space-y-4">
          {menuList.map((item, index) => (
            <li
              key={index}
              className="mx-2 flex py-2 items-center rounded px-2 hover:bg-indigo-500"
            >
              <Link href={item.path} className="">
                <div className="flex items-center space-x-6 ">
                  <span
                    className={`flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[${item.color}] `}
                  >
                    <Icons.dashboard className="text-white" />
                  </span>
                  <span>{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default SideBar
