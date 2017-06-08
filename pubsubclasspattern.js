var ps=new function(){
	this.arrayObj=[];
	this.subscribe=function(cb){
		this.arrayObj.push(cb)
	}
	this.getArrayObj=function(){
		return this.arrayObj;
	}
	this.emit=function(key,value){
		for(var i=0;i<this.arrayObj.length;i++){
			//if(this.arrayObj[i].key==key){
				this.arrayObj[i](key,value)
			//}
		}
	}
}();


var ClassA = function(){
	
	this.value=0;
	var store = function(key,data){
		switch(key){
			case "settingValue":console.log('settingValueA',data)
								break;
		}
	}
	this.setValue=function(val){
		this.value=val;
		ps.emit('settingValue',5)
	}
	ps.subscribe(store);
}

var ClassB = function(){
	var store = function(key,data){
		switch(key){
			case "settingValue":console.log('settingValueB',data)
								break;
		}
	}
	ps.subscribe(store);
}

var objA = new ClassA();
var objB = new ClassB();
objA.setValue(5)
