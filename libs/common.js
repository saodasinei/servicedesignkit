const crypto=require('crypto');


function toDou(n){
	return n<10?'0'+n:''+n;
}

module.exports={
	
	MD5_SUFFIX:'dkafldsjfFJK^*£$3838BD&hjhJJHJbhbv;lcjkemnrqnkxln!£*934jdxb',
	
	md5:function (str){
		var obj=crypto.createHash('md5');

		obj.update(str);

		return obj.digest('hex');
	}

	// time2date:function (timestamp){
	// 	var oDate=new Date();
	// 	oDat.setTime(timestamp*1000);

	// 	return toDou(oDate.getHours())+':'+toDou(oDate.getMinutes())+':'+toDou(oDate.getSeconds())+
	// 	' '+toDou(oDate.getDate())+'/'+toDou(oDate.getMonth()+1)+'/'+oDate.getFUllYear();
	// }

};