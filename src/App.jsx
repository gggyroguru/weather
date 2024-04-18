import './App.css'
import Weather from './components/Weather'

const App = () => {
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center bg-sky-100 fixed top-0'>
        <div className='text-white fixed -top-6 ' ><img className='w-80'  src='https://www.brandbucket.com/sites/default/files/logo_uploads/541624/large_earlystorm_0.png' /></div>
        <Weather />
      </div>
    </>
  )
}

export default App
