export interface Event{
    /** 流水號id */
    id: string;
    /** 事件人員 */
    name: string;
    /** 事件說明 */
    title: string;
    /** 開始時間 */
    start: string;
    /** 結束時間 */
    end: string;
    /** 背景顏色 */
    backgroundColor: string;
    /** 事件備註 */
    memo: string;
}

export interface FamilySettings{
    /** 事件顏色 */
    color: string;
    /** 事件成員 */
    name: string;
}