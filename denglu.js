$(document).ready(function () {
	
/*	此处是注册页面的的选项卡*/
	var $oDlzcz=$("#dlzcz div");
	var $oDlxq2_p1=$("#dlxq2_p1 a");
	$oDlxq2_p1.click(function(){
		var index=$(this).index();
		$oDlzcz.eq(index).css("display","block").siblings("div").css("display","none");
	})
	
	/*	此处是注册页面的正则*/
	/*手机号注册*/
	$("#zcyzm1").focus(function(){
		$(this).val("");
		$(this).css({"background-color":"#ffffff"})
	})
	$("#zcyzm1").blur(function(){
	
		var phone = /^(13|14|15|18)[0-9]{9}$/;
		if($(this).val()==""){
			$(".inpimg3_1").css({"display":"block"})
			$(".inpimg3_1").val("请输入手机号")
			
		}else if(phone.test($(this).val())){
			$(this).css({"background-color":"#faffbd"})
			$(".inpimg3_1").css({"display":"none"})
		}else{
			$(".inpimg3_1").css({"display":"block"})
			$(".inpimg3_1").val("请输入正确的手机号")
		}
	})
	
	/*验证码验证*/
	$("#zcyzm2-1").click(function(){
		var arr_code = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n',
		 'o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		var str = "";
		for(var i = 0 ; i < 4;i++){
		 	str+=arr_code[parseInt(Math.random()*arr_code.length)];
		 }
		$("#zcyzm2-1").val(str);
	})
		/*以下是一种封装的方法*/
	/*function getYzCode(){
		 var arr_code = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n',
		 'o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
		 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		 var str = "";
		 for(var i = 0 ; i < 4;i++){
		 	str+=arr_code[parseInt(Math.random()*arr_code.length)];
		 }
		 return str
	}*/
	
	$("#zcyzm2").focus(function(){
		$(this).val("");
		$(this).css({"background-color":"#ffffff"})
	})
	$("#zcyzm2").blur(function(){
		if($(this).val()==""){
			$(".inpimg4_1").css({"display":"block"})
			$(".inpimg4_1").val("请输入验证码")
			
		}else if($(this).val()==$("#zcyzm2-1").val()){
			$(this).css({"background-color":"#faffbd"})
			$(".inpimg4_1").css({"display":"none"})
			
		}else{
			$(".inpimg4_1").css({"display":"block"})
			$(".inpimg4_1").val("请输入正确的验证码")
		}
	})

/*手机验证码验证*/

$("#zcyzm3").focus(function(){
		$(this).val("");
		$(this).css({"background-color":"#ffffff"})
	})
	$("#zcyzm3").blur(function(){
		if($(this).val()==""){
			$(".inpimg5_1").css({"display":"block"})
			$(".inpimg5_1").val("请输入手机验证码")
			
		}else if($(this).val()!=""){
			$(this).css({"background-color":"#faffbd"})
				$(".inpimg5_1").css({"display":"none"})
		}
	})
	
	/*手机密码验证*/
	
	$("#zcyzm4").focus(function(){
		$(this).attr('placeholder','');
		
		$(this).css({"background-color":"#ffffff"})
	})
	$("#zcyzm4").blur(function(){
		var passworld = /^[a-z0-9]{9}$/;
		if($(this).val()==""){
			$(".inpimg6_1").css({"display":"block"})
			$(".inpimg6_1").val("请输入密码")
			
		}else if(passworld.test($(this).val())){
			$(this).css({"background-color":"#faffbd"})
				$(".inpimg6_1").css({"display":"none"})
		}
	})
	

/*用户协议验证*/

$("#inpimg7").click(function(){
		$("#zcym_p7").css({"background-color":"#e14958"})
})
/*
页面登录正则*/

/*手机号登录验证*/
$("#inpphone").focus(function(){
		$(this).val("");
		$(this).css({"background-color":"#ffffff"})
	})
	$("#inpphone").blur(function(){
	
		var phone = /^(13|14|15|18)[0-9]{9}$/;
		if($(this).val()==""){
			$(".inpimg1_1").css({"display":"block"})
			$(".inpimg1_1").val("请输入手机号")
			
		}else if(phone.test($(this).val())){
			$(this).css({"background-color":"#faffbd"})
			
		}else{
			$(".inpimg1_1").css({"display":"block"})
			$(".inpimg1_1").val("请输入正确的手机号")
		}
	})
	

/*向后台服务器提交注册的信息*/
	var apiDataType={
        userType:"userdata",
        productType:"productdata"
    }
	
	$("#zcym_p7").click(function(){
		var oPhoneNum=$("#zcyzm1").val();
		var oYzm=$("#zcyzm2").val();
		var oDxYzm=$("#zcyzm3").val();
		var oMM=$("#zcyzm4").val();
		var url="http://10.17.158.247:80/Product/CreateUpdateProduct_post";
		var objData={
			"oPhoneNum":oPhoneNum,
				"oYzm":oYzm,
				"oDxYzm":oDxYzm,
				"oMM":oMM,
		}
		$.ajax(url,{
			type:"post",
			data:{
				id:oPhoneNum,
                datajson:JSON.stringify(objData),
                type:apiDataType.userType,
			},
			success:function(data){
                alert(data);
           },
			
			})
		})
	
		
	$("#dl").click(function(){
		var oPhoneNum=$("#zcyzm1").val();
		var oMM=$("#zcyzm4").val();
        var url="http://10.17.158.247:80/Product/GetProductById_get";
        $.ajax(url,{
            data:{
                id:oPhoneNum,
                type:apiDataType.userType
            },
            success:function(udata){
                //udata
                var objUser=JSON.parse(udata.Data);
                if(objUser.oPhoneNum==$("#oPhoneNum").val()&&objUser.oMM==$("#oMM").val()){
                    alert("登录成功");
                }else{
                    alert("密码错误");
                }
            },
            dataType:"json"
        })
	})
	
	
	
	

	
	
	
	
	
})