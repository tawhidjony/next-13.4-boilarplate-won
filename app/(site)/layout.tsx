import { SiteHeader } from "@/components/site-header"

type Props = {
  children: React.ReactNode
}

const FrontLayout = ({ children }: Props) => {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  )
}

export default FrontLayout
