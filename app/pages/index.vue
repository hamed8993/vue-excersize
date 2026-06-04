<script setup>
const { locales, setLocale } = useI18n();
</script>

<template>
  <div>
    <button v-for="locale in locales" @click="setLocale(locale.code)">
      {{ locale.name }}
    </button>
    <h1>{{ $t("welcome") }}</h1>
  </div>
  <hr />
  <hr />

  index page!!
  <p>{{ $t("welcome") }}</p>
  <div
    class="bg-[url(/app-structure.png)] bg-no-repeat h-200 w-40 border-2 border-amber-500"
  ></div>
  <div class="border-2 border-red-600 rounded-4">
    <h2>
      this image is from <code>public</code> address. is publicly available from
      <code>URL</code>
    </h2>
    <h4>
      addressing is tracing image publicly, its no matter that hosting vue file
      is where: <code>src="/HYUNDAI-SONATA-2.0T-N.png"</code>
    </h4>
    <img class="w-50" src="/HYUNDAI-SONATA-2.0T-N.png" />
  </div>
  <hr />
  <div class="border-2 border-red-600 rounded-4">
    <h2>
      this image is from <code class="text-red-600">assets/image</code> address.
      is not publicly available from URL
    </h2>
    <h4>addressing is tracing image from host vue file:</h4>
    <code class="text-red-600"
      >src="./../assets/images//HYUNDAI-SONATA-2.0T-N.png"</code
    >
    <img class="w-50" src="./../assets/images//HYUNDAI-SONATA-2.0T-N.png" />
  </div>
</template>
