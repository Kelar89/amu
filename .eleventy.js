# Nama Workflow
name: Deploy Eleventy to GitHub Pages

# Kapan workflow ini akan berjalan
on:
  push:
    branches: ["main"] # Setiap kali ada push ke branch main
  workflow_dispatch:   # Memungkinkan Anda menjalankan manual dari tab Actions

# Izin yang dibutuhkan agar Actions bisa men-deploy ke Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Pekerjaan yang akan dilakukan
jobs:
  # Pekerjaan pertama: membangun situs
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "18" # Menggunakan Node.js versi 18
          cache: "npm"
      - name: Install dependencies
        run: npm install
      - name: Build with Eleventy
        run: npx @11ty/eleventy
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site

  # Pekerjaan kedua: men-deploy situs yang sudah dibangun
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build # Menjalankan pekerjaan ini HANYA JIKA 'build' berhasil
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4