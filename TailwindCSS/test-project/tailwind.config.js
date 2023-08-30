module.exports = {
  // 템플릿 파일의 경로 설정 👀
  purge:['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      gfont : ["gfont"]
    },
  },
  plugins: [],
}
