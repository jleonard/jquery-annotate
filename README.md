jQuery Annotate
===================

> Attach annotations to UI events to guide users through a simulation. Intended to support work-in-progress reviews during rapid prototyping.

## Usage

Tags are annotated with the _annotate_ and _annotation_ attributes. The _annotate_ attribute contains one or more events we want to respond to. When the user triggers any of these events, an _annotate_ event will be triggered.

The optional _annotation_ attribute holds a message that will be passed along with the annotation event.

```html
<nav annotate='click' annotation='Navigation has not been implemented.'>...</nav>

<footer annotate='click,mouseover' annotation='Footer copy is FPO.'>...</footer>
```

The _annotate_ attribute contains one or more events that should trigger an annotation event.
The optional _annotation_ attribute contains a message 

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
