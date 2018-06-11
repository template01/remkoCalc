<template>
<div>

  <div class="mt-20 is-size-3">
    <span class="mr-20" v-html="'Select material for: '+'<b>'+data.name+'</b>'"></span>
    <select class="is-size-3" v-model="selectedMaterial">
      <option disabled value="">Please select one</option>

  <option v-for="material in data.material" :value="material" v-html="material.type +' EUR '+ material.price"></option>

</select>
  </div>
  <div class="modelWrapper p-80">
    <div class="mask" :style="{'background-color':selectedMaterial.typefill, 'mask-image': 'url(' + data.img + ')','-webkit-mask-image': 'url(' + data.img + ')' }">

    </div>
    <!-- <img :src="data.img" /> -->
  </div>
</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  props: ["data", "index"],
  data: function() {
    return {
      selectedMaterial: "",
      genericData: 'generic component text'
    }
  },
  methods: {},
  computed: {
    ...mapGetters({
      appinitated: "GET_APP_INITIATED",
    }),
  },
  watch: {
    selectedMaterial: function() {
      this.$store.commit('SET_SELECTED', [this.data.name, this.selectedMaterial])
    }
  }
}
</script>
<style scoped lang="scss">
.modelWrapper {
    position: fixed;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    .mask {
        width: 100%;
        height: 100%;
        transition: background-color 0.4s;
        background-color: lightgrey;
        background-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-repeat: no-repeat;
        mask-size: contain;
        -webkit-mask-size: contain;
        mask-position: center center;
        -webkit-mask-position: center center;
        // -webkit-mask-image: url("https://mdn.mozillademos.org/files/12676/star.svg");
        // mask-image: url("https://mdn.mozillademos.org/files/12676/star.svg");
    }
    img {
        margin: 0 auto;
        display: block;
        height: 100%;
        // background: black;
    }
}

</style>
