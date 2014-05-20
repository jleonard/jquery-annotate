jQuery Annotate
===================

> Attach annotations to UI events to guide users through a simulation. Intended to support work-in-progress reviews during rapid prototyping.

## Usage

Tags are annotated with the **annotate** and **annotation** attributes. 

The **annotate** attribute contains one or more jQuery [mouse](http://api.jquery.com/category/events/mouse-events/) or [keyboard](http://api.jquery.com/category/events/keyboard-events/) events you want to respond to. When the user triggers any of these events, an **annotate** event will be triggered.

The optional **annotation** attribute holds a message that will be passed along with the annotation event.

```html
<nav annotate='click' annotation='Navigation has not been implemented.'>...</nav>

<footer annotate='click,mouseover' annotation='Footer copy is FPO.'>...</footer>
```

```js
function handleAnnotationEvent() {
  return function(_, a) {
    console.log('annotation event detected ',a);
  };
}
$(window).on('annotate',handleAnnotationEvent());
```

The event contains an object with three properties:

**event** the DOM event that triggered the annotation.
**element** the jQuery element in question.
**message** the _annotation_ message on the element.
