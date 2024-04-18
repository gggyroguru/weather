import { useEffect, useState } from 'react'
import axios from 'axios'

const Weather = () => {

  const [city, setCity] = useState([]);
  const [search, setSearch] = useState('New Delhi');
  const [searching, setSearching] = useState(true);



  const APIKEY = '1507669e25f91bdcb8f679acc1be021b'
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${APIKEY}`

  const fetchAPI = async () => {
    if (search.length > 0) {
    try {
      setSearching(true)
      const res = await axios.get(API)
      setCity(res.data)
      setSearching(false)
    
    } catch (error) {
      
    } finally {
      setSearching(false)
    }
    }
  }

  const captlize = () => {
    return search.charAt(0).toUpperCase() + search.slice(1);
  }

  useEffect(() => {
    fetchAPI()
  },[search])

  return (
    <>
      <div className='w-80 h-80 p-6 rounded-xl bg-blue-950'>
        <div className='w-full m-auto relative'>
          <input className='w-full px-3 py-1 rounded-full outline-none text-neutral-900' value={search} onChange={(e) => setSearch(e.target.value)} />
          {
            search.length > 0 && <button className='absolute top-2.5 right-3.5' onClick={() => setSearch('')}><img className='w-3 h-3' src='https://cdn-icons-png.flaticon.com/512/2997/2997911.png'/></button>
          }
        </div>
        <div className='w-fit m-auto mt-6 text-white'>
          {
            search.length > 0 ?
            captlize() === city?.name ? 
            <>
              <div>
                <div className='text-center capitalize text-5xl'>{search}</div>
                <div className='mt-5 text-center text-5xl'>{city?.main?.temp}°C</div>
                <div className='mt-10 flex justify-center items-center gap-1.5 flex-wrap'>
                  <div className=''>Current: {city?.weather[0].main}</div>
                  <div>|</div>
                  <div className=''>Humidity: {city?.main?.humidity} %</div> 
                  
                  <div className=''>Pressure: {city?.main?.pressure} mb</div>
                  <div>|</div>
                  <div className=''>Wind: {city?.wind?.speed} m/s</div>
                </div>
              </div>
            </> :
            <>
              <div className='capitalize w-full h-48 flex items-center justify-center'>
                {
                  searching ? 'searching...' : 'no data found'
                }   
              </div>
            </>
            : 
            <>
              <div className='w-full h-48 flex items-center justify-center'>
                <a className='underline' target='_black' href='https://api.openweathermap.org'>api.openweathermap.org</a>
              </div>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default Weather