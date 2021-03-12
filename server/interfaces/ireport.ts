export interface IReport {
  last_updated: Date
  regions: Record<string, ReportData>
}

interface ReportData {
  name: string
  totals: TotalsData
  list: Array<CountryData>
}

interface TotalsData {
  confirmed: number
  recovered: number
  deaths: number
  critical: number
  tests: number
  population: number
  vaccinated: number
}

interface CountryData {
  country: string
  confirmed: number
  deaths: number
  recovered: number
  incident_rate: number
  fatality_ratio: number
  country_code: string
  daily_confirmed: number
  daily_deaths: number
  critical: number
  tests: number
  population: number
  vaccinated: number
}
