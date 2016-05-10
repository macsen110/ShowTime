#Html 涵盖知识讲解#
##  一. web标准##
###百度百科对于web 标准是这样定义的###
>WEB标准不是某一个标准，而是一系列标准的集合。网页主要由三部分组成：结构（Structure）、表现（Presentation）和行为（Behavior）。对应的标准也分三方面：结构化标准语言主要包括XHTML和XML，表现标准语言主要包括CSS，行为标准主要包括对象模型（如W3C DOM）、ECMAScript等。

##首先探讨下几个词, W3C, XML、 XHTML、  HTML   ##

>W3C    
万维网联盟（World Wide Web Consortium，W3C），又称W3C理事会。  1994年10月在麻省理工学院计算机科学实验室成立。创建者是互联网的发明者蒂姆·伯纳斯-李。  
为解决web应用中不同平台、技术和开发者带来的不兼容问题，保障Web信息的顺利和完整流通，万维网联盟制定了一系列标准并督促Web应用开发者和内容提供者遵循这些标准。标准的内容包括使用语言的规范，开发中使用的导则和解释引擎的行为等等。W3C也制定了包括XML和CSS等的众多影响深远的标准规范。  

<br>
>XML
可扩展标记语言（英语：eXtensible Markup Language，简称: XML），是一种标记语言。标记指计算机所能理解的信息符号，通过此种标记，计算机之间可以处理包含各种信息的文章等。  
XML是从1995年开始有其雏形，并向W3C（万维网联盟）提案，而在1998年二月发布为W3C的标准（XML1.0）.  
*XML设计用来传送及携带数据信息，不用来表现或展示数据，HTML语言则用来表现数据，所以XML用途的焦点是它说明数据是什么，以及携带数据信息。*   

demo:

    <note>
        <to>George</to>
        <from>John</from>
        <heading>Reminder</heading>
        <body>Don't forget the meeting!</body>
    </note>


>HTML   
超文本标记语言 (HTML, HyperText Markup Language) ，是构成网页的最基础的内容，用来创建并以可视化方式来呈现网页。它确定了一个网页的内容而不是功能。
网页浏览器可以读取HTML文件，并将其渲染成可视化网页。    


<br />
>XHTML
可扩展超文本标记语言（英语：eXtensible HyperText Markup Language，XHTML），是一种标记语言，表现方式与超文本标记语言（HTML）类似，不过语法上更加严格。   
HTML和XML结合，使用XML 1.0改写自HTML 4.01的独立语言。它不再被作为单独标准开发。

###下面我们交流下网页的三大要素之一  结构层###

一.  文档类型声明（doctype声明）应被置于HTML文档的开头，标签之前。doctype并不是一个HTML标签；它只是一个指令，告知浏览器当前页面是遵循哪种标记语言编写的。   

HTML 4.01严格版（Strict）
><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">  


HTML 4.01过渡版（Transitional）

本DTD包含所有HTML元素及属性，包括那些用于表现用途的和被弃用的（例如font）。它不支持框架集。

><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">


 HTML 4.01框架集（Frameset）
本DTD在HTML 4.01过渡版基础之上，增加了对框架集的支持。

><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

HTML5
><!DOCTYPE html>




