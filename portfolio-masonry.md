---
layout: base.njk
title: Grid Portfolio
---
<div class="container py-5">
    <div class="text-center mb-5">
        <h2 class="text-neon d-block mb-2">Grid Portfolio</h2>
        <p class="h3">A Clean and Symmetrical Layout</p>
    </div>

    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {%- for project in projects -%}
        <div class="col">
            <div class="portfolio-card h-100">
                <img src="{{ project.image | url }}" class="card-img-top" alt="{{ project.title }}">
                <div class="p-3 d-flex flex-column">
                    <h5 class="mb-1">{{ project.title }}</h5>
                    <small class="text-white-50 mb-auto">{{ project.category }}</small>
                    <a href="#" class="btn btn-outline-secondary mt-3">View Details</a>
                </div>
            </div>
        </div>
    {%- endfor -%}
    </div>
</div>