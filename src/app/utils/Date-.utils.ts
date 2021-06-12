/**
 * 處理日期資訊
 */
export class DateUtils{
    public static getNowDateString(){
        let nowDateArr = new Date().toLocaleDateString().split('/');
        return nowDateArr.map(m => {
            if(m.length == 1){
                return '0' + m; 
            }
            return m;
        }).join('-');
    }
}