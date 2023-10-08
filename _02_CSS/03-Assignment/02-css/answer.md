Relative and absolute positioning are two different techniques used in CSS to control the placement and positioning of elements within a web page. They have distinct behaviors and use cases:

1. Relative Positioning:
   - Relative positioning is a CSS property that allows you to move an element relative to its normal position within the document flow.
   - When an element is set to have relative positioning (`position: relative;`), it still occupies space in its original position in the document flow, but you can use properties like `top`, `right`, `bottom`, and `left` to offset it from that original position.
   - The element's final position is determined by adding or subtracting values from its normal position, without affecting the layout of other elements on the page.
   - Relative positioning is often used for fine-tuning the position of elements in relation to their default placement.

Example:
```css
#myDiv {
  position: relative;
  top: 20px;
  left: 10px;
}
```

2. Absolute Positioning:
   - Absolute positioning is a CSS property that allows you to completely remove an element from the document flow and position it relative to its nearest positioned ancestor.
   - When an element is set to have absolute positioning (`position: absolute;`), it is taken out of the normal document flow, and its position is determined by the values of the `top`, `right`, `bottom`, and `left` properties relative to its closest ancestor with a non-static position (usually a parent element).
   - Elements with absolute positioning do not affect the layout of other elements, and they overlap with other elements if their positions overlap.
   - Absolute positioning is often used for creating overlays, tooltips, or positioning elements precisely within a container.

Example:
```css
#myDiv {
  position: absolute;
  top: 50px;
  left: 20px;
}
```

In summary, the key difference between relative and absolute positioning in CSS is how they affect the normal flow of elements and how they determine the final position of an element:

- Relative positioning adjusts an element's position relative to its default flow, but it still occupies space in that flow.
- Absolute positioning removes an element from the normal flow and positions it relative to its nearest positioned ancestor, allowing elements to overlap.