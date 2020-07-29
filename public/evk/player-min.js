var userAgent = navigator.userAgent.toLowerCase();
var interval2;
var total = -1;
var step = 50;
var audio = null;
var pause = true;
var _volume = 60;
var _volume_step = 10;
var useFlash = false;
useFlash = true;
var canvas = null;
var ctx = null;
var divoffset_x = 0;
var divoffset_y = 0;
var json = [];
var recorderIndex = 0;
var imgPath = '';
var jsonPath = '';
var audioPath = '';
var pageIndex = [];
var currentPage = 1;
var clearIndex = [];
var autoStop = false;

function playerShow() {
  if (pause) return;
  if (json[recorderIndex]) {
    if (recorderIndex > pageIndex[(currentPage - 1)]) {
      currentPage++;
      $("#questionIMG").hide().attr('src', (typeof (imgPath[(currentPage - 1)]) != 'undefined' && imgPath[(currentPage - 1)]) ? imgPath[(currentPage - 1)] : '')
    }
    if (json[recorderIndex].action != "") {
      var actions = json[recorderIndex].action;
      window.eval(actions)
    }
    if (json[recorderIndex].move.x == 0 && json[recorderIndex].move.y == 0) {
      $("#mouseDiv").hide()
    } else {
      if ($("#mouseDiv").is(":hidden")) $("#mouseDiv").show();
      var toppos = 0;
      var leftpos = 0;
      leftpos = json[recorderIndex].move.x + divoffset_x;
      toppos = json[recorderIndex].move.y + divoffset_y;
      $("#mouseDiv").css({
        top: toppos,
        left: leftpos
      })
    }
    json[recorderIndex].flag = true;
    if (recorderIndex >= json.length) {
      $("#mouseDiv").hide();
      return
    }
  } else {
    $("#mouseDiv").hide()
  }
  recorderIndex++
}

function playerOnload() {
  var value = (useFlash) ? ((audio.getClip()) ? audio.getClip().duration : 0) : audio.duration;
  value = parseInt(value * 1000, 10);
  if (value > total) {
    total = value
  }
  $("#total_time").html(getTimeStr(total));
  $("#canvas-player-progress").slider({
    disabled: false,
    range: "min",
    min: 0,
    max: total,
    step: step,
    change: function (event, ui) {
      sliderAction(ui.value)
    }
  });
  $('#canvas-player-volume').slider({
    min: 0,
    max: (useFlash) ? 100 : 1,
    range: "min",
    step: (useFlash) ? _volume_step : _volume_step / 100,
    value: (useFlash) ? _volume : _volume / 100,
    change: function (event, ui) {
      var volume = ui.value;
      (useFlash) ? audio.setVolume(volume): audio.volume = volume;
      if (volume == 0) {
        $('#canvas-player-mute').addClass("muted").attr('muted', true).attr('title', '取消静音')
      } else {
        if ($('#canvas-player-mute').hasClass("muted")) {
          $('#canvas-player-mute').removeClass("muted").attr('muted', false).attr('title', '静音')
        }
      }
    }
  });
  (useFlash) ? audio.setVolume(_volume): audio.volume = _volume / 100;
  closeBg();
  $("#playBtn").removeAttr("disabled");
  $("#stopBtn").removeAttr("disabled");
  if (typeof (isAutoPlay) == "undefined" || isAutoPlay == true) {
    startPlay()
  }
}

function startPlay() {
  if (!audio) return;
  $("#mouseDiv").show();
  if (useFlash) {
    if (pause) {
      if (recorderIndex == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // time url 参数可指定初始播放的进度
        $("#canvas-player-progress").slider("option", "value", getUrlParam("inittime") || "0")
      }
      audio.play();
      audio.seek(parseInt($("#canvas-player-progress").slider("option", "value") / 1000, 10));
      playerTimeSpan();
      pause = false;
      $("#playBtn").addClass("pausebtn").attr("title", "暂停");
      $("#canvas-player-progress").slider("option", "disabled", true)
    } else {
      audio.stop();
      clearInterval(interval2);
      pause = true;
      $("#playBtn").removeClass("pausebtn").attr("title", "播放");
      $("#canvas-player-progress").slider("option", "disabled", false)
    }
  } else {
    if (audio.error) {
      return
    }
    if (pause) {
      if (recorderIndex == 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      audio.play();
      playerTimeSpan();
      pause = false;
      $("#playBtn").addClass("pausebtn").attr("title", "暂停");
      $("#canvas-player-progress").slider("option", "disabled", true)
    } else {
      audio.pause();
      clearInterval(interval2);
      pause = true;
      $("#playBtn").removeClass("pausebtn").attr("title", "播放");
      $("#canvas-player-progress").slider("option", "disabled", "")
    }
  }
}

function stopPlay() {
  if (!audio) return;
  $("#canvas-player-progress").slider("option", "value", parseInt(audio.currentTime, 10));
  clearInterval(interval2);
  pause = true;
  recorderIndex = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  $("#mouseDiv").hide();
  if (audio.error) {
    return
  }(useFlash) ? audio.stop(): audio.pause();
  (useFlash) ? 0: audio.currentTime = 0;
  $("#playBtn").removeClass("pausebtn").attr("title", "播放");
  $("#canvas-player-progress").slider("option", "disabled", "");
  $("#canvas-player-progress").slider("option", "value", 0);
  $("#questionIMG").parent().show()
}

function sliderAction(value) {
  if (pause) {
    recorderIndex = value / step;
    if (useFlash) {} else {
      audio.currentTime = parseInt(value / 1000, 10)
    }
  }
  $("#current_time").html(getTimeStr(value))
}

function getRecorderAction(json, index, clearIndex) {
  var start = 0;
  if (clearIndex) {
    for (var i = 0; i < clearIndex.length; i++) {
      if (parseInt(clearIndex[i], 10) > parseInt(index, 10)) {
        start = (clearIndex[i - 1] ? clearIndex[i - 1] : 0);
        break
      }
    }
  }
  var action = "";
  for (var i = start; i < index; i++) {
    if (json[i] && json[i].action != "") {
      action += (json[i].action)
    }
  }
  return action
}

function getRecorderAction1(json, start, index, clearIndex) {
  if (clearIndex) {
    for (var i = 0; i < clearIndex.length; i++) {
      if (parseInt(clearIndex[i], 10) > parseInt(index, 10)) {
        var _start = (clearIndex[i - 1] ? clearIndex[i - 1] : 0);
        if (parseInt(_start, 10) > parseInt(start, 10)) {
          start = _start
        }
        break
      }
    }
  }
  var action = "";
  for (var i = start; i < index; i++) {
    if (json[i] && json[i].action != "") {
      action += (json[i].action)
    }
  }
  return action
}

function adjustTime(a_time) {
  var start = recorderIndex;
  if (a_time) {
    recorderIndex = parseInt((a_time * 1000) / step, 10)
  }
  if (start > recorderIndex) {
    var temp = start;
    start = recorderIndex;
    recorderIndex = temp
  }
  var _action = "";
  _action = getRecorderAction1(json, start, recorderIndex, clearIndex);
  eval(_action);
  return recorderIndex * step
}

function playerTimeSpan() {
  currentPage = 1;
  for (var i = 0; i < pageIndex.length; i++) {
    currentPage = i + 1;
    if (recorderIndex < pageIndex[i]) {
      break
    }
  }
  if ($("#questionIMG").attr('src') != ((typeof (imgPath[(currentPage - 1)]) != 'undefined' && imgPath[(currentPage - 1)]) ? imgPath[(currentPage - 1)] : '')) {
    $("#questionIMG").hide().attr('src', (typeof (imgPath[(currentPage - 1)]) != 'undefined' && imgPath[(currentPage - 1)]) ? imgPath[(currentPage - 1)] : '')
  }
  var _action = "";
  _action = getRecorderAction(json, recorderIndex, clearIndex);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(_action);
  interval2 = setInterval(function () {
    var time = recorderIndex * step;
    if (userAgent.indexOf("android") == -1) {
      var a_time = (useFlash) ? audio.getTime() : audio.currentTime;
      var tt = ((time / 1000) - a_time);
      tt = tt * 1000;
      if (tt < (-50 * 10) || tt > 500) {
        if ((typeof (isAutoStop) != "undefined" && isAutoStop == true) && (tt < (-50 * 10))) {
          return stopPlay()
        }
        time = adjustTime(a_time)
      }
    } else {
      var a_time = (useFlash) ? audio.getTime() : audio.currentTime;
      var tt = ((time / 1000) - a_time);
      tt = tt * 1000;
      if (tt < (-50 * 10)) {
        if ((typeof (isAutoStop) != "undefined" && isAutoStop == true) && (tt < (-50 * 10))) {
          return stopPlay()
        }
        time = adjustTime(a_time)
      }
    }
    playerShow();
    $("#canvas-player-progress").slider("option", "value", parseInt(time, 10));
    sliderAction(time)
    if (time > total) {
      clearInterval(interval2);
      pause = true;
      $("#playBtn").removeClass("pausebtn").attr("title", "播放");
      $("#canvas-player-progress").slider("option", "disabled", "");
      $("#canvas-player-progress").slider("option", "value", total);
      recorderIndex = 0;
      (useFlash) ? audio.stop(): audio.pause();
      (useFlash) ? 0: audio.currentTime = 0
    }
  }, step)
}

function getPlayerSize(option, callback) {
  var jsonPath = (option.jsonPath != null && option.jsonPath != "") ? option.jsonPath : option.path + "/json.json";
  $.ajax({
    type: "GET",
    url: jsonPath,
    dataType: "text",
    success: function (res) {
      var iJson = [];
      if (typeof (decode) == "undefined" || decode) {
        iJson = (new decodeJson()).lzw_decode(res)
      }
      eval("iJson=[" + iJson + "]");
      var size = (typeof (iJson) != "undefined" && typeof (iJson[2]) != "undefined") ? iJson[2] : null;
      callback(size)
    },
    error: function () {
      callback(null)
    }
  })
}

function initData(option, callback) {
  imgPath = (option.imgPath != null && option.imgPath != "") ? option.imgPath : option.path + "/q.gif";
  imgPath = imgPath.split(",");
  $("#questionIMG").attr("src", imgPath[0]);
  jsonPath = (option.jsonPath != null && option.jsonPath != "") ? option.jsonPath : option.path + "/json.json";
  audioPath = (option.audioPath != null && option.audioPath != "") ? option.audioPath : "";
  canvas = document.getElementById(option.canvasId);
  $('#canvas-player-volume').slider({
    min: 0,
    max: 100,
    range: "min",
    step: _volume_step,
    value: _volume
  });
  $('#playBtn').bind('click', function (event) {
    startPlay();
    window.callParentWindowMethod('EVK_PLAYER_start_or_stop_event_handler', !pause);
    event.stopPropagation()
  });
  $('#stopBtn').bind('click', function (event) {
    stopPlay();
    window.callParentWindowMethod('EVK_PLAYER_cease_event_handler');
    event.stopPropagation()
  });
  if (typeof (option.isCross) != 'undefined' && option.isCross != null && parseInt(option.isCross, 10) == 1) {
    $.ajax({
      type: 'get',
      url: jsonPath,
      data: {},
      dataType: 'jsonp',
      callback: 'json_callback',
      success: function (res) {
        var iJson = [];
        if (res.status == "True" || res.status == true) {
          if (typeof (decode) == "undefined" || decode) {
            iJson = (new decodeJson()).lzw_decode(res.data)
          }
          eval("iJson=[" + iJson + "]");
          if ((typeof (option.success) != 'undefined')) {
            option.success(iJson)
          }
          var pre = 1;
          if ((typeof (option.pre) != 'undefined')) {
            pre = parseFloat(option.pre)
          }
          loadData(iJson, audioPath, pre)
        } else {
          callback()
        }
      },
      error: function () {
        callback()
      }
    })
  } else {
    $.ajax({
      type: "GET",
      url: jsonPath,
      dataType: "text",
      success: function (res) {
        var iJson = [];
        if (typeof (decode) == "undefined" || decode) {
          iJson = (new decodeJson()).lzw_decode(res)
        }
        eval("iJson=[" + iJson + "]");
        if ((typeof (option.success) != 'undefined')) {
          option.success(iJson)
        }
        var pre = 1;
        if ((typeof (option.pre) != 'undefined')) {
          pre = parseFloat(option.pre)
        }
        loadData(iJson, audioPath, pre)
      },
      error: function () {
        callback()
      }
    })
  }
}

function loadData(iJson, audioPath, pre) {

  ctx = canvas.getContext("2d");
  ctx.lineCap = 'butt';
  var fj = new formatJson(pre);
  json = fj.getJson(iJson[0], step);
  total = (iJson[1]) ? iJson[1] : fj.times;
  pageIndex = fj.cpIndex;
  clearIndex = fj.clearIndex;
  if (($.browser.msie && parseInt($.browser.version, 10) > 8) || $.browser.safari || userAgent.indexOf("android") != -1) {
    audio = document.getElementById("myMusic");
    var vidType = "";
    vidType = "audio/ogg";
    var codType = "vorbis";
    var flag = audio.canPlayType(vidType + ';codecs="' + codType + '"');
    var mediaType = "";
    switch (flag) {
      case "probably":
        flag = true;
        mediaType = "ogg";
        break;
      default:
        flag = false;
        mediaType = "mp3";
        break
    }
    mediaType = "mp3";
    audio.src = (audioPath == "") ? path + '/audio.' + mediaType : audioPath;
    useFlash = false;
    if ($.browser.safari && userAgent.indexOf("android") == -1) {
      setTimeout(function () {
        playerOnload()
      }, 500);
      $("#canvas-player-volume-control").hide()
    } else {
      audio.addEventListener("canplay", function () {

        playerOnload()
      })
    }
  } else {

    $.ajax({
      type: "GET",
      cache: false,
      url: flashPath,
      error: function () {
        closeBg();
        $("#playBtn").removeAttr("onclick");
        $("#stopBtn").removeAttr("onclick");
        eval(error_tip);
        return
      }
    });
    useFlash = true;
    if (!document.getElementById("myMusic2")) {
      $('<div />', {
        id: 'myMusic2',
        width: 0,
        height: 0
      }).appendTo("body");

      $("#total_time").html(getTimeStr(total));
      audio = flowplayer("myMusic2", flashPath, {
        clip: {
          url: ((audioPath == "") ? path + '/audio.mp3' : audioPath),
          autoPlay: false,
          autoBuffering: true,
          onStart: function () {
            this.stop()
          }
        },
        onError: function () {
          eval(error_tip)
        },
        onLoad: function () {
          setTimeout(function () {
            playerOnload()
          }, 500)
        },
        // debug: true
      });


      /* 解决火狐浏览器49+，flowplay onload等方法调用失败，致无法显示正确的视频时长及播放状态问题  start */
      try {
        function getBrowserInfo() {
          var agent = navigator.userAgent.toLowerCase();
          var firefox_regStr_ff = /firefox\/[\d.]+/gi;
          var chrome_regStr_ff = /chrome\/[\d.]+/gi;

          if (agent.indexOf("firefox") !== -1) {
            return agent.match(firefox_regStr_ff);
          }
          if (agent.indexOf("chrome") !== -1) {
            return agent.match(chrome_regStr_ff);
          }
        }
        var browser = getBrowserInfo()[0];
        var verinfo = parseInt((browser + "").replace(/[^0-9.]/ig, ""));

        if (browser.indexOf("firefox") !== -1) {
          if (verinfo > 50) {
            playerOnload();
          }
        } else if (browser.indexOf("chrome") !== -1) {
          /** chrome 内核 69 以上走不到 flowplayer 的 onLoad 函数内(flash 被禁用了) */
          if (verinfo > 69) {
            playerOnload();
          }
        }
        /* end */
      } catch(err) {}

    }
  }
  $('#canvas-player-mute').on('click', function (e) {
    var ismuted = $(this).attr('muted');
    if (ismuted == "true") {
      if (useFlash) {
        $('#canvas-player-volume').slider("value", _volume)
      } else {
        $('#canvas-player-volume').slider("value", _volume / 1000)
      }
      $(this).removeClass("muted").attr('muted', false).attr('title', '静音')
    } else {
      $('#canvas-player-volume').slider("value", 0);
      $(this).addClass("muted").attr('muted', true).attr('title', '取消静音')
    }
  })
}
formatJson = function (pre) {
  this.times = 0;
  this.cpIndex = [];
  this.clearIndex = [];
  var _interval = 0;
  var actionList = "";
  this.getJson = function (data, interval_time, isHtml5) {
    var json = [];
    if (data) {
      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        if (typeof (obj) == "undefined") {
          break
        }
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
            action += "ctx.stroke();"
          }
        } else if (type == 3) {
          if (typeof (isHtml5) != "undefined" && !isHtml5) {
            action = "gc.setColor('" + obj[1] + "');gc.setStroke(" + obj[2] + ");"
          } else {
            obj[2] = parseInt(obj[2], 10) + ((typeof (penLine) != "undefined") ? parseInt(penLine, 10) : 0);
            if (obj[2] < 1) {
              obj[2] = 1
            }
            if (obj[2] > 10) {
              obj[2] = 10
            }
            action = "ctx.strokeStyle = '" + obj[1] + "';ctx.lineWidth = " + obj[2] + ";"
          }
        } else if (type == 4) {
          if (typeof (isHtml5) != "undefined" && !isHtml5) {
            action = "gc.clear();"
          } else {
            action = "ctx.clearRect(0, 0, canvas.width, canvas.height);"
          }
          this.clearIndex[clearIndex.length] = json.length - 1
        } else if (type == 5) {
          if (typeof (isHtml5) != "undefined" && !isHtml5) {
            action = "gc.clear();"
          } else {
            action = "ctx.clearRect(0, 0, canvas.width, canvas.height);"
          }
          this.cpIndex[this.cpIndex.length] = json.length - 1;
          this.clearIndex[this.clearIndex.length] = json.length - 1
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
              if (typeof (isHtml5) != "undefined" && !isHtml5) json[json.length - 1].action = actionList + "gc.paint();";
              else json[json.length - 1].action = actionList;
              actionList = ""
            }
          }
          if (temp % interval_time != 0) {
            _interval = temp % interval_time
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
            if (typeof (isHtml5) != "undefined" && !isHtml5) json[json.length - 1].action = actionList + "gc.paint();";
            else json[json.length - 1].action = actionList;
            actionList = ""
          }
          _interval = 0
        } else {
          _interval = temp
        }
        if (action != "") {
          actionList = actionList + (action.replace("gc.paint();", ""))
        }
      }
    }
    this.cpIndex[this.cpIndex.length] = json.length;
    this.clearIndex[this.clearIndex.length] = json.length;
    return json
  }
};
decodeJson = function () {
  this.lzw_decode = function (str) {
    var dict = [];
    var data = (str + "").split("*");
    var rl = 1024 * 100;
    var count = data.length;
    for (var m = 0; m < count; m++) {
      var temp = data[m];
      var decode = lzw_decode_base(temp);
      dict[m] = decode
    }
    var _str = dict.join("");
    if (_str.indexOf("[") != -1 && _str.indexOf("[") != 0) {
      _str = _str.substring(_str.indexOf("["))
    }
    return _str
  };

  function lzw_decode_base(s) {
    var dict = {};
    var data = (s + "").split("");
    var currChar = data[0];
    var oldPhrase = currChar;
    var out = [currChar];
    var code = 256;
    var phrase;
    for (var i = 1; i < data.length; i++) {
      var currCode = data[i].charCodeAt(0);
      if (currCode < 256) {
        phrase = data[i]
      } else {
        phrase = dict[currCode] ? dict[currCode] : (oldPhrase + currChar)
      }
      out.push(phrase);
      currChar = phrase.charAt(0);
      dict[code] = oldPhrase + currChar;
      code++;
      oldPhrase = phrase
    }
    return out.join("")
  }
}
