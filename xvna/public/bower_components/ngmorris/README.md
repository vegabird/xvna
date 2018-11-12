ngMorris
========

directives: `bar-chart`, `line-chart`, `donut-chart`

The options passed to each are listed in the examples below. Attach the data to your controllers scope and `ngMorris` will watch for changes

`bower install ngmorris --save`

index.html:
`<script src='bower_components/ngMorris/src/ngMorris.js'></script>`

Then include it as a dependecy:

`angular.module('myApp', ['ngMorris'])`

Line chart example:

```
<div line-chart 
	line-data='groupedByMonth' 
	line-xkey='month' 
	line-ykeys='["total"]'
	line-labels='["Total violations"]'></div>
```

Bar chart example:

```
<div bar-chart 
	bar-data='categories' 
	bar-x='violation_category' 
	bar-y='["number_violations"]'></div>
```

Donut chart example:

```
<div donut-chart
	donut-data='percentages'></div>
```