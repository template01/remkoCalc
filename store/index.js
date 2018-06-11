import axios from 'axios'
import _ from 'lodash'
import Vue from 'vue'
import productObject from '~/productObject.json'
export const state = () => ({
  appinitated: true,
  apiRoot: 'https://jsonplaceholder.typicode.com',
  posts: [],
  previewData: [],
  selectedMaterials:[],
  productObject: productObject
})

//
// function checkReadmore(){
//   if (window.location.hash === '#read') {
//     return true;
//   }else{
//     return false;
//   }
// }
// this.$store.commit('SET_READMORE', true)


export const getters = {

  GET_TOTALPRICE(state) {
    return _.map(state.productObject, 'selected.price').reduce(function(acc, val) { return acc + val; });
  },

  GET_APP_INITIATED(state) {
    return state.appinitated
  },

  GET_POSTS(state) {
    return state.posts
  },

  GET_PREVIEWDATA(state) {
    return state.previewData
  },
}

export const mutations = {


  SET_SELECTED(state, selected) {
    const matchedObject = _.find(state.productObject, {"name":selected[0]});
    Vue.set(matchedObject, 'selected', selected[1])
    // Vue.set(state.productObject[0], 'selected', selected)
 // = posts;
  // Vue.set(obj, 'newProp', 123),
  },

  SET_PREVIEWDATA(state, previewData) {
    state.previewData = previewData;
  },

  SET_POSTS(state, posts) {
    state.posts = posts;
  },

  SET_APPINITIATED(state, toggle) {
    state.appinitated = toggle;
  }

}


export const actions = {
  // LOAD INITIAL DATA (SSR)
  async nuxtServerInit({
    commit,
    state
  }, {
    req
  }) {

    const postsRes = await axios.get(state.apiRoot + '/posts')
    state.posts = postsRes.data
  },

  // LOAD INITIAL DATA (SPA)
  // async nuxtClientInit({
  //   commit,
  //   state
  // }, {
  //   req
  // }) {
  //
  //   const postsRes = await axios.get(state.apiRoot + '/posts')
  //   state.posts = postsRes.data
  //
  // }



}
