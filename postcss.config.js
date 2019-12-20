module.exports = ctx => ({
  plugins: [
    require('precss'),
    require('cssnano'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('autoprefixer')({
      remove: false
    }),
    require('postcss-flexbugs-fixes'),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('postcss-normalize')()
  ]
})
