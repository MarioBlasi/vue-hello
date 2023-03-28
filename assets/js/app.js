const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      image: "./assets/img/Grogu_Wallpaper.webp",
    };
  },
}).mount("#app");
