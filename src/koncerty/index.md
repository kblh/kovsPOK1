---
title: 'Koncerty'
layout: 'layouts/home.html'
tags: 'nav'
---

{% for item in collections.koncerty %}
  <h3>--- <a href="{{ item.url }}">{{ item.data.title }}</a></h3>
{% endfor %}
