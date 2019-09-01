<!-- Creating the named slots for Movies page headers -->
<template>
<div>
<!-- Adding defalut content for named slots -->
  <slot name="header">
    <h3 class="display-3" slot="header">find your next favorite movie!</h3>
  </slot>
  <slot name="subHeader">
    <h5 class="display-5" slot="subHeader">There are some movies we all know... with some stars we all love...</h5>
  </slot>
</div>
</template>

<script>
export default {
  name: 'SlotsHeader'
}
</script>
