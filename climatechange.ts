let AirQUality: "Good" | "Moderate" | "Unhealthy" | "Hazardous"

enum AlertLevel {Green, Yellow, Orange, Red}

interface CityReport {
  city: string;
  aqi: number;
  quality: AirQuality;
  alert: AlertLevel;
  isUnderWarning: boolean;
  affectedArea?: string;
}

const getquality(data: number): string => {
  if(number.aqi > 200) {
    return "Hazardous"
  }
  else if(number.aqi > 100) {
    return "Unhealthy"
  }
  else if(number.aqi > 50) {
    return "Moderate"
  }
  else {
    return "Good"
  }
}

function getAlertLevel(quality: AirQuality): AlertLevel {
  if(quality === "Good") {
    return AlertLevel.Green
  }
  else if(quality === "Moderate") {
    return AlertLevel.Yellow
  }
  else if(quality == "Unhealthy") {
    return AlerLevel.Orange
  }
  else {
    return AlertLevel.Red
  }
}

const c1: CityReport {
  city: "Kulim", aqi: 110, quality: getQuality(110), alert: getAlertLevel(getQuality(110)), isUnderWarning: false
}
const c2: CityReport {
  city: "Sabah", aqi: 26, quality: getQuality(26), alert: getAlertLevel(getQuality(26)), isUnderWarning: false
}
const c3: CityReport {
  city: "KL", aqi: 301, quality: getQuality(301), alert: getAlertLevel(getQuality(301)), isUnderWarning:true, affectedArea: "PetalingJaya"
}

function cityAlert(obj: CityReport): void {
  console.log("City: " + obj.city + " | AQI: " + obj.aqi + " | Quality: " + obj.quality + " | Alert: "+ obj.AlertLevel)
  if(obj.isUnderWarning === true) {
    console.warn("Aware to your mother Earth!")
  }
  if(obj.quality === "Hazardous") {
    console.error("You have hurt our Mother Nature!")
  }
}

const isArray: CityReport[] = CityReport[c1 ,c2, c3]

const first = <T>(input: T[]): T => {
	return input[0]
}

const isEmpty = <T>(input: T[]): boolean => {
	if(input === undefined) {
		return true
	}
}

console.log(first(isArray).city)
console.log(isEmpty(isArray))
console.log(isEmpty([]))
