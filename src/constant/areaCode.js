
function getAren(val) {
  val.forEach(x => {
    x.value = x.areaCode
    x.label = x.name
    if (x.city) {
      x.children = x.city
    }
    if (x.children&&x.children.length > 0) {
      getAren(x.children)
    }
  })
}

export let areaCode = [
  {
    "areaCode": "11",
    "city": [
      {
        "areaCode": "1100",
        "province": "北京市",
        "district": [
          {
            "areaCode": "110101",
            "province": "北京市",
            "city": "北京市",
            "name": "东城区"
          },
          {
            "areaCode": "110102",
            "province": "北京市",
            "city": "北京市",
            "name": "西城区"
          },
          {
            "areaCode": "110105",
            "province": "北京市",
            "city": "北京市",
            "name": "朝阳区"
          },
          {
            "areaCode": "110106",
            "province": "北京市",
            "city": "北京市",
            "name": "丰台区"
          },
          {
            "areaCode": "110107",
            "province": "北京市",
            "city": "北京市",
            "name": "石景山区"
          },
          {
            "areaCode": "110108",
            "province": "北京市",
            "city": "北京市",
            "name": "海淀区"
          },
          {
            "areaCode": "110109",
            "province": "北京市",
            "city": "北京市",
            "name": "门头沟区"
          },
          {
            "areaCode": "110111",
            "province": "北京市",
            "city": "北京市",
            "name": "房山区"
          },
          {
            "areaCode": "110112",
            "province": "北京市",
            "city": "北京市",
            "name": "通州区"
          },
          {
            "areaCode": "110113",
            "province": "北京市",
            "city": "北京市",
            "name": "顺义区"
          },
          {
            "areaCode": "110114",
            "province": "北京市",
            "city": "北京市",
            "name": "昌平区"
          },
          {
            "areaCode": "110115",
            "province": "北京市",
            "city": "北京市",
            "name": "大兴区"
          },
          {
            "areaCode": "110116",
            "province": "北京市",
            "city": "北京市",
            "name": "怀柔区"
          },
          {
            "areaCode": "110117",
            "province": "北京市",
            "city": "北京市",
            "name": "平谷区"
          },
          {
            "areaCode": "110118",
            "province": "北京市",
            "city": "北京市",
            "name": "密云区"
          },
          {
            "areaCode": "110119",
            "province": "北京市",
            "city": "北京市",
            "name": "延庆区"
          }
        ],
        "name": "北京市",
        "base": "bj"
      }
    ],
    "name": "北京市",
    "base": "bj"
  },
  {
    "areaCode": "31",
    "city": [
      {
        "areaCode": "3100",
        "province": "上海市",
        "district": [
          {
            "areaCode": "310101",
            "province": "上海市",
            "city": "上海市",
            "name": "黄浦区"
          },
          {
            "areaCode": "310104",
            "province": "上海市",
            "city": "上海市",
            "name": "徐汇区"
          },
          {
            "areaCode": "310105",
            "province": "上海市",
            "city": "上海市",
            "name": "长宁区"
          },
          {
            "areaCode": "310106",
            "province": "上海市",
            "city": "上海市",
            "name": "静安区"
          },
          {
            "areaCode": "310107",
            "province": "上海市",
            "city": "上海市",
            "name": "普陀区"
          },
          {
            "areaCode": "310109",
            "province": "上海市",
            "city": "上海市",
            "name": "虹口区"
          },
          {
            "areaCode": "310110",
            "province": "上海市",
            "city": "上海市",
            "name": "杨浦区"
          },
          {
            "areaCode": "310112",
            "province": "上海市",
            "city": "上海市",
            "name": "闵行区"
          },
          {
            "areaCode": "310113",
            "province": "上海市",
            "city": "上海市",
            "name": "宝山区"
          },
          {
            "areaCode": "310114",
            "province": "上海市",
            "city": "上海市",
            "name": "嘉定区"
          },
          {
            "areaCode": "310115",
            "province": "上海市",
            "city": "上海市",
            "name": "浦东新区"
          },
          {
            "areaCode": "310116",
            "province": "上海市",
            "city": "上海市",
            "name": "金山区"
          },
          {
            "areaCode": "310117",
            "province": "上海市",
            "city": "上海市",
            "name": "松江区"
          },
          {
            "areaCode": "310118",
            "province": "上海市",
            "city": "上海市",
            "name": "青浦区"
          },
          {
            "areaCode": "310120",
            "province": "上海市",
            "city": "上海市",
            "name": "奉贤区"
          },
          {
            "areaCode": "310151",
            "province": "上海市",
            "city": "上海市",
            "name": "崇明区"
          }
        ],
        "name": "上海市",
        "base": "sh"
      }
    ],
    "name": "上海市",
    "base": "sh"
  },
  {
    "areaCode": "12",
    "city": [
      {
        "areaCode": "1200",
        "province": "天津市",
        "district": [
          {
            "areaCode": "120101",
            "province": "天津市",
            "city": "天津市",
            "name": "和平区"
          },
          {
            "areaCode": "120102",
            "province": "天津市",
            "city": "天津市",
            "name": "河东区"
          },
          {
            "areaCode": "120103",
            "province": "天津市",
            "city": "天津市",
            "name": "河西区"
          },
          {
            "areaCode": "120104",
            "province": "天津市",
            "city": "天津市",
            "name": "南开区"
          },
          {
            "areaCode": "120105",
            "province": "天津市",
            "city": "天津市",
            "name": "河北区"
          },
          {
            "areaCode": "120106",
            "province": "天津市",
            "city": "天津市",
            "name": "红桥区"
          },
          {
            "areaCode": "120110",
            "province": "天津市",
            "city": "天津市",
            "name": "东丽区"
          },
          {
            "areaCode": "120111",
            "province": "天津市",
            "city": "天津市",
            "name": "西青区"
          },
          {
            "areaCode": "120112",
            "province": "天津市",
            "city": "天津市",
            "name": "津南区"
          },
          {
            "areaCode": "120113",
            "province": "天津市",
            "city": "天津市",
            "name": "北辰区"
          },
          {
            "areaCode": "120114",
            "province": "天津市",
            "city": "天津市",
            "name": "武清区"
          },
          {
            "areaCode": "120115",
            "province": "天津市",
            "city": "天津市",
            "name": "宝坻区"
          },
          {
            "areaCode": "120116",
            "province": "天津市",
            "city": "天津市",
            "name": "滨海新区"
          },
          {
            "areaCode": "120117",
            "province": "天津市",
            "city": "天津市",
            "name": "宁河区"
          },
          {
            "areaCode": "120118",
            "province": "天津市",
            "city": "天津市",
            "name": "静海区"
          },
          {
            "areaCode": "120119",
            "province": "天津市",
            "city": "天津市",
            "name": "蓟州区"
          }
        ],
        "name": "天津市",
        "base": "tj"
      }
    ],
    "name": "天津市",
    "base": "tj"
  },
  {
    "areaCode": "50",
    "city": [
      {
        "areaCode": "5000",
        "province": "重庆市",
        "district": [
          {
            "areaCode": "500101",
            "province": "重庆市",
            "city": "重庆市",
            "name": "万州区"
          },
          {
            "areaCode": "500102",
            "province": "重庆市",
            "city": "重庆市",
            "name": "涪陵区"
          },
          {
            "areaCode": "500103",
            "province": "重庆市",
            "city": "重庆市",
            "name": "渝中区"
          },
          {
            "areaCode": "500104",
            "province": "重庆市",
            "city": "重庆市",
            "name": "大渡口区"
          },
          {
            "areaCode": "500105",
            "province": "重庆市",
            "city": "重庆市",
            "name": "江北区"
          },
          {
            "areaCode": "500106",
            "province": "重庆市",
            "city": "重庆市",
            "name": "沙坪坝区"
          },
          {
            "areaCode": "500107",
            "province": "重庆市",
            "city": "重庆市",
            "name": "九龙坡区"
          },
          {
            "areaCode": "500108",
            "province": "重庆市",
            "city": "重庆市",
            "name": "南岸区"
          },
          {
            "areaCode": "500109",
            "province": "重庆市",
            "city": "重庆市",
            "name": "北碚区"
          },
          {
            "areaCode": "500110",
            "province": "重庆市",
            "city": "重庆市",
            "name": "綦江区"
          },
          {
            "areaCode": "500111",
            "province": "重庆市",
            "city": "重庆市",
            "name": "大足区"
          },
          {
            "areaCode": "500112",
            "province": "重庆市",
            "city": "重庆市",
            "name": "渝北区"
          },
          {
            "areaCode": "500113",
            "province": "重庆市",
            "city": "重庆市",
            "name": "巴南区"
          },
          {
            "areaCode": "500114",
            "province": "重庆市",
            "city": "重庆市",
            "name": "黔江区"
          },
          {
            "areaCode": "500115",
            "province": "重庆市",
            "city": "重庆市",
            "name": "长寿区"
          },
          {
            "areaCode": "500116",
            "province": "重庆市",
            "city": "重庆市",
            "name": "江津区"
          },
          {
            "areaCode": "500117",
            "province": "重庆市",
            "city": "重庆市",
            "name": "合川区"
          },
          {
            "areaCode": "500118",
            "province": "重庆市",
            "city": "重庆市",
            "name": "永川区"
          },
          {
            "areaCode": "500119",
            "province": "重庆市",
            "city": "重庆市",
            "name": "南川区"
          },
          {
            "areaCode": "500120",
            "province": "重庆市",
            "city": "重庆市",
            "name": "璧山区"
          },
          {
            "areaCode": "500151",
            "province": "重庆市",
            "city": "重庆市",
            "name": "铜梁区"
          },
          {
            "areaCode": "500152",
            "province": "重庆市",
            "city": "重庆市",
            "name": "潼南区"
          },
          {
            "areaCode": "500153",
            "province": "重庆市",
            "city": "重庆市",
            "name": "荣昌区"
          },
          {
            "areaCode": "500154",
            "province": "重庆市",
            "city": "重庆市",
            "name": "开州区"
          },
          {
            "areaCode": "500155",
            "province": "重庆市",
            "city": "重庆市",
            "name": "梁平区"
          },
          {
            "areaCode": "500156",
            "province": "重庆市",
            "city": "重庆市",
            "name": "武隆区"
          },
          {
            "areaCode": "500229",
            "province": "重庆市",
            "city": "重庆市",
            "name": "城口县"
          },
          {
            "areaCode": "500230",
            "province": "重庆市",
            "city": "重庆市",
            "name": "丰都县"
          },
          {
            "areaCode": "500231",
            "province": "重庆市",
            "city": "重庆市",
            "name": "垫江县"
          },
          {
            "areaCode": "500233",
            "province": "重庆市",
            "city": "重庆市",
            "name": "忠县"
          },
          {
            "areaCode": "500235",
            "province": "重庆市",
            "city": "重庆市",
            "name": "云阳县"
          },
          {
            "areaCode": "500236",
            "province": "重庆市",
            "city": "重庆市",
            "name": "奉节县"
          },
          {
            "areaCode": "500237",
            "province": "重庆市",
            "city": "重庆市",
            "name": "巫山县"
          },
          {
            "areaCode": "500238",
            "province": "重庆市",
            "city": "重庆市",
            "name": "巫溪县"
          },
          {
            "areaCode": "500240",
            "province": "重庆市",
            "city": "重庆市",
            "name": "石柱土家族自治县"
          },
          {
            "areaCode": "500241",
            "province": "重庆市",
            "city": "重庆市",
            "name": "秀山土家族苗族自治县"
          },
          {
            "areaCode": "500242",
            "province": "重庆市",
            "city": "重庆市",
            "name": "酉阳土家族苗族自治县"
          },
          {
            "areaCode": "500243",
            "province": "重庆市",
            "city": "重庆市",
            "name": "彭水苗族土家族自治县"
          }
        ],
        "name": "重庆市",
        "base": "cq"
      }
    ],
    "name": "重庆市",
    "base": "cq"
  },
  {
    "areaCode": "13",
    "city": [
      {
        "areaCode": "1301",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130102",
            "province": "河北省",
            "city": "石家庄市",
            "name": "长安区"
          },
          {
            "areaCode": "130104",
            "province": "河北省",
            "city": "石家庄市",
            "name": "桥西区"
          },
          {
            "areaCode": "130105",
            "province": "河北省",
            "city": "石家庄市",
            "name": "新华区"
          },
          {
            "areaCode": "130107",
            "province": "河北省",
            "city": "石家庄市",
            "name": "井陉矿区"
          },
          {
            "areaCode": "130108",
            "province": "河北省",
            "city": "石家庄市",
            "name": "裕华区"
          },
          {
            "areaCode": "130109",
            "province": "河北省",
            "city": "石家庄市",
            "name": "藁城区"
          },
          {
            "areaCode": "130110",
            "province": "河北省",
            "city": "石家庄市",
            "name": "鹿泉区"
          },
          {
            "areaCode": "130111",
            "province": "河北省",
            "city": "石家庄市",
            "name": "栾城区"
          },
          {
            "areaCode": "130121",
            "province": "河北省",
            "city": "石家庄市",
            "name": "井陉县"
          },
          {
            "areaCode": "130123",
            "province": "河北省",
            "city": "石家庄市",
            "name": "正定县"
          },
          {
            "areaCode": "130125",
            "province": "河北省",
            "city": "石家庄市",
            "name": "行唐县"
          },
          {
            "areaCode": "130126",
            "province": "河北省",
            "city": "石家庄市",
            "name": "灵寿县"
          },
          {
            "areaCode": "130127",
            "province": "河北省",
            "city": "石家庄市",
            "name": "高邑县"
          },
          {
            "areaCode": "130128",
            "province": "河北省",
            "city": "石家庄市",
            "name": "深泽县"
          },
          {
            "areaCode": "130129",
            "province": "河北省",
            "city": "石家庄市",
            "name": "赞皇县"
          },
          {
            "areaCode": "130130",
            "province": "河北省",
            "city": "石家庄市",
            "name": "无极县"
          },
          {
            "areaCode": "130131",
            "province": "河北省",
            "city": "石家庄市",
            "name": "平山县"
          },
          {
            "areaCode": "130132",
            "province": "河北省",
            "city": "石家庄市",
            "name": "元氏县"
          },
          {
            "areaCode": "130133",
            "province": "河北省",
            "city": "石家庄市",
            "name": "赵县"
          },
          {
            "areaCode": "130171",
            "province": "河北省",
            "city": "石家庄市",
            "name": "石家庄高新技术产业开发区"
          },
          {
            "areaCode": "130172",
            "province": "河北省",
            "city": "石家庄市",
            "name": "石家庄循环化工园区"
          },
          {
            "areaCode": "130181",
            "province": "河北省",
            "city": "石家庄市",
            "name": "辛集市"
          },
          {
            "areaCode": "130183",
            "province": "河北省",
            "city": "石家庄市",
            "name": "晋州市"
          },
          {
            "areaCode": "130184",
            "province": "河北省",
            "city": "石家庄市",
            "name": "新乐市"
          }
        ],
        "name": "石家庄市",
        "base": "sjz"
      },
      {
        "areaCode": "1302",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130202",
            "province": "河北省",
            "city": "唐山市",
            "name": "路南区"
          },
          {
            "areaCode": "130203",
            "province": "河北省",
            "city": "唐山市",
            "name": "路北区"
          },
          {
            "areaCode": "130204",
            "province": "河北省",
            "city": "唐山市",
            "name": "古冶区"
          },
          {
            "areaCode": "130205",
            "province": "河北省",
            "city": "唐山市",
            "name": "开平区"
          },
          {
            "areaCode": "130207",
            "province": "河北省",
            "city": "唐山市",
            "name": "丰南区"
          },
          {
            "areaCode": "130208",
            "province": "河北省",
            "city": "唐山市",
            "name": "丰润区"
          },
          {
            "areaCode": "130209",
            "province": "河北省",
            "city": "唐山市",
            "name": "曹妃甸区"
          },
          {
            "areaCode": "130224",
            "province": "河北省",
            "city": "唐山市",
            "name": "滦南县"
          },
          {
            "areaCode": "130225",
            "province": "河北省",
            "city": "唐山市",
            "name": "乐亭县"
          },
          {
            "areaCode": "130227",
            "province": "河北省",
            "city": "唐山市",
            "name": "迁西县"
          },
          {
            "areaCode": "130229",
            "province": "河北省",
            "city": "唐山市",
            "name": "玉田县"
          },
          {
            "areaCode": "130271",
            "province": "河北省",
            "city": "唐山市",
            "name": "唐山市芦台经济技术开发区"
          },
          {
            "areaCode": "130272",
            "province": "河北省",
            "city": "唐山市",
            "name": "唐山市汉沽管理区"
          },
          {
            "areaCode": "130273",
            "province": "河北省",
            "city": "唐山市",
            "name": "唐山高新技术产业开发区"
          },
          {
            "areaCode": "130274",
            "province": "河北省",
            "city": "唐山市",
            "name": "河北唐山海港经济开发区"
          },
          {
            "areaCode": "130281",
            "province": "河北省",
            "city": "唐山市",
            "name": "遵化市"
          },
          {
            "areaCode": "130283",
            "province": "河北省",
            "city": "唐山市",
            "name": "迁安市"
          },
          {
            "areaCode": "130284",
            "province": "河北省",
            "city": "唐山市",
            "name": "滦州市"
          }
        ],
        "name": "唐山市",
        "base": "tangshan"
      },
      {
        "areaCode": "1303",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130302",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "海港区"
          },
          {
            "areaCode": "130303",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "山海关区"
          },
          {
            "areaCode": "130304",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "北戴河区"
          },
          {
            "areaCode": "130306",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "抚宁区"
          },
          {
            "areaCode": "130321",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "青龙满族自治县"
          },
          {
            "areaCode": "130322",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "昌黎县"
          },
          {
            "areaCode": "130324",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "卢龙县"
          },
          {
            "areaCode": "130371",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "秦皇岛市经济技术开发区"
          },
          {
            "areaCode": "130372",
            "province": "河北省",
            "city": "秦皇岛市",
            "name": "北戴河新区"
          }
        ],
        "name": "秦皇岛市",
        "base": "qhd"
      },
      {
        "areaCode": "1304",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130402",
            "province": "河北省",
            "city": "邯郸市",
            "name": "邯山区"
          },
          {
            "areaCode": "130403",
            "province": "河北省",
            "city": "邯郸市",
            "name": "丛台区"
          },
          {
            "areaCode": "130404",
            "province": "河北省",
            "city": "邯郸市",
            "name": "复兴区"
          },
          {
            "areaCode": "130406",
            "province": "河北省",
            "city": "邯郸市",
            "name": "峰峰矿区"
          },
          {
            "areaCode": "130407",
            "province": "河北省",
            "city": "邯郸市",
            "name": "肥乡区"
          },
          {
            "areaCode": "130408",
            "province": "河北省",
            "city": "邯郸市",
            "name": "永年区"
          },
          {
            "areaCode": "130423",
            "province": "河北省",
            "city": "邯郸市",
            "name": "临漳县"
          },
          {
            "areaCode": "130424",
            "province": "河北省",
            "city": "邯郸市",
            "name": "成安县"
          },
          {
            "areaCode": "130425",
            "province": "河北省",
            "city": "邯郸市",
            "name": "大名县"
          },
          {
            "areaCode": "130426",
            "province": "河北省",
            "city": "邯郸市",
            "name": "涉县"
          },
          {
            "areaCode": "130427",
            "province": "河北省",
            "city": "邯郸市",
            "name": "磁县"
          },
          {
            "areaCode": "130430",
            "province": "河北省",
            "city": "邯郸市",
            "name": "邱县"
          },
          {
            "areaCode": "130431",
            "province": "河北省",
            "city": "邯郸市",
            "name": "鸡泽县"
          },
          {
            "areaCode": "130432",
            "province": "河北省",
            "city": "邯郸市",
            "name": "广平县"
          },
          {
            "areaCode": "130433",
            "province": "河北省",
            "city": "邯郸市",
            "name": "馆陶县"
          },
          {
            "areaCode": "130434",
            "province": "河北省",
            "city": "邯郸市",
            "name": "魏县"
          },
          {
            "areaCode": "130435",
            "province": "河北省",
            "city": "邯郸市",
            "name": "曲周县"
          },
          {
            "areaCode": "130471",
            "province": "河北省",
            "city": "邯郸市",
            "name": "邯郸经济技术开发区"
          },
          {
            "areaCode": "130473",
            "province": "河北省",
            "city": "邯郸市",
            "name": "邯郸冀南新区"
          },
          {
            "areaCode": "130481",
            "province": "河北省",
            "city": "邯郸市",
            "name": "武安市"
          }
        ],
        "name": "邯郸市",
        "base": "handan"
      },
      {
        "areaCode": "1305",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130502",
            "province": "河北省",
            "city": "邢台市",
            "name": "桥东区"
          },
          {
            "areaCode": "130503",
            "province": "河北省",
            "city": "邢台市",
            "name": "桥西区"
          },
          {
            "areaCode": "130521",
            "province": "河北省",
            "city": "邢台市",
            "name": "邢台县"
          },
          {
            "areaCode": "130522",
            "province": "河北省",
            "city": "邢台市",
            "name": "临城县"
          },
          {
            "areaCode": "130523",
            "province": "河北省",
            "city": "邢台市",
            "name": "内丘县"
          },
          {
            "areaCode": "130524",
            "province": "河北省",
            "city": "邢台市",
            "name": "柏乡县"
          },
          {
            "areaCode": "130525",
            "province": "河北省",
            "city": "邢台市",
            "name": "隆尧县"
          },
          {
            "areaCode": "130526",
            "province": "河北省",
            "city": "邢台市",
            "name": "任县"
          },
          {
            "areaCode": "130527",
            "province": "河北省",
            "city": "邢台市",
            "name": "南和县"
          },
          {
            "areaCode": "130528",
            "province": "河北省",
            "city": "邢台市",
            "name": "宁晋县"
          },
          {
            "areaCode": "130529",
            "province": "河北省",
            "city": "邢台市",
            "name": "巨鹿县"
          },
          {
            "areaCode": "130530",
            "province": "河北省",
            "city": "邢台市",
            "name": "新河县"
          },
          {
            "areaCode": "130531",
            "province": "河北省",
            "city": "邢台市",
            "name": "广宗县"
          },
          {
            "areaCode": "130532",
            "province": "河北省",
            "city": "邢台市",
            "name": "平乡县"
          },
          {
            "areaCode": "130533",
            "province": "河北省",
            "city": "邢台市",
            "name": "威县"
          },
          {
            "areaCode": "130534",
            "province": "河北省",
            "city": "邢台市",
            "name": "清河县"
          },
          {
            "areaCode": "130535",
            "province": "河北省",
            "city": "邢台市",
            "name": "临西县"
          },
          {
            "areaCode": "130571",
            "province": "河北省",
            "city": "邢台市",
            "name": "河北邢台经济开发区"
          },
          {
            "areaCode": "130581",
            "province": "河北省",
            "city": "邢台市",
            "name": "南宫市"
          },
          {
            "areaCode": "130582",
            "province": "河北省",
            "city": "邢台市",
            "name": "沙河市"
          }
        ],
        "name": "邢台市",
        "base": "xingtai"
      },
      {
        "areaCode": "1306",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130602",
            "province": "河北省",
            "city": "保定市",
            "name": "竞秀区"
          },
          {
            "areaCode": "130606",
            "province": "河北省",
            "city": "保定市",
            "name": "莲池区"
          },
          {
            "areaCode": "130607",
            "province": "河北省",
            "city": "保定市",
            "name": "满城区"
          },
          {
            "areaCode": "130608",
            "province": "河北省",
            "city": "保定市",
            "name": "清苑区"
          },
          {
            "areaCode": "130609",
            "province": "河北省",
            "city": "保定市",
            "name": "徐水区"
          },
          {
            "areaCode": "130623",
            "province": "河北省",
            "city": "保定市",
            "name": "涞水县"
          },
          {
            "areaCode": "130624",
            "province": "河北省",
            "city": "保定市",
            "name": "阜平县"
          },
          {
            "areaCode": "130626",
            "province": "河北省",
            "city": "保定市",
            "name": "定兴县"
          },
          {
            "areaCode": "130627",
            "province": "河北省",
            "city": "保定市",
            "name": "唐县"
          },
          {
            "areaCode": "130628",
            "province": "河北省",
            "city": "保定市",
            "name": "高阳县"
          },
          {
            "areaCode": "130629",
            "province": "河北省",
            "city": "保定市",
            "name": "容城县"
          },
          {
            "areaCode": "130630",
            "province": "河北省",
            "city": "保定市",
            "name": "涞源县"
          },
          {
            "areaCode": "130631",
            "province": "河北省",
            "city": "保定市",
            "name": "望都县"
          },
          {
            "areaCode": "130632",
            "province": "河北省",
            "city": "保定市",
            "name": "安新县"
          },
          {
            "areaCode": "130633",
            "province": "河北省",
            "city": "保定市",
            "name": "易县"
          },
          {
            "areaCode": "130634",
            "province": "河北省",
            "city": "保定市",
            "name": "曲阳县"
          },
          {
            "areaCode": "130635",
            "province": "河北省",
            "city": "保定市",
            "name": "蠡县"
          },
          {
            "areaCode": "130636",
            "province": "河北省",
            "city": "保定市",
            "name": "顺平县"
          },
          {
            "areaCode": "130637",
            "province": "河北省",
            "city": "保定市",
            "name": "博野县"
          },
          {
            "areaCode": "130638",
            "province": "河北省",
            "city": "保定市",
            "name": "雄县"
          },
          {
            "areaCode": "130671",
            "province": "河北省",
            "city": "保定市",
            "name": "保定高新技术产业开发区"
          },
          {
            "areaCode": "130672",
            "province": "河北省",
            "city": "保定市",
            "name": "保定白沟新城"
          },
          {
            "areaCode": "130681",
            "province": "河北省",
            "city": "保定市",
            "name": "涿州市"
          },
          {
            "areaCode": "130682",
            "province": "河北省",
            "city": "保定市",
            "name": "定州市"
          },
          {
            "areaCode": "130683",
            "province": "河北省",
            "city": "保定市",
            "name": "安国市"
          },
          {
            "areaCode": "130684",
            "province": "河北省",
            "city": "保定市",
            "name": "高碑店市"
          }
        ],
        "name": "保定市",
        "base": "baoding"
      },
      {
        "areaCode": "1307",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130702",
            "province": "河北省",
            "city": "张家口市",
            "name": "桥东区"
          },
          {
            "areaCode": "130703",
            "province": "河北省",
            "city": "张家口市",
            "name": "桥西区"
          },
          {
            "areaCode": "130705",
            "province": "河北省",
            "city": "张家口市",
            "name": "宣化区"
          },
          {
            "areaCode": "130706",
            "province": "河北省",
            "city": "张家口市",
            "name": "下花园区"
          },
          {
            "areaCode": "130708",
            "province": "河北省",
            "city": "张家口市",
            "name": "万全区"
          },
          {
            "areaCode": "130709",
            "province": "河北省",
            "city": "张家口市",
            "name": "崇礼区"
          },
          {
            "areaCode": "130722",
            "province": "河北省",
            "city": "张家口市",
            "name": "张北县"
          },
          {
            "areaCode": "130723",
            "province": "河北省",
            "city": "张家口市",
            "name": "康保县"
          },
          {
            "areaCode": "130724",
            "province": "河北省",
            "city": "张家口市",
            "name": "沽源县"
          },
          {
            "areaCode": "130725",
            "province": "河北省",
            "city": "张家口市",
            "name": "尚义县"
          },
          {
            "areaCode": "130726",
            "province": "河北省",
            "city": "张家口市",
            "name": "蔚县"
          },
          {
            "areaCode": "130727",
            "province": "河北省",
            "city": "张家口市",
            "name": "阳原县"
          },
          {
            "areaCode": "130728",
            "province": "河北省",
            "city": "张家口市",
            "name": "怀安县"
          },
          {
            "areaCode": "130730",
            "province": "河北省",
            "city": "张家口市",
            "name": "怀来县"
          },
          {
            "areaCode": "130731",
            "province": "河北省",
            "city": "张家口市",
            "name": "涿鹿县"
          },
          {
            "areaCode": "130732",
            "province": "河北省",
            "city": "张家口市",
            "name": "赤城县"
          },
          {
            "areaCode": "130771",
            "province": "河北省",
            "city": "张家口市",
            "name": "张家口市高新技术产业开发区"
          },
          {
            "areaCode": "130772",
            "province": "河北省",
            "city": "张家口市",
            "name": "张家口市察北管理区"
          },
          {
            "areaCode": "130773",
            "province": "河北省",
            "city": "张家口市",
            "name": "张家口市塞北管理区"
          }
        ],
        "name": "张家口市",
        "base": "zjk"
      },
      {
        "areaCode": "1308",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130802",
            "province": "河北省",
            "city": "承德市",
            "name": "双桥区"
          },
          {
            "areaCode": "130803",
            "province": "河北省",
            "city": "承德市",
            "name": "双滦区"
          },
          {
            "areaCode": "130804",
            "province": "河北省",
            "city": "承德市",
            "name": "鹰手营子矿区"
          },
          {
            "areaCode": "130821",
            "province": "河北省",
            "city": "承德市",
            "name": "承德县"
          },
          {
            "areaCode": "130822",
            "province": "河北省",
            "city": "承德市",
            "name": "兴隆县"
          },
          {
            "areaCode": "130824",
            "province": "河北省",
            "city": "承德市",
            "name": "滦平县"
          },
          {
            "areaCode": "130825",
            "province": "河北省",
            "city": "承德市",
            "name": "隆化县"
          },
          {
            "areaCode": "130826",
            "province": "河北省",
            "city": "承德市",
            "name": "丰宁满族自治县"
          },
          {
            "areaCode": "130827",
            "province": "河北省",
            "city": "承德市",
            "name": "宽城满族自治县"
          },
          {
            "areaCode": "130828",
            "province": "河北省",
            "city": "承德市",
            "name": "围场满族蒙古族自治县"
          },
          {
            "areaCode": "130871",
            "province": "河北省",
            "city": "承德市",
            "name": "承德高新技术产业开发区"
          },
          {
            "areaCode": "130881",
            "province": "河北省",
            "city": "承德市",
            "name": "平泉市"
          }
        ],
        "name": "承德市",
        "base": "chengde"
      },
      {
        "areaCode": "1309",
        "province": "河北省",
        "district": [
          {
            "areaCode": "130902",
            "province": "河北省",
            "city": "沧州市",
            "name": "新华区"
          },
          {
            "areaCode": "130903",
            "province": "河北省",
            "city": "沧州市",
            "name": "运河区"
          },
          {
            "areaCode": "130921",
            "province": "河北省",
            "city": "沧州市",
            "name": "沧县"
          },
          {
            "areaCode": "130922",
            "province": "河北省",
            "city": "沧州市",
            "name": "青县"
          },
          {
            "areaCode": "130923",
            "province": "河北省",
            "city": "沧州市",
            "name": "东光县"
          },
          {
            "areaCode": "130924",
            "province": "河北省",
            "city": "沧州市",
            "name": "海兴县"
          },
          {
            "areaCode": "130925",
            "province": "河北省",
            "city": "沧州市",
            "name": "盐山县"
          },
          {
            "areaCode": "130926",
            "province": "河北省",
            "city": "沧州市",
            "name": "肃宁县"
          },
          {
            "areaCode": "130927",
            "province": "河北省",
            "city": "沧州市",
            "name": "南皮县"
          },
          {
            "areaCode": "130928",
            "province": "河北省",
            "city": "沧州市",
            "name": "吴桥县"
          },
          {
            "areaCode": "130929",
            "province": "河北省",
            "city": "沧州市",
            "name": "献县"
          },
          {
            "areaCode": "130930",
            "province": "河北省",
            "city": "沧州市",
            "name": "孟村回族自治县"
          },
          {
            "areaCode": "130971",
            "province": "河北省",
            "city": "沧州市",
            "name": "河北沧州经济开发区"
          },
          {
            "areaCode": "130972",
            "province": "河北省",
            "city": "沧州市",
            "name": "沧州高新技术产业开发区"
          },
          {
            "areaCode": "130973",
            "province": "河北省",
            "city": "沧州市",
            "name": "沧州渤海新区"
          },
          {
            "areaCode": "130981",
            "province": "河北省",
            "city": "沧州市",
            "name": "泊头市"
          },
          {
            "areaCode": "130982",
            "province": "河北省",
            "city": "沧州市",
            "name": "任丘市"
          },
          {
            "areaCode": "130983",
            "province": "河北省",
            "city": "沧州市",
            "name": "黄骅市"
          },
          {
            "areaCode": "130984",
            "province": "河北省",
            "city": "沧州市",
            "name": "河间市"
          }
        ],
        "name": "沧州市",
        "base": "cangzhou"
      },
      {
        "areaCode": "1310",
        "province": "河北省",
        "district": [
          {
            "areaCode": "131002",
            "province": "河北省",
            "city": "廊坊市",
            "name": "安次区"
          },
          {
            "areaCode": "131003",
            "province": "河北省",
            "city": "廊坊市",
            "name": "广阳区"
          },
          {
            "areaCode": "131022",
            "province": "河北省",
            "city": "廊坊市",
            "name": "固安县"
          },
          {
            "areaCode": "131023",
            "province": "河北省",
            "city": "廊坊市",
            "name": "永清县"
          },
          {
            "areaCode": "131024",
            "province": "河北省",
            "city": "廊坊市",
            "name": "香河县"
          },
          {
            "areaCode": "131025",
            "province": "河北省",
            "city": "廊坊市",
            "name": "大城县"
          },
          {
            "areaCode": "131026",
            "province": "河北省",
            "city": "廊坊市",
            "name": "文安县"
          },
          {
            "areaCode": "131028",
            "province": "河北省",
            "city": "廊坊市",
            "name": "大厂回族自治县"
          },
          {
            "areaCode": "131071",
            "province": "河北省",
            "city": "廊坊市",
            "name": "廊坊经济技术开发区"
          },
          {
            "areaCode": "131081",
            "province": "河北省",
            "city": "廊坊市",
            "name": "霸州市"
          },
          {
            "areaCode": "131082",
            "province": "河北省",
            "city": "廊坊市",
            "name": "三河市"
          }
        ],
        "name": "廊坊市",
        "base": "langfang"
      },
      {
        "areaCode": "1311",
        "province": "河北省",
        "district": [
          {
            "areaCode": "131102",
            "province": "河北省",
            "city": "衡水市",
            "name": "桃城区"
          },
          {
            "areaCode": "131103",
            "province": "河北省",
            "city": "衡水市",
            "name": "冀州区"
          },
          {
            "areaCode": "131121",
            "province": "河北省",
            "city": "衡水市",
            "name": "枣强县"
          },
          {
            "areaCode": "131122",
            "province": "河北省",
            "city": "衡水市",
            "name": "武邑县"
          },
          {
            "areaCode": "131123",
            "province": "河北省",
            "city": "衡水市",
            "name": "武强县"
          },
          {
            "areaCode": "131124",
            "province": "河北省",
            "city": "衡水市",
            "name": "饶阳县"
          },
          {
            "areaCode": "131125",
            "province": "河北省",
            "city": "衡水市",
            "name": "安平县"
          },
          {
            "areaCode": "131126",
            "province": "河北省",
            "city": "衡水市",
            "name": "故城县"
          },
          {
            "areaCode": "131127",
            "province": "河北省",
            "city": "衡水市",
            "name": "景县"
          },
          {
            "areaCode": "131128",
            "province": "河北省",
            "city": "衡水市",
            "name": "阜城县"
          },
          {
            "areaCode": "131172",
            "province": "河北省",
            "city": "衡水市",
            "name": "衡水滨湖新区"
          },
          {
            "areaCode": "131182",
            "province": "河北省",
            "city": "衡水市",
            "name": "深州市"
          },
          {
            "areaCode": "131171",
            "province": "河北省",
            "city": "衡水市",
            "name": "河北衡水高新技术产业开发区"
          }
        ],
        "name": "衡水市",
        "base": "hengshui"
      }
    ],
    "name": "河北省",
    "base": "heb"
  },
  {
    "areaCode": "14",
    "city": [
      {
        "areaCode": "1401",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140105",
            "province": "山西省",
            "city": "太原市",
            "name": "小店区"
          },
          {
            "areaCode": "140106",
            "province": "山西省",
            "city": "太原市",
            "name": "迎泽区"
          },
          {
            "areaCode": "140107",
            "province": "山西省",
            "city": "太原市",
            "name": "杏花岭区"
          },
          {
            "areaCode": "140108",
            "province": "山西省",
            "city": "太原市",
            "name": "尖草坪区"
          },
          {
            "areaCode": "140109",
            "province": "山西省",
            "city": "太原市",
            "name": "万柏林区"
          },
          {
            "areaCode": "140110",
            "province": "山西省",
            "city": "太原市",
            "name": "晋源区"
          },
          {
            "areaCode": "140121",
            "province": "山西省",
            "city": "太原市",
            "name": "清徐县"
          },
          {
            "areaCode": "140122",
            "province": "山西省",
            "city": "太原市",
            "name": "阳曲县"
          },
          {
            "areaCode": "140123",
            "province": "山西省",
            "city": "太原市",
            "name": "娄烦县"
          },
          {
            "areaCode": "140171",
            "province": "山西省",
            "city": "太原市",
            "name": "山西转型综合改革示范区"
          },
          {
            "areaCode": "140181",
            "province": "山西省",
            "city": "太原市",
            "name": "古交市"
          }
        ],
        "name": "太原市",
        "base": "taiyuan"
      },
      {
        "areaCode": "1402",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140212",
            "province": "山西省",
            "city": "大同市",
            "name": "新荣区"
          },
          {
            "areaCode": "140221",
            "province": "山西省",
            "city": "大同市",
            "name": "阳高县"
          },
          {
            "areaCode": "140222",
            "province": "山西省",
            "city": "大同市",
            "name": "天镇县"
          },
          {
            "areaCode": "140223",
            "province": "山西省",
            "city": "大同市",
            "name": "广灵县"
          },
          {
            "areaCode": "140224",
            "province": "山西省",
            "city": "大同市",
            "name": "灵丘县"
          },
          {
            "areaCode": "140225",
            "province": "山西省",
            "city": "大同市",
            "name": "浑源县"
          },
          {
            "areaCode": "140226",
            "province": "山西省",
            "city": "大同市",
            "name": "左云县"
          },
          {
            "areaCode": "140271",
            "province": "山西省",
            "city": "大同市",
            "name": "山西大同经济开发区"
          },
          {
            "areaCode": "140214",
            "province": "山西省",
            "city": "大同市",
            "name": "云冈区"
          },
          {
            "areaCode": "140215",
            "province": "山西省",
            "city": "大同市",
            "name": "云州区"
          },
          {
            "areaCode": "140213",
            "province": "山西省",
            "city": "大同市",
            "name": "平城区"
          }
        ],
        "name": "大同市",
        "base": "datong"
      },
      {
        "areaCode": "1403",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140302",
            "province": "山西省",
            "city": "阳泉市",
            "name": "城区"
          },
          {
            "areaCode": "140303",
            "province": "山西省",
            "city": "阳泉市",
            "name": "矿区"
          },
          {
            "areaCode": "140311",
            "province": "山西省",
            "city": "阳泉市",
            "name": "郊区"
          },
          {
            "areaCode": "140321",
            "province": "山西省",
            "city": "阳泉市",
            "name": "平定县"
          },
          {
            "areaCode": "140322",
            "province": "山西省",
            "city": "阳泉市",
            "name": "盂县"
          }
        ],
        "name": "阳泉市",
        "base": "yangquan"
      },
      {
        "areaCode": "1404",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140423",
            "province": "山西省",
            "city": "长治市",
            "name": "襄垣县"
          },
          {
            "areaCode": "140425",
            "province": "山西省",
            "city": "长治市",
            "name": "平顺县"
          },
          {
            "areaCode": "140426",
            "province": "山西省",
            "city": "长治市",
            "name": "黎城县"
          },
          {
            "areaCode": "140427",
            "province": "山西省",
            "city": "长治市",
            "name": "壶关县"
          },
          {
            "areaCode": "140428",
            "province": "山西省",
            "city": "长治市",
            "name": "长子县"
          },
          {
            "areaCode": "140429",
            "province": "山西省",
            "city": "长治市",
            "name": "武乡县"
          },
          {
            "areaCode": "140430",
            "province": "山西省",
            "city": "长治市",
            "name": "沁县"
          },
          {
            "areaCode": "140431",
            "province": "山西省",
            "city": "长治市",
            "name": "沁源县"
          },
          {
            "areaCode": "140471",
            "province": "山西省",
            "city": "长治市",
            "name": "山西长治高新技术产业园区"
          },
          {
            "areaCode": "140405",
            "province": "山西省",
            "city": "长治市",
            "name": "屯留区"
          },
          {
            "areaCode": "140404",
            "province": "山西省",
            "city": "长治市",
            "name": "上党区"
          },
          {
            "areaCode": "140406",
            "province": "山西省",
            "city": "长治市",
            "name": "潞城区"
          },
          {
            "areaCode": "140403",
            "province": "山西省",
            "city": "长治市",
            "name": "潞州区"
          }
        ],
        "name": "长治市",
        "base": "zhangzhi"
      },
      {
        "areaCode": "1405",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140502",
            "province": "山西省",
            "city": "晋城市",
            "name": "城区"
          },
          {
            "areaCode": "140521",
            "province": "山西省",
            "city": "晋城市",
            "name": "沁水县"
          },
          {
            "areaCode": "140522",
            "province": "山西省",
            "city": "晋城市",
            "name": "阳城县"
          },
          {
            "areaCode": "140524",
            "province": "山西省",
            "city": "晋城市",
            "name": "陵川县"
          },
          {
            "areaCode": "140525",
            "province": "山西省",
            "city": "晋城市",
            "name": "泽州县"
          },
          {
            "areaCode": "140581",
            "province": "山西省",
            "city": "晋城市",
            "name": "高平市"
          }
        ],
        "name": "晋城市",
        "base": "jincheng"
      },
      {
        "areaCode": "1406",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140602",
            "province": "山西省",
            "city": "朔州市",
            "name": "朔城区"
          },
          {
            "areaCode": "140603",
            "province": "山西省",
            "city": "朔州市",
            "name": "平鲁区"
          },
          {
            "areaCode": "140621",
            "province": "山西省",
            "city": "朔州市",
            "name": "山阴县"
          },
          {
            "areaCode": "140622",
            "province": "山西省",
            "city": "朔州市",
            "name": "应县"
          },
          {
            "areaCode": "140623",
            "province": "山西省",
            "city": "朔州市",
            "name": "右玉县"
          },
          {
            "areaCode": "140671",
            "province": "山西省",
            "city": "朔州市",
            "name": "山西朔州经济开发区"
          },
          {
            "areaCode": "140681",
            "province": "山西省",
            "city": "朔州市",
            "name": "怀仁市"
          }
        ],
        "name": "朔州市",
        "base": "shuozhou"
      },
      {
        "areaCode": "1407",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140702",
            "province": "山西省",
            "city": "晋中市",
            "name": "榆次区"
          },
          {
            "areaCode": "140721",
            "province": "山西省",
            "city": "晋中市",
            "name": "榆社县"
          },
          {
            "areaCode": "140722",
            "province": "山西省",
            "city": "晋中市",
            "name": "左权县"
          },
          {
            "areaCode": "140723",
            "province": "山西省",
            "city": "晋中市",
            "name": "和顺县"
          },
          {
            "areaCode": "140724",
            "province": "山西省",
            "city": "晋中市",
            "name": "昔阳县"
          },
          {
            "areaCode": "140725",
            "province": "山西省",
            "city": "晋中市",
            "name": "寿阳县"
          },
          {
            "areaCode": "140726",
            "province": "山西省",
            "city": "晋中市",
            "name": "太谷县"
          },
          {
            "areaCode": "140727",
            "province": "山西省",
            "city": "晋中市",
            "name": "祁县"
          },
          {
            "areaCode": "140728",
            "province": "山西省",
            "city": "晋中市",
            "name": "平遥县"
          },
          {
            "areaCode": "140729",
            "province": "山西省",
            "city": "晋中市",
            "name": "灵石县"
          },
          {
            "areaCode": "140781",
            "province": "山西省",
            "city": "晋中市",
            "name": "介休市"
          }
        ],
        "name": "晋中市",
        "base": "jinzhong"
      },
      {
        "areaCode": "1408",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140802",
            "province": "山西省",
            "city": "运城市",
            "name": "盐湖区"
          },
          {
            "areaCode": "140821",
            "province": "山西省",
            "city": "运城市",
            "name": "临猗县"
          },
          {
            "areaCode": "140822",
            "province": "山西省",
            "city": "运城市",
            "name": "万荣县"
          },
          {
            "areaCode": "140823",
            "province": "山西省",
            "city": "运城市",
            "name": "闻喜县"
          },
          {
            "areaCode": "140824",
            "province": "山西省",
            "city": "运城市",
            "name": "稷山县"
          },
          {
            "areaCode": "140825",
            "province": "山西省",
            "city": "运城市",
            "name": "新绛县"
          },
          {
            "areaCode": "140826",
            "province": "山西省",
            "city": "运城市",
            "name": "绛县"
          },
          {
            "areaCode": "140827",
            "province": "山西省",
            "city": "运城市",
            "name": "垣曲县"
          },
          {
            "areaCode": "140828",
            "province": "山西省",
            "city": "运城市",
            "name": "夏县"
          },
          {
            "areaCode": "140829",
            "province": "山西省",
            "city": "运城市",
            "name": "平陆县"
          },
          {
            "areaCode": "140830",
            "province": "山西省",
            "city": "运城市",
            "name": "芮城县"
          },
          {
            "areaCode": "140881",
            "province": "山西省",
            "city": "运城市",
            "name": "永济市"
          },
          {
            "areaCode": "140882",
            "province": "山西省",
            "city": "运城市",
            "name": "河津市"
          }
        ],
        "name": "运城市",
        "base": "yuncheng"
      },
      {
        "areaCode": "1409",
        "province": "山西省",
        "district": [
          {
            "areaCode": "140902",
            "province": "山西省",
            "city": "忻州市",
            "name": "忻府区"
          },
          {
            "areaCode": "140921",
            "province": "山西省",
            "city": "忻州市",
            "name": "定襄县"
          },
          {
            "areaCode": "140922",
            "province": "山西省",
            "city": "忻州市",
            "name": "五台县"
          },
          {
            "areaCode": "140923",
            "province": "山西省",
            "city": "忻州市",
            "name": "代县"
          },
          {
            "areaCode": "140924",
            "province": "山西省",
            "city": "忻州市",
            "name": "繁峙县"
          },
          {
            "areaCode": "140925",
            "province": "山西省",
            "city": "忻州市",
            "name": "宁武县"
          },
          {
            "areaCode": "140926",
            "province": "山西省",
            "city": "忻州市",
            "name": "静乐县"
          },
          {
            "areaCode": "140927",
            "province": "山西省",
            "city": "忻州市",
            "name": "神池县"
          },
          {
            "areaCode": "140928",
            "province": "山西省",
            "city": "忻州市",
            "name": "五寨县"
          },
          {
            "areaCode": "140929",
            "province": "山西省",
            "city": "忻州市",
            "name": "岢岚县"
          },
          {
            "areaCode": "140930",
            "province": "山西省",
            "city": "忻州市",
            "name": "河曲县"
          },
          {
            "areaCode": "140931",
            "province": "山西省",
            "city": "忻州市",
            "name": "保德县"
          },
          {
            "areaCode": "140932",
            "province": "山西省",
            "city": "忻州市",
            "name": "偏关县"
          },
          {
            "areaCode": "140971",
            "province": "山西省",
            "city": "忻州市",
            "name": "五台山风景名胜区"
          },
          {
            "areaCode": "140981",
            "province": "山西省",
            "city": "忻州市",
            "name": "原平市"
          }
        ],
        "name": "忻州市",
        "base": "xinzhou"
      },
      {
        "areaCode": "1410",
        "province": "山西省",
        "district": [
          {
            "areaCode": "141002",
            "province": "山西省",
            "city": "临汾市",
            "name": "尧都区"
          },
          {
            "areaCode": "141021",
            "province": "山西省",
            "city": "临汾市",
            "name": "曲沃县"
          },
          {
            "areaCode": "141022",
            "province": "山西省",
            "city": "临汾市",
            "name": "翼城县"
          },
          {
            "areaCode": "141023",
            "province": "山西省",
            "city": "临汾市",
            "name": "襄汾县"
          },
          {
            "areaCode": "141024",
            "province": "山西省",
            "city": "临汾市",
            "name": "洪洞县"
          },
          {
            "areaCode": "141025",
            "province": "山西省",
            "city": "临汾市",
            "name": "古县"
          },
          {
            "areaCode": "141026",
            "province": "山西省",
            "city": "临汾市",
            "name": "安泽县"
          },
          {
            "areaCode": "141027",
            "province": "山西省",
            "city": "临汾市",
            "name": "浮山县"
          },
          {
            "areaCode": "141028",
            "province": "山西省",
            "city": "临汾市",
            "name": "吉县"
          },
          {
            "areaCode": "141029",
            "province": "山西省",
            "city": "临汾市",
            "name": "乡宁县"
          },
          {
            "areaCode": "141030",
            "province": "山西省",
            "city": "临汾市",
            "name": "大宁县"
          },
          {
            "areaCode": "141031",
            "province": "山西省",
            "city": "临汾市",
            "name": "隰县"
          },
          {
            "areaCode": "141032",
            "province": "山西省",
            "city": "临汾市",
            "name": "永和县"
          },
          {
            "areaCode": "141033",
            "province": "山西省",
            "city": "临汾市",
            "name": "蒲县"
          },
          {
            "areaCode": "141034",
            "province": "山西省",
            "city": "临汾市",
            "name": "汾西县"
          },
          {
            "areaCode": "141081",
            "province": "山西省",
            "city": "临汾市",
            "name": "侯马市"
          },
          {
            "areaCode": "141082",
            "province": "山西省",
            "city": "临汾市",
            "name": "霍州市"
          }
        ],
        "name": "临汾市",
        "base": "linfen"
      },
      {
        "areaCode": "1411",
        "province": "山西省",
        "district": [
          {
            "areaCode": "141102",
            "province": "山西省",
            "city": "吕梁市",
            "name": "离石区"
          },
          {
            "areaCode": "141121",
            "province": "山西省",
            "city": "吕梁市",
            "name": "文水县"
          },
          {
            "areaCode": "141122",
            "province": "山西省",
            "city": "吕梁市",
            "name": "交城县"
          },
          {
            "areaCode": "141123",
            "province": "山西省",
            "city": "吕梁市",
            "name": "兴县"
          },
          {
            "areaCode": "141124",
            "province": "山西省",
            "city": "吕梁市",
            "name": "临县"
          },
          {
            "areaCode": "141125",
            "province": "山西省",
            "city": "吕梁市",
            "name": "柳林县"
          },
          {
            "areaCode": "141126",
            "province": "山西省",
            "city": "吕梁市",
            "name": "石楼县"
          },
          {
            "areaCode": "141127",
            "province": "山西省",
            "city": "吕梁市",
            "name": "岚县"
          },
          {
            "areaCode": "141128",
            "province": "山西省",
            "city": "吕梁市",
            "name": "方山县"
          },
          {
            "areaCode": "141129",
            "province": "山西省",
            "city": "吕梁市",
            "name": "中阳县"
          },
          {
            "areaCode": "141130",
            "province": "山西省",
            "city": "吕梁市",
            "name": "交口县"
          },
          {
            "areaCode": "141181",
            "province": "山西省",
            "city": "吕梁市",
            "name": "孝义市"
          },
          {
            "areaCode": "141182",
            "province": "山西省",
            "city": "吕梁市",
            "name": "汾阳市"
          }
        ],
        "name": "吕梁市",
        "base": "lvliang"
      }
    ],
    "name": "山西省",
    "base": "sx"
  },
  {
    "areaCode": "15",
    "city": [
      {
        "areaCode": "1501",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150102",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "新城区"
          },
          {
            "areaCode": "150103",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "回民区"
          },
          {
            "areaCode": "150104",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "玉泉区"
          },
          {
            "areaCode": "150105",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "赛罕区"
          },
          {
            "areaCode": "150121",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "土默特左旗"
          },
          {
            "areaCode": "150122",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "托克托县"
          },
          {
            "areaCode": "150123",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "和林格尔县"
          },
          {
            "areaCode": "150124",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "清水河县"
          },
          {
            "areaCode": "150125",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "武川县"
          },
          {
            "areaCode": "150171",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "呼和浩特金海工业园区"
          },
          {
            "areaCode": "150172",
            "province": "内蒙古自治区",
            "city": "呼和浩特市",
            "name": "呼和浩特经济技术开发区"
          }
        ],
        "name": "呼和浩特市",
        "base": "hhht"
      },
      {
        "areaCode": "1502",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150202",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "东河区"
          },
          {
            "areaCode": "150203",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "昆都仑区"
          },
          {
            "areaCode": "150204",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "青山区"
          },
          {
            "areaCode": "150205",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "石拐区"
          },
          {
            "areaCode": "150206",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "白云鄂博矿区"
          },
          {
            "areaCode": "150207",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "九原区"
          },
          {
            "areaCode": "150221",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "土默特右旗"
          },
          {
            "areaCode": "150222",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "固阳县"
          },
          {
            "areaCode": "150223",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "达尔罕茂明安联合旗"
          },
          {
            "areaCode": "150271",
            "province": "内蒙古自治区",
            "city": "包头市",
            "name": "包头稀土高新技术产业开发区"
          }
        ],
        "name": "包头市",
        "base": "baotou"
      },
      {
        "areaCode": "1503",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150302",
            "province": "内蒙古自治区",
            "city": "乌海市",
            "name": "海勃湾区"
          },
          {
            "areaCode": "150303",
            "province": "内蒙古自治区",
            "city": "乌海市",
            "name": "海南区"
          },
          {
            "areaCode": "150304",
            "province": "内蒙古自治区",
            "city": "乌海市",
            "name": "乌达区"
          }
        ],
        "name": "乌海市",
        "base": "wuhai"
      },
      {
        "areaCode": "1504",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150402",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "红山区"
          },
          {
            "areaCode": "150403",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "元宝山区"
          },
          {
            "areaCode": "150404",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "松山区"
          },
          {
            "areaCode": "150421",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "阿鲁科尔沁旗"
          },
          {
            "areaCode": "150422",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "巴林左旗"
          },
          {
            "areaCode": "150423",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "巴林右旗"
          },
          {
            "areaCode": "150424",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "林西县"
          },
          {
            "areaCode": "150425",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "克什克腾旗"
          },
          {
            "areaCode": "150426",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "翁牛特旗"
          },
          {
            "areaCode": "150428",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "喀喇沁旗"
          },
          {
            "areaCode": "150429",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "宁城县"
          },
          {
            "areaCode": "150430",
            "province": "内蒙古自治区",
            "city": "赤峰市",
            "name": "敖汉旗"
          }
        ],
        "name": "赤峰市",
        "base": "chifeng"
      },
      {
        "areaCode": "1505",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150502",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "科尔沁区"
          },
          {
            "areaCode": "150521",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "科尔沁左翼中旗"
          },
          {
            "areaCode": "150522",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "科尔沁左翼后旗"
          },
          {
            "areaCode": "150523",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "开鲁县"
          },
          {
            "areaCode": "150524",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "库伦旗"
          },
          {
            "areaCode": "150525",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "奈曼旗"
          },
          {
            "areaCode": "150526",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "扎鲁特旗"
          },
          {
            "areaCode": "150571",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "通辽经济技术开发区"
          },
          {
            "areaCode": "150581",
            "province": "内蒙古自治区",
            "city": "通辽市",
            "name": "霍林郭勒市"
          }
        ],
        "name": "通辽市",
        "base": "tongliao"
      },
      {
        "areaCode": "1506",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150602",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "东胜区"
          },
          {
            "areaCode": "150603",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "康巴什区"
          },
          {
            "areaCode": "150621",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "达拉特旗"
          },
          {
            "areaCode": "150622",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "准格尔旗"
          },
          {
            "areaCode": "150623",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "鄂托克前旗"
          },
          {
            "areaCode": "150624",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "鄂托克旗"
          },
          {
            "areaCode": "150625",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "杭锦旗"
          },
          {
            "areaCode": "150626",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "乌审旗"
          },
          {
            "areaCode": "150627",
            "province": "内蒙古自治区",
            "city": "鄂尔多斯市",
            "name": "伊金霍洛旗"
          }
        ],
        "name": "鄂尔多斯市",
        "base": "eeds"
      },
      {
        "areaCode": "1507",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150702",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "海拉尔区"
          },
          {
            "areaCode": "150703",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "扎赉诺尔区"
          },
          {
            "areaCode": "150721",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "阿荣旗"
          },
          {
            "areaCode": "150722",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "莫力达瓦达斡尔族自治旗"
          },
          {
            "areaCode": "150723",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "鄂伦春自治旗"
          },
          {
            "areaCode": "150724",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "鄂温克族自治旗"
          },
          {
            "areaCode": "150725",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "陈巴尔虎旗"
          },
          {
            "areaCode": "150726",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "新巴尔虎左旗"
          },
          {
            "areaCode": "150727",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "新巴尔虎右旗"
          },
          {
            "areaCode": "150781",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "满洲里市"
          },
          {
            "areaCode": "150782",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "牙克石市"
          },
          {
            "areaCode": "150783",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "扎兰屯市"
          },
          {
            "areaCode": "150784",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "额尔古纳市"
          },
          {
            "areaCode": "150785",
            "province": "内蒙古自治区",
            "city": "呼伦贝尔市",
            "name": "根河市"
          }
        ],
        "name": "呼伦贝尔市",
        "base": "hlbe"
      },
      {
        "areaCode": "1508",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150802",
            "province": "内蒙古自治区",
            "city": "巴彦淖尔市",
            "name": "临河区"
          },
          {
            "areaCode": "150821",
            "province": "内蒙古自治区",
            "city": "巴彦淖尔市",
            "name": "五原县"
          },
          {
            "areaCode": "150822",
            "province": "内蒙古自治区",
            "city": "巴彦淖尔市",
            "name": "磴口县"
          },
          {
            "areaCode": "150823",
            "province": "内蒙古自治区",
            "city": "巴彦淖尔市",
            "name": "乌拉特前旗"
          },
          {
            "areaCode": "150824",
            "province": "内蒙古自治区",
            "city": "巴彦淖尔市",
            "name": "乌拉特中旗"
          },
          {
            "areaCode": "150825",
            "province": "内蒙古自治区",
            "city": "巴彦淖尔市",
            "name": "乌拉特后旗"
          },
          {
            "areaCode": "150826",
            "province": "内蒙古自治区",
            "city": "巴彦淖尔市",
            "name": "杭锦后旗"
          }
        ],
        "name": "巴彦淖尔市",
        "base": "byne"
      },
      {
        "areaCode": "1509",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "150902",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "集宁区"
          },
          {
            "areaCode": "150921",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "卓资县"
          },
          {
            "areaCode": "150922",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "化德县"
          },
          {
            "areaCode": "150923",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "商都县"
          },
          {
            "areaCode": "150924",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "兴和县"
          },
          {
            "areaCode": "150925",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "凉城县"
          },
          {
            "areaCode": "150926",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "察哈尔右翼前旗"
          },
          {
            "areaCode": "150927",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "察哈尔右翼中旗"
          },
          {
            "areaCode": "150928",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "察哈尔右翼后旗"
          },
          {
            "areaCode": "150929",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "四子王旗"
          },
          {
            "areaCode": "150981",
            "province": "内蒙古自治区",
            "city": "乌兰察布市",
            "name": "丰镇市"
          }
        ],
        "name": "乌兰察布市",
        "base": "wlcb"
      },
      {
        "areaCode": "1522",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "152201",
            "province": "内蒙古自治区",
            "city": "兴安盟",
            "name": "乌兰浩特市"
          },
          {
            "areaCode": "152202",
            "province": "内蒙古自治区",
            "city": "兴安盟",
            "name": "阿尔山市"
          },
          {
            "areaCode": "152221",
            "province": "内蒙古自治区",
            "city": "兴安盟",
            "name": "科尔沁右翼前旗"
          },
          {
            "areaCode": "152222",
            "province": "内蒙古自治区",
            "city": "兴安盟",
            "name": "科尔沁右翼中旗"
          },
          {
            "areaCode": "152223",
            "province": "内蒙古自治区",
            "city": "兴安盟",
            "name": "扎赉特旗"
          },
          {
            "areaCode": "152224",
            "province": "内蒙古自治区",
            "city": "兴安盟",
            "name": "突泉县"
          }
        ],
        "name": "兴安盟",
        "base": "xam"
      },
      {
        "areaCode": "1525",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "152501",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "二连浩特市"
          },
          {
            "areaCode": "152502",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "锡林浩特市"
          },
          {
            "areaCode": "152522",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "阿巴嘎旗"
          },
          {
            "areaCode": "152523",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "苏尼特左旗"
          },
          {
            "areaCode": "152524",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "苏尼特右旗"
          },
          {
            "areaCode": "152525",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "东乌珠穆沁旗"
          },
          {
            "areaCode": "152526",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "西乌珠穆沁旗"
          },
          {
            "areaCode": "152527",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "太仆寺旗"
          },
          {
            "areaCode": "152528",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "镶黄旗"
          },
          {
            "areaCode": "152529",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "正镶白旗"
          },
          {
            "areaCode": "152530",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "正蓝旗"
          },
          {
            "areaCode": "152531",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "多伦县"
          },
          {
            "areaCode": "152571",
            "province": "内蒙古自治区",
            "city": "锡林郭勒盟",
            "name": "乌拉盖管委会"
          }
        ],
        "name": "锡林郭勒盟",
        "base": "xlglm"
      },
      {
        "areaCode": "1529",
        "province": "内蒙古自治区",
        "district": [
          {
            "areaCode": "152921",
            "province": "内蒙古自治区",
            "city": "阿拉善盟",
            "name": "阿拉善左旗"
          },
          {
            "areaCode": "152922",
            "province": "内蒙古自治区",
            "city": "阿拉善盟",
            "name": "阿拉善右旗"
          },
          {
            "areaCode": "152923",
            "province": "内蒙古自治区",
            "city": "阿拉善盟",
            "name": "额济纳旗"
          },
          {
            "areaCode": "152971",
            "province": "内蒙古自治区",
            "city": "阿拉善盟",
            "name": "内蒙古阿拉善经济开发区"
          }
        ],
        "name": "阿拉善盟",
        "base": "alsm"
      }
    ],
    "name": "内蒙古自治区",
    "base": "nmg"
  },
  {
    "areaCode": "21",
    "city": [
      {
        "areaCode": "2101",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210102",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "和平区"
          },
          {
            "areaCode": "210103",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "沈河区"
          },
          {
            "areaCode": "210104",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "大东区"
          },
          {
            "areaCode": "210105",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "皇姑区"
          },
          {
            "areaCode": "210106",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "铁西区"
          },
          {
            "areaCode": "210111",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "苏家屯区"
          },
          {
            "areaCode": "210112",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "浑南区"
          },
          {
            "areaCode": "210113",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "沈北新区"
          },
          {
            "areaCode": "210114",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "于洪区"
          },
          {
            "areaCode": "210115",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "辽中区"
          },
          {
            "areaCode": "210123",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "康平县"
          },
          {
            "areaCode": "210124",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "法库县"
          },
          {
            "areaCode": "210181",
            "province": "辽宁省",
            "city": "沈阳市",
            "name": "新民市"
          }
        ],
        "name": "沈阳市",
        "base": "shenyang"
      },
      {
        "areaCode": "2102",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210202",
            "province": "辽宁省",
            "city": "大连市",
            "name": "中山区"
          },
          {
            "areaCode": "210203",
            "province": "辽宁省",
            "city": "大连市",
            "name": "西岗区"
          },
          {
            "areaCode": "210204",
            "province": "辽宁省",
            "city": "大连市",
            "name": "沙河口区"
          },
          {
            "areaCode": "210211",
            "province": "辽宁省",
            "city": "大连市",
            "name": "甘井子区"
          },
          {
            "areaCode": "210212",
            "province": "辽宁省",
            "city": "大连市",
            "name": "旅顺口区"
          },
          {
            "areaCode": "210213",
            "province": "辽宁省",
            "city": "大连市",
            "name": "金州区"
          },
          {
            "areaCode": "210214",
            "province": "辽宁省",
            "city": "大连市",
            "name": "普兰店区"
          },
          {
            "areaCode": "210224",
            "province": "辽宁省",
            "city": "大连市",
            "name": "长海县"
          },
          {
            "areaCode": "210281",
            "province": "辽宁省",
            "city": "大连市",
            "name": "瓦房店市"
          },
          {
            "areaCode": "210283",
            "province": "辽宁省",
            "city": "大连市",
            "name": "庄河市"
          }
        ],
        "name": "大连市",
        "base": "dalian"
      },
      {
        "areaCode": "2103",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210302",
            "province": "辽宁省",
            "city": "鞍山市",
            "name": "铁东区"
          },
          {
            "areaCode": "210303",
            "province": "辽宁省",
            "city": "鞍山市",
            "name": "铁西区"
          },
          {
            "areaCode": "210304",
            "province": "辽宁省",
            "city": "鞍山市",
            "name": "立山区"
          },
          {
            "areaCode": "210311",
            "province": "辽宁省",
            "city": "鞍山市",
            "name": "千山区"
          },
          {
            "areaCode": "210321",
            "province": "辽宁省",
            "city": "鞍山市",
            "name": "台安县"
          },
          {
            "areaCode": "210323",
            "province": "辽宁省",
            "city": "鞍山市",
            "name": "岫岩满族自治县"
          },
          {
            "areaCode": "210381",
            "province": "辽宁省",
            "city": "鞍山市",
            "name": "海城市"
          }
        ],
        "name": "鞍山市",
        "base": "anshan"
      },
      {
        "areaCode": "2104",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210402",
            "province": "辽宁省",
            "city": "抚顺市",
            "name": "新抚区"
          },
          {
            "areaCode": "210403",
            "province": "辽宁省",
            "city": "抚顺市",
            "name": "东洲区"
          },
          {
            "areaCode": "210404",
            "province": "辽宁省",
            "city": "抚顺市",
            "name": "望花区"
          },
          {
            "areaCode": "210411",
            "province": "辽宁省",
            "city": "抚顺市",
            "name": "顺城区"
          },
          {
            "areaCode": "210421",
            "province": "辽宁省",
            "city": "抚顺市",
            "name": "抚顺县"
          },
          {
            "areaCode": "210422",
            "province": "辽宁省",
            "city": "抚顺市",
            "name": "新宾满族自治县"
          },
          {
            "areaCode": "210423",
            "province": "辽宁省",
            "city": "抚顺市",
            "name": "清原满族自治县"
          }
        ],
        "name": "抚顺市",
        "base": "fushun"
      },
      {
        "areaCode": "2105",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210502",
            "province": "辽宁省",
            "city": "本溪市",
            "name": "平山区"
          },
          {
            "areaCode": "210503",
            "province": "辽宁省",
            "city": "本溪市",
            "name": "溪湖区"
          },
          {
            "areaCode": "210504",
            "province": "辽宁省",
            "city": "本溪市",
            "name": "明山区"
          },
          {
            "areaCode": "210505",
            "province": "辽宁省",
            "city": "本溪市",
            "name": "南芬区"
          },
          {
            "areaCode": "210521",
            "province": "辽宁省",
            "city": "本溪市",
            "name": "本溪满族自治县"
          },
          {
            "areaCode": "210522",
            "province": "辽宁省",
            "city": "本溪市",
            "name": "桓仁满族自治县"
          }
        ],
        "name": "本溪市",
        "base": "benxi"
      },
      {
        "areaCode": "2106",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210602",
            "province": "辽宁省",
            "city": "丹东市",
            "name": "元宝区"
          },
          {
            "areaCode": "210603",
            "province": "辽宁省",
            "city": "丹东市",
            "name": "振兴区"
          },
          {
            "areaCode": "210604",
            "province": "辽宁省",
            "city": "丹东市",
            "name": "振安区"
          },
          {
            "areaCode": "210624",
            "province": "辽宁省",
            "city": "丹东市",
            "name": "宽甸满族自治县"
          },
          {
            "areaCode": "210681",
            "province": "辽宁省",
            "city": "丹东市",
            "name": "东港市"
          },
          {
            "areaCode": "210682",
            "province": "辽宁省",
            "city": "丹东市",
            "name": "凤城市"
          }
        ],
        "name": "丹东市",
        "base": "dandong"
      },
      {
        "areaCode": "2107",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210702",
            "province": "辽宁省",
            "city": "锦州市",
            "name": "古塔区"
          },
          {
            "areaCode": "210703",
            "province": "辽宁省",
            "city": "锦州市",
            "name": "凌河区"
          },
          {
            "areaCode": "210711",
            "province": "辽宁省",
            "city": "锦州市",
            "name": "太和区"
          },
          {
            "areaCode": "210726",
            "province": "辽宁省",
            "city": "锦州市",
            "name": "黑山县"
          },
          {
            "areaCode": "210727",
            "province": "辽宁省",
            "city": "锦州市",
            "name": "义县"
          },
          {
            "areaCode": "210781",
            "province": "辽宁省",
            "city": "锦州市",
            "name": "凌海市"
          },
          {
            "areaCode": "210782",
            "province": "辽宁省",
            "city": "锦州市",
            "name": "北镇市"
          }
        ],
        "name": "锦州市",
        "base": "jinzhou"
      },
      {
        "areaCode": "2108",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210802",
            "province": "辽宁省",
            "city": "营口市",
            "name": "站前区"
          },
          {
            "areaCode": "210803",
            "province": "辽宁省",
            "city": "营口市",
            "name": "西市区"
          },
          {
            "areaCode": "210804",
            "province": "辽宁省",
            "city": "营口市",
            "name": "鲅鱼圈区"
          },
          {
            "areaCode": "210811",
            "province": "辽宁省",
            "city": "营口市",
            "name": "老边区"
          },
          {
            "areaCode": "210881",
            "province": "辽宁省",
            "city": "营口市",
            "name": "盖州市"
          },
          {
            "areaCode": "210882",
            "province": "辽宁省",
            "city": "营口市",
            "name": "大石桥市"
          }
        ],
        "name": "营口市",
        "base": "yingkou"
      },
      {
        "areaCode": "2109",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "210902",
            "province": "辽宁省",
            "city": "阜新市",
            "name": "海州区"
          },
          {
            "areaCode": "210903",
            "province": "辽宁省",
            "city": "阜新市",
            "name": "新邱区"
          },
          {
            "areaCode": "210904",
            "province": "辽宁省",
            "city": "阜新市",
            "name": "太平区"
          },
          {
            "areaCode": "210905",
            "province": "辽宁省",
            "city": "阜新市",
            "name": "清河门区"
          },
          {
            "areaCode": "210911",
            "province": "辽宁省",
            "city": "阜新市",
            "name": "细河区"
          },
          {
            "areaCode": "210921",
            "province": "辽宁省",
            "city": "阜新市",
            "name": "阜新蒙古族自治县"
          },
          {
            "areaCode": "210922",
            "province": "辽宁省",
            "city": "阜新市",
            "name": "彰武县"
          }
        ],
        "name": "阜新市",
        "base": "fuxin"
      },
      {
        "areaCode": "2110",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "211002",
            "province": "辽宁省",
            "city": "辽阳市",
            "name": "白塔区"
          },
          {
            "areaCode": "211003",
            "province": "辽宁省",
            "city": "辽阳市",
            "name": "文圣区"
          },
          {
            "areaCode": "211004",
            "province": "辽宁省",
            "city": "辽阳市",
            "name": "宏伟区"
          },
          {
            "areaCode": "211005",
            "province": "辽宁省",
            "city": "辽阳市",
            "name": "弓长岭区"
          },
          {
            "areaCode": "211011",
            "province": "辽宁省",
            "city": "辽阳市",
            "name": "太子河区"
          },
          {
            "areaCode": "211021",
            "province": "辽宁省",
            "city": "辽阳市",
            "name": "辽阳县"
          },
          {
            "areaCode": "211081",
            "province": "辽宁省",
            "city": "辽阳市",
            "name": "灯塔市"
          }
        ],
        "name": "辽阳市",
        "base": "liaoyang"
      },
      {
        "areaCode": "2111",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "211102",
            "province": "辽宁省",
            "city": "盘锦市",
            "name": "双台子区"
          },
          {
            "areaCode": "211103",
            "province": "辽宁省",
            "city": "盘锦市",
            "name": "兴隆台区"
          },
          {
            "areaCode": "211104",
            "province": "辽宁省",
            "city": "盘锦市",
            "name": "大洼区"
          },
          {
            "areaCode": "211122",
            "province": "辽宁省",
            "city": "盘锦市",
            "name": "盘山县"
          }
        ],
        "name": "盘锦市",
        "base": "panjin"
      },
      {
        "areaCode": "2112",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "211202",
            "province": "辽宁省",
            "city": "铁岭市",
            "name": "银州区"
          },
          {
            "areaCode": "211204",
            "province": "辽宁省",
            "city": "铁岭市",
            "name": "清河区"
          },
          {
            "areaCode": "211221",
            "province": "辽宁省",
            "city": "铁岭市",
            "name": "铁岭县"
          },
          {
            "areaCode": "211223",
            "province": "辽宁省",
            "city": "铁岭市",
            "name": "西丰县"
          },
          {
            "areaCode": "211224",
            "province": "辽宁省",
            "city": "铁岭市",
            "name": "昌图县"
          },
          {
            "areaCode": "211281",
            "province": "辽宁省",
            "city": "铁岭市",
            "name": "调兵山市"
          },
          {
            "areaCode": "211282",
            "province": "辽宁省",
            "city": "铁岭市",
            "name": "开原市"
          }
        ],
        "name": "铁岭市",
        "base": "tieling"
      },
      {
        "areaCode": "2113",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "211302",
            "province": "辽宁省",
            "city": "朝阳市",
            "name": "双塔区"
          },
          {
            "areaCode": "211303",
            "province": "辽宁省",
            "city": "朝阳市",
            "name": "龙城区"
          },
          {
            "areaCode": "211321",
            "province": "辽宁省",
            "city": "朝阳市",
            "name": "朝阳县"
          },
          {
            "areaCode": "211322",
            "province": "辽宁省",
            "city": "朝阳市",
            "name": "建平县"
          },
          {
            "areaCode": "211324",
            "province": "辽宁省",
            "city": "朝阳市",
            "name": "喀喇沁左翼蒙古族自治县"
          },
          {
            "areaCode": "211381",
            "province": "辽宁省",
            "city": "朝阳市",
            "name": "北票市"
          },
          {
            "areaCode": "211382",
            "province": "辽宁省",
            "city": "朝阳市",
            "name": "凌源市"
          }
        ],
        "name": "朝阳市",
        "base": "chaoyang"
      },
      {
        "areaCode": "2114",
        "province": "辽宁省",
        "district": [
          {
            "areaCode": "211402",
            "province": "辽宁省",
            "city": "葫芦岛市",
            "name": "连山区"
          },
          {
            "areaCode": "211403",
            "province": "辽宁省",
            "city": "葫芦岛市",
            "name": "龙港区"
          },
          {
            "areaCode": "211404",
            "province": "辽宁省",
            "city": "葫芦岛市",
            "name": "南票区"
          },
          {
            "areaCode": "211421",
            "province": "辽宁省",
            "city": "葫芦岛市",
            "name": "绥中县"
          },
          {
            "areaCode": "211422",
            "province": "辽宁省",
            "city": "葫芦岛市",
            "name": "建昌县"
          },
          {
            "areaCode": "211481",
            "province": "辽宁省",
            "city": "葫芦岛市",
            "name": "兴城市"
          }
        ],
        "name": "葫芦岛市",
        "base": "hld"
      }
    ],
    "name": "辽宁省",
    "base": "ln"
  },
  {
    "areaCode": "22",
    "city": [
      {
        "areaCode": "2201",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220102",
            "province": "吉林省",
            "city": "长春市",
            "name": "南关区"
          },
          {
            "areaCode": "220103",
            "province": "吉林省",
            "city": "长春市",
            "name": "宽城区"
          },
          {
            "areaCode": "220104",
            "province": "吉林省",
            "city": "长春市",
            "name": "朝阳区"
          },
          {
            "areaCode": "220105",
            "province": "吉林省",
            "city": "长春市",
            "name": "二道区"
          },
          {
            "areaCode": "220106",
            "province": "吉林省",
            "city": "长春市",
            "name": "绿园区"
          },
          {
            "areaCode": "220112",
            "province": "吉林省",
            "city": "长春市",
            "name": "双阳区"
          },
          {
            "areaCode": "220113",
            "province": "吉林省",
            "city": "长春市",
            "name": "九台区"
          },
          {
            "areaCode": "220122",
            "province": "吉林省",
            "city": "长春市",
            "name": "农安县"
          },
          {
            "areaCode": "220171",
            "province": "吉林省",
            "city": "长春市",
            "name": "长春经济技术开发区"
          },
          {
            "areaCode": "220172",
            "province": "吉林省",
            "city": "长春市",
            "name": "长春净月高新技术产业开发区"
          },
          {
            "areaCode": "220173",
            "province": "吉林省",
            "city": "长春市",
            "name": "长春高新技术产业开发区"
          },
          {
            "areaCode": "220174",
            "province": "吉林省",
            "city": "长春市",
            "name": "长春汽车经济技术开发区"
          },
          {
            "areaCode": "220182",
            "province": "吉林省",
            "city": "长春市",
            "name": "榆树市"
          },
          {
            "areaCode": "220183",
            "province": "吉林省",
            "city": "长春市",
            "name": "德惠市"
          }
        ],
        "name": "长春市",
        "base": "zhangchun"
      },
      {
        "areaCode": "2202",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220202",
            "province": "吉林省",
            "city": "吉林市",
            "name": "昌邑区"
          },
          {
            "areaCode": "220203",
            "province": "吉林省",
            "city": "吉林市",
            "name": "龙潭区"
          },
          {
            "areaCode": "220204",
            "province": "吉林省",
            "city": "吉林市",
            "name": "船营区"
          },
          {
            "areaCode": "220211",
            "province": "吉林省",
            "city": "吉林市",
            "name": "丰满区"
          },
          {
            "areaCode": "220221",
            "province": "吉林省",
            "city": "吉林市",
            "name": "永吉县"
          },
          {
            "areaCode": "220271",
            "province": "吉林省",
            "city": "吉林市",
            "name": "吉林经济开发区"
          },
          {
            "areaCode": "220272",
            "province": "吉林省",
            "city": "吉林市",
            "name": "吉林高新技术产业开发区"
          },
          {
            "areaCode": "220273",
            "province": "吉林省",
            "city": "吉林市",
            "name": "吉林中国新加坡食品区"
          },
          {
            "areaCode": "220281",
            "province": "吉林省",
            "city": "吉林市",
            "name": "蛟河市"
          },
          {
            "areaCode": "220282",
            "province": "吉林省",
            "city": "吉林市",
            "name": "桦甸市"
          },
          {
            "areaCode": "220283",
            "province": "吉林省",
            "city": "吉林市",
            "name": "舒兰市"
          },
          {
            "areaCode": "220284",
            "province": "吉林省",
            "city": "吉林市",
            "name": "磐石市"
          }
        ],
        "name": "吉林市",
        "base": "jilin"
      },
      {
        "areaCode": "2203",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220302",
            "province": "吉林省",
            "city": "四平市",
            "name": "铁西区"
          },
          {
            "areaCode": "220303",
            "province": "吉林省",
            "city": "四平市",
            "name": "铁东区"
          },
          {
            "areaCode": "220322",
            "province": "吉林省",
            "city": "四平市",
            "name": "梨树县"
          },
          {
            "areaCode": "220323",
            "province": "吉林省",
            "city": "四平市",
            "name": "伊通满族自治县"
          },
          {
            "areaCode": "220381",
            "province": "吉林省",
            "city": "四平市",
            "name": "公主岭市"
          },
          {
            "areaCode": "220382",
            "province": "吉林省",
            "city": "四平市",
            "name": "双辽市"
          }
        ],
        "name": "四平市",
        "base": "siping"
      },
      {
        "areaCode": "2204",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220402",
            "province": "吉林省",
            "city": "辽源市",
            "name": "龙山区"
          },
          {
            "areaCode": "220403",
            "province": "吉林省",
            "city": "辽源市",
            "name": "西安区"
          },
          {
            "areaCode": "220421",
            "province": "吉林省",
            "city": "辽源市",
            "name": "东丰县"
          },
          {
            "areaCode": "220422",
            "province": "吉林省",
            "city": "辽源市",
            "name": "东辽县"
          }
        ],
        "name": "辽源市",
        "base": "liaoyuan"
      },
      {
        "areaCode": "2205",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220502",
            "province": "吉林省",
            "city": "通化市",
            "name": "东昌区"
          },
          {
            "areaCode": "220503",
            "province": "吉林省",
            "city": "通化市",
            "name": "二道江区"
          },
          {
            "areaCode": "220521",
            "province": "吉林省",
            "city": "通化市",
            "name": "通化县"
          },
          {
            "areaCode": "220523",
            "province": "吉林省",
            "city": "通化市",
            "name": "辉南县"
          },
          {
            "areaCode": "220524",
            "province": "吉林省",
            "city": "通化市",
            "name": "柳河县"
          },
          {
            "areaCode": "220581",
            "province": "吉林省",
            "city": "通化市",
            "name": "梅河口市"
          },
          {
            "areaCode": "220582",
            "province": "吉林省",
            "city": "通化市",
            "name": "集安市"
          }
        ],
        "name": "通化市",
        "base": "tonghua"
      },
      {
        "areaCode": "2206",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220602",
            "province": "吉林省",
            "city": "白山市",
            "name": "浑江区"
          },
          {
            "areaCode": "220605",
            "province": "吉林省",
            "city": "白山市",
            "name": "江源区"
          },
          {
            "areaCode": "220621",
            "province": "吉林省",
            "city": "白山市",
            "name": "抚松县"
          },
          {
            "areaCode": "220622",
            "province": "吉林省",
            "city": "白山市",
            "name": "靖宇县"
          },
          {
            "areaCode": "220623",
            "province": "吉林省",
            "city": "白山市",
            "name": "长白朝鲜族自治县"
          },
          {
            "areaCode": "220681",
            "province": "吉林省",
            "city": "白山市",
            "name": "临江市"
          }
        ],
        "name": "白山市",
        "base": "baishan"
      },
      {
        "areaCode": "2207",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220702",
            "province": "吉林省",
            "city": "松原市",
            "name": "宁江区"
          },
          {
            "areaCode": "220721",
            "province": "吉林省",
            "city": "松原市",
            "name": "前郭尔罗斯蒙古族自治县"
          },
          {
            "areaCode": "220722",
            "province": "吉林省",
            "city": "松原市",
            "name": "长岭县"
          },
          {
            "areaCode": "220723",
            "province": "吉林省",
            "city": "松原市",
            "name": "乾安县"
          },
          {
            "areaCode": "220771",
            "province": "吉林省",
            "city": "松原市",
            "name": "吉林松原经济开发区"
          },
          {
            "areaCode": "220781",
            "province": "吉林省",
            "city": "松原市",
            "name": "扶余市"
          }
        ],
        "name": "松原市",
        "base": "songyuan"
      },
      {
        "areaCode": "2208",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "220802",
            "province": "吉林省",
            "city": "白城市",
            "name": "洮北区"
          },
          {
            "areaCode": "220821",
            "province": "吉林省",
            "city": "白城市",
            "name": "镇赉县"
          },
          {
            "areaCode": "220822",
            "province": "吉林省",
            "city": "白城市",
            "name": "通榆县"
          },
          {
            "areaCode": "220871",
            "province": "吉林省",
            "city": "白城市",
            "name": "吉林白城经济开发区"
          },
          {
            "areaCode": "220881",
            "province": "吉林省",
            "city": "白城市",
            "name": "洮南市"
          },
          {
            "areaCode": "220882",
            "province": "吉林省",
            "city": "白城市",
            "name": "大安市"
          }
        ],
        "name": "白城市",
        "base": "baicheng"
      },
      {
        "areaCode": "2224",
        "province": "吉林省",
        "district": [
          {
            "areaCode": "222401",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "延吉市"
          },
          {
            "areaCode": "222402",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "图们市"
          },
          {
            "areaCode": "222403",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "敦化市"
          },
          {
            "areaCode": "222404",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "珲春市"
          },
          {
            "areaCode": "222405",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "龙井市"
          },
          {
            "areaCode": "222406",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "和龙市"
          },
          {
            "areaCode": "222424",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "汪清县"
          },
          {
            "areaCode": "222426",
            "province": "吉林省",
            "city": "延边朝鲜族自治州",
            "name": "安图县"
          }
        ],
        "name": "延边朝鲜族自治州",
        "base": "ybcxz"
      }
    ],
    "name": "吉林省",
    "base": "jl"
  },
  {
    "areaCode": "23",
    "city": [
      {
        "areaCode": "2301",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230102",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "道里区"
          },
          {
            "areaCode": "230103",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "南岗区"
          },
          {
            "areaCode": "230104",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "道外区"
          },
          {
            "areaCode": "230108",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "平房区"
          },
          {
            "areaCode": "230109",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "松北区"
          },
          {
            "areaCode": "230110",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "香坊区"
          },
          {
            "areaCode": "230111",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "呼兰区"
          },
          {
            "areaCode": "230112",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "阿城区"
          },
          {
            "areaCode": "230113",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "双城区"
          },
          {
            "areaCode": "230123",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "依兰县"
          },
          {
            "areaCode": "230124",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "方正县"
          },
          {
            "areaCode": "230125",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "宾县"
          },
          {
            "areaCode": "230126",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "巴彦县"
          },
          {
            "areaCode": "230127",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "木兰县"
          },
          {
            "areaCode": "230128",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "通河县"
          },
          {
            "areaCode": "230129",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "延寿县"
          },
          {
            "areaCode": "230183",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "尚志市"
          },
          {
            "areaCode": "230184",
            "province": "黑龙江省",
            "city": "哈尔滨市",
            "name": "五常市"
          }
        ],
        "name": "哈尔滨市",
        "base": "herb"
      },
      {
        "areaCode": "2302",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230202",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "龙沙区"
          },
          {
            "areaCode": "230203",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "建华区"
          },
          {
            "areaCode": "230204",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "铁锋区"
          },
          {
            "areaCode": "230205",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "昂昂溪区"
          },
          {
            "areaCode": "230206",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "富拉尔基区"
          },
          {
            "areaCode": "230207",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "碾子山区"
          },
          {
            "areaCode": "230208",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "梅里斯达斡尔族区"
          },
          {
            "areaCode": "230221",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "龙江县"
          },
          {
            "areaCode": "230223",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "依安县"
          },
          {
            "areaCode": "230224",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "泰来县"
          },
          {
            "areaCode": "230225",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "甘南县"
          },
          {
            "areaCode": "230227",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "富裕县"
          },
          {
            "areaCode": "230229",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "克山县"
          },
          {
            "areaCode": "230230",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "克东县"
          },
          {
            "areaCode": "230231",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "拜泉县"
          },
          {
            "areaCode": "230281",
            "province": "黑龙江省",
            "city": "齐齐哈尔市",
            "name": "讷河市"
          }
        ],
        "name": "齐齐哈尔市",
        "base": "qqhe"
      },
      {
        "areaCode": "2303",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230302",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "鸡冠区"
          },
          {
            "areaCode": "230303",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "恒山区"
          },
          {
            "areaCode": "230304",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "滴道区"
          },
          {
            "areaCode": "230305",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "梨树区"
          },
          {
            "areaCode": "230306",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "城子河区"
          },
          {
            "areaCode": "230307",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "麻山区"
          },
          {
            "areaCode": "230321",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "鸡东县"
          },
          {
            "areaCode": "230381",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "虎林市"
          },
          {
            "areaCode": "230382",
            "province": "黑龙江省",
            "city": "鸡西市",
            "name": "密山市"
          }
        ],
        "name": "鸡西市",
        "base": "jixi"
      },
      {
        "areaCode": "2304",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230402",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "向阳区"
          },
          {
            "areaCode": "230403",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "工农区"
          },
          {
            "areaCode": "230404",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "南山区"
          },
          {
            "areaCode": "230405",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "兴安区"
          },
          {
            "areaCode": "230406",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "东山区"
          },
          {
            "areaCode": "230407",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "兴山区"
          },
          {
            "areaCode": "230421",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "萝北县"
          },
          {
            "areaCode": "230422",
            "province": "黑龙江省",
            "city": "鹤岗市",
            "name": "绥滨县"
          }
        ],
        "name": "鹤岗市",
        "base": "hegang"
      },
      {
        "areaCode": "2305",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230502",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "尖山区"
          },
          {
            "areaCode": "230503",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "岭东区"
          },
          {
            "areaCode": "230505",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "四方台区"
          },
          {
            "areaCode": "230506",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "宝山区"
          },
          {
            "areaCode": "230521",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "集贤县"
          },
          {
            "areaCode": "230522",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "友谊县"
          },
          {
            "areaCode": "230523",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "宝清县"
          },
          {
            "areaCode": "230524",
            "province": "黑龙江省",
            "city": "双鸭山市",
            "name": "饶河县"
          }
        ],
        "name": "双鸭山市",
        "base": "sys"
      },
      {
        "areaCode": "2306",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230602",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "萨尔图区"
          },
          {
            "areaCode": "230603",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "龙凤区"
          },
          {
            "areaCode": "230604",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "让胡路区"
          },
          {
            "areaCode": "230605",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "红岗区"
          },
          {
            "areaCode": "230606",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "大同区"
          },
          {
            "areaCode": "230621",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "肇州县"
          },
          {
            "areaCode": "230622",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "肇源县"
          },
          {
            "areaCode": "230623",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "林甸县"
          },
          {
            "areaCode": "230624",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "杜尔伯特蒙古族自治县"
          },
          {
            "areaCode": "230671",
            "province": "黑龙江省",
            "city": "大庆市",
            "name": "大庆高新技术产业开发区"
          }
        ],
        "name": "大庆市",
        "base": "daqing"
      },
      {
        "areaCode": "2307",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230702",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "伊春区"
          },
          {
            "areaCode": "230703",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "南岔区"
          },
          {
            "areaCode": "230704",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "友好区"
          },
          {
            "areaCode": "230705",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "西林区"
          },
          {
            "areaCode": "230706",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "翠峦区"
          },
          {
            "areaCode": "230707",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "新青区"
          },
          {
            "areaCode": "230708",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "美溪区"
          },
          {
            "areaCode": "230709",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "金山屯区"
          },
          {
            "areaCode": "230710",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "五营区"
          },
          {
            "areaCode": "230711",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "乌马河区"
          },
          {
            "areaCode": "230712",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "汤旺河区"
          },
          {
            "areaCode": "230713",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "带岭区"
          },
          {
            "areaCode": "230714",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "乌伊岭区"
          },
          {
            "areaCode": "230715",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "红星区"
          },
          {
            "areaCode": "230716",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "上甘岭区"
          },
          {
            "areaCode": "230722",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "嘉荫县"
          },
          {
            "areaCode": "230781",
            "province": "黑龙江省",
            "city": "伊春市",
            "name": "铁力市"
          }
        ],
        "name": "伊春市",
        "base": "yich"
      },
      {
        "areaCode": "2308",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230803",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "向阳区"
          },
          {
            "areaCode": "230804",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "前进区"
          },
          {
            "areaCode": "230805",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "东风区"
          },
          {
            "areaCode": "230811",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "郊区"
          },
          {
            "areaCode": "230822",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "桦南县"
          },
          {
            "areaCode": "230826",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "桦川县"
          },
          {
            "areaCode": "230828",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "汤原县"
          },
          {
            "areaCode": "230881",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "同江市"
          },
          {
            "areaCode": "230882",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "富锦市"
          },
          {
            "areaCode": "230883",
            "province": "黑龙江省",
            "city": "佳木斯市",
            "name": "抚远市"
          }
        ],
        "name": "佳木斯市",
        "base": "jms"
      },
      {
        "areaCode": "2309",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "230902",
            "province": "黑龙江省",
            "city": "七台河市",
            "name": "新兴区"
          },
          {
            "areaCode": "230903",
            "province": "黑龙江省",
            "city": "七台河市",
            "name": "桃山区"
          },
          {
            "areaCode": "230904",
            "province": "黑龙江省",
            "city": "七台河市",
            "name": "茄子河区"
          },
          {
            "areaCode": "230921",
            "province": "黑龙江省",
            "city": "七台河市",
            "name": "勃利县"
          }
        ],
        "name": "七台河市",
        "base": "qth"
      },
      {
        "areaCode": "2310",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "231002",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "东安区"
          },
          {
            "areaCode": "231003",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "阳明区"
          },
          {
            "areaCode": "231004",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "爱民区"
          },
          {
            "areaCode": "231005",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "西安区"
          },
          {
            "areaCode": "231025",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "林口县"
          },
          {
            "areaCode": "231071",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "牡丹江经济技术开发区"
          },
          {
            "areaCode": "231081",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "绥芬河市"
          },
          {
            "areaCode": "231083",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "海林市"
          },
          {
            "areaCode": "231084",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "宁安市"
          },
          {
            "areaCode": "231085",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "穆棱市"
          },
          {
            "areaCode": "231086",
            "province": "黑龙江省",
            "city": "牡丹江市",
            "name": "东宁市"
          }
        ],
        "name": "牡丹江市",
        "base": "mdj"
      },
      {
        "areaCode": "2311",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "231102",
            "province": "黑龙江省",
            "city": "黑河市",
            "name": "爱辉区"
          },
          {
            "areaCode": "231121",
            "province": "黑龙江省",
            "city": "黑河市",
            "name": "嫩江县"
          },
          {
            "areaCode": "231123",
            "province": "黑龙江省",
            "city": "黑河市",
            "name": "逊克县"
          },
          {
            "areaCode": "231124",
            "province": "黑龙江省",
            "city": "黑河市",
            "name": "孙吴县"
          },
          {
            "areaCode": "231181",
            "province": "黑龙江省",
            "city": "黑河市",
            "name": "北安市"
          },
          {
            "areaCode": "231182",
            "province": "黑龙江省",
            "city": "黑河市",
            "name": "五大连池市"
          }
        ],
        "name": "黑河市",
        "base": "heihe"
      },
      {
        "areaCode": "2312",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "231202",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "北林区"
          },
          {
            "areaCode": "231221",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "望奎县"
          },
          {
            "areaCode": "231222",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "兰西县"
          },
          {
            "areaCode": "231223",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "青冈县"
          },
          {
            "areaCode": "231224",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "庆安县"
          },
          {
            "areaCode": "231225",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "明水县"
          },
          {
            "areaCode": "231226",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "绥棱县"
          },
          {
            "areaCode": "231281",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "安达市"
          },
          {
            "areaCode": "231282",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "肇东市"
          },
          {
            "areaCode": "231283",
            "province": "黑龙江省",
            "city": "绥化市",
            "name": "海伦市"
          }
        ],
        "name": "绥化市",
        "base": "suihua"
      },
      {
        "areaCode": "2327",
        "province": "黑龙江省",
        "district": [
          {
            "areaCode": "232761",
            "province": "黑龙江省",
            "city": "大兴安岭地区",
            "name": "加格达奇区"
          },
          {
            "areaCode": "232762",
            "province": "黑龙江省",
            "city": "大兴安岭地区",
            "name": "松岭区"
          },
          {
            "areaCode": "232763",
            "province": "黑龙江省",
            "city": "大兴安岭地区",
            "name": "新林区"
          },
          {
            "areaCode": "232764",
            "province": "黑龙江省",
            "city": "大兴安岭地区",
            "name": "呼中区"
          },
          {
            "areaCode": "232721",
            "province": "黑龙江省",
            "city": "大兴安岭地区",
            "name": "呼玛县"
          },
          {
            "areaCode": "232722",
            "province": "黑龙江省",
            "city": "大兴安岭地区",
            "name": "塔河县"
          },
          {
            "areaCode": "232701",
            "province": "黑龙江省",
            "city": "大兴安岭地区",
            "name": "漠河市"
          }
        ],
        "name": "大兴安岭地区",
        "base": "dxaldq"
      }
    ],
    "name": "黑龙江省",
    "base": "hlj"
  },
  {
    "areaCode": "32",
    "city": [
      {
        "areaCode": "3201",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320102",
            "province": "江苏省",
            "city": "南京市",
            "name": "玄武区"
          },
          {
            "areaCode": "320104",
            "province": "江苏省",
            "city": "南京市",
            "name": "秦淮区"
          },
          {
            "areaCode": "320105",
            "province": "江苏省",
            "city": "南京市",
            "name": "建邺区"
          },
          {
            "areaCode": "320106",
            "province": "江苏省",
            "city": "南京市",
            "name": "鼓楼区"
          },
          {
            "areaCode": "320111",
            "province": "江苏省",
            "city": "南京市",
            "name": "浦口区"
          },
          {
            "areaCode": "320113",
            "province": "江苏省",
            "city": "南京市",
            "name": "栖霞区"
          },
          {
            "areaCode": "320114",
            "province": "江苏省",
            "city": "南京市",
            "name": "雨花台区"
          },
          {
            "areaCode": "320115",
            "province": "江苏省",
            "city": "南京市",
            "name": "江宁区"
          },
          {
            "areaCode": "320116",
            "province": "江苏省",
            "city": "南京市",
            "name": "六合区"
          },
          {
            "areaCode": "320117",
            "province": "江苏省",
            "city": "南京市",
            "name": "溧水区"
          },
          {
            "areaCode": "320118",
            "province": "江苏省",
            "city": "南京市",
            "name": "高淳区"
          }
        ],
        "name": "南京市",
        "base": "nanjing"
      },
      {
        "areaCode": "3202",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320205",
            "province": "江苏省",
            "city": "无锡市",
            "name": "锡山区"
          },
          {
            "areaCode": "320206",
            "province": "江苏省",
            "city": "无锡市",
            "name": "惠山区"
          },
          {
            "areaCode": "320211",
            "province": "江苏省",
            "city": "无锡市",
            "name": "滨湖区"
          },
          {
            "areaCode": "320213",
            "province": "江苏省",
            "city": "无锡市",
            "name": "梁溪区"
          },
          {
            "areaCode": "320214",
            "province": "江苏省",
            "city": "无锡市",
            "name": "新吴区"
          },
          {
            "areaCode": "320281",
            "province": "江苏省",
            "city": "无锡市",
            "name": "江阴市"
          },
          {
            "areaCode": "320282",
            "province": "江苏省",
            "city": "无锡市",
            "name": "宜兴市"
          }
        ],
        "name": "无锡市",
        "base": "wuxi"
      },
      {
        "areaCode": "3203",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320302",
            "province": "江苏省",
            "city": "徐州市",
            "name": "鼓楼区"
          },
          {
            "areaCode": "320303",
            "province": "江苏省",
            "city": "徐州市",
            "name": "云龙区"
          },
          {
            "areaCode": "320305",
            "province": "江苏省",
            "city": "徐州市",
            "name": "贾汪区"
          },
          {
            "areaCode": "320311",
            "province": "江苏省",
            "city": "徐州市",
            "name": "泉山区"
          },
          {
            "areaCode": "320312",
            "province": "江苏省",
            "city": "徐州市",
            "name": "铜山区"
          },
          {
            "areaCode": "320321",
            "province": "江苏省",
            "city": "徐州市",
            "name": "丰县"
          },
          {
            "areaCode": "320322",
            "province": "江苏省",
            "city": "徐州市",
            "name": "沛县"
          },
          {
            "areaCode": "320324",
            "province": "江苏省",
            "city": "徐州市",
            "name": "睢宁县"
          },
          {
            "areaCode": "320371",
            "province": "江苏省",
            "city": "徐州市",
            "name": "徐州经济技术开发区"
          },
          {
            "areaCode": "320381",
            "province": "江苏省",
            "city": "徐州市",
            "name": "新沂市"
          },
          {
            "areaCode": "320382",
            "province": "江苏省",
            "city": "徐州市",
            "name": "邳州市"
          }
        ],
        "name": "徐州市",
        "base": "xuzhou"
      },
      {
        "areaCode": "3204",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320402",
            "province": "江苏省",
            "city": "常州市",
            "name": "天宁区"
          },
          {
            "areaCode": "320404",
            "province": "江苏省",
            "city": "常州市",
            "name": "钟楼区"
          },
          {
            "areaCode": "320411",
            "province": "江苏省",
            "city": "常州市",
            "name": "新北区"
          },
          {
            "areaCode": "320412",
            "province": "江苏省",
            "city": "常州市",
            "name": "武进区"
          },
          {
            "areaCode": "320413",
            "province": "江苏省",
            "city": "常州市",
            "name": "金坛区"
          },
          {
            "areaCode": "320481",
            "province": "江苏省",
            "city": "常州市",
            "name": "溧阳市"
          }
        ],
        "name": "常州市",
        "base": "changzhou"
      },
      {
        "areaCode": "3205",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320505",
            "province": "江苏省",
            "city": "苏州市",
            "name": "虎丘区"
          },
          {
            "areaCode": "320506",
            "province": "江苏省",
            "city": "苏州市",
            "name": "吴中区"
          },
          {
            "areaCode": "320507",
            "province": "江苏省",
            "city": "苏州市",
            "name": "相城区"
          },
          {
            "areaCode": "320508",
            "province": "江苏省",
            "city": "苏州市",
            "name": "姑苏区"
          },
          {
            "areaCode": "320509",
            "province": "江苏省",
            "city": "苏州市",
            "name": "吴江区"
          },
          {
            "areaCode": "320571",
            "province": "江苏省",
            "city": "苏州市",
            "name": "苏州工业园区"
          },
          {
            "areaCode": "320581",
            "province": "江苏省",
            "city": "苏州市",
            "name": "常熟市"
          },
          {
            "areaCode": "320582",
            "province": "江苏省",
            "city": "苏州市",
            "name": "张家港市"
          },
          {
            "areaCode": "320583",
            "province": "江苏省",
            "city": "苏州市",
            "name": "昆山市"
          },
          {
            "areaCode": "320585",
            "province": "江苏省",
            "city": "苏州市",
            "name": "太仓市"
          }
        ],
        "name": "苏州市",
        "base": "szh"
      },
      {
        "areaCode": "3206",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320602",
            "province": "江苏省",
            "city": "南通市",
            "name": "崇川区"
          },
          {
            "areaCode": "320611",
            "province": "江苏省",
            "city": "南通市",
            "name": "港闸区"
          },
          {
            "areaCode": "320612",
            "province": "江苏省",
            "city": "南通市",
            "name": "通州区"
          },
          {
            "areaCode": "320623",
            "province": "江苏省",
            "city": "南通市",
            "name": "如东县"
          },
          {
            "areaCode": "320671",
            "province": "江苏省",
            "city": "南通市",
            "name": "南通经济技术开发区"
          },
          {
            "areaCode": "320681",
            "province": "江苏省",
            "city": "南通市",
            "name": "启东市"
          },
          {
            "areaCode": "320682",
            "province": "江苏省",
            "city": "南通市",
            "name": "如皋市"
          },
          {
            "areaCode": "320684",
            "province": "江苏省",
            "city": "南通市",
            "name": "海门市"
          },
          {
            "areaCode": "320685",
            "province": "江苏省",
            "city": "南通市",
            "name": "海安市"
          }
        ],
        "name": "南通市",
        "base": "nantong"
      },
      {
        "areaCode": "3207",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320703",
            "province": "江苏省",
            "city": "连云港市",
            "name": "连云区"
          },
          {
            "areaCode": "320706",
            "province": "江苏省",
            "city": "连云港市",
            "name": "海州区"
          },
          {
            "areaCode": "320707",
            "province": "江苏省",
            "city": "连云港市",
            "name": "赣榆区"
          },
          {
            "areaCode": "320722",
            "province": "江苏省",
            "city": "连云港市",
            "name": "东海县"
          },
          {
            "areaCode": "320723",
            "province": "江苏省",
            "city": "连云港市",
            "name": "灌云县"
          },
          {
            "areaCode": "320724",
            "province": "江苏省",
            "city": "连云港市",
            "name": "灌南县"
          },
          {
            "areaCode": "320771",
            "province": "江苏省",
            "city": "连云港市",
            "name": "连云港经济技术开发区"
          },
          {
            "areaCode": "320772",
            "province": "江苏省",
            "city": "连云港市",
            "name": "连云港高新技术产业开发区"
          }
        ],
        "name": "连云港市",
        "base": "lyg"
      },
      {
        "areaCode": "3208",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320803",
            "province": "江苏省",
            "city": "淮安市",
            "name": "淮安区"
          },
          {
            "areaCode": "320804",
            "province": "江苏省",
            "city": "淮安市",
            "name": "淮阴区"
          },
          {
            "areaCode": "320812",
            "province": "江苏省",
            "city": "淮安市",
            "name": "清江浦区"
          },
          {
            "areaCode": "320813",
            "province": "江苏省",
            "city": "淮安市",
            "name": "洪泽区"
          },
          {
            "areaCode": "320826",
            "province": "江苏省",
            "city": "淮安市",
            "name": "涟水县"
          },
          {
            "areaCode": "320830",
            "province": "江苏省",
            "city": "淮安市",
            "name": "盱眙县"
          },
          {
            "areaCode": "320831",
            "province": "江苏省",
            "city": "淮安市",
            "name": "金湖县"
          },
          {
            "areaCode": "320871",
            "province": "江苏省",
            "city": "淮安市",
            "name": "淮安经济技术开发区"
          }
        ],
        "name": "淮安市",
        "base": "huaian"
      },
      {
        "areaCode": "3209",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "320902",
            "province": "江苏省",
            "city": "盐城市",
            "name": "亭湖区"
          },
          {
            "areaCode": "320903",
            "province": "江苏省",
            "city": "盐城市",
            "name": "盐都区"
          },
          {
            "areaCode": "320904",
            "province": "江苏省",
            "city": "盐城市",
            "name": "大丰区"
          },
          {
            "areaCode": "320921",
            "province": "江苏省",
            "city": "盐城市",
            "name": "响水县"
          },
          {
            "areaCode": "320922",
            "province": "江苏省",
            "city": "盐城市",
            "name": "滨海县"
          },
          {
            "areaCode": "320923",
            "province": "江苏省",
            "city": "盐城市",
            "name": "阜宁县"
          },
          {
            "areaCode": "320924",
            "province": "江苏省",
            "city": "盐城市",
            "name": "射阳县"
          },
          {
            "areaCode": "320925",
            "province": "江苏省",
            "city": "盐城市",
            "name": "建湖县"
          },
          {
            "areaCode": "320971",
            "province": "江苏省",
            "city": "盐城市",
            "name": "盐城经济技术开发区"
          },
          {
            "areaCode": "320981",
            "province": "江苏省",
            "city": "盐城市",
            "name": "东台市"
          }
        ],
        "name": "盐城市",
        "base": "yancheng"
      },
      {
        "areaCode": "3210",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "321002",
            "province": "江苏省",
            "city": "扬州市",
            "name": "广陵区"
          },
          {
            "areaCode": "321003",
            "province": "江苏省",
            "city": "扬州市",
            "name": "邗江区"
          },
          {
            "areaCode": "321012",
            "province": "江苏省",
            "city": "扬州市",
            "name": "江都区"
          },
          {
            "areaCode": "321023",
            "province": "江苏省",
            "city": "扬州市",
            "name": "宝应县"
          },
          {
            "areaCode": "321071",
            "province": "江苏省",
            "city": "扬州市",
            "name": "扬州经济技术开发区"
          },
          {
            "areaCode": "321081",
            "province": "江苏省",
            "city": "扬州市",
            "name": "仪征市"
          },
          {
            "areaCode": "321084",
            "province": "江苏省",
            "city": "扬州市",
            "name": "高邮市"
          }
        ],
        "name": "扬州市",
        "base": "yangzhou"
      },
      {
        "areaCode": "3211",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "321102",
            "province": "江苏省",
            "city": "镇江市",
            "name": "京口区"
          },
          {
            "areaCode": "321111",
            "province": "江苏省",
            "city": "镇江市",
            "name": "润州区"
          },
          {
            "areaCode": "321112",
            "province": "江苏省",
            "city": "镇江市",
            "name": "丹徒区"
          },
          {
            "areaCode": "321171",
            "province": "江苏省",
            "city": "镇江市",
            "name": "镇江新区"
          },
          {
            "areaCode": "321181",
            "province": "江苏省",
            "city": "镇江市",
            "name": "丹阳市"
          },
          {
            "areaCode": "321182",
            "province": "江苏省",
            "city": "镇江市",
            "name": "扬中市"
          },
          {
            "areaCode": "321183",
            "province": "江苏省",
            "city": "镇江市",
            "name": "句容市"
          }
        ],
        "name": "镇江市",
        "base": "zhenjiang"
      },
      {
        "areaCode": "3212",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "321202",
            "province": "江苏省",
            "city": "泰州市",
            "name": "海陵区"
          },
          {
            "areaCode": "321203",
            "province": "江苏省",
            "city": "泰州市",
            "name": "高港区"
          },
          {
            "areaCode": "321204",
            "province": "江苏省",
            "city": "泰州市",
            "name": "姜堰区"
          },
          {
            "areaCode": "321271",
            "province": "江苏省",
            "city": "泰州市",
            "name": "泰州医药高新技术产业开发区"
          },
          {
            "areaCode": "321281",
            "province": "江苏省",
            "city": "泰州市",
            "name": "兴化市"
          },
          {
            "areaCode": "321282",
            "province": "江苏省",
            "city": "泰州市",
            "name": "靖江市"
          },
          {
            "areaCode": "321283",
            "province": "江苏省",
            "city": "泰州市",
            "name": "泰兴市"
          }
        ],
        "name": "泰州市",
        "base": "tzh"
      },
      {
        "areaCode": "3213",
        "province": "江苏省",
        "district": [
          {
            "areaCode": "321302",
            "province": "江苏省",
            "city": "宿迁市",
            "name": "宿城区"
          },
          {
            "areaCode": "321311",
            "province": "江苏省",
            "city": "宿迁市",
            "name": "宿豫区"
          },
          {
            "areaCode": "321322",
            "province": "江苏省",
            "city": "宿迁市",
            "name": "沭阳县"
          },
          {
            "areaCode": "321323",
            "province": "江苏省",
            "city": "宿迁市",
            "name": "泗阳县"
          },
          {
            "areaCode": "321324",
            "province": "江苏省",
            "city": "宿迁市",
            "name": "泗洪县"
          },
          {
            "areaCode": "321371",
            "province": "江苏省",
            "city": "宿迁市",
            "name": "宿迁经济技术开发区"
          }
        ],
        "name": "宿迁市",
        "base": "suqian"
      }
    ],
    "name": "江苏省",
    "base": "js"
  },
  {
    "areaCode": "33",
    "city": [
      {
        "areaCode": "3301",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330102",
            "province": "浙江省",
            "city": "杭州市",
            "name": "上城区"
          },
          {
            "areaCode": "330103",
            "province": "浙江省",
            "city": "杭州市",
            "name": "下城区"
          },
          {
            "areaCode": "330104",
            "province": "浙江省",
            "city": "杭州市",
            "name": "江干区"
          },
          {
            "areaCode": "330105",
            "province": "浙江省",
            "city": "杭州市",
            "name": "拱墅区"
          },
          {
            "areaCode": "330106",
            "province": "浙江省",
            "city": "杭州市",
            "name": "西湖区"
          },
          {
            "areaCode": "330108",
            "province": "浙江省",
            "city": "杭州市",
            "name": "滨江区"
          },
          {
            "areaCode": "330109",
            "province": "浙江省",
            "city": "杭州市",
            "name": "萧山区"
          },
          {
            "areaCode": "330110",
            "province": "浙江省",
            "city": "杭州市",
            "name": "余杭区"
          },
          {
            "areaCode": "330111",
            "province": "浙江省",
            "city": "杭州市",
            "name": "富阳区"
          },
          {
            "areaCode": "330112",
            "province": "浙江省",
            "city": "杭州市",
            "name": "临安区"
          },
          {
            "areaCode": "330122",
            "province": "浙江省",
            "city": "杭州市",
            "name": "桐庐县"
          },
          {
            "areaCode": "330127",
            "province": "浙江省",
            "city": "杭州市",
            "name": "淳安县"
          },
          {
            "areaCode": "330182",
            "province": "浙江省",
            "city": "杭州市",
            "name": "建德市"
          }
        ],
        "name": "杭州市",
        "base": "hangzhou"
      },
      {
        "areaCode": "3302",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330203",
            "province": "浙江省",
            "city": "宁波市",
            "name": "海曙区"
          },
          {
            "areaCode": "330205",
            "province": "浙江省",
            "city": "宁波市",
            "name": "江北区"
          },
          {
            "areaCode": "330206",
            "province": "浙江省",
            "city": "宁波市",
            "name": "北仑区"
          },
          {
            "areaCode": "330211",
            "province": "浙江省",
            "city": "宁波市",
            "name": "镇海区"
          },
          {
            "areaCode": "330212",
            "province": "浙江省",
            "city": "宁波市",
            "name": "鄞州区"
          },
          {
            "areaCode": "330213",
            "province": "浙江省",
            "city": "宁波市",
            "name": "奉化区"
          },
          {
            "areaCode": "330225",
            "province": "浙江省",
            "city": "宁波市",
            "name": "象山县"
          },
          {
            "areaCode": "330226",
            "province": "浙江省",
            "city": "宁波市",
            "name": "宁海县"
          },
          {
            "areaCode": "330281",
            "province": "浙江省",
            "city": "宁波市",
            "name": "余姚市"
          },
          {
            "areaCode": "330282",
            "province": "浙江省",
            "city": "宁波市",
            "name": "慈溪市"
          }
        ],
        "name": "宁波市",
        "base": "ningbo"
      },
      {
        "areaCode": "3303",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330302",
            "province": "浙江省",
            "city": "温州市",
            "name": "鹿城区"
          },
          {
            "areaCode": "330303",
            "province": "浙江省",
            "city": "温州市",
            "name": "龙湾区"
          },
          {
            "areaCode": "330304",
            "province": "浙江省",
            "city": "温州市",
            "name": "瓯海区"
          },
          {
            "areaCode": "330305",
            "province": "浙江省",
            "city": "温州市",
            "name": "洞头区"
          },
          {
            "areaCode": "330324",
            "province": "浙江省",
            "city": "温州市",
            "name": "永嘉县"
          },
          {
            "areaCode": "330326",
            "province": "浙江省",
            "city": "温州市",
            "name": "平阳县"
          },
          {
            "areaCode": "330327",
            "province": "浙江省",
            "city": "温州市",
            "name": "苍南县"
          },
          {
            "areaCode": "330328",
            "province": "浙江省",
            "city": "温州市",
            "name": "文成县"
          },
          {
            "areaCode": "330329",
            "province": "浙江省",
            "city": "温州市",
            "name": "泰顺县"
          },
          {
            "areaCode": "330371",
            "province": "浙江省",
            "city": "温州市",
            "name": "温州经济技术开发区"
          },
          {
            "areaCode": "330381",
            "province": "浙江省",
            "city": "温州市",
            "name": "瑞安市"
          },
          {
            "areaCode": "330382",
            "province": "浙江省",
            "city": "温州市",
            "name": "乐清市"
          }
        ],
        "name": "温州市",
        "base": "wenzhou"
      },
      {
        "areaCode": "3304",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330402",
            "province": "浙江省",
            "city": "嘉兴市",
            "name": "南湖区"
          },
          {
            "areaCode": "330411",
            "province": "浙江省",
            "city": "嘉兴市",
            "name": "秀洲区"
          },
          {
            "areaCode": "330421",
            "province": "浙江省",
            "city": "嘉兴市",
            "name": "嘉善县"
          },
          {
            "areaCode": "330424",
            "province": "浙江省",
            "city": "嘉兴市",
            "name": "海盐县"
          },
          {
            "areaCode": "330481",
            "province": "浙江省",
            "city": "嘉兴市",
            "name": "海宁市"
          },
          {
            "areaCode": "330482",
            "province": "浙江省",
            "city": "嘉兴市",
            "name": "平湖市"
          },
          {
            "areaCode": "330483",
            "province": "浙江省",
            "city": "嘉兴市",
            "name": "桐乡市"
          }
        ],
        "name": "嘉兴市",
        "base": "jiaxing"
      },
      {
        "areaCode": "3305",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330502",
            "province": "浙江省",
            "city": "湖州市",
            "name": "吴兴区"
          },
          {
            "areaCode": "330503",
            "province": "浙江省",
            "city": "湖州市",
            "name": "南浔区"
          },
          {
            "areaCode": "330521",
            "province": "浙江省",
            "city": "湖州市",
            "name": "德清县"
          },
          {
            "areaCode": "330522",
            "province": "浙江省",
            "city": "湖州市",
            "name": "长兴县"
          },
          {
            "areaCode": "330523",
            "province": "浙江省",
            "city": "湖州市",
            "name": "安吉县"
          }
        ],
        "name": "湖州市",
        "base": "huzhou"
      },
      {
        "areaCode": "3306",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330602",
            "province": "浙江省",
            "city": "绍兴市",
            "name": "越城区"
          },
          {
            "areaCode": "330603",
            "province": "浙江省",
            "city": "绍兴市",
            "name": "柯桥区"
          },
          {
            "areaCode": "330604",
            "province": "浙江省",
            "city": "绍兴市",
            "name": "上虞区"
          },
          {
            "areaCode": "330624",
            "province": "浙江省",
            "city": "绍兴市",
            "name": "新昌县"
          },
          {
            "areaCode": "330681",
            "province": "浙江省",
            "city": "绍兴市",
            "name": "诸暨市"
          },
          {
            "areaCode": "330683",
            "province": "浙江省",
            "city": "绍兴市",
            "name": "嵊州市"
          }
        ],
        "name": "绍兴市",
        "base": "shaoxing"
      },
      {
        "areaCode": "3307",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330702",
            "province": "浙江省",
            "city": "金华市",
            "name": "婺城区"
          },
          {
            "areaCode": "330703",
            "province": "浙江省",
            "city": "金华市",
            "name": "金东区"
          },
          {
            "areaCode": "330723",
            "province": "浙江省",
            "city": "金华市",
            "name": "武义县"
          },
          {
            "areaCode": "330726",
            "province": "浙江省",
            "city": "金华市",
            "name": "浦江县"
          },
          {
            "areaCode": "330727",
            "province": "浙江省",
            "city": "金华市",
            "name": "磐安县"
          },
          {
            "areaCode": "330781",
            "province": "浙江省",
            "city": "金华市",
            "name": "兰溪市"
          },
          {
            "areaCode": "330782",
            "province": "浙江省",
            "city": "金华市",
            "name": "义乌市"
          },
          {
            "areaCode": "330783",
            "province": "浙江省",
            "city": "金华市",
            "name": "东阳市"
          },
          {
            "areaCode": "330784",
            "province": "浙江省",
            "city": "金华市",
            "name": "永康市"
          }
        ],
        "name": "金华市",
        "base": "jinhua"
      },
      {
        "areaCode": "3308",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330802",
            "province": "浙江省",
            "city": "衢州市",
            "name": "柯城区"
          },
          {
            "areaCode": "330803",
            "province": "浙江省",
            "city": "衢州市",
            "name": "衢江区"
          },
          {
            "areaCode": "330822",
            "province": "浙江省",
            "city": "衢州市",
            "name": "常山县"
          },
          {
            "areaCode": "330824",
            "province": "浙江省",
            "city": "衢州市",
            "name": "开化县"
          },
          {
            "areaCode": "330825",
            "province": "浙江省",
            "city": "衢州市",
            "name": "龙游县"
          },
          {
            "areaCode": "330881",
            "province": "浙江省",
            "city": "衢州市",
            "name": "江山市"
          }
        ],
        "name": "衢州市",
        "base": "quzhou"
      },
      {
        "areaCode": "3309",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "330902",
            "province": "浙江省",
            "city": "舟山市",
            "name": "定海区"
          },
          {
            "areaCode": "330903",
            "province": "浙江省",
            "city": "舟山市",
            "name": "普陀区"
          },
          {
            "areaCode": "330921",
            "province": "浙江省",
            "city": "舟山市",
            "name": "岱山县"
          },
          {
            "areaCode": "330922",
            "province": "浙江省",
            "city": "舟山市",
            "name": "嵊泗县"
          }
        ],
        "name": "舟山市",
        "base": "zhoushan"
      },
      {
        "areaCode": "3310",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "331002",
            "province": "浙江省",
            "city": "台州市",
            "name": "椒江区"
          },
          {
            "areaCode": "331003",
            "province": "浙江省",
            "city": "台州市",
            "name": "黄岩区"
          },
          {
            "areaCode": "331004",
            "province": "浙江省",
            "city": "台州市",
            "name": "路桥区"
          },
          {
            "areaCode": "331022",
            "province": "浙江省",
            "city": "台州市",
            "name": "三门县"
          },
          {
            "areaCode": "331023",
            "province": "浙江省",
            "city": "台州市",
            "name": "天台县"
          },
          {
            "areaCode": "331024",
            "province": "浙江省",
            "city": "台州市",
            "name": "仙居县"
          },
          {
            "areaCode": "331081",
            "province": "浙江省",
            "city": "台州市",
            "name": "温岭市"
          },
          {
            "areaCode": "331082",
            "province": "浙江省",
            "city": "台州市",
            "name": "临海市"
          },
          {
            "areaCode": "331083",
            "province": "浙江省",
            "city": "台州市",
            "name": "玉环市"
          }
        ],
        "name": "台州市",
        "base": "taizhou"
      },
      {
        "areaCode": "3311",
        "province": "浙江省",
        "district": [
          {
            "areaCode": "331102",
            "province": "浙江省",
            "city": "丽水市",
            "name": "莲都区"
          },
          {
            "areaCode": "331121",
            "province": "浙江省",
            "city": "丽水市",
            "name": "青田县"
          },
          {
            "areaCode": "331122",
            "province": "浙江省",
            "city": "丽水市",
            "name": "缙云县"
          },
          {
            "areaCode": "331123",
            "province": "浙江省",
            "city": "丽水市",
            "name": "遂昌县"
          },
          {
            "areaCode": "331124",
            "province": "浙江省",
            "city": "丽水市",
            "name": "松阳县"
          },
          {
            "areaCode": "331125",
            "province": "浙江省",
            "city": "丽水市",
            "name": "云和县"
          },
          {
            "areaCode": "331126",
            "province": "浙江省",
            "city": "丽水市",
            "name": "庆元县"
          },
          {
            "areaCode": "331127",
            "province": "浙江省",
            "city": "丽水市",
            "name": "景宁畲族自治县"
          },
          {
            "areaCode": "331181",
            "province": "浙江省",
            "city": "丽水市",
            "name": "龙泉市"
          }
        ],
        "name": "丽水市",
        "base": "lishui"
      }
    ],
    "name": "浙江省",
    "base": "zj"
  },
  {
    "areaCode": "34",
    "city": [
      {
        "areaCode": "3401",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340102",
            "province": "安徽省",
            "city": "合肥市",
            "name": "瑶海区"
          },
          {
            "areaCode": "340103",
            "province": "安徽省",
            "city": "合肥市",
            "name": "庐阳区"
          },
          {
            "areaCode": "340104",
            "province": "安徽省",
            "city": "合肥市",
            "name": "蜀山区"
          },
          {
            "areaCode": "340111",
            "province": "安徽省",
            "city": "合肥市",
            "name": "包河区"
          },
          {
            "areaCode": "340121",
            "province": "安徽省",
            "city": "合肥市",
            "name": "长丰县"
          },
          {
            "areaCode": "340122",
            "province": "安徽省",
            "city": "合肥市",
            "name": "肥东县"
          },
          {
            "areaCode": "340123",
            "province": "安徽省",
            "city": "合肥市",
            "name": "肥西县"
          },
          {
            "areaCode": "340124",
            "province": "安徽省",
            "city": "合肥市",
            "name": "庐江县"
          },
          {
            "areaCode": "340171",
            "province": "安徽省",
            "city": "合肥市",
            "name": "合肥高新技术产业开发区"
          },
          {
            "areaCode": "340172",
            "province": "安徽省",
            "city": "合肥市",
            "name": "合肥经济技术开发区"
          },
          {
            "areaCode": "340173",
            "province": "安徽省",
            "city": "合肥市",
            "name": "合肥新站高新技术产业开发区"
          },
          {
            "areaCode": "340181",
            "province": "安徽省",
            "city": "合肥市",
            "name": "巢湖市"
          }
        ],
        "name": "合肥市",
        "base": "hefei"
      },
      {
        "areaCode": "3402",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340202",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "镜湖区"
          },
          {
            "areaCode": "340203",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "弋江区"
          },
          {
            "areaCode": "340207",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "鸠江区"
          },
          {
            "areaCode": "340208",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "三山区"
          },
          {
            "areaCode": "340221",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "芜湖县"
          },
          {
            "areaCode": "340222",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "繁昌县"
          },
          {
            "areaCode": "340223",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "南陵县"
          },
          {
            "areaCode": "340225",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "无为县"
          },
          {
            "areaCode": "340271",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "芜湖经济技术开发区"
          },
          {
            "areaCode": "340272",
            "province": "安徽省",
            "city": "芜湖市",
            "name": "安徽芜湖长江大桥经济开发区"
          }
        ],
        "name": "芜湖市",
        "base": "wuhu"
      },
      {
        "areaCode": "3403",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340302",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "龙子湖区"
          },
          {
            "areaCode": "340303",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "蚌山区"
          },
          {
            "areaCode": "340304",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "禹会区"
          },
          {
            "areaCode": "340311",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "淮上区"
          },
          {
            "areaCode": "340321",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "怀远县"
          },
          {
            "areaCode": "340322",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "五河县"
          },
          {
            "areaCode": "340323",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "固镇县"
          },
          {
            "areaCode": "340371",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "蚌埠市高新技术开发区"
          },
          {
            "areaCode": "340372",
            "province": "安徽省",
            "city": "蚌埠市",
            "name": "蚌埠市经济开发区"
          }
        ],
        "name": "蚌埠市",
        "base": "bangbu"
      },
      {
        "areaCode": "3404",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340402",
            "province": "安徽省",
            "city": "淮南市",
            "name": "大通区"
          },
          {
            "areaCode": "340403",
            "province": "安徽省",
            "city": "淮南市",
            "name": "田家庵区"
          },
          {
            "areaCode": "340404",
            "province": "安徽省",
            "city": "淮南市",
            "name": "谢家集区"
          },
          {
            "areaCode": "340405",
            "province": "安徽省",
            "city": "淮南市",
            "name": "八公山区"
          },
          {
            "areaCode": "340406",
            "province": "安徽省",
            "city": "淮南市",
            "name": "潘集区"
          },
          {
            "areaCode": "340421",
            "province": "安徽省",
            "city": "淮南市",
            "name": "凤台县"
          },
          {
            "areaCode": "340422",
            "province": "安徽省",
            "city": "淮南市",
            "name": "寿县"
          }
        ],
        "name": "淮南市",
        "base": "huainan"
      },
      {
        "areaCode": "3405",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340503",
            "province": "安徽省",
            "city": "马鞍山市",
            "name": "花山区"
          },
          {
            "areaCode": "340504",
            "province": "安徽省",
            "city": "马鞍山市",
            "name": "雨山区"
          },
          {
            "areaCode": "340506",
            "province": "安徽省",
            "city": "马鞍山市",
            "name": "博望区"
          },
          {
            "areaCode": "340521",
            "province": "安徽省",
            "city": "马鞍山市",
            "name": "当涂县"
          },
          {
            "areaCode": "340522",
            "province": "安徽省",
            "city": "马鞍山市",
            "name": "含山县"
          },
          {
            "areaCode": "340523",
            "province": "安徽省",
            "city": "马鞍山市",
            "name": "和县"
          }
        ],
        "name": "马鞍山市",
        "base": "mas"
      },
      {
        "areaCode": "3406",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340602",
            "province": "安徽省",
            "city": "淮北市",
            "name": "杜集区"
          },
          {
            "areaCode": "340603",
            "province": "安徽省",
            "city": "淮北市",
            "name": "相山区"
          },
          {
            "areaCode": "340604",
            "province": "安徽省",
            "city": "淮北市",
            "name": "烈山区"
          },
          {
            "areaCode": "340621",
            "province": "安徽省",
            "city": "淮北市",
            "name": "濉溪县"
          }
        ],
        "name": "淮北市",
        "base": "huaibei"
      },
      {
        "areaCode": "3407",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340705",
            "province": "安徽省",
            "city": "铜陵市",
            "name": "铜官区"
          },
          {
            "areaCode": "340706",
            "province": "安徽省",
            "city": "铜陵市",
            "name": "义安区"
          },
          {
            "areaCode": "340711",
            "province": "安徽省",
            "city": "铜陵市",
            "name": "郊区"
          },
          {
            "areaCode": "340722",
            "province": "安徽省",
            "city": "铜陵市",
            "name": "枞阳县"
          }
        ],
        "name": "铜陵市",
        "base": "tongling"
      },
      {
        "areaCode": "3408",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "340802",
            "province": "安徽省",
            "city": "安庆市",
            "name": "迎江区"
          },
          {
            "areaCode": "340803",
            "province": "安徽省",
            "city": "安庆市",
            "name": "大观区"
          },
          {
            "areaCode": "340811",
            "province": "安徽省",
            "city": "安庆市",
            "name": "宜秀区"
          },
          {
            "areaCode": "340822",
            "province": "安徽省",
            "city": "安庆市",
            "name": "怀宁县"
          },
          {
            "areaCode": "340825",
            "province": "安徽省",
            "city": "安庆市",
            "name": "太湖县"
          },
          {
            "areaCode": "340826",
            "province": "安徽省",
            "city": "安庆市",
            "name": "宿松县"
          },
          {
            "areaCode": "340827",
            "province": "安徽省",
            "city": "安庆市",
            "name": "望江县"
          },
          {
            "areaCode": "340828",
            "province": "安徽省",
            "city": "安庆市",
            "name": "岳西县"
          },
          {
            "areaCode": "340871",
            "province": "安徽省",
            "city": "安庆市",
            "name": "安徽安庆经济开发区"
          },
          {
            "areaCode": "340881",
            "province": "安徽省",
            "city": "安庆市",
            "name": "桐城市"
          },
          {
            "areaCode": "340882",
            "province": "安徽省",
            "city": "安庆市",
            "name": "潜山市"
          }
        ],
        "name": "安庆市",
        "base": "anqing"
      },
      {
        "areaCode": "3410",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341002",
            "province": "安徽省",
            "city": "黄山市",
            "name": "屯溪区"
          },
          {
            "areaCode": "341003",
            "province": "安徽省",
            "city": "黄山市",
            "name": "黄山区"
          },
          {
            "areaCode": "341004",
            "province": "安徽省",
            "city": "黄山市",
            "name": "徽州区"
          },
          {
            "areaCode": "341021",
            "province": "安徽省",
            "city": "黄山市",
            "name": "歙县"
          },
          {
            "areaCode": "341022",
            "province": "安徽省",
            "city": "黄山市",
            "name": "休宁县"
          },
          {
            "areaCode": "341023",
            "province": "安徽省",
            "city": "黄山市",
            "name": "黟县"
          },
          {
            "areaCode": "341024",
            "province": "安徽省",
            "city": "黄山市",
            "name": "祁门县"
          }
        ],
        "name": "黄山市",
        "base": "huangshan"
      },
      {
        "areaCode": "3411",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341102",
            "province": "安徽省",
            "city": "滁州市",
            "name": "琅琊区"
          },
          {
            "areaCode": "341103",
            "province": "安徽省",
            "city": "滁州市",
            "name": "南谯区"
          },
          {
            "areaCode": "341122",
            "province": "安徽省",
            "city": "滁州市",
            "name": "来安县"
          },
          {
            "areaCode": "341124",
            "province": "安徽省",
            "city": "滁州市",
            "name": "全椒县"
          },
          {
            "areaCode": "341125",
            "province": "安徽省",
            "city": "滁州市",
            "name": "定远县"
          },
          {
            "areaCode": "341126",
            "province": "安徽省",
            "city": "滁州市",
            "name": "凤阳县"
          },
          {
            "areaCode": "341171",
            "province": "安徽省",
            "city": "滁州市",
            "name": "苏滁现代产业园"
          },
          {
            "areaCode": "341172",
            "province": "安徽省",
            "city": "滁州市",
            "name": "滁州经济技术开发区"
          },
          {
            "areaCode": "341181",
            "province": "安徽省",
            "city": "滁州市",
            "name": "天长市"
          },
          {
            "areaCode": "341182",
            "province": "安徽省",
            "city": "滁州市",
            "name": "明光市"
          }
        ],
        "name": "滁州市",
        "base": "chuzhou"
      },
      {
        "areaCode": "3412",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341202",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "颍州区"
          },
          {
            "areaCode": "341203",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "颍东区"
          },
          {
            "areaCode": "341204",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "颍泉区"
          },
          {
            "areaCode": "341221",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "临泉县"
          },
          {
            "areaCode": "341222",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "太和县"
          },
          {
            "areaCode": "341225",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "阜南县"
          },
          {
            "areaCode": "341226",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "颍上县"
          },
          {
            "areaCode": "341271",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "阜阳合肥现代产业园区"
          },
          {
            "areaCode": "341272",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "阜阳经济技术开发区"
          },
          {
            "areaCode": "341282",
            "province": "安徽省",
            "city": "阜阳市",
            "name": "界首市"
          }
        ],
        "name": "阜阳市",
        "base": "fuyang"
      },
      {
        "areaCode": "3413",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341302",
            "province": "安徽省",
            "city": "宿州市",
            "name": "埇桥区"
          },
          {
            "areaCode": "341321",
            "province": "安徽省",
            "city": "宿州市",
            "name": "砀山县"
          },
          {
            "areaCode": "341322",
            "province": "安徽省",
            "city": "宿州市",
            "name": "萧县"
          },
          {
            "areaCode": "341323",
            "province": "安徽省",
            "city": "宿州市",
            "name": "灵璧县"
          },
          {
            "areaCode": "341324",
            "province": "安徽省",
            "city": "宿州市",
            "name": "泗县"
          },
          {
            "areaCode": "341371",
            "province": "安徽省",
            "city": "宿州市",
            "name": "宿州马鞍山现代产业园区"
          },
          {
            "areaCode": "341372",
            "province": "安徽省",
            "city": "宿州市",
            "name": "宿州经济技术开发区"
          }
        ],
        "name": "宿州市",
        "base": "suzhou"
      },
      {
        "areaCode": "3415",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341502",
            "province": "安徽省",
            "city": "六安市",
            "name": "金安区"
          },
          {
            "areaCode": "341503",
            "province": "安徽省",
            "city": "六安市",
            "name": "裕安区"
          },
          {
            "areaCode": "341504",
            "province": "安徽省",
            "city": "六安市",
            "name": "叶集区"
          },
          {
            "areaCode": "341522",
            "province": "安徽省",
            "city": "六安市",
            "name": "霍邱县"
          },
          {
            "areaCode": "341523",
            "province": "安徽省",
            "city": "六安市",
            "name": "舒城县"
          },
          {
            "areaCode": "341524",
            "province": "安徽省",
            "city": "六安市",
            "name": "金寨县"
          },
          {
            "areaCode": "341525",
            "province": "安徽省",
            "city": "六安市",
            "name": "霍山县"
          }
        ],
        "name": "六安市",
        "base": "liuan"
      },
      {
        "areaCode": "3416",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341602",
            "province": "安徽省",
            "city": "亳州市",
            "name": "谯城区"
          },
          {
            "areaCode": "341621",
            "province": "安徽省",
            "city": "亳州市",
            "name": "涡阳县"
          },
          {
            "areaCode": "341622",
            "province": "安徽省",
            "city": "亳州市",
            "name": "蒙城县"
          },
          {
            "areaCode": "341623",
            "province": "安徽省",
            "city": "亳州市",
            "name": "利辛县"
          }
        ],
        "name": "亳州市",
        "base": "bozhou"
      },
      {
        "areaCode": "3417",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341702",
            "province": "安徽省",
            "city": "池州市",
            "name": "贵池区"
          },
          {
            "areaCode": "341721",
            "province": "安徽省",
            "city": "池州市",
            "name": "东至县"
          },
          {
            "areaCode": "341722",
            "province": "安徽省",
            "city": "池州市",
            "name": "石台县"
          },
          {
            "areaCode": "341723",
            "province": "安徽省",
            "city": "池州市",
            "name": "青阳县"
          }
        ],
        "name": "池州市",
        "base": "chizhou"
      },
      {
        "areaCode": "3418",
        "province": "安徽省",
        "district": [
          {
            "areaCode": "341802",
            "province": "安徽省",
            "city": "宣城市",
            "name": "宣州区"
          },
          {
            "areaCode": "341821",
            "province": "安徽省",
            "city": "宣城市",
            "name": "郎溪县"
          },
          {
            "areaCode": "341822",
            "province": "安徽省",
            "city": "宣城市",
            "name": "广德县"
          },
          {
            "areaCode": "341823",
            "province": "安徽省",
            "city": "宣城市",
            "name": "泾县"
          },
          {
            "areaCode": "341824",
            "province": "安徽省",
            "city": "宣城市",
            "name": "绩溪县"
          },
          {
            "areaCode": "341825",
            "province": "安徽省",
            "city": "宣城市",
            "name": "旌德县"
          },
          {
            "areaCode": "341871",
            "province": "安徽省",
            "city": "宣城市",
            "name": "宣城市经济开发区"
          },
          {
            "areaCode": "341881",
            "province": "安徽省",
            "city": "宣城市",
            "name": "宁国市"
          }
        ],
        "name": "宣城市",
        "base": "xuancheng"
      }
    ],
    "name": "安徽省",
    "base": "ah"
  },
  {
    "areaCode": "35",
    "city": [
      {
        "areaCode": "3501",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350102",
            "province": "福建省",
            "city": "福州市",
            "name": "鼓楼区"
          },
          {
            "areaCode": "350103",
            "province": "福建省",
            "city": "福州市",
            "name": "台江区"
          },
          {
            "areaCode": "350104",
            "province": "福建省",
            "city": "福州市",
            "name": "仓山区"
          },
          {
            "areaCode": "350105",
            "province": "福建省",
            "city": "福州市",
            "name": "马尾区"
          },
          {
            "areaCode": "350111",
            "province": "福建省",
            "city": "福州市",
            "name": "晋安区"
          },
          {
            "areaCode": "350121",
            "province": "福建省",
            "city": "福州市",
            "name": "闽侯县"
          },
          {
            "areaCode": "350122",
            "province": "福建省",
            "city": "福州市",
            "name": "连江县"
          },
          {
            "areaCode": "350123",
            "province": "福建省",
            "city": "福州市",
            "name": "罗源县"
          },
          {
            "areaCode": "350124",
            "province": "福建省",
            "city": "福州市",
            "name": "闽清县"
          },
          {
            "areaCode": "350125",
            "province": "福建省",
            "city": "福州市",
            "name": "永泰县"
          },
          {
            "areaCode": "350128",
            "province": "福建省",
            "city": "福州市",
            "name": "平潭县"
          },
          {
            "areaCode": "350181",
            "province": "福建省",
            "city": "福州市",
            "name": "福清市"
          },
          {
            "areaCode": "350112",
            "province": "福建省",
            "city": "福州市",
            "name": "长乐区"
          }
        ],
        "name": "福州市",
        "base": "fzh"
      },
      {
        "areaCode": "3502",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350203",
            "province": "福建省",
            "city": "厦门市",
            "name": "思明区"
          },
          {
            "areaCode": "350205",
            "province": "福建省",
            "city": "厦门市",
            "name": "海沧区"
          },
          {
            "areaCode": "350206",
            "province": "福建省",
            "city": "厦门市",
            "name": "湖里区"
          },
          {
            "areaCode": "350211",
            "province": "福建省",
            "city": "厦门市",
            "name": "集美区"
          },
          {
            "areaCode": "350212",
            "province": "福建省",
            "city": "厦门市",
            "name": "同安区"
          },
          {
            "areaCode": "350213",
            "province": "福建省",
            "city": "厦门市",
            "name": "翔安区"
          }
        ],
        "name": "厦门市",
        "base": "shamen"
      },
      {
        "areaCode": "3503",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350302",
            "province": "福建省",
            "city": "莆田市",
            "name": "城厢区"
          },
          {
            "areaCode": "350303",
            "province": "福建省",
            "city": "莆田市",
            "name": "涵江区"
          },
          {
            "areaCode": "350304",
            "province": "福建省",
            "city": "莆田市",
            "name": "荔城区"
          },
          {
            "areaCode": "350305",
            "province": "福建省",
            "city": "莆田市",
            "name": "秀屿区"
          },
          {
            "areaCode": "350322",
            "province": "福建省",
            "city": "莆田市",
            "name": "仙游县"
          }
        ],
        "name": "莆田市",
        "base": "putian"
      },
      {
        "areaCode": "3504",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350402",
            "province": "福建省",
            "city": "三明市",
            "name": "梅列区"
          },
          {
            "areaCode": "350403",
            "province": "福建省",
            "city": "三明市",
            "name": "三元区"
          },
          {
            "areaCode": "350421",
            "province": "福建省",
            "city": "三明市",
            "name": "明溪县"
          },
          {
            "areaCode": "350423",
            "province": "福建省",
            "city": "三明市",
            "name": "清流县"
          },
          {
            "areaCode": "350424",
            "province": "福建省",
            "city": "三明市",
            "name": "宁化县"
          },
          {
            "areaCode": "350425",
            "province": "福建省",
            "city": "三明市",
            "name": "大田县"
          },
          {
            "areaCode": "350426",
            "province": "福建省",
            "city": "三明市",
            "name": "尤溪县"
          },
          {
            "areaCode": "350427",
            "province": "福建省",
            "city": "三明市",
            "name": "沙县"
          },
          {
            "areaCode": "350428",
            "province": "福建省",
            "city": "三明市",
            "name": "将乐县"
          },
          {
            "areaCode": "350429",
            "province": "福建省",
            "city": "三明市",
            "name": "泰宁县"
          },
          {
            "areaCode": "350430",
            "province": "福建省",
            "city": "三明市",
            "name": "建宁县"
          },
          {
            "areaCode": "350481",
            "province": "福建省",
            "city": "三明市",
            "name": "永安市"
          }
        ],
        "name": "三明市",
        "base": "sanming"
      },
      {
        "areaCode": "3505",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350502",
            "province": "福建省",
            "city": "泉州市",
            "name": "鲤城区"
          },
          {
            "areaCode": "350503",
            "province": "福建省",
            "city": "泉州市",
            "name": "丰泽区"
          },
          {
            "areaCode": "350504",
            "province": "福建省",
            "city": "泉州市",
            "name": "洛江区"
          },
          {
            "areaCode": "350505",
            "province": "福建省",
            "city": "泉州市",
            "name": "泉港区"
          },
          {
            "areaCode": "350521",
            "province": "福建省",
            "city": "泉州市",
            "name": "惠安县"
          },
          {
            "areaCode": "350524",
            "province": "福建省",
            "city": "泉州市",
            "name": "安溪县"
          },
          {
            "areaCode": "350525",
            "province": "福建省",
            "city": "泉州市",
            "name": "永春县"
          },
          {
            "areaCode": "350526",
            "province": "福建省",
            "city": "泉州市",
            "name": "德化县"
          },
          {
            "areaCode": "350527",
            "province": "福建省",
            "city": "泉州市",
            "name": "金门县"
          },
          {
            "areaCode": "350581",
            "province": "福建省",
            "city": "泉州市",
            "name": "石狮市"
          },
          {
            "areaCode": "350582",
            "province": "福建省",
            "city": "泉州市",
            "name": "晋江市"
          },
          {
            "areaCode": "350583",
            "province": "福建省",
            "city": "泉州市",
            "name": "南安市"
          }
        ],
        "name": "泉州市",
        "base": "quanzhou"
      },
      {
        "areaCode": "3506",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350602",
            "province": "福建省",
            "city": "漳州市",
            "name": "芗城区"
          },
          {
            "areaCode": "350603",
            "province": "福建省",
            "city": "漳州市",
            "name": "龙文区"
          },
          {
            "areaCode": "350622",
            "province": "福建省",
            "city": "漳州市",
            "name": "云霄县"
          },
          {
            "areaCode": "350623",
            "province": "福建省",
            "city": "漳州市",
            "name": "漳浦县"
          },
          {
            "areaCode": "350624",
            "province": "福建省",
            "city": "漳州市",
            "name": "诏安县"
          },
          {
            "areaCode": "350625",
            "province": "福建省",
            "city": "漳州市",
            "name": "长泰县"
          },
          {
            "areaCode": "350626",
            "province": "福建省",
            "city": "漳州市",
            "name": "东山县"
          },
          {
            "areaCode": "350627",
            "province": "福建省",
            "city": "漳州市",
            "name": "南靖县"
          },
          {
            "areaCode": "350628",
            "province": "福建省",
            "city": "漳州市",
            "name": "平和县"
          },
          {
            "areaCode": "350629",
            "province": "福建省",
            "city": "漳州市",
            "name": "华安县"
          },
          {
            "areaCode": "350681",
            "province": "福建省",
            "city": "漳州市",
            "name": "龙海市"
          }
        ],
        "name": "漳州市",
        "base": "zhangzhou"
      },
      {
        "areaCode": "3507",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350702",
            "province": "福建省",
            "city": "南平市",
            "name": "延平区"
          },
          {
            "areaCode": "350703",
            "province": "福建省",
            "city": "南平市",
            "name": "建阳区"
          },
          {
            "areaCode": "350721",
            "province": "福建省",
            "city": "南平市",
            "name": "顺昌县"
          },
          {
            "areaCode": "350722",
            "province": "福建省",
            "city": "南平市",
            "name": "浦城县"
          },
          {
            "areaCode": "350723",
            "province": "福建省",
            "city": "南平市",
            "name": "光泽县"
          },
          {
            "areaCode": "350724",
            "province": "福建省",
            "city": "南平市",
            "name": "松溪县"
          },
          {
            "areaCode": "350725",
            "province": "福建省",
            "city": "南平市",
            "name": "政和县"
          },
          {
            "areaCode": "350781",
            "province": "福建省",
            "city": "南平市",
            "name": "邵武市"
          },
          {
            "areaCode": "350782",
            "province": "福建省",
            "city": "南平市",
            "name": "武夷山市"
          },
          {
            "areaCode": "350783",
            "province": "福建省",
            "city": "南平市",
            "name": "建瓯市"
          }
        ],
        "name": "南平市",
        "base": "nanping"
      },
      {
        "areaCode": "3508",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350802",
            "province": "福建省",
            "city": "龙岩市",
            "name": "新罗区"
          },
          {
            "areaCode": "350803",
            "province": "福建省",
            "city": "龙岩市",
            "name": "永定区"
          },
          {
            "areaCode": "350821",
            "province": "福建省",
            "city": "龙岩市",
            "name": "长汀县"
          },
          {
            "areaCode": "350823",
            "province": "福建省",
            "city": "龙岩市",
            "name": "上杭县"
          },
          {
            "areaCode": "350824",
            "province": "福建省",
            "city": "龙岩市",
            "name": "武平县"
          },
          {
            "areaCode": "350825",
            "province": "福建省",
            "city": "龙岩市",
            "name": "连城县"
          },
          {
            "areaCode": "350881",
            "province": "福建省",
            "city": "龙岩市",
            "name": "漳平市"
          }
        ],
        "name": "龙岩市",
        "base": "longyan"
      },
      {
        "areaCode": "3509",
        "province": "福建省",
        "district": [
          {
            "areaCode": "350902",
            "province": "福建省",
            "city": "宁德市",
            "name": "蕉城区"
          },
          {
            "areaCode": "350921",
            "province": "福建省",
            "city": "宁德市",
            "name": "霞浦县"
          },
          {
            "areaCode": "350922",
            "province": "福建省",
            "city": "宁德市",
            "name": "古田县"
          },
          {
            "areaCode": "350923",
            "province": "福建省",
            "city": "宁德市",
            "name": "屏南县"
          },
          {
            "areaCode": "350924",
            "province": "福建省",
            "city": "宁德市",
            "name": "寿宁县"
          },
          {
            "areaCode": "350925",
            "province": "福建省",
            "city": "宁德市",
            "name": "周宁县"
          },
          {
            "areaCode": "350926",
            "province": "福建省",
            "city": "宁德市",
            "name": "柘荣县"
          },
          {
            "areaCode": "350981",
            "province": "福建省",
            "city": "宁德市",
            "name": "福安市"
          },
          {
            "areaCode": "350982",
            "province": "福建省",
            "city": "宁德市",
            "name": "福鼎市"
          }
        ],
        "name": "宁德市",
        "base": "ningde"
      }
    ],
    "name": "福建省",
    "base": "fj"
  },
  {
    "areaCode": "36",
    "city": [
      {
        "areaCode": "3601",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360102",
            "province": "江西省",
            "city": "南昌市",
            "name": "东湖区"
          },
          {
            "areaCode": "360103",
            "province": "江西省",
            "city": "南昌市",
            "name": "西湖区"
          },
          {
            "areaCode": "360104",
            "province": "江西省",
            "city": "南昌市",
            "name": "青云谱区"
          },
          {
            "areaCode": "360105",
            "province": "江西省",
            "city": "南昌市",
            "name": "湾里区"
          },
          {
            "areaCode": "360111",
            "province": "江西省",
            "city": "南昌市",
            "name": "青山湖区"
          },
          {
            "areaCode": "360112",
            "province": "江西省",
            "city": "南昌市",
            "name": "新建区"
          },
          {
            "areaCode": "360121",
            "province": "江西省",
            "city": "南昌市",
            "name": "南昌县"
          },
          {
            "areaCode": "360123",
            "province": "江西省",
            "city": "南昌市",
            "name": "安义县"
          },
          {
            "areaCode": "360124",
            "province": "江西省",
            "city": "南昌市",
            "name": "进贤县"
          }
        ],
        "name": "南昌市",
        "base": "nanchang"
      },
      {
        "areaCode": "3602",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360202",
            "province": "江西省",
            "city": "景德镇市",
            "name": "昌江区"
          },
          {
            "areaCode": "360203",
            "province": "江西省",
            "city": "景德镇市",
            "name": "珠山区"
          },
          {
            "areaCode": "360222",
            "province": "江西省",
            "city": "景德镇市",
            "name": "浮梁县"
          },
          {
            "areaCode": "360281",
            "province": "江西省",
            "city": "景德镇市",
            "name": "乐平市"
          }
        ],
        "name": "景德镇市",
        "base": "jdz"
      },
      {
        "areaCode": "3603",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360302",
            "province": "江西省",
            "city": "萍乡市",
            "name": "安源区"
          },
          {
            "areaCode": "360313",
            "province": "江西省",
            "city": "萍乡市",
            "name": "湘东区"
          },
          {
            "areaCode": "360321",
            "province": "江西省",
            "city": "萍乡市",
            "name": "莲花县"
          },
          {
            "areaCode": "360322",
            "province": "江西省",
            "city": "萍乡市",
            "name": "上栗县"
          },
          {
            "areaCode": "360323",
            "province": "江西省",
            "city": "萍乡市",
            "name": "芦溪县"
          }
        ],
        "name": "萍乡市",
        "base": "pingxiang"
      },
      {
        "areaCode": "3604",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360402",
            "province": "江西省",
            "city": "九江市",
            "name": "濂溪区"
          },
          {
            "areaCode": "360403",
            "province": "江西省",
            "city": "九江市",
            "name": "浔阳区"
          },
          {
            "areaCode": "360404",
            "province": "江西省",
            "city": "九江市",
            "name": "柴桑区"
          },
          {
            "areaCode": "360423",
            "province": "江西省",
            "city": "九江市",
            "name": "武宁县"
          },
          {
            "areaCode": "360424",
            "province": "江西省",
            "city": "九江市",
            "name": "修水县"
          },
          {
            "areaCode": "360425",
            "province": "江西省",
            "city": "九江市",
            "name": "永修县"
          },
          {
            "areaCode": "360426",
            "province": "江西省",
            "city": "九江市",
            "name": "德安县"
          },
          {
            "areaCode": "360428",
            "province": "江西省",
            "city": "九江市",
            "name": "都昌县"
          },
          {
            "areaCode": "360429",
            "province": "江西省",
            "city": "九江市",
            "name": "湖口县"
          },
          {
            "areaCode": "360430",
            "province": "江西省",
            "city": "九江市",
            "name": "彭泽县"
          },
          {
            "areaCode": "360481",
            "province": "江西省",
            "city": "九江市",
            "name": "瑞昌市"
          },
          {
            "areaCode": "360482",
            "province": "江西省",
            "city": "九江市",
            "name": "共青城市"
          },
          {
            "areaCode": "360483",
            "province": "江西省",
            "city": "九江市",
            "name": "庐山市"
          }
        ],
        "name": "九江市",
        "base": "jiujiang"
      },
      {
        "areaCode": "3605",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360502",
            "province": "江西省",
            "city": "新余市",
            "name": "渝水区"
          },
          {
            "areaCode": "360521",
            "province": "江西省",
            "city": "新余市",
            "name": "分宜县"
          }
        ],
        "name": "新余市",
        "base": "xinyu"
      },
      {
        "areaCode": "3606",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360602",
            "province": "江西省",
            "city": "鹰潭市",
            "name": "月湖区"
          },
          {
            "areaCode": "360681",
            "province": "江西省",
            "city": "鹰潭市",
            "name": "贵溪市"
          },
          {
            "areaCode": "360603",
            "province": "江西省",
            "city": "鹰潭市",
            "name": "余江区"
          }
        ],
        "name": "鹰潭市",
        "base": "yingtan"
      },
      {
        "areaCode": "3607",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360702",
            "province": "江西省",
            "city": "赣州市",
            "name": "章贡区"
          },
          {
            "areaCode": "360703",
            "province": "江西省",
            "city": "赣州市",
            "name": "南康区"
          },
          {
            "areaCode": "360704",
            "province": "江西省",
            "city": "赣州市",
            "name": "赣县区"
          },
          {
            "areaCode": "360722",
            "province": "江西省",
            "city": "赣州市",
            "name": "信丰县"
          },
          {
            "areaCode": "360723",
            "province": "江西省",
            "city": "赣州市",
            "name": "大余县"
          },
          {
            "areaCode": "360724",
            "province": "江西省",
            "city": "赣州市",
            "name": "上犹县"
          },
          {
            "areaCode": "360725",
            "province": "江西省",
            "city": "赣州市",
            "name": "崇义县"
          },
          {
            "areaCode": "360726",
            "province": "江西省",
            "city": "赣州市",
            "name": "安远县"
          },
          {
            "areaCode": "360727",
            "province": "江西省",
            "city": "赣州市",
            "name": "龙南县"
          },
          {
            "areaCode": "360728",
            "province": "江西省",
            "city": "赣州市",
            "name": "定南县"
          },
          {
            "areaCode": "360729",
            "province": "江西省",
            "city": "赣州市",
            "name": "全南县"
          },
          {
            "areaCode": "360730",
            "province": "江西省",
            "city": "赣州市",
            "name": "宁都县"
          },
          {
            "areaCode": "360731",
            "province": "江西省",
            "city": "赣州市",
            "name": "于都县"
          },
          {
            "areaCode": "360732",
            "province": "江西省",
            "city": "赣州市",
            "name": "兴国县"
          },
          {
            "areaCode": "360733",
            "province": "江西省",
            "city": "赣州市",
            "name": "会昌县"
          },
          {
            "areaCode": "360734",
            "province": "江西省",
            "city": "赣州市",
            "name": "寻乌县"
          },
          {
            "areaCode": "360735",
            "province": "江西省",
            "city": "赣州市",
            "name": "石城县"
          },
          {
            "areaCode": "360781",
            "province": "江西省",
            "city": "赣州市",
            "name": "瑞金市"
          }
        ],
        "name": "赣州市",
        "base": "ganzhou"
      },
      {
        "areaCode": "3608",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360802",
            "province": "江西省",
            "city": "吉安市",
            "name": "吉州区"
          },
          {
            "areaCode": "360803",
            "province": "江西省",
            "city": "吉安市",
            "name": "青原区"
          },
          {
            "areaCode": "360821",
            "province": "江西省",
            "city": "吉安市",
            "name": "吉安县"
          },
          {
            "areaCode": "360822",
            "province": "江西省",
            "city": "吉安市",
            "name": "吉水县"
          },
          {
            "areaCode": "360823",
            "province": "江西省",
            "city": "吉安市",
            "name": "峡江县"
          },
          {
            "areaCode": "360824",
            "province": "江西省",
            "city": "吉安市",
            "name": "新干县"
          },
          {
            "areaCode": "360825",
            "province": "江西省",
            "city": "吉安市",
            "name": "永丰县"
          },
          {
            "areaCode": "360826",
            "province": "江西省",
            "city": "吉安市",
            "name": "泰和县"
          },
          {
            "areaCode": "360827",
            "province": "江西省",
            "city": "吉安市",
            "name": "遂川县"
          },
          {
            "areaCode": "360828",
            "province": "江西省",
            "city": "吉安市",
            "name": "万安县"
          },
          {
            "areaCode": "360829",
            "province": "江西省",
            "city": "吉安市",
            "name": "安福县"
          },
          {
            "areaCode": "360830",
            "province": "江西省",
            "city": "吉安市",
            "name": "永新县"
          },
          {
            "areaCode": "360881",
            "province": "江西省",
            "city": "吉安市",
            "name": "井冈山市"
          }
        ],
        "name": "吉安市",
        "base": "jian"
      },
      {
        "areaCode": "3609",
        "province": "江西省",
        "district": [
          {
            "areaCode": "360902",
            "province": "江西省",
            "city": "宜春市",
            "name": "袁州区"
          },
          {
            "areaCode": "360921",
            "province": "江西省",
            "city": "宜春市",
            "name": "奉新县"
          },
          {
            "areaCode": "360922",
            "province": "江西省",
            "city": "宜春市",
            "name": "万载县"
          },
          {
            "areaCode": "360923",
            "province": "江西省",
            "city": "宜春市",
            "name": "上高县"
          },
          {
            "areaCode": "360924",
            "province": "江西省",
            "city": "宜春市",
            "name": "宜丰县"
          },
          {
            "areaCode": "360925",
            "province": "江西省",
            "city": "宜春市",
            "name": "靖安县"
          },
          {
            "areaCode": "360926",
            "province": "江西省",
            "city": "宜春市",
            "name": "铜鼓县"
          },
          {
            "areaCode": "360981",
            "province": "江西省",
            "city": "宜春市",
            "name": "丰城市"
          },
          {
            "areaCode": "360982",
            "province": "江西省",
            "city": "宜春市",
            "name": "樟树市"
          },
          {
            "areaCode": "360983",
            "province": "江西省",
            "city": "宜春市",
            "name": "高安市"
          }
        ],
        "name": "宜春市",
        "base": "ych"
      },
      {
        "areaCode": "3610",
        "province": "江西省",
        "district": [
          {
            "areaCode": "361002",
            "province": "江西省",
            "city": "抚州市",
            "name": "临川区"
          },
          {
            "areaCode": "361003",
            "province": "江西省",
            "city": "抚州市",
            "name": "东乡区"
          },
          {
            "areaCode": "361021",
            "province": "江西省",
            "city": "抚州市",
            "name": "南城县"
          },
          {
            "areaCode": "361022",
            "province": "江西省",
            "city": "抚州市",
            "name": "黎川县"
          },
          {
            "areaCode": "361023",
            "province": "江西省",
            "city": "抚州市",
            "name": "南丰县"
          },
          {
            "areaCode": "361024",
            "province": "江西省",
            "city": "抚州市",
            "name": "崇仁县"
          },
          {
            "areaCode": "361025",
            "province": "江西省",
            "city": "抚州市",
            "name": "乐安县"
          },
          {
            "areaCode": "361026",
            "province": "江西省",
            "city": "抚州市",
            "name": "宜黄县"
          },
          {
            "areaCode": "361027",
            "province": "江西省",
            "city": "抚州市",
            "name": "金溪县"
          },
          {
            "areaCode": "361028",
            "province": "江西省",
            "city": "抚州市",
            "name": "资溪县"
          },
          {
            "areaCode": "361030",
            "province": "江西省",
            "city": "抚州市",
            "name": "广昌县"
          }
        ],
        "name": "抚州市",
        "base": "fuzhou"
      },
      {
        "areaCode": "3611",
        "province": "江西省",
        "district": [
          {
            "areaCode": "361102",
            "province": "江西省",
            "city": "上饶市",
            "name": "信州区"
          },
          {
            "areaCode": "361103",
            "province": "江西省",
            "city": "上饶市",
            "name": "广丰区"
          },
          {
            "areaCode": "361121",
            "province": "江西省",
            "city": "上饶市",
            "name": "上饶县"
          },
          {
            "areaCode": "361123",
            "province": "江西省",
            "city": "上饶市",
            "name": "玉山县"
          },
          {
            "areaCode": "361124",
            "province": "江西省",
            "city": "上饶市",
            "name": "铅山县"
          },
          {
            "areaCode": "361125",
            "province": "江西省",
            "city": "上饶市",
            "name": "横峰县"
          },
          {
            "areaCode": "361126",
            "province": "江西省",
            "city": "上饶市",
            "name": "弋阳县"
          },
          {
            "areaCode": "361127",
            "province": "江西省",
            "city": "上饶市",
            "name": "余干县"
          },
          {
            "areaCode": "361128",
            "province": "江西省",
            "city": "上饶市",
            "name": "鄱阳县"
          },
          {
            "areaCode": "361129",
            "province": "江西省",
            "city": "上饶市",
            "name": "万年县"
          },
          {
            "areaCode": "361130",
            "province": "江西省",
            "city": "上饶市",
            "name": "婺源县"
          },
          {
            "areaCode": "361181",
            "province": "江西省",
            "city": "上饶市",
            "name": "德兴市"
          }
        ],
        "name": "上饶市",
        "base": "shangrao"
      }
    ],
    "name": "江西省",
    "base": "jx"
  },
  {
    "areaCode": "37",
    "city": [
      {
        "areaCode": "3701",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370102",
            "province": "山东省",
            "city": "济南市",
            "name": "历下区"
          },
          {
            "areaCode": "370103",
            "province": "山东省",
            "city": "济南市",
            "name": "市中区"
          },
          {
            "areaCode": "370104",
            "province": "山东省",
            "city": "济南市",
            "name": "槐荫区"
          },
          {
            "areaCode": "370105",
            "province": "山东省",
            "city": "济南市",
            "name": "天桥区"
          },
          {
            "areaCode": "370112",
            "province": "山东省",
            "city": "济南市",
            "name": "历城区"
          },
          {
            "areaCode": "370113",
            "province": "山东省",
            "city": "济南市",
            "name": "长清区"
          },
          {
            "areaCode": "370114",
            "province": "山东省",
            "city": "济南市",
            "name": "章丘区"
          },
          {
            "areaCode": "370124",
            "province": "山东省",
            "city": "济南市",
            "name": "平阴县"
          },
          {
            "areaCode": "370126",
            "province": "山东省",
            "city": "济南市",
            "name": "商河县"
          },
          {
            "areaCode": "370171",
            "province": "山东省",
            "city": "济南市",
            "name": "济南高新技术产业开发区"
          },
          {
            "areaCode": "370115",
            "province": "山东省",
            "city": "济南市",
            "name": "济阳区"
          }
        ],
        "name": "济南市",
        "base": "jinan"
      },
      {
        "areaCode": "3702",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370202",
            "province": "山东省",
            "city": "青岛市",
            "name": "市南区"
          },
          {
            "areaCode": "370203",
            "province": "山东省",
            "city": "青岛市",
            "name": "市北区"
          },
          {
            "areaCode": "370211",
            "province": "山东省",
            "city": "青岛市",
            "name": "黄岛区"
          },
          {
            "areaCode": "370212",
            "province": "山东省",
            "city": "青岛市",
            "name": "崂山区"
          },
          {
            "areaCode": "370213",
            "province": "山东省",
            "city": "青岛市",
            "name": "李沧区"
          },
          {
            "areaCode": "370214",
            "province": "山东省",
            "city": "青岛市",
            "name": "城阳区"
          },
          {
            "areaCode": "370215",
            "province": "山东省",
            "city": "青岛市",
            "name": "即墨区"
          },
          {
            "areaCode": "370271",
            "province": "山东省",
            "city": "青岛市",
            "name": "青岛高新技术产业开发区"
          },
          {
            "areaCode": "370281",
            "province": "山东省",
            "city": "青岛市",
            "name": "胶州市"
          },
          {
            "areaCode": "370283",
            "province": "山东省",
            "city": "青岛市",
            "name": "平度市"
          },
          {
            "areaCode": "370285",
            "province": "山东省",
            "city": "青岛市",
            "name": "莱西市"
          }
        ],
        "name": "青岛市",
        "base": "qingdao"
      },
      {
        "areaCode": "3703",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370302",
            "province": "山东省",
            "city": "淄博市",
            "name": "淄川区"
          },
          {
            "areaCode": "370303",
            "province": "山东省",
            "city": "淄博市",
            "name": "张店区"
          },
          {
            "areaCode": "370304",
            "province": "山东省",
            "city": "淄博市",
            "name": "博山区"
          },
          {
            "areaCode": "370305",
            "province": "山东省",
            "city": "淄博市",
            "name": "临淄区"
          },
          {
            "areaCode": "370306",
            "province": "山东省",
            "city": "淄博市",
            "name": "周村区"
          },
          {
            "areaCode": "370321",
            "province": "山东省",
            "city": "淄博市",
            "name": "桓台县"
          },
          {
            "areaCode": "370322",
            "province": "山东省",
            "city": "淄博市",
            "name": "高青县"
          },
          {
            "areaCode": "370323",
            "province": "山东省",
            "city": "淄博市",
            "name": "沂源县"
          }
        ],
        "name": "淄博市",
        "base": "zibo"
      },
      {
        "areaCode": "3704",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370402",
            "province": "山东省",
            "city": "枣庄市",
            "name": "市中区"
          },
          {
            "areaCode": "370403",
            "province": "山东省",
            "city": "枣庄市",
            "name": "薛城区"
          },
          {
            "areaCode": "370404",
            "province": "山东省",
            "city": "枣庄市",
            "name": "峄城区"
          },
          {
            "areaCode": "370405",
            "province": "山东省",
            "city": "枣庄市",
            "name": "台儿庄区"
          },
          {
            "areaCode": "370406",
            "province": "山东省",
            "city": "枣庄市",
            "name": "山亭区"
          },
          {
            "areaCode": "370481",
            "province": "山东省",
            "city": "枣庄市",
            "name": "滕州市"
          }
        ],
        "name": "枣庄市",
        "base": "zaozhuang"
      },
      {
        "areaCode": "3705",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370502",
            "province": "山东省",
            "city": "东营市",
            "name": "东营区"
          },
          {
            "areaCode": "370503",
            "province": "山东省",
            "city": "东营市",
            "name": "河口区"
          },
          {
            "areaCode": "370505",
            "province": "山东省",
            "city": "东营市",
            "name": "垦利区"
          },
          {
            "areaCode": "370522",
            "province": "山东省",
            "city": "东营市",
            "name": "利津县"
          },
          {
            "areaCode": "370523",
            "province": "山东省",
            "city": "东营市",
            "name": "广饶县"
          },
          {
            "areaCode": "370571",
            "province": "山东省",
            "city": "东营市",
            "name": "东营经济技术开发区"
          },
          {
            "areaCode": "370572",
            "province": "山东省",
            "city": "东营市",
            "name": "东营港经济开发区"
          }
        ],
        "name": "东营市",
        "base": "dongying"
      },
      {
        "areaCode": "3706",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370602",
            "province": "山东省",
            "city": "烟台市",
            "name": "芝罘区"
          },
          {
            "areaCode": "370611",
            "province": "山东省",
            "city": "烟台市",
            "name": "福山区"
          },
          {
            "areaCode": "370612",
            "province": "山东省",
            "city": "烟台市",
            "name": "牟平区"
          },
          {
            "areaCode": "370613",
            "province": "山东省",
            "city": "烟台市",
            "name": "莱山区"
          },
          {
            "areaCode": "370634",
            "province": "山东省",
            "city": "烟台市",
            "name": "长岛县"
          },
          {
            "areaCode": "370671",
            "province": "山东省",
            "city": "烟台市",
            "name": "烟台高新技术产业开发区"
          },
          {
            "areaCode": "370672",
            "province": "山东省",
            "city": "烟台市",
            "name": "烟台经济技术开发区"
          },
          {
            "areaCode": "370681",
            "province": "山东省",
            "city": "烟台市",
            "name": "龙口市"
          },
          {
            "areaCode": "370682",
            "province": "山东省",
            "city": "烟台市",
            "name": "莱阳市"
          },
          {
            "areaCode": "370683",
            "province": "山东省",
            "city": "烟台市",
            "name": "莱州市"
          },
          {
            "areaCode": "370684",
            "province": "山东省",
            "city": "烟台市",
            "name": "蓬莱市"
          },
          {
            "areaCode": "370685",
            "province": "山东省",
            "city": "烟台市",
            "name": "招远市"
          },
          {
            "areaCode": "370686",
            "province": "山东省",
            "city": "烟台市",
            "name": "栖霞市"
          },
          {
            "areaCode": "370687",
            "province": "山东省",
            "city": "烟台市",
            "name": "海阳市"
          }
        ],
        "name": "烟台市",
        "base": "yantai"
      },
      {
        "areaCode": "3707",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370702",
            "province": "山东省",
            "city": "潍坊市",
            "name": "潍城区"
          },
          {
            "areaCode": "370703",
            "province": "山东省",
            "city": "潍坊市",
            "name": "寒亭区"
          },
          {
            "areaCode": "370704",
            "province": "山东省",
            "city": "潍坊市",
            "name": "坊子区"
          },
          {
            "areaCode": "370705",
            "province": "山东省",
            "city": "潍坊市",
            "name": "奎文区"
          },
          {
            "areaCode": "370724",
            "province": "山东省",
            "city": "潍坊市",
            "name": "临朐县"
          },
          {
            "areaCode": "370725",
            "province": "山东省",
            "city": "潍坊市",
            "name": "昌乐县"
          },
          {
            "areaCode": "370772",
            "province": "山东省",
            "city": "潍坊市",
            "name": "潍坊滨海经济技术开发区"
          },
          {
            "areaCode": "370781",
            "province": "山东省",
            "city": "潍坊市",
            "name": "青州市"
          },
          {
            "areaCode": "370782",
            "province": "山东省",
            "city": "潍坊市",
            "name": "诸城市"
          },
          {
            "areaCode": "370783",
            "province": "山东省",
            "city": "潍坊市",
            "name": "寿光市"
          },
          {
            "areaCode": "370784",
            "province": "山东省",
            "city": "潍坊市",
            "name": "安丘市"
          },
          {
            "areaCode": "370785",
            "province": "山东省",
            "city": "潍坊市",
            "name": "高密市"
          },
          {
            "areaCode": "370786",
            "province": "山东省",
            "city": "潍坊市",
            "name": "昌邑市"
          }
        ],
        "name": "潍坊市",
        "base": "weifang"
      },
      {
        "areaCode": "3708",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370811",
            "province": "山东省",
            "city": "济宁市",
            "name": "任城区"
          },
          {
            "areaCode": "370812",
            "province": "山东省",
            "city": "济宁市",
            "name": "兖州区"
          },
          {
            "areaCode": "370826",
            "province": "山东省",
            "city": "济宁市",
            "name": "微山县"
          },
          {
            "areaCode": "370827",
            "province": "山东省",
            "city": "济宁市",
            "name": "鱼台县"
          },
          {
            "areaCode": "370828",
            "province": "山东省",
            "city": "济宁市",
            "name": "金乡县"
          },
          {
            "areaCode": "370829",
            "province": "山东省",
            "city": "济宁市",
            "name": "嘉祥县"
          },
          {
            "areaCode": "370830",
            "province": "山东省",
            "city": "济宁市",
            "name": "汶上县"
          },
          {
            "areaCode": "370831",
            "province": "山东省",
            "city": "济宁市",
            "name": "泗水县"
          },
          {
            "areaCode": "370832",
            "province": "山东省",
            "city": "济宁市",
            "name": "梁山县"
          },
          {
            "areaCode": "370871",
            "province": "山东省",
            "city": "济宁市",
            "name": "济宁高新技术产业开发区"
          },
          {
            "areaCode": "370881",
            "province": "山东省",
            "city": "济宁市",
            "name": "曲阜市"
          },
          {
            "areaCode": "370883",
            "province": "山东省",
            "city": "济宁市",
            "name": "邹城市"
          }
        ],
        "name": "济宁市",
        "base": "jining"
      },
      {
        "areaCode": "3709",
        "province": "山东省",
        "district": [
          {
            "areaCode": "370902",
            "province": "山东省",
            "city": "泰安市",
            "name": "泰山区"
          },
          {
            "areaCode": "370911",
            "province": "山东省",
            "city": "泰安市",
            "name": "岱岳区"
          },
          {
            "areaCode": "370921",
            "province": "山东省",
            "city": "泰安市",
            "name": "宁阳县"
          },
          {
            "areaCode": "370923",
            "province": "山东省",
            "city": "泰安市",
            "name": "东平县"
          },
          {
            "areaCode": "370982",
            "province": "山东省",
            "city": "泰安市",
            "name": "新泰市"
          },
          {
            "areaCode": "370983",
            "province": "山东省",
            "city": "泰安市",
            "name": "肥城市"
          }
        ],
        "name": "泰安市",
        "base": "taian"
      },
      {
        "areaCode": "3710",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371002",
            "province": "山东省",
            "city": "威海市",
            "name": "环翠区"
          },
          {
            "areaCode": "371003",
            "province": "山东省",
            "city": "威海市",
            "name": "文登区"
          },
          {
            "areaCode": "371071",
            "province": "山东省",
            "city": "威海市",
            "name": "威海火炬高技术产业开发区"
          },
          {
            "areaCode": "371072",
            "province": "山东省",
            "city": "威海市",
            "name": "威海经济技术开发区"
          },
          {
            "areaCode": "371073",
            "province": "山东省",
            "city": "威海市",
            "name": "威海临港经济技术开发区"
          },
          {
            "areaCode": "371082",
            "province": "山东省",
            "city": "威海市",
            "name": "荣成市"
          },
          {
            "areaCode": "371083",
            "province": "山东省",
            "city": "威海市",
            "name": "乳山市"
          }
        ],
        "name": "威海市",
        "base": "weihai"
      },
      {
        "areaCode": "3711",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371102",
            "province": "山东省",
            "city": "日照市",
            "name": "东港区"
          },
          {
            "areaCode": "371103",
            "province": "山东省",
            "city": "日照市",
            "name": "岚山区"
          },
          {
            "areaCode": "371121",
            "province": "山东省",
            "city": "日照市",
            "name": "五莲县"
          },
          {
            "areaCode": "371122",
            "province": "山东省",
            "city": "日照市",
            "name": "莒县"
          },
          {
            "areaCode": "371171",
            "province": "山东省",
            "city": "日照市",
            "name": "日照经济技术开发区"
          }
        ],
        "name": "日照市",
        "base": "rizhao"
      },
      {
        "areaCode": "3712",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371202",
            "province": "山东省",
            "city": "莱芜市",
            "name": "莱城区"
          },
          {
            "areaCode": "371203",
            "province": "山东省",
            "city": "莱芜市",
            "name": "钢城区"
          }
        ],
        "name": "莱芜市",
        "base": "laiwu"
      },
      {
        "areaCode": "3713",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371302",
            "province": "山东省",
            "city": "临沂市",
            "name": "兰山区"
          },
          {
            "areaCode": "371311",
            "province": "山东省",
            "city": "临沂市",
            "name": "罗庄区"
          },
          {
            "areaCode": "371312",
            "province": "山东省",
            "city": "临沂市",
            "name": "河东区"
          },
          {
            "areaCode": "371321",
            "province": "山东省",
            "city": "临沂市",
            "name": "沂南县"
          },
          {
            "areaCode": "371322",
            "province": "山东省",
            "city": "临沂市",
            "name": "郯城县"
          },
          {
            "areaCode": "371323",
            "province": "山东省",
            "city": "临沂市",
            "name": "沂水县"
          },
          {
            "areaCode": "371324",
            "province": "山东省",
            "city": "临沂市",
            "name": "兰陵县"
          },
          {
            "areaCode": "371325",
            "province": "山东省",
            "city": "临沂市",
            "name": "费县"
          },
          {
            "areaCode": "371326",
            "province": "山东省",
            "city": "临沂市",
            "name": "平邑县"
          },
          {
            "areaCode": "371327",
            "province": "山东省",
            "city": "临沂市",
            "name": "莒南县"
          },
          {
            "areaCode": "371328",
            "province": "山东省",
            "city": "临沂市",
            "name": "蒙阴县"
          },
          {
            "areaCode": "371329",
            "province": "山东省",
            "city": "临沂市",
            "name": "临沭县"
          },
          {
            "areaCode": "371371",
            "province": "山东省",
            "city": "临沂市",
            "name": "临沂高新技术产业开发区"
          },
          {
            "areaCode": "371372",
            "province": "山东省",
            "city": "临沂市",
            "name": "临沂经济技术开发区"
          },
          {
            "areaCode": "371373",
            "province": "山东省",
            "city": "临沂市",
            "name": "临沂临港经济开发区"
          }
        ],
        "name": "临沂市",
        "base": "linyi"
      },
      {
        "areaCode": "3714",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371402",
            "province": "山东省",
            "city": "德州市",
            "name": "德城区"
          },
          {
            "areaCode": "371403",
            "province": "山东省",
            "city": "德州市",
            "name": "陵城区"
          },
          {
            "areaCode": "371422",
            "province": "山东省",
            "city": "德州市",
            "name": "宁津县"
          },
          {
            "areaCode": "371423",
            "province": "山东省",
            "city": "德州市",
            "name": "庆云县"
          },
          {
            "areaCode": "371424",
            "province": "山东省",
            "city": "德州市",
            "name": "临邑县"
          },
          {
            "areaCode": "371425",
            "province": "山东省",
            "city": "德州市",
            "name": "齐河县"
          },
          {
            "areaCode": "371426",
            "province": "山东省",
            "city": "德州市",
            "name": "平原县"
          },
          {
            "areaCode": "371427",
            "province": "山东省",
            "city": "德州市",
            "name": "夏津县"
          },
          {
            "areaCode": "371428",
            "province": "山东省",
            "city": "德州市",
            "name": "武城县"
          },
          {
            "areaCode": "371471",
            "province": "山东省",
            "city": "德州市",
            "name": "德州经济技术开发区"
          },
          {
            "areaCode": "371472",
            "province": "山东省",
            "city": "德州市",
            "name": "德州运河经济开发区"
          },
          {
            "areaCode": "371481",
            "province": "山东省",
            "city": "德州市",
            "name": "乐陵市"
          },
          {
            "areaCode": "371482",
            "province": "山东省",
            "city": "德州市",
            "name": "禹城市"
          }
        ],
        "name": "德州市",
        "base": "dezhou"
      },
      {
        "areaCode": "3715",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371502",
            "province": "山东省",
            "city": "聊城市",
            "name": "东昌府区"
          },
          {
            "areaCode": "371521",
            "province": "山东省",
            "city": "聊城市",
            "name": "阳谷县"
          },
          {
            "areaCode": "371522",
            "province": "山东省",
            "city": "聊城市",
            "name": "莘县"
          },
          {
            "areaCode": "371523",
            "province": "山东省",
            "city": "聊城市",
            "name": "茌平县"
          },
          {
            "areaCode": "371524",
            "province": "山东省",
            "city": "聊城市",
            "name": "东阿县"
          },
          {
            "areaCode": "371525",
            "province": "山东省",
            "city": "聊城市",
            "name": "冠县"
          },
          {
            "areaCode": "371526",
            "province": "山东省",
            "city": "聊城市",
            "name": "高唐县"
          },
          {
            "areaCode": "371581",
            "province": "山东省",
            "city": "聊城市",
            "name": "临清市"
          }
        ],
        "name": "聊城市",
        "base": "liaocheng"
      },
      {
        "areaCode": "3716",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371602",
            "province": "山东省",
            "city": "滨州市",
            "name": "滨城区"
          },
          {
            "areaCode": "371603",
            "province": "山东省",
            "city": "滨州市",
            "name": "沾化区"
          },
          {
            "areaCode": "371621",
            "province": "山东省",
            "city": "滨州市",
            "name": "惠民县"
          },
          {
            "areaCode": "371622",
            "province": "山东省",
            "city": "滨州市",
            "name": "阳信县"
          },
          {
            "areaCode": "371623",
            "province": "山东省",
            "city": "滨州市",
            "name": "无棣县"
          },
          {
            "areaCode": "371625",
            "province": "山东省",
            "city": "滨州市",
            "name": "博兴县"
          },
          {
            "areaCode": "371681",
            "province": "山东省",
            "city": "滨州市",
            "name": "邹平市"
          }
        ],
        "name": "滨州市",
        "base": "binzhou"
      },
      {
        "areaCode": "3717",
        "province": "山东省",
        "district": [
          {
            "areaCode": "371702",
            "province": "山东省",
            "city": "菏泽市",
            "name": "牡丹区"
          },
          {
            "areaCode": "371703",
            "province": "山东省",
            "city": "菏泽市",
            "name": "定陶区"
          },
          {
            "areaCode": "371721",
            "province": "山东省",
            "city": "菏泽市",
            "name": "曹县"
          },
          {
            "areaCode": "371722",
            "province": "山东省",
            "city": "菏泽市",
            "name": "单县"
          },
          {
            "areaCode": "371723",
            "province": "山东省",
            "city": "菏泽市",
            "name": "成武县"
          },
          {
            "areaCode": "371724",
            "province": "山东省",
            "city": "菏泽市",
            "name": "巨野县"
          },
          {
            "areaCode": "371725",
            "province": "山东省",
            "city": "菏泽市",
            "name": "郓城县"
          },
          {
            "areaCode": "371726",
            "province": "山东省",
            "city": "菏泽市",
            "name": "鄄城县"
          },
          {
            "areaCode": "371728",
            "province": "山东省",
            "city": "菏泽市",
            "name": "东明县"
          },
          {
            "areaCode": "371771",
            "province": "山东省",
            "city": "菏泽市",
            "name": "菏泽经济技术开发区"
          },
          {
            "areaCode": "371772",
            "province": "山东省",
            "city": "菏泽市",
            "name": "菏泽高新技术开发区"
          }
        ],
        "name": "菏泽市",
        "base": "heze"
      }
    ],
    "name": "山东省",
    "base": "sd"
  },
  {
    "areaCode": "41",
    "city": [
      {
        "areaCode": "4101",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410102",
            "province": "河南省",
            "city": "郑州市",
            "name": "中原区"
          },
          {
            "areaCode": "410103",
            "province": "河南省",
            "city": "郑州市",
            "name": "二七区"
          },
          {
            "areaCode": "410104",
            "province": "河南省",
            "city": "郑州市",
            "name": "管城回族区"
          },
          {
            "areaCode": "410105",
            "province": "河南省",
            "city": "郑州市",
            "name": "金水区"
          },
          {
            "areaCode": "410106",
            "province": "河南省",
            "city": "郑州市",
            "name": "上街区"
          },
          {
            "areaCode": "410108",
            "province": "河南省",
            "city": "郑州市",
            "name": "惠济区"
          },
          {
            "areaCode": "410122",
            "province": "河南省",
            "city": "郑州市",
            "name": "中牟县"
          },
          {
            "areaCode": "410171",
            "province": "河南省",
            "city": "郑州市",
            "name": "郑州经济技术开发区"
          },
          {
            "areaCode": "410172",
            "province": "河南省",
            "city": "郑州市",
            "name": "郑州高新技术产业开发区"
          },
          {
            "areaCode": "410173",
            "province": "河南省",
            "city": "郑州市",
            "name": "郑州航空港经济综合实验区"
          },
          {
            "areaCode": "410181",
            "province": "河南省",
            "city": "郑州市",
            "name": "巩义市"
          },
          {
            "areaCode": "410182",
            "province": "河南省",
            "city": "郑州市",
            "name": "荥阳市"
          },
          {
            "areaCode": "410183",
            "province": "河南省",
            "city": "郑州市",
            "name": "新密市"
          },
          {
            "areaCode": "410184",
            "province": "河南省",
            "city": "郑州市",
            "name": "新郑市"
          },
          {
            "areaCode": "410185",
            "province": "河南省",
            "city": "郑州市",
            "name": "登封市"
          }
        ],
        "name": "郑州市",
        "base": "zhengzhou"
      },
      {
        "areaCode": "4102",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410202",
            "province": "河南省",
            "city": "开封市",
            "name": "龙亭区"
          },
          {
            "areaCode": "410203",
            "province": "河南省",
            "city": "开封市",
            "name": "顺河回族区"
          },
          {
            "areaCode": "410204",
            "province": "河南省",
            "city": "开封市",
            "name": "鼓楼区"
          },
          {
            "areaCode": "410205",
            "province": "河南省",
            "city": "开封市",
            "name": "禹王台区"
          },
          {
            "areaCode": "410212",
            "province": "河南省",
            "city": "开封市",
            "name": "祥符区"
          },
          {
            "areaCode": "410221",
            "province": "河南省",
            "city": "开封市",
            "name": "杞县"
          },
          {
            "areaCode": "410222",
            "province": "河南省",
            "city": "开封市",
            "name": "通许县"
          },
          {
            "areaCode": "410223",
            "province": "河南省",
            "city": "开封市",
            "name": "尉氏县"
          },
          {
            "areaCode": "410225",
            "province": "河南省",
            "city": "开封市",
            "name": "兰考县"
          }
        ],
        "name": "开封市",
        "base": "kaifeng"
      },
      {
        "areaCode": "4103",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410302",
            "province": "河南省",
            "city": "洛阳市",
            "name": "老城区"
          },
          {
            "areaCode": "410303",
            "province": "河南省",
            "city": "洛阳市",
            "name": "西工区"
          },
          {
            "areaCode": "410304",
            "province": "河南省",
            "city": "洛阳市",
            "name": "瀍河回族区"
          },
          {
            "areaCode": "410305",
            "province": "河南省",
            "city": "洛阳市",
            "name": "涧西区"
          },
          {
            "areaCode": "410306",
            "province": "河南省",
            "city": "洛阳市",
            "name": "吉利区"
          },
          {
            "areaCode": "410311",
            "province": "河南省",
            "city": "洛阳市",
            "name": "洛龙区"
          },
          {
            "areaCode": "410322",
            "province": "河南省",
            "city": "洛阳市",
            "name": "孟津县"
          },
          {
            "areaCode": "410323",
            "province": "河南省",
            "city": "洛阳市",
            "name": "新安县"
          },
          {
            "areaCode": "410324",
            "province": "河南省",
            "city": "洛阳市",
            "name": "栾川县"
          },
          {
            "areaCode": "410325",
            "province": "河南省",
            "city": "洛阳市",
            "name": "嵩县"
          },
          {
            "areaCode": "410326",
            "province": "河南省",
            "city": "洛阳市",
            "name": "汝阳县"
          },
          {
            "areaCode": "410327",
            "province": "河南省",
            "city": "洛阳市",
            "name": "宜阳县"
          },
          {
            "areaCode": "410328",
            "province": "河南省",
            "city": "洛阳市",
            "name": "洛宁县"
          },
          {
            "areaCode": "410329",
            "province": "河南省",
            "city": "洛阳市",
            "name": "伊川县"
          },
          {
            "areaCode": "410371",
            "province": "河南省",
            "city": "洛阳市",
            "name": "洛阳高新技术产业开发区"
          },
          {
            "areaCode": "410381",
            "province": "河南省",
            "city": "洛阳市",
            "name": "偃师市"
          }
        ],
        "name": "洛阳市",
        "base": "luoyang"
      },
      {
        "areaCode": "4104",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410402",
            "province": "河南省",
            "city": "平顶山市",
            "name": "新华区"
          },
          {
            "areaCode": "410403",
            "province": "河南省",
            "city": "平顶山市",
            "name": "卫东区"
          },
          {
            "areaCode": "410404",
            "province": "河南省",
            "city": "平顶山市",
            "name": "石龙区"
          },
          {
            "areaCode": "410411",
            "province": "河南省",
            "city": "平顶山市",
            "name": "湛河区"
          },
          {
            "areaCode": "410421",
            "province": "河南省",
            "city": "平顶山市",
            "name": "宝丰县"
          },
          {
            "areaCode": "410422",
            "province": "河南省",
            "city": "平顶山市",
            "name": "叶县"
          },
          {
            "areaCode": "410423",
            "province": "河南省",
            "city": "平顶山市",
            "name": "鲁山县"
          },
          {
            "areaCode": "410425",
            "province": "河南省",
            "city": "平顶山市",
            "name": "郏县"
          },
          {
            "areaCode": "410471",
            "province": "河南省",
            "city": "平顶山市",
            "name": "平顶山高新技术产业开发区"
          },
          {
            "areaCode": "410472",
            "province": "河南省",
            "city": "平顶山市",
            "name": "平顶山市新城区"
          },
          {
            "areaCode": "410481",
            "province": "河南省",
            "city": "平顶山市",
            "name": "舞钢市"
          },
          {
            "areaCode": "410482",
            "province": "河南省",
            "city": "平顶山市",
            "name": "汝州市"
          }
        ],
        "name": "平顶山市",
        "base": "pds"
      },
      {
        "areaCode": "4105",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410502",
            "province": "河南省",
            "city": "安阳市",
            "name": "文峰区"
          },
          {
            "areaCode": "410503",
            "province": "河南省",
            "city": "安阳市",
            "name": "北关区"
          },
          {
            "areaCode": "410505",
            "province": "河南省",
            "city": "安阳市",
            "name": "殷都区"
          },
          {
            "areaCode": "410506",
            "province": "河南省",
            "city": "安阳市",
            "name": "龙安区"
          },
          {
            "areaCode": "410522",
            "province": "河南省",
            "city": "安阳市",
            "name": "安阳县"
          },
          {
            "areaCode": "410523",
            "province": "河南省",
            "city": "安阳市",
            "name": "汤阴县"
          },
          {
            "areaCode": "410526",
            "province": "河南省",
            "city": "安阳市",
            "name": "滑县"
          },
          {
            "areaCode": "410527",
            "province": "河南省",
            "city": "安阳市",
            "name": "内黄县"
          },
          {
            "areaCode": "410571",
            "province": "河南省",
            "city": "安阳市",
            "name": "安阳高新技术产业开发区"
          },
          {
            "areaCode": "410581",
            "province": "河南省",
            "city": "安阳市",
            "name": "林州市"
          }
        ],
        "name": "安阳市",
        "base": "anyang"
      },
      {
        "areaCode": "4106",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410602",
            "province": "河南省",
            "city": "鹤壁市",
            "name": "鹤山区"
          },
          {
            "areaCode": "410603",
            "province": "河南省",
            "city": "鹤壁市",
            "name": "山城区"
          },
          {
            "areaCode": "410611",
            "province": "河南省",
            "city": "鹤壁市",
            "name": "淇滨区"
          },
          {
            "areaCode": "410621",
            "province": "河南省",
            "city": "鹤壁市",
            "name": "浚县"
          },
          {
            "areaCode": "410622",
            "province": "河南省",
            "city": "鹤壁市",
            "name": "淇县"
          },
          {
            "areaCode": "410671",
            "province": "河南省",
            "city": "鹤壁市",
            "name": "鹤壁经济技术开发区"
          }
        ],
        "name": "鹤壁市",
        "base": "hebi"
      },
      {
        "areaCode": "4107",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410702",
            "province": "河南省",
            "city": "新乡市",
            "name": "红旗区"
          },
          {
            "areaCode": "410703",
            "province": "河南省",
            "city": "新乡市",
            "name": "卫滨区"
          },
          {
            "areaCode": "410704",
            "province": "河南省",
            "city": "新乡市",
            "name": "凤泉区"
          },
          {
            "areaCode": "410711",
            "province": "河南省",
            "city": "新乡市",
            "name": "牧野区"
          },
          {
            "areaCode": "410721",
            "province": "河南省",
            "city": "新乡市",
            "name": "新乡县"
          },
          {
            "areaCode": "410724",
            "province": "河南省",
            "city": "新乡市",
            "name": "获嘉县"
          },
          {
            "areaCode": "410725",
            "province": "河南省",
            "city": "新乡市",
            "name": "原阳县"
          },
          {
            "areaCode": "410726",
            "province": "河南省",
            "city": "新乡市",
            "name": "延津县"
          },
          {
            "areaCode": "410727",
            "province": "河南省",
            "city": "新乡市",
            "name": "封丘县"
          },
          {
            "areaCode": "410728",
            "province": "河南省",
            "city": "新乡市",
            "name": "长垣县"
          },
          {
            "areaCode": "410771",
            "province": "河南省",
            "city": "新乡市",
            "name": "新乡高新技术产业开发区"
          },
          {
            "areaCode": "410772",
            "province": "河南省",
            "city": "新乡市",
            "name": "新乡经济技术开发区"
          },
          {
            "areaCode": "410773",
            "province": "河南省",
            "city": "新乡市",
            "name": "新乡市平原城乡一体化示范区"
          },
          {
            "areaCode": "410781",
            "province": "河南省",
            "city": "新乡市",
            "name": "卫辉市"
          },
          {
            "areaCode": "410782",
            "province": "河南省",
            "city": "新乡市",
            "name": "辉县市"
          }
        ],
        "name": "新乡市",
        "base": "xinxiang"
      },
      {
        "areaCode": "4108",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410802",
            "province": "河南省",
            "city": "焦作市",
            "name": "解放区"
          },
          {
            "areaCode": "410803",
            "province": "河南省",
            "city": "焦作市",
            "name": "中站区"
          },
          {
            "areaCode": "410804",
            "province": "河南省",
            "city": "焦作市",
            "name": "马村区"
          },
          {
            "areaCode": "410811",
            "province": "河南省",
            "city": "焦作市",
            "name": "山阳区"
          },
          {
            "areaCode": "410821",
            "province": "河南省",
            "city": "焦作市",
            "name": "修武县"
          },
          {
            "areaCode": "410822",
            "province": "河南省",
            "city": "焦作市",
            "name": "博爱县"
          },
          {
            "areaCode": "410823",
            "province": "河南省",
            "city": "焦作市",
            "name": "武陟县"
          },
          {
            "areaCode": "410825",
            "province": "河南省",
            "city": "焦作市",
            "name": "温县"
          },
          {
            "areaCode": "410871",
            "province": "河南省",
            "city": "焦作市",
            "name": "焦作城乡一体化示范区"
          },
          {
            "areaCode": "410882",
            "province": "河南省",
            "city": "焦作市",
            "name": "沁阳市"
          },
          {
            "areaCode": "410883",
            "province": "河南省",
            "city": "焦作市",
            "name": "孟州市"
          }
        ],
        "name": "焦作市",
        "base": "jiaozuo"
      },
      {
        "areaCode": "4109",
        "province": "河南省",
        "district": [
          {
            "areaCode": "410902",
            "province": "河南省",
            "city": "濮阳市",
            "name": "华龙区"
          },
          {
            "areaCode": "410922",
            "province": "河南省",
            "city": "濮阳市",
            "name": "清丰县"
          },
          {
            "areaCode": "410923",
            "province": "河南省",
            "city": "濮阳市",
            "name": "南乐县"
          },
          {
            "areaCode": "410926",
            "province": "河南省",
            "city": "濮阳市",
            "name": "范县"
          },
          {
            "areaCode": "410927",
            "province": "河南省",
            "city": "濮阳市",
            "name": "台前县"
          },
          {
            "areaCode": "410928",
            "province": "河南省",
            "city": "濮阳市",
            "name": "濮阳县"
          },
          {
            "areaCode": "410971",
            "province": "河南省",
            "city": "濮阳市",
            "name": "河南濮阳工业园区"
          },
          {
            "areaCode": "410972",
            "province": "河南省",
            "city": "濮阳市",
            "name": "濮阳经济技术开发区"
          }
        ],
        "name": "濮阳市",
        "base": "puyang"
      },
      {
        "areaCode": "4110",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411002",
            "province": "河南省",
            "city": "许昌市",
            "name": "魏都区"
          },
          {
            "areaCode": "411003",
            "province": "河南省",
            "city": "许昌市",
            "name": "建安区"
          },
          {
            "areaCode": "411024",
            "province": "河南省",
            "city": "许昌市",
            "name": "鄢陵县"
          },
          {
            "areaCode": "411025",
            "province": "河南省",
            "city": "许昌市",
            "name": "襄城县"
          },
          {
            "areaCode": "411071",
            "province": "河南省",
            "city": "许昌市",
            "name": "许昌经济技术开发区"
          },
          {
            "areaCode": "411081",
            "province": "河南省",
            "city": "许昌市",
            "name": "禹州市"
          },
          {
            "areaCode": "411082",
            "province": "河南省",
            "city": "许昌市",
            "name": "长葛市"
          }
        ],
        "name": "许昌市",
        "base": "xuchang"
      },
      {
        "areaCode": "4111",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411102",
            "province": "河南省",
            "city": "漯河市",
            "name": "源汇区"
          },
          {
            "areaCode": "411103",
            "province": "河南省",
            "city": "漯河市",
            "name": "郾城区"
          },
          {
            "areaCode": "411104",
            "province": "河南省",
            "city": "漯河市",
            "name": "召陵区"
          },
          {
            "areaCode": "411121",
            "province": "河南省",
            "city": "漯河市",
            "name": "舞阳县"
          },
          {
            "areaCode": "411122",
            "province": "河南省",
            "city": "漯河市",
            "name": "临颍县"
          },
          {
            "areaCode": "411171",
            "province": "河南省",
            "city": "漯河市",
            "name": "漯河经济技术开发区"
          }
        ],
        "name": "漯河市",
        "base": "luohe"
      },
      {
        "areaCode": "4112",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411202",
            "province": "河南省",
            "city": "三门峡市",
            "name": "湖滨区"
          },
          {
            "areaCode": "411203",
            "province": "河南省",
            "city": "三门峡市",
            "name": "陕州区"
          },
          {
            "areaCode": "411221",
            "province": "河南省",
            "city": "三门峡市",
            "name": "渑池县"
          },
          {
            "areaCode": "411224",
            "province": "河南省",
            "city": "三门峡市",
            "name": "卢氏县"
          },
          {
            "areaCode": "411271",
            "province": "河南省",
            "city": "三门峡市",
            "name": "河南三门峡经济开发区"
          },
          {
            "areaCode": "411281",
            "province": "河南省",
            "city": "三门峡市",
            "name": "义马市"
          },
          {
            "areaCode": "411282",
            "province": "河南省",
            "city": "三门峡市",
            "name": "灵宝市"
          }
        ],
        "name": "三门峡市",
        "base": "smx"
      },
      {
        "areaCode": "4113",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411302",
            "province": "河南省",
            "city": "南阳市",
            "name": "宛城区"
          },
          {
            "areaCode": "411303",
            "province": "河南省",
            "city": "南阳市",
            "name": "卧龙区"
          },
          {
            "areaCode": "411321",
            "province": "河南省",
            "city": "南阳市",
            "name": "南召县"
          },
          {
            "areaCode": "411322",
            "province": "河南省",
            "city": "南阳市",
            "name": "方城县"
          },
          {
            "areaCode": "411323",
            "province": "河南省",
            "city": "南阳市",
            "name": "西峡县"
          },
          {
            "areaCode": "411324",
            "province": "河南省",
            "city": "南阳市",
            "name": "镇平县"
          },
          {
            "areaCode": "411325",
            "province": "河南省",
            "city": "南阳市",
            "name": "内乡县"
          },
          {
            "areaCode": "411326",
            "province": "河南省",
            "city": "南阳市",
            "name": "淅川县"
          },
          {
            "areaCode": "411327",
            "province": "河南省",
            "city": "南阳市",
            "name": "社旗县"
          },
          {
            "areaCode": "411328",
            "province": "河南省",
            "city": "南阳市",
            "name": "唐河县"
          },
          {
            "areaCode": "411329",
            "province": "河南省",
            "city": "南阳市",
            "name": "新野县"
          },
          {
            "areaCode": "411330",
            "province": "河南省",
            "city": "南阳市",
            "name": "桐柏县"
          },
          {
            "areaCode": "411371",
            "province": "河南省",
            "city": "南阳市",
            "name": "南阳高新技术产业开发区"
          },
          {
            "areaCode": "411372",
            "province": "河南省",
            "city": "南阳市",
            "name": "南阳市城乡一体化示范区"
          },
          {
            "areaCode": "411381",
            "province": "河南省",
            "city": "南阳市",
            "name": "邓州市"
          }
        ],
        "name": "南阳市",
        "base": "nanyang"
      },
      {
        "areaCode": "4114",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411402",
            "province": "河南省",
            "city": "商丘市",
            "name": "梁园区"
          },
          {
            "areaCode": "411403",
            "province": "河南省",
            "city": "商丘市",
            "name": "睢阳区"
          },
          {
            "areaCode": "411421",
            "province": "河南省",
            "city": "商丘市",
            "name": "民权县"
          },
          {
            "areaCode": "411422",
            "province": "河南省",
            "city": "商丘市",
            "name": "睢县"
          },
          {
            "areaCode": "411423",
            "province": "河南省",
            "city": "商丘市",
            "name": "宁陵县"
          },
          {
            "areaCode": "411424",
            "province": "河南省",
            "city": "商丘市",
            "name": "柘城县"
          },
          {
            "areaCode": "411425",
            "province": "河南省",
            "city": "商丘市",
            "name": "虞城县"
          },
          {
            "areaCode": "411426",
            "province": "河南省",
            "city": "商丘市",
            "name": "夏邑县"
          },
          {
            "areaCode": "411471",
            "province": "河南省",
            "city": "商丘市",
            "name": "豫东综合物流产业聚集区"
          },
          {
            "areaCode": "411472",
            "province": "河南省",
            "city": "商丘市",
            "name": "河南商丘经济开发区"
          },
          {
            "areaCode": "411481",
            "province": "河南省",
            "city": "商丘市",
            "name": "永城市"
          }
        ],
        "name": "商丘市",
        "base": "shangqiu"
      },
      {
        "areaCode": "4115",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411502",
            "province": "河南省",
            "city": "信阳市",
            "name": "浉河区"
          },
          {
            "areaCode": "411503",
            "province": "河南省",
            "city": "信阳市",
            "name": "平桥区"
          },
          {
            "areaCode": "411521",
            "province": "河南省",
            "city": "信阳市",
            "name": "罗山县"
          },
          {
            "areaCode": "411522",
            "province": "河南省",
            "city": "信阳市",
            "name": "光山县"
          },
          {
            "areaCode": "411523",
            "province": "河南省",
            "city": "信阳市",
            "name": "新县"
          },
          {
            "areaCode": "411524",
            "province": "河南省",
            "city": "信阳市",
            "name": "商城县"
          },
          {
            "areaCode": "411525",
            "province": "河南省",
            "city": "信阳市",
            "name": "固始县"
          },
          {
            "areaCode": "411526",
            "province": "河南省",
            "city": "信阳市",
            "name": "潢川县"
          },
          {
            "areaCode": "411527",
            "province": "河南省",
            "city": "信阳市",
            "name": "淮滨县"
          },
          {
            "areaCode": "411528",
            "province": "河南省",
            "city": "信阳市",
            "name": "息县"
          },
          {
            "areaCode": "411571",
            "province": "河南省",
            "city": "信阳市",
            "name": "信阳高新技术产业开发区"
          }
        ],
        "name": "信阳市",
        "base": "xinyang"
      },
      {
        "areaCode": "4116",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411602",
            "province": "河南省",
            "city": "周口市",
            "name": "川汇区"
          },
          {
            "areaCode": "411621",
            "province": "河南省",
            "city": "周口市",
            "name": "扶沟县"
          },
          {
            "areaCode": "411622",
            "province": "河南省",
            "city": "周口市",
            "name": "西华县"
          },
          {
            "areaCode": "411623",
            "province": "河南省",
            "city": "周口市",
            "name": "商水县"
          },
          {
            "areaCode": "411624",
            "province": "河南省",
            "city": "周口市",
            "name": "沈丘县"
          },
          {
            "areaCode": "411625",
            "province": "河南省",
            "city": "周口市",
            "name": "郸城县"
          },
          {
            "areaCode": "411626",
            "province": "河南省",
            "city": "周口市",
            "name": "淮阳县"
          },
          {
            "areaCode": "411627",
            "province": "河南省",
            "city": "周口市",
            "name": "太康县"
          },
          {
            "areaCode": "411628",
            "province": "河南省",
            "city": "周口市",
            "name": "鹿邑县"
          },
          {
            "areaCode": "411671",
            "province": "河南省",
            "city": "周口市",
            "name": "河南周口经济开发区"
          },
          {
            "areaCode": "411681",
            "province": "河南省",
            "city": "周口市",
            "name": "项城市"
          }
        ],
        "name": "周口市",
        "base": "zhoukou"
      },
      {
        "areaCode": "4117",
        "province": "河南省",
        "district": [
          {
            "areaCode": "411702",
            "province": "河南省",
            "city": "驻马店市",
            "name": "驿城区"
          },
          {
            "areaCode": "411721",
            "province": "河南省",
            "city": "驻马店市",
            "name": "西平县"
          },
          {
            "areaCode": "411722",
            "province": "河南省",
            "city": "驻马店市",
            "name": "上蔡县"
          },
          {
            "areaCode": "411723",
            "province": "河南省",
            "city": "驻马店市",
            "name": "平舆县"
          },
          {
            "areaCode": "411724",
            "province": "河南省",
            "city": "驻马店市",
            "name": "正阳县"
          },
          {
            "areaCode": "411725",
            "province": "河南省",
            "city": "驻马店市",
            "name": "确山县"
          },
          {
            "areaCode": "411726",
            "province": "河南省",
            "city": "驻马店市",
            "name": "泌阳县"
          },
          {
            "areaCode": "411727",
            "province": "河南省",
            "city": "驻马店市",
            "name": "汝南县"
          },
          {
            "areaCode": "411728",
            "province": "河南省",
            "city": "驻马店市",
            "name": "遂平县"
          },
          {
            "areaCode": "411729",
            "province": "河南省",
            "city": "驻马店市",
            "name": "新蔡县"
          },
          {
            "areaCode": "411771",
            "province": "河南省",
            "city": "驻马店市",
            "name": "河南驻马店经济开发区"
          }
        ],
        "name": "驻马店市",
        "base": "zmd"
      },
      {
        "areaCode": "4190",
        "province": "河南省",
        "district": [
          {
            "areaCode": "419001",
            "province": "河南省",
            "city": "省直辖县级行政区划",
            "name": "济源市"
          }
        ],
        "name": "省直辖县级行政区划",
        "base": "henzx"
      }
    ],
    "name": "河南省",
    "base": "hen"
  },
  {
    "areaCode": "42",
    "city": [
      {
        "areaCode": "4201",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420102",
            "province": "湖北省",
            "city": "武汉市",
            "name": "江岸区"
          },
          {
            "areaCode": "420103",
            "province": "湖北省",
            "city": "武汉市",
            "name": "江汉区"
          },
          {
            "areaCode": "420104",
            "province": "湖北省",
            "city": "武汉市",
            "name": "硚口区"
          },
          {
            "areaCode": "420105",
            "province": "湖北省",
            "city": "武汉市",
            "name": "汉阳区"
          },
          {
            "areaCode": "420106",
            "province": "湖北省",
            "city": "武汉市",
            "name": "武昌区"
          },
          {
            "areaCode": "420107",
            "province": "湖北省",
            "city": "武汉市",
            "name": "青山区"
          },
          {
            "areaCode": "420111",
            "province": "湖北省",
            "city": "武汉市",
            "name": "洪山区"
          },
          {
            "areaCode": "420112",
            "province": "湖北省",
            "city": "武汉市",
            "name": "东西湖区"
          },
          {
            "areaCode": "420113",
            "province": "湖北省",
            "city": "武汉市",
            "name": "汉南区"
          },
          {
            "areaCode": "420114",
            "province": "湖北省",
            "city": "武汉市",
            "name": "蔡甸区"
          },
          {
            "areaCode": "420115",
            "province": "湖北省",
            "city": "武汉市",
            "name": "江夏区"
          },
          {
            "areaCode": "420116",
            "province": "湖北省",
            "city": "武汉市",
            "name": "黄陂区"
          },
          {
            "areaCode": "420117",
            "province": "湖北省",
            "city": "武汉市",
            "name": "新洲区"
          }
        ],
        "name": "武汉市",
        "base": "wuhan"
      },
      {
        "areaCode": "4202",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420202",
            "province": "湖北省",
            "city": "黄石市",
            "name": "黄石港区"
          },
          {
            "areaCode": "420203",
            "province": "湖北省",
            "city": "黄石市",
            "name": "西塞山区"
          },
          {
            "areaCode": "420204",
            "province": "湖北省",
            "city": "黄石市",
            "name": "下陆区"
          },
          {
            "areaCode": "420205",
            "province": "湖北省",
            "city": "黄石市",
            "name": "铁山区"
          },
          {
            "areaCode": "420222",
            "province": "湖北省",
            "city": "黄石市",
            "name": "阳新县"
          },
          {
            "areaCode": "420281",
            "province": "湖北省",
            "city": "黄石市",
            "name": "大冶市"
          }
        ],
        "name": "黄石市",
        "base": "huangshi"
      },
      {
        "areaCode": "4203",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420302",
            "province": "湖北省",
            "city": "十堰市",
            "name": "茅箭区"
          },
          {
            "areaCode": "420303",
            "province": "湖北省",
            "city": "十堰市",
            "name": "张湾区"
          },
          {
            "areaCode": "420304",
            "province": "湖北省",
            "city": "十堰市",
            "name": "郧阳区"
          },
          {
            "areaCode": "420322",
            "province": "湖北省",
            "city": "十堰市",
            "name": "郧西县"
          },
          {
            "areaCode": "420323",
            "province": "湖北省",
            "city": "十堰市",
            "name": "竹山县"
          },
          {
            "areaCode": "420324",
            "province": "湖北省",
            "city": "十堰市",
            "name": "竹溪县"
          },
          {
            "areaCode": "420325",
            "province": "湖北省",
            "city": "十堰市",
            "name": "房县"
          },
          {
            "areaCode": "420381",
            "province": "湖北省",
            "city": "十堰市",
            "name": "丹江口市"
          }
        ],
        "name": "十堰市",
        "base": "shiyan"
      },
      {
        "areaCode": "4205",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420502",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "西陵区"
          },
          {
            "areaCode": "420503",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "伍家岗区"
          },
          {
            "areaCode": "420504",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "点军区"
          },
          {
            "areaCode": "420505",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "猇亭区"
          },
          {
            "areaCode": "420506",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "夷陵区"
          },
          {
            "areaCode": "420525",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "远安县"
          },
          {
            "areaCode": "420526",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "兴山县"
          },
          {
            "areaCode": "420527",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "秭归县"
          },
          {
            "areaCode": "420528",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "长阳土家族自治县"
          },
          {
            "areaCode": "420529",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "五峰土家族自治县"
          },
          {
            "areaCode": "420581",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "宜都市"
          },
          {
            "areaCode": "420582",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "当阳市"
          },
          {
            "areaCode": "420583",
            "province": "湖北省",
            "city": "宜昌市",
            "name": "枝江市"
          }
        ],
        "name": "宜昌市",
        "base": "yichang"
      },
      {
        "areaCode": "4206",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420602",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "襄城区"
          },
          {
            "areaCode": "420606",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "樊城区"
          },
          {
            "areaCode": "420607",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "襄州区"
          },
          {
            "areaCode": "420624",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "南漳县"
          },
          {
            "areaCode": "420625",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "谷城县"
          },
          {
            "areaCode": "420626",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "保康县"
          },
          {
            "areaCode": "420682",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "老河口市"
          },
          {
            "areaCode": "420683",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "枣阳市"
          },
          {
            "areaCode": "420684",
            "province": "湖北省",
            "city": "襄阳市",
            "name": "宜城市"
          }
        ],
        "name": "襄阳市",
        "base": "xiangyang"
      },
      {
        "areaCode": "4207",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420702",
            "province": "湖北省",
            "city": "鄂州市",
            "name": "梁子湖区"
          },
          {
            "areaCode": "420703",
            "province": "湖北省",
            "city": "鄂州市",
            "name": "华容区"
          },
          {
            "areaCode": "420704",
            "province": "湖北省",
            "city": "鄂州市",
            "name": "鄂城区"
          }
        ],
        "name": "鄂州市",
        "base": "ezhou"
      },
      {
        "areaCode": "4208",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420802",
            "province": "湖北省",
            "city": "荆门市",
            "name": "东宝区"
          },
          {
            "areaCode": "420804",
            "province": "湖北省",
            "city": "荆门市",
            "name": "掇刀区"
          },
          {
            "areaCode": "420822",
            "province": "湖北省",
            "city": "荆门市",
            "name": "沙洋县"
          },
          {
            "areaCode": "420881",
            "province": "湖北省",
            "city": "荆门市",
            "name": "钟祥市"
          },
          {
            "areaCode": "420882",
            "province": "湖北省",
            "city": "荆门市",
            "name": "京山市"
          }
        ],
        "name": "荆门市",
        "base": "jingmen"
      },
      {
        "areaCode": "4209",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "420902",
            "province": "湖北省",
            "city": "孝感市",
            "name": "孝南区"
          },
          {
            "areaCode": "420921",
            "province": "湖北省",
            "city": "孝感市",
            "name": "孝昌县"
          },
          {
            "areaCode": "420922",
            "province": "湖北省",
            "city": "孝感市",
            "name": "大悟县"
          },
          {
            "areaCode": "420923",
            "province": "湖北省",
            "city": "孝感市",
            "name": "云梦县"
          },
          {
            "areaCode": "420981",
            "province": "湖北省",
            "city": "孝感市",
            "name": "应城市"
          },
          {
            "areaCode": "420982",
            "province": "湖北省",
            "city": "孝感市",
            "name": "安陆市"
          },
          {
            "areaCode": "420984",
            "province": "湖北省",
            "city": "孝感市",
            "name": "汉川市"
          }
        ],
        "name": "孝感市",
        "base": "xiaogan"
      },
      {
        "areaCode": "4210",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "421002",
            "province": "湖北省",
            "city": "荆州市",
            "name": "沙市区"
          },
          {
            "areaCode": "421003",
            "province": "湖北省",
            "city": "荆州市",
            "name": "荆州区"
          },
          {
            "areaCode": "421022",
            "province": "湖北省",
            "city": "荆州市",
            "name": "公安县"
          },
          {
            "areaCode": "421023",
            "province": "湖北省",
            "city": "荆州市",
            "name": "监利县"
          },
          {
            "areaCode": "421024",
            "province": "湖北省",
            "city": "荆州市",
            "name": "江陵县"
          },
          {
            "areaCode": "421071",
            "province": "湖北省",
            "city": "荆州市",
            "name": "荆州经济技术开发区"
          },
          {
            "areaCode": "421081",
            "province": "湖北省",
            "city": "荆州市",
            "name": "石首市"
          },
          {
            "areaCode": "421083",
            "province": "湖北省",
            "city": "荆州市",
            "name": "洪湖市"
          },
          {
            "areaCode": "421087",
            "province": "湖北省",
            "city": "荆州市",
            "name": "松滋市"
          }
        ],
        "name": "荆州市",
        "base": "jingzhou"
      },
      {
        "areaCode": "4211",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "421102",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "黄州区"
          },
          {
            "areaCode": "421121",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "团风县"
          },
          {
            "areaCode": "421122",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "红安县"
          },
          {
            "areaCode": "421123",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "罗田县"
          },
          {
            "areaCode": "421124",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "英山县"
          },
          {
            "areaCode": "421125",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "浠水县"
          },
          {
            "areaCode": "421126",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "蕲春县"
          },
          {
            "areaCode": "421127",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "黄梅县"
          },
          {
            "areaCode": "421171",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "龙感湖管理区"
          },
          {
            "areaCode": "421181",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "麻城市"
          },
          {
            "areaCode": "421182",
            "province": "湖北省",
            "city": "黄冈市",
            "name": "武穴市"
          }
        ],
        "name": "黄冈市",
        "base": "huanggang"
      },
      {
        "areaCode": "4212",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "421202",
            "province": "湖北省",
            "city": "咸宁市",
            "name": "咸安区"
          },
          {
            "areaCode": "421221",
            "province": "湖北省",
            "city": "咸宁市",
            "name": "嘉鱼县"
          },
          {
            "areaCode": "421222",
            "province": "湖北省",
            "city": "咸宁市",
            "name": "通城县"
          },
          {
            "areaCode": "421223",
            "province": "湖北省",
            "city": "咸宁市",
            "name": "崇阳县"
          },
          {
            "areaCode": "421224",
            "province": "湖北省",
            "city": "咸宁市",
            "name": "通山县"
          },
          {
            "areaCode": "421281",
            "province": "湖北省",
            "city": "咸宁市",
            "name": "赤壁市"
          }
        ],
        "name": "咸宁市",
        "base": "xianning"
      },
      {
        "areaCode": "4213",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "421303",
            "province": "湖北省",
            "city": "随州市",
            "name": "曾都区"
          },
          {
            "areaCode": "421321",
            "province": "湖北省",
            "city": "随州市",
            "name": "随县"
          },
          {
            "areaCode": "421381",
            "province": "湖北省",
            "city": "随州市",
            "name": "广水市"
          }
        ],
        "name": "随州市",
        "base": "suizhou"
      },
      {
        "areaCode": "4228",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "422801",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "恩施市"
          },
          {
            "areaCode": "422802",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "利川市"
          },
          {
            "areaCode": "422822",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "建始县"
          },
          {
            "areaCode": "422823",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "巴东县"
          },
          {
            "areaCode": "422825",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "宣恩县"
          },
          {
            "areaCode": "422826",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "咸丰县"
          },
          {
            "areaCode": "422827",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "来凤县"
          },
          {
            "areaCode": "422828",
            "province": "湖北省",
            "city": "恩施土家族苗族自治州",
            "name": "鹤峰县"
          }
        ],
        "name": "恩施土家族苗族自治州",
        "base": "estjz"
      },
      {
        "areaCode": "4290",
        "province": "湖北省",
        "district": [
          {
            "areaCode": "429004",
            "province": "湖北省",
            "city": "省直辖县级行政区划",
            "name": "仙桃市"
          },
          {
            "areaCode": "429005",
            "province": "湖北省",
            "city": "省直辖县级行政区划",
            "name": "潜江市"
          },
          {
            "areaCode": "429006",
            "province": "湖北省",
            "city": "省直辖县级行政区划",
            "name": "天门市"
          },
          {
            "areaCode": "429021",
            "province": "湖北省",
            "city": "省直辖县级行政区划",
            "name": "神农架林区"
          }
        ],
        "name": "省直辖县级行政区划",
        "base": "hubzx"
      }
    ],
    "name": "湖北省",
    "base": "hub"
  },
  {
    "areaCode": "43",
    "city": [
      {
        "areaCode": "4301",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430102",
            "province": "湖南省",
            "city": "长沙市",
            "name": "芙蓉区"
          },
          {
            "areaCode": "430103",
            "province": "湖南省",
            "city": "长沙市",
            "name": "天心区"
          },
          {
            "areaCode": "430104",
            "province": "湖南省",
            "city": "长沙市",
            "name": "岳麓区"
          },
          {
            "areaCode": "430105",
            "province": "湖南省",
            "city": "长沙市",
            "name": "开福区"
          },
          {
            "areaCode": "430111",
            "province": "湖南省",
            "city": "长沙市",
            "name": "雨花区"
          },
          {
            "areaCode": "430112",
            "province": "湖南省",
            "city": "长沙市",
            "name": "望城区"
          },
          {
            "areaCode": "430121",
            "province": "湖南省",
            "city": "长沙市",
            "name": "长沙县"
          },
          {
            "areaCode": "430181",
            "province": "湖南省",
            "city": "长沙市",
            "name": "浏阳市"
          },
          {
            "areaCode": "430182",
            "province": "湖南省",
            "city": "长沙市",
            "name": "宁乡市"
          }
        ],
        "name": "长沙市",
        "base": "zhangsha"
      },
      {
        "areaCode": "4302",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430202",
            "province": "湖南省",
            "city": "株洲市",
            "name": "荷塘区"
          },
          {
            "areaCode": "430203",
            "province": "湖南省",
            "city": "株洲市",
            "name": "芦淞区"
          },
          {
            "areaCode": "430204",
            "province": "湖南省",
            "city": "株洲市",
            "name": "石峰区"
          },
          {
            "areaCode": "430211",
            "province": "湖南省",
            "city": "株洲市",
            "name": "天元区"
          },
          {
            "areaCode": "430223",
            "province": "湖南省",
            "city": "株洲市",
            "name": "攸县"
          },
          {
            "areaCode": "430224",
            "province": "湖南省",
            "city": "株洲市",
            "name": "茶陵县"
          },
          {
            "areaCode": "430225",
            "province": "湖南省",
            "city": "株洲市",
            "name": "炎陵县"
          },
          {
            "areaCode": "430271",
            "province": "湖南省",
            "city": "株洲市",
            "name": "云龙示范区"
          },
          {
            "areaCode": "430281",
            "province": "湖南省",
            "city": "株洲市",
            "name": "醴陵市"
          },
          {
            "areaCode": "430212",
            "province": "湖南省",
            "city": "株洲市",
            "name": "渌口区"
          }
        ],
        "name": "株洲市",
        "base": "zhuzhou"
      },
      {
        "areaCode": "4303",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430302",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "雨湖区"
          },
          {
            "areaCode": "430304",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "岳塘区"
          },
          {
            "areaCode": "430321",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "湘潭县"
          },
          {
            "areaCode": "430371",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "湖南湘潭高新技术产业园区"
          },
          {
            "areaCode": "430372",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "湘潭昭山示范区"
          },
          {
            "areaCode": "430373",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "湘潭九华示范区"
          },
          {
            "areaCode": "430381",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "湘乡市"
          },
          {
            "areaCode": "430382",
            "province": "湖南省",
            "city": "湘潭市",
            "name": "韶山市"
          }
        ],
        "name": "湘潭市",
        "base": "xiangtan"
      },
      {
        "areaCode": "4304",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430405",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "珠晖区"
          },
          {
            "areaCode": "430406",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "雁峰区"
          },
          {
            "areaCode": "430407",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "石鼓区"
          },
          {
            "areaCode": "430408",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "蒸湘区"
          },
          {
            "areaCode": "430412",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "南岳区"
          },
          {
            "areaCode": "430421",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "衡阳县"
          },
          {
            "areaCode": "430422",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "衡南县"
          },
          {
            "areaCode": "430423",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "衡山县"
          },
          {
            "areaCode": "430424",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "衡东县"
          },
          {
            "areaCode": "430426",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "祁东县"
          },
          {
            "areaCode": "430471",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "衡阳综合保税区"
          },
          {
            "areaCode": "430472",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "湖南衡阳高新技术产业园区"
          },
          {
            "areaCode": "430473",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "湖南衡阳松木经济开发区"
          },
          {
            "areaCode": "430481",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "耒阳市"
          },
          {
            "areaCode": "430482",
            "province": "湖南省",
            "city": "衡阳市",
            "name": "常宁市"
          }
        ],
        "name": "衡阳市",
        "base": "hengyang"
      },
      {
        "areaCode": "4305",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430502",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "双清区"
          },
          {
            "areaCode": "430503",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "大祥区"
          },
          {
            "areaCode": "430511",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "北塔区"
          },
          {
            "areaCode": "430521",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "邵东县"
          },
          {
            "areaCode": "430522",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "新邵县"
          },
          {
            "areaCode": "430523",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "邵阳县"
          },
          {
            "areaCode": "430524",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "隆回县"
          },
          {
            "areaCode": "430525",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "洞口县"
          },
          {
            "areaCode": "430527",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "绥宁县"
          },
          {
            "areaCode": "430528",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "新宁县"
          },
          {
            "areaCode": "430529",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "城步苗族自治县"
          },
          {
            "areaCode": "430581",
            "province": "湖南省",
            "city": "邵阳市",
            "name": "武冈市"
          }
        ],
        "name": "邵阳市",
        "base": "shaoyang"
      },
      {
        "areaCode": "4306",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430602",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "岳阳楼区"
          },
          {
            "areaCode": "430603",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "云溪区"
          },
          {
            "areaCode": "430611",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "君山区"
          },
          {
            "areaCode": "430621",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "岳阳县"
          },
          {
            "areaCode": "430623",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "华容县"
          },
          {
            "areaCode": "430624",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "湘阴县"
          },
          {
            "areaCode": "430626",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "平江县"
          },
          {
            "areaCode": "430671",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "岳阳市屈原管理区"
          },
          {
            "areaCode": "430681",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "汨罗市"
          },
          {
            "areaCode": "430682",
            "province": "湖南省",
            "city": "岳阳市",
            "name": "临湘市"
          }
        ],
        "name": "岳阳市",
        "base": "yueyang"
      },
      {
        "areaCode": "4307",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430702",
            "province": "湖南省",
            "city": "常德市",
            "name": "武陵区"
          },
          {
            "areaCode": "430703",
            "province": "湖南省",
            "city": "常德市",
            "name": "鼎城区"
          },
          {
            "areaCode": "430721",
            "province": "湖南省",
            "city": "常德市",
            "name": "安乡县"
          },
          {
            "areaCode": "430722",
            "province": "湖南省",
            "city": "常德市",
            "name": "汉寿县"
          },
          {
            "areaCode": "430723",
            "province": "湖南省",
            "city": "常德市",
            "name": "澧县"
          },
          {
            "areaCode": "430724",
            "province": "湖南省",
            "city": "常德市",
            "name": "临澧县"
          },
          {
            "areaCode": "430725",
            "province": "湖南省",
            "city": "常德市",
            "name": "桃源县"
          },
          {
            "areaCode": "430726",
            "province": "湖南省",
            "city": "常德市",
            "name": "石门县"
          },
          {
            "areaCode": "430771",
            "province": "湖南省",
            "city": "常德市",
            "name": "常德市西洞庭管理区"
          },
          {
            "areaCode": "430781",
            "province": "湖南省",
            "city": "常德市",
            "name": "津市市"
          }
        ],
        "name": "常德市",
        "base": "changde"
      },
      {
        "areaCode": "4308",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430802",
            "province": "湖南省",
            "city": "张家界市",
            "name": "永定区"
          },
          {
            "areaCode": "430811",
            "province": "湖南省",
            "city": "张家界市",
            "name": "武陵源区"
          },
          {
            "areaCode": "430821",
            "province": "湖南省",
            "city": "张家界市",
            "name": "慈利县"
          },
          {
            "areaCode": "430822",
            "province": "湖南省",
            "city": "张家界市",
            "name": "桑植县"
          }
        ],
        "name": "张家界市",
        "base": "zjj"
      },
      {
        "areaCode": "4309",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "430902",
            "province": "湖南省",
            "city": "益阳市",
            "name": "资阳区"
          },
          {
            "areaCode": "430903",
            "province": "湖南省",
            "city": "益阳市",
            "name": "赫山区"
          },
          {
            "areaCode": "430921",
            "province": "湖南省",
            "city": "益阳市",
            "name": "南县"
          },
          {
            "areaCode": "430922",
            "province": "湖南省",
            "city": "益阳市",
            "name": "桃江县"
          },
          {
            "areaCode": "430923",
            "province": "湖南省",
            "city": "益阳市",
            "name": "安化县"
          },
          {
            "areaCode": "430971",
            "province": "湖南省",
            "city": "益阳市",
            "name": "益阳市大通湖管理区"
          },
          {
            "areaCode": "430972",
            "province": "湖南省",
            "city": "益阳市",
            "name": "湖南益阳高新技术产业园区"
          },
          {
            "areaCode": "430981",
            "province": "湖南省",
            "city": "益阳市",
            "name": "沅江市"
          }
        ],
        "name": "益阳市",
        "base": "yiyang"
      },
      {
        "areaCode": "4310",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "431002",
            "province": "湖南省",
            "city": "郴州市",
            "name": "北湖区"
          },
          {
            "areaCode": "431003",
            "province": "湖南省",
            "city": "郴州市",
            "name": "苏仙区"
          },
          {
            "areaCode": "431021",
            "province": "湖南省",
            "city": "郴州市",
            "name": "桂阳县"
          },
          {
            "areaCode": "431022",
            "province": "湖南省",
            "city": "郴州市",
            "name": "宜章县"
          },
          {
            "areaCode": "431023",
            "province": "湖南省",
            "city": "郴州市",
            "name": "永兴县"
          },
          {
            "areaCode": "431024",
            "province": "湖南省",
            "city": "郴州市",
            "name": "嘉禾县"
          },
          {
            "areaCode": "431025",
            "province": "湖南省",
            "city": "郴州市",
            "name": "临武县"
          },
          {
            "areaCode": "431026",
            "province": "湖南省",
            "city": "郴州市",
            "name": "汝城县"
          },
          {
            "areaCode": "431027",
            "province": "湖南省",
            "city": "郴州市",
            "name": "桂东县"
          },
          {
            "areaCode": "431028",
            "province": "湖南省",
            "city": "郴州市",
            "name": "安仁县"
          },
          {
            "areaCode": "431081",
            "province": "湖南省",
            "city": "郴州市",
            "name": "资兴市"
          }
        ],
        "name": "郴州市",
        "base": "chenzhou"
      },
      {
        "areaCode": "4311",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "431102",
            "province": "湖南省",
            "city": "永州市",
            "name": "零陵区"
          },
          {
            "areaCode": "431103",
            "province": "湖南省",
            "city": "永州市",
            "name": "冷水滩区"
          },
          {
            "areaCode": "431121",
            "province": "湖南省",
            "city": "永州市",
            "name": "祁阳县"
          },
          {
            "areaCode": "431122",
            "province": "湖南省",
            "city": "永州市",
            "name": "东安县"
          },
          {
            "areaCode": "431123",
            "province": "湖南省",
            "city": "永州市",
            "name": "双牌县"
          },
          {
            "areaCode": "431124",
            "province": "湖南省",
            "city": "永州市",
            "name": "道县"
          },
          {
            "areaCode": "431125",
            "province": "湖南省",
            "city": "永州市",
            "name": "江永县"
          },
          {
            "areaCode": "431126",
            "province": "湖南省",
            "city": "永州市",
            "name": "宁远县"
          },
          {
            "areaCode": "431127",
            "province": "湖南省",
            "city": "永州市",
            "name": "蓝山县"
          },
          {
            "areaCode": "431128",
            "province": "湖南省",
            "city": "永州市",
            "name": "新田县"
          },
          {
            "areaCode": "431129",
            "province": "湖南省",
            "city": "永州市",
            "name": "江华瑶族自治县"
          },
          {
            "areaCode": "431171",
            "province": "湖南省",
            "city": "永州市",
            "name": "永州经济技术开发区"
          },
          {
            "areaCode": "431172",
            "province": "湖南省",
            "city": "永州市",
            "name": "永州市金洞管理区"
          },
          {
            "areaCode": "431173",
            "province": "湖南省",
            "city": "永州市",
            "name": "永州市回龙圩管理区"
          }
        ],
        "name": "永州市",
        "base": "yongzhou"
      },
      {
        "areaCode": "4312",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "431202",
            "province": "湖南省",
            "city": "怀化市",
            "name": "鹤城区"
          },
          {
            "areaCode": "431221",
            "province": "湖南省",
            "city": "怀化市",
            "name": "中方县"
          },
          {
            "areaCode": "431222",
            "province": "湖南省",
            "city": "怀化市",
            "name": "沅陵县"
          },
          {
            "areaCode": "431223",
            "province": "湖南省",
            "city": "怀化市",
            "name": "辰溪县"
          },
          {
            "areaCode": "431224",
            "province": "湖南省",
            "city": "怀化市",
            "name": "溆浦县"
          },
          {
            "areaCode": "431225",
            "province": "湖南省",
            "city": "怀化市",
            "name": "会同县"
          },
          {
            "areaCode": "431226",
            "province": "湖南省",
            "city": "怀化市",
            "name": "麻阳苗族自治县"
          },
          {
            "areaCode": "431227",
            "province": "湖南省",
            "city": "怀化市",
            "name": "新晃侗族自治县"
          },
          {
            "areaCode": "431228",
            "province": "湖南省",
            "city": "怀化市",
            "name": "芷江侗族自治县"
          },
          {
            "areaCode": "431229",
            "province": "湖南省",
            "city": "怀化市",
            "name": "靖州苗族侗族自治县"
          },
          {
            "areaCode": "431230",
            "province": "湖南省",
            "city": "怀化市",
            "name": "通道侗族自治县"
          },
          {
            "areaCode": "431271",
            "province": "湖南省",
            "city": "怀化市",
            "name": "怀化市洪江管理区"
          },
          {
            "areaCode": "431281",
            "province": "湖南省",
            "city": "怀化市",
            "name": "洪江市"
          }
        ],
        "name": "怀化市",
        "base": "huaihua"
      },
      {
        "areaCode": "4313",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "431302",
            "province": "湖南省",
            "city": "娄底市",
            "name": "娄星区"
          },
          {
            "areaCode": "431321",
            "province": "湖南省",
            "city": "娄底市",
            "name": "双峰县"
          },
          {
            "areaCode": "431322",
            "province": "湖南省",
            "city": "娄底市",
            "name": "新化县"
          },
          {
            "areaCode": "431381",
            "province": "湖南省",
            "city": "娄底市",
            "name": "冷水江市"
          },
          {
            "areaCode": "431382",
            "province": "湖南省",
            "city": "娄底市",
            "name": "涟源市"
          }
        ],
        "name": "娄底市",
        "base": "loudi"
      },
      {
        "areaCode": "4331",
        "province": "湖南省",
        "district": [
          {
            "areaCode": "433101",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "吉首市"
          },
          {
            "areaCode": "433122",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "泸溪县"
          },
          {
            "areaCode": "433123",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "凤凰县"
          },
          {
            "areaCode": "433124",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "花垣县"
          },
          {
            "areaCode": "433125",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "保靖县"
          },
          {
            "areaCode": "433126",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "古丈县"
          },
          {
            "areaCode": "433127",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "永顺县"
          },
          {
            "areaCode": "433130",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "龙山县"
          },
          {
            "areaCode": "433172",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "湖南吉首经济开发区"
          },
          {
            "areaCode": "433173",
            "province": "湖南省",
            "city": "湘西土家族苗族自治州",
            "name": "湖南永顺经济开发区"
          }
        ],
        "name": "湘西土家族苗族自治州",
        "base": "xxtjz"
      }
    ],
    "name": "湖南省",
    "base": "hun"
  },
  {
    "areaCode": "44",
    "city": [
      {
        "areaCode": "4401",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440103",
            "province": "广东省",
            "city": "广州市",
            "name": "荔湾区"
          },
          {
            "areaCode": "440104",
            "province": "广东省",
            "city": "广州市",
            "name": "越秀区"
          },
          {
            "areaCode": "440105",
            "province": "广东省",
            "city": "广州市",
            "name": "海珠区"
          },
          {
            "areaCode": "440106",
            "province": "广东省",
            "city": "广州市",
            "name": "天河区"
          },
          {
            "areaCode": "440111",
            "province": "广东省",
            "city": "广州市",
            "name": "白云区"
          },
          {
            "areaCode": "440112",
            "province": "广东省",
            "city": "广州市",
            "name": "黄埔区"
          },
          {
            "areaCode": "440113",
            "province": "广东省",
            "city": "广州市",
            "name": "番禺区"
          },
          {
            "areaCode": "440114",
            "province": "广东省",
            "city": "广州市",
            "name": "花都区"
          },
          {
            "areaCode": "440115",
            "province": "广东省",
            "city": "广州市",
            "name": "南沙区"
          },
          {
            "areaCode": "440117",
            "province": "广东省",
            "city": "广州市",
            "name": "从化区"
          },
          {
            "areaCode": "440118",
            "province": "广东省",
            "city": "广州市",
            "name": "增城区"
          }
        ],
        "name": "广州市",
        "base": "guangzhou"
      },
      {
        "areaCode": "4402",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440203",
            "province": "广东省",
            "city": "韶关市",
            "name": "武江区"
          },
          {
            "areaCode": "440204",
            "province": "广东省",
            "city": "韶关市",
            "name": "浈江区"
          },
          {
            "areaCode": "440205",
            "province": "广东省",
            "city": "韶关市",
            "name": "曲江区"
          },
          {
            "areaCode": "440222",
            "province": "广东省",
            "city": "韶关市",
            "name": "始兴县"
          },
          {
            "areaCode": "440224",
            "province": "广东省",
            "city": "韶关市",
            "name": "仁化县"
          },
          {
            "areaCode": "440229",
            "province": "广东省",
            "city": "韶关市",
            "name": "翁源县"
          },
          {
            "areaCode": "440232",
            "province": "广东省",
            "city": "韶关市",
            "name": "乳源瑶族自治县"
          },
          {
            "areaCode": "440233",
            "province": "广东省",
            "city": "韶关市",
            "name": "新丰县"
          },
          {
            "areaCode": "440281",
            "province": "广东省",
            "city": "韶关市",
            "name": "乐昌市"
          },
          {
            "areaCode": "440282",
            "province": "广东省",
            "city": "韶关市",
            "name": "南雄市"
          }
        ],
        "name": "韶关市",
        "base": "shaoguan"
      },
      {
        "areaCode": "4403",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440303",
            "province": "广东省",
            "city": "深圳市",
            "name": "罗湖区"
          },
          {
            "areaCode": "440304",
            "province": "广东省",
            "city": "深圳市",
            "name": "福田区"
          },
          {
            "areaCode": "440305",
            "province": "广东省",
            "city": "深圳市",
            "name": "南山区"
          },
          {
            "areaCode": "440306",
            "province": "广东省",
            "city": "深圳市",
            "name": "宝安区"
          },
          {
            "areaCode": "440307",
            "province": "广东省",
            "city": "深圳市",
            "name": "龙岗区"
          },
          {
            "areaCode": "440308",
            "province": "广东省",
            "city": "深圳市",
            "name": "盐田区"
          },
          {
            "areaCode": "440309",
            "province": "广东省",
            "city": "深圳市",
            "name": "龙华区"
          },
          {
            "areaCode": "440310",
            "province": "广东省",
            "city": "深圳市",
            "name": "坪山区"
          },
          {
            "areaCode": "440311",
            "province": "广东省",
            "city": "深圳市",
            "name": "光明区"
          }
        ],
        "name": "深圳市",
        "base": "shenzhen"
      },
      {
        "areaCode": "4404",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440402",
            "province": "广东省",
            "city": "珠海市",
            "name": "香洲区"
          },
          {
            "areaCode": "440403",
            "province": "广东省",
            "city": "珠海市",
            "name": "斗门区"
          },
          {
            "areaCode": "440404",
            "province": "广东省",
            "city": "珠海市",
            "name": "金湾区"
          }
        ],
        "name": "珠海市",
        "base": "zhuhai"
      },
      {
        "areaCode": "4405",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440507",
            "province": "广东省",
            "city": "汕头市",
            "name": "龙湖区"
          },
          {
            "areaCode": "440511",
            "province": "广东省",
            "city": "汕头市",
            "name": "金平区"
          },
          {
            "areaCode": "440512",
            "province": "广东省",
            "city": "汕头市",
            "name": "濠江区"
          },
          {
            "areaCode": "440513",
            "province": "广东省",
            "city": "汕头市",
            "name": "潮阳区"
          },
          {
            "areaCode": "440514",
            "province": "广东省",
            "city": "汕头市",
            "name": "潮南区"
          },
          {
            "areaCode": "440515",
            "province": "广东省",
            "city": "汕头市",
            "name": "澄海区"
          },
          {
            "areaCode": "440523",
            "province": "广东省",
            "city": "汕头市",
            "name": "南澳县"
          }
        ],
        "name": "汕头市",
        "base": "shantou"
      },
      {
        "areaCode": "4406",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440604",
            "province": "广东省",
            "city": "佛山市",
            "name": "禅城区"
          },
          {
            "areaCode": "440605",
            "province": "广东省",
            "city": "佛山市",
            "name": "南海区"
          },
          {
            "areaCode": "440606",
            "province": "广东省",
            "city": "佛山市",
            "name": "顺德区"
          },
          {
            "areaCode": "440607",
            "province": "广东省",
            "city": "佛山市",
            "name": "三水区"
          },
          {
            "areaCode": "440608",
            "province": "广东省",
            "city": "佛山市",
            "name": "高明区"
          }
        ],
        "name": "佛山市",
        "base": "foshan"
      },
      {
        "areaCode": "4407",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440703",
            "province": "广东省",
            "city": "江门市",
            "name": "蓬江区"
          },
          {
            "areaCode": "440704",
            "province": "广东省",
            "city": "江门市",
            "name": "江海区"
          },
          {
            "areaCode": "440705",
            "province": "广东省",
            "city": "江门市",
            "name": "新会区"
          },
          {
            "areaCode": "440781",
            "province": "广东省",
            "city": "江门市",
            "name": "台山市"
          },
          {
            "areaCode": "440783",
            "province": "广东省",
            "city": "江门市",
            "name": "开平市"
          },
          {
            "areaCode": "440784",
            "province": "广东省",
            "city": "江门市",
            "name": "鹤山市"
          },
          {
            "areaCode": "440785",
            "province": "广东省",
            "city": "江门市",
            "name": "恩平市"
          }
        ],
        "name": "江门市",
        "base": "jiangmen"
      },
      {
        "areaCode": "4408",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440802",
            "province": "广东省",
            "city": "湛江市",
            "name": "赤坎区"
          },
          {
            "areaCode": "440803",
            "province": "广东省",
            "city": "湛江市",
            "name": "霞山区"
          },
          {
            "areaCode": "440804",
            "province": "广东省",
            "city": "湛江市",
            "name": "坡头区"
          },
          {
            "areaCode": "440811",
            "province": "广东省",
            "city": "湛江市",
            "name": "麻章区"
          },
          {
            "areaCode": "440823",
            "province": "广东省",
            "city": "湛江市",
            "name": "遂溪县"
          },
          {
            "areaCode": "440825",
            "province": "广东省",
            "city": "湛江市",
            "name": "徐闻县"
          },
          {
            "areaCode": "440881",
            "province": "广东省",
            "city": "湛江市",
            "name": "廉江市"
          },
          {
            "areaCode": "440882",
            "province": "广东省",
            "city": "湛江市",
            "name": "雷州市"
          },
          {
            "areaCode": "440883",
            "province": "广东省",
            "city": "湛江市",
            "name": "吴川市"
          }
        ],
        "name": "湛江市",
        "base": "zhanjiang"
      },
      {
        "areaCode": "4409",
        "province": "广东省",
        "district": [
          {
            "areaCode": "440902",
            "province": "广东省",
            "city": "茂名市",
            "name": "茂南区"
          },
          {
            "areaCode": "440904",
            "province": "广东省",
            "city": "茂名市",
            "name": "电白区"
          },
          {
            "areaCode": "440981",
            "province": "广东省",
            "city": "茂名市",
            "name": "高州市"
          },
          {
            "areaCode": "440982",
            "province": "广东省",
            "city": "茂名市",
            "name": "化州市"
          },
          {
            "areaCode": "440983",
            "province": "广东省",
            "city": "茂名市",
            "name": "信宜市"
          }
        ],
        "name": "茂名市",
        "base": "maoming"
      },
      {
        "areaCode": "4412",
        "province": "广东省",
        "district": [
          {
            "areaCode": "441202",
            "province": "广东省",
            "city": "肇庆市",
            "name": "端州区"
          },
          {
            "areaCode": "441203",
            "province": "广东省",
            "city": "肇庆市",
            "name": "鼎湖区"
          },
          {
            "areaCode": "441204",
            "province": "广东省",
            "city": "肇庆市",
            "name": "高要区"
          },
          {
            "areaCode": "441223",
            "province": "广东省",
            "city": "肇庆市",
            "name": "广宁县"
          },
          {
            "areaCode": "441224",
            "province": "广东省",
            "city": "肇庆市",
            "name": "怀集县"
          },
          {
            "areaCode": "441225",
            "province": "广东省",
            "city": "肇庆市",
            "name": "封开县"
          },
          {
            "areaCode": "441226",
            "province": "广东省",
            "city": "肇庆市",
            "name": "德庆县"
          },
          {
            "areaCode": "441284",
            "province": "广东省",
            "city": "肇庆市",
            "name": "四会市"
          }
        ],
        "name": "肇庆市",
        "base": "zhaoqing"
      },
      {
        "areaCode": "4413",
        "province": "广东省",
        "district": [
          {
            "areaCode": "441302",
            "province": "广东省",
            "city": "惠州市",
            "name": "惠城区"
          },
          {
            "areaCode": "441303",
            "province": "广东省",
            "city": "惠州市",
            "name": "惠阳区"
          },
          {
            "areaCode": "441322",
            "province": "广东省",
            "city": "惠州市",
            "name": "博罗县"
          },
          {
            "areaCode": "441323",
            "province": "广东省",
            "city": "惠州市",
            "name": "惠东县"
          },
          {
            "areaCode": "441324",
            "province": "广东省",
            "city": "惠州市",
            "name": "龙门县"
          }
        ],
        "name": "惠州市",
        "base": "huizhou"
      },
      {
        "areaCode": "4414",
        "province": "广东省",
        "district": [
          {
            "areaCode": "441402",
            "province": "广东省",
            "city": "梅州市",
            "name": "梅江区"
          },
          {
            "areaCode": "441403",
            "province": "广东省",
            "city": "梅州市",
            "name": "梅县区"
          },
          {
            "areaCode": "441422",
            "province": "广东省",
            "city": "梅州市",
            "name": "大埔县"
          },
          {
            "areaCode": "441423",
            "province": "广东省",
            "city": "梅州市",
            "name": "丰顺县"
          },
          {
            "areaCode": "441424",
            "province": "广东省",
            "city": "梅州市",
            "name": "五华县"
          },
          {
            "areaCode": "441426",
            "province": "广东省",
            "city": "梅州市",
            "name": "平远县"
          },
          {
            "areaCode": "441427",
            "province": "广东省",
            "city": "梅州市",
            "name": "蕉岭县"
          },
          {
            "areaCode": "441481",
            "province": "广东省",
            "city": "梅州市",
            "name": "兴宁市"
          }
        ],
        "name": "梅州市",
        "base": "meizhou"
      },
      {
        "areaCode": "4415",
        "province": "广东省",
        "district": [
          {
            "areaCode": "441502",
            "province": "广东省",
            "city": "汕尾市",
            "name": "城区"
          },
          {
            "areaCode": "441521",
            "province": "广东省",
            "city": "汕尾市",
            "name": "海丰县"
          },
          {
            "areaCode": "441523",
            "province": "广东省",
            "city": "汕尾市",
            "name": "陆河县"
          },
          {
            "areaCode": "441581",
            "province": "广东省",
            "city": "汕尾市",
            "name": "陆丰市"
          }
        ],
        "name": "汕尾市",
        "base": "shanwei"
      },
      {
        "areaCode": "4416",
        "province": "广东省",
        "district": [
          {
            "areaCode": "441602",
            "province": "广东省",
            "city": "河源市",
            "name": "源城区"
          },
          {
            "areaCode": "441621",
            "province": "广东省",
            "city": "河源市",
            "name": "紫金县"
          },
          {
            "areaCode": "441622",
            "province": "广东省",
            "city": "河源市",
            "name": "龙川县"
          },
          {
            "areaCode": "441623",
            "province": "广东省",
            "city": "河源市",
            "name": "连平县"
          },
          {
            "areaCode": "441624",
            "province": "广东省",
            "city": "河源市",
            "name": "和平县"
          },
          {
            "areaCode": "441625",
            "province": "广东省",
            "city": "河源市",
            "name": "东源县"
          }
        ],
        "name": "河源市",
        "base": "heyuan"
      },
      {
        "areaCode": "4417",
        "province": "广东省",
        "district": [
          {
            "areaCode": "441702",
            "province": "广东省",
            "city": "阳江市",
            "name": "江城区"
          },
          {
            "areaCode": "441704",
            "province": "广东省",
            "city": "阳江市",
            "name": "阳东区"
          },
          {
            "areaCode": "441721",
            "province": "广东省",
            "city": "阳江市",
            "name": "阳西县"
          },
          {
            "areaCode": "441781",
            "province": "广东省",
            "city": "阳江市",
            "name": "阳春市"
          }
        ],
        "name": "阳江市",
        "base": "yangjiang"
      },
      {
        "areaCode": "4418",
        "province": "广东省",
        "district": [
          {
            "areaCode": "441802",
            "province": "广东省",
            "city": "清远市",
            "name": "清城区"
          },
          {
            "areaCode": "441803",
            "province": "广东省",
            "city": "清远市",
            "name": "清新区"
          },
          {
            "areaCode": "441821",
            "province": "广东省",
            "city": "清远市",
            "name": "佛冈县"
          },
          {
            "areaCode": "441823",
            "province": "广东省",
            "city": "清远市",
            "name": "阳山县"
          },
          {
            "areaCode": "441825",
            "province": "广东省",
            "city": "清远市",
            "name": "连山壮族瑶族自治县"
          },
          {
            "areaCode": "441826",
            "province": "广东省",
            "city": "清远市",
            "name": "连南瑶族自治县"
          },
          {
            "areaCode": "441881",
            "province": "广东省",
            "city": "清远市",
            "name": "英德市"
          },
          {
            "areaCode": "441882",
            "province": "广东省",
            "city": "清远市",
            "name": "连州市"
          }
        ],
        "name": "清远市",
        "base": "qingyuan"
      },
      {
        "areaCode": "4419",
        "province": "广东省",
        "district": [],
        "name": "东莞市",
        "base": "dongguan"
      },
      {
        "areaCode": "4451",
        "province": "广东省",
        "district": [
          {
            "areaCode": "445102",
            "province": "广东省",
            "city": "潮州市",
            "name": "湘桥区"
          },
          {
            "areaCode": "445103",
            "province": "广东省",
            "city": "潮州市",
            "name": "潮安区"
          },
          {
            "areaCode": "445122",
            "province": "广东省",
            "city": "潮州市",
            "name": "饶平县"
          }
        ],
        "name": "潮州市",
        "base": "chaozhou"
      },
      {
        "areaCode": "4420",
        "province": "广东省",
        "district": [],
        "name": "中山市",
        "base": "zhongshan"
      },
      {
        "areaCode": "4452",
        "province": "广东省",
        "district": [
          {
            "areaCode": "445202",
            "province": "广东省",
            "city": "揭阳市",
            "name": "榕城区"
          },
          {
            "areaCode": "445203",
            "province": "广东省",
            "city": "揭阳市",
            "name": "揭东区"
          },
          {
            "areaCode": "445222",
            "province": "广东省",
            "city": "揭阳市",
            "name": "揭西县"
          },
          {
            "areaCode": "445224",
            "province": "广东省",
            "city": "揭阳市",
            "name": "惠来县"
          },
          {
            "areaCode": "445281",
            "province": "广东省",
            "city": "揭阳市",
            "name": "普宁市"
          }
        ],
        "name": "揭阳市",
        "base": "jieyang"
      },
      {
        "areaCode": "4453",
        "province": "广东省",
        "district": [
          {
            "areaCode": "445302",
            "province": "广东省",
            "city": "云浮市",
            "name": "云城区"
          },
          {
            "areaCode": "445303",
            "province": "广东省",
            "city": "云浮市",
            "name": "云安区"
          },
          {
            "areaCode": "445321",
            "province": "广东省",
            "city": "云浮市",
            "name": "新兴县"
          },
          {
            "areaCode": "445322",
            "province": "广东省",
            "city": "云浮市",
            "name": "郁南县"
          },
          {
            "areaCode": "445381",
            "province": "广东省",
            "city": "云浮市",
            "name": "罗定市"
          }
        ],
        "name": "云浮市",
        "base": "yunfu"
      }
    ],
    "name": "广东省",
    "base": "gd"
  },
  {
    "areaCode": "45",
    "city": [
      {
        "areaCode": "4501",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450102",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "兴宁区"
          },
          {
            "areaCode": "450103",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "青秀区"
          },
          {
            "areaCode": "450105",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "江南区"
          },
          {
            "areaCode": "450107",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "西乡塘区"
          },
          {
            "areaCode": "450108",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "良庆区"
          },
          {
            "areaCode": "450109",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "邕宁区"
          },
          {
            "areaCode": "450110",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "武鸣区"
          },
          {
            "areaCode": "450123",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "隆安县"
          },
          {
            "areaCode": "450124",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "马山县"
          },
          {
            "areaCode": "450125",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "上林县"
          },
          {
            "areaCode": "450126",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "宾阳县"
          },
          {
            "areaCode": "450127",
            "province": "广西壮族自治区",
            "city": "南宁市",
            "name": "横县"
          }
        ],
        "name": "南宁市",
        "base": "nanning"
      },
      {
        "areaCode": "4502",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450202",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "城中区"
          },
          {
            "areaCode": "450203",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "鱼峰区"
          },
          {
            "areaCode": "450204",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "柳南区"
          },
          {
            "areaCode": "450205",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "柳北区"
          },
          {
            "areaCode": "450206",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "柳江区"
          },
          {
            "areaCode": "450222",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "柳城县"
          },
          {
            "areaCode": "450223",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "鹿寨县"
          },
          {
            "areaCode": "450224",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "融安县"
          },
          {
            "areaCode": "450225",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "融水苗族自治县"
          },
          {
            "areaCode": "450226",
            "province": "广西壮族自治区",
            "city": "柳州市",
            "name": "三江侗族自治县"
          }
        ],
        "name": "柳州市",
        "base": "liuzhou"
      },
      {
        "areaCode": "4503",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450302",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "秀峰区"
          },
          {
            "areaCode": "450303",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "叠彩区"
          },
          {
            "areaCode": "450304",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "象山区"
          },
          {
            "areaCode": "450305",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "七星区"
          },
          {
            "areaCode": "450311",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "雁山区"
          },
          {
            "areaCode": "450312",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "临桂区"
          },
          {
            "areaCode": "450321",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "阳朔县"
          },
          {
            "areaCode": "450323",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "灵川县"
          },
          {
            "areaCode": "450324",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "全州县"
          },
          {
            "areaCode": "450325",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "兴安县"
          },
          {
            "areaCode": "450326",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "永福县"
          },
          {
            "areaCode": "450327",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "灌阳县"
          },
          {
            "areaCode": "450328",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "龙胜各族自治县"
          },
          {
            "areaCode": "450329",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "资源县"
          },
          {
            "areaCode": "450330",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "平乐县"
          },
          {
            "areaCode": "450332",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "恭城瑶族自治县"
          },
          {
            "areaCode": "450381",
            "province": "广西壮族自治区",
            "city": "桂林市",
            "name": "荔浦市"
          }
        ],
        "name": "桂林市",
        "base": "guilin"
      },
      {
        "areaCode": "4504",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450403",
            "province": "广西壮族自治区",
            "city": "梧州市",
            "name": "万秀区"
          },
          {
            "areaCode": "450405",
            "province": "广西壮族自治区",
            "city": "梧州市",
            "name": "长洲区"
          },
          {
            "areaCode": "450406",
            "province": "广西壮族自治区",
            "city": "梧州市",
            "name": "龙圩区"
          },
          {
            "areaCode": "450421",
            "province": "广西壮族自治区",
            "city": "梧州市",
            "name": "苍梧县"
          },
          {
            "areaCode": "450422",
            "province": "广西壮族自治区",
            "city": "梧州市",
            "name": "藤县"
          },
          {
            "areaCode": "450423",
            "province": "广西壮族自治区",
            "city": "梧州市",
            "name": "蒙山县"
          },
          {
            "areaCode": "450481",
            "province": "广西壮族自治区",
            "city": "梧州市",
            "name": "岑溪市"
          }
        ],
        "name": "梧州市",
        "base": "wuzhou"
      },
      {
        "areaCode": "4505",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450502",
            "province": "广西壮族自治区",
            "city": "北海市",
            "name": "海城区"
          },
          {
            "areaCode": "450503",
            "province": "广西壮族自治区",
            "city": "北海市",
            "name": "银海区"
          },
          {
            "areaCode": "450512",
            "province": "广西壮族自治区",
            "city": "北海市",
            "name": "铁山港区"
          },
          {
            "areaCode": "450521",
            "province": "广西壮族自治区",
            "city": "北海市",
            "name": "合浦县"
          }
        ],
        "name": "北海市",
        "base": "beihai"
      },
      {
        "areaCode": "4506",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450602",
            "province": "广西壮族自治区",
            "city": "防城港市",
            "name": "港口区"
          },
          {
            "areaCode": "450603",
            "province": "广西壮族自治区",
            "city": "防城港市",
            "name": "防城区"
          },
          {
            "areaCode": "450621",
            "province": "广西壮族自治区",
            "city": "防城港市",
            "name": "上思县"
          },
          {
            "areaCode": "450681",
            "province": "广西壮族自治区",
            "city": "防城港市",
            "name": "东兴市"
          }
        ],
        "name": "防城港市",
        "base": "fcg"
      },
      {
        "areaCode": "4507",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450702",
            "province": "广西壮族自治区",
            "city": "钦州市",
            "name": "钦南区"
          },
          {
            "areaCode": "450703",
            "province": "广西壮族自治区",
            "city": "钦州市",
            "name": "钦北区"
          },
          {
            "areaCode": "450721",
            "province": "广西壮族自治区",
            "city": "钦州市",
            "name": "灵山县"
          },
          {
            "areaCode": "450722",
            "province": "广西壮族自治区",
            "city": "钦州市",
            "name": "浦北县"
          }
        ],
        "name": "钦州市",
        "base": "qinzhou"
      },
      {
        "areaCode": "4508",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450802",
            "province": "广西壮族自治区",
            "city": "贵港市",
            "name": "港北区"
          },
          {
            "areaCode": "450803",
            "province": "广西壮族自治区",
            "city": "贵港市",
            "name": "港南区"
          },
          {
            "areaCode": "450804",
            "province": "广西壮族自治区",
            "city": "贵港市",
            "name": "覃塘区"
          },
          {
            "areaCode": "450821",
            "province": "广西壮族自治区",
            "city": "贵港市",
            "name": "平南县"
          },
          {
            "areaCode": "450881",
            "province": "广西壮族自治区",
            "city": "贵港市",
            "name": "桂平市"
          }
        ],
        "name": "贵港市",
        "base": "guigang"
      },
      {
        "areaCode": "4509",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "450902",
            "province": "广西壮族自治区",
            "city": "玉林市",
            "name": "玉州区"
          },
          {
            "areaCode": "450903",
            "province": "广西壮族自治区",
            "city": "玉林市",
            "name": "福绵区"
          },
          {
            "areaCode": "450921",
            "province": "广西壮族自治区",
            "city": "玉林市",
            "name": "容县"
          },
          {
            "areaCode": "450922",
            "province": "广西壮族自治区",
            "city": "玉林市",
            "name": "陆川县"
          },
          {
            "areaCode": "450923",
            "province": "广西壮族自治区",
            "city": "玉林市",
            "name": "博白县"
          },
          {
            "areaCode": "450924",
            "province": "广西壮族自治区",
            "city": "玉林市",
            "name": "兴业县"
          },
          {
            "areaCode": "450981",
            "province": "广西壮族自治区",
            "city": "玉林市",
            "name": "北流市"
          }
        ],
        "name": "玉林市",
        "base": "yul"
      },
      {
        "areaCode": "4510",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "451002",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "右江区"
          },
          {
            "areaCode": "451021",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "田阳县"
          },
          {
            "areaCode": "451022",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "田东县"
          },
          {
            "areaCode": "451023",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "平果县"
          },
          {
            "areaCode": "451024",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "德保县"
          },
          {
            "areaCode": "451026",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "那坡县"
          },
          {
            "areaCode": "451027",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "凌云县"
          },
          {
            "areaCode": "451028",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "乐业县"
          },
          {
            "areaCode": "451029",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "田林县"
          },
          {
            "areaCode": "451030",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "西林县"
          },
          {
            "areaCode": "451031",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "隆林各族自治县"
          },
          {
            "areaCode": "451081",
            "province": "广西壮族自治区",
            "city": "百色市",
            "name": "靖西市"
          }
        ],
        "name": "百色市",
        "base": "baise"
      },
      {
        "areaCode": "4511",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "451102",
            "province": "广西壮族自治区",
            "city": "贺州市",
            "name": "八步区"
          },
          {
            "areaCode": "451103",
            "province": "广西壮族自治区",
            "city": "贺州市",
            "name": "平桂区"
          },
          {
            "areaCode": "451121",
            "province": "广西壮族自治区",
            "city": "贺州市",
            "name": "昭平县"
          },
          {
            "areaCode": "451122",
            "province": "广西壮族自治区",
            "city": "贺州市",
            "name": "钟山县"
          },
          {
            "areaCode": "451123",
            "province": "广西壮族自治区",
            "city": "贺州市",
            "name": "富川瑶族自治县"
          }
        ],
        "name": "贺州市",
        "base": "hezhou"
      },
      {
        "areaCode": "4512",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "451202",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "金城江区"
          },
          {
            "areaCode": "451203",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "宜州区"
          },
          {
            "areaCode": "451221",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "南丹县"
          },
          {
            "areaCode": "451222",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "天峨县"
          },
          {
            "areaCode": "451223",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "凤山县"
          },
          {
            "areaCode": "451224",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "东兰县"
          },
          {
            "areaCode": "451225",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "罗城仫佬族自治县"
          },
          {
            "areaCode": "451226",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "环江毛南族自治县"
          },
          {
            "areaCode": "451227",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "巴马瑶族自治县"
          },
          {
            "areaCode": "451228",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "都安瑶族自治县"
          },
          {
            "areaCode": "451229",
            "province": "广西壮族自治区",
            "city": "河池市",
            "name": "大化瑶族自治县"
          }
        ],
        "name": "河池市",
        "base": "hechi"
      },
      {
        "areaCode": "4513",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "451302",
            "province": "广西壮族自治区",
            "city": "来宾市",
            "name": "兴宾区"
          },
          {
            "areaCode": "451321",
            "province": "广西壮族自治区",
            "city": "来宾市",
            "name": "忻城县"
          },
          {
            "areaCode": "451322",
            "province": "广西壮族自治区",
            "city": "来宾市",
            "name": "象州县"
          },
          {
            "areaCode": "451323",
            "province": "广西壮族自治区",
            "city": "来宾市",
            "name": "武宣县"
          },
          {
            "areaCode": "451324",
            "province": "广西壮族自治区",
            "city": "来宾市",
            "name": "金秀瑶族自治县"
          },
          {
            "areaCode": "451381",
            "province": "广西壮族自治区",
            "city": "来宾市",
            "name": "合山市"
          }
        ],
        "name": "来宾市",
        "base": "laibin"
      },
      {
        "areaCode": "4514",
        "province": "广西壮族自治区",
        "district": [
          {
            "areaCode": "451402",
            "province": "广西壮族自治区",
            "city": "崇左市",
            "name": "江州区"
          },
          {
            "areaCode": "451421",
            "province": "广西壮族自治区",
            "city": "崇左市",
            "name": "扶绥县"
          },
          {
            "areaCode": "451422",
            "province": "广西壮族自治区",
            "city": "崇左市",
            "name": "宁明县"
          },
          {
            "areaCode": "451423",
            "province": "广西壮族自治区",
            "city": "崇左市",
            "name": "龙州县"
          },
          {
            "areaCode": "451424",
            "province": "广西壮族自治区",
            "city": "崇左市",
            "name": "大新县"
          },
          {
            "areaCode": "451425",
            "province": "广西壮族自治区",
            "city": "崇左市",
            "name": "天等县"
          },
          {
            "areaCode": "451481",
            "province": "广西壮族自治区",
            "city": "崇左市",
            "name": "凭祥市"
          }
        ],
        "name": "崇左市",
        "base": "chongzuo"
      }
    ],
    "name": "广西壮族自治区",
    "base": "gx"
  },
  {
    "areaCode": "51",
    "city": [
      {
        "areaCode": "5101",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510104",
            "province": "四川省",
            "city": "成都市",
            "name": "锦江区"
          },
          {
            "areaCode": "510105",
            "province": "四川省",
            "city": "成都市",
            "name": "青羊区"
          },
          {
            "areaCode": "510106",
            "province": "四川省",
            "city": "成都市",
            "name": "金牛区"
          },
          {
            "areaCode": "510107",
            "province": "四川省",
            "city": "成都市",
            "name": "武侯区"
          },
          {
            "areaCode": "510108",
            "province": "四川省",
            "city": "成都市",
            "name": "成华区"
          },
          {
            "areaCode": "510112",
            "province": "四川省",
            "city": "成都市",
            "name": "龙泉驿区"
          },
          {
            "areaCode": "510113",
            "province": "四川省",
            "city": "成都市",
            "name": "青白江区"
          },
          {
            "areaCode": "510114",
            "province": "四川省",
            "city": "成都市",
            "name": "新都区"
          },
          {
            "areaCode": "510115",
            "province": "四川省",
            "city": "成都市",
            "name": "温江区"
          },
          {
            "areaCode": "510116",
            "province": "四川省",
            "city": "成都市",
            "name": "双流区"
          },
          {
            "areaCode": "510117",
            "province": "四川省",
            "city": "成都市",
            "name": "郫都区"
          },
          {
            "areaCode": "510121",
            "province": "四川省",
            "city": "成都市",
            "name": "金堂县"
          },
          {
            "areaCode": "510129",
            "province": "四川省",
            "city": "成都市",
            "name": "大邑县"
          },
          {
            "areaCode": "510131",
            "province": "四川省",
            "city": "成都市",
            "name": "蒲江县"
          },
          {
            "areaCode": "510132",
            "province": "四川省",
            "city": "成都市",
            "name": "新津县"
          },
          {
            "areaCode": "510181",
            "province": "四川省",
            "city": "成都市",
            "name": "都江堰市"
          },
          {
            "areaCode": "510182",
            "province": "四川省",
            "city": "成都市",
            "name": "彭州市"
          },
          {
            "areaCode": "510183",
            "province": "四川省",
            "city": "成都市",
            "name": "邛崃市"
          },
          {
            "areaCode": "510184",
            "province": "四川省",
            "city": "成都市",
            "name": "崇州市"
          },
          {
            "areaCode": "510185",
            "province": "四川省",
            "city": "成都市",
            "name": "简阳市"
          }
        ],
        "name": "成都市",
        "base": "chengdu"
      },
      {
        "areaCode": "5103",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510302",
            "province": "四川省",
            "city": "自贡市",
            "name": "自流井区"
          },
          {
            "areaCode": "510303",
            "province": "四川省",
            "city": "自贡市",
            "name": "贡井区"
          },
          {
            "areaCode": "510304",
            "province": "四川省",
            "city": "自贡市",
            "name": "大安区"
          },
          {
            "areaCode": "510311",
            "province": "四川省",
            "city": "自贡市",
            "name": "沿滩区"
          },
          {
            "areaCode": "510321",
            "province": "四川省",
            "city": "自贡市",
            "name": "荣县"
          },
          {
            "areaCode": "510322",
            "province": "四川省",
            "city": "自贡市",
            "name": "富顺县"
          }
        ],
        "name": "自贡市",
        "base": "zigong"
      },
      {
        "areaCode": "5104",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510402",
            "province": "四川省",
            "city": "攀枝花市",
            "name": "东区"
          },
          {
            "areaCode": "510403",
            "province": "四川省",
            "city": "攀枝花市",
            "name": "西区"
          },
          {
            "areaCode": "510411",
            "province": "四川省",
            "city": "攀枝花市",
            "name": "仁和区"
          },
          {
            "areaCode": "510421",
            "province": "四川省",
            "city": "攀枝花市",
            "name": "米易县"
          },
          {
            "areaCode": "510422",
            "province": "四川省",
            "city": "攀枝花市",
            "name": "盐边县"
          }
        ],
        "name": "攀枝花市",
        "base": "pzh"
      },
      {
        "areaCode": "5105",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510502",
            "province": "四川省",
            "city": "泸州市",
            "name": "江阳区"
          },
          {
            "areaCode": "510503",
            "province": "四川省",
            "city": "泸州市",
            "name": "纳溪区"
          },
          {
            "areaCode": "510504",
            "province": "四川省",
            "city": "泸州市",
            "name": "龙马潭区"
          },
          {
            "areaCode": "510521",
            "province": "四川省",
            "city": "泸州市",
            "name": "泸县"
          },
          {
            "areaCode": "510522",
            "province": "四川省",
            "city": "泸州市",
            "name": "合江县"
          },
          {
            "areaCode": "510524",
            "province": "四川省",
            "city": "泸州市",
            "name": "叙永县"
          },
          {
            "areaCode": "510525",
            "province": "四川省",
            "city": "泸州市",
            "name": "古蔺县"
          }
        ],
        "name": "泸州市",
        "base": "luzhou"
      },
      {
        "areaCode": "5106",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510603",
            "province": "四川省",
            "city": "德阳市",
            "name": "旌阳区"
          },
          {
            "areaCode": "510604",
            "province": "四川省",
            "city": "德阳市",
            "name": "罗江区"
          },
          {
            "areaCode": "510623",
            "province": "四川省",
            "city": "德阳市",
            "name": "中江县"
          },
          {
            "areaCode": "510681",
            "province": "四川省",
            "city": "德阳市",
            "name": "广汉市"
          },
          {
            "areaCode": "510682",
            "province": "四川省",
            "city": "德阳市",
            "name": "什邡市"
          },
          {
            "areaCode": "510683",
            "province": "四川省",
            "city": "德阳市",
            "name": "绵竹市"
          }
        ],
        "name": "德阳市",
        "base": "deyang"
      },
      {
        "areaCode": "5107",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510703",
            "province": "四川省",
            "city": "绵阳市",
            "name": "涪城区"
          },
          {
            "areaCode": "510704",
            "province": "四川省",
            "city": "绵阳市",
            "name": "游仙区"
          },
          {
            "areaCode": "510705",
            "province": "四川省",
            "city": "绵阳市",
            "name": "安州区"
          },
          {
            "areaCode": "510722",
            "province": "四川省",
            "city": "绵阳市",
            "name": "三台县"
          },
          {
            "areaCode": "510723",
            "province": "四川省",
            "city": "绵阳市",
            "name": "盐亭县"
          },
          {
            "areaCode": "510725",
            "province": "四川省",
            "city": "绵阳市",
            "name": "梓潼县"
          },
          {
            "areaCode": "510726",
            "province": "四川省",
            "city": "绵阳市",
            "name": "北川羌族自治县"
          },
          {
            "areaCode": "510727",
            "province": "四川省",
            "city": "绵阳市",
            "name": "平武县"
          },
          {
            "areaCode": "510781",
            "province": "四川省",
            "city": "绵阳市",
            "name": "江油市"
          }
        ],
        "name": "绵阳市",
        "base": "mianyang"
      },
      {
        "areaCode": "5108",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510802",
            "province": "四川省",
            "city": "广元市",
            "name": "利州区"
          },
          {
            "areaCode": "510811",
            "province": "四川省",
            "city": "广元市",
            "name": "昭化区"
          },
          {
            "areaCode": "510812",
            "province": "四川省",
            "city": "广元市",
            "name": "朝天区"
          },
          {
            "areaCode": "510821",
            "province": "四川省",
            "city": "广元市",
            "name": "旺苍县"
          },
          {
            "areaCode": "510822",
            "province": "四川省",
            "city": "广元市",
            "name": "青川县"
          },
          {
            "areaCode": "510823",
            "province": "四川省",
            "city": "广元市",
            "name": "剑阁县"
          },
          {
            "areaCode": "510824",
            "province": "四川省",
            "city": "广元市",
            "name": "苍溪县"
          }
        ],
        "name": "广元市",
        "base": "guangyuan"
      },
      {
        "areaCode": "5109",
        "province": "四川省",
        "district": [
          {
            "areaCode": "510903",
            "province": "四川省",
            "city": "遂宁市",
            "name": "船山区"
          },
          {
            "areaCode": "510904",
            "province": "四川省",
            "city": "遂宁市",
            "name": "安居区"
          },
          {
            "areaCode": "510921",
            "province": "四川省",
            "city": "遂宁市",
            "name": "蓬溪县"
          },
          {
            "areaCode": "510922",
            "province": "四川省",
            "city": "遂宁市",
            "name": "射洪县"
          },
          {
            "areaCode": "510923",
            "province": "四川省",
            "city": "遂宁市",
            "name": "大英县"
          }
        ],
        "name": "遂宁市",
        "base": "suining"
      },
      {
        "areaCode": "5110",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511002",
            "province": "四川省",
            "city": "内江市",
            "name": "市中区"
          },
          {
            "areaCode": "511011",
            "province": "四川省",
            "city": "内江市",
            "name": "东兴区"
          },
          {
            "areaCode": "511024",
            "province": "四川省",
            "city": "内江市",
            "name": "威远县"
          },
          {
            "areaCode": "511025",
            "province": "四川省",
            "city": "内江市",
            "name": "资中县"
          },
          {
            "areaCode": "511071",
            "province": "四川省",
            "city": "内江市",
            "name": "内江经济开发区"
          },
          {
            "areaCode": "511083",
            "province": "四川省",
            "city": "内江市",
            "name": "隆昌市"
          }
        ],
        "name": "内江市",
        "base": "neijiang"
      },
      {
        "areaCode": "5111",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511102",
            "province": "四川省",
            "city": "乐山市",
            "name": "市中区"
          },
          {
            "areaCode": "511111",
            "province": "四川省",
            "city": "乐山市",
            "name": "沙湾区"
          },
          {
            "areaCode": "511112",
            "province": "四川省",
            "city": "乐山市",
            "name": "五通桥区"
          },
          {
            "areaCode": "511113",
            "province": "四川省",
            "city": "乐山市",
            "name": "金口河区"
          },
          {
            "areaCode": "511123",
            "province": "四川省",
            "city": "乐山市",
            "name": "犍为县"
          },
          {
            "areaCode": "511124",
            "province": "四川省",
            "city": "乐山市",
            "name": "井研县"
          },
          {
            "areaCode": "511126",
            "province": "四川省",
            "city": "乐山市",
            "name": "夹江县"
          },
          {
            "areaCode": "511129",
            "province": "四川省",
            "city": "乐山市",
            "name": "沐川县"
          },
          {
            "areaCode": "511132",
            "province": "四川省",
            "city": "乐山市",
            "name": "峨边彝族自治县"
          },
          {
            "areaCode": "511133",
            "province": "四川省",
            "city": "乐山市",
            "name": "马边彝族自治县"
          },
          {
            "areaCode": "511181",
            "province": "四川省",
            "city": "乐山市",
            "name": "峨眉山市"
          }
        ],
        "name": "乐山市",
        "base": "leshan"
      },
      {
        "areaCode": "5113",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511302",
            "province": "四川省",
            "city": "南充市",
            "name": "顺庆区"
          },
          {
            "areaCode": "511303",
            "province": "四川省",
            "city": "南充市",
            "name": "高坪区"
          },
          {
            "areaCode": "511304",
            "province": "四川省",
            "city": "南充市",
            "name": "嘉陵区"
          },
          {
            "areaCode": "511321",
            "province": "四川省",
            "city": "南充市",
            "name": "南部县"
          },
          {
            "areaCode": "511322",
            "province": "四川省",
            "city": "南充市",
            "name": "营山县"
          },
          {
            "areaCode": "511323",
            "province": "四川省",
            "city": "南充市",
            "name": "蓬安县"
          },
          {
            "areaCode": "511324",
            "province": "四川省",
            "city": "南充市",
            "name": "仪陇县"
          },
          {
            "areaCode": "511325",
            "province": "四川省",
            "city": "南充市",
            "name": "西充县"
          },
          {
            "areaCode": "511381",
            "province": "四川省",
            "city": "南充市",
            "name": "阆中市"
          }
        ],
        "name": "南充市",
        "base": "nanchong"
      },
      {
        "areaCode": "5114",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511402",
            "province": "四川省",
            "city": "眉山市",
            "name": "东坡区"
          },
          {
            "areaCode": "511403",
            "province": "四川省",
            "city": "眉山市",
            "name": "彭山区"
          },
          {
            "areaCode": "511421",
            "province": "四川省",
            "city": "眉山市",
            "name": "仁寿县"
          },
          {
            "areaCode": "511423",
            "province": "四川省",
            "city": "眉山市",
            "name": "洪雅县"
          },
          {
            "areaCode": "511424",
            "province": "四川省",
            "city": "眉山市",
            "name": "丹棱县"
          },
          {
            "areaCode": "511425",
            "province": "四川省",
            "city": "眉山市",
            "name": "青神县"
          }
        ],
        "name": "眉山市",
        "base": "meishan"
      },
      {
        "areaCode": "5115",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511502",
            "province": "四川省",
            "city": "宜宾市",
            "name": "翠屏区"
          },
          {
            "areaCode": "511503",
            "province": "四川省",
            "city": "宜宾市",
            "name": "南溪区"
          },
          {
            "areaCode": "511523",
            "province": "四川省",
            "city": "宜宾市",
            "name": "江安县"
          },
          {
            "areaCode": "511524",
            "province": "四川省",
            "city": "宜宾市",
            "name": "长宁县"
          },
          {
            "areaCode": "511525",
            "province": "四川省",
            "city": "宜宾市",
            "name": "高县"
          },
          {
            "areaCode": "511526",
            "province": "四川省",
            "city": "宜宾市",
            "name": "珙县"
          },
          {
            "areaCode": "511527",
            "province": "四川省",
            "city": "宜宾市",
            "name": "筠连县"
          },
          {
            "areaCode": "511528",
            "province": "四川省",
            "city": "宜宾市",
            "name": "兴文县"
          },
          {
            "areaCode": "511529",
            "province": "四川省",
            "city": "宜宾市",
            "name": "屏山县"
          },
          {
            "areaCode": "511504",
            "province": "四川省",
            "city": "宜宾市",
            "name": "叙州区"
          }
        ],
        "name": "宜宾市",
        "base": "yibin"
      },
      {
        "areaCode": "5116",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511602",
            "province": "四川省",
            "city": "广安市",
            "name": "广安区"
          },
          {
            "areaCode": "511603",
            "province": "四川省",
            "city": "广安市",
            "name": "前锋区"
          },
          {
            "areaCode": "511621",
            "province": "四川省",
            "city": "广安市",
            "name": "岳池县"
          },
          {
            "areaCode": "511622",
            "province": "四川省",
            "city": "广安市",
            "name": "武胜县"
          },
          {
            "areaCode": "511623",
            "province": "四川省",
            "city": "广安市",
            "name": "邻水县"
          },
          {
            "areaCode": "511681",
            "province": "四川省",
            "city": "广安市",
            "name": "华蓥市"
          }
        ],
        "name": "广安市",
        "base": "guangan"
      },
      {
        "areaCode": "5117",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511702",
            "province": "四川省",
            "city": "达州市",
            "name": "通川区"
          },
          {
            "areaCode": "511703",
            "province": "四川省",
            "city": "达州市",
            "name": "达川区"
          },
          {
            "areaCode": "511722",
            "province": "四川省",
            "city": "达州市",
            "name": "宣汉县"
          },
          {
            "areaCode": "511723",
            "province": "四川省",
            "city": "达州市",
            "name": "开江县"
          },
          {
            "areaCode": "511724",
            "province": "四川省",
            "city": "达州市",
            "name": "大竹县"
          },
          {
            "areaCode": "511725",
            "province": "四川省",
            "city": "达州市",
            "name": "渠县"
          },
          {
            "areaCode": "511771",
            "province": "四川省",
            "city": "达州市",
            "name": "达州经济开发区"
          },
          {
            "areaCode": "511781",
            "province": "四川省",
            "city": "达州市",
            "name": "万源市"
          }
        ],
        "name": "达州市",
        "base": "dazhou"
      },
      {
        "areaCode": "5118",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511802",
            "province": "四川省",
            "city": "雅安市",
            "name": "雨城区"
          },
          {
            "areaCode": "511803",
            "province": "四川省",
            "city": "雅安市",
            "name": "名山区"
          },
          {
            "areaCode": "511822",
            "province": "四川省",
            "city": "雅安市",
            "name": "荥经县"
          },
          {
            "areaCode": "511823",
            "province": "四川省",
            "city": "雅安市",
            "name": "汉源县"
          },
          {
            "areaCode": "511824",
            "province": "四川省",
            "city": "雅安市",
            "name": "石棉县"
          },
          {
            "areaCode": "511825",
            "province": "四川省",
            "city": "雅安市",
            "name": "天全县"
          },
          {
            "areaCode": "511826",
            "province": "四川省",
            "city": "雅安市",
            "name": "芦山县"
          },
          {
            "areaCode": "511827",
            "province": "四川省",
            "city": "雅安市",
            "name": "宝兴县"
          }
        ],
        "name": "雅安市",
        "base": "yaan"
      },
      {
        "areaCode": "5119",
        "province": "四川省",
        "district": [
          {
            "areaCode": "511902",
            "province": "四川省",
            "city": "巴中市",
            "name": "巴州区"
          },
          {
            "areaCode": "511903",
            "province": "四川省",
            "city": "巴中市",
            "name": "恩阳区"
          },
          {
            "areaCode": "511921",
            "province": "四川省",
            "city": "巴中市",
            "name": "通江县"
          },
          {
            "areaCode": "511922",
            "province": "四川省",
            "city": "巴中市",
            "name": "南江县"
          },
          {
            "areaCode": "511923",
            "province": "四川省",
            "city": "巴中市",
            "name": "平昌县"
          },
          {
            "areaCode": "511971",
            "province": "四川省",
            "city": "巴中市",
            "name": "巴中经济开发区"
          }
        ],
        "name": "巴中市",
        "base": "bazhong"
      },
      {
        "areaCode": "5120",
        "province": "四川省",
        "district": [
          {
            "areaCode": "512002",
            "province": "四川省",
            "city": "资阳市",
            "name": "雁江区"
          },
          {
            "areaCode": "512021",
            "province": "四川省",
            "city": "资阳市",
            "name": "安岳县"
          },
          {
            "areaCode": "512022",
            "province": "四川省",
            "city": "资阳市",
            "name": "乐至县"
          }
        ],
        "name": "资阳市",
        "base": "ziyang"
      },
      {
        "areaCode": "5132",
        "province": "四川省",
        "district": [
          {
            "areaCode": "513201",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "马尔康市"
          },
          {
            "areaCode": "513221",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "汶川县"
          },
          {
            "areaCode": "513222",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "理县"
          },
          {
            "areaCode": "513223",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "茂县"
          },
          {
            "areaCode": "513224",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "松潘县"
          },
          {
            "areaCode": "513225",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "九寨沟县"
          },
          {
            "areaCode": "513226",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "金川县"
          },
          {
            "areaCode": "513227",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "小金县"
          },
          {
            "areaCode": "513228",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "黑水县"
          },
          {
            "areaCode": "513230",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "壤塘县"
          },
          {
            "areaCode": "513231",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "阿坝县"
          },
          {
            "areaCode": "513232",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "若尔盖县"
          },
          {
            "areaCode": "513233",
            "province": "四川省",
            "city": "阿坝藏族羌族自治州",
            "name": "红原县"
          }
        ],
        "name": "阿坝藏族羌族自治州",
        "base": "abzzqz"
      },
      {
        "areaCode": "5133",
        "province": "四川省",
        "district": [
          {
            "areaCode": "513301",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "康定市"
          },
          {
            "areaCode": "513322",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "泸定县"
          },
          {
            "areaCode": "513323",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "丹巴县"
          },
          {
            "areaCode": "513324",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "九龙县"
          },
          {
            "areaCode": "513325",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "雅江县"
          },
          {
            "areaCode": "513326",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "道孚县"
          },
          {
            "areaCode": "513327",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "炉霍县"
          },
          {
            "areaCode": "513328",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "甘孜县"
          },
          {
            "areaCode": "513329",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "新龙县"
          },
          {
            "areaCode": "513330",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "德格县"
          },
          {
            "areaCode": "513331",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "白玉县"
          },
          {
            "areaCode": "513332",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "石渠县"
          },
          {
            "areaCode": "513333",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "色达县"
          },
          {
            "areaCode": "513334",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "理塘县"
          },
          {
            "areaCode": "513335",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "巴塘县"
          },
          {
            "areaCode": "513336",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "乡城县"
          },
          {
            "areaCode": "513337",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "稻城县"
          },
          {
            "areaCode": "513338",
            "province": "四川省",
            "city": "甘孜藏族自治州",
            "name": "得荣县"
          }
        ],
        "name": "甘孜藏族自治州",
        "base": "gzzz"
      },
      {
        "areaCode": "5134",
        "province": "四川省",
        "district": [
          {
            "areaCode": "513401",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "西昌市"
          },
          {
            "areaCode": "513422",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "木里藏族自治县"
          },
          {
            "areaCode": "513423",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "盐源县"
          },
          {
            "areaCode": "513424",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "德昌县"
          },
          {
            "areaCode": "513425",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "会理县"
          },
          {
            "areaCode": "513426",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "会东县"
          },
          {
            "areaCode": "513427",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "宁南县"
          },
          {
            "areaCode": "513428",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "普格县"
          },
          {
            "areaCode": "513429",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "布拖县"
          },
          {
            "areaCode": "513430",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "金阳县"
          },
          {
            "areaCode": "513431",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "昭觉县"
          },
          {
            "areaCode": "513432",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "喜德县"
          },
          {
            "areaCode": "513433",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "冕宁县"
          },
          {
            "areaCode": "513434",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "越西县"
          },
          {
            "areaCode": "513435",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "甘洛县"
          },
          {
            "areaCode": "513436",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "美姑县"
          },
          {
            "areaCode": "513437",
            "province": "四川省",
            "city": "凉山彝族自治州",
            "name": "雷波县"
          }
        ],
        "name": "凉山彝族自治州",
        "base": "lsyz"
      }
    ],
    "name": "四川省",
    "base": "sc"
  },
  {
    "areaCode": "52",
    "city": [
      {
        "areaCode": "5201",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "520102",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "南明区"
          },
          {
            "areaCode": "520103",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "云岩区"
          },
          {
            "areaCode": "520111",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "花溪区"
          },
          {
            "areaCode": "520112",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "乌当区"
          },
          {
            "areaCode": "520113",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "白云区"
          },
          {
            "areaCode": "520115",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "观山湖区"
          },
          {
            "areaCode": "520121",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "开阳县"
          },
          {
            "areaCode": "520122",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "息烽县"
          },
          {
            "areaCode": "520123",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "修文县"
          },
          {
            "areaCode": "520181",
            "province": "贵州省",
            "city": "贵阳市",
            "name": "清镇市"
          }
        ],
        "name": "贵阳市",
        "base": "guiyang"
      },
      {
        "areaCode": "5202",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "520201",
            "province": "贵州省",
            "city": "六盘水市",
            "name": "钟山区"
          },
          {
            "areaCode": "520203",
            "province": "贵州省",
            "city": "六盘水市",
            "name": "六枝特区"
          },
          {
            "areaCode": "520221",
            "province": "贵州省",
            "city": "六盘水市",
            "name": "水城县"
          },
          {
            "areaCode": "520281",
            "province": "贵州省",
            "city": "六盘水市",
            "name": "盘州市"
          }
        ],
        "name": "六盘水市",
        "base": "lps"
      },
      {
        "areaCode": "5203",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "520302",
            "province": "贵州省",
            "city": "遵义市",
            "name": "红花岗区"
          },
          {
            "areaCode": "520303",
            "province": "贵州省",
            "city": "遵义市",
            "name": "汇川区"
          },
          {
            "areaCode": "520304",
            "province": "贵州省",
            "city": "遵义市",
            "name": "播州区"
          },
          {
            "areaCode": "520322",
            "province": "贵州省",
            "city": "遵义市",
            "name": "桐梓县"
          },
          {
            "areaCode": "520323",
            "province": "贵州省",
            "city": "遵义市",
            "name": "绥阳县"
          },
          {
            "areaCode": "520324",
            "province": "贵州省",
            "city": "遵义市",
            "name": "正安县"
          },
          {
            "areaCode": "520325",
            "province": "贵州省",
            "city": "遵义市",
            "name": "道真仡佬族苗族自治县"
          },
          {
            "areaCode": "520326",
            "province": "贵州省",
            "city": "遵义市",
            "name": "务川仡佬族苗族自治县"
          },
          {
            "areaCode": "520327",
            "province": "贵州省",
            "city": "遵义市",
            "name": "凤冈县"
          },
          {
            "areaCode": "520328",
            "province": "贵州省",
            "city": "遵义市",
            "name": "湄潭县"
          },
          {
            "areaCode": "520329",
            "province": "贵州省",
            "city": "遵义市",
            "name": "余庆县"
          },
          {
            "areaCode": "520330",
            "province": "贵州省",
            "city": "遵义市",
            "name": "习水县"
          },
          {
            "areaCode": "520381",
            "province": "贵州省",
            "city": "遵义市",
            "name": "赤水市"
          },
          {
            "areaCode": "520382",
            "province": "贵州省",
            "city": "遵义市",
            "name": "仁怀市"
          }
        ],
        "name": "遵义市",
        "base": "zunyi"
      },
      {
        "areaCode": "5204",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "520402",
            "province": "贵州省",
            "city": "安顺市",
            "name": "西秀区"
          },
          {
            "areaCode": "520403",
            "province": "贵州省",
            "city": "安顺市",
            "name": "平坝区"
          },
          {
            "areaCode": "520422",
            "province": "贵州省",
            "city": "安顺市",
            "name": "普定县"
          },
          {
            "areaCode": "520423",
            "province": "贵州省",
            "city": "安顺市",
            "name": "镇宁布依族苗族自治县"
          },
          {
            "areaCode": "520424",
            "province": "贵州省",
            "city": "安顺市",
            "name": "关岭布依族苗族自治县"
          },
          {
            "areaCode": "520425",
            "province": "贵州省",
            "city": "安顺市",
            "name": "紫云苗族布依族自治县"
          }
        ],
        "name": "安顺市",
        "base": "anshun"
      },
      {
        "areaCode": "5205",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "520502",
            "province": "贵州省",
            "city": "毕节市",
            "name": "七星关区"
          },
          {
            "areaCode": "520521",
            "province": "贵州省",
            "city": "毕节市",
            "name": "大方县"
          },
          {
            "areaCode": "520522",
            "province": "贵州省",
            "city": "毕节市",
            "name": "黔西县"
          },
          {
            "areaCode": "520523",
            "province": "贵州省",
            "city": "毕节市",
            "name": "金沙县"
          },
          {
            "areaCode": "520524",
            "province": "贵州省",
            "city": "毕节市",
            "name": "织金县"
          },
          {
            "areaCode": "520525",
            "province": "贵州省",
            "city": "毕节市",
            "name": "纳雍县"
          },
          {
            "areaCode": "520526",
            "province": "贵州省",
            "city": "毕节市",
            "name": "威宁彝族回族苗族自治县"
          },
          {
            "areaCode": "520527",
            "province": "贵州省",
            "city": "毕节市",
            "name": "赫章县"
          }
        ],
        "name": "毕节市",
        "base": "bijie"
      },
      {
        "areaCode": "5206",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "520602",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "碧江区"
          },
          {
            "areaCode": "520603",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "万山区"
          },
          {
            "areaCode": "520621",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "江口县"
          },
          {
            "areaCode": "520622",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "玉屏侗族自治县"
          },
          {
            "areaCode": "520623",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "石阡县"
          },
          {
            "areaCode": "520624",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "思南县"
          },
          {
            "areaCode": "520625",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "印江土家族苗族自治县"
          },
          {
            "areaCode": "520626",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "德江县"
          },
          {
            "areaCode": "520627",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "沿河土家族自治县"
          },
          {
            "areaCode": "520628",
            "province": "贵州省",
            "city": "铜仁市",
            "name": "松桃苗族自治县"
          }
        ],
        "name": "铜仁市",
        "base": "tongren"
      },
      {
        "areaCode": "5223",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "522301",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "兴义市"
          },
          {
            "areaCode": "522323",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "普安县"
          },
          {
            "areaCode": "522324",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "晴隆县"
          },
          {
            "areaCode": "522325",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "贞丰县"
          },
          {
            "areaCode": "522326",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "望谟县"
          },
          {
            "areaCode": "522327",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "册亨县"
          },
          {
            "areaCode": "522328",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "安龙县"
          },
          {
            "areaCode": "522302",
            "province": "贵州省",
            "city": "黔西南布依族苗族自治州",
            "name": "兴仁市"
          }
        ],
        "name": "黔西南布依族苗族自治州",
        "base": "qxnbyz"
      },
      {
        "areaCode": "5226",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "522601",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "凯里市"
          },
          {
            "areaCode": "522622",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "黄平县"
          },
          {
            "areaCode": "522623",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "施秉县"
          },
          {
            "areaCode": "522624",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "三穗县"
          },
          {
            "areaCode": "522625",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "镇远县"
          },
          {
            "areaCode": "522626",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "岑巩县"
          },
          {
            "areaCode": "522627",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "天柱县"
          },
          {
            "areaCode": "522628",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "锦屏县"
          },
          {
            "areaCode": "522629",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "剑河县"
          },
          {
            "areaCode": "522630",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "台江县"
          },
          {
            "areaCode": "522631",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "黎平县"
          },
          {
            "areaCode": "522632",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "榕江县"
          },
          {
            "areaCode": "522633",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "从江县"
          },
          {
            "areaCode": "522634",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "雷山县"
          },
          {
            "areaCode": "522635",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "麻江县"
          },
          {
            "areaCode": "522636",
            "province": "贵州省",
            "city": "黔东南苗族侗族自治州",
            "name": "丹寨县"
          }
        ],
        "name": "黔东南苗族侗族自治州",
        "base": "qdnz"
      },
      {
        "areaCode": "5227",
        "province": "贵州省",
        "district": [
          {
            "areaCode": "522701",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "都匀市"
          },
          {
            "areaCode": "522702",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "福泉市"
          },
          {
            "areaCode": "522722",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "荔波县"
          },
          {
            "areaCode": "522723",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "贵定县"
          },
          {
            "areaCode": "522725",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "瓮安县"
          },
          {
            "areaCode": "522726",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "独山县"
          },
          {
            "areaCode": "522727",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "平塘县"
          },
          {
            "areaCode": "522728",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "罗甸县"
          },
          {
            "areaCode": "522729",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "长顺县"
          },
          {
            "areaCode": "522730",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "龙里县"
          },
          {
            "areaCode": "522731",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "惠水县"
          },
          {
            "areaCode": "522732",
            "province": "贵州省",
            "city": "黔南布依族苗族自治州",
            "name": "三都水族自治县"
          }
        ],
        "name": "黔南布依族苗族自治州",
        "base": "qnbyz"
      }
    ],
    "name": "贵州省",
    "base": "gz"
  },
  {
    "areaCode": "53",
    "city": [
      {
        "areaCode": "5301",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530102",
            "province": "云南省",
            "city": "昆明市",
            "name": "五华区"
          },
          {
            "areaCode": "530103",
            "province": "云南省",
            "city": "昆明市",
            "name": "盘龙区"
          },
          {
            "areaCode": "530111",
            "province": "云南省",
            "city": "昆明市",
            "name": "官渡区"
          },
          {
            "areaCode": "530112",
            "province": "云南省",
            "city": "昆明市",
            "name": "西山区"
          },
          {
            "areaCode": "530113",
            "province": "云南省",
            "city": "昆明市",
            "name": "东川区"
          },
          {
            "areaCode": "530114",
            "province": "云南省",
            "city": "昆明市",
            "name": "呈贡区"
          },
          {
            "areaCode": "530115",
            "province": "云南省",
            "city": "昆明市",
            "name": "晋宁区"
          },
          {
            "areaCode": "530124",
            "province": "云南省",
            "city": "昆明市",
            "name": "富民县"
          },
          {
            "areaCode": "530125",
            "province": "云南省",
            "city": "昆明市",
            "name": "宜良县"
          },
          {
            "areaCode": "530126",
            "province": "云南省",
            "city": "昆明市",
            "name": "石林彝族自治县"
          },
          {
            "areaCode": "530127",
            "province": "云南省",
            "city": "昆明市",
            "name": "嵩明县"
          },
          {
            "areaCode": "530128",
            "province": "云南省",
            "city": "昆明市",
            "name": "禄劝彝族苗族自治县"
          },
          {
            "areaCode": "530129",
            "province": "云南省",
            "city": "昆明市",
            "name": "寻甸回族彝族自治县"
          },
          {
            "areaCode": "530181",
            "province": "云南省",
            "city": "昆明市",
            "name": "安宁市"
          }
        ],
        "name": "昆明市",
        "base": "kunming"
      },
      {
        "areaCode": "5303",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530302",
            "province": "云南省",
            "city": "曲靖市",
            "name": "麒麟区"
          },
          {
            "areaCode": "530303",
            "province": "云南省",
            "city": "曲靖市",
            "name": "沾益区"
          },
          {
            "areaCode": "530322",
            "province": "云南省",
            "city": "曲靖市",
            "name": "陆良县"
          },
          {
            "areaCode": "530323",
            "province": "云南省",
            "city": "曲靖市",
            "name": "师宗县"
          },
          {
            "areaCode": "530324",
            "province": "云南省",
            "city": "曲靖市",
            "name": "罗平县"
          },
          {
            "areaCode": "530325",
            "province": "云南省",
            "city": "曲靖市",
            "name": "富源县"
          },
          {
            "areaCode": "530326",
            "province": "云南省",
            "city": "曲靖市",
            "name": "会泽县"
          },
          {
            "areaCode": "530381",
            "province": "云南省",
            "city": "曲靖市",
            "name": "宣威市"
          },
          {
            "areaCode": "530304",
            "province": "云南省",
            "city": "曲靖市",
            "name": "马龙区"
          }
        ],
        "name": "曲靖市",
        "base": "qujing"
      },
      {
        "areaCode": "5304",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530402",
            "province": "云南省",
            "city": "玉溪市",
            "name": "红塔区"
          },
          {
            "areaCode": "530403",
            "province": "云南省",
            "city": "玉溪市",
            "name": "江川区"
          },
          {
            "areaCode": "530422",
            "province": "云南省",
            "city": "玉溪市",
            "name": "澄江县"
          },
          {
            "areaCode": "530423",
            "province": "云南省",
            "city": "玉溪市",
            "name": "通海县"
          },
          {
            "areaCode": "530424",
            "province": "云南省",
            "city": "玉溪市",
            "name": "华宁县"
          },
          {
            "areaCode": "530425",
            "province": "云南省",
            "city": "玉溪市",
            "name": "易门县"
          },
          {
            "areaCode": "530426",
            "province": "云南省",
            "city": "玉溪市",
            "name": "峨山彝族自治县"
          },
          {
            "areaCode": "530427",
            "province": "云南省",
            "city": "玉溪市",
            "name": "新平彝族傣族自治县"
          },
          {
            "areaCode": "530428",
            "province": "云南省",
            "city": "玉溪市",
            "name": "元江哈尼族彝族傣族自治县"
          }
        ],
        "name": "玉溪市",
        "base": "yuxi"
      },
      {
        "areaCode": "5305",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530502",
            "province": "云南省",
            "city": "保山市",
            "name": "隆阳区"
          },
          {
            "areaCode": "530521",
            "province": "云南省",
            "city": "保山市",
            "name": "施甸县"
          },
          {
            "areaCode": "530523",
            "province": "云南省",
            "city": "保山市",
            "name": "龙陵县"
          },
          {
            "areaCode": "530524",
            "province": "云南省",
            "city": "保山市",
            "name": "昌宁县"
          },
          {
            "areaCode": "530581",
            "province": "云南省",
            "city": "保山市",
            "name": "腾冲市"
          }
        ],
        "name": "保山市",
        "base": "baoshan"
      },
      {
        "areaCode": "5306",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530602",
            "province": "云南省",
            "city": "昭通市",
            "name": "昭阳区"
          },
          {
            "areaCode": "530621",
            "province": "云南省",
            "city": "昭通市",
            "name": "鲁甸县"
          },
          {
            "areaCode": "530622",
            "province": "云南省",
            "city": "昭通市",
            "name": "巧家县"
          },
          {
            "areaCode": "530623",
            "province": "云南省",
            "city": "昭通市",
            "name": "盐津县"
          },
          {
            "areaCode": "530624",
            "province": "云南省",
            "city": "昭通市",
            "name": "大关县"
          },
          {
            "areaCode": "530625",
            "province": "云南省",
            "city": "昭通市",
            "name": "永善县"
          },
          {
            "areaCode": "530626",
            "province": "云南省",
            "city": "昭通市",
            "name": "绥江县"
          },
          {
            "areaCode": "530627",
            "province": "云南省",
            "city": "昭通市",
            "name": "镇雄县"
          },
          {
            "areaCode": "530628",
            "province": "云南省",
            "city": "昭通市",
            "name": "彝良县"
          },
          {
            "areaCode": "530629",
            "province": "云南省",
            "city": "昭通市",
            "name": "威信县"
          },
          {
            "areaCode": "530681",
            "province": "云南省",
            "city": "昭通市",
            "name": "水富市"
          }
        ],
        "name": "昭通市",
        "base": "zhaotong"
      },
      {
        "areaCode": "5307",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530702",
            "province": "云南省",
            "city": "丽江市",
            "name": "古城区"
          },
          {
            "areaCode": "530721",
            "province": "云南省",
            "city": "丽江市",
            "name": "玉龙纳西族自治县"
          },
          {
            "areaCode": "530722",
            "province": "云南省",
            "city": "丽江市",
            "name": "永胜县"
          },
          {
            "areaCode": "530723",
            "province": "云南省",
            "city": "丽江市",
            "name": "华坪县"
          },
          {
            "areaCode": "530724",
            "province": "云南省",
            "city": "丽江市",
            "name": "宁蒗彝族自治县"
          }
        ],
        "name": "丽江市",
        "base": "lijiang"
      },
      {
        "areaCode": "5308",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530802",
            "province": "云南省",
            "city": "普洱市",
            "name": "思茅区"
          },
          {
            "areaCode": "530821",
            "province": "云南省",
            "city": "普洱市",
            "name": "宁洱哈尼族彝族自治县"
          },
          {
            "areaCode": "530822",
            "province": "云南省",
            "city": "普洱市",
            "name": "墨江哈尼族自治县"
          },
          {
            "areaCode": "530823",
            "province": "云南省",
            "city": "普洱市",
            "name": "景东彝族自治县"
          },
          {
            "areaCode": "530824",
            "province": "云南省",
            "city": "普洱市",
            "name": "景谷傣族彝族自治县"
          },
          {
            "areaCode": "530825",
            "province": "云南省",
            "city": "普洱市",
            "name": "镇沅彝族哈尼族拉祜族自治县"
          },
          {
            "areaCode": "530826",
            "province": "云南省",
            "city": "普洱市",
            "name": "江城哈尼族彝族自治县"
          },
          {
            "areaCode": "530827",
            "province": "云南省",
            "city": "普洱市",
            "name": "孟连傣族拉祜族佤族自治县"
          },
          {
            "areaCode": "530828",
            "province": "云南省",
            "city": "普洱市",
            "name": "澜沧拉祜族自治县"
          },
          {
            "areaCode": "530829",
            "province": "云南省",
            "city": "普洱市",
            "name": "西盟佤族自治县"
          }
        ],
        "name": "普洱市",
        "base": "puer"
      },
      {
        "areaCode": "5309",
        "province": "云南省",
        "district": [
          {
            "areaCode": "530902",
            "province": "云南省",
            "city": "临沧市",
            "name": "临翔区"
          },
          {
            "areaCode": "530921",
            "province": "云南省",
            "city": "临沧市",
            "name": "凤庆县"
          },
          {
            "areaCode": "530922",
            "province": "云南省",
            "city": "临沧市",
            "name": "云县"
          },
          {
            "areaCode": "530923",
            "province": "云南省",
            "city": "临沧市",
            "name": "永德县"
          },
          {
            "areaCode": "530924",
            "province": "云南省",
            "city": "临沧市",
            "name": "镇康县"
          },
          {
            "areaCode": "530925",
            "province": "云南省",
            "city": "临沧市",
            "name": "双江拉祜族佤族布朗族傣族自治县"
          },
          {
            "areaCode": "530926",
            "province": "云南省",
            "city": "临沧市",
            "name": "耿马傣族佤族自治县"
          },
          {
            "areaCode": "530927",
            "province": "云南省",
            "city": "临沧市",
            "name": "沧源佤族自治县"
          }
        ],
        "name": "临沧市",
        "base": "lincang"
      },
      {
        "areaCode": "5323",
        "province": "云南省",
        "district": [
          {
            "areaCode": "532301",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "楚雄市"
          },
          {
            "areaCode": "532322",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "双柏县"
          },
          {
            "areaCode": "532323",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "牟定县"
          },
          {
            "areaCode": "532324",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "南华县"
          },
          {
            "areaCode": "532325",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "姚安县"
          },
          {
            "areaCode": "532326",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "大姚县"
          },
          {
            "areaCode": "532327",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "永仁县"
          },
          {
            "areaCode": "532328",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "元谋县"
          },
          {
            "areaCode": "532329",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "武定县"
          },
          {
            "areaCode": "532331",
            "province": "云南省",
            "city": "楚雄彝族自治州",
            "name": "禄丰县"
          }
        ],
        "name": "楚雄彝族自治州",
        "base": "cxyz"
      },
      {
        "areaCode": "5325",
        "province": "云南省",
        "district": [
          {
            "areaCode": "532501",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "个旧市"
          },
          {
            "areaCode": "532502",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "开远市"
          },
          {
            "areaCode": "532503",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "蒙自市"
          },
          {
            "areaCode": "532504",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "弥勒市"
          },
          {
            "areaCode": "532523",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "屏边苗族自治县"
          },
          {
            "areaCode": "532524",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "建水县"
          },
          {
            "areaCode": "532525",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "石屏县"
          },
          {
            "areaCode": "532527",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "泸西县"
          },
          {
            "areaCode": "532528",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "元阳县"
          },
          {
            "areaCode": "532529",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "红河县"
          },
          {
            "areaCode": "532530",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "金平苗族瑶族傣族自治县"
          },
          {
            "areaCode": "532531",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "绿春县"
          },
          {
            "areaCode": "532532",
            "province": "云南省",
            "city": "红河哈尼族彝族自治州",
            "name": "河口瑶族自治县"
          }
        ],
        "name": "红河哈尼族彝族自治州",
        "base": "hhhnzyz"
      },
      {
        "areaCode": "5326",
        "province": "云南省",
        "district": [
          {
            "areaCode": "532601",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "文山市"
          },
          {
            "areaCode": "532622",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "砚山县"
          },
          {
            "areaCode": "532623",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "西畴县"
          },
          {
            "areaCode": "532624",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "麻栗坡县"
          },
          {
            "areaCode": "532625",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "马关县"
          },
          {
            "areaCode": "532626",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "丘北县"
          },
          {
            "areaCode": "532627",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "广南县"
          },
          {
            "areaCode": "532628",
            "province": "云南省",
            "city": "文山壮族苗族自治州",
            "name": "富宁县"
          }
        ],
        "name": "文山壮族苗族自治州",
        "base": "wszzmz"
      },
      {
        "areaCode": "5328",
        "province": "云南省",
        "district": [
          {
            "areaCode": "532801",
            "province": "云南省",
            "city": "西双版纳傣族自治州",
            "name": "景洪市"
          },
          {
            "areaCode": "532822",
            "province": "云南省",
            "city": "西双版纳傣族自治州",
            "name": "勐海县"
          },
          {
            "areaCode": "532823",
            "province": "云南省",
            "city": "西双版纳傣族自治州",
            "name": "勐腊县"
          }
        ],
        "name": "西双版纳傣族自治州",
        "base": "xsbndz"
      },
      {
        "areaCode": "5329",
        "province": "云南省",
        "district": [
          {
            "areaCode": "532901",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "大理市"
          },
          {
            "areaCode": "532922",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "漾濞彝族自治县"
          },
          {
            "areaCode": "532923",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "祥云县"
          },
          {
            "areaCode": "532924",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "宾川县"
          },
          {
            "areaCode": "532925",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "弥渡县"
          },
          {
            "areaCode": "532926",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "南涧彝族自治县"
          },
          {
            "areaCode": "532927",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "巍山彝族回族自治县"
          },
          {
            "areaCode": "532928",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "永平县"
          },
          {
            "areaCode": "532929",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "云龙县"
          },
          {
            "areaCode": "532930",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "洱源县"
          },
          {
            "areaCode": "532931",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "剑川县"
          },
          {
            "areaCode": "532932",
            "province": "云南省",
            "city": "大理白族自治州",
            "name": "鹤庆县"
          }
        ],
        "name": "大理白族自治州",
        "base": "dlbz"
      },
      {
        "areaCode": "5331",
        "province": "云南省",
        "district": [
          {
            "areaCode": "533102",
            "province": "云南省",
            "city": "德宏傣族景颇族自治州",
            "name": "瑞丽市"
          },
          {
            "areaCode": "533103",
            "province": "云南省",
            "city": "德宏傣族景颇族自治州",
            "name": "芒市"
          },
          {
            "areaCode": "533122",
            "province": "云南省",
            "city": "德宏傣族景颇族自治州",
            "name": "梁河县"
          },
          {
            "areaCode": "533123",
            "province": "云南省",
            "city": "德宏傣族景颇族自治州",
            "name": "盈江县"
          },
          {
            "areaCode": "533124",
            "province": "云南省",
            "city": "德宏傣族景颇族自治州",
            "name": "陇川县"
          }
        ],
        "name": "德宏傣族景颇族自治州",
        "base": "dhdzjpz"
      },
      {
        "areaCode": "5333",
        "province": "云南省",
        "district": [
          {
            "areaCode": "533301",
            "province": "云南省",
            "city": "怒江傈僳族自治州",
            "name": "泸水市"
          },
          {
            "areaCode": "533323",
            "province": "云南省",
            "city": "怒江傈僳族自治州",
            "name": "福贡县"
          },
          {
            "areaCode": "533324",
            "province": "云南省",
            "city": "怒江傈僳族自治州",
            "name": "贡山独龙族怒族自治县"
          },
          {
            "areaCode": "533325",
            "province": "云南省",
            "city": "怒江傈僳族自治州",
            "name": "兰坪白族普米族自治县"
          }
        ],
        "name": "怒江傈僳族自治州",
        "base": "njlsz"
      },
      {
        "areaCode": "5334",
        "province": "云南省",
        "district": [
          {
            "areaCode": "533401",
            "province": "云南省",
            "city": "迪庆藏族自治州",
            "name": "香格里拉市"
          },
          {
            "areaCode": "533422",
            "province": "云南省",
            "city": "迪庆藏族自治州",
            "name": "德钦县"
          },
          {
            "areaCode": "533423",
            "province": "云南省",
            "city": "迪庆藏族自治州",
            "name": "维西傈僳族自治县"
          }
        ],
        "name": "迪庆藏族自治州",
        "base": "dqzz"
      }
    ],
    "name": "云南省",
    "base": "yn"
  },
  {
    "areaCode": "46",
    "city": [
      {
        "areaCode": "4601",
        "province": "海南省",
        "district": [
          {
            "areaCode": "460105",
            "province": "海南省",
            "city": "海口市",
            "name": "秀英区"
          },
          {
            "areaCode": "460106",
            "province": "海南省",
            "city": "海口市",
            "name": "龙华区"
          },
          {
            "areaCode": "460107",
            "province": "海南省",
            "city": "海口市",
            "name": "琼山区"
          },
          {
            "areaCode": "460108",
            "province": "海南省",
            "city": "海口市",
            "name": "美兰区"
          }
        ],
        "name": "海口市",
        "base": "haikou"
      },
      {
        "areaCode": "4602",
        "province": "海南省",
        "district": [
          {
            "areaCode": "460202",
            "province": "海南省",
            "city": "三亚市",
            "name": "海棠区"
          },
          {
            "areaCode": "460203",
            "province": "海南省",
            "city": "三亚市",
            "name": "吉阳区"
          },
          {
            "areaCode": "460204",
            "province": "海南省",
            "city": "三亚市",
            "name": "天涯区"
          },
          {
            "areaCode": "460205",
            "province": "海南省",
            "city": "三亚市",
            "name": "崖州区"
          }
        ],
        "name": "三亚市",
        "base": "sanya"
      },
      {
        "areaCode": "4603",
        "province": "海南省",
        "district": [
          {
            "areaCode": "460321",
            "province": "海南省",
            "city": "三沙市",
            "name": "西沙群岛"
          },
          {
            "areaCode": "460322",
            "province": "海南省",
            "city": "三沙市",
            "name": "南沙群岛"
          },
          {
            "areaCode": "460323",
            "province": "海南省",
            "city": "三沙市",
            "name": "中沙群岛的岛礁及其海域"
          }
        ],
        "name": "三沙市",
        "base": "sansha"
      },
      {
        "areaCode": "4690",
        "province": "海南省",
        "district": [
          {
            "areaCode": "469001",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "五指山市"
          },
          {
            "areaCode": "469002",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "琼海市"
          },
          {
            "areaCode": "469005",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "文昌市"
          },
          {
            "areaCode": "469006",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "万宁市"
          },
          {
            "areaCode": "469007",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "东方市"
          },
          {
            "areaCode": "469021",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "定安县"
          },
          {
            "areaCode": "469022",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "屯昌县"
          },
          {
            "areaCode": "469023",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "澄迈县"
          },
          {
            "areaCode": "469024",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "临高县"
          },
          {
            "areaCode": "469025",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "白沙黎族自治县"
          },
          {
            "areaCode": "469026",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "昌江黎族自治县"
          },
          {
            "areaCode": "469027",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "乐东黎族自治县"
          },
          {
            "areaCode": "469028",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "陵水黎族自治县"
          },
          {
            "areaCode": "469029",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "保亭黎族苗族自治县"
          },
          {
            "areaCode": "469030",
            "province": "海南省",
            "city": "省直辖县级行政区划",
            "name": "琼中黎族苗族自治县"
          }
        ],
        "name": "省直辖县级行政区划",
        "base": "hanzx"
      }
    ],
    "name": "海南省",
    "base": "han"
  },
  {
    "areaCode": "61",
    "city": [
      {
        "areaCode": "6101",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610102",
            "province": "陕西省",
            "city": "西安市",
            "name": "新城区"
          },
          {
            "areaCode": "610103",
            "province": "陕西省",
            "city": "西安市",
            "name": "碑林区"
          },
          {
            "areaCode": "610104",
            "province": "陕西省",
            "city": "西安市",
            "name": "莲湖区"
          },
          {
            "areaCode": "610111",
            "province": "陕西省",
            "city": "西安市",
            "name": "灞桥区"
          },
          {
            "areaCode": "610112",
            "province": "陕西省",
            "city": "西安市",
            "name": "未央区"
          },
          {
            "areaCode": "610113",
            "province": "陕西省",
            "city": "西安市",
            "name": "雁塔区"
          },
          {
            "areaCode": "610114",
            "province": "陕西省",
            "city": "西安市",
            "name": "阎良区"
          },
          {
            "areaCode": "610115",
            "province": "陕西省",
            "city": "西安市",
            "name": "临潼区"
          },
          {
            "areaCode": "610116",
            "province": "陕西省",
            "city": "西安市",
            "name": "长安区"
          },
          {
            "areaCode": "610117",
            "province": "陕西省",
            "city": "西安市",
            "name": "高陵区"
          },
          {
            "areaCode": "610118",
            "province": "陕西省",
            "city": "西安市",
            "name": "鄠邑区"
          },
          {
            "areaCode": "610122",
            "province": "陕西省",
            "city": "西安市",
            "name": "蓝田县"
          },
          {
            "areaCode": "610124",
            "province": "陕西省",
            "city": "西安市",
            "name": "周至县"
          }
        ],
        "name": "西安市",
        "base": "xian"
      },
      {
        "areaCode": "6102",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610202",
            "province": "陕西省",
            "city": "铜川市",
            "name": "王益区"
          },
          {
            "areaCode": "610203",
            "province": "陕西省",
            "city": "铜川市",
            "name": "印台区"
          },
          {
            "areaCode": "610204",
            "province": "陕西省",
            "city": "铜川市",
            "name": "耀州区"
          },
          {
            "areaCode": "610222",
            "province": "陕西省",
            "city": "铜川市",
            "name": "宜君县"
          }
        ],
        "name": "铜川市",
        "base": "tongchuan"
      },
      {
        "areaCode": "6103",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610302",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "渭滨区"
          },
          {
            "areaCode": "610303",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "金台区"
          },
          {
            "areaCode": "610304",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "陈仓区"
          },
          {
            "areaCode": "610322",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "凤翔县"
          },
          {
            "areaCode": "610323",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "岐山县"
          },
          {
            "areaCode": "610324",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "扶风县"
          },
          {
            "areaCode": "610326",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "眉县"
          },
          {
            "areaCode": "610327",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "陇县"
          },
          {
            "areaCode": "610328",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "千阳县"
          },
          {
            "areaCode": "610329",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "麟游县"
          },
          {
            "areaCode": "610330",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "凤县"
          },
          {
            "areaCode": "610331",
            "province": "陕西省",
            "city": "宝鸡市",
            "name": "太白县"
          }
        ],
        "name": "宝鸡市",
        "base": "baoji"
      },
      {
        "areaCode": "6104",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610402",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "秦都区"
          },
          {
            "areaCode": "610403",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "杨陵区"
          },
          {
            "areaCode": "610404",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "渭城区"
          },
          {
            "areaCode": "610422",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "三原县"
          },
          {
            "areaCode": "610423",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "泾阳县"
          },
          {
            "areaCode": "610424",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "乾县"
          },
          {
            "areaCode": "610425",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "礼泉县"
          },
          {
            "areaCode": "610426",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "永寿县"
          },
          {
            "areaCode": "610428",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "长武县"
          },
          {
            "areaCode": "610429",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "旬邑县"
          },
          {
            "areaCode": "610430",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "淳化县"
          },
          {
            "areaCode": "610431",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "武功县"
          },
          {
            "areaCode": "610481",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "兴平市"
          },
          {
            "areaCode": "610482",
            "province": "陕西省",
            "city": "咸阳市",
            "name": "彬州市"
          }
        ],
        "name": "咸阳市",
        "base": "xianyang"
      },
      {
        "areaCode": "6105",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610502",
            "province": "陕西省",
            "city": "渭南市",
            "name": "临渭区"
          },
          {
            "areaCode": "610503",
            "province": "陕西省",
            "city": "渭南市",
            "name": "华州区"
          },
          {
            "areaCode": "610522",
            "province": "陕西省",
            "city": "渭南市",
            "name": "潼关县"
          },
          {
            "areaCode": "610523",
            "province": "陕西省",
            "city": "渭南市",
            "name": "大荔县"
          },
          {
            "areaCode": "610524",
            "province": "陕西省",
            "city": "渭南市",
            "name": "合阳县"
          },
          {
            "areaCode": "610525",
            "province": "陕西省",
            "city": "渭南市",
            "name": "澄城县"
          },
          {
            "areaCode": "610526",
            "province": "陕西省",
            "city": "渭南市",
            "name": "蒲城县"
          },
          {
            "areaCode": "610527",
            "province": "陕西省",
            "city": "渭南市",
            "name": "白水县"
          },
          {
            "areaCode": "610528",
            "province": "陕西省",
            "city": "渭南市",
            "name": "富平县"
          },
          {
            "areaCode": "610581",
            "province": "陕西省",
            "city": "渭南市",
            "name": "韩城市"
          },
          {
            "areaCode": "610582",
            "province": "陕西省",
            "city": "渭南市",
            "name": "华阴市"
          }
        ],
        "name": "渭南市",
        "base": "weinan"
      },
      {
        "areaCode": "6106",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610602",
            "province": "陕西省",
            "city": "延安市",
            "name": "宝塔区"
          },
          {
            "areaCode": "610603",
            "province": "陕西省",
            "city": "延安市",
            "name": "安塞区"
          },
          {
            "areaCode": "610621",
            "province": "陕西省",
            "city": "延安市",
            "name": "延长县"
          },
          {
            "areaCode": "610622",
            "province": "陕西省",
            "city": "延安市",
            "name": "延川县"
          },
          {
            "areaCode": "610623",
            "province": "陕西省",
            "city": "延安市",
            "name": "子长县"
          },
          {
            "areaCode": "610625",
            "province": "陕西省",
            "city": "延安市",
            "name": "志丹县"
          },
          {
            "areaCode": "610626",
            "province": "陕西省",
            "city": "延安市",
            "name": "吴起县"
          },
          {
            "areaCode": "610627",
            "province": "陕西省",
            "city": "延安市",
            "name": "甘泉县"
          },
          {
            "areaCode": "610628",
            "province": "陕西省",
            "city": "延安市",
            "name": "富县"
          },
          {
            "areaCode": "610629",
            "province": "陕西省",
            "city": "延安市",
            "name": "洛川县"
          },
          {
            "areaCode": "610630",
            "province": "陕西省",
            "city": "延安市",
            "name": "宜川县"
          },
          {
            "areaCode": "610631",
            "province": "陕西省",
            "city": "延安市",
            "name": "黄龙县"
          },
          {
            "areaCode": "610632",
            "province": "陕西省",
            "city": "延安市",
            "name": "黄陵县"
          }
        ],
        "name": "延安市",
        "base": "yanan"
      },
      {
        "areaCode": "6107",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610702",
            "province": "陕西省",
            "city": "汉中市",
            "name": "汉台区"
          },
          {
            "areaCode": "610703",
            "province": "陕西省",
            "city": "汉中市",
            "name": "南郑区"
          },
          {
            "areaCode": "610722",
            "province": "陕西省",
            "city": "汉中市",
            "name": "城固县"
          },
          {
            "areaCode": "610723",
            "province": "陕西省",
            "city": "汉中市",
            "name": "洋县"
          },
          {
            "areaCode": "610724",
            "province": "陕西省",
            "city": "汉中市",
            "name": "西乡县"
          },
          {
            "areaCode": "610725",
            "province": "陕西省",
            "city": "汉中市",
            "name": "勉县"
          },
          {
            "areaCode": "610726",
            "province": "陕西省",
            "city": "汉中市",
            "name": "宁强县"
          },
          {
            "areaCode": "610727",
            "province": "陕西省",
            "city": "汉中市",
            "name": "略阳县"
          },
          {
            "areaCode": "610728",
            "province": "陕西省",
            "city": "汉中市",
            "name": "镇巴县"
          },
          {
            "areaCode": "610729",
            "province": "陕西省",
            "city": "汉中市",
            "name": "留坝县"
          },
          {
            "areaCode": "610730",
            "province": "陕西省",
            "city": "汉中市",
            "name": "佛坪县"
          }
        ],
        "name": "汉中市",
        "base": "hanzhong"
      },
      {
        "areaCode": "6108",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610802",
            "province": "陕西省",
            "city": "榆林市",
            "name": "榆阳区"
          },
          {
            "areaCode": "610803",
            "province": "陕西省",
            "city": "榆林市",
            "name": "横山区"
          },
          {
            "areaCode": "610822",
            "province": "陕西省",
            "city": "榆林市",
            "name": "府谷县"
          },
          {
            "areaCode": "610824",
            "province": "陕西省",
            "city": "榆林市",
            "name": "靖边县"
          },
          {
            "areaCode": "610825",
            "province": "陕西省",
            "city": "榆林市",
            "name": "定边县"
          },
          {
            "areaCode": "610826",
            "province": "陕西省",
            "city": "榆林市",
            "name": "绥德县"
          },
          {
            "areaCode": "610827",
            "province": "陕西省",
            "city": "榆林市",
            "name": "米脂县"
          },
          {
            "areaCode": "610828",
            "province": "陕西省",
            "city": "榆林市",
            "name": "佳县"
          },
          {
            "areaCode": "610829",
            "province": "陕西省",
            "city": "榆林市",
            "name": "吴堡县"
          },
          {
            "areaCode": "610830",
            "province": "陕西省",
            "city": "榆林市",
            "name": "清涧县"
          },
          {
            "areaCode": "610831",
            "province": "陕西省",
            "city": "榆林市",
            "name": "子洲县"
          },
          {
            "areaCode": "610881",
            "province": "陕西省",
            "city": "榆林市",
            "name": "神木市"
          }
        ],
        "name": "榆林市",
        "base": "yulin"
      },
      {
        "areaCode": "6109",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "610902",
            "province": "陕西省",
            "city": "安康市",
            "name": "汉滨区"
          },
          {
            "areaCode": "610921",
            "province": "陕西省",
            "city": "安康市",
            "name": "汉阴县"
          },
          {
            "areaCode": "610922",
            "province": "陕西省",
            "city": "安康市",
            "name": "石泉县"
          },
          {
            "areaCode": "610923",
            "province": "陕西省",
            "city": "安康市",
            "name": "宁陕县"
          },
          {
            "areaCode": "610924",
            "province": "陕西省",
            "city": "安康市",
            "name": "紫阳县"
          },
          {
            "areaCode": "610925",
            "province": "陕西省",
            "city": "安康市",
            "name": "岚皋县"
          },
          {
            "areaCode": "610926",
            "province": "陕西省",
            "city": "安康市",
            "name": "平利县"
          },
          {
            "areaCode": "610927",
            "province": "陕西省",
            "city": "安康市",
            "name": "镇坪县"
          },
          {
            "areaCode": "610928",
            "province": "陕西省",
            "city": "安康市",
            "name": "旬阳县"
          },
          {
            "areaCode": "610929",
            "province": "陕西省",
            "city": "安康市",
            "name": "白河县"
          }
        ],
        "name": "安康市",
        "base": "ankang"
      },
      {
        "areaCode": "6110",
        "province": "陕西省",
        "district": [
          {
            "areaCode": "611002",
            "province": "陕西省",
            "city": "商洛市",
            "name": "商州区"
          },
          {
            "areaCode": "611021",
            "province": "陕西省",
            "city": "商洛市",
            "name": "洛南县"
          },
          {
            "areaCode": "611022",
            "province": "陕西省",
            "city": "商洛市",
            "name": "丹凤县"
          },
          {
            "areaCode": "611023",
            "province": "陕西省",
            "city": "商洛市",
            "name": "商南县"
          },
          {
            "areaCode": "611024",
            "province": "陕西省",
            "city": "商洛市",
            "name": "山阳县"
          },
          {
            "areaCode": "611025",
            "province": "陕西省",
            "city": "商洛市",
            "name": "镇安县"
          },
          {
            "areaCode": "611026",
            "province": "陕西省",
            "city": "商洛市",
            "name": "柞水县"
          }
        ],
        "name": "商洛市",
        "base": "shangluo"
      }
    ],
    "name": "陕西省",
    "base": "snx"
  },
  {
    "areaCode": "62",
    "city": [
      {
        "areaCode": "6201",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620102",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "城关区"
          },
          {
            "areaCode": "620103",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "七里河区"
          },
          {
            "areaCode": "620104",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "西固区"
          },
          {
            "areaCode": "620105",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "安宁区"
          },
          {
            "areaCode": "620111",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "红古区"
          },
          {
            "areaCode": "620121",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "永登县"
          },
          {
            "areaCode": "620122",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "皋兰县"
          },
          {
            "areaCode": "620123",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "榆中县"
          },
          {
            "areaCode": "620171",
            "province": "甘肃省",
            "city": "兰州市",
            "name": "兰州新区"
          }
        ],
        "name": "兰州市",
        "base": "lanzhou"
      },
      {
        "areaCode": "6203",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620302",
            "province": "甘肃省",
            "city": "金昌市",
            "name": "金川区"
          },
          {
            "areaCode": "620321",
            "province": "甘肃省",
            "city": "金昌市",
            "name": "永昌县"
          }
        ],
        "name": "金昌市",
        "base": "jinchang"
      },
      {
        "areaCode": "6204",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620402",
            "province": "甘肃省",
            "city": "白银市",
            "name": "白银区"
          },
          {
            "areaCode": "620403",
            "province": "甘肃省",
            "city": "白银市",
            "name": "平川区"
          },
          {
            "areaCode": "620421",
            "province": "甘肃省",
            "city": "白银市",
            "name": "靖远县"
          },
          {
            "areaCode": "620422",
            "province": "甘肃省",
            "city": "白银市",
            "name": "会宁县"
          },
          {
            "areaCode": "620423",
            "province": "甘肃省",
            "city": "白银市",
            "name": "景泰县"
          }
        ],
        "name": "白银市",
        "base": "baiyin"
      },
      {
        "areaCode": "6205",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620502",
            "province": "甘肃省",
            "city": "天水市",
            "name": "秦州区"
          },
          {
            "areaCode": "620503",
            "province": "甘肃省",
            "city": "天水市",
            "name": "麦积区"
          },
          {
            "areaCode": "620521",
            "province": "甘肃省",
            "city": "天水市",
            "name": "清水县"
          },
          {
            "areaCode": "620522",
            "province": "甘肃省",
            "city": "天水市",
            "name": "秦安县"
          },
          {
            "areaCode": "620523",
            "province": "甘肃省",
            "city": "天水市",
            "name": "甘谷县"
          },
          {
            "areaCode": "620524",
            "province": "甘肃省",
            "city": "天水市",
            "name": "武山县"
          },
          {
            "areaCode": "620525",
            "province": "甘肃省",
            "city": "天水市",
            "name": "张家川回族自治县"
          }
        ],
        "name": "天水市",
        "base": "tianshui"
      },
      {
        "areaCode": "6206",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620602",
            "province": "甘肃省",
            "city": "武威市",
            "name": "凉州区"
          },
          {
            "areaCode": "620621",
            "province": "甘肃省",
            "city": "武威市",
            "name": "民勤县"
          },
          {
            "areaCode": "620622",
            "province": "甘肃省",
            "city": "武威市",
            "name": "古浪县"
          },
          {
            "areaCode": "620623",
            "province": "甘肃省",
            "city": "武威市",
            "name": "天祝藏族自治县"
          }
        ],
        "name": "武威市",
        "base": "wuwei"
      },
      {
        "areaCode": "6207",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620702",
            "province": "甘肃省",
            "city": "张掖市",
            "name": "甘州区"
          },
          {
            "areaCode": "620721",
            "province": "甘肃省",
            "city": "张掖市",
            "name": "肃南裕固族自治县"
          },
          {
            "areaCode": "620722",
            "province": "甘肃省",
            "city": "张掖市",
            "name": "民乐县"
          },
          {
            "areaCode": "620723",
            "province": "甘肃省",
            "city": "张掖市",
            "name": "临泽县"
          },
          {
            "areaCode": "620724",
            "province": "甘肃省",
            "city": "张掖市",
            "name": "高台县"
          },
          {
            "areaCode": "620725",
            "province": "甘肃省",
            "city": "张掖市",
            "name": "山丹县"
          }
        ],
        "name": "张掖市",
        "base": "zhangye"
      },
      {
        "areaCode": "6208",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620802",
            "province": "甘肃省",
            "city": "平凉市",
            "name": "崆峒区"
          },
          {
            "areaCode": "620821",
            "province": "甘肃省",
            "city": "平凉市",
            "name": "泾川县"
          },
          {
            "areaCode": "620822",
            "province": "甘肃省",
            "city": "平凉市",
            "name": "灵台县"
          },
          {
            "areaCode": "620823",
            "province": "甘肃省",
            "city": "平凉市",
            "name": "崇信县"
          },
          {
            "areaCode": "620825",
            "province": "甘肃省",
            "city": "平凉市",
            "name": "庄浪县"
          },
          {
            "areaCode": "620826",
            "province": "甘肃省",
            "city": "平凉市",
            "name": "静宁县"
          },
          {
            "areaCode": "620881",
            "province": "甘肃省",
            "city": "平凉市",
            "name": "华亭市"
          }
        ],
        "name": "平凉市",
        "base": "pingliang"
      },
      {
        "areaCode": "6209",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "620902",
            "province": "甘肃省",
            "city": "酒泉市",
            "name": "肃州区"
          },
          {
            "areaCode": "620921",
            "province": "甘肃省",
            "city": "酒泉市",
            "name": "金塔县"
          },
          {
            "areaCode": "620922",
            "province": "甘肃省",
            "city": "酒泉市",
            "name": "瓜州县"
          },
          {
            "areaCode": "620923",
            "province": "甘肃省",
            "city": "酒泉市",
            "name": "肃北蒙古族自治县"
          },
          {
            "areaCode": "620924",
            "province": "甘肃省",
            "city": "酒泉市",
            "name": "阿克塞哈萨克族自治县"
          },
          {
            "areaCode": "620981",
            "province": "甘肃省",
            "city": "酒泉市",
            "name": "玉门市"
          },
          {
            "areaCode": "620982",
            "province": "甘肃省",
            "city": "酒泉市",
            "name": "敦煌市"
          }
        ],
        "name": "酒泉市",
        "base": "jiuquan"
      },
      {
        "areaCode": "6210",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "621002",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "西峰区"
          },
          {
            "areaCode": "621021",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "庆城县"
          },
          {
            "areaCode": "621022",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "环县"
          },
          {
            "areaCode": "621023",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "华池县"
          },
          {
            "areaCode": "621024",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "合水县"
          },
          {
            "areaCode": "621025",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "正宁县"
          },
          {
            "areaCode": "621026",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "宁县"
          },
          {
            "areaCode": "621027",
            "province": "甘肃省",
            "city": "庆阳市",
            "name": "镇原县"
          }
        ],
        "name": "庆阳市",
        "base": "qingyang"
      },
      {
        "areaCode": "6211",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "621102",
            "province": "甘肃省",
            "city": "定西市",
            "name": "安定区"
          },
          {
            "areaCode": "621121",
            "province": "甘肃省",
            "city": "定西市",
            "name": "通渭县"
          },
          {
            "areaCode": "621122",
            "province": "甘肃省",
            "city": "定西市",
            "name": "陇西县"
          },
          {
            "areaCode": "621123",
            "province": "甘肃省",
            "city": "定西市",
            "name": "渭源县"
          },
          {
            "areaCode": "621124",
            "province": "甘肃省",
            "city": "定西市",
            "name": "临洮县"
          },
          {
            "areaCode": "621125",
            "province": "甘肃省",
            "city": "定西市",
            "name": "漳县"
          },
          {
            "areaCode": "621126",
            "province": "甘肃省",
            "city": "定西市",
            "name": "岷县"
          }
        ],
        "name": "定西市",
        "base": "dingxi"
      },
      {
        "areaCode": "6212",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "621202",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "武都区"
          },
          {
            "areaCode": "621221",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "成县"
          },
          {
            "areaCode": "621222",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "文县"
          },
          {
            "areaCode": "621223",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "宕昌县"
          },
          {
            "areaCode": "621224",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "康县"
          },
          {
            "areaCode": "621225",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "西和县"
          },
          {
            "areaCode": "621226",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "礼县"
          },
          {
            "areaCode": "621227",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "徽县"
          },
          {
            "areaCode": "621228",
            "province": "甘肃省",
            "city": "陇南市",
            "name": "两当县"
          }
        ],
        "name": "陇南市",
        "base": "longnan"
      },
      {
        "areaCode": "6229",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "622901",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "临夏市"
          },
          {
            "areaCode": "622921",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "临夏县"
          },
          {
            "areaCode": "622922",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "康乐县"
          },
          {
            "areaCode": "622923",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "永靖县"
          },
          {
            "areaCode": "622924",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "广河县"
          },
          {
            "areaCode": "622925",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "和政县"
          },
          {
            "areaCode": "622926",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "东乡族自治县"
          },
          {
            "areaCode": "622927",
            "province": "甘肃省",
            "city": "临夏回族自治州",
            "name": "积石山保安族东乡族撒拉族自治县"
          }
        ],
        "name": "临夏回族自治州",
        "base": "lxhz"
      },
      {
        "areaCode": "6202",
        "province": "甘肃省",
        "district": [],
        "name": "嘉峪关市",
        "base": "jiayuguan"
      },
      {
        "areaCode": "6230",
        "province": "甘肃省",
        "district": [
          {
            "areaCode": "623001",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "合作市"
          },
          {
            "areaCode": "623021",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "临潭县"
          },
          {
            "areaCode": "623022",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "卓尼县"
          },
          {
            "areaCode": "623023",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "舟曲县"
          },
          {
            "areaCode": "623024",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "迭部县"
          },
          {
            "areaCode": "623025",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "玛曲县"
          },
          {
            "areaCode": "623026",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "碌曲县"
          },
          {
            "areaCode": "623027",
            "province": "甘肃省",
            "city": "甘南藏族自治州",
            "name": "夏河县"
          }
        ],
        "name": "甘南藏族自治州",
        "base": "gnzz"
      }
    ],
    "name": "甘肃省",
    "base": "gs"
  },
  {
    "areaCode": "64",
    "city": [
      {
        "areaCode": "6401",
        "province": "宁夏回族自治区",
        "district": [
          {
            "areaCode": "640104",
            "province": "宁夏回族自治区",
            "city": "银川市",
            "name": "兴庆区"
          },
          {
            "areaCode": "640105",
            "province": "宁夏回族自治区",
            "city": "银川市",
            "name": "西夏区"
          },
          {
            "areaCode": "640106",
            "province": "宁夏回族自治区",
            "city": "银川市",
            "name": "金凤区"
          },
          {
            "areaCode": "640121",
            "province": "宁夏回族自治区",
            "city": "银川市",
            "name": "永宁县"
          },
          {
            "areaCode": "640122",
            "province": "宁夏回族自治区",
            "city": "银川市",
            "name": "贺兰县"
          },
          {
            "areaCode": "640181",
            "province": "宁夏回族自治区",
            "city": "银川市",
            "name": "灵武市"
          }
        ],
        "name": "银川市",
        "base": "yinchuan"
      },
      {
        "areaCode": "6402",
        "province": "宁夏回族自治区",
        "district": [
          {
            "areaCode": "640202",
            "province": "宁夏回族自治区",
            "city": "石嘴山市",
            "name": "大武口区"
          },
          {
            "areaCode": "640205",
            "province": "宁夏回族自治区",
            "city": "石嘴山市",
            "name": "惠农区"
          },
          {
            "areaCode": "640221",
            "province": "宁夏回族自治区",
            "city": "石嘴山市",
            "name": "平罗县"
          }
        ],
        "name": "石嘴山市",
        "base": "szs"
      },
      {
        "areaCode": "6403",
        "province": "宁夏回族自治区",
        "district": [
          {
            "areaCode": "640302",
            "province": "宁夏回族自治区",
            "city": "吴忠市",
            "name": "利通区"
          },
          {
            "areaCode": "640303",
            "province": "宁夏回族自治区",
            "city": "吴忠市",
            "name": "红寺堡区"
          },
          {
            "areaCode": "640323",
            "province": "宁夏回族自治区",
            "city": "吴忠市",
            "name": "盐池县"
          },
          {
            "areaCode": "640324",
            "province": "宁夏回族自治区",
            "city": "吴忠市",
            "name": "同心县"
          },
          {
            "areaCode": "640381",
            "province": "宁夏回族自治区",
            "city": "吴忠市",
            "name": "青铜峡市"
          }
        ],
        "name": "吴忠市",
        "base": "wuzhong"
      },
      {
        "areaCode": "6404",
        "province": "宁夏回族自治区",
        "district": [
          {
            "areaCode": "640402",
            "province": "宁夏回族自治区",
            "city": "固原市",
            "name": "原州区"
          },
          {
            "areaCode": "640422",
            "province": "宁夏回族自治区",
            "city": "固原市",
            "name": "西吉县"
          },
          {
            "areaCode": "640423",
            "province": "宁夏回族自治区",
            "city": "固原市",
            "name": "隆德县"
          },
          {
            "areaCode": "640424",
            "province": "宁夏回族自治区",
            "city": "固原市",
            "name": "泾源县"
          },
          {
            "areaCode": "640425",
            "province": "宁夏回族自治区",
            "city": "固原市",
            "name": "彭阳县"
          }
        ],
        "name": "固原市",
        "base": "guyuan"
      },
      {
        "areaCode": "6405",
        "province": "宁夏回族自治区",
        "district": [
          {
            "areaCode": "640502",
            "province": "宁夏回族自治区",
            "city": "中卫市",
            "name": "沙坡头区"
          },
          {
            "areaCode": "640521",
            "province": "宁夏回族自治区",
            "city": "中卫市",
            "name": "中宁县"
          },
          {
            "areaCode": "640522",
            "province": "宁夏回族自治区",
            "city": "中卫市",
            "name": "海原县"
          }
        ],
        "name": "中卫市",
        "base": "zhongwei"
      }
    ],
    "name": "宁夏回族自治区",
    "base": "nx"
  },
  {
    "areaCode": "63",
    "city": [
      {
        "areaCode": "6301",
        "province": "青海省",
        "district": [
          {
            "areaCode": "630102",
            "province": "青海省",
            "city": "西宁市",
            "name": "城东区"
          },
          {
            "areaCode": "630103",
            "province": "青海省",
            "city": "西宁市",
            "name": "城中区"
          },
          {
            "areaCode": "630104",
            "province": "青海省",
            "city": "西宁市",
            "name": "城西区"
          },
          {
            "areaCode": "630105",
            "province": "青海省",
            "city": "西宁市",
            "name": "城北区"
          },
          {
            "areaCode": "630121",
            "province": "青海省",
            "city": "西宁市",
            "name": "大通回族土族自治县"
          },
          {
            "areaCode": "630122",
            "province": "青海省",
            "city": "西宁市",
            "name": "湟中县"
          },
          {
            "areaCode": "630123",
            "province": "青海省",
            "city": "西宁市",
            "name": "湟源县"
          }
        ],
        "name": "西宁市",
        "base": "xining"
      },
      {
        "areaCode": "6302",
        "province": "青海省",
        "district": [
          {
            "areaCode": "630202",
            "province": "青海省",
            "city": "海东市",
            "name": "乐都区"
          },
          {
            "areaCode": "630203",
            "province": "青海省",
            "city": "海东市",
            "name": "平安区"
          },
          {
            "areaCode": "630222",
            "province": "青海省",
            "city": "海东市",
            "name": "民和回族土族自治县"
          },
          {
            "areaCode": "630223",
            "province": "青海省",
            "city": "海东市",
            "name": "互助土族自治县"
          },
          {
            "areaCode": "630224",
            "province": "青海省",
            "city": "海东市",
            "name": "化隆回族自治县"
          },
          {
            "areaCode": "630225",
            "province": "青海省",
            "city": "海东市",
            "name": "循化撒拉族自治县"
          }
        ],
        "name": "海东市",
        "base": "haidong"
      },
      {
        "areaCode": "6322",
        "province": "青海省",
        "district": [
          {
            "areaCode": "632221",
            "province": "青海省",
            "city": "海北藏族自治州",
            "name": "门源回族自治县"
          },
          {
            "areaCode": "632222",
            "province": "青海省",
            "city": "海北藏族自治州",
            "name": "祁连县"
          },
          {
            "areaCode": "632223",
            "province": "青海省",
            "city": "海北藏族自治州",
            "name": "海晏县"
          },
          {
            "areaCode": "632224",
            "province": "青海省",
            "city": "海北藏族自治州",
            "name": "刚察县"
          }
        ],
        "name": "海北藏族自治州",
        "base": "hbzz"
      },
      {
        "areaCode": "6323",
        "province": "青海省",
        "district": [
          {
            "areaCode": "632321",
            "province": "青海省",
            "city": "黄南藏族自治州",
            "name": "同仁县"
          },
          {
            "areaCode": "632322",
            "province": "青海省",
            "city": "黄南藏族自治州",
            "name": "尖扎县"
          },
          {
            "areaCode": "632323",
            "province": "青海省",
            "city": "黄南藏族自治州",
            "name": "泽库县"
          },
          {
            "areaCode": "632324",
            "province": "青海省",
            "city": "黄南藏族自治州",
            "name": "河南蒙古族自治县"
          }
        ],
        "name": "黄南藏族自治州",
        "base": "hunzz"
      },
      {
        "areaCode": "6325",
        "province": "青海省",
        "district": [
          {
            "areaCode": "632521",
            "province": "青海省",
            "city": "海南藏族自治州",
            "name": "共和县"
          },
          {
            "areaCode": "632522",
            "province": "青海省",
            "city": "海南藏族自治州",
            "name": "同德县"
          },
          {
            "areaCode": "632523",
            "province": "青海省",
            "city": "海南藏族自治州",
            "name": "贵德县"
          },
          {
            "areaCode": "632524",
            "province": "青海省",
            "city": "海南藏族自治州",
            "name": "兴海县"
          },
          {
            "areaCode": "632525",
            "province": "青海省",
            "city": "海南藏族自治州",
            "name": "贵南县"
          }
        ],
        "name": "海南藏族自治州",
        "base": "hnzz"
      },
      {
        "areaCode": "6326",
        "province": "青海省",
        "district": [
          {
            "areaCode": "632621",
            "province": "青海省",
            "city": "果洛藏族自治州",
            "name": "玛沁县"
          },
          {
            "areaCode": "632622",
            "province": "青海省",
            "city": "果洛藏族自治州",
            "name": "班玛县"
          },
          {
            "areaCode": "632623",
            "province": "青海省",
            "city": "果洛藏族自治州",
            "name": "甘德县"
          },
          {
            "areaCode": "632624",
            "province": "青海省",
            "city": "果洛藏族自治州",
            "name": "达日县"
          },
          {
            "areaCode": "632625",
            "province": "青海省",
            "city": "果洛藏族自治州",
            "name": "久治县"
          },
          {
            "areaCode": "632626",
            "province": "青海省",
            "city": "果洛藏族自治州",
            "name": "玛多县"
          }
        ],
        "name": "果洛藏族自治州",
        "base": "glzz"
      },
      {
        "areaCode": "6327",
        "province": "青海省",
        "district": [
          {
            "areaCode": "632701",
            "province": "青海省",
            "city": "玉树藏族自治州",
            "name": "玉树市"
          },
          {
            "areaCode": "632722",
            "province": "青海省",
            "city": "玉树藏族自治州",
            "name": "杂多县"
          },
          {
            "areaCode": "632723",
            "province": "青海省",
            "city": "玉树藏族自治州",
            "name": "称多县"
          },
          {
            "areaCode": "632724",
            "province": "青海省",
            "city": "玉树藏族自治州",
            "name": "治多县"
          },
          {
            "areaCode": "632725",
            "province": "青海省",
            "city": "玉树藏族自治州",
            "name": "囊谦县"
          },
          {
            "areaCode": "632726",
            "province": "青海省",
            "city": "玉树藏族自治州",
            "name": "曲麻莱县"
          }
        ],
        "name": "玉树藏族自治州",
        "base": "yszz"
      },
      {
        "areaCode": "6328",
        "province": "青海省",
        "district": [
          {
            "areaCode": "632801",
            "province": "青海省",
            "city": "海西蒙古族藏族自治州",
            "name": "格尔木市"
          },
          {
            "areaCode": "632802",
            "province": "青海省",
            "city": "海西蒙古族藏族自治州",
            "name": "德令哈市"
          },
          {
            "areaCode": "632821",
            "province": "青海省",
            "city": "海西蒙古族藏族自治州",
            "name": "乌兰县"
          },
          {
            "areaCode": "632822",
            "province": "青海省",
            "city": "海西蒙古族藏族自治州",
            "name": "都兰县"
          },
          {
            "areaCode": "632823",
            "province": "青海省",
            "city": "海西蒙古族藏族自治州",
            "name": "天峻县"
          },
          {
            "areaCode": "632857",
            "province": "青海省",
            "city": "海西蒙古族藏族自治州",
            "name": "大柴旦行政委员会"
          },
          {
            "areaCode": "632803",
            "province": "青海省",
            "city": "海西蒙古族藏族自治州",
            "name": "茫崖市"
          }
        ],
        "name": "海西蒙古族藏族自治州",
        "base": "hxmgz"
      }
    ],
    "name": "青海省",
    "base": "qh"
  },
  {
    "areaCode": "65",
    "city": [
      {
        "areaCode": "6501",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "650102",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "天山区"
          },
          {
            "areaCode": "650103",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "沙依巴克区"
          },
          {
            "areaCode": "650104",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "新市区"
          },
          {
            "areaCode": "650105",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "水磨沟区"
          },
          {
            "areaCode": "650106",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "头屯河区"
          },
          {
            "areaCode": "650107",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "达坂城区"
          },
          {
            "areaCode": "650109",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "米东区"
          },
          {
            "areaCode": "650121",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "乌鲁木齐县"
          },
          {
            "areaCode": "650171",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "乌鲁木齐经济技术开发区"
          },
          {
            "areaCode": "650172",
            "province": "新疆维吾尔自治区",
            "city": "乌鲁木齐市",
            "name": "乌鲁木齐高新技术产业开发区"
          }
        ],
        "name": "乌鲁木齐市",
        "base": "wlmq"
      },
      {
        "areaCode": "6502",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "650202",
            "province": "新疆维吾尔自治区",
            "city": "克拉玛依市",
            "name": "独山子区"
          },
          {
            "areaCode": "650203",
            "province": "新疆维吾尔自治区",
            "city": "克拉玛依市",
            "name": "克拉玛依区"
          },
          {
            "areaCode": "650204",
            "province": "新疆维吾尔自治区",
            "city": "克拉玛依市",
            "name": "白碱滩区"
          },
          {
            "areaCode": "650205",
            "province": "新疆维吾尔自治区",
            "city": "克拉玛依市",
            "name": "乌尔禾区"
          }
        ],
        "name": "克拉玛依市",
        "base": "klmy"
      },
      {
        "areaCode": "6504",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "650402",
            "province": "新疆维吾尔自治区",
            "city": "吐鲁番市",
            "name": "高昌区"
          },
          {
            "areaCode": "650421",
            "province": "新疆维吾尔自治区",
            "city": "吐鲁番市",
            "name": "鄯善县"
          },
          {
            "areaCode": "650422",
            "province": "新疆维吾尔自治区",
            "city": "吐鲁番市",
            "name": "托克逊县"
          }
        ],
        "name": "吐鲁番市",
        "base": "tlfdq"
      },
      {
        "areaCode": "6505",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "650502",
            "province": "新疆维吾尔自治区",
            "city": "哈密市",
            "name": "伊州区"
          },
          {
            "areaCode": "650521",
            "province": "新疆维吾尔自治区",
            "city": "哈密市",
            "name": "巴里坤哈萨克自治县"
          },
          {
            "areaCode": "650522",
            "province": "新疆维吾尔自治区",
            "city": "哈密市",
            "name": "伊吾县"
          }
        ],
        "name": "哈密市",
        "base": "hmdq"
      },
      {
        "areaCode": "6523",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "652301",
            "province": "新疆维吾尔自治区",
            "city": "昌吉回族自治州",
            "name": "昌吉市"
          },
          {
            "areaCode": "652302",
            "province": "新疆维吾尔自治区",
            "city": "昌吉回族自治州",
            "name": "阜康市"
          },
          {
            "areaCode": "652323",
            "province": "新疆维吾尔自治区",
            "city": "昌吉回族自治州",
            "name": "呼图壁县"
          },
          {
            "areaCode": "652324",
            "province": "新疆维吾尔自治区",
            "city": "昌吉回族自治州",
            "name": "玛纳斯县"
          },
          {
            "areaCode": "652325",
            "province": "新疆维吾尔自治区",
            "city": "昌吉回族自治州",
            "name": "奇台县"
          },
          {
            "areaCode": "652327",
            "province": "新疆维吾尔自治区",
            "city": "昌吉回族自治州",
            "name": "吉木萨尔县"
          },
          {
            "areaCode": "652328",
            "province": "新疆维吾尔自治区",
            "city": "昌吉回族自治州",
            "name": "木垒哈萨克自治县"
          }
        ],
        "name": "昌吉回族自治州",
        "base": "cjhz"
      },
      {
        "areaCode": "6527",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "652701",
            "province": "新疆维吾尔自治区",
            "city": "博尔塔拉蒙古自治州",
            "name": "博乐市"
          },
          {
            "areaCode": "652702",
            "province": "新疆维吾尔自治区",
            "city": "博尔塔拉蒙古自治州",
            "name": "阿拉山口市"
          },
          {
            "areaCode": "652722",
            "province": "新疆维吾尔自治区",
            "city": "博尔塔拉蒙古自治州",
            "name": "精河县"
          },
          {
            "areaCode": "652723",
            "province": "新疆维吾尔自治区",
            "city": "博尔塔拉蒙古自治州",
            "name": "温泉县"
          }
        ],
        "name": "博尔塔拉蒙古自治州",
        "base": "betlmg"
      },
      {
        "areaCode": "6528",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "652801",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "库尔勒市"
          },
          {
            "areaCode": "652822",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "轮台县"
          },
          {
            "areaCode": "652823",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "尉犁县"
          },
          {
            "areaCode": "652824",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "若羌县"
          },
          {
            "areaCode": "652825",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "且末县"
          },
          {
            "areaCode": "652826",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "焉耆回族自治县"
          },
          {
            "areaCode": "652827",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "和静县"
          },
          {
            "areaCode": "652828",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "和硕县"
          },
          {
            "areaCode": "652829",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "博湖县"
          },
          {
            "areaCode": "652871",
            "province": "新疆维吾尔自治区",
            "city": "巴音郭楞蒙古自治州",
            "name": "库尔勒经济技术开发区"
          }
        ],
        "name": "巴音郭楞蒙古自治州",
        "base": "byglmg"
      },
      {
        "areaCode": "6529",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "652901",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "阿克苏市"
          },
          {
            "areaCode": "652922",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "温宿县"
          },
          {
            "areaCode": "652923",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "库车县"
          },
          {
            "areaCode": "652924",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "沙雅县"
          },
          {
            "areaCode": "652925",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "新和县"
          },
          {
            "areaCode": "652926",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "拜城县"
          },
          {
            "areaCode": "652927",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "乌什县"
          },
          {
            "areaCode": "652928",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "阿瓦提县"
          },
          {
            "areaCode": "652929",
            "province": "新疆维吾尔自治区",
            "city": "阿克苏地区",
            "name": "柯坪县"
          }
        ],
        "name": "阿克苏地区",
        "base": "aksdq"
      },
      {
        "areaCode": "6530",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "653001",
            "province": "新疆维吾尔自治区",
            "city": "克孜勒苏柯尔克孜自治州",
            "name": "阿图什市"
          },
          {
            "areaCode": "653022",
            "province": "新疆维吾尔自治区",
            "city": "克孜勒苏柯尔克孜自治州",
            "name": "阿克陶县"
          },
          {
            "areaCode": "653023",
            "province": "新疆维吾尔自治区",
            "city": "克孜勒苏柯尔克孜自治州",
            "name": "阿合奇县"
          },
          {
            "areaCode": "653024",
            "province": "新疆维吾尔自治区",
            "city": "克孜勒苏柯尔克孜自治州",
            "name": "乌恰县"
          }
        ],
        "name": "克孜勒苏柯尔克孜自治州",
        "base": "kzlskek"
      },
      {
        "areaCode": "6531",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "653101",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "喀什市"
          },
          {
            "areaCode": "653121",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "疏附县"
          },
          {
            "areaCode": "653122",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "疏勒县"
          },
          {
            "areaCode": "653123",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "英吉沙县"
          },
          {
            "areaCode": "653124",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "泽普县"
          },
          {
            "areaCode": "653125",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "莎车县"
          },
          {
            "areaCode": "653126",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "叶城县"
          },
          {
            "areaCode": "653127",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "麦盖提县"
          },
          {
            "areaCode": "653128",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "岳普湖县"
          },
          {
            "areaCode": "653129",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "伽师县"
          },
          {
            "areaCode": "653130",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "巴楚县"
          },
          {
            "areaCode": "653131",
            "province": "新疆维吾尔自治区",
            "city": "喀什地区",
            "name": "塔什库尔干塔吉克自治县"
          }
        ],
        "name": "喀什地区",
        "base": "ksdq"
      },
      {
        "areaCode": "6532",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "653201",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "和田市"
          },
          {
            "areaCode": "653221",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "和田县"
          },
          {
            "areaCode": "653222",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "墨玉县"
          },
          {
            "areaCode": "653223",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "皮山县"
          },
          {
            "areaCode": "653224",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "洛浦县"
          },
          {
            "areaCode": "653225",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "策勒县"
          },
          {
            "areaCode": "653226",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "于田县"
          },
          {
            "areaCode": "653227",
            "province": "新疆维吾尔自治区",
            "city": "和田地区",
            "name": "民丰县"
          }
        ],
        "name": "和田地区",
        "base": "htdq"
      },
      {
        "areaCode": "6540",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "654002",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "伊宁市"
          },
          {
            "areaCode": "654003",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "奎屯市"
          },
          {
            "areaCode": "654004",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "霍尔果斯市"
          },
          {
            "areaCode": "654021",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "伊宁县"
          },
          {
            "areaCode": "654022",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "察布查尔锡伯自治县"
          },
          {
            "areaCode": "654023",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "霍城县"
          },
          {
            "areaCode": "654024",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "巩留县"
          },
          {
            "areaCode": "654025",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "新源县"
          },
          {
            "areaCode": "654026",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "昭苏县"
          },
          {
            "areaCode": "654027",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "特克斯县"
          },
          {
            "areaCode": "654028",
            "province": "新疆维吾尔自治区",
            "city": "伊犁哈萨克自治州",
            "name": "尼勒克县"
          }
        ],
        "name": "伊犁哈萨克自治州",
        "base": "ylhsk"
      },
      {
        "areaCode": "6542",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "654201",
            "province": "新疆维吾尔自治区",
            "city": "塔城地区",
            "name": "塔城市"
          },
          {
            "areaCode": "654202",
            "province": "新疆维吾尔自治区",
            "city": "塔城地区",
            "name": "乌苏市"
          },
          {
            "areaCode": "654221",
            "province": "新疆维吾尔自治区",
            "city": "塔城地区",
            "name": "额敏县"
          },
          {
            "areaCode": "654223",
            "province": "新疆维吾尔自治区",
            "city": "塔城地区",
            "name": "沙湾县"
          },
          {
            "areaCode": "654224",
            "province": "新疆维吾尔自治区",
            "city": "塔城地区",
            "name": "托里县"
          },
          {
            "areaCode": "654225",
            "province": "新疆维吾尔自治区",
            "city": "塔城地区",
            "name": "裕民县"
          },
          {
            "areaCode": "654226",
            "province": "新疆维吾尔自治区",
            "city": "塔城地区",
            "name": "和布克赛尔蒙古自治县"
          }
        ],
        "name": "塔城地区",
        "base": "tcdq"
      },
      {
        "areaCode": "6543",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "654301",
            "province": "新疆维吾尔自治区",
            "city": "阿勒泰地区",
            "name": "阿勒泰市"
          },
          {
            "areaCode": "654321",
            "province": "新疆维吾尔自治区",
            "city": "阿勒泰地区",
            "name": "布尔津县"
          },
          {
            "areaCode": "654322",
            "province": "新疆维吾尔自治区",
            "city": "阿勒泰地区",
            "name": "富蕴县"
          },
          {
            "areaCode": "654323",
            "province": "新疆维吾尔自治区",
            "city": "阿勒泰地区",
            "name": "福海县"
          },
          {
            "areaCode": "654324",
            "province": "新疆维吾尔自治区",
            "city": "阿勒泰地区",
            "name": "哈巴河县"
          },
          {
            "areaCode": "654325",
            "province": "新疆维吾尔自治区",
            "city": "阿勒泰地区",
            "name": "青河县"
          },
          {
            "areaCode": "654326",
            "province": "新疆维吾尔自治区",
            "city": "阿勒泰地区",
            "name": "吉木乃县"
          }
        ],
        "name": "阿勒泰地区",
        "base": "altdq"
      },
      {
        "areaCode": "6590",
        "province": "新疆维吾尔自治区",
        "district": [
          {
            "areaCode": "659001",
            "province": "新疆维吾尔自治区",
            "city": "自治区直辖县级行政区划",
            "name": "石河子市"
          },
          {
            "areaCode": "659002",
            "province": "新疆维吾尔自治区",
            "city": "自治区直辖县级行政区划",
            "name": "阿拉尔市"
          },
          {
            "areaCode": "659003",
            "province": "新疆维吾尔自治区",
            "city": "自治区直辖县级行政区划",
            "name": "图木舒克市"
          },
          {
            "areaCode": "659004",
            "province": "新疆维吾尔自治区",
            "city": "自治区直辖县级行政区划",
            "name": "五家渠市"
          },
          {
            "areaCode": "659006",
            "province": "新疆维吾尔自治区",
            "city": "自治区直辖县级行政区划",
            "name": "铁门关市"
          }
        ],
        "name": "自治区直辖县级行政区划",
        "base": "xjzx"
      }
    ],
    "name": "新疆维吾尔自治区",
    "base": "xj"
  },
  {
    "areaCode": "54",
    "city": [
      {
        "areaCode": "5401",
        "province": "西藏自治区",
        "district": [
          {
            "areaCode": "540102",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "城关区"
          },
          {
            "areaCode": "540103",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "堆龙德庆区"
          },
          {
            "areaCode": "540121",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "林周县"
          },
          {
            "areaCode": "540122",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "当雄县"
          },
          {
            "areaCode": "540123",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "尼木县"
          },
          {
            "areaCode": "540124",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "曲水县"
          },
          {
            "areaCode": "540127",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "墨竹工卡县"
          },
          {
            "areaCode": "540171",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "格尔木藏青工业园区"
          },
          {
            "areaCode": "540172",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "拉萨经济技术开发区"
          },
          {
            "areaCode": "540173",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "西藏文化旅游创意园区"
          },
          {
            "areaCode": "540174",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "达孜工业园区"
          },
          {
            "areaCode": "540104",
            "province": "西藏自治区",
            "city": "拉萨市",
            "name": "达孜区"
          }
        ],
        "name": "拉萨市",
        "base": "lasa"
      },
      {
        "areaCode": "5402",
        "province": "西藏自治区",
        "district": [
          {
            "areaCode": "540202",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "桑珠孜区"
          },
          {
            "areaCode": "540221",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "南木林县"
          },
          {
            "areaCode": "540222",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "江孜县"
          },
          {
            "areaCode": "540223",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "定日县"
          },
          {
            "areaCode": "540224",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "萨迦县"
          },
          {
            "areaCode": "540225",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "拉孜县"
          },
          {
            "areaCode": "540226",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "昂仁县"
          },
          {
            "areaCode": "540227",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "谢通门县"
          },
          {
            "areaCode": "540228",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "白朗县"
          },
          {
            "areaCode": "540229",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "仁布县"
          },
          {
            "areaCode": "540230",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "康马县"
          },
          {
            "areaCode": "540231",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "定结县"
          },
          {
            "areaCode": "540232",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "仲巴县"
          },
          {
            "areaCode": "540233",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "亚东县"
          },
          {
            "areaCode": "540234",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "吉隆县"
          },
          {
            "areaCode": "540235",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "聂拉木县"
          },
          {
            "areaCode": "540236",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "萨嘎县"
          },
          {
            "areaCode": "540237",
            "province": "西藏自治区",
            "city": "日喀则市",
            "name": "岗巴县"
          }
        ],
        "name": "日喀则市",
        "base": "rkz"
      },
      {
        "areaCode": "5403",
        "province": "西藏自治区",
        "district": [
          {
            "areaCode": "540302",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "卡若区"
          },
          {
            "areaCode": "540321",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "江达县"
          },
          {
            "areaCode": "540322",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "贡觉县"
          },
          {
            "areaCode": "540323",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "类乌齐县"
          },
          {
            "areaCode": "540324",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "丁青县"
          },
          {
            "areaCode": "540325",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "察雅县"
          },
          {
            "areaCode": "540326",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "八宿县"
          },
          {
            "areaCode": "540327",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "左贡县"
          },
          {
            "areaCode": "540328",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "芒康县"
          },
          {
            "areaCode": "540329",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "洛隆县"
          },
          {
            "areaCode": "540330",
            "province": "西藏自治区",
            "city": "昌都市",
            "name": "边坝县"
          }
        ],
        "name": "昌都市",
        "base": "cddq"
      },
      {
        "areaCode": "5404",
        "province": "西藏自治区",
        "district": [
          {
            "areaCode": "540402",
            "province": "西藏自治区",
            "city": "林芝市",
            "name": "巴宜区"
          },
          {
            "areaCode": "540421",
            "province": "西藏自治区",
            "city": "林芝市",
            "name": "工布江达县"
          },
          {
            "areaCode": "540422",
            "province": "西藏自治区",
            "city": "林芝市",
            "name": "米林县"
          },
          {
            "areaCode": "540423",
            "province": "西藏自治区",
            "city": "林芝市",
            "name": "墨脱县"
          },
          {
            "areaCode": "540424",
            "province": "西藏自治区",
            "city": "林芝市",
            "name": "波密县"
          },
          {
            "areaCode": "540425",
            "province": "西藏自治区",
            "city": "林芝市",
            "name": "察隅县"
          },
          {
            "areaCode": "540426",
            "province": "西藏自治区",
            "city": "林芝市",
            "name": "朗县"
          }
        ],
        "name": "林芝市",
        "base": "lzdq"
      },
      {
        "areaCode": "5405",
        "province": "西藏自治区",
        "district": [
          {
            "areaCode": "540502",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "乃东区"
          },
          {
            "areaCode": "540521",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "扎囊县"
          },
          {
            "areaCode": "540522",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "贡嘎县"
          },
          {
            "areaCode": "540523",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "桑日县"
          },
          {
            "areaCode": "540524",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "琼结县"
          },
          {
            "areaCode": "540525",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "曲松县"
          },
          {
            "areaCode": "540526",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "措美县"
          },
          {
            "areaCode": "540527",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "洛扎县"
          },
          {
            "areaCode": "540528",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "加查县"
          },
          {
            "areaCode": "540529",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "隆子县"
          },
          {
            "areaCode": "540530",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "错那县"
          },
          {
            "areaCode": "540531",
            "province": "西藏自治区",
            "city": "山南市",
            "name": "浪卡子县"
          }
        ],
        "name": "山南市",
        "base": "sndq"
      },
      {
        "areaCode": "5425",
        "province": "西藏自治区",
        "district": [
          {
            "areaCode": "542521",
            "province": "西藏自治区",
            "city": "阿里地区",
            "name": "普兰县"
          },
          {
            "areaCode": "542522",
            "province": "西藏自治区",
            "city": "阿里地区",
            "name": "札达县"
          },
          {
            "areaCode": "542523",
            "province": "西藏自治区",
            "city": "阿里地区",
            "name": "噶尔县"
          },
          {
            "areaCode": "542524",
            "province": "西藏自治区",
            "city": "阿里地区",
            "name": "日土县"
          },
          {
            "areaCode": "542525",
            "province": "西藏自治区",
            "city": "阿里地区",
            "name": "革吉县"
          },
          {
            "areaCode": "542526",
            "province": "西藏自治区",
            "city": "阿里地区",
            "name": "改则县"
          },
          {
            "areaCode": "542527",
            "province": "西藏自治区",
            "city": "阿里地区",
            "name": "措勤县"
          }
        ],
        "name": "阿里地区",
        "base": "aldq"
      },
      {
        "areaCode": "5406",
        "province": "西藏自治区",
        "district": [
          {
            "areaCode": "540624",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "安多县"
          },
          {
            "areaCode": "540621",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "嘉黎县"
          },
          {
            "areaCode": "540623",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "聂荣县"
          },
          {
            "areaCode": "540622",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "比如县"
          },
          {
            "areaCode": "540626",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "索县"
          },
          {
            "areaCode": "540625",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "申扎县"
          },
          {
            "areaCode": "540627",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "班戈县"
          },
          {
            "areaCode": "540629",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "尼玛县"
          },
          {
            "areaCode": "540628",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "巴青县"
          },
          {
            "areaCode": "540602",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "色尼区"
          },
          {
            "areaCode": "540630",
            "province": "西藏自治区",
            "city": "那曲市",
            "name": "双湖县"
          }
        ],
        "name": "那曲市",
        "base": "nqdq"
      }
    ],
    "name": "西藏自治区",
    "base": "xz"
  },
  {
    "areaCode": "81",
    "name": "香港特别行政区",
    "base": "hk"
  },
  {
    "areaCode": "82",
    "name": "澳门特别行政区",
    "base": "mo"
  },
  {
    "areaCode": "71",
    "name": "台湾省",
    "base": "tw"
  }
]

getAren(areaCode)