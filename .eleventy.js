// File: .eleventy.js (Versi Final Lengkap)

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Salin folder img, css, dan js ke folder output (_site)
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("admin");

  // Ini adalah bagian kunci untuk GitHub Pages dengan subfolder
  const pathPrefix = process.env.NODE_ENV === 'production' ? "/amu/" : "/";
  
  // Menambahkan filter 'date'
  eleventyConfig.addFilter("date", (dateObj, format) => {
    const dt = (dateObj === "now") ? DateTime.now() : DateTime.fromJSDate(dateObj, { zone: 'utc' });
    return dt.toFormat(format);
  });

  // ==============================================================
  // ALAT BARU (FILTER) UNTUK MEMBUAT SLUG (misal: "Web Design" -> "web-design")
  // ==============================================================
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
  // ==============================================================

  return {
    pathPrefix: pathPrefix,
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