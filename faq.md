---
layout: base.njk
title: FAQs
---
<div class="container py-5">
    <div class="text-center mb-5">
        <h2 class="text-neon d-block mb-2">Frequently Asked Questions</h2>
        <p class="h3">Et Est, Dolorem Provident Vel Debitis<br>Perspiciatis Ducimus.</p>
    </div>
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="accordion" id="faqAccordion">
            {%- for item in faqs -%}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading{{ loop.index }}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{ loop.index }}" aria-expanded="false" aria-controls="collapse{{ loop.index }}">
                            {{ item.question }}
                        </button>
                    </h2>
                    <div id="collapse{{ loop.index }}" class="accordion-collapse collapse" aria-labelledby="heading{{ loop.index }}" data-bs-parent="#faqAccordion">
                        <div class="accordion-body">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            {%- endfor -%}
            </div>
        </div>
    </div>
</div>