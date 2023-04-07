const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
			@import "styles/_custom-variables.scss";
			@import "styles/_vars.scss";`
  }
}
