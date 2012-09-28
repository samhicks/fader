Fader
======

Fade some awesome, by [Sam Hicks][samhicks]


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

[samhicks]: https://github.com/samhicks
