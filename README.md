jQuery Annotate
===================

> Provides a simple way to annotate a front end UI to help guide users. Designed for prototyping and showcasing work-in-progress.

##Example

##### I'm working on my navigation but it isn't quite ready. I want to make sure users don't click the nav and think it is supposed to be functional.

If a user clicks the list, a custom **annotate** event will trigger. Any jQuery [mouse](http://api.jquery.com/category/events/mouse-events/) or [keyboard](http://api.jquery.com/category/events/keyboard-events/) events can be used.
```html
<ul annotate='click' annotation='Work in progress. Check back soon.'>
	<li>One</li>
	<li>Two</li>
	<li>Three</li>
</ul>
```

In my app I setup an event listener for the custom **annotate** event.

```js
function handleAnnotationEvent() {
  return function(_, a) {
    console.log('annotation event detected ',a);
  };
}
$(window).on('annotate',handleAnnotationEvent());
```
