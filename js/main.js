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
	paths: {
		jquery: 'jquery.1.11.3',
		bootstrap: 'bootstrap',
		moment: 'moment',
		daterangepicker: 'daterangepicker',
		bootstrapTable: 'bootstrap-table.min',
		zTree: 'jquery.ztree.core.min',
		zTreeCheck: 'jquery.ztree.excheck',
		wangEditor: 'wangEditor.min',
		layer: 'layer/layer'
	},
	shim: {　　　　
		'moment': {　　　　　　
			deps: ['jquery'],
			　　　　　　exports: 'moment'　　　　
		},
		'bootstrap': {
			deps: ['jquery'],
			exports: 'bootstrap'
		},
		'daterangepicker': {
			deps: ['jquery', 'moment'],
			　　　　　　exports: 'daterangepicker'
		},
		'bootstrapTable': {
			deps: ['jquery', 'bootstrap'],
			　　　　　　exports: 'bootstrapTable'
		},
		'zTree': {
			deps: ['jquery'],
			exports: 'zTree'
		},
		'zTreeCheck': {
			deps: ['jquery', 'zTree'],
			exports: 'zTreeCheck'
		},
		'wangEditor': {
			deps: ['jquery'],
			exports: 'wangEdit'
		},
		'layer': {
			deps: ['jquery']
		}　　
	}

});

require(['jquery'], function($) {
	$('#link').on('click', function() {
		var div = "<div style='padding:20px;magin:0 auto;text-align:center;'>测试弹出层</div>";
		layer.open({
			type: 1,
			skin: 'layui-layer-demo', //样式类名
			closeBtn: 1, //不显示关闭按钮
			shift: 2,
			shadeClose: false, //开启遮罩关闭
			content: div
		});
	});

});

require(['jquery', 'layer'], function($, layer) {
	/*配置layer路径*/
	layer.config({
		path: "js/lib/layer/"
	});
});

require(['../api'], function(api) {

	api.leftSideFold();
	api.dropDownTable('dropdown-table');
	api.ztree('treeDemo', false);
	api.ztree('treeDemo2', true);
	api.richEdit('editor-trigger');
	
});

require(['jquery', 'moment', 'daterangepicker'], function() {

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