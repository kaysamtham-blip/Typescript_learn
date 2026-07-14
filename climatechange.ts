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

const c1: CityReport {
  city: "Kulim", aqi: 110, quality: "Moderate", alert: AlertLevel.Yellow, isUnderWarning: false
}
const c2: CityReport {
  city: "Sabah", aqi: 26, quality: "Good", alert: AlertLevel.Green, isUnderWarning: false
}
const c3: CityReport {
  city: "KL", aqi: 301, quality: "Unhealthy", alert: AlertLevel.Orange, isUnderWarning:true, affectedArea: "PetalingJaya"
}

const getquality(data: CityReport): CityReport => {
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

function cityAlert(obj: CityReport): void {
  console.log("City: " + obj.city + " | AQI: " + obj.aqi + " | Quality: " + obj.quality + " | Alert: "+ obj.AlertLevel)
  if(obj.isUnderWarning === true) {
    console.warn("Aware to your mother Earth!")
  }
  if(obj.quality === "Hazardous") {
    console.error("You have hurt our Mother Nature!")
  }
}

const first<T>()

8. first<T> and isEmpty<T> (generic arrow functions)

	•	first<T> — returns first item of any array
	•	isEmpty<T> — returns true if array is empty
	•	Call both with your city reports array
