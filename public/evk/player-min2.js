pre = 1
// 针对形状（type = 6），对坐标点做缩小的计算
function calPre(data){
    for(var i = 2; i < data.length; i++){
        data[i] = parseInt(data[i]) * pre;
    }
}
formatJson = function () {
    this.times = 0;
    this.cpIndex = [];
    this.clearIndex = [];
    var _interval = 0;
    var actionList = "";
    this.getJson = function (data, interval_time, isHtml5) {
        var json = [];
        var clr, siz;
        if (data) {
            // 对data的数据进行转换
            if(data[0].length <= 4){
                data[0][4] = 0; data[0][5] = 8;
                for(var c = 2; c < data.length -1; c++){
                    if(data[c][0] != 6 && data[c][0] != 3){
                        var dataLength = data[c-1].length;
                        data[c].splice(1, 0, data[c-1][dataLength-3],data[c-1][dataLength-2]);
                        var lengthC = data[c].length;
                        var lengthCP = data[c+1].length;
                        data[c][lengthC-1] = data[c+1][lengthCP-1] - data[c][lengthC-1];
                        (data[c][lengthC-1] < 0) ? data[c][lengthC-1] = 0 : data[c][lengthC-1]=data[c][lengthC-1];
                    // 重写data[c] == 3 的转换规则
                    }else if(data[c][0] == 3){
                        data[c].splice(3,0,data[c-1][dataLength-3],data[c-1][dataLength-2]);
                        data[c][lengthC-1] = data[c+1][lengthCP-1] - data[c][lengthC-1];
                        (data[c][lengthC-1] < 0) ? data[c][lengthC-1] = 0 : data[c][lengthC-1]=data[c][lengthC-1];
                    }
                }
                data.splice(1, 1);
            }
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                if (!obj) continue;
                var type = obj[0];
                var action = "";
                var move = "";
                if (type == 1) {
                    obj[1] = obj[1] * pre;
                    obj[2] = obj[2] * pre;
                    obj[3] = obj[3] * pre;
                    obj[4] = obj[4] * pre
                } else if (type == 2) {
                    obj[1] = obj[1] * pre;
                    obj[2] = obj[2] * pre;
                    obj[3] = obj[3] * pre;
                    obj[4] = obj[4] * pre;
                    if (typeof (isHtml5) != "undefined" && !isHtml5) {
                        action = "gc.drawLine.apply(gc,[" + obj[1] + "," + obj[2] + "," + obj[3] + "," + obj[4] + "]);"
                    } else {
                        action = "ctx.beginPath();";
                        action += "ctx.moveTo(" + obj[1] + "," + obj[2] + ");";
                        action += "ctx.quadraticCurveTo(" + obj[1] + "," + obj[2] + "," + obj[3] + "," + obj[4] + ");";
                        action += "ctx.stroke();";
                    }
                } else if (type == 3) {
                    if (typeof (isHtml5) != "undefined" && !isHtml5) {
                        action = "gc.setColor('" + obj[1] + "');gc.setStroke(" + obj[2] + ");";
                    } else {
                        clr = obj[1];
                        siz = obj[2];
                        action = "ctx.strokeStyle = '" + obj[1] + "';ctx.lineWidth = " + obj[2] + ";";
                    }
                } else if (type == 4) {
                    if (typeof (isHtml5) != "undefined" && !isHtml5) {
                        action = "gc.clear();"
                    } else {
                        action = "ctx.clearRect(0, 0, canvas.width, canvas.height);";
                    }
                    this.clearIndex[clearIndex.length] = json.length - 1
                } else if (type == 5) {
                    if (typeof (isHtml5) != "undefined" && !isHtml5) {
                        action = "gc.clear();"
                    } else {
                        action = "ctx.clearRect(0, 0, canvas.width, canvas.height);";
                    }
                    this.cpIndex[this.cpIndex.length] = json.length - 1;
                    this.clearIndex[this.clearIndex.length] = json.length - 1;
                }
                    //形状
                else if (type == 6) {
                    if (obj[1] == 1) {
                        calPre(obj.length,obj);
                        if (typeof (isHtml5) != "undefined" && !isHtml5) {
                            // action = "gc.drawLine.apply(gc,[" + obj[2] + "," + obj[3] + "," + obj[4] + "," + obj[5] + "]);"
                        } else {
                            action += "ctx.strokeStyle = '#ff0000';ctx.lineWidth =1;";
                            action += "ctx.beginPath();";
                            action += "ctx.moveTo(" + obj[2] + "," + obj[3] + ");";
                            action += "ctx.lineTo(" + obj[4] + "," + obj[5] + ");";
                            action += "ctx.stroke();";
                            action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";

                        }
                    } //Line
                    else if (obj[1] == 2) {
                        calPre(obj);
                        if (typeof (isHtml5) != "undefined" && !isHtml5) {
                            //action = "gc.drawLine.apply(gc,[" + obj[2] + "," + obj[3] + "," + obj[4] + "," + obj[5] + "]);"
                        } else {
                            action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
                            action += "ctx.beginPath();";
                            action += "ctx.moveTo(" + obj[2] + "," + obj[3] + ");";
                            action += "ctx.lineTo(" + obj[4] + "," + obj[5] + ");";
                            action += "ctx.lineTo(" + obj[6] + "," + obj[7] + ");";
                            action += "ctx.closePath();";
                            action += "ctx.stroke();";
                            action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                        }

                    }//Triangle
                    else if (obj[1] == 3) {
                        calPre(obj);
                        //strokeRect(x,y,width,height)
                        if (typeof (isHtml5) != "undefined" && !isHtml5) {

                        } else {
                            action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
                            action += "ctx.beginPath();";
                            action += "ctx.moveTo(" + obj[2] + "," + obj[3] + ");";
                            var _w = Math.abs(obj[4] - obj[2]);
                            var _h = Math.abs(obj[5] - obj[3]);
                            action += "ctx.strokeRect(" + obj[2] + "," + obj[3] + "," + _w + "," + _h + ");";
                            action += "ctx.stroke();";
                            action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                        }

                    }//Rectangle
                    else if (obj[1] == 4) {
                        calPre(obj);
                        if (typeof (isHtml5) != "undefined" && !isHtml5) {

                        }else{
                            var x = (obj[2] + obj[4]) / 2;
                            var y = (obj[3] + obj[5]) / 2;
                            var a = Math.abs(obj[4] - obj[2]) / 2;
                            var b = Math.abs(obj[5] - obj[3]) / 2;
                            action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
                            //action += "ctx.beginPath();";
                            //action += "ctx.moveTo(" + obj[2] + a + "," + obj[3] + ");";
                            // var step = (a > b) ? (1 / a) : (1 / b);
                            // for (var i = 0; i < 2 * Math.PI; i += step) {
                            //     //参数方程为x = a * cos(i), y = b * sin(i)，
                            //     //参数为i，表示度数（弧度）
                            //     action += "ctx.lineTo(" + (centerX + a * Math.cos(i)) + "," + (centerY + b * Math.sin(i)) + ");";
                            // }
                            //action += "ctx.arc("+centerX+","+centerY+","+a+","+0+","+2*Math.PI+");";
                            //action += "ctx.closePath();";

                            //使用三次贝塞尔曲线模拟椭圆
                            var k = .5522848,
                               ox = a * k, // 水平控制点偏移量
                               oy = b * k; // 垂直控制点偏移量

                            action += "ctx.beginPath();";
                               //从椭圆的左端点开始顺时针绘制四条三次贝塞尔曲线
                            action += "ctx.moveTo("+(x - a)+","+ y +");";
                            action += "ctx.bezierCurveTo("+(x-a)+","+(y-oy)+","+(x-ox)+","+(y-b)+","+(x)+","+(y-b)+");";
                            action += "ctx.bezierCurveTo("+(x + ox)+","+(y - b)+","+(x + a)+","+(y - oy)+","+(x + a)+","+(y)+");";
                            action += "ctx.bezierCurveTo("+(x + a)+","+(y + oy)+","+(x + ox)+","+(y + b)+","+(x)+","+(y + b)+");";
                            action += "ctx.bezierCurveTo("+(x - ox)+","+(y + b)+","+(x - a)+","+(y + oy)+","+(x - a)+","+(y)+");";
                            action += "ctx.closePath();";
                            action += "ctx.stroke();";
                            action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                        }


                    }//Ellipse
                    else if (obj[1] == 5) {
                        calPre(obj);
                    	if (typeof (isHtml5) != "undefined" && !isHtml5){

                    	}else{
                    		//由于直接给出5个顶点的坐标，因此直接通过坐标点，进行绘制
                    		action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
                    		action += "ctx.beginPath();";
                    		action += "ctx.lineTo(" + obj[2]  + "," + obj[3]  + ");";
                    		action += "ctx.lineTo(" + obj[4]  + "," + obj[5]  + ");";
                    		action += "ctx.lineTo(" + obj[8]  + "," + obj[9]  + ");";
                    		action += "ctx.lineTo(" + obj[10] + "," + obj[11] + ");";
                    		action += "ctx.lineTo(" + obj[6]  + "," + obj[7]  + ");";
                    		action += "ctx.closePath();";
                    		action += "ctx.stroke();";
                    		action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                    	}

                    }//Pentagon
                    else if (obj[1] == 6) {
                        calPre(obj);
                    	if (typeof (isHtml5) != "undefined" && !isHtml5){

                    	}else{
	                    	//由于直接给出6个顶点的坐标，因此直接通过坐标点，进行绘制
	                    	action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
	                    	action += "ctx.beginPath();";
							action += "ctx.lineTo(" + obj[2]  + "," + obj[3]  + ");";
							action += "ctx.lineTo(" + obj[4]  + "," + obj[5]  + ");";
							action += "ctx.lineTo(" + obj[8]  + "," + obj[9]  + ");";
							action += "ctx.lineTo(" + obj[12] + "," + obj[13] + ");";
							action += "ctx.lineTo(" + obj[10] + "," + obj[11] + ");";
							action += "ctx.lineTo(" + obj[6]  + "," + obj[7]  + ");";
							action += "ctx.closePath();";
	                    	action += "ctx.stroke();";
	                    	action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                    	}

                    }//Hexagon
                    else if (obj[1] == 7) {
                        calPre(obj);
                    	if (typeof (isHtml5) != "undefined" && !isHtml5){

                    	}else{
                    		// 开始绘制圆角矩形
                    		// get rectangle width and height
                    		var rectWidth = Math.abs( obj[4] - obj[2] );
                    		var rectHeight = Math.abs( obj[5] - obj[3] );
                    		var rectRadius = 20;  // 自定义圆角的半径
                    		action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
                    		action += "ctx.beginPath();";
                    		// 移至起始点
                    		action += "ctx.moveTo(" + (obj[2] + rectRadius) + "," + obj[3] + ");";
                    		action += "ctx.arcTo(" + (obj[2] + rectWidth) + "," + obj[3] + "," + (obj[2] + rectWidth) + "," + (obj[3] + rectHeight) + ","  + rectRadius + ");";
                    		action += "ctx.arcTo(" + (obj[2] + rectWidth) + "," + (obj[3] + rectHeight) + "," + obj[2] + "," + (obj[3] + rectHeight) + ","  + rectRadius + ");";
                    		action += "ctx.arcTo(" + obj[2] + "," + (obj[3] + rectHeight) + "," + obj[2] + "," + obj[3] + ","  + rectRadius + ");";
                    		action += "ctx.arcTo(" + obj[2] + "," + obj[3] + "," + (obj[2] + rectWidth) + "," + obj[3] + ","  + rectRadius + ");";
                    		action += "ctx.closePath();";
                    		action += "ctx.stroke();"
                    		action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                    	}
                    }//RoundedRectangle
                    else if (obj[1] == 8) {
                        calPre(obj);
                    	if (typeof (isHtml5) != "undefined" && !isHtml5){

                    	}else{
                    		// 开始绘制平行四边形，由于顺时针给出了4个顶点的坐标，因此直接绘制
                    		action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
                    		action += "ctx.beginPath();";
                    		action += "ctx.lineTo( " + obj[2] + "," + obj[3] + " );";
                    		action += "ctx.lineTo( " + obj[4] + "," + obj[5] + " );";
                    		action += "ctx.lineTo( " + obj[6] + "," + obj[7] + " );";
                    		action += "ctx.lineTo( " + obj[8] + "," + obj[9] + " );";
                    		action += "ctx.closePath();";
                    		action += "ctx.stroke();";
                    		action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                    	}


                    }//Parallelogram
                    else if (obj[1] == 9) {
                        calPre(obj);
                        if (typeof (isHtml5) != "undefined" && !isHtml5) {
                            //action = "gc.drawLine.apply(gc,[" + obj[2] + "," + obj[3] + "," + obj[4] + "," + obj[5] + "]);"
                        } else {
                            action += "ctx .strokeStyle = '#f00';ctx.lineWidth =1;";
                            action += "ctx.beginPath();";
                            action += "ctx.moveTo(" + obj[2] + "," + obj[3] + ");";
                            action += "ctx.lineTo(" + obj[4] + "," + obj[5] + ");";
                            action += "ctx.lineTo(" + obj[6] + "," + obj[7] + ");";
                            action += "ctx.closePath();";
                            action += "ctx.stroke();";
                            action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                        }
                    }//RightAngledTriangle
                    else if (obj[1] == 10) {
                        calPre(obj);
                        if (typeof (isHtml5) != "undefined" && !isHtml5) {
                            //action = "gc.drawLine.apply(gc,[" + obj[2] + "," + obj[3] + "," + obj[4] + "," + obj[5] + "]);"
                        } else {
                            action += "ctx.strokeStyle = '#f00';ctx.lineWidth =1;";
                            action += "ctx.beginPath();";
                            action += "ctx.moveTo(" + obj[2] + "," + obj[3] + ");";
                            action += "ctx.bezierCurveTo(" + obj[2] + "," + obj[3] + "," + obj[4] + "," + obj[5] + "," + obj[6] + "," + obj[7] + ");";
                            action += "ctx.stroke();";
                            action += "ctx.strokeStyle ='" + clr + "';ctx.lineWidth =" + siz + ";";
                        }
                    }//Parabola
                }
                move = {
                    "x": obj[3],
                    "y": obj[4]
                };
                var interval = obj[5];
                var temp = _interval + interval;
                this.times += interval;
                if (temp > interval_time) {
                    var l = parseInt((temp / interval_time), 10);
                    for (var j = 0; j < l; j++) {
                        json[json.length] = {
                            "action": action,
                            "move": move,
                            "interval": interval,
                            "flag": false
                        };
                        json[json.length - 1].interval = interval_time;
                        if (actionList != "") {
                            if (typeof (isHtml5) != "undefined" && !isHtml5)
                                json[json.length - 1].action = actionList + "gc.paint();";
                            else
                                json[json.length - 1].action = actionList;
                            actionList = "";
                        }
                    }
                    if (temp % interval_time != 0) {
                        _interval = temp % interval_time;
                    }
                } else if (temp == interval_time) {
                    json[json.length] = {
                        "action": action,
                        "move": move,
                        "interval": interval,
                        "flag": false
                    };
                    json[json.length - 1].interval = interval_time;
                    if (actionList != "") {
                        if (typeof (isHtml5) != "undefined" && !isHtml5)
                            json[json.length - 1].action = actionList + "gc.paint();";
                        else
                            json[json.length - 1].action = actionList;
                        actionList = "";
                    }
                    _interval = 0;
                } else {
                    _interval = temp;
                }
                if (action != "") {
                    actionList = actionList + (action.replace("gc.paint();", ""));
                }
            }
        }
        this.cpIndex[this.cpIndex.length] = json.length;
        this.clearIndex[this.clearIndex.length] = json.length;
        return json;
    }
};
