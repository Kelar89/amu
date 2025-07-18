---
layout: base.njk
title: Beranda
---
<div class="container my-auto">
<div class="row align-items-center justify-content-center py-5">
<div class="col-lg-7">
<div class="text-center text-lg-start pe-lg-5">
<h4 class="text-neon fw-bold mb-3">Halo, Saya Lauren Tsai</h4>
<h1 class="display-3 fw-bold mb-3">Desain Bukan Sekadar Tampilan.</h1>
<p class="lead text-white-50 mb-4">
Ini tentang membangun pengalaman yang terasa personal, menghasilkan koneksi yang nyata, dan mendorong pertumbuhan bisnis Anda. Saya di sini untuk menerjemahkan visi Anda menjadi kenyataan digital yang bekerja keras untuk Anda.
</p>
<a href="/portfolio/" class="btn btn-neon rounded-pill px-4 py-2">
Jelajahi Karya Saya &rarr;
</a>
</div>
</div>
<div class="col-lg-5">
<div class="d-flex justify-content-center justify-content-lg-start ps-lg-5 mt-5 mt-lg-0">
<div class="hero-image-container">
<div class="dashed-circle"></div>
<img src="/img/hero-image.jpg" class="hero-image" alt="Lauren Tsai">
</div>
</div>
</div>
</div>
</div>

<div class="py-5">
    <div class="container">
        <h5 class="text-center text-white-50 mb-4">Telah Dipercaya Oleh Klien Ternama</h5>
        <div class="d-flex flex-wrap justify-content-center align-items-center client-logos">
        {%- for client in clients -%}
            <div class="client-logo-item p-3">
                <img src="{{ client.logo | url }}" alt="{{ client.name }}" height="40">
            </div>
        {%- endfor -%}
        </div>
    </div>
</div>

<div class="container py-5">
    <div class="text-center mb-5">
        <h2 class="text-neon d-block mb-2">Jejak Digital yang Berbicara</h2>
        <p class="h3">Beberapa studi kasus pilihan yang menunjukkan<br>bagaimana saya memecahkan masalah nyata.</p>
    </div>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {%- for project in projects | limit(3) -%}
        <div class="col">
            <div class="portfolio-card h-100">
                <img src="{{ project.image | url }}" class="card-img-top" alt="{{ project.title }}">
                <div class="p-3 d-flex flex-column">
                    <h5 class="mb-1">{{ project.title }}</h5>
                    <small class="text-white-50 mb-auto">{{ project.category }}</small>
                    <a href="/portfolio/{{ project.slug }}/" class="btn btn-outline-secondary mt-3">Lihat Studi Kasus</a>
                </div>
            </div>
        </div>
    {%- endfor -%}
    </div>
</div>

<div class="container text-center py-5 my-5">
    <h2 class="display-4 fw-bold">Punya ide yang ingin diwujudkan?</h2>
    <p class="lead text-white-50 my-4">Jangan biarkan ide brilian Anda hanya menjadi angan-angan.<br>Mari kita diskusikan bagaimana kita bisa mengubahnya menjadi kenyataan digital yang berdampak.</p>
    <a href="/contact/" class="btn btn-neon btn-lg rounded-pill">Mulai Percakapan</a>
</div>