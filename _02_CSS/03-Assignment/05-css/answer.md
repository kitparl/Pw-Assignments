The `z-index` property is a CSS property that controls the stacking order of HTML elements in a web page. It determines which elements should appear in front of or behind other elements when they overlap on the web page. The element with a higher `z-index` value will be displayed on top of elements with lower `z-index` values.

Here's a code example to illustrate how the `z-index` property works:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Z-Index Example</title>
    <style>
        .red-box {
            width: 200px;
            height: 200px;
            background-color: red;
            position: absolute;
            top: 50px;
            left: 50px;
            z-index: 1;
        }

        .blue-box {
            width: 200px;
            height: 200px;
            background-color: blue;
            position: absolute;
            top: 100px;
            left: 100px;
            z-index: 2;
        }

        .green-box {
            width: 200px;
            height: 200px;
            background-color: green;
            position: absolute;
            top: 150px;
            left: 150px;
            z-index: 3;
        }
    </style>
</head>
<body>
    <div class="red-box"></div>
    <div class="blue-box"></div>
    <div class="green-box"></div>
</body>
</html>
```

In this example, we have three colored boxes (`red-box`, `blue-box`, and `green-box`) that overlap each other. Each box has a `z-index` property set to different values. The `blue-box` has the highest `z-index` value of 2, followed by the `green-box` with a `z-index` of 3, and the `red-box` with a `z-index` of 1.

As a result, the stacking order from top to bottom is:

1. Green box (`green-box`) with a `z-index` of 3
2. Blue box (`blue-box`) with a `z-index` of 2
3. Red box (`red-box`) with a `z-index` of 1

So, the green box will be displayed on top of the blue and red boxes because it has the highest `z-index` value, followed by the blue box, and then the red box.

You can adjust the `z-index` values to control the stacking order of elements in your web page, ensuring that the desired elements are displayed in front of others when they overlap.