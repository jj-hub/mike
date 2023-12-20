---
# front matter tells Jekyll to process Liquid
my_number: 5
---

Welcome to My New Home Page

{% assign date = '2020-04-13T10:20:00Z' %}

- Original date - {{ date }}
- With timeago filter - {{ date | timeago }}
- {{ page.my_number }}