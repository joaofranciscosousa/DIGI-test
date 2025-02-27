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
    <span class="fnt-size-22 fnt-weight-700"> {{ title }} </span>
  </div>
  <q-separator color="#D9D9D9" class="q-mt-sm q-mb-md" />
</template>

<script lang="ts">
export interface HeaderBackHandlerProps {
  title: string
  backhandler?: boolean
  backHandlerPath?: object
}

export default {
  name: 'PageTitle',
  props: {
    title: {
      type: String,
      default: 'Título',
    },
    backhandler: {
      type: Boolean,
      default: false,
    },
    backHandlerPath: {
      type: Object,
      default: undefined,
    },
  },
}
</script>

<style></style>
