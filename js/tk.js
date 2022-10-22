function mm(){
        var words = 10086
        var m=prompt("请输入秘密：")
        if(m==words){
            
        }else{
            alert('错误，重新输入')
            return mm()
        }
    }
mm();