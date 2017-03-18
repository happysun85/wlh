// JavaScript Document
//alert($(window).height());
var _desc='我刚玩了一个好玩到没朋友的游戏，你也来试试吧～不要想了，就是现在！';
//点击开始游戏,开启倒计时
$(document).ready(function(){
	$(".box-2 .b22-cover").tap(function(){
		if($(".box-2 .b22-cover .cover-1").css('display') !== 'none'){
			$(".box-2 .b22-cover .cover-1").hide();
			$(".box-2 .b24").hide();
			djs();
		}
	})					   
})
//倒计时
function doUpdate(sec){
	var sec
	$(".box-2 .b22-cover .cover-2").removeClass("num_"+(sec+1));
	$(".box-2 .b22-cover .cover-2").addClass("num_"+sec);
	if(sec==0){
		$(".box-2 .b22-cover").addClass("thide");
		$(".box-2 .b23").show();
		game_time();
		//disable_tap(); 
	}
}
function djs(){
	var sec=3;
	for(var i=sec;i>=0;i--){
		window.setTimeout('doUpdate(' + i + ')', (sec-i) * 1000); 
	}
}
//计时
var lt=1;
var timeout;
function game_time(){
	var time=new Array("0","1","2","3","4","5","6","7","8","9","10","11");
	var t=document.getElementById('miao');
	var t2=document.getElementById('haomiao');
	var imgLast=".png'>";
	timeout=setInterval(function(){
		var ltArray=lt.toString().split("");
		var img="<img src='images/time";
		for(var i=0;i<ltArray.length;i++){		
			if(ltArray.length==4&&ltArray[1]==0&&i==1){
				ltArray[i]=img+10+imgLast;	
			}else if(ltArray.length==4&&ltArray[1]!=0&&i==1){
				ltArray[i]=img+10+imgLast+img+ltArray[i]+imgLast;		
			}else if(ltArray.length==5&&i==1){
					ltArray[i]=img+11+imgLast;
			}else{
				ltArray[i]=img+ltArray[i]+imgLast;
			}
		}
		
		if(ltArray.length==1){
			$(t2).html(ltArray[0]);
		}else if(ltArray.length==2){
			$(t2).html(ltArray[0]+ltArray[1]);
		}else if(ltArray.length==3){
			$(t).html(ltArray[0]);
			$(t2).html(ltArray[1]+ltArray[2]);
		}else if(ltArray.length==4){
			$(t).html(ltArray[0]+ltArray[1]);	
			$(t2).html(ltArray[2]+ltArray[3]);
		}else if(ltArray.length==5){
			$(t).html(ltArray[0]+ltArray[11]);
			$(t2).html(ltArray[0]+ltArray[0]);
		}
		
		lt++;
		if(lt>=10001){		
			$(t).html(ltArray[0]+ltArray[1]);
			$(t2).html(img+0+imgLast+img+0+imgLast);
			clearInterval(timeout);
			$(".box-2").addClass("box-2-disabled");	
			pop_failed();
		}
	},10);
}
function pop_success(){
	var nma=(lt-1)/100;
	var nm=nma.toString();
	ta=parseInt(nma);
	tb=nm.split(".")[1];
	if(tb=="undefined"){
		tb="00";
	}
	if(lt>=0 && lt<=500){
		_txt="<span class='s1'>"+ta+"秒"+tb+"</span><span class='s2'>你是老天派来的火眼金睛吗？<br />就是现在分享给小伙伴，看看谁更厉害。</span>";
	}else if(lt>500 && lt<=1000){
		_txt="<span class='s1'>"+ta+"秒"+tb+"</span><span class='s2'>找字原来so easy！<br />就是现在分享给小伙伴，看看谁更厉害。</span>";
	}else if(lt>1000 && lt<=3000){
		_txt="<span class='s1'>"+ta+"秒"+tb+"</span><span class='s2'>击败了全国60％的小伙伴<br />就是现在分享给小伙伴，看看谁更厉害。</span>";
	}else if(lt>3000 && lt<=5000){
		_txt="<span class='s1'>"+ta+"秒"+tb+"</span><span class='s2'>击败了全国40％的小伙伴<br />就是现在分享给小伙伴，看看谁更厉害。</span>";
	}else if(lt>5000 && lt<=8000){
		_txt="<span class='s1'>"+ta+"秒"+tb+"</span><span class='s2'>击败了全国5％的小伙伴<br />就是现在分享给小伙伴，看看谁更厉害。</span>";
	}else{
		_txt="<span class='s1'>"+ta+"秒"+tb+"</span><span class='s2'>击败了全国1％的小伙伴<br />就是现在分享给小伙伴，看看谁更厉害。</span>";
	}
	$(".box-3 .b36").html(""+_txt+"");
	_desc='就在刚才我花了'+ta+'秒'+tb+'找到"就是现在"，不要让我一个人得瑟，你也来试试吧。别想了，就是现在！';
	window.setTimeout(function(){
		mySwiper.swipeNext();
	},500);
}
function pop_failed(){
	$(".box-3 .b36").html("<span class='s3'></span>");
	_desc='我刚玩了一个好玩到没朋友的游戏，你也来试试吧～不要想了，就是现在！';
	window.setTimeout(function(){
		mySwiper.swipeNext();
	},500)
}
/*function disable_tap(){
	window.setTimeout(function(){
		$(".box-2").addClass("box-2-disabled");	
	},60000);
}*/
//随机排列
function paixu(){
	var $container = document.getElementsByTagName('ul')[0],
        $frag = document.createDocumentFragment(),
        $children = Array.prototype.slice.call($container.children),
        $child,
        rnd = 0,
        total = 24;
    while(--total){
        rnd = Math.floor(Math.random()*total - 1);
        $child = $children.splice(rnd, 1)[0];
		console;
        //console && console.log($child.innerHTML);
        $frag.appendChild($child);
    }
    $container.appendChild($frag);		
}
$(document).ready(function(){
	paixu();				   
})
//tap word
function hide_err(){
	window.setTimeout(function(){
		$(".err").css({"opacity":"0"});		   
	},1000);
}
$(document).ready(function(){
	$(".box-2 ul li").tap(function(){
		if($(".box-2").hasClass("box-2-disabled")){
			//结束
			//alert("time out or successful!");
		}else{
			if($(this).hasClass("ll")){
				num=$(this).attr("data-li");
				if($(".box-2 .b21").hasClass("b21_"+num)){
					//增加五秒并报错
					TweenMax.fromTo($(this).children(".err"), 0.1, {css:{opacity:0}}, {css:{opacity:1}, onComplete:hide_err});
					lt+=500;
				}else{
					if($(".box-2 .b21").hasClass("b21_"+(num-1))){
						$(this).addClass("ll_right");
						$(".box-2 .b21").addClass("b21_"+num);
						if(num==4){
							$(".box-2").addClass("box-2-disabled");	
							clearInterval(timeout);
							pop_success();
						}
					}else{
						//增加5秒并报错
						TweenMax.fromTo($(this).children(".err"), 0.1, {css:{opacity:0}}, {css:{opacity:1}, onComplete:hide_err});
						lt+=500;
					}
				}
			}else{
				//增加5秒并报错
				TweenMax.fromTo($(this).children(".err"), 0.1, {css:{opacity:0}}, {css:{opacity:1}, onComplete:hide_err});
				lt+=500;
			}
		}
	})					   
})
//restart game
$(document).ready(function(){
	$(".box-3 .b35").tap(function(){
		$(".box-2 .b23").hide();
		$(".box-2 .b24").show();
		$(".box-2").removeClass("box-2-disabled");
		$(".box-2 .b21").removeClass("b21_1 b21_2 b21_3 b21_4");
		$(".box-2 ul li").removeClass("ll_right");
		$(".box-2 .b22-cover").removeClass("thide");
		$(".box-2 .b22-cover .cover-1,.box-2 .b22-cover .cover-2").show();
		lt=1;
		$(".box-2 .b23 .b231,.box-2 .b23 .b233").html("");
		clearInterval(timeout);
		paixu();
		window.setTimeout(function(){
			mySwiper.swipePrev(); 
		},500);				  
	})					   
})
//share
$(document).ready(function(){
	$(".box-3 .b37").tap(function(){
		$(".share-cover,.share-feature").show();						  
	})	
	$(".share-cover,.share-feature").tap(function(){
		$(".share-cover,.share-feature").hide();						  
	})	
})
//music
$(document).ready(function(){
	$(".stop-audio").tap(function(){
		var obj=document.getElementById("audio");
		var vol=document.getElementById("audio").volume*10;
		if(obj!=null&&!obj.paused){
			$(".stop-audio").addClass("stopped");
			var vol_down=setInterval(function(){
				vol=vol-1;
				document.getElementById("audio").volume=vol/10;
				if(vol==0){
					clearInterval(vol_down);
					obj.pause();
				}
			},120);

		}else{
			$(".stop-audio").removeClass("stopped");
			obj.play();	
			if(vol<=0){
				var vol_down=setInterval(function(){
				vol=vol+1;
				document.getElementById("audio").volume=vol/10;
				if(vol==10)	{
					clearInterval(vol_down);
				}
				},120);
			}
		}						  
	})					   
})
document.onreadystatechange = subSomething;//当页面加载状态改变的时候执行这个方法.
function subSomething()
{
	if(document.readyState == "complete"){ //当页面加载状态
      	$(".loading").hide();
      	setFirstPage();
		$(".up-icon").addClass("anim-0-0");
	}
}
//mv
$(document).ready(function(){
	$(".box-3 .b32").tap(function(){
		var obj=document.getElementById("audio");
		var vol=document.getElementById("audio").volume*10;
		$(".mv1").html('<div id="youkuplayer" style="width:100%;height:360px"></div>');
		player = new YKU.Player('youkuplayer',{
		styleid: '0',
		client_id: 'b33f668d05ce19ff',
		vid: 'XODYxNTcyNjky',
		autoplay: false
		});
		$(".mv").show();
		$(".close-mv").show();
		//player.playVideo();
		var vol_down=setInterval(function(){
				vol=vol-1;
				document.getElementById("audio").volume=vol/10;
				if(vol==0){
					clearInterval(vol_down);
					obj.pause();
				}
			},120);					 
	});					   
})
$(document).ready(function(){
	$(".close-mv").tap(function(){
		var obj=document.getElementById("audio");
		var vol=document.getElementById("audio").volume*10;
		$(".stop-audio").removeClass("stopped");	
		$(".mv").hide();
		$(".mv1").html("");
		$(".close-mv").hide();
		obj.play();	
		if(vol<=0){
				var vol_down=setInterval(function(){
				vol=vol+1;
				document.getElementById("audio").volume=vol/10;
				if(vol==10)	{
					clearInterval(vol_down);
				}
				},120);
			}
	});					   
})
$(document).ready(function(){
	$(".box-0 img").tap(function(){
		window.location.href="http://m.jd.com/product/20085989.html";						 
	})					   
})

$(document).ready(function(){
	$(".box-1").swipeUp(function(){
		var obj=document.getElementById("audio");
		if(obj!=null && obj.paused){
			$(".stop-audio").removeClass("stopped");
			obj.play();	
		}	
	})					   
})