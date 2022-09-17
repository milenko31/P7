<script>
export default {
  head() {
    return {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s - GroupoMania',
    }
  },
}
</script>

<template>

  <div>
    <LayoutNavbar />
    <main>
      <slot />
    </main>
  </div>
  <LayoutFooter />
</template>
