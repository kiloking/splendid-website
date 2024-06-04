import Footer from "@/components/shared/Footer"
const layout = ({children}: { children:React.ReactNode}) => {
  return (
    <main className='root w-full '>
      
      {children}
      
      <Footer />


    </main>
  )
}

export default layout