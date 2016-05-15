#HTML 元素#

###一个标准的文档结构###

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>I am title</title>
        <link rel="stylesheet" type= "text/css" href="/style/common.css">
    </head>
    <body>
        <header></header>
        <section></section>
        <footer></footer>
    </body>
    </html>
    
>`<html>` 是根元素,包含网页内容的元素是放置在开始标签 `<html>` 和关闭标签 `</html>` 之间的。所有其他元素皆是此元素的后代。   

<br />
>`<head></head>`部分主要包含元数据（Metadata）也就是指页面的相关信息，可以在内部设置一些信息,影响到搜索引擎,例如`<meta name="robots" contect= "all|none|index|noindex|follow|nofollow">`,还有一些运用有利于更好的渲染页面。样式和脚本的元数据可以直接在网页里定义或者链接到有这些的其他文件。例如`<style></style>`, `<script></script>`,`<link />`, head 部分稍后会有详细介绍

<br />

>`<body></body>`是整个文档的躯干和血液,我们看到网页的ui几乎全是body标签以及其内部的子元素渲染出来的，这些元素能标识内容的宗旨或结构，
本人一般喜欢将body划分为上中下三部分,当然具体场景和个人习惯不同要另当别论

>标签编写规则(闭合,属性名小写)

###各式各样元素粉墨登场###
_此处为互动_

1.  块状元素
2.  行内元素
3.  html5 新增元素分析(form, audio, video, svg, canvas)
4.  属性（全局属性：id, class, title, lang, style,  hidden, draggable, data-*, contenteditable）
5.  特有属性（包括响应事件， form表单中input 事件, 验证属性）
6.  accept， action， alt， async， autocomplete，autofocus， autoplay， charset， cols， colspan， content，
disabled， download， enctype， for， height， http-equiv， loop， max，maxlength，method， open， pattern， placeholder， readonly，value，step，
step， target， width， type， src， selected， sizes， required， rows，
7.  互动`<input type = "submit">` 提交方式和用js的form.submit()有什么区别
8.  概括html5 简单而又强大，一个普遍的误解是HTML5能够在网页中提供动画效果，写一些游戏, 大家把它神话了, 这是不对的，是需要配合JavaScript和CSS。
9. 强大到提供个丰富多彩的接口, 包括pc， 移动端<br />
即时二维绘图: Canvas API：有关动态产出与渲染图形、图表、图像和动画的API<br/>
定时媒体播放<br />
HTML5音频与视频：HTML5里新增的元素，它们为开发者提供了一套通用的、集成的、脚本式的处理音频与视频的API，而无需安装任何插件
离线存储数据库（离线网络应用程序）<br />
编辑<br />
拖放<br />
跨文档通信<br />
通讯／网络<br />
Communication APIs：构建实时和跨源（cross-origin）通讯的两大基础： 跨文档通讯（Cross Document Messaging）与XMLHttpRequest Level 2。<br />
浏览历史管理<br />
MIME和协议进程时表头登记<br />
微数据<br />
网页存储<br />
Geolocation API：用户可共享地理位置，并在Web应用的协助下享用位置感知服务（location-aware services）
索引数据库API（Indexed Database API,以前为WebSimpleDB）<br />
文件API：处理文件上传和操纵文件<br />
目录和文件系统：这个API是为了满足客户端在没有好的数据库支持情况下存储要求<br />
文件写入：从网络应用程序向文件里写内容<br />
全屏API
requestAnimationFrame
web animation APi
page visibility api 多tab 下切换激活还是隐藏
所以说,html5 的到来将取代老牌flash 并不是没有道理

10. 案例分析<br />
`<progress></progress>`<br /> 
html5 `<form> <input />`, <br />
drag, <br />
`<a downlowd=""></a>`,<br />
 `<dl><dd></dd><dt></dt></dl>`,<br />
`<details></details>`,<br />
`<datalist></datalist>`,<br />
`<img src="../images/hero.png" srcset="../images/monster.png 2x">`<br />
`<audio></audio>`<br />
`<video></video>`<br />
`<svg></svg>`<br />

11. ending...

12. input file 控件在ios上获取文件时可以调用摄像头, 在android上调用不了, input 中file accect 属性
13. 在支持 srcset 的用户代理中，当使用 'w' 描述符时，src 属性会被忽略。当匹配了媒体条件 (min-width: 600px) 时，图像将宽 200px，否则宽 50vw（视图宽度的50%）。
14. 前端基础知识资源
https://developer.mozilla.org/zh-CN/docs/Web
http://www.w3school.com.cn/
