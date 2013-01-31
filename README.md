Fader
======

A simple fading slideshow jQuery plugin.

About
-----

Fader is a lightweight jQuery plugin that allows you to turn a list of images into an infinite fading slideshow. Changeable options include speed and easing.

Example Usage
-------------

### HTML

```html
<ul style="position: relative; list-style: none; overflow: hidden;" data-role="fader">
    <li><img src="http://placekitten.com/500/300"></li>
    <li><img src="http://placekitten.com/g/500/300"></li>
    <li><img src="http://placekitten.com/500/300"></li>
</ul>
```

### jQuery

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script type="text/javascript" src="fader.js"></script>
<script type="text/javascript">
    $('[data-role="fader"]').fader({
        'speed' : 2000,
        'easing' : 'linear'
    });
</script>
```

Clone
-----

```
$ git clone git@github.com:samhicks/fader.git
```

@copyright [Sam Hicks][samhicks] 2012

[samhicks]: https://github.com/samhicks
