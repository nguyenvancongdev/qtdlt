const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	  devServer: {
    allowedHosts: "all",
  },
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
module.exports ={
  // ,
  // configureWebpack : {
  //   devtool: 'source-map'
  // }
  publicPath:'/',

  pluginOptions: {
    vuetify: {}
  }
}
