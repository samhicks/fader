Fader
======

A simple fading slideshow jQuery plugin.

```html
<ul style="position: relative; list-style: none; overflow: hidden;" data-role="fader">
    <li><img src="http://placekitten.com/500/300"></li>
    <li><img src="http://placekitten.com/g/500/300"></li>
    <li><img src="http://placekitten.com/500/300"></li>
</ul>

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
<script type="text/javascript" src="fader.js"></script>
<script type="text/javascript">
    $('[data-role="fader"]').fader({
        'speed' : 2000,
        'easing' : 'linear'
    });
</script>
```

@copyright [Sam Hicks][samhicks] 2012

[samhicks]: https://github.com/samhicks
