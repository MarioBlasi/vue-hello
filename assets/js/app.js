const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      medium: "100px",
      image:
        "https://img1.wallspic.com/crops/1/3/8/3/6/163831/163831-cartoon-grogu-yoda-visual_arts-art-3300x4125.jpg",
    };
  },
}).mount("#app");
