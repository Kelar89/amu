// File: .eleventy.js (Versi Final yang Diperbaiki dengan Filter 'limit')

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Salin folder-folder yang dibutuhkan ke website final
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");

  // Menambahkan filter untuk format tanggal
  eleventyConfig.addFilter("date", (dateObj, format) => {
    const dt = (dateObj === "now") ? DateTime.now() : DateTime.fromJSDate(dateObj, { zone: 'utc' });
    return dt.toFormat(format);
  });

  // Menambahkan filter untuk membuat slug
  eleventyConfig.addFilter("slugify", function(str) {
    if (!str) return;
    return str.toString().toLowerCase().trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-');
  });
  
  // ==========================================================
  // FILTER BARU YANG LUPA DITAMBAHKAN (INI SOLUSINYA)
  // ==========================================================
  eleventyConfig.addFilter("limit", function (arr, limit) {
    return arr.slice(0, limit);
  });

  // Mengembalikan konfigurasi direktori untuk custom domain (tanpa pathPrefix)
  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};