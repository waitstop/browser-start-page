import axios from 'axios'

export default async function getWeather(
  city: string = 'Moscow',
  lang: string = 'ru'
): Promise<{
  current: {
    temp_c: number
    condition: {
      text: string
      icon: string
    }
    wind_kph: number
  }
}> {
  const response = await axios.get('https://api.weatherapi.com/v1/current.json', {
    params: {
      q: city,
      lang,
      key: import.meta.env.VITE_WEATHER_API_KEY || localStorage.getItem('WEATHER_API_KEY')
    }
  })
  return response.data
}
