
const category = [
  {
    label: '电力、热力、燃气及水生产和供应业',
    value: 'D',
    children: [
      {
        children: [
          {
            label: '燃气生产和供应业',
            value: '450'
          }
        ],
        value: '45',
        label: '燃气生产和供应业'
      },
      {
        children: [
          {
            label: '电力生产',
            value: '441'
          },
          {
            label: '电力供应',
            value: '442'
          },
          {
            label: '热力生产和供应',
            value: '443'
          }
        ],
        value: '44',
        label: '电力、热力生产和供应业'
      },
      {
        children: [
          {
            label: '自来水生产和供应',
            value: '461'
          },
          {
            label: '污水处理及其再生利用',
            value: '462'
          },
          {
            label: '其他水的处理、利用与分配',
            value: '469'
          }
        ],
        value: '46',
        label: '水的生产和供应业'
      }
    ]
  },
  {
    label: '建筑业',
    value: 'E',
    children: [
      {
        children: [
          {
            label: '电气安装',
            value: '491'
          },
          {
            label: '管道和设备安装',
            value: '492'
          },
          {
            label: '其他建筑安装业',
            value: '499'
          }
        ],
        value: '49',
        label: '建筑安装业'
      },
      {
        children: [
          {
            label: '铁路、道路、隧道和桥梁工程建筑',
            value: '481'
          },
          {
            label: '水利和内河港口工程建筑',
            value: '482'
          },
          {
            label: '海洋工程建筑',
            value: '483'
          },
          {
            label: '工矿工程建筑',
            value: '484'
          },
          {
            label: '架线和管道工程建筑',
            value: '485'
          },
          {
            label: '其他土木工程建筑',
            value: '489'
          }
        ],
        value: '48',
        label: '土木工程建筑业'
      },
      {
        children: [
          {
            label: '房屋建筑业',
            value: '470'
          }
        ],
        value: '47',
        label: '房屋建筑业'
      },
      {
        children: [
          {
            label: '建筑装饰业',
            value: '501'
          },
          {
            label: '工程准备活动',
            value: '502'
          },
          {
            label: '提供施工设备服务',
            value: '503'
          },
          {
            label: '其他未列明建筑业',
            value: '509'
          }
        ],
        value: '50',
        label: '建筑装饰和其他建筑业'
      }
    ]
  },
  {
    label: '批发和零售业',
    value: 'F',
    children: [
      {
        children: [
          {
            label: '农、林、牧产品批发',
            value: '511'
          },
          {
            label: '食品、饮料及烟草制品批发',
            value: '512'
          },
          {
            label: '纺织、服装及家庭用品批发',
            value: '513'
          },
          {
            label: '文化、体育用品及器材批发',
            value: '514'
          },
          {
            label: '医药及医疗器材批发',
            value: '515'
          },
          {
            label: '矿产品、建材及化工产品批发',
            value: '516'
          },
          {
            label: '机械设备、五金产品及电子产品批发',
            value: '517'
          },
          {
            label: '贸易经纪与代理',
            value: '518'
          },
          {
            label: '其他批发业',
            value: '519'
          }
        ],
        value: '51',
        label: '批发业'
      },
      {
        children: [
          {
            label: '综合零售',
            value: '521'
          },
          {
            label: '食品、饮料及烟草制品专门零售',
            value: '522'
          },
          {
            label: '纺织、服装及日用品专门零售',
            value: '523'
          },
          {
            label: '文化、体育用品及器材专门零售',
            value: '524'
          },
          {
            label: '医药及医疗器材专门零售',
            value: '525'
          },
          {
            label: '汽车、摩托车、燃料及零配件专门零售',
            value: '526'
          },
          {
            label: '家用电器及电子产品专门零售',
            value: '527'
          },
          {
            label: '五金、家具及室内装饰材料专门零售',
            value: '528'
          },
          {
            label: '货摊、无店铺及其他零售业',
            value: '529'
          }
        ],
        value: '52',
        label: '零售业'
      }
    ]
  },
  {
    label: '交通运输、仓储和邮政业',
    value: 'G',
    children: [
      {
        children: [
          {
            label: '谷物、棉花等农产品仓储',
            value: '591'
          },
          {
            label: '其他仓储业',
            value: '599'
          }
        ],
        value: '59',
        label: '仓储业'
      },
      {
        children: [
          {
            label: '装卸搬运',
            value: '581'
          },
          {
            label: '运输代理业',
            value: '582'
          }
        ],
        value: '58',
        label: '装卸搬运和运输代理业'
      },
      {
        children: [
          {
            label: '管道运输业',
            value: '570'
          }
        ],
        value: '57',
        label: '管道运输业'
      },
      {
        children: [
          {
            label: '航空客货运输',
            value: '561'
          },
          {
            label: '通用航空服务',
            value: '562'
          },
          {
            label: '航空运输辅助活动',
            value: '563'
          }
        ],
        value: '56',
        label: '航空运输业'
      },
      {
        children: [
          {
            label: '水上旅客运输',
            value: '551'
          },
          {
            label: '水上货物运输',
            value: '552'
          },
          {
            label: '水上运输辅助活动',
            value: '553'
          }
        ],
        value: '55',
        label: '水上运输业'
      },
      {
        children: [
          {
            label: '邮政基本服务',
            value: '601'
          },
          {
            label: '快递服务',
            value: '602'
          }
        ],
        value: '60',
        label: '邮政业'
      },
      {
        children: [
          {
            label: '铁路旅客运输',
            value: '531'
          },
          {
            label: '铁路货物运输',
            value: '532'
          },
          {
            label: '铁路运输辅助活动',
            value: '533'
          }
        ],
        value: '53',
        label: '铁路运输业'
      },
      {
        children: [
          {
            label: '城市公共交通运输',
            value: '541'
          },
          {
            label: '公路旅客运输',
            value: '542'
          },
          {
            label: '道路货物运输',
            value: '543'
          },
          {
            label: '道路运输辅助活动',
            value: '544'
          }
        ],
        value: '54',
        label: '道路运输业'
      }
    ]
  },
  {
    label: '农、林、牧、渔业',
    value: 'A',
    children: [
      {
        children: [
          {
            label: '水产养殖',
            value: '041'
          },
          {
            label: '水产捕捞',
            value: '042'
          }
        ],
        value: '04',
        label: '渔业'
      },
      {
        children: [
          {
            label: '农业服务业',
            value: '051'
          },
          {
            label: '林业服务业',
            value: '052'
          },
          {
            label: '畜牧服务业',
            value: '053'
          },
          {
            label: '渔业服务业',
            value: '054'
          }
        ],
        value: '05',
        label: '农、林、牧、渔服务业'
      },
      {
        children: [
          {
            label: '谷物种植',
            value: '011'
          },
          {
            label: '豆类、油料和薯类种植',
            value: '012'
          },
          {
            label: '棉、麻、糖、烟草种植',
            value: '013'
          },
          {
            label: '蔬菜、食用菌及园艺作物种植',
            value: '014'
          },
          {
            label: '水果种植',
            value: '015'
          },
          {
            label: '坚果、含油果、香料和饮料作物种植',
            value: '016'
          },
          {
            label: '中药材种植',
            value: '017'
          },
          {
            label: '其他农业',
            value: '019'
          }
        ],
        value: '01',
        label: '农业'
      },
      {
        children: [
          {
            label: '林木育种和育苗',
            value: '021'
          },
          {
            label: '造林和更新',
            value: '022'
          },
          {
            label: '森林经营和管护',
            value: '023'
          },
          {
            label: '木材和竹材采运',
            value: '024'
          },
          {
            label: '林产品采集',
            value: '025'
          }
        ],
        value: '02',
        label: '林业'
      },
      {
        children: [
          {
            label: '牲畜饲养',
            value: '031'
          },
          {
            label: '家禽饲养',
            value: '032'
          },
          {
            label: '狩猎和捕捉动物',
            value: '033'
          },
          {
            label: '其他畜牧业',
            value: '039'
          }
        ],
        value: '03',
        label: '畜牧业'
      }
    ]
  },
  {
    label: '采矿业',
    value: 'B',
    children: [
      {
        children: [
          {
            label: '煤炭开采和洗选辅助活动',
            value: '111'
          },
          {
            label: '石油和天然气开采辅助活动',
            value: '112'
          },
          {
            label: '其他开采辅助活动',
            value: '119'
          }
        ],
        value: '11',
        label: '开采辅助活动'
      },
      {
        children: [
          {
            label: '其他采矿业',
            value: '120'
          }
        ],
        value: '12',
        label: '其他采矿业'
      },
      {
        children: [
          {
            label: '铁矿采选',
            value: '081'
          },
          {
            label: '锰矿、铬矿采选',
            value: '082'
          },
          {
            label: '其他黑色金属矿采选',
            value: '089'
          }
        ],
        value: '08',
        label: '黑色金属矿采选业'
      },
      {
        children: [
          {
            label: '常用有色金属矿采选',
            value: '091'
          },
          {
            label: '贵金属矿采选',
            value: '092'
          },
          {
            label: '稀有稀土金属矿采选',
            value: '093'
          }
        ],
        value: '09',
        label: '有色金属矿采选业'
      },
      {
        children: [
          {
            label: '烟煤和无烟煤开采洗选',
            value: '061'
          },
          {
            label: '褐煤开采洗选',
            value: '062'
          },
          {
            label: '其他煤炭采选',
            value: '069'
          }
        ],
        value: '06',
        label: '煤炭开采和洗选业'
      },
      {
        children: [
          {
            label: '石油开采',
            value: '071'
          },
          {
            label: '天然气开采',
            value: '072'
          }
        ],
        value: '07',
        label: '石油和天然气开采业'
      },
      {
        children: [
          {
            label: '土砂石开采',
            value: '101'
          },
          {
            label: '化学矿开采',
            value: '102'
          },
          {
            label: '采盐',
            value: '103'
          },
          {
            label: '石棉及其他非金属矿采选',
            value: '109'
          }
        ],
        value: '10',
        label: '非金属矿采选业'
      }
    ]
  },
  {
    label: '制造业',
    value: 'C',
    children: [
      {
        children: [
          {
            label: '采矿、冶金、建筑专用设备制造',
            value: '351'
          },
          {
            label: '化工、木材、非金属加工专用设备制造',
            value: '352'
          },
          {
            label: '食品、饮料、烟草及饲料生产专用设备制造',
            value: '353'
          },
          {
            label: '印刷、制药、日化及日用品生产专用设备制造',
            value: '354'
          },
          {
            label: '纺织、服装和皮革加工专用设备制造',
            value: '355'
          },
          {
            label: '电子和电工机械专用设备制造',
            value: '356'
          },
          {
            label: '农、林、牧、渔专用机械制造',
            value: '357'
          },
          {
            label: '医疗仪器设备及器械制造',
            value: '358'
          },
          {
            label: '环保、社会公共服务及其他专用设备制造',
            value: '359'
          }
        ],
        value: '35',
        label: '专用设备制造业'
      },
      {
        children: [
          {
            label: '汽车整车制造',
            value: '361'
          },
          {
            label: '改装汽车制造',
            value: '362'
          },
          {
            label: '低速载货汽车制造',
            value: '363'
          },
          {
            label: '电车制造',
            value: '364'
          },
          {
            label: '汽车车身、挂车制造',
            value: '365'
          },
          {
            label: '汽车零部件及配件制造',
            value: '366'
          }
        ],
        value: '36',
        label: '汽车制造业'
      },
      {
        children: [
          {
            label: '结构性金属制品制造',
            value: '331'
          },
          {
            label: '金属工具制造',
            value: '332'
          },
          {
            label: '集装箱及金属包装容器制造',
            value: '333'
          },
          {
            label: '金属丝绳及其制品制造',
            value: '334'
          },
          {
            label: '建筑、安全用金属制品制造',
            value: '335'
          },
          {
            label: '金属表面处理及热处理加工',
            value: '336'
          },
          {
            label: '搪瓷制品制造',
            value: '337'
          },
          {
            label: '金属制日用品制造',
            value: '338'
          },
          {
            label: '其他金属制品制造',
            value: '339'
          }
        ],
        value: '33',
        label: '金属制品业'
      },
      {
        children: [
          {
            label: '锅炉及原动设备制造',
            value: '341'
          },
          {
            label: '金属加工机械制造',
            value: '342'
          },
          {
            label: '物料搬运设备制造',
            value: '343'
          },
          {
            label: '泵、阀门、压缩机及类似机械制造',
            value: '344'
          },
          {
            label: '轴承、齿轮和传动部件制造',
            value: '345'
          },
          {
            label: '烘炉、风机、衡器、包装等设备制造',
            value: '346'
          },
          {
            label: '文化、办公用机械制造',
            value: '347'
          },
          {
            label: '通用零部件制造',
            value: '348'
          },
          {
            label: '其他通用设备制造业',
            value: '349'
          }
        ],
        value: '34',
        label: '通用设备制造业'
      },
      {
        children: [
          {
            label: '计算机制造',
            value: '391'
          },
          {
            label: '通信设备制造',
            value: '392'
          },
          {
            label: '广播电视设备制造',
            value: '393'
          },
          {
            label: '雷达及配套设备制造',
            value: '394'
          },
          {
            label: '视听设备制造',
            value: '395'
          },
          {
            label: '电子器件制造',
            value: '396'
          },
          {
            label: '电子元件制造',
            value: '397'
          },
          {
            label: '其他电子设备制造',
            value: '399'
          }
        ],
        value: '39',
        label: '计算机、通信和其他电子设备制造业'
      },
      {
        children: [
          {
            label: '铁路运输设备制造',
            value: '371'
          },
          {
            label: '城市轨道交通设备制造',
            value: '372'
          },
          {
            label: '船舶及相关装置制造',
            value: '373'
          },
          {
            label: '航空、航天器及设备制造',
            value: '374'
          },
          {
            label: '摩托车制造',
            value: '375'
          },
          {
            label: '自行车制造',
            value: '376'
          },
          {
            label: '非公路休闲车及零配件制造',
            value: '377'
          },
          {
            label: '潜水救捞及其他未列明运输设备制造',
            value: '379'
          }
        ],
        value: '37',
        label: '铁路、船舶、航空航天和其他运输设备制造业'
      },
      {
        children: [
          {
            label: '电机制造',
            value: '381'
          },
          {
            label: '输配电及控制设备制造',
            value: '382'
          },
          {
            label: '电线、电缆、光缆及电工器材制造',
            value: '383'
          },
          {
            label: '电池制造',
            value: '384'
          },
          {
            label: '家用电力器具制造',
            value: '385'
          },
          {
            label: '非电力家用器具制造',
            value: '386'
          },
          {
            label: '照明器具制造',
            value: '387'
          },
          {
            label: '其他电气机械及器材制造',
            value: '389'
          }
        ],
        value: '38',
        label: '电气机械和器材制造业'
      },
      {
        children: [
          {
            label: '金属制品修理',
            value: '431'
          },
          {
            label: '通用设备修理',
            value: '432'
          },
          {
            label: '专用设备修理',
            value: '433'
          },
          {
            label: '铁路、船舶、航空航天等运输设备修理',
            value: '434'
          },
          {
            label: '电气设备修理',
            value: '435'
          },
          {
            label: '仪器仪表修理',
            value: '436'
          },
          {
            label: '其他机械和设备修理业',
            value: '439'
          }
        ],
        value: '43',
        label: '金属制品、机械和设备修理业'
      },
      {
        children: [
          {
            label: '金属废料和碎屑加工处理',
            value: '421'
          },
          {
            label: '非金属废料和碎屑加工处理',
            value: '422'
          }
        ],
        value: '42',
        label: '废弃资源综合利用业'
      },
      {
        children: [
          {
            label: '日用杂品制造',
            value: '411'
          },
          {
            label: '煤制品制造',
            value: '412'
          },
          {
            label: '核辐射加工',
            value: '413'
          },
          {
            label: '其他未列明制造业',
            value: '419'
          }
        ],
        value: '41',
        label: '其他制造业'
      },
      {
        children: [
          {
            label: '通用仪器仪表制造',
            value: '401'
          },
          {
            label: '专用仪器仪表制造',
            value: '402'
          },
          {
            label: '钟表与计时仪器制造',
            value: '403'
          },
          {
            label: '光学仪器及眼镜制造',
            value: '404'
          },
          {
            label: '其他仪器仪表制造业',
            value: '409'
          }
        ],
        value: '40',
        label: '仪器仪表制造业'
      },
      {
        children: [
          {
            label: '纸浆制造',
            value: '221'
          },
          {
            label: '造纸',
            value: '222'
          },
          {
            label: '纸制品制造',
            value: '223'
          }
        ],
        value: '22',
        label: '造纸和纸制品业'
      },
      {
        children: [
          {
            label: '印刷',
            value: '231'
          },
          {
            label: '装订及印刷相关服务',
            value: '232'
          },
          {
            label: '记录媒介复制',
            value: '233'
          }
        ],
        value: '23',
        label: '印刷和记录媒介复制业'
      },
      {
        children: [
          {
            label: '文教办公用品制造',
            value: '241'
          },
          {
            label: '乐器制造',
            value: '242'
          },
          {
            label: '工艺美术品制造',
            value: '243'
          },
          {
            label: '体育用品制造',
            value: '244'
          },
          {
            label: '玩具制造',
            value: '245'
          },
          {
            label: '游艺器材及娱乐用品制造',
            value: '246'
          }
        ],
        value: '24',
        label: '文教、工美、体育和娱乐用品制造业'
      },
      {
        children: [
          {
            label: '精炼石油产品制造',
            value: '251'
          },
          {
            label: '炼焦',
            value: '252'
          },
          {
            label: '核燃料加工',
            value: '253'
          }
        ],
        value: '25',
        label: '石油加工、炼焦和核燃料加工业'
      },
      {
        children: [
          {
            label: '基础化学原料制造',
            value: '261'
          },
          {
            label: '肥料制造',
            value: '262'
          },
          {
            label: '农药制造',
            value: '263'
          },
          {
            label: '涂料、油墨、颜料及类似产品制造',
            value: '264'
          },
          {
            label: '合成材料制造',
            value: '265'
          },
          {
            label: '专用化学产品制造',
            value: '266'
          },
          {
            label: '炸药、火工及焰火产品制造',
            value: '267'
          },
          {
            label: '日用化学产品制造',
            value: '268'
          }
        ],
        value: '26',
        label: '化学原料和化学制品制造业'
      },
      {
        children: [
          {
            label: '化学药品原料药制造',
            value: '271'
          },
          {
            label: '化学药品制剂制造',
            value: '272'
          },
          {
            label: '中药饮片加工',
            value: '273'
          },
          {
            label: '中成药生产',
            value: '274'
          },
          {
            label: '兽用药品制造',
            value: '275'
          },
          {
            label: '生物药品制造',
            value: '276'
          },
          {
            label: '卫生材料及医药用品制造',
            value: '277'
          }
        ],
        value: '27',
        label: '医药制造业'
      },
      {
        children: [
          {
            label: '纤维素纤维原料及纤维制造',
            value: '281'
          },
          {
            label: '合成纤维制造',
            value: '282'
          }
        ],
        value: '28',
        label: '化学纤维制造业'
      },
      {
        children: [
          {
            label: '橡胶制品业',
            value: '291'
          },
          {
            label: '塑料制品业',
            value: '292'
          }
        ],
        value: '29',
        label: '橡胶和塑料制品业'
      },
      {
        children: [
          {
            label: '水泥、石灰和石膏制造',
            value: '301'
          },
          {
            label: '石膏、水泥制品及类似制品制造',
            value: '302'
          },
          {
            label: '砖瓦、石材等建筑材料制造',
            value: '303'
          },
          {
            label: '玻璃制造',
            value: '304'
          },
          {
            label: '玻璃制品制造',
            value: '305'
          },
          {
            label: '玻璃纤维和玻璃纤维增强塑料制品制造',
            value: '306'
          },
          {
            label: '陶瓷制品制造',
            value: '307'
          },
          {
            label: '耐火材料制品制造',
            value: '308'
          },
          {
            label: '石墨及其他非金属矿物制品制造',
            value: '309'
          }
        ],
        value: '30',
        label: '非金属矿物制品业'
      },
      {
        children: [
          {
            label: '常用有色金属冶炼',
            value: '321'
          },
          {
            label: '贵金属冶炼',
            value: '322'
          },
          {
            label: '稀有稀土金属冶炼',
            value: '323'
          },
          {
            label: '有色金属合金制造',
            value: '324'
          },
          {
            label: '有色金属铸造',
            value: '325'
          },
          {
            label: '有色金属压延加工',
            value: '326'
          }
        ],
        value: '32',
        label: '有色金属冶炼和压延加工业'
      },
      {
        children: [
          {
            label: '炼铁',
            value: '311'
          },
          {
            label: '炼钢',
            value: '312'
          },
          {
            label: '黑色金属铸造',
            value: '313'
          },
          {
            label: '钢压延加工',
            value: '314'
          },
          {
            label: '铁合金冶炼',
            value: '315'
          }
        ],
        value: '31',
        label: '黑色金属冶炼和压延加工业'
      },
      {
        children: [
          {
            label: '皮革鞣制加工',
            value: '191'
          },
          {
            label: '皮革制品制造',
            value: '192'
          },
          {
            label: '毛皮鞣制及制品加工',
            value: '193'
          },
          {
            label: '羽毛(绒)加工及制品制造',
            value: '194'
          },
          {
            label: '制鞋业',
            value: '195'
          }
        ],
        value: '19',
        label: '皮革、毛皮、羽毛及其制品和制鞋业'
      },
      {
        children: [
          {
            label: '棉纺织及印染精加工',
            value: '171'
          },
          {
            label: '毛纺织及染整精加工',
            value: '172'
          },
          {
            label: '麻纺织及染整精加工',
            value: '173'
          },
          {
            label: '丝绢纺织及印染精加工',
            value: '174'
          },
          {
            label: '化纤织造及印染精加工',
            value: '175'
          },
          {
            label: '针织或钩针编织物及其制品制造',
            value: '176'
          },
          {
            label: '家用纺织制成品制造',
            value: '177'
          },
          {
            label: '非家用纺织制成品制造',
            value: '178'
          }
        ],
        value: '17',
        label: '纺织业'
      },
      {
        children: [
          {
            label: '机织服装制造',
            value: '181'
          },
          {
            label: '针织或钩针编织服装制造',
            value: '182'
          },
          {
            label: '服饰制造',
            value: '183'
          }
        ],
        value: '18',
        label: '纺织服装、服饰业'
      },
      {
        children: [
          {
            label: '酒的制造',
            value: '151'
          },
          {
            label: '饮料制造',
            value: '152'
          },
          {
            label: '精制茶加工',
            value: '153'
          }
        ],
        value: '15',
        label: '酒、饮料和精制茶制造业'
      },
      {
        children: [
          {
            label: '烟叶复烤',
            value: '161'
          },
          {
            label: '卷烟制造',
            value: '162'
          },
          {
            label: '其他烟草制品制造',
            value: '169'
          }
        ],
        value: '16',
        label: '烟草制品业'
      },
      {
        children: [
          {
            label: '谷物磨制',
            value: '131'
          },
          {
            label: '饲料加工',
            value: '132'
          },
          {
            label: '植物油加工',
            value: '133'
          },
          {
            label: '制糖业',
            value: '134'
          },
          {
            label: '屠宰及肉类加工',
            value: '135'
          },
          {
            label: '水产品加工',
            value: '136'
          },
          {
            label: '蔬菜、水果和坚果加工',
            value: '137'
          },
          {
            label: '其他农副食品加工',
            value: '139'
          }
        ],
        value: '13',
        label: '农副食品加工业'
      },
      {
        children: [
          {
            label: '焙烤食品制造',
            value: '141'
          },
          {
            label: '糖果、巧克力及蜜饯制造',
            value: '142'
          },
          {
            label: '方便食品制造',
            value: '143'
          },
          {
            label: '乳制品制造',
            value: '144'
          },
          {
            label: '罐头食品制造',
            value: '145'
          },
          {
            label: '调味品、发酵制品制造',
            value: '146'
          },
          {
            label: '其他食品制造',
            value: '149'
          }
        ],
        value: '14',
        label: '食品制造业'
      },
      {
        children: [
          {
            label: '木质家具制造',
            value: '211'
          },
          {
            label: '竹、藤家具制造',
            value: '212'
          },
          {
            label: '金属家具制造',
            value: '213'
          },
          {
            label: '塑料家具制造',
            value: '214'
          },
          {
            label: '其他家具制造',
            value: '219'
          }
        ],
        value: '21',
        label: '家具制造业'
      },
      {
        children: [
          {
            label: '木材加工',
            value: '201'
          },
          {
            label: '人造板制造',
            value: '202'
          },
          {
            label: '木制品制造',
            value: '203'
          },
          {
            label: '竹、藤、棕、草等制品制造',
            value: '204'
          }
        ],
        value: '20',
        label: '木材加工和木、竹、藤、棕、草制品业'
      }
    ]
  },
  {
    label: '租赁和商务服务业',
    value: 'L',
    children: [
      {
        children: [
          {
            label: '机械设备租赁',
            value: '711'
          },
          {
            label: '文化及日用品出租',
            value: '712'
          }
        ],
        value: '71',
        label: '租赁业'
      },
      {
        children: [
          {
            label: '企业管理服务',
            value: '721'
          },
          {
            label: '法律服务',
            value: '722'
          },
          {
            label: '咨询与调查',
            value: '723'
          },
          {
            label: '广告业',
            value: '724'
          },
          {
            label: '知识产权服务',
            value: '725'
          },
          {
            label: '人力资源服务',
            value: '726'
          },
          {
            label: '旅行社及相关服务',
            value: '727'
          },
          {
            label: '安全保护服务',
            value: '728'
          },
          {
            label: '其他商务服务业',
            value: '729'
          }
        ],
        value: '72',
        label: '商务服务业'
      }
    ]
  },
  {
    label: '科学研究和技术服务业',
    value: 'M',
    children: [
      {
        children: [
          {
            label: '自然科学研究和试验发展',
            value: '731'
          },
          {
            label: '工程和技术研究和试验发展',
            value: '732'
          },
          {
            label: '农业科学研究和试验发展',
            value: '733'
          },
          {
            label: '医学研究和试验发展',
            value: '734'
          },
          {
            label: '社会人文科学研究',
            value: '735'
          }
        ],
        value: '73',
        label: '研究和试验发展'
      },
      {
        children: [
          {
            label: '气象服务',
            value: '741'
          },
          {
            label: '地震服务',
            value: '742'
          },
          {
            label: '海洋服务',
            value: '743'
          },
          {
            label: '测绘服务',
            value: '744'
          },
          {
            label: '质检技术服务',
            value: '745'
          },
          {
            label: '环境与生态监测',
            value: '746'
          },
          {
            label: '地质勘查',
            value: '747'
          },
          {
            label: '工程技术',
            value: '748'
          },
          {
            label: '其他专业技术服务业',
            value: '749'
          }
        ],
        value: '74',
        label: '专业技术服务业'
      },
      {
        children: [
          {
            label: '技术推广服务',
            value: '751'
          },
          {
            label: '科技中介服务',
            value: '752'
          },
          {
            label: '其他科技推广和应用服务业',
            value: '759'
          }
        ],
        value: '75',
        label: '科技推广和应用服务业'
      }
    ]
  },
  {
    label: '水利、环境和公共设施管理业',
    value: 'N',
    children: [
      {
        children: [
          {
            label: '市政设施管理',
            value: '781'
          },
          {
            label: '环境卫生管理',
            value: '782'
          },
          {
            label: '城乡市容管理',
            value: '783'
          },
          {
            label: '绿化管理',
            value: '784'
          },
          {
            label: '公园和游览景区管理',
            value: '785'
          }
        ],
        value: '78',
        label: '公共设施管理业'
      },
      {
        children: [
          {
            label: '生态保护',
            value: '771'
          },
          {
            label: '环境治理业',
            value: '772'
          }
        ],
        value: '77',
        label: '生态保护和环境治理业'
      },
      {
        children: [
          {
            label: '防洪除涝设施管理',
            value: '761'
          },
          {
            label: '水资源管理',
            value: '762'
          },
          {
            label: '天然水收集与分配',
            value: '763'
          },
          {
            label: '水文服务',
            value: '764'
          },
          {
            label: '其他水利管理业',
            value: '769'
          }
        ],
        value: '76',
        label: '水利管理业'
      }
    ]
  },
  {
    label: '居民服务、修理和其他服务业',
    value: 'O',
    children: [
      {
        children: [
          {
            label: '家庭服务',
            value: '791'
          },
          {
            label: '托儿所服务',
            value: '792'
          },
          {
            label: '洗染服务',
            value: '793'
          },
          {
            label: '理发及美容服务',
            value: '794'
          },
          {
            label: '洗浴服务',
            value: '795'
          },
          {
            label: '保健服务',
            value: '796'
          },
          {
            label: '婚姻服务',
            value: '797'
          },
          {
            label: '殡葬服务',
            value: '798'
          },
          {
            label: '其他居民服务业',
            value: '799'
          }
        ],
        value: '79',
        label: '居民服务业'
      },
      {
        children: [
          {
            label: '汽车、摩托车修理与维护',
            value: '801'
          },
          {
            label: '计算机和办公设备维修',
            value: '802'
          },
          {
            label: '家用电器修理',
            value: '803'
          },
          {
            label: '其他日用产品修理业',
            value: '809'
          }
        ],
        value: '80',
        label: '机动车、电子产品和日用产品修理业'
      },
      {
        children: [
          {
            label: '清洁服务',
            value: '811'
          },
          {
            label: '其他未列明服务业',
            value: '819'
          }
        ],
        value: '81',
        label: '其他服务业'
      }
    ]
  },
  {
    label: '住宿和餐饮业',
    value: 'H',
    children: [
      {
        children: [
          {
            label: '正餐服务',
            value: '621'
          },
          {
            label: '快餐服务',
            value: '622'
          },
          {
            label: '饮料及冷饮服务',
            value: '623'
          },
          {
            label: '其他餐饮业',
            value: '629'
          }
        ],
        value: '62',
        label: '餐饮业'
      },
      {
        children: [
          {
            label: '旅游饭店',
            value: '611'
          },
          {
            label: '一般旅馆',
            value: '612'
          },
          {
            label: '其他住宿业',
            value: '619'
          }
        ],
        value: '61',
        label: '住宿业'
      }
    ]
  },
  {
    label: '信息传输、软件和信息技术服务业',
    value: 'I',
    children: [
      {
        children: [
          {
            label: '互联网接入及相关服务',
            value: '641'
          },
          {
            label: '互联网信息服务',
            value: '642'
          },
          {
            label: '其他互联网服务',
            value: '649'
          }
        ],
        value: '64',
        label: '互联网和相关服务'
      },
      {
        children: [
          {
            label: '软件开发',
            value: '651'
          },
          {
            label: '信息系统集成服务',
            value: '652'
          },
          {
            label: '信息技术咨询服务',
            value: '653'
          },
          {
            label: '数据处理和存储服务',
            value: '654'
          },
          {
            label: '集成电路设计',
            value: '655'
          },
          {
            label: '其他信息技术服务业',
            value: '659'
          }
        ],
        value: '65',
        label: '软件和信息技术服务业'
      },
      {
        children: [
          {
            label: '电信',
            value: '631'
          },
          {
            label: '广播电视传输服务',
            value: '632'
          },
          {
            label: '卫星传输服务',
            value: '633'
          }
        ],
        value: '63',
        label: '电信、广播电视和卫星传输服务'
      }
    ]
  },
  {
    label: '金融业',
    value: 'J',
    children: [
      {
        children: [
          {
            label: '证券市场服务',
            value: '671'
          },
          {
            label: '期货市场服务',
            value: '672'
          },
          {
            label: '证券期货监管服务',
            value: '673'
          },
          {
            label: '资本投资服务',
            value: '674'
          },
          {
            label: '其他资本市场服务',
            value: '679'
          }
        ],
        value: '67',
        label: '资本市场服务'
      },
      {
        children: [
          {
            label: '中央银行服务',
            value: '661'
          },
          {
            label: '货币银行服务',
            value: '662'
          },
          {
            label: '非货币银行服务',
            value: '663'
          },
          {
            label: '银行监管服务',
            value: '664'
          }
        ],
        value: '66',
        label: '货币金融服务'
      },
      {
        children: [
          {
            label: '金融信托与管理服务',
            value: '691'
          },
          {
            label: '控股公司服务',
            value: '692'
          },
          {
            label: '非金融机构支付服务',
            value: '693'
          },
          {
            label: '金融信息服务',
            value: '694'
          },
          {
            label: '其他未列明金融业',
            value: '699'
          }
        ],
        value: '69',
        label: '其他金融业'
      },
      {
        children: [
          {
            label: '人身保险',
            value: '681'
          },
          {
            label: '财产保险',
            value: '682'
          },
          {
            label: '再保险',
            value: '683'
          },
          {
            label: '养老金',
            value: '684'
          },
          {
            label: '保险经纪与代理服务',
            value: '685'
          },
          {
            label: '保险监管服务',
            value: '686'
          },
          {
            label: '其他保险活动',
            value: '689'
          }
        ],
        value: '68',
        label: '保险业'
      }
    ]
  },
  {
    label: '房地产业',
    value: 'K',
    children: [
      {
        children: [
          {
            label: '房地产开发经营',
            value: '701'
          },
          {
            label: '物业管理',
            value: '702'
          },
          {
            label: '房地产中介服务',
            value: '703'
          },
          {
            label: '自有房地产经营活动',
            value: '704'
          },
          {
            label: '其他房地产业',
            value: '709'
          }
        ],
        value: '70',
        label: '房地产业'
      }
    ]
  },
  {
    label: '国际组织',
    value: 'T',
    children: [
      {
        children: [
          {
            label: '国际组织',
            value: '960'
          }
        ],
        value: '96',
        label: '国际组织'
      }
    ]
  },
  {
    label: '卫生和社会工作',
    value: 'Q',
    children: [
      {
        children: [
          {
            label: '医院',
            value: '831'
          },
          {
            label: '社区医疗与卫生院',
            value: '832'
          },
          {
            label: '门诊部（所）',
            value: '833'
          },
          {
            label: '计划生育技术服务活动',
            value: '834'
          },
          {
            label: '妇幼保健院（所、站）',
            value: '835'
          },
          {
            label: '专科疾病防治院（所、站）',
            value: '836'
          },
          {
            label: '疾病预防控制中心',
            value: '837'
          },
          {
            label: '其他卫生活动',
            value: '839'
          }
        ],
        value: '83',
        label: '卫生'
      },
      {
        children: [
          {
            label: '提供住宿社会工作',
            value: '841'
          },
          {
            label: '不提供住宿社会工作',
            value: '842'
          }
        ],
        value: '84',
        label: '社会工作'
      }
    ]
  },
  {
    label: '教育',
    value: 'P',
    children: [
      {
        children: [
          {
            label: '学前教育',
            value: '821'
          },
          {
            label: '初等教育',
            value: '822'
          },
          {
            label: '中等教育',
            value: '823'
          },
          {
            label: '高等教育',
            value: '824'
          },
          {
            label: '特殊教育',
            value: '825'
          },
          {
            label: '技能培训、教育辅助及其他教育',
            value: '829'
          }
        ],
        value: '82',
        label: '教育'
      }
    ]
  },
  {
    label: '公共管理、社会保障和社会组织',
    value: 'S',
    children: [
      {
        children: [
          {
            label: '社区自治组织',
            value: '951'
          },
          {
            label: '村民自治组织',
            value: '952'
          }
        ],
        value: '95',
        label: '基层群众自治组织'
      },
      {
        children: [
          {
            label: '群众团体',
            value: '941'
          },
          {
            label: '社会团体',
            value: '942'
          },
          {
            label: '基金会',
            value: '943'
          },
          {
            label: '宗教组织',
            value: '944'
          }
        ],
        value: '94',
        label: '群众团体、社会团体和其他成员组织'
      },
      {
        children: [
          {
            label: '社会保障',
            value: '930'
          }
        ],
        value: '93',
        label: '社会保障'
      },
      {
        children: [
          {
            label: '人民政协',
            value: '921'
          },
          {
            label: '民主党派',
            value: '922'
          }
        ],
        value: '92',
        label: '人民政协、民主党派'
      },
      {
        children: [
          {
            label: '国家权力机构',
            value: '911'
          },
          {
            label: '国家行政机构',
            value: '912'
          },
          {
            label: '人民法院和人民检察院',
            value: '913'
          },
          {
            label: '其他国家机构',
            value: '919'
          }
        ],
        value: '91',
        label: '国家机构'
      },
      {
        children: [
          {
            label: '中国共产党机关',
            value: '900'
          }
        ],
        value: '90',
        label: '中国共产党机关'
      }
    ]
  },
  {
    label: '文化、体育和娱乐业',
    value: 'R',
    children: [
      {
        children: [
          {
            label: '体育组织',
            value: '881'
          },
          {
            label: '体育场馆',
            value: '882'
          },
          {
            label: '休闲健身活动',
            value: '883'
          },
          {
            label: '其他体育',
            value: '889'
          }
        ],
        value: '88',
        label: '体育'
      },
      {
        children: [
          {
            label: '室内娱乐活动',
            value: '891'
          },
          {
            label: '游乐园',
            value: '892'
          },
          {
            label: '彩票活动',
            value: '893'
          },
          {
            label: '文化、娱乐、体育经纪代理',
            value: '894'
          },
          {
            label: '其他娱乐业',
            value: '899'
          }
        ],
        value: '89',
        label: '娱乐业'
      },
      {
        children: [
          {
            label: '广播',
            value: '861'
          },
          {
            label: '电视',
            value: '862'
          },
          {
            label: '电影和影视节目制作',
            value: '863'
          },
          {
            label: '电影和影视节目发行',
            value: '864'
          },
          {
            label: '电影放映',
            value: '865'
          },
          {
            label: '录音制作',
            value: '866'
          }
        ],
        value: '86',
        label: '广播、电视、电影和影视录音制作业'
      },
      {
        children: [
          {
            label: '文艺创作与表演',
            value: '871'
          },
          {
            label: '艺术表演场馆',
            value: '872'
          },
          {
            label: '图书馆与档案馆',
            value: '873'
          },
          {
            label: '文物及非物质文化遗产保护',
            value: '874'
          },
          {
            label: '博物馆',
            value: '875'
          },
          {
            label: '烈士陵园、纪念馆',
            value: '876'
          },
          {
            label: '群众文化活动',
            value: '877'
          },
          {
            label: '其他文化艺术业',
            value: '879'
          }
        ],
        value: '87',
        label: '文化艺术业'
      },
      {
        children: [
          {
            label: '新闻业',
            value: '851'
          },
          {
            label: '出版业',
            value: '852'
          }
        ],
        value: '85',
        label: '新闻和出版业'
      }
    ]
  }
]

// export default category
export default category
