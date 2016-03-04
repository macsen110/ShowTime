/**
 * Created by wudi on 15/11/30.
 */
define(['zepto', 'FFF'],function ($, FFF) {
    var F = FFF.FFF;   
    var Widget = F.Widget; 
    F.on('dialogClose', function (cls) {
        $('.' + cls).remove()
    })   
    function Modol(){
        Widget.apply(this,arguments)
    }
    
    Modol.ATTRS = {
        boundingBox:{
            value:$('<div class="box">aaa</div>')
        },
        className: {
            value: 'dialog-container'
        },
        title: {
            value: '110'
        },
        isMask: {
            value: true
        },
        isIcon: {
            value: true
        }     
    }

    F.extend(Modol,Widget,{
        initialize: function () {
            var that = this;          
            //this.prevboundingBox =this.getBoundingBox();            
            that.getBoundingBox().addClass(that.getClassName());
            if (that.getIsMask()) {
               that.getBoundingBox().append('<div class="mask">sdf</div>') 
            }
            var $mask = that.getBoundingBox().find('.mask');
            $mask.on('click', function () {
                F.trigger('dialogClose', that.getClassName())
            })              
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
        isMask: {
            value: true
        }    
    } 
    F.extend(Dialog, Modol,{
        initialize: function () {
           // this.subboundingBox = this.getBoundingBox()
        },
        renderUI: function () {
            var that = this;           
            var isIcon = that.getIsIcon();
            var widgetHtml = '<div class="widget">'
                                    +'<div class="head"></div>'
                                    +'<div class="content">ds</div>'
                                    +'<div class="foot"></div>'
                                    +(isIcon ? '<div class="icon"></div>' : '')
                            +'</div>'
            that.getBoundingBox().append(widgetHtml)
        },
        bindUI: function () {
            var that = this;         
            that.getBoundingBox().on('click', function () {
                F.trigger('dialogClose', that.getClassName())
            })
        } 
        
       
    }) 
    return {
        Dialog: Dialog
    }
})