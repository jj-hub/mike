---
# front matter tells Jekyll to process Liquid
layout: default
title: Current Windows Newest
my_number: 5
---
<h2>Newest</h2>
{% include current_dividend_window_chart_oPast_cROI.html  %}

<h4>Cheapest/Affordable</h4>
{% include current_dividend_window_chart_oPreviousClose_cROI.html  %}

<h4>by ROI</h4>
{% include current_dividend_window_chart_oROI_cROI.html  %}

<h4>dividend_history_chart</h4>
{% include dividend_history_chart_oROI_cROI.html  %}