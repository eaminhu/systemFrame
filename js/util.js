
	var util = {
		datePicker : function(obj){
			
			var picker = $('.'+obj);
			var format = picker.attr('date-format');
			var minView = picker.attr('minView');
			var autoClose = picker.attr('autoClose');
			
			var opt = $.extend(true, {
				'format' : format,
				'minView' : minView,
				'autoclose': autoClose,
				'language' : 'zh-CN'
			}, opt);
			
			picker.datetimepicker(opt);
		},
		
		leftSide : function(){
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
			    
			    $(window).trigger('resize')
			    

			});
			$(window).resize(function(){
			    $('#table').bootstrapTable('resetView');
			});
			
			$('.menu-list').hover(function(){
				$(this).addClass('nav-hover');
			},function(){
				$(this).removeClass('nav-hover');
			});
			
		},
		
		dropdownTable : function(){
			var table = $('.dropdown-table');
			table.on('click','tr',function(){
				var checkVal = $(this).find('td.hidden input').val();
		  		table.parents('.dropdown').find('.form-control').val(checkVal);
			});
		}
	};
	
	
	

	




