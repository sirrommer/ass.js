/* ========================================================================
 * Ass.JS
 * http://romulobrasil.com
 * Copyright (c) 2014 Rômulo Brasil
 * ========================================================================
 */

"use strict";
var Ass = function() {
    return {
        init : function() {
            var ass = document.createElement('a');
            ass.href = 'http://www.romae.com.br';            
            ass.id = 'test';
            ass.innerHTML = 'Romae - Agência de criação e desenvolvimento de sites em Fortaleza, Ceará';
            ass.title = 'Romae - Agência Digital';
            ass.target = '_blank';
            ass.className = 'romae';
            ass.style.background = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAATCAYAAADh9EErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REQyRUJCRTBEQTNCMTFFM0EwNDZGNUY4QjExRDJGRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REQyRUJCREZEQTNCMTFFM0EwNDZGNUY4QjExRDJGRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgRmlyZXdvcmtzIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg4N0NBMUVGMjA2MjExRTNBMTc5ODRBNDQ0NjA5QUM1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg4N0NBMUYwMjA2MjExRTNBMTc5ODRBNDQ0NjA5QUM1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+40HSKwAABSNJREFUeNrsmFuME1Ucxr9zZqbtbqes3XW77brqXoQoGNHoGogPvJggJuqrlyeD8kIwURITiSQQI/AiikCQEE2MZqORkJhgwkWjEMMTJq4IaBa5rLvAFpaltKXt3I7fUDeWpd12txgS2NOemcycmek5v/nO9/+fCmzrA5QAWgtAcxoIuAAP4XET0PDrxlbM/zEAJHSeOwnY/Y1wr74IIdoBoxEykIFouADZ+Tm0Ryz89jTu9CKrX+BxS9CwCdW+D6KJ8OJzIVv+hhbth4gNQrTNhTK3wvUaMFOgV7sgbBlAnkp1VDtkYjsZ74AY3QWVxTVJ21dJPvYlIvPWQMpVPLl6BmqlonxmBfT1RPDumTjcSG65lu3YikB4N0YGKN5RQCPsxm4c71yAZGjW2oAqrFtY5QfF+gOqUtOtAKDeWfQ/Q5Ucr+ZPd9wLjweeGlo9L4UlAx29GQQ7pOntNjEHP3ea+Mq0cUiP0FZb8LoKIuxklY1AZmFtAxElkMdf4W2k1PHhaSoCR3+btZlB6iJcNriyFa1jR1+anbv46tlofyaUxbow30NbLzFwb/s+W8AOjxaghXtoDbEt0+uHGJ8btwlUKlOKGAradmihAxBqA4SbJVx/mCZy6pWBWHrTKj2+nJ5ZnPK5FIGr//QV1B9DSK7jvZtmwpQP9XKTD2cFRrRv0J7qw+whQiZoj8ROxzM43LEdesMSNGMhMnoeBbeTN5hUJT+UqwMNOfduNIkPYcp9N9vyJvFcVaLwiYqvxa9Vif1cZ0nlvH9i++RQT7Q0c98CS/XhxCxgJMGzRjHZ+oWe2a8BneJT3O9sgS7OMm0aJsg/2Zoh1MuQWhIGLmGQ2UCedoBEvfAmQqt0XOkalDlX8brxQOVDHAc3DnSC96taweo4ZbqwvS0wSDEeBo5FfC9lC9VqWkA365h6AMfcg4jKjeigLVi+n0rfNmgH9NNzBJpyWmglDp+Zqmqg5TOAagDL+a6oQZXl1FsVzlSUeSNUQ6QQCaYQayiuBWinfH+N3ITZGsMc/WGcd97CiavrMUbV2gTamy1ahMM6wIVBkPtO+SY872s+5EitHS6BeysC1HXTfwqpXw1Qn7qLgQdtuOItg8voYwhFBQofN5eiNjQ5ih5tF8KXe5EjvPkXgCfOFJXsZwjt9wDD0W6mYswavCNTGhXh1tP5OoGK0jy1Hg8to1TZBaU+ovT2ciX6Lc8lKVj7mqdKKlP52YHxJLqcg2ge2ol26zukGdykW+xbPNuLBu99WHLtNLPN2yqdKkLN2ss43b/gmHZeS5ckq0aYBseYHsPLqRwSuVDXBwlzJR7KP8pFwWLozinmtf79bdCtOBW9BqOhQ3ViKQUragxUN6WUU+lUAtMNUF84nzNM5e1J6iHsNxi9rSSfmsfivMIbmSgCjoWCsBc8nw7tWTQ3shc9w93MYXtg+NEM+xnUfkcuVAxuYtozWZSJ0qJKSlUXx1JPrWRD07UEfVmyQJQB1ejlsG9wDyP9Ud5NuA5BJZ6DHehpzwfzgUhe/37FHy3Y/ODQSTjqZBGBKPqqmpqPVlh71xLJq7WJ6V5bpl/T99RnR6w0XGcp0oc/Ru40EIr8+1cfs4HMX1HDcD8z0voGnBfue00WNj9D2Jozs2ya1FMzlzbCSW5jetmKhuYfoLJX+BJN1vnAhSXw7E8gYz/RB/hlOuXXoDtDblKomncJKrUUzrnX6KWPw8tr/p+nrJRjYCVk9DgE1QmLOb+oxzfvmPKPAAMAtqcMfkCpqTcAAAAASUVORK5CYII=) no-repeat";
            ass.style.lineHeight = '50px';
            ass.style.overflow = 'hidden';
            ass.style.position = 'fixed';
            ass.style.right = '0';
            ass.style.bottom = '0';
            ass.style.width = '27px';
            ass.style.height = '30px';
            ass.style.textIndent = '300px';
            ass.style.zIndex = '10000000';          
            ass.style.setProperty("-webkit-transition", "width 0.8s ease-in-out");
            ass.style.setProperty("-moz-transition", "width 0.8s ease-in-out");
            ass.style.setProperty("-ms-transition", "width 0.8s ease-in-out");
            ass.style.setProperty("transition", "width 0.8s ease-in-out");
            document.body.appendChild(ass); 

            ass.addEventListener('mouseover', function() {
                ass.style.width = '85px';
            });

            ass.addEventListener('mouseout', function() {
                ass.style.width = '27px';
            });
       }
    };
}();
Ass.init();
