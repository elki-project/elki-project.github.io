---
layout: page
title: Sitemap
noindex: true
---

Navigation tree:
----------------

<ul>
{% assign pages_list = site.pages | sort: 'navigation' %}
{% for node in pages_list %}
{% if node.title != nil and node.navigation != nil and node.parent == nil %}
  <li><a href="{{ node.url }}">{{ node.short | default: node.title }}</a> <small>({{node.navigation}})</small>
  {% if node.section != nil %}{% assign sub_list = site.pages | where: 'parent', node.section | sort: 'navigation' %}
  {% if sub_list %}<ul>
  {% for sub in sub_list %}
    <li><a class="subitem{% if page.url == sub.url %} active{% endif %}" href="{{ sub.url }}">{{ sub.short | default:  sub.title }}</a> <small>({{sub.navigation}})</small></li>
  {% endfor %}
  </ul>{% endif %}{% endif %}
  </li>
{% endif %}
{% endfor %}
</ul>

Missing:
========

<ul>
{% for node in pages_list %}
{% if node.parent == nil and node.title != nil and node.parent == nil and node.navigation == nil and node.url != "/" and node != page %}
  <li><a  href="{{ node.url }}">{{ node.short | default: node.title }}</a> <small>({{node.navigation}})</small></li>
{% endif %}
{% endfor %}
</ul>

