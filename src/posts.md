---
layout: page
title: Posts
---

<ul>
  {% for post in collections.posts.resources %}
    <li>
      <a href="{{ post.relative_url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
</ul>

Check out my latest articles and projects below! Feel free to explore and learn more about my work.
