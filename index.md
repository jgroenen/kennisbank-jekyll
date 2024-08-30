---
layout: default
title: Kaarten
---
<div class="card-block">
    <div class="lyt">
        <div class="lyt-1">
            <div id="all-cards">
                {% assign kaarten = site.kaarten | sort: "title" %}
                {% assign prev = "" %}
                {% for kaart in kaarten %}
                    {% assign path = kaart.url | split: '/' %}
                    {% assign folder = path[2] %}
                    {% if kaart.title %}
                        {% assign title = kaart.title | replace: "/", "" %}
                        {% assign first = title | split: "" | first %}
                        {% if first != prev %}
                            {% if prev != "" %}</div>{% endif %}
                            <div class="card-initial-index m-b6">
                            <h2 class="text-h2 m-b2">{{ first }}</h2>
                            {% assign prev = first %}
                        {% endif %}
                        <section
                            data-filter="{{ kaart.title | upcase }} #{{ kaart.tags | join: " #" | upcase }} team:{{ folder }}"
                            data-loop-index="{{forloop.index}}"
                            >
                            <hr class="hr">
                            <a href="{{ kaart.url | relative_url }}" class="text-body u-display-block">{{ title}}</a>
                        </section>
                    {% endif %}
                {% endfor %}
                </div>
            </div>
            <div id="search-results"></div>
        </div>
    </div>
</div>
