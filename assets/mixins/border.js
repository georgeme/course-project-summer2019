// Mixin for border toggle on images for Movies page
export const toggle = {
  data() {
    return {
      isShowing: false
    }
  },

  methods: {
    toggleShow() {
      this.isShowing = !this.isShowing;
    }
  }
}
