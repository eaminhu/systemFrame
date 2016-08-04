/*
	<script type="text/javascript" src="js/jquery.2.1.0.js"></script>
	<!--<script type="text/javascript" src="js/jquyer.1.11.3.js"></script>-->
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/bootstrap-table.min.js"></script>
	<script type="text/javascript" src="js/moment.js"></script>
	<script type="text/javascript" src="js/daterangepicker.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.core.min.js"></script>
	<script type="text/javascript" src="js/api.js"></script>
	
	<script type="text/javascript" src="js/jquery.ztree.core.min.js"></script>
	<script type="text/javascript" src="js/jquery.ztree.excheck.js"></script>
	
	* 
	* */
	

require.config({
	baseUrl: "js/lib",
	paths : {
		jquery : 'jquery.2.1.0',
		bootstrap : 'bootstrap',
		moment :  'moment',
		daterangepicker : 'daterangepicker',
		bootstrapTable : 'bootstrap-table.min',
		zTree : 'jquery.ztree.core.min',
		zTreeCheck : 'jquery.ztree.excheck',
		wangEditor : 'wangEditor.min'
	},
	shim: {
　　　　'moment': {   
　　　　　　deps: ['jquery'],
　　　　　　exports: 'moment' 
　　　　},
	    bootstrap: {
		  deps: ['jquery'],
		  exports: 'bootstrap'
		},
		'daterangepicker' : {
			deps: ['jquery','moment'],
　　　　　　 exports: 'daterangepicker' 
		},
		'bootstrapTable' : {
			deps: ['jquery','bootstrap'],
　　　　　　 exports: 'bootstrapTable'
		},
		'zTree' : {
			deps : ['jquery'],
			exports : 'zTree'
		},
		zTreeCheck : {
			deps : ['jquery','zTree'],
			exports : 'zTreeCheck'
		},
		wangEditor : {
			deps : ['jquery'],
			exports : 'wangEdit'
		}
　　}
	
});

require(['../app/index'],function(index){
	index.in();
});


require(['../app/api'],function(api){
	
	api.leftSideFold();
	api.dropDownTable('dropdown-table');
	api.ztree('treeDemo',false);
	api.ztree('treeDemo2',true);
	api.richEdit('editor-trigger');
	
});


require(['jquery','moment','daterangepicker'],function(){
    
    /*双日历插件*/
   
	$('input[name="daterange"]').daterangepicker({
		locale: {
			format: 'YYYY-MM-DD'
		},
		startDate: '2013-01-01',
		endDate: '2019-12-31'
	});

	$('input[name="startenddate"]').daterangepicker({
		singleDatePicker: true,
		showDropdowns: true,
		startDate: 1900
	});

});

