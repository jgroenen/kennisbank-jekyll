---
layout: default
title: Teams
---
<div class="article-block ">
    <div class="lyt">
        <div class="lyt-1">
            <h2 class="text-h1 m-b3">Teams</h2>
            {% for team in site.data.teams %}
            <div class="m-b4">
                <a href="/?q=team:{{ team | replace: " ", " -" }}" class="team-teaser u-display-block u-border-radius p-y4 p-x4 color-bg-brand-2">
                    <h3 class="text-h3 m-b1">{{ team }}</h3>
                    <p class="text-body color-brand-1">{% include teamcount.html team=team %} resultaten</p>
                </a>
            </div>
            {% endfor %}
        </div>
    </div>
</div>