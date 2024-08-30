var kaarten = await fetch("/kaarten.json")
    .then(response => response.json());

document.body.innerHTML = document.body.innerHTML.replace(/\[\[([^\]]+)\]\]/g, function (match, p1) {
    return kaarten[p1] ? `<a href="${kaarten[p1].url}">${kaarten[p1].title}</a>` : p1;
});

document.getElementById('filterInput').addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        window.location = '/?q=' + e.target.value;
    } else {
        filterPages(e.target);
    }
});

function filterPages(el) {
    var filter = el.value.toUpperCase();
    var filters = filter.split(' ');
    var els = document.querySelectorAll('[data-filter]');
    var results = [];
    for (var i in filters) {
        filter = filters[i];
        els.forEach(function(el) {
            if (el.dataset.filter.toUpperCase().indexOf(filter) != -1 ||
                el.innerHTML.toUpperCase().indexOf(filter) != -1) {
                results[el.dataset.filter] = { el: el, score: 0 };
            }
            if (el.dataset.filter.toUpperCase().indexOf(filter) != -1)
                results[el.dataset.filter].score += 5;
            if (el.innerHTML.toUpperCase().indexOf(filter) != -1)
                results[el.dataset.filter].score ++;
        });
    }
    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = `<h2 class="text-h1 m-b3" style="font-weight: 500">${Object.values(results).length} resultaten voor <b style="font-weight: 900">${el.value}</b><h2>`;
    Object.values(results)
        .sort((a, b) => b.score - a.score) // sort by score
        .forEach(function(result) {
            searchResults.appendChild(result.el.cloneNode(true));
        });
    document.getElementById('all-cards').style.display = 'none';
}

var urlParams = new URLSearchParams(window.location.search);
var q = urlParams.get('q');
if (q) {
    document.getElementById('filterInput').value = q;
    filterPages(document.getElementById('filterInput'));
}
