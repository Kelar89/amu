---
layout: base.njk
title: Contoh Hasil Kerja
---
<div class="container py-5">
    <div class="text-center mb-5">
        <h2 class="text-neon d-block mb-2">Bukan Sekadar Janji, Ini Buktinya.</h2>
        <p class="h3">Setiap karya adalah cerita tentang masalah yang kami selesaikan<br>dan kesuksesan yang diraih bersama klien.</p>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {%- for project in projects -%}
        <div class="col">
            <a href="/portfolio/{{ project.slug }}/" class="portfolio-link">
                <div class="portfolio-card h-100">
                    <img src="{{ project.image | url }}" class="img-fluid" alt="{{ project.title }}">
                    <div class="p-3">
                        <h5 class="mb-1">{{ project.title }}</h5>
                        <small class="text-white-50">{{ project.summary }}</small>
                    </div>
                </div>
            </a>
        </div>
        {%- endfor -%}
    </div>
</div>