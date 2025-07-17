---
layout: base.njk
title: Our Services
---
<div class="container py-5">
<div class="text-center mb-5">
<h2 class="text-neon d-block mb-2">Our Services</h2>
<p class="h3">Et Est, Dolorem Provident Vel Debitis<br>Perspiciatis Ducimus.</p>
</div>
<div class="row g-4 justify-content-center">
{%- for service in services -%}
<div class="col-md-6 col-lg-4">
<div class="portfolio-card text-center p-4 h-100">
<i class="bi {{ service.icon }} fs-1 text-neon mb-3"></i>
<h4 class="fw-bold">{{ service.title }}</h4>
<p class="text-white-50">{{ service.description }}</p>
<a href="#" class="stretched-link text-white-50">Learn More</a>
</div>
</div>
{%- endfor -%}
</div>
</div>