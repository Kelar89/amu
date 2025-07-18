---
pagination:
  data: projects
  size: 1
  alias: project
permalink: "portfolio/{{ project.slug }}/"
layout: case-study-layout.njk
eleventyComputed:
  title: "Studi Kasus: {{ project.title }}"
---