module.exports = ctx => ({
  plugins: [
    require('autoprefixer')({
      remove: false
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    require('postcss-normalize')()
  ]
})
