/**
 * Created by yangbo on 2016/3/4.
 */
define('modal',['zepto','FFF'],function($,FFF){
    var F = FFF.FFF;
    var Widget = F.Widget;
    function Modal(){
        Widget.apply(this,arguments);
    }

    Modal.ATTRS = {
        boundingBox : {
            value : $('<div class="modal"></div>')
        },
        bgDisplay : {
            value : 'block'
        }
    };

    function Tip(){
        Modal.apply(this,arguments);
    }
    Tip.ATTRS = {
        btnClose : {
            value : $(
                '<button value="close"/>'
            )
        },
        btnCloseDisplay : {
            value : 'block'
        },
        icon : {
            value : '<img src="" />'
        },
        iconDisplay : {
            value : 'block'
        }
    };
    F.extend(Modal,Widget,{
        renderUI:function(){
            console.log(110);
            var that = this;
            this.getBoundingBox().css(
                {
                    position : 'absolute',
                    left : 0,
                    right : 0,
                    top : 0,
                    bottom : 0,
                    margin : 'auto',
                    backgroundColor : 'grey',
                    opacity : 0.7,
                    display : that.getBgDisplay()
                }
            );
        },
        bindUI:function(){
            //点击则销毁弹窗
            //var that = this;
            //
            //var $box = that.getBoundingBox();
            //$box.find('.changeBig').on('click',function() {
            //    that.setWidth(300);
            //    that.setHeight(300);
            //    that.setColor('yellow');
            //});
            //$box.find('.close').on('click',function() {
            //    that.destroy();
            //});
        }
    });
    F.extend(Tip,Modal,{
        renderUI:function(){
            this.callParent();
            this.getBoundingBox().append(
                '<div class="tip"></div>'
            ).css(
                {

                }
            );
            if(this.getBtnCloseDisplay() == 'block'){
                $.find('.tip').append(
                    this.getBtnClose()
                );
            };
            if(this.iconDisplay() == 'block'){
                $.find('.tip').append(
                    this.getIcon()
                );
            };
        }
    });

    return {
        Tip : Tip
    }
});