interface INews {
  total: number
  items: Array<NewsItem>
}

interface NewsItem {
  nid: number
  title: string
  description: string
  content: string
  author: string | undefined
  url: string
  urlToImage: string
  publishedAt: Date
  addedOn: Date
  siteName: string
  language: string
  countryCode: string
  status: number
}
