---
layout: default
title: Besluiten
---
<div class="besluiten-block">
    <div class="lyt">
        <div class="lyt-1">
            <h1 class="text-h1 m-b4">Besluiten</h1>
            {% assign besluiten = site.besluiten %}
            {% for besluit in besluiten %}
            {% assign urlSections = besluit.url | split: "/" %}
            {% assign team = urlSections[2] %}
            <div class="m-b4">
                <a href="{{ besluit.url }}"
                    class="besluiten-teaser u-display-block u-border-radius p-y4 p-x4 color-bg-brand-2">
                    <h3 class="text-h3 m-b1">{{ besluit.title }}</h3>
                    <p class="text-body color-brand-1">{{ besluit.date | date: "%Y-%m-%d" }} | {{ team }}</p>
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
</div>