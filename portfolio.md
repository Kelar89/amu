---
layout: base.njk
title: Karya Saya
---
<div class="container py-5">
<div class="text-center mb-5">
<h2 class="text-neon d-block mb-2">Bukan Sekadar Portofolio.</h2>
<p class="h3">Ini adalah galeri bukti. Setiap karya adalah cerita tentang<br>masalah yang dipecahkan dan kesuksesan yang diraih bersama klien.</p>
</div>
<div class="row justify-content-center mb-4">
<div class="col-auto">
<div class="btn-group" role="group" id="portfolio-filter">
<button type="button" class="btn btn-neon-outline active" data-filter="*">Semua</button>
<button type="button" class="btn btn-neon-outline" data-filter="web-design">Web Design</button>
<button type="button" class="btn btn-neon-outline" data-filter="ui-ux-design">UI/UX Design</button>
<button type="button" class="btn btn-neon-outline" data-filter="mobile-app">Mobile App</button>
</div>
</div>
</div>
<div class="row portfolio-grid">
{%- for project in projects -%}
<div class="col-md-6 col-lg-4 portfolio-item {{ project.category | slugify }}">
<a href="/portfolio/{{ project.slug }}/" class="portfolio-link">
<div class="portfolio-card mb-4">
<img src="{{ project.image | url }}" class="img-fluid" alt="{{ project.title }}">
<div class="p-3">
<h5 class="mb-1">{{ project.title }}</h5>
<small class="text-white-50">{{ project.category }}</small>
</div>
</div>
</a>
</div>
{%- endfor -%}
</div>
</div>