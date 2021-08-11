import ReactWeather, { useOpenWeather } from 'react-open-weather'

export default function Weather({lat, lng, title}) {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '6fa81219c50bf4b0696f1255f2872a84',
    lat: lat,
    lon: lng,
    lang: 'ru',
    unit: 'metric', // values are (metric, standard, imperial)
  });

  console.log(data);
  return (
    <> 
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel={title}
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
    </>
    
  )
}
