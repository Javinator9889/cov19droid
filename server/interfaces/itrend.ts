// export interface ITrend {
//   country: Record<string, Record<string, CountryData>>
// }

export interface CountryData {
  recovered: number | null
  confirmed: number | null
  deaths: number | null
}
