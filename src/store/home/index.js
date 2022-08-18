import { getRequest } from '../../service'

export const home = {
  namespaced: true,
  state() {
    return {
      keyboard: {
        bannerHeight: '500px',
        bannerList: [
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/1.webp',
            title: '白天和黑夜,LESS IS BETTER'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/2.webp',
            title: '2.0 ADD & GMK Olive 少即是多'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/3.webp',
            title: 'GMK Masterpiece 匠作'
          }
        ],
        avatar: {
          src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220425172320.png',
          title: '机械键盘'
        }
      },
      beautify: {
        bannerHeight: '700px',
        bannerList: [
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424003348.png',
            title: 'bib-mac 来自未来!'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424003403.png',
            title: 'sangonomiya-kokomi-vs 一双可以包容世界的眼睛'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424003420.png',
            title: 'dragoon-x-vs white 峰峦叠嶂'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424003425.png',
            title: 'dragoon-x-vs black 感受豪迈'
          }
        ],
        avatar: {
          src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220425172320.png',
          title: '机械键盘'
        }
      },
      programme: {
        bannerHeight: '400px',
        bannerList: [
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424005127.png',
            title: 'this指向 学好this,学好JS!'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424005153.png',
            title: '柯里化函数,拒绝回调地狱!'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424005231.png',
            title: '学会回收 让项目更"轻量"!'
          }
        ],
        avatar: {
          src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220425172320.png',
          title: '机械键盘'
        }
      },
      game: {
        bannerHeight: '500px',
        bannerList: [
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424005730.png',
            title: '生化危机2重制版 里昂·S·肯尼迪 坚定迈向警察局'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424005934.png',
            title: '生化危机3重制版 吉尔与肯多'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424010036.png',
            title: '泰拉瑞亚·空岛'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424010303.png',
            title: '枪弹辩驳 一款丧心病狂的推理游戏'
          }
        ],
        avatar: {
          src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220425172320.png',
          title: '机械键盘'
        }
      },
      animation: {
        bannerHeight: '500px',
        bannerList: [
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424010523.png',
            title: '进击的巨人 艾伦发动地鸣的壮观景象'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424010547.png',
            title: '进击的巨人 哥哥与弟弟'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424010631.png',
            title: '少女终末旅行 原来在地狱般的环境下也能产生治愈的情绪'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424010659.png',
            title: '只有我不存在的城市 你能幸福真的太好了,加代'
          }
        ],
        avatar: {
          src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220425172320.png',
          title: '机械键盘'
        }
      },
      maid: {
        bannerHeight: '600px',
        bannerList: [
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424011137.png',
            title: '有时我希望一切都保持不变'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424011119.png',
            title: '蕾咪,芙兰: 你也想进入红魔馆吗?'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424011527.png',
            title: 'miku的衣服真的是越来越华丽呢'
          }
        ],
        avatar: {
          src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220425172320.png',
          title: '机械键盘'
        }
      },
      athletics: {
        bannerHeight: '600px',
        bannerList: [
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424011819.png',
            title: '英雄联盟 2022春季总决赛 RNG vs TES'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424011935.png',
            title: '红色警戒2 不灭的王朝'
          },
          {
            url: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220424012134.png',
            title: 'cs go 2022春季赛 NaVi vs NIP'
          }
        ],
        avatar: {
          src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/20220425172320.png',
          title: '机械键盘'
        }
      }
    }
  },
  mutations: {
    setKeyboardData(state, payload) {
      state.keyboard = payload
    },
    setBeautifyData(state, payload) {
      state.beautify = payload
    },
    setProgrammeData(state, payload) {
      state.programme = payload
    },
    setGameData(state, payload) {
      state.game = payload
    },
    setAnimationData(state, payload) {
      state.animation = payload
    },
    setMaidData(state, payload) {
      state.maid = payload
    },
    setAthleticsData(state, payload) {
      state.athletics = payload
    }
  },
  actions: {
    async getData({ dispatch }, payload) {
      const { type } = payload
      const data = await getRequest(`home/${type}`)

      dispatch(`get${type[0].toUpperCase() + type.slice(1)}Data`, data)
    },
    getKeyboardData({ commit }) {
      commit('setKeyboardData', data)
    },
    getBeautifyData({ commit }) {
      commit('getBeautifyData', data)
    },
    getProgrammeData({ commit }) {
      commit('getProgrammeData', data)
    },
    getGameData({ commit }) {
      commit('getGameData', data)
    },
    getAnimationData({ commit }) {
      commit('getAnimationData', data)
    },
    getMaidData({ commit }) {
      commit('getMaidData', data)
    },
    getAthleticsData({ commit }) {
      commit('getAthleticsData', data)
    }
  }
}
