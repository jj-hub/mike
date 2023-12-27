---
# front matter tells Jekyll to process Liquid
layout: default
title: Index
my_number: 5
---
1. How is the <a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD"> EUR/USD</a>?
2. Check Open Windows
<ul>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/current_windows_newer"></a>Newer</li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/current_windows_cheaper"></a>Cheaper</li>
</ul>
<h2>What is the stock type?</h2>
<ul>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/my_selection.ss">Portfolio</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/energy.ss">Energy</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/finance.ss">Finance</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/real_estate.ss">REITs</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/telecommunications.ss">Telco</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/utilities.ss">Utilities</a></li>
</ul>

<h2>Historic View</h2>
<h3>Number of Dividends in the past 2 years?</h3>
<h3>Dividend growth during the past 2 years?</h3>

<h2>Is this a well known Brand?</h2>
- Coke? FL
- McD?
- EDP?
<h3>Do you personally consume?</h3>
<h3>How is the debt?</h3>
-------------------------------------------
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