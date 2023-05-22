const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = config => {
  config.addPlugin(EleventyHtmlBasePlugin, {
    // The base URL: defaults to Path Prefix
    baseHref: config.pathPrefix,

    // But you could use a full URL here too:
    // baseHref: "http://example.com/"

    // Comma separated list of output file extensions to apply
    // our transform to. Use `false` to opt-out of the transform.
    extensions: "html",

    // Rename the filters
    filters: {
      base: "htmlBaseUrl",
      html: "transformWithHtmlBase",
      pathPrefix: "/kovs/",
    },
  });


  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/css/');
  config.addPassthroughCopy('./src/css/*');

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
