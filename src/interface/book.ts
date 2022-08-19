export interface IBook {
  id: number
  merchName: string
  author: string
  merchType: string
  merchTypeName: string
  price: number
  discountAmount: number
  orderAmount: number
  isRecommend: boolean
  sequence: number
  imageList: []
}
