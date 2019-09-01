// Mixin for border toggle on images and API results on movies page
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
