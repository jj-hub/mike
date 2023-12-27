---
# front matter tells Jekyll to process Liquid
layout: default
title: Index
my_number: 5
---
1. How is the EUR/USD ? (
<a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1Y">year</a>,
<a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1M">month</a>,
<a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1W">week</a>,
<a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1D">day</a>
)
<ul>
  <li>EUR trend going high? --> HOLD</li>
  <li>EUR peak? --> Buy all you can</li>
  <li>EUR trend going low? --> USD is gaining value! --> HOLD</li>
  <li>EUR valley? --> Sell all you can. this is the most powerfull USD</li>
</ul>

BUY 
2. Check Open Windows
<ul>
  <li><a target="_blank" href="/mike/current_windows_newer">Newer</a></li>
  <li><a target="_blank" href="/mike/current_windows_cheaper">Cheaper</a></li>
</ul>
<h5>What is the stock type?</h5>
<ul>
  <li><a target="_blank" href="/mike/ss/my_selection.ss">Portfolio</a>(<a target="_blank" href="/mike/v/ABR.v">ABR</a>)</li>
  <li><a target="_blank" href="/mike/ss/energy.ss">Energy</a></li>
  <li><a target="_blank" href="/mike/ss/finance.ss">Finance</a></li>
  <li><a target="_blank" href="/mike/ss/real_estate.ss">REITs</a></li>
  <li><a target="_blank" href="/mike/ss/telecommunications.ss">Telco</a></li>
  <li><a target="_blank" href="/mike/ss/utilities.ss">Utilities</a></li>
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
