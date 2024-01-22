---
# front matter tells Jekyll to process Liquid
layout: default
title: Index
my_number: 5
---

<!-- 
1. Strategic Overview - Where am I?
2. Sell to gain capital
3. Buy to invest
4. Reflect
-->
### 1. Strategic Overview

- What stock type is it? (REIT)
- Is this a well known Brand? (consume/not consume)
- Do you personally consume it?

##### 1.a 🗺️👀How is the EUR/USD 📉📈?
<ul>
  <li>🟢🟢 ? ➡️ 🐻 HOLD/refrain from buying ⛔🔥--> EUR is gaining value!</li>
  <li>🔴🟢 ? ➡️ 🐂 🔥Buy all you can now!</li>
  <li>🔴🔴 ? ➡️ 🐻 HOLD/refrain from selling ⛔⚠️ --> USD is gaining value!</li>
  <li>🔴🟢 ? ➡️ 🐂 ⚠️Sell all you can. this is the most powerfull USD</li> <!--↘️↗️-->
</ul>
<a target="_blank" href="https://xstation5.xtb.com/">xstation5</a>

{% include 01_analysis.html %}

##### 1.b 🗺️📅How is our dividend calendar?
{% include 02_analysis.html %}
- (€1.99/month subscription) <a target="_blank" href="/mike/calendar">Calendar</a>


##### 1.c 🛡️🐉What is our current Position?

- Is it in your <a target="_blank" href="/mike/sec/my_selection.sec">Portfolio?
 - <a target="_blank" href="/mike/stk/ABR.stk">ABR</a>
 - <a target="_blank" href="/mike/stk/AQN.stk">AQN</a>,
 - <a target="_blank" href="/mike/stk/ARI.stk">ARI</a>,
 - <a target="_blank" href="/mike/stk/CIB.stk">CIB</a>,
 - <a target="_blank" href="/mike/stk/GAIN.stk">GAIN</a>,
 - <a target="_blank" href="/mike/stk/JKS.stk">JKS</a>,
 - <a target="_blank" href="/mike/stk/LNC.stk">LNC</a>,
 - <a target="_blank" href="/mike/stk/OBDC.stk">OBDC</a>,
 - <a target="_blank" href="/mike/stk/PMT.stk">PMT</a>

##### 4. 🛡️🐉How is the lay of the land?
- [ ] <a target="_blank" href="/mike/sec/real_estate.sec">REIT</a>?
- [ ] <a target="_blank" href="/mike/sec/energy.sec">Energy?</a>(EDP)
- [ ] <a target="_blank" href="/mike/sec/finance.sec">Finance?</a>
- [ ] <a target="_blank" href="/mike/sec/telecommunications.sec">Telco</a>(VODA,MEO,NOS)
- [ ] <a target="_blank" href="/mike/sec/utilities.sec">Utilities</a>(McD,COKE,FL,CAR)

---

### 2.Sell
##### 2.c. Which stocks are expensive + free + ↗️↘️

---

<!-- section -->
### 3.Buy

##### 3.c. Which stocks are cheap + expected to grow ↘️↗️
<p><a target="_blank" href="/mike/str/cheaper.str">Cheaper Strategy</a></p>

##### 3.n. ⚔️🏰Check Open Windows
<p><a target="_blank" href="/mike/str/newer.str">Newer Strategy</a></p>

### 4. ⚜️👁️‍🗨️💬➿Reflect
<ul>
  <li><a target="_blank" href="/mike/str/reflections.str">Reflection</a> Page</li>
  <li>Check your <a target="_blank" href="/mike/sec/my_selection.sec">Portfolio</a>! Get updated</li>
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
