import { Icons } from "@/components/icons"
import useLayoutStore from "@/app/store/zustand/layout"

type Props = {}

const NavBar = (props: Props) => {
  const { collapseToggle } = useLayoutStore((state: any) => state)
  return (
    <>
      <div>
        <span onClick={collapseToggle}>
          <Icons.menubar className="cursor-pointer" />
        </span>
      </div>
      <div className="flex gap-8">
        <span>
          <Icons.search />
        </span>
        <span>
          <Icons.mail />
        </span>
        <span>
          <Icons.bell />
        </span>
      </div>
    </>
  )
}

export default NavBar
