const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname)],
    prependData: `
			@import "assets/styles/sass/abstracts/_variables.scss";`,
  },
};
