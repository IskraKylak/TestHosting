<template>
    <table class="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-centered" v-for="(item, index) in headers" :key="index">
            {{ item.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in content" :key="item.id">
            <td><span class="name">{{ item.name }}</span></td>
            <td><span class="cpu">{{ item.cpu }}</span> CPU Units</td>
            <td><span class="ram">{{ item.ram }}</span>MB</td>
            <td><span class="size">{{ item.size }}</span>GB SSD</td>
            <td v-if="typePage === 'Home'">
                <button class="button is-primary add-tarif-button" @click="this.$emit('addTarif', item)">
                  <span class="icon is-small">
                      <i class="fas fa-plus"></i>
                  </span>
                  <span>Add</span>
                </button>
            </td>
            <td v-if="typePage === 'MyTarifs'">
                <button class="button is-primary select-tarif-button" @click="openModal(item, index)">
                  <span class="icon is-small">
                      <i class="fas fa-chevron-up"></i>
                      <i class="fas fa-chevron-down"></i>
                  </span>
                  <span>downgrade/upgrade</span>
                </button>
            </td>
            <td v-if="typePage === 'Modal' && SELECTED">
                <button class="button is-primary upgrade-tarif-button" v-if="typeBtn(item) === 'up'" @click="upgrade(item)">
                    <span class="icon is-small">
                        <i class="fas fa-chevron-up"></i>
                    </span>
                    <span>upgrade</span>
                </button>
                <button class="button is-primary" v-if="typeBtn(item) === 'down'" @click="downgrade(item)">
                    <span class="icon is-small">
                        <i class="fas fa-chevron-down"></i>
                    </span>
                    <span>downgrade</span>
                </button>
                <div v-if="typeBtn(item) === 'your'"> Your tarif </div>
            </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'CTable',
    props: ['content', 'typePage'],
    setup(props, { emit }) {
        const store = useStore()

        const headers = ref([
            { text: 'Название' },
            { text: 'CPU' },
            { text: 'RAM' },
            { text: 'Disk Size' }
        ])

        const upgrade = (item) => {
            const obj = {
                idx: store.getters.SELECTED.idx,
                item: item
            }
            emit('cahngeTarif', obj)
        }

        const downgrade = (item) => {
            if (item.size !== store.getters.SELECTED.item.size) {
                emit('error')
            } else {
                upgrade(item)
            }
        }

        const typeBtn = (item) => {
            if (store.getters.SELECTED) {
                if (item.size > store.getters.SELECTED.item.size) {
                    return 'up'
                }
                if (item.size < store.getters.SELECTED.item.size) {
                    return 'down'
                }
                if (item.size === store.getters.SELECTED.item.size) {
                    if (item.id === store.getters.SELECTED.item.id) {
                        return 'your'
                    } else if (item.id > store.getters.SELECTED.item.id) {
                        return 'up'
                    } else {
                        return 'down'
                    }
                }
            }
        }

        const openModal = (item, idx) => {
        const obj = {
            idx: idx,
            item: item
        }
        emit('openModal', obj)
        }

        const SELECTED = computed(() => store.getters.SELECTED)

        return {
            headers,
            upgrade,
            downgrade,
            typeBtn,
            openModal,
            SELECTED
        }
    }
}
</script>

<style lang="scss">
th {
  text-align: center;
}

td {
  vertical-align: middle;
}

@media only screen and (max-width: 1199.5px) {
    td, th {
        font-size: 14px;
    }

    button.button {
        padding-top: 3px;
        padding-bottom: 3px;
        height: auto;

        & .icon:first-child:not(:last-child) {
            margin-left: 0;
        }

        & span:nth-child(1) {
            font-size: 16px;
        }

        & span:nth-child(2) {
            font-size: 0;
        }
    }
}

@media only screen and (max-width: 767.5px) {
    td, th {
        font-size: 10px;
    }

    button.button {
        padding-top: 5px;
        padding-bottom: 5px;
        height: auto;
        padding-left: 5px;
        padding-right: 5px;

        & .icon:first-child:not(:last-child) {
            margin-left: 0;
        }

        & span:nth-child(1) {
            font-size: 14px;
        }

        & span:nth-child(2) {
            font-size: 0;
        }
    }
}
</style>
