import type { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/web/api/book/getBookList',
    method: 'post',
    timeout: 1000,
    response: ({ body }) => {
      return {
        code: 0,
        msg: 'success',
        data: {
          currentPage: body.currentPage,
          numPerPage: body.numPerPage,
          totalCount: 100,
          recordList: [
            {
              id: 16,
              merchName: '苏特里' + Date.now(),
              author: '[美] 科马克·麦卡锡',
              merchType: 'vr_teaching_aids',
              merchTypeName: '教辅',
              price: 93,
              discountAmount: 63,
              orderAmount: 30,
              isRecommend: true,
              sequence: 1,
              imageList: []
            },
            {
              id: 14,
              merchName: '考试脑科学·1',
              author: '[日]池谷裕二 / 图灵',
              merchType: 'vr_teaching_aids',
              merchTypeName: '教辅',
              price: 59.8,
              discountAmount: 10,
              orderAmount: 49.8,
              isRecommend: true,
              sequence: 2,
              imageList: []
            },
            {
              id: 18,
              merchName: '世界美如斯',
              author: '[捷克] 雅罗斯拉夫·赛弗尔特',
              merchType: 'vr_literature',
              merchTypeName: '文学',
              price: 88,
              discountAmount: 10,
              orderAmount: 78,
              isRecommend: true,
              sequence: 3,
              imageList: []
            },
            {
              id: 35,
              merchName: '奶酪与蛆虫',
              author: '[意]卡洛·金茨堡',
              merchType: 'vr_history_culture',
              merchTypeName: '历史文化',
              price: 75,
              discountAmount: 15,
              orderAmount: 60,
              isRecommend: true,
              sequence: 4,
              imageList: []
            },
            {
              id: 21,
              merchName: '我本芬芳',
              author: '杨本芬',
              merchType: 'vr_literature',
              merchTypeName: '文学',
              price: 59.8,
              discountAmount: 20,
              orderAmount: 39.8,
              isRecommend: true,
              sequence: 5,
              imageList: []
            },
            {
              id: 24,
              merchName: '生死疲劳',
              author: '莫言',
              merchType: 'vr_novel',
              merchTypeName: '小说',
              price: 79.9,
              discountAmount: 10,
              orderAmount: 69.9,
              isRecommend: true,
              sequence: 6,
              imageList: []
            },
            {
              id: 27,
              merchName: '第一人称单数',
              author: '[日]村上春树',
              merchType: 'vr_novel',
              merchTypeName: '小说',
              price: 56.8,
              discountAmount: 12,
              orderAmount: 44.8,
              isRecommend: true,
              sequence: 7,
              imageList: []
            },
            {
              id: 29,
              merchName: '华丽人生',
              author: '[日] 伊坂幸太郎',
              pasteImage: null,
              merchType: 'vr_novel',
              merchTypeName: '小说',
              price: 49,
              discountAmount: 10,
              orderAmount: 39,
              isRecommend: true,
              sequence: 8,
              imageList: []
            },
            {
              id: 31,
              merchName: '工作、消费主义和新穷人',
              author: '[英]齐格蒙特·鲍曼',
              merchType: 'vr_history_culture',
              merchTypeName: '历史文化',
              price: 45,
              discountAmount: 9,
              orderAmount: 36,
              isRecommend: true,
              sequence: 9,
              imageList: []
            },
            {
              id: 33,
              merchName: '祥瑞',
              author: '张向荣',
              merchType: 'vr_history_culture',
              merchTypeName: '历史文化',
              price: 79.8,
              discountAmount: 16,
              orderAmount: 63.8,
              isRecommend: true,
              sequence: 10,
              imageList: []
            }
          ]
        }
      }
    }
  }
] as MockMethod[]
