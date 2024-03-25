/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // JIT 모드 활성화
  // 'views' 디렉토리 내의 모든 .ejs 파일을 대상으로 합니다.
  content: [
    './views/**/*.ejs', // 'views' 디렉토리 및 그 하위 디렉토리에 있는 모든 .ejs 파일을 대상으로 합니다.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
