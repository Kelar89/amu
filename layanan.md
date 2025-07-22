---
layout: base.njk
title: Layanan Kami
---

<div class="container py-5">
<div class="text-center mb-5">
<p class="text-secondary fw-bold">APA YANG KAMI KERJAKAN</p>
<h2 class="display-5 fw-bold">Kamu Fokus, Kami yang Beresin</h2>
<p class="lead text-white-50 mt-3">Kami bukan sekadar bantuin tugas. Kami bantu kamu bebas dari stres teknis. Ini cara kerja kami<br>bantu kelarin masalah kamu.</p>
</div>
<div class="row g-4 justify-content-center">
{%- for service in services -%}
<div class="col-md-6 col-lg-4">
<div class="portfolio-card p-4 h-100 d-flex flex-column text-center {% if service.is_featured %}featured-card{% endif %}">
    <div class="flex-grow-1">
        <h4 class="fw-bold">{{ service.title }}</h4>
        <p class="text-white-50">{{ service.description }}</p>
    </div>
    <div class="d-flex flex-column gap-2 mt-3">
        <a href="{{ service.portfolio_url }}" class="btn btn-neon-outline rounded-pill">{{ service.primary_button_text }}</a>
        <a href="https://wa.me/6281234567890?text={{ service.secondary_button_text | urlencode }}" target="_blank" class="btn btn-success rounded-pill"><i class="bi bi-whatsapp me-2"></i> Chat WhatsApp</a>
    </div>
</div>
</div>
{%- endfor -%}
</div>
</div>

<div class="container pt-5 pb-5">
     <div class="text-center mb-5">
         <hr class="my-5 w-50 mx-auto">
         <p class="text-secondary fw-bold">CARA KERJANYA</p>
         <h2 class="display-5 fw-bold">3 Langkah Cepat, Tugasmu Langsung Kelar</h2>
         <p class="lead text-white-50 mt-3">Tanpa form ribet. Tanpa kontrak. Cukup kirim tugas, tunggu hasilnya. Gitu aja.</p>
     </div>
     <div class="row g-4">
     {%- for item in process -%}
         <div class="col-md-4">
             <div class="text-center p-3">
                 <i class="bi {{ item.icon }} display-4 text-neon mb-3"></i>
                 <h4 class="fw-bold mt-3">{{ item.title }}</h4>
                 <p class="text-white-50">{{ item.description }}</p>
             </div>
         </div>
     {%- endfor -%}
     </div>
</div>