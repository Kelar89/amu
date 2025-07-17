---
layout: base.njk
title: What Clients Say
---
<div class="container py-5">
<div class="text-center mb-5">
<h2 class="text-neon d-block mb-2">What Clients Say</h2>
<p class="h3">I've Had The Honor Of Collaborating With<br>Amazing Clients.</p>
</div>
<div class="row g-4 justify-content-center">
{%- for review in reviews -%}
<div class="col-md-6 col-lg-4">
<div class="portfolio-card p-4 h-100 d-flex flex-column">
<div class="mb-3">
<span class="fs-1 text-neon">"</span>
</div>
<blockquote class="blockquote flex-grow-1">
<p>{{ review.quote }}</p>
</blockquote>
<div class="d-flex align-items-center mt-4">
<img src="{{ review.avatar | url }}" alt="{{ review.author }}" class="rounded-circle" width="50" height="50">
<div class="ms-3">
<h6 class="mb-0 fw-bold">{{ review.author }}</h6>
<small class="text-white-50">{{ review.origin }}</small>
</div>
</div>
</div>
</div>
{%- endfor -%}
</div>
</div>