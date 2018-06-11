<template>
<div>

  <div class="modelWrapper p-80">
    <div class="mask" :style="{'mask-image': 'url(' + 'model_full.svg' + ')','-webkit-mask-image': 'url(' + 'model_full.svg' + ')' }">

    </div>
  </div>

</div>
</template>
<script>
import {
  mapGetters
} from 'vuex'


export default {
  // props: ["data", "index"],
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
        background-color: grey;
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

}

</style>
