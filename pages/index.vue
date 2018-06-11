<template>
<div class="mt-80 mb-80 mr-80 ml-80">
  <productpart :data="part" :index="index" v-for="(part, index) in $store.state.productObject"></productpart>
  <productpartfull></productpartfull>
  <div class="is-size-3 mt-40">
    <span v-if="isNaN(totalprice)"><span class="is-size-3 button is-danger">Please pick a material for each part</span></span>
    <div v-else> <span class="is-size-3 button">Total</span><span class="is-size-3 button is-success">{{totalprice}} EUR</span>
      <br /><span class="mt-20 is-size-3 button is-success">Buy</span></div>
    <!-- <span v-else> <span class="is-size-3 button">Total</span><span class="is-size-3 button is-success">{{totalprice}} EUR</span></span> -->
  </div>
</div>
</template>

<script>
import genericcomp from '~/components/_genericComp.vue'
import productpart from '~/components/productPart.vue'
import productpartfull from '~/components/productPartFull.vue'
import postlistcomp from '~/components/postListComp.vue'

import axios from 'axios'
import {
  mapGetters
} from 'vuex'


export default {
  components: {
    genericcomp,
    productpart,
    productpartfull,
    postlistcomp
  },
  computed: {
    ...mapGetters({
      totalprice: "GET_TOTALPRICE",
    }),
  },
  data: function() {
    return {
      genericData: 'generic component text',
    }
  },


  async asyncData({
    params,
    query,
    error,
    store,
    route,
    redirect
  }) {


    // GET POSTS START
    // if (store.state.posts.length == 0) {
    //   const postsRes = await axios.get(store.state.apiRoot + '/posts')
    //   store.commit('SET_POSTS', postsRes.data)
    // }

    // RETURN DATA DIRECTLY
    // return { title: 'blah blah blah' }


  },


}
</script>

<style>

</style>
