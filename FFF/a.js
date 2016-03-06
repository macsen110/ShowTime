/**
 * Created by wudi on 15/11/30.
 */
define(['zepto', 'FFF'],function ($, FFF) {
    var F = FFF.FFF;   
    var Widget = F.Widget; 
    F.on('dialogClose', function ($dom) {
        $dom.remove()
    })
     
    function Modol(){
        //Widget.apply(this,arguments)
    }
    
    Modol.ATTRS = {
        boundingBox:{
            value:$('<div class="box">aaa</div>')
        },
        className: {
            value: 'dialog-container'
        },
        isMask: {
            value: true
        },
        isIcon: {
            value: true
        },
        title: {
            value: '110'
        },
        content: {
            value: ''
        }
             
    }

    F.extend(Modol,Widget,{
        initialize: function () {
            var that = this;          
            that.getBoundingBox().addClass(that.getClassName());
                          
        },
        renderUI: function () {
            
        },
        bindUI: function () {
            
        } 
    })    
    function Dialog() {
        Modol.apply(this,arguments)
    }
    
    Dialog.ATTRS = {
           
    } 
    F.extend(Dialog, Modol,{
        initialize: function () {
           // this.subboundingBox = this.getBoundingBox()
        },
        renderUI: function () {
            var that = this; 
            var $widget = that.getBoundingBox();
            if (that.getIsMask()) {
               $widget.append('<div class="mask">mask</div>') 
            }         
            var isIcon = that.getIsIcon();
            var widgetHtml = '<div class="widget">'
                                    +'<div class="head"></div>'
                                    +'<div class="content">'+ that.getContent() +'</div>'
                                    +'<div class="foot"></div>'
                                    +(isIcon ? '<div class="icon">icon</div>' : '')
                            +'</div>'
            $widget.append(widgetHtml)
        },
        bindUI: function () {
            var that = this; 
            var $widget = that.getBoundingBox();
            var $mask = $widget.find('.mask');
            var $closeIcon = $widget.find('.close-icon');
            $mask.on('click', function () {
                F.trigger('dialogClose', $widget)
            })         
            $closeIcon.on('click', function () {
                F.trigger('dialogClose', $widget)
            })
        } 
        
       
    }) 
    return {
        Dialog: Dialog
    }
})