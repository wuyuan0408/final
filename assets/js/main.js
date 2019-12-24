function gogogo(){ /*朝指定位置前進中  使用jquery喔喔 速度850*/
       		$('.here').css({'opacity':0,});
			$('#'+gogogo.arguments[0]+' .here').css({'opacity':1,});
			$('html,body').animate( { scrollTop: ($('#'+gogogo.arguments[0]).offset().top)},850);}
			
function readstar(i){ /*星星函數 1~5星*/
    		var percentnum = i*20 ;
    		document.write('<div class="ratings"><div class="empty_star">★★★★★</div><div ');
    		document.write('style="position: absolute;left: 0;top: 0;white-space: nowrap;overflow: hidden;color: red;width:');
    		document.write(percentnum);
    		document.write('%;">★★★★★</div></div>');}