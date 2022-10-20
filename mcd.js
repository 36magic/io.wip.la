
function calculate() {
	var x = document.getElementById("inputs").value;
	x=x.replace(' ','');
	var arr=x.split(',');
	
	var gcd=0;
	var flag=false;
	for(var j=0;j<arr.length;j++){
		arr[j]=parseInt(arr[j]);
	}
	var min1=find_min(arr);
	for(var i=min1;i>0;i--){
		var don=0;
		for(var j=0;j<arr.length;j++){
			if(arr[j]%i!=0)
				don=1;
			//alert(arr[j]);
		}
		if(don==0){
			gcd=i;
			break;
		}
	}
	document.getElementById("result1").value = gcd;
}
function find_min(array_input) {
var min2 = parseInt(array_input[0]);
var len = array_input.length;
for (var i = 1; i < len; i++){
	array_input[i]=parseInt(array_input[i]);
	 if (array_input[i] < min2) {
	 	min2 = array_input[i];
	}
}
return min2;
}
