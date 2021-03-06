import React, { useState, useEffect } from 'react';
import Chart from './Chart';
import Comment from './Comment';

export default function Main() {

  const [weatherDates, setWeatherDates] = useState([])

  useEffect(() => {
    loadData();
  }, [])

  const loadData = async () => {
    const response = await fetch(process.env.REACT_APP_BACKEND_API_ENDPOINT);
    const data = await response.json();
    setWeatherDates(data);
  }

  return (
    <main className="main">
      <Chart
        data={weatherDates}
      />
      <Comment
        heading="About 40 Years Of Weather"
        text="Plain and simple: Today's temperature in the city of Hamburg, Germany at this hour, over the course of the last forty years."
      />
      <Comment
        heading="How is it done?"
        text="Not quite as plain and simple. I took the forty years of data from the Open Weather Map API but only as a bulk data download that was done once. That data was migrated into a MongoDB Atlas collection. To keep the data updated a Github Actions script runs hourly and saves the current temperature to the database using said Open Weather Map API. A MongoDB Webhook serves as an API to pass the 40 Years of Data to the backend of this React Web Application. The visualization is done with the help of d3."
      />
      <Comment
        heading="A comment on climate change"
        text="Weather is immediate and kind of chaotic, but climate change and global warming are very much a real thing. At times the temperature over the course of 40 years might not have changed a lot and that does not debunk what scientists have been saying for decades. There is a scientific consensus among numerous experts about global warming and its human cause. Drastic measures are necessary, this little website does not change that."
      />
    </main>
  )
}
