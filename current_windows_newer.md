---
# front matter tells Jekyll to process Liquid
layout: default
title: Current Windows Newest
my_number: 5
---
<h2>Newest (ordered by declaration date TTL:65 + ROI > 1.234)</h2>
{% include current_dividend_window_chart_oPast_cROI.html  %}
{% include current_dividend_window_chart_oPast_cROI.md  %}
<h4>Cheapest/Affordable (ordered by closing price)</h4>
{% include current_dividend_window_chart_oPreviousClose_cROI.html  %}
{% include current_dividend_window_chart_oPreviousClose_cROI.md  %}
<h4>by ROI (ordered by higher returns)</h4>
{% include current_dividend_window_chart_oROI_cROI.html  %}
{% include current_dividend_window_chart_oROI_cROI.md  %}

<h4>dividend_history_chart</h4>
{% include dividend_history_chart_oROI_cROI.html  %}
{% include dividend_history_chart_oROI_cROI.md  %}