dollarRain
==========

small jquery plugin to make dollars rain inside a container


##How to use it ?
Place a container where you will see dollars and call dollarRain function
ex:
```
<div id="container"></div>
<script>
	$("#container").dollarRain({
	    number:100, 
	    images:["dollar1.jpg", "dollar2.jpg", "dollar3.jpg"]
	  });
</script>
```

###Options
**number** : number of falling dollars

**images** : array of image links of dollars
