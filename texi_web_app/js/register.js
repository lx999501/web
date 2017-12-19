
var id_upload,taxi_upload,driver_upload;
	$(function () {
//图片上传
		if (typeof (FileReader) === 'undefined'){
		result.innerHTML = "抱歉，你的浏览器不支持 FileReader，请使用现代浏览器操作！";
		}else{
			$(".id_upload").change(function(){
				var file = this.files[0];
			if (!/image\/\w+/.test(file.type)){
			  alert("只能选择图片");
			  return false;
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e){
				base64Code=this.result;
			  $("#img1").attr("src",base64Code);
					id_upload = base64Code;
			}
			})
			$(".taxi_upload").change(function(){
				var file = this.files[0];
			if (!/image\/\w+/.test(file.type)){
			  alert("只能选择图片");
			  return false;
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e){
				base64Code=this.result;
			  $("#img2").attr("src",base64Code);
			  taxi_upload = base64Code;
			}
			})
			$(".driver_upload").change(function(){
				var file = this.files[0];
			if (!/image\/\w+/.test(file.type)){
			  alert("只能选择图片");
			  return false;
			}
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e){
				base64Code=this.result;
			  $("#img3").attr("src",base64Code);
			  driver_upload = base64Code;
			}
			})
		}
//表单验证
	//失去焦点时触发
				$("input[name=username]").blur(function(){doUsername();});
				$("input[name=enname]").blur(function(){doEnname();});
				$("input[name=phone]").blur(function(){doPhone();});
				$("input[name=idcard]").blur(function(){doIdcard();});
				$("input[name=taxich]").blur(function(){doTaxiCH();});
				$("input[name=password]").blur(function(){doPassword();});
				$("input[name=repass]").blur(function(){doRepass();});
				$("input[name=taxiid]").blur(function(){doTaxiId();});
				$("input[name=driverid]").blur(function(){doDriverId();});
				$("input[name=email]").blur(function(){doEmail();});
				$("input[name=address]").blur(function(){doAddress();});
				function doUsername(){ //中文名称
					var t = $("input[name=username]");
					var span = t.prev();
					if(/^[\u4e00-\u9fa5]+$/.test(t.val())){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doEnname(){ //英文名表单验证
					var t = $("input[name=enname]");
					var span = t.prev();
					if( /\b([a-z]+(?: [a-z]+)*)\b(?!>)/.test(t.val())){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doPhone(){  //手机表单验证
					var t = $("input[name=phone]");
					var span = t.prev();
					if( /[0-9]/.test(t.val())){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doIdcard(){ //身份证验证
					var t = $("input[name=idcard]");
					var span = t.prev();
					if(t.val()){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doTaxiCH(){ //的士车行验证
					var t = $("input[name=taxich]");
					var span = t.prev();
					if(t.val()){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doAddress(){ //联络地址
					var t = $("input[name=address]");
					var span = t.prev();
					if(t.val()){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doEmail(){  //邮箱验证
					var t = $("input[name=email]");
					var span = t.prev();
					if(/^\w+@\w+(\.[a-zA-Z]{2,3})+$/.test(t.val())){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doPassword(){ //密码验证
					var t = $("input[name=password]");
					var span = t.prev();
					if(t.val()){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doRepass(){ //二次输入密码验证
					var t = $("input[name=repass]");
					var span = t.prev();
					if(t.val() == $("input[name=password]").val() && t.val() != ''){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 两次密码不一致").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doTaxiId(){ //的士证号验证
					var t = $("input[name=taxiid]");
					var span = t.prev();
					if(t.val()){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}
				function doDriverId(){  //驾驶证号验证
					var t = $("input[name=driverid]");
					var span = t.prev();
					if(t.val()){
						span.html("");
						t.css({border:"1px solid #eaeaea"})
						return t.val();
					}else{
						span.html(" 填寫有誤").css({color:"#a94442",fontSize:"12px"});
						t.css({border:"1px solid #a94442"})
						return false;
					}
				}

//提交
			function doTable(){
				var username  = doUsername()
				var enname = doEnname()
				var phone = doPhone()
				var idcard = doIdcard()
				var taxich = doTaxiCH()
				var password = doPassword()
				var repass = doRepass()
				var taxiid = doTaxiId()
				var driverid = doDriverId()
				var address = doAddress()
				var email = doEmail()
				if(username&&enname&&phone&&idcard&&taxich&&password&&repass&&taxiid&&driveridaddress&&email&&id_upload&&taxi_upload&&driver_upload){
						return true;
				}else{
					return false;
				}
			}

			$("#go_request").click(function(){
				var username  = doUsername()
				var enname = doEnname()
				var phone = doPhone()
				var idcard = doIdcard()
				var taxich = doTaxiCH()
				var password = doPassword()
				var repass = doRepass()
				var taxiid = doTaxiId()
				var driverid = doDriverId()
				var address = doAddress()
				var email = doEmail()
				if(doUsername()&&doEnname()&&doPhone()&&doEmail()&&doTaxiId()&&doRepass()&&doDriverId()&&doIdcard()&&doTaxiCH()&&taxi_upload&&id_upload&&driver_upload){
						$.ajax({
					  url:'http://47.52.43.78/im/user/taxiRegist',
					  type:'post',
					  data: {
							realname : doUsername(),
							name : doEnname(),
							phone : doPhone(),
							email : doEmail(),
							driverno : doTaxiId(),
							pwd : doRepass(),
							sjno : doDriverId(),
							zfno : doIdcard(),
							company : doTaxiCH(),
							texiz : taxi_upload,
							texis : id_upload,
							texisj : driver_upload
					  },
					  async : false, //默认为true 异步
					  error:function(data){
						console.log(data + 1);
					  },
					  success:function(data){
						console.log(data)
						if(data.status == 0){
							alert(data.message);
						}else{
							alert('成功')
						}
					  }
					});
				}else{
					alert("填寫有誤")
				}

			})
	});
