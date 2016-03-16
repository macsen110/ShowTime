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
        Widget.apply(this,arguments)
    }
    
    Modol.ATTRS = {
        boundingBox:{
            value:$('<div class="dialog" data-role="dialog"></div>')
        },
        isMask: {
            value: true
        }           
    }

    F.extend(Modol,Widget,{
        initialize: function () {
            var that = this;          
             that.$BoundBox  =  that.getBoundingBox()
             that.$BoundBox.addClass(that.getClassName());
        },
        renderUI: function () {
            
        },
        bindUI: function () {
            var that =this
            that.$BoundBox.on('click',function(e){
                 e.preventDefault()
                e.stopPropagation()
                that.trigger('closed');
            })

            that.on('closed',function(){
                that.destroy()
            })

        } 
    })    
    function Dialog() {
        Modol.apply(this,arguments)
    }
    
    Dialog.ATTRS = {
        className: {
            value: 'dialog-container'
        },
        widgetIconClassName: {
            value: 'widget-icon-1'  
        },
        
        isIcon: {
            value: true
        },
        content: {
            value: 'oylick',
            changeFn: function () {
                console.log(110)
            }
        },
        ClickBtn: {
            valueFn: function () {}
        }
    } 
    F.extend(Dialog, Modol,{
        initialize: function (op) {
            var that = this;
             that.$BoundBox  =  that.getBoundingBox()
             that.op =op;
        },
        renderUI: function () {
            var that = this; 
            that.callParent();
            var widgetIconClass = that.getWidgetIconClassName();
            if (that.getIsMask()) {
                that.$BoundBox.append('<div class="mask"></div>') 
            }         
            var isIcon = that.getIsIcon();
            var widgetHtml = '<div class="widget">'
                                    +(isIcon ? '<div class="widget-icon ' + (widgetIconClass ? widgetIconClass : '') +'"></div>' : '')
                                    +'<div class="main">'
                                        +'<div class="head"></div>'
                                        +'<div class="content">'+ that.getContent() +'</div>'
                                        +'<div class="foot"><botton class="btn-close"></button></div>'
                                    +'</div>'
                            +'</div>'
             that.$BoundBox.append(widgetHtml)
        },
        bindUI: function (obj) {
            var that = this; 
            that.callParent();
            var $mask =  that.$BoundBox.find('.mask');
            var $closeIcon =  that.$BoundBox.find('.btn-close');

                    
            $closeIcon.on('click', function (e) {
                e.preventDefault()
                e.stopPropagation()
                that.op.clickBtn && that.op.clickBtn()
                that.trigger('closed');
            });
            
        },
        // destructor: function () {
        //     var that = this;
        //     that.beforeClose();
        // }       
    }) 
    return {
        Dialog: Dialog
    }
})