var app=angular.module("myApp",['ServiceModule'])
app.controller("myCtrl",function($scope,dataList){
	$scope.arr=dataList.cartlist
//			console.log($scope.arr)
		$scope.allCheck=false;
//		全选函数
		$scope.allCh=function(bool){
			$scope.allCheck=bool
		}
//		小计
		$scope.addprice=function(){
			var count=0;
			angular.forEach($scope.arr,function(data){
				data.price=data.num*data.oneprice
//				console.log(data.price)
				if(data.Bol){
					count+=data.price
				}
			})
			return count
		}
});
//全选
app.directive("allCheck",function(){
	return{
		restrict:"A",
		link:function(scope,elem,attrs){
			elem.on("click",function(){
				angular.forEach(scope.arr,function(data){
					data.Bol=scope.allCheck;
				})
				scope.$apply();
			})
		}
	}
});
//单选
app.directive("oneCheck",function(){
	return{
		restrict:"A",
		link:function(scope,elem,attrs){
			elem.on("click",function(){
				scope.allCh(true);
				angular.forEach(scope.arr,function(data){
					if(data.Bol==false){
						scope.allCh(false);
					}
				})
				scope.$apply();
			})
		}
	}
});
app.directive("addBtn",function(){
	return{
		restrict:"A",
		link:function(scope,elem,attrs){
			elem.on("click",function(){
				var id=attrs.add;
				angular.forEach(scope.arr,function(data){
					if(data.id==id){
						data.num=parseInt(data.num)+1
					}
				})
				scope.$apply()
			})
		}
	}
});
app.directive("remBtn",function(){
	return{
		restrict:"A",
		link:function(scope,elem,attrs){
			elem.on("click",function(){
				var id=attrs.rem;
				angular.forEach(scope.arr,function(data,index,arr){
					if(data.id==id){
						data.num=parseInt(data.num)-1;
						if(data.num<=0){
							scope.arr.splice(index,1);
						}
					}
				})
				scope.$apply()
			})
		}
	}
})