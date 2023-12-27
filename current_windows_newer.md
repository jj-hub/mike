---
# front matter tells Jekyll to process Liquid
layout: default
title: Current Windows Newest
my_number: 5
---
<h6>Newest (ordered by declaration date TTL:65 + ROI > 1.234)</h6>
{% include current_dividend_window_chart_oPast_cROI.i.html  %}
{% include current_dividend_window_chart_oPast_cROI.i.md  %}

<h6>Cheapest/Affordable (ordered by closing price)</h6>
{% include current_dividend_window_chart_oPreviousClose_cROI.i.html  %}
{% include current_dividend_window_chart_oPreviousClose_cROI.i.md  %}

<h6>by ROI (ordered by higher returns)</h6>
{% include current_dividend_window_chart_oROI_cROI.i.html  %}
{% include current_dividend_window_chart_oROI_cROI.i.md  %}

<h6>dividend_history_chart</h6>
{% include dividend_history_chart_oROI_cROI.i.html  %}
{% include dividend_history_chart_oROI_cROI.i.md  %}