angular.module('ServiceModule',[])
.service('dataList',function($http){



	this.productList = [
		{"id":110,"name":"iphoneX","price":9600,"color":"玫瑰金","memory":"64G"},
		{"id":111,"name":"iphone8","price":5600,"color":"白色","memory":"128G"},
		{"id":112,"name":"iphone7","price":6600,"color":"黑色","memory":"32G"},
		{"id":113,"name":"小米6","price":1999,"color":"蓝色","memory":"64G"},
		{"id":114,"name":"vivo X20","price":2999,"color":"骚红","memory":"64G"},
		{"id":115,"name":"oppo","price":2998,"color":"紫色","memory":"64G"},
		{"id":116,"name":"华为p11","price":4300,"color":"玫瑰金","memory":"128G"},
		{"id":117,"name":"三星","price":5200,"color":"白色","memory":"64G"},
		{"id":118,"name":"小米note3","price":2500,"color":"玫瑰金","memory":"64G"},
		{"id":119,"name":"魅族","price":2300,"color":"玫瑰金","memory":"64G"},
		{"id":120,"name":"锤子T3","price":2399,"color":"玫瑰金","memory":"64G"}
	]


    this.cartlist = [ //初始化购物车的数据
      {
        id: '0',
        name: '洗衣机',
        num: '1',
        oneprice: '900',
        price: '',
        Bol:false
      },
      {
        id: '1',
        name: '热水器',
        num: '1',
        oneprice: '110',
        price: '',
        Bol:false
      },
      {
        id: '2',
        name: '空调',
        num: '1',
        oneprice: '116',
        price: '',
        Bol:false
      },
      {
        id: '3',
        name: '冰箱',
        num: '1',
        oneprice: '2087',
        price: '',
        Bol:false
      },
      {
        id: '4',
        name: '电磁炉',
        num: '1',
        oneprice: '135',
        price: '',
        Bol:false
      },
      {
        id: '5',
        name: '被子',
        num: '1',
        oneprice: '50',
        price: '',
        Bol:false
      },
      {
        id: '6',
        name: '本子',
        num: '1',
        oneprice: '2',
        price: '',
        Bol:false
      },
      {
        id: '7',
        name: '笔',
        num: '1',
        oneprice: '115',
        price: '',
        Bol:false
      },
      {
        id: '8',
        name: '杯子',
        num: '1',
        oneprice: '12',
        price: '',
        Bol:false
      },
      {
        id: '9',
        name: '书',
        num: '1',
        oneprice: '5',
        price: '',
        Bol:false
      },
      {
        id: '10',
        name: '零食',
        num: '1',
        oneprice: '13',
        price: '',
        Bol:false
      }
    ];
})
