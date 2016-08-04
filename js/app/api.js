define([
	'jquery',
	'bootstrapTable',
	'moment',
	'daterangepicker',
	'zTree',
	'zTreeCheck'
	],
	function($,bootstrapTable,moment,daterangepicker){
		return {
			leftSideFold : function(){
			var ml = $('.left-side-menu  li.menu-list');
				ml.click(function(event) {
					event.stopPropagation();
					if($('body').hasClass('left-side-collapsed')){
						return;
					}
					$(this).addClass("active").siblings().removeClass('active');
					if($('.sub-menu-list', this).is(':hidden')){
						$('.sub-menu-list').slideUp();
						$('.sub-menu-list', this).slideDown();
			            $('.menu-list i.fold').removeClass('fold-down');
			            $('i.fold', this).addClass('fold-down');
			            
					}else{
						$('.sub-menu-list', this).slideUp();
						$('i.fold', this).removeClass('fold-down');
					}
				});
				
				var leftBtn = $('.header-section .toggle-btn');
				
				var tb = $('.toggle-btn');
				tb.click(function(){
					$('body').toggleClass('left-side-collapsed');
					
					$('.sub-menu-list').slideUp();
					$('.left-side-menu ul >li').removeClass('nav-hover');
				    
				    //console.log($('.bootstrap-table').width());
				   	$('#table').bootstrapTable('resetView');


					if( document.createEvent) { 
						var event = document.createEvent ("HTMLEvents"); 
						event.initEvent("resize", true, true); 
						window.dispatchEvent(event); 
						//alert(11)
						$('#table').bootstrapTable('resetView');

					} else if(document.createEventObject){
						window.fireEvent("onresize");
						//alert(22)
						$('#table').bootstrapTable('resetView');
					}  
					
				    
				});
				
				
				
				$('.menu-list').hover(function(){
					$(this).addClass('nav-hover');
				},function(){
					$(this).removeClass('nav-hover');
				});
		},
		
		
		/*下拉表格*/
		dropDownTable : function(ele){
			var table = $('.'+ele);
			table.on('click','tr',function(){
				var checkVal = $(this).find('td.hidden input').val();
		  		table.parents('.dropdown').find('.form-control').val(checkVal);
			});
		},
		
		
		/*树形结构*
		/* ele 为树形节点的ID
		   type为类型，true为复选框 false 为普通树形
		 */
		ztree : function(ele,type){
			var setting = {
				check: {
					enable: type
				},
				data: {
					simpleData: {
						enable: true
					}
				}
			};
			
			var zNodes =[
				{ id:1, pId:0, name:"随意勾选 1", open:true},
				{ id:11, pId:1, name:"随意勾选 1-1", open:true},
				{ id:111, pId:11, name:"随意勾选 1-1-1"},
				{ id:112, pId:11, name:"随意勾选 1-1-2"},
				{ id:12, pId:1, name:"随意勾选 1-2", open:true},
				{ id:121, pId:12, name:"随意勾选 1-2-1"},
				{ id:122, pId:12, name:"随意勾选 1-2-2"},
				{ id:2, pId:0, name:"随意勾选 2", checked:true, open:true},
				{ id:21, pId:2, name:"随意勾选 2-1"},
				{ id:22, pId:2, name:"随意勾选 2-2", open:true},
				{ id:221, pId:22, name:"随意勾选 2-2-1", checked:true},
				{ id:222, pId:22, name:"随意勾选 2-2-2"},
				{ id:23, pId:2, name:"随意勾选 2-3"}
			];
	
			
			$.fn.zTree.init($("#"+ele), setting, zNodes);
			
		}
		
		
	}
	
});
	
