import { createStore } from 'vuex'
interface IRootState {
  name:String,
  age:Number
}

export default createStore<IRootState>({
  state()  { 
    return {
      name:'coderwhy',
      age:18
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

    