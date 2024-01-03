---
# front matter tells Jekyll to process Liquid
layout: default
title: Index
my_number: 5
---
<h5>1. 🗺️👀How is the EUR/USD ?</h5>
<style>
.⬆️ {
  color: blue;
  text-align: center;
  font-weight: bold;
}
.↗️ {
  color: green;
  text-align: center;
  font-weight: bold;
}
.↘️ {
  color: red;
  text-align: center;
  font-weight: bold;
}
.⬇️ {
  color: purple;
  text-align: center;
  font-weight: bold;
}
</style>
<table id="eurusd_trend" class="display">
  <thead>
    <tr>
      <th>When?</th>
      <th><a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1D">day</a></th>
      <th><a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1W">week</a></th>
      <th><a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1M">month</a></th>
      <th><a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=1Y">year</a></th>
      <th><a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=2Y">2 yrs</a></th>
      <th><a target="_blank" href="https://www.xe.com/currencycharts/?from=EUR&to=USD&view=10Y">10 yrs</a></th>
      <th>Comments</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2024/01/3</td>
      <td class="↘️">-0.5%</td><!-- day -->
      <td class="↘️">-1.12%</td><!-- week -->
      <td class="↗️">+0.52%</td><!-- month -->
      <td class="↗️">+2.32%</td><!-- year -->
      <td class="↘️">-3.34%</td><!-- 2yrs -->
      <td class="↘️">-19.67%</td><!-- 10 yrs -->
      <td>EUR trend is strong & getting stronger, but reached a local maxima</td><!-- comment -->
    </tr>
    <tr>
      <td>2023/12/28</td>
      <td class="⬆️">max</td><!-- day -->
      <td class="⬆️">max</td><!-- week -->
      <td class="⬆️">max</td><!-- month -->
      <td class="↘️">-2%</td><!-- year -->
      <td class="↘️">-3%</td><!-- 2yrs -->
      <td class="↘️">-20%</td><!-- 10 yrs -->
      <td>EUR trend is strong & getting stronger, but reached a local maxima</td><!-- comment -->
    </tr>
  </tbody>
</table>
<a target="_blank" href="https://xstation5.xtb.com/">xstation5</a>
<ul>
  <li>EUR trend going high? --> HOLD</li>
  <li>EUR peak? --> Buy all you can now!</li>
  <li>EUR trend going low? --> USD is gaining value! --> HOLD</li>
  <li>EUR valley? --> Sell all you can. this is the most powerfull USD</li>
</ul>
<h5>2. 🗺️📅How is your dividend calendar?</h5>
- (€1.99/month subscription)
<h5>3. ⚔️🏰Check Open Windows</h5>
<ul>
  <li><a target="_blank" href="/mike/current_windows_newer">Newer Strategy</a></li>
  <li><a target="_blank" href="/mike/current_windows_cheaper">Cheaper Strategy</a></li>
</ul>
<h5>4. 🛡️🐉What is the stock type?</h5>
- Is this a well known Brand? (consume/not consume)
- Do you personally consume it?
<ul>
  <li><a target="_blank" href="/mike/ss/my_selection.ss">Portfolio</a>(
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
  <li><a target="_blank" href="/mike/ss/energy.ss">Energy</a>(EDP)</li>
  <li><a target="_blank" href="/mike/ss/finance.ss">Finance</a></li>
  <li><a target="_blank" href="/mike/ss/real_estate.ss">REITs</a></li>
  <li><a target="_blank" href="/mike/ss/telecommunications.ss">Telco</a>(VODA,MEO,NOS)</li>
  <li><a target="_blank" href="/mike/ss/utilities.ss">Utilities</a>(McD,COKE,FL,CAR)</li>
</ul>

<h5>5. ⚜️👁️‍🗨️💬➿Reflect</h5>
<ul>
  <li><a target="_blank" href="/mike/i_reflect">Reflection</a> Page</li>
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
