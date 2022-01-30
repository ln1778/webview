<template>
  <div class="container max-w-screen-md mx-auto flex flex-col justify-center items-center bg-white pt-5">
    <div class="p-6 mb-3 w-5/6 rounded bg-gray-100 row-auto shadow-md">
      <div class="flex text-sm text-gray-800 bg">
        <span>In the imToken env: </span>
        <span class="text-red-400 pl-4">{{isHwaEnv}}</span>
      </div>
    </div>
    <div class="p-6 mb-3 w-5/6 rounded bg-gray-100 row-auto shadow-md">
      <div class="flex text-sm text-gray-800 bg">
        <span>Current version: {{version}}</span>
        <span class="text-red-400 pl-4"></span>
      </div>
    </div>
    <div class="p-6 w-5/6 rounded bg-white bg-gray-100 row-auto flex justify-center items-center shadow-md">
      <button
        class="pt-2 pb-2 pl-2 pr-2 rounded bg-blue-500 text-white text-sm mr-4"
        @click="setTitle"
      >
        set title
      </button>
      <button
        class="pt-2 pb-2 pl-2 pr-2 rounded bg-blue-500 text-white text-sm mr-4"
        @click="popup"
      >
        popup
      </button>
      <button
        class="pt-2 pb-2 pl-2 pr-2 rounded bg-blue-500 text-white text-sm"
        @click="confirm"
      >
        confirm
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import HWAWebView from '@lnssh/webview'

export default defineComponent({
  name: 'App',

  setup: () => {
    const isHwaEnv = ref<boolean>(false)
    const version = ref<string>('')
    isHwaEnv.value = HWAWebView.isHwaEnv()
    version.value = HWAWebView.getVersion()

    return {
      isHwaEnv,
      version,
    }
  },

  methods: {
    setTitle() {
      const title = Math.random().toString(16).slice(2, 8)
      HWAWebView.apis.navigator.setTitle(title)
    },

    popup() {
      HWAWebView.apis.native.alert('hello')
    },

    async confirm() {
      const result = await HWAWebView.apis.native.confirm({
        title: 'hello',
        cancelText: 'cancel',
        confirmText: 'ok',
        message: 'message',
      })
      alert(`confirm API result: ${result}`)
    },
  },
})
</script>
