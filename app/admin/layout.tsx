type Props = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div>
      <div>admin top nav</div>
      <div>admin side nav</div>
      {children}
    </div>
  )
}

export default AdminLayout
