
//提示错误
var error_tip = "console.warn('加载出现问题，请刷新重试');";//'加载出现问题，请刷新重试'
var flashPath = "flash/flowplayer-3.2.15.swf";
flashPath = "flash/flowplayer-3.2.15.swf";

var decode = true;//是否解密
var isAutoStop = false;//是否在切换浏览器标签页时自动停止播放，true=自动停止,false=不自动停止
//isAutoStop = true;
var isAutoPlay = true;//是否自动播放

function getTimeStr(value){
	var v = value;
	var m = parseInt((v/60000),10);
	var s = parseInt((v%60000)/1000,10);
	
	// 注释掉 - 因为 1分59秒视频 会显示 1分60秒 的情况
	// if(s<((v%60000)/1000))
	// 	s = s + 1;
	
	if(parseInt(m,10)<10){
		m = "0"+m;
	}
	if(parseInt(s,10)<10){
		s = "0"+s;
	}

	return m+"："+s;
}

//显示灰色JS遮罩层
function showBg(ct,content){
//	loading('题目正在加载，请稍后...');
	var bH=$("body").height();
	var bW=$("body").width()+16;
	bH = $(window).height();
	var objWH=getObjWh(ct);
	$("#fullbg").css({width:bW,height:bH,display:"block"});
	var tbT=objWH.split("|")[0]+"px";
	var tbL=objWH.split("|")[1]+"px";
	//$("#"+ct).css({top:tbT,left:tbL,display:"block","z-index":99});
	//$("#"+content).html("<div style='text-align:center'>正在加载，请稍后...</div>");
	$(window).scroll(function(){resetBg()});
	$(window).resize(function(){resetBg()});
}
function getObjWh(obj){
	var st=document.documentElement.scrollTop;//滚动条距顶部的距离
	var sl=document.documentElement.scrollLeft;//滚动条距左边的距离
	var ch=document.documentElement.clientHeight;//屏幕的高度
	var cw=document.documentElement.clientWidth;//屏幕的宽度
	var objH=$("#"+obj).height();//浮动对象的高度
	var objW=$("#"+obj).width();//浮动对象的宽度
	var objT=Number(st)+(Number(ch)-Number(objH))/2-50;
	var objL=Number(sl)+(Number(cw)-Number(objW))/2;
	return objT+"|"+objL;
}
function resetBg(){
	var fullbg=$("#fullbg").css("display");
	if(fullbg=="block"){
		var bH2=$("body").height();
		var bW2=$("body").width()+16;
		$("#fullbg").css({width:bW2,height:bH2});
		var objV=getObjWh("dialog");
		var tbT=objV.split("|")[0]+"px";
		var tbL=objV.split("|")[1]+"px";
		$("#dialog").css({top:tbT,left:tbL});
	}
}

//关闭灰色JS遮罩层和操作窗口
function closeBg(){
	$("#fullbg").css("display","none");
	$("#dialog").css("display","none");

//	loading({text:'题目加载完成',option:'close'});
}

//替换字符串中的变量 {\d}
if (!String.prototype.format) {
	String.prototype.format = function() {
		var result = String(this);
		var args = new Array();
		for (i = 0; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		return result.replace(/\{(\d+)\}/g, function(m, i){
          return args[i];
      });
	 }
}

var G_RoleAuth = {
	controlGraderIcon : function(response) {
        var $qs = $('#task_reslut_question_0') // 按题批阅
        var $stu = $('#task_reslut_student_0') // 按人批阅
        var $monitor = $('#monitor_onlineTask_2') // 作业监控
        var $report = $('#task_report_2') // 分析报告
        var status = (response.specialRole || {}).status || 0
        var qs_and_stu_show = (status == 0 || status == 1) ? 'show' : 'hide'
        // var monitor_and_report_show = (status == 0 || status == 2 || status == -2) ? 'show' : 'hide'


		// if (response.specialRole && response.specialRole.status > 0) {
		// 	$("#delete_onlineTask_2, #header-onlineTask-2 #lblCheckAll").attr('style', response.specialRole.show)
		// } else {
		// 	$("#task_reslut_question_0,#task_reslut_student_0, #delete_onlineTask_2, #header-onlineTask-2 #lblCheckAll").css('display', 'block')
        // }

        if (status > 0) {
            $("#delete_onlineTask_2, #header-onlineTask-2 #lblCheckAll").css('display', 'none')
        }
        else {
            $("#delete_onlineTask_2, #header-onlineTask-2 #lblCheckAll").css('display', 'block')
        }

        $qs[qs_and_stu_show]()
        $stu[qs_and_stu_show]()
        // $monitor[monitor_and_report_show]()
        // $report[monitor_and_report_show]()
	}
}
