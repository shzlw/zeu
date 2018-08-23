
var title = ''
  + '<div class="sidebar-title text-light">'
    + '<div class="title">'
      + '<a style="text-decoration: none;" href="https://github.com/shzlw/zeu">Zeu.js</a>'
    + '</div>'
  +' </div>';

var menu = ''
  + '<div class="sidebar-menu">'
    + '<nav class="navbar bg-dark text-light" id="nav">'
      + '<h5><a href="introduction.html">Introduction</></h5>'
      + '<h5><a href="quick-start.html">Quick Start</></h5>'
      + '<h5>Components</h5>'
      + '<ul class="navbar-nav">'
        + '<li class="nav-item">'
          + '<a class="nav-link text-light" href="bar-meter.html">Bar Meter</a>'
      + '</li>'
      + '<li class="nav-item">'
        + '<a class="nav-link text-warning" href="digital-clock.html">Digital Clock</a>'
      + '</li>'
      + '<li class="nav-item">'
        + '<a class="nav-link" href="heartbeat.html">Heartbeat</a>'
      + '</li>'
      +'</ul>'
    +'</nav>'
  + '</div>';
document.write(title + menu);