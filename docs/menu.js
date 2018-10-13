
var title = ''
  + '<div class="sidebar-title text-light">'
    + '<div class="title">'
      + '<a style="text-decoration: none;" href="https://github.com/shzlw/zeu">Zeu.js</a>'
    + '</div>'
  +' </div>';

var components = [];
components.push({name: 'Bar Meter', link: 'bar-meter.html'});
components.push({name: 'Digital Clock', link: 'digital-clock.html'});
components.push({name: 'Heartbeat', link: 'heartbeat.html'});
components.push({name: 'Hex Grid', link: 'hex-grid.html'});
components.push({name: 'Message Queue', link: 'message-queue.html'});
components.push({name: 'Network Graph', link: 'network-graph.html'});
components.push({name: 'Round Fan', link: 'round-fan.html'});
components.push({name: 'Score Board', link: 'score-board.html'});
components.push({name: 'Speed Circle', link: 'speed-circle.html'});
components.push({name: 'Text Box', link: 'text-box.html'});
components.push({name: 'Text Meter', link: 'text-meter.html'});
components.push({name: 'Volume Meter', link: 'volume-meter.html'});

var componentsHtml = '';
for (var i = 0; i < components.length; i++) {
  componentsHtml += '<li class="nav-item">'
                    + '<a class="nav-link text-light" href="' + components[i].link + '">' + components[i].name + '</a>'
                  + '</li>';
}

var menu = ''
  + '<div class="sidebar-menu">'
    + '<nav class="navbar bg-dark" id="nav">'
      + '<h5><a href="introduction.html" class="text-light">Introduction</a></h5>'
      + '<h5 class="text-light">Components</h5>'
      + '<ul class="navbar-nav">'
        + componentsHtml
      + '</ul>'
      + '<h5><a href="configuration.html" class="text-light">Config & API</a></h5>'
      + '<h5><a href="vue.html" class="text-light">Vue Integration</a></h5>'
    +'</nav>'
  + '</div>';
document.write(title + menu);