jQuery Annotate
===================

> Provides a simple way to annotate a front end UI to help guide users. Designed for prototyping and showcasing work-in-progress.


##Example

##### I want to communicate to users that my nav isn't wired up yet.
```html
<ul annotate='click' annotation='Not quite ready. Check back soon.'>
	<li>One</li>
	<li>Two</li>
	<li>Two</li>
</ul>
```

```js
function handleAnnotationEvent() {
  return function(_, a) {
    console.log('annotation event detected ',a);
  };
}
$(window).on('annotate',handleAnnotationEvent());
```
