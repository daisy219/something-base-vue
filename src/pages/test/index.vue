
<template>
  <el-drawer size='300px' :show-close="false" :visible.sync="drawer" :destroy-on-close="true">
    <div class="number_box">
      <div class="fixation">
        <div :class="['fiexWrap', {'position': position}]">
          <div class="box_top">
            <h5>{{(baseData[0] || {} ).companyName || '小米通讯技术有限公司'}} </h5>
            <span>{{(baseData[0] || {} ).tag || '在业'}}</span>
          </div>
          <div class="box_tabs">
            <span @click="selectTabHead(index)" :class="{'current': showIndex === index}" v-for="(item,index) in tabList" :key="index">{{item.title}}({{item.list.length}})</span>
          </div>
        </div>
      </div>
      <div class="box_content">
        <div class="box_content_top" v-if="nowShowPhoneList.length">
          <el-checkbox v-model="checkedAll">全选</el-checkbox>
          <el-button size="mini" class="fr">领取线索</el-button>
        </div>
        <div v-else>
          暂无联系方式
        </div>

        <ul class="box_content_list ">
          <li v-for="(item,index) in nowShowPhoneList" :key="index" :class="{'active': nowShowPhoneList[index].active}" @click="selectThis(item)">
            <p>{{item.type | filterType}}：<i>{{item.contactInfo}}</i></p>
            <p>姓名：<i>{{item.contactName}}</i></p>
            <p>来源：<a class="underline" v-for="(href,index) in item.source" :key="index" :href="item.sourceHref[index]" target="about" >{{href}}</a></p>
            <p class="clearfix mt-10">
              <span class="tags" v-if="item.suspected">疑似代理记账</span>
              <!-- <span class="underline fr" @click.stop="" v-popover="'popover'+index" slot="reference">号码反馈</span> -->
              <el-popover v-model="item.visible" placement="bottom-end" width="100" trigger="click">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox v-for="item in numberFeedBack" :key="item" :label="item"></el-checkbox>
                </el-checkbox-group>
                <div class="sureFeedBack" @click="sureFeedBack(item)">确认</div>
                <span class="underline fr" @click.stop="" slot="reference">号码反馈</span>
              </el-popover>
            </p>
            <span class="good" v-if="item.isRecommend"><img src="../../assets/good.svg" alt="" srcset="">推荐</span>
            <span class="checked">
              <i class="el-icon-check"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </el-drawer>
</template>


<script>
// import smallDrawer from '@/components/smallDrawer'
export default {
  components: {
    // smallDrawer
  },
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      tabList: [
        { title: '全部', list: [] },
        { title: '手机', list: [] },
        { title: '固话', list: [] },
        { title: '邮箱', list: [] },
      ],
      nowShowPhoneList: [],
      showIndex: 0,

      // 反馈
      numberFeedBack: ['正常号码', '空号', '停机', '不在服务区', '拒接', '错号', '关机'],
      checkList: [],
      // 抽屉浮动
      position: false
    }
  },
  props: {
    baseData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    checkedAll: {
      get() {
        let isAll = true
        this.nowShowPhoneList.forEach(element => {
          if (!element.active) isAll = false
        })
        if (this.nowShowPhoneList.length === 0) isAll = false
        return isAll
      },
      set(val) {
        if (val) {
          this.nowShowPhoneList.forEach(element => {
            this.$set(element, 'active', true)
          })
        } else {
          this.nowShowPhoneList.forEach(element => {
            this.$set(element, 'active', false)
          })

        }
        return val
      }
    }
  },
  watch: {
    baseData: {
      // immediate: true,
      handler(val) {

        console.log('jt  baseDate')
        this.tabList[0].list = this.baseData.filter(e => e.type)
        this.tabList[1].list = this.baseData.filter(e => e.type === 1)
        this.tabList[2].list = this.baseData.filter(e => e.type === 2)
        this.tabList[3].list = this.baseData.filter(e => e.type === 3)
        this.nowShowPhoneList = this.tabList[0].list
      }
    },
    drawer(val) {
      if (!val) {
        this.tabList.forEach(e => {
          e.list = []
        })
      }
    },
    nowShowPhoneList:{
      deep: true,
      handler(val){
        console.log('监听 nowlist', this.nowShowPhoneList)
        console.log('监听 nowlist', val)
      }
    }
  },
  filters: {
    filterType(val) {
      let str
      switch (val) {
        case 1:
          str = '手机'
          break
        case 2:
          str = '固话'
          break
        case 3:
          str = '邮箱'
          break
      }
      return str
    }
  },
  mounted() {
    // console.log(this.$el.getElementsByClassName('el-drawer__body')[0])
    this.$el.addEventListener('scroll', this.listenScroll)
    this.$once('hook:beforeDestroy', () => {
      this.$el.removeEventListener('scroll', this.listenScroll)
    })
  },
  methods: {
    listenScroll() {
      if (this.$el.scrollTop > 92) {
        this.position = true
      }
      if (this.$el.scrollTop < 92) {
        this.position = false
      }

    },
    drawerTaggle() {
      this.drawer = !this.drawer
    },
    selectThis(item) {
      if (item.active) {
        item.active = !item.active
      } else {
        this.$set(item, 'active', true)
      }
    },
    selectTabHead(index) {
      this.showIndex = index
      this.checkedAll = false
      // debugger
      this.nowShowPhoneList = this.tabList[index].list

      console.log(this.nowShowPhoneList)
      console.log(this)
    },
    showPop(item) {
      if (item.visible) {
        item.visible = !item.visible
      } else {
        this.$set(item, 'visible', true)
      }
    },
    sureFeedBack(item) {
      if (this.checkList.length) {
        this.showPop(item)
      }else {
        this.$message.warning('至少选择一项')
      }
    },
    lookNumber() {
      //       description:
      // 联系方式表

      // companyName	string
      // 企业名

      // contactInfo	string
      // 联系方式

      // contactName	string
      // 联系人姓名

      // createTime	string($date-time)
      // 创建时间

      // feedback	string
      // 号码反馈结果,多个逗号分隔

      // feedbackTime	string($date-time)
      // 号码反馈时间

      // id	integer($int32)
      // 主键ID

      // isRecommend	boolean
      // 是否推荐 1-true 0-false

      // site	string
      // 采集来源

      // source	string
      // 来源,多个逗号分隔

      // sourceHref	string
      // 来源链接,多个逗号分隔

      // tag	string
      // 标签,多个逗号分隔

      // title	string
      // 标题

      // type	integer($int32)
      // 1-手机 2-固话 3-邮箱

      // updateTime	string($date-time)
      // 修改时间
    }
  }
}
</script>

<style lang='scss' scoped>
.number_box {
  width: 300px;
  background: #fff;
  // position: absolute;
  // z-index: 25;
  .fixation {
    height: 92px;
    .fiexWrap {
      width: 300px;
      background-color: #fff;
      .box_top {
        padding: 0 10px;
        padding-right: 20px;
        line-height: 50px;
        border-bottom: 1px solid #666;
        display: flex;
        justify-content: space-between;
        > h5 {
          font-weight: 400;
          font-size: 14px;
        }
        > span {
          font-size: 12px;
          padding: 2px 5px;
          background-color: aliceblue;
          color: steelblue;
          display: block;
          height: 20px;
          line-height: 20px;
          border-radius: 4px;
          margin-top: 15px;
        }
      }
      .box_tabs {
        border-bottom: 1px solid #f2f2f2;
        text-align: center;
        padding-right: 10px;

        > span {
          width: calc(25%);
          display: inline-block;
          line-height: 40px;
          cursor: pointer;
          &:hover {
            color: #f59a23;
          }
        }
        .current {
          color: #f59a23;
        }
      }
    }
    .position {
      position: fixed;
      top: 30%;
      z-index: 11111;
      box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.1);
    }
  }
  .box_content {
    padding: 10px;
    padding-top: 0px;
    .box_content_top {
      margin: 15px 0px;
      overflow: hidden;
      padding-right: 10px;
    }
    .box_content_list {
      padding-right: 10px;
    }

    .box_content_list li {
      border: 1px solid #ddd;
      padding: 10px 10px 10px 15px;
      margin-bottom: 15px;
      position: relative;
      cursor: pointer;
      p {
        font-size: 12px;
        >a {
          margin-right: 10px;
        }
        i {
          font-weight: 500;
          font-size: 15px;
          color: #333;
        }
        .tags {
          border-radius: 4px;
          background-color: skyblue;
          padding: 2px 5px;
          color: #fff;
          font-size: 12px;
        }
      }
      .checked {
        display: none;
      }
      .good {
        background-color: #f59a23;
        border-radius: 0 0 4px 4px;
        font-size: 12px;
        color: #fff;
        padding: 1px 5px;
        position: absolute;
        top: 0;
        right: 10px;

        > img {
          width: 10px;
          vertical-align: unset;
        }
      }
    }
    .box_content_list .active {
      border: 1px solid rgba(80, 122, 251, 1);
      .checked {
        display: block;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 0;
        height: 0;
        border-top: 20px solid rgba(80, 122, 251, 1);
        border-right: 30px solid transparent;
        color: #fff;
        > i {
          position: absolute;
          top: -20px;
          left: 1px;
        }
      }
    }

    .box_content_list li:hover {
      border: 1px solid rgba(80, 122, 251, 1);
    }
  }
  .underline {
    text-decoration: underline;
    color: #f59a23 !important;
    font-size: 12px;
  }
}

.sureFeedBack {
  background-color: royalblue;
  color: #fff;
  cursor: pointer;
  width: 40px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  border-radius: 4px;
  display: inline-block;
  /* margin-left: 20px; */
  position: relative;
  left: 50%;
  top: 5px;
  transform: translateX(-50%);
  &:hover {
    background-color: #4169e1cf;
  }
}
/deep/ .el-drawer__header {
  margin: 0;
  padding: 0;
}
/deep/ .el-drawer__body {
  overflow-y: auto;
  overflow-x: hidden;
}

/*滚动条宽 长,滚动条整体部分，其中的属性有width,height,background,border等。*/

/deep/ .el-drawer__body::-webkit-scrollbar {
  width: 7px;
}

/*滚动条的滑轨背景颜色,可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。*/

/deep/ .el-drawer__body::-webkit-scrollbar-track {
  background-color: transparent;

  // -webkit-box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);

  border-radius: 5px;
}

/* 滑块颜色 */

/deep/ .el-drawer__body::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.2);

  border-radius: 5px;
}

/*滚动条两端的按钮。可以用display:none让其不显示，也可以添加背景图片，颜色改变显示效果。*/

/deep/ .el-drawer__body::-webkit-scrollbar-button {
  background-color: #eee;

  display: none;
}

/* 横向滚动条和纵向滚动条相交处尖角的颜色 */

/deep/ .el-drawer__body::-webkit-scrollbar-corner {
  background-color: black;
}
</style>
