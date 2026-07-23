function fetchAirQuality(city: string): Promise<string> {
 return new Promise((resolve) => {
  setTimeout(()=> resolve("City: " + city + " | AQI: 120 | Quality: Unhealthy"),1000)
 })
}

function fetchCityStatus(city: string): Promise<string> {
 return new Promise((resolve, reject) => {
 if(city ===  "") {
  reject("Error: city name is empty!")}
 else {
  resolve("Status: Active | City: " + city)} 
 })
}

async function main(): Promise<void> {
 try {
  const quality = await fetchAirQuality("Alor Setar")
  const status = await fetchCityStatus("Alor Setar")
  console.log("Quality and status of Alor Setar is " + quality + " and " + status + ".")}
 catch {
  console.error(error)}
}

main()