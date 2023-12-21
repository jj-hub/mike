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

{% for post in site.posts %}
  <article>
    <h2>
      <a href="{{ post.url }}">
        {{ post.title }}
      </a>
    </h2>
    <time datetime="{{ post.date | date: "%Y-%m-%d" }}">{{ post.date | date_to_long_string }}</time>
    {{ post.content }}
  </article>
{% endfor %}

{% for page in site.pages %}
  <article>
    <h2>
      <a href="{{ page.url }}">
        {{ page.title }}
      </a>
    </h2>
    <time datetime="{{ page.date | date: "%Y-%m-%d" }}">{{ page.date | date_to_long_string }}</time>
    {{ page.content }}
  </article>
{% endfor %}