// <!-- Start
var messages = new Array();
messages[0] = "";
messages[1] = "---选择常见处理意见----"; //这里写入每个选项对应的说明文字
messages[2] = "同意！";
messages[3] = "请尽快办理！";
messages[4] = "不同意！";
messages[5] = "已阅！";
messages[6] = "拟同意。";
//根据需要，这里应该随着选项的改变而增减项目
function messageReveal() {
	var messageindex = document.messageForm.messagePick.selectedIndex;
	//取得当前下拉菜单选定项目的序号
	helpmsg = messages[messageindex];
	//根据序号取得当前选项的说明
	document.messageForm.messageField.value = helpmsg
	//将说明写进文框
}
// End -->
