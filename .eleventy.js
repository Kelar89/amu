// File: .eleventy.js (Versi Final untuk Custom Domain)

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Salin semua folder yang dibutuhkan ke folder output (_site)
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");

  // Menambahkan filter untuk format tanggal
  eleventyConfig.addFilter("date", (dateObj, format) => {
    const dt = (dateObj === "now") ? DateTime.now() : DateTime.fromJSDate(dateObj, { zone: 'utc' });
    return dt.toFormat(format);
  });

  // Menambahkan filter untuk membuat slug (misal: "Web Design" -> "web-design")
  eleventyConfig.addFilter("slugify", function(str) {
    if (!str) {
        return;
    }
    return str
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-') // Ganti spasi dengan -
        .replace(/[^\w-]+/g, '') // Hapus semua karakter non-kata
        .replace(/--+/g, '-'); // Ganti -- ganda dengan - tunggal
  });

  // Mengembalikan konfigurasi direktori TANPA pathPrefix
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