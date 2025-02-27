<template>
  <div class="row flex">
    <div v-if="backhandler" class="q-mr-md">
      <q-btn
        class="btn-outline bg-white full-width fnt-size-14 fnt-weight-700"
        no-caps
        :to="backHandlerPath"
        @click="backHandlerPath ? undefined : $router.go(-1)"
      >
        <q-icon name="o_arrow_circle_left" size="18px" class="q-mr-sm" />Voltar
      </q-btn>
    </div>
    <span :class="customTitleClass"> {{ title }} </span>
  </div>
  <q-separator color="#D9D9D9" class="q-mt-sm q-mb-md" />
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: 'Título',
    },
    customTitleClass: {
      type: String,
      default: 'fnt-size-22 fnt-weight-700',
    },
    backhandler: {
      type: Boolean,
      default: false,
    },
    backHandlerPath: {
      type: [Object, String] as PropType<string | object>,
      default: undefined,
    },
  },
})
</script>

<style lang="scss" scoped></style>
