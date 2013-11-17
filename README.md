jQuery Annotate
===================

> Provides a simple way to annotate a front end UI to help guide users. Designed for prototyping and showcasing work-in-progress.

##Example

##### I'm working on my navigation but it isn't quite ready. I want to make sure people don't click the nav and think it is supposed to be functional.

Now if a user clicks the list, a custom **annotate** event will trigger.
```html
<ul annotate='click' annotation='Work in progress. Check back soon.'>
	<li>One</li>
	<li>Two</li>
	<li>Two</li>
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
