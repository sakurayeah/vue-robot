const Mock = require('mockjs');
var Random = Mock.Random;

const {
  parse
} = require('url');


// 首页初始化接口
const homeInit = {
  'succese': true,
  cardsList: [
    {
      uiTplType: 'TOOLS',
      servCardId: 'CARD_HELPTOOLS',
    },
    {
      uiTplType: 'RECOMMEND',
      servCardId: 'CARD1480660608887',
    },
    {
      uiTplType: "CONJECTURE",
      servCardId: "CARD_CONJECTURE",
    },
    {
      uiTplType: 'MERCHANT',
      cardContent: {
        icon: 'https://zos.alipayobjects.com/rmsportal/jPkfrozCmlbUwGYhXAltSrVTfREZDeJZ.png',
        title: '遇到以下问题请联系商家解决',
        content: '退货  退款  取消订单  未收到货物',
        btMessage: '联系商家',
        link: 'https://www.baidu.com',
        nodeName: '1155665',
        nodeId: 'nodeId',
        mediaId: 'mediaId',
        buTag: 'buTag'
      },
      servCardId: 'CARD_MERCHANT',
    },
    {
      cardContent: {
        title: "进度中心",
        desTitle: "查看更多",
        link: "http://www.baidu.com"
      },
      uiTplType: "PROGRESS",
      servCardId: "CARD_PROGRESS",
    },
    {
      uiTplType: "NEWMERCHANT",
      servCardId: "CARD_NEWMERCHANT",
    },
    {
      uiTplType: "ENCYCLOPEDIA",
      cardContent: {
        title: "泡泡百科",
        desTitle: "查问题点泡泡"
      },
      servCardId: "CARD1480660608887",
    },
    {
      uiTplType: 'MULTRECOMMEND',
      cardContent: {
        gzMessage: "换一换111",
        btMessage: "二四级"
      },
      servCardId: 'CARD1481114793545',
    },
    {
      uiTplType: 'CAROUSEL',
      servCardId: 'CARD1480660608887',
    },
    {
      uiTplType: 'ACTIVITYPLATE',
      cardContent: {
        "titleMessage": '活动模版'
      },
      servCardId: 'CARD1481114793545',
    },
    {
      uiTplType: 'DAILYNEWS',
      cardContent: {
        numShow: '4',
      },
      servCardId: 'CARD1480660608887',
    },
    {
      uiTplType: 'ACTIVITYRIGHT',
      cardContent: {
        title: '活动权益',
        moreText: '查看更多',
        moreLink: 'http://www.baidu.com',
        list: [
          {
            listTitle: '多宝多收，循序渐进',
            subTitle: '要有意识的投资哦，',
            link: 'http://www.baidu.com',
            icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
            // "linkTitle": "查看更多",
            mediaId: 'mediaId1'
          },
          {
            listTitle: '多宝多收，循序渐进',
            subTitle: '要有意识的投资哦，',
            link: 'http://www.baidu.com',
            linkTitle: '查看更多',
            icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
            mediaId: 'mediaId2'
          },
        ],
      },
      servCardId: 'CARD1480498991447',
    },
    {
      uiTplType: 'STRATEGY',
      cardContent: {
        title: '商家攻略',
        list: [
          {
            icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
            link: 'http://www.baidu.com',
            listTitle: '收入账单',
            subTitle: '一目了然查看',
            mediaId: 'mediaId1'
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
            link: 'http://www.baidu.com',
            listTitle: '收入账单',
            subTitle: '一目了然查看',
            mediaId: 'mediaId2'
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
            link: 'http://www.baidu.com',
            listTitle: '收入账单',
            subTitle: '一目了然查看',
            mediaId: 'mediaId3'
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
            link: 'http://www.baidu.com',
            listTitle: '收入账单',
            subTitle: '一目了然查看',
            mediaId: 'mediaId4'
          }, {
            icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
            link: 'http://www.baidu.com',
            listTitle: '收入账单',
            subTitle: '一目了然查看',
            mediaId: 'mediaId5'
          },
        ],
      },
      servCardId: 'CARD_STRATEGY',
    },
    {
      uiTplType: 'SELECTINFO',
      cardContent: {
        "titleMessage": "咨询及教育",
        list: [
          {
            mediaId: 'title-mediaId',
            title: '理财学堂1',
            question: [{
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财学堂里面的问题哦，你看看是什么问题呢？',
              subTitle: '11支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }, {
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财学堂里面的问题哦，你看看是什么问题呢？',
              subTitle: '12支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }],
          }, {
            mediaId: 'title-mediaId',
            title: '理财小故事2',
            question: [{
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财小故事里面的问题哦，你看看是什么问题呢？',
              subTitle: '21支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }, {
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财小故事的问题哦，你看看是什么问题呢？',
              subTitle: '22支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }],
          }, {
            mediaId: 'title-mediaId',
            title: '理财小故事3',
            question: [{
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财小故事里面的问题哦，你看看是什么问题呢？',
              subTitle: '31支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }, {
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财小故事的问题哦，你看看是什么问题呢？',
              subTitle: '32支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }],
          }, {
            mediaId: 'title-mediaId',
            title: '理财小故事4',
            question: [{
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财小故事里面的问题哦，你看看是什么问题呢？',
              subTitle: '41支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }, {
              icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
              link: 'http://www.baidu.com',
              listTitle: '我是理财小故事的问题哦，你看看是什么问题呢？',
              subTitle: '42支招小窍门',
              mediaId: 'content-mediaId',
              buTag: '2131',
            }],
          }],
      },
      servCardId: 'CARD_SELECTINFO',
    },
    {
      uiTplType: 'NEWBANNER',
      cardContent: {
        list: [{
          img: 'https://zos.alipayobjects.com/rmsportal/YBdjqxBuGkbgNqwoutxr.jpg',
          link: 'http://www.baidu.com',
          mediaId: 'mediaId1',
          buTag: '2131',
        }, {
          img: 'https://zos.alipayobjects.com/rmsportal/DTIrBvtiyjonvAthQoqoTANCORAzDnpI.jpg',
          link: 'http://www.taobao.com',
          mediaId: 'mediaId1',
          buTag: '2131',
        }, {
          img: 'https://zos.alipayobjects.com/rmsportal/DTIrBvtiyjonvAthQoqoTANCORAzDnpI.jpg',
          link: 'http://www.baidu.com',
          mediaId: 'mediaId1',
          buTag: '2131',
        }],
      },
      servCardId: 'CARD1480660608887',
    },
  ],
  homeView: {
    "userName": Random.first(),
    "banner": Random.image('1000x130', '#ADD8E6', '#FFF', 'banner'),
    "avatar": Random.image('100x100', '#7B68EE', '#FFF', 'avatar'),
    "topBgLink": "https://gw.alipayobjects.com/zos/rmsportal/PCMfMnDxuRIiRjDMSDHL.png",
    "indexttips": "但发生的",
    "indexgreetings": "Hi，null",
    "viewcolor": "#108ee9",
    "welcomenightnotice": "晚上好,&lt;br&gt;0-8点是自助服务时间",
    "indextopnotice": "但发生的饭",
    "pagetitle": "你猜",
    "indextoplink": "房东夫妇",
    "robotportrait": "http://imgbbs.heiguang.net/forum/201406/28/102652gu4x3nfz4r3s4rm4.jpg",
    "announcement": "公告文本是什么鬼",
    "appointmentlink": "https://www.baidu.com/",
    "guideclivetext": "test1112222亲，可在下方输入框联系人工哦！",
    "connclivetext": "正在为您匹配人工服务1",
    "connCliveText": "正在为您匹配人工服务1",
    "specialcard": "CARD1540198541384",
    "cliverphoto": "https://zos.alipayobjects.com/rmsportal/zVBCcOVAtHFuRJJ.png",
    "userdefaultphoto": "https://tfsimg.alipay.com/images/partner/T1bKRtXoFaXXXXXXXX",
    "phonextopimg": "https://gw.alipayobjects.com/zos/rmsportal/bHLsANPaCqonOSrWXLRF.jpeg",
    "serviceHotline": {
      "serviceText": "热线服务",
      "btnLink": "https://www.baidu.com/"
    },
    "serviceOnline": {
      "serviceText": "在线服务",
      "btnLink": "https://map.baidu.com/"
    },
    "servdesctext": "人生若只如初见",
    "adsFloatData": {
      "imgUrl": "https://zos.alipayobjects.com/rmsportal/hRVWnLRteaTBAew.jpg",
      "link": "https://www.baidu.com/"
    },
    "searchKnowData": true,
  }
}


// 聊天页问答接口
const chatPort = (opts) => {
  const { body } = opts;

  let answer = {
    content: Random.sentence(),
  }

  switch (body) {
    case '1':
      answer = {
        content: Random.sentence(),
        'btns|1-5': [
          Random.word(3, 8)
        ],
      }
      break;
    case '2':
      answer = {
        content: Random.sentence(),
        'recommends|1-3': [
          Random.sentence(1, 3)
        ],
      }
      break;
    case '3':
      answer = {
        content: Random.sentence(3, 5),
        'goods|1-8': [
          {
            title: Random.word(3, 8),
            icon: Random.image('100x100', '#ADD8E6'),
            link: 'http://www.baidu.com',
          }
        ],
      }
      break;
    case '4':
      answer = {
        content: Random.sentence(3, 5),
        'bills|1-3': [
          {
            title: Random.sentence(1, 3),
            icon: Random.image('100x100', '#ADD8E6'),
            date: `${Random.date('yyyy-MM-dd')} ${Random.time()}`,
            'cost|1-1000.2': 1,
            link: 'http://www.baidu.com'
          }
        ],
      }
      break;
    default:
      break;
  }

  return Mock.mock({
    'succese': true,
    ...answer,
  })
}

// 聊天页初始化
const chatInit = {
  chartView: {
    welcome: Random.sentence(3, 6),
  },
  succese: true,
}


// recommend
const recommend = {
  "pageSize": 6,
  'list|3-15': [
    {
      'id|+1': 1,
      'title': '@title(2, 4)',
      'link': 'http://www.baidu.com',
    }
  ],
  headline: 'recommend',
  'succese': true,
}

// tools
const toos = {
  succese: true,
  headline: "tools",
  'list|6-10': [
    {
      'id|+1': 1,
      'title': '@word(3, 5)',
      'link': 'http://www.baidu.com',
      'icon': Random.image('100x100', '#14b9c7'),
    }
  ]
}
const strategy = {
  title: '商家攻略',
  list: [{
    listTitle: '省钱小攻略',
    question: [
      {
        icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
        link: 'http://www.baidu.com',
        listTitle: '省钱账单查看',
        subTitle: '一目了然查看',
        mediaId: 'mediaId1'
      }, {
        icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
        link: 'http://www.baidu.com',
        listTitle: '省钱小技巧',
        subTitle: '一目了然查看',
        mediaId: 'mediaId1'
      }, {
        icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
        link: 'http://www.baidu.com',
        listTitle: '省钱的一些方法',
        subTitle: '一目了然查看',
        mediaId: 'mediaId1'
      },
    ]
  },
  {
    listTitle: '积分小攻略',
    question: [
      {
        icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
        link: 'http://www.baidu.com',
        listTitle: '积分怎么增加',
        subTitle: '一目了然查看',
        mediaId: 'mediaId1'
      }, {
        icon: 'https://os.alipayobjects.com/rmsportal/UFNomcPpCDZonFm.jpg',
        link: 'http://www.baidu.com',
        listTitle: '积分值的了解',
        subTitle: '一目了然查看',
        mediaId: 'mediaId1'
      },
    ]
  }
  ],
}

// Mock.setup({
//   timeout: '100-500'
// })

// 首页初始化接口
Mock.mock('homeInit.json', 'get', homeInit)
// 卡片：recommend
Mock.mock('recommend.json', 'get', recommend)
// 卡片：tools
Mock.mock('tools.json', 'get', toos)
// 聊天页初始化
Mock.mock('chatInit.json', 'get', chatInit);
// 聊天页问答接口
Mock.mock('chat.json', 'get', chatPort)
// 攻略卡片
Mock.mock('strategy.json', 'get', strategy)