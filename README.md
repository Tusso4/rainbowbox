## rainbowbox
<br>
<br>

## Install
<p>· Put rainbowbox.js in your js folder.</p>
<p>· Put this line <script src="/folder/rainbowbox.js" async></script></p>
<br>

## How to Use
<br>
rainbowbox(ELEMENT, { OPTIONS });
<br>
<br>

## Example
<br>
<br>

```html
<div id="rainbowbox" style="width: 120px; height: 120px"></div>

<script>
var final_points = [
	[175, 77, 172],
	[50, 125, 189],
	[60, 146, 82],
	[237, 183, 18]
];

rainbowbox($("#rainbowbox"), {

	to: [ [ 255,0,0 ], [ 0,255,0 ] ],
	from: [0,0,0],
	animated: true,
	velocity: 15

});
</script>
```

