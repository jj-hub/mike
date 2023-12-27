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
<h5>What is the stock type?</h5>
<ul>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/my_selection.ss">Portfolio</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/energy.ss">Energy</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/finance.ss">Finance</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/real_estate.ss">REITs</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/telecommunications.ss">Telco</a></li>
  <li><a target="_blank" href="https://jj-hub.github.io/mike/ss/utilities.ss">Utilities</a></li>
</ul>

<h5>Historic View</h2>
<h6>Number of Dividends in the past 2 years?</h6>
<h6>Dividend growth during the past 2 years?</h6>

<h5>Is this a well known Brand?</h5>
- Coke? FL
- McD?
- EDP?
<h6>Do you personally consume?</h6>
<h6>How is the debt?</h6>
-------------------------------------------
<h5>Sets</h2>
<h6>Best/Worst Performers d/w/m</h6>
<h6>...</h6>
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