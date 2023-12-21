---
# front matter tells Jekyll to process Liquid
layout: default
title: Index
my_number: 5
---
<h2>What is the stock type?</h2>
- REIT?
- BEEST?
<h2>Historic View</h2>
<h3>Number of Dividends in the past 2 years?</h3>
<h3>Dividend growth during the past 2 years?</h3>

<h2>Is this a well known Brand?</h2>
- Coke?
- McD?
- FL
<h3>Do you personally consume?</h3>
<h3>How is the debt?</h3>

<ul>
{% for post in site.posts %}
  <li>
    
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    
  </li>
{% endfor %}
</ul>
<ul>
{% for page in site.pages %}
  <li>
      <a href="{{ page.url }}">
        {{ page.title }}
      </a>
  </li>
{% endfor %}
</ul>