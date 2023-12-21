---
# front matter tells Jekyll to process Liquid
layout: default
title: Current Windows
my_number: 5
---
<h2>Current Windows</h2>
{% include current_dividend_window_chart_by_cpD_sorted.html  %}

<h4>Amount</h4>
{% include current_dividend_window_chart_by_amount.html  %}
<h4>CpD</h4>
{% include current_dividend_window_chart_by_cpD.html  %}