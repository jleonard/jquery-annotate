jQuery Annotate
===================

> Provides a simple way to annotate a front end UI to help guide users. Designed for prototyping and showcasing work-in-progress.


##Example

##### I'm working on my navigation but it isn't quite ready. I want to message that to everyone reviewing the site.

This will trigger a custom **annotate** event if the user clicks on my list.
```html
<ul annotate='click' annotation='Work in progress. Check back soon.'>
	<li>One</li>
	<li>Two</li>
	<li>Two</li>
</ul>
```

##### Then in my app I listen for the annotate event and message my user.
```js
function handleAnnotationEvent() {
  return function(_, a) {
    console.log('annotation event detected ',a);
  };
}
$(window).on('annotate',handleAnnotationEvent());
```
