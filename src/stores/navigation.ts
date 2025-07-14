import { defineStore } from "pinia"

export const useNavigationStore = defineStore("navigation", {
  state: () => ({
    drawer: false,
  }),
  getters: {
    isNavOpen: (state) => state.drawer,
  },
  actions: {
    setDrawer(value: boolean) {
      this.drawer = value
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    },
  },
})
