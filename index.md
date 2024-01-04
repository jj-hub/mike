---
# front matter tells Jekyll to process Liquid
layout: default
title: Index
my_number: 5
---
<h5>1. 🗺️👀How is the EUR/USD ?</h5>
<a target="_blank" href="https://xstation5.xtb.com/">xstation5</a>
<ul>
  <li>EUR trend going high? --> HOLD</li>
  <li>EUR peak? --> Buy all you can now!</li>
  <li>EUR trend going low? --> USD is gaining value! --> HOLD</li>
  <li>EUR valley? --> Sell all you can. this is the most powerfull USD</li>
</ul>
{% include 01_analysis.html %}


<!-- section -->
<h5>2. 🗺️📅How is your dividend calendar?</h5>
{% include 02_analysis.html %}
- (€1.99/month subscription)


<!-- section -->
<h5>3. ⚔️🏰Check Open Windows</h5>
<ul>
  <li><a target="_blank" href="/mike/current_windows_newer">Newer Strategy</a></li>
  <li><a target="_blank" href="/mike/current_windows_cheaper">Cheaper Strategy</a></li>
</ul>
<h5>4. 🛡️🐉What is the stock type?</h5>
- Is this a well known Brand? (consume/not consume)
- Do you personally consume it?
<ul>
  <li>Is it in your <a target="_blank" href="/mike/ss/my_selection.ss">Portfolio</a>?(
    <a target="_blank" href="/mike/v/ABR.v">ABR</a>,
    <a target="_blank" href="/mike/v/AQN.v">AQN</a>,
    <a target="_blank" href="/mike/v/ARI.v">ARI</a>,
    <a target="_blank" href="/mike/v/CIB.v">CIB</a>,
    <a target="_blank" href="/mike/v/GAIN.v">GAIN</a>,
    <a target="_blank" href="/mike/v/JKS.v">JKS</a>,
    <a target="_blank" href="/mike/v/LNC.v">LNC</a>,
    <a target="_blank" href="/mike/v/OBDC.v">OBDC</a>,
    <a target="_blank" href="/mike/v/PMT.v">PMT</a>,ETC.
  )</li>
  <li>Is it a <a target="_blank" href="/mike/ss/real_estate.ss">REIT</a>?</li>
  <li><a target="_blank" href="/mike/ss/energy.ss">Energy?</a>(EDP)</li>
  <li><a target="_blank" href="/mike/ss/finance.ss">Finance?</a></li>
  <li><a target="_blank" href="/mike/ss/telecommunications.ss">Telco</a>(VODA,MEO,NOS)</li>
  <li><a target="_blank" href="/mike/ss/utilities.ss">Utilities</a>(McD,COKE,FL,CAR)</li>
</ul>

<h5>5. ⚜️👁️‍🗨️💬➿Reflect</h5>
<ul>
  <li><a target="_blank" href="/mike/i_reflect">Reflection</a> Page</li>
  <li>Check your <a target="_blank" href="/mike/ss/my_selection.ss">Portfolio</a>! Get updated</li>
</ul>

<h5>Historic View</h5>
<h6>Number of Dividends in the past 2 years?</h6>
<h6>Dividend growth during the past 2 years?</h6>

<h6>How is the debt?</h6>
-------------------------------------------
<h6>Best/Worst Performers d/w/m</h6>
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
