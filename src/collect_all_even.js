'use strict';

function collect_all_even(collection) {
  //在这里写入代码	
  var temp=[];
  for(var i=0;i<collection.length;i++)
  {

  	if(collection[i]%2==0)
  	{
  		temp.push(collection[i]);
  	}
  }
  return temp;
}

module.exports = collect_all_even;
