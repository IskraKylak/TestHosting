<template>
  <div class="table-container">
    <CTable v-if="MYTARIFS.length" :content="MYTARIFS" :typePage="'MyTarifs'" @openModal="openModal" />
    <cModal  @cahngeTarif="cahngeTarif" @error="this.$message('Процедура разрешена лишь для тарифов с одинаĸовым размером дисĸов')"/>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, inject } from 'vue'
import cModal from '@/components/cModal'
import CTable from '@/components/CTable'


export default {
  name: 'MyTarifs',
    components: {
      cModal,
      CTable
    },
    
  setup() {
    const store = useStore()
    const message = inject('$message')
    const MYTARIFS = computed(() => store.getters.MYTARIFS)
    const SELECTED = computed(() => store.getters.SELECTED)

    const cahngeTarif = (data) => {
      store.dispatch('CHANGE_MYTARIFS', data)
      store.dispatch('setModalActive', false)
      message('Тариф был изменен!')
    }

    const openModal = (data) => {
      store.dispatch('SET_SELECTED', data)
      store.dispatch('setModalActive', true)
    }

    return {
      MYTARIFS,
      SELECTED,
      cahngeTarif,
      openModal,
    }
  }
  // methods: {
  //   cahngeTarif(data) {
  //       this.CHANGE_MYTARIFS(data)
  //       this.setModalActive(false)
  //       this.$message('Тариф был изменен!')
  //   },
  //   ...mapActions([
  //       'setModalActive',
  //       'SET_SELECTED',
  //       'ADD_MYTARIFS',
  //       'CHANGE_MYTARIFS'
  //   ]),
  //   openModal (data) {
  //     this.SET_SELECTED(data)
  //     this.setModalActive(true)
  //   },
  // },
  // computed: {
  //     ...mapGetters([
  //         'MYTARIFS',
  //         'SELECTED'
  //     ]),
  // }
};
</script>
<style>
.table-container {
  margin-top: 20px;
}
</style>