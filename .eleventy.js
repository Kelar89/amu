// File: .eleventy.js (INI KODE YANG BENAR)

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Salin folder-folder yang dibutuhkan ke website final
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  // Kita hapus "admin" untuk sementara sampai situs utama benar
  // eleventyConfig.addPassthroughCopy("admin"); 

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