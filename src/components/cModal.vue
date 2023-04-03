<template>
  <div>
    <div class="modal" :class="{'is-active': ACTIVEMODAL}">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" aria-label="close" @click="closeModal"></button>
        </header>
        <section class="modal-card-body">
            <CTable v-if="TARIFS.length" :content="TARIFS" :typePage="'Modal'" @cahngeTarif="cahngeTarif"  @error="this.$emit('error')"/>
        </section>

      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CTable from '@/components/CTable'
export default {
    components: {
        CTable
    },
    setup(props, { emit }) {
      const title = 'Тарифы'
      const store = useStore()
      const ACTIVEMODAL = computed(() => store.getters.ACTIVEMODAL)
      const TARIFS = computed(() => store.getters.TARIFS)

      const cahngeTarif = (data) => {
        emit('cahngeTarif', data)
      }

      const showModal = () => {
        store.dispatch('setModalActive', true)
      }

      const closeModal = () => {
        store.dispatch('setModalActive', false)
      }

      return {
        title,
        ACTIVEMODAL,
        TARIFS,
        cahngeTarif,
        showModal,
        closeModal
      }
    }
};
</script>

<style>
.modal-card {
  width: 90vw;
}
</style>
