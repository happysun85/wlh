//wx729bcc4f3ca39e87
WeixinApi.enableDebugMode();
            // 给按钮增加click事件：请不要太纠结这个写法，demo而已
            var addEvent = function(elId,listener){
                document.getElementById(elId)
                        .addEventListener('click',function(e){
                            if(!window.WeixinApi || !window.WeixinJSBridge) {
                                //alert('请确认您是在微信内置浏览器中打开的，并且WeixinApi.js已正确引用');
                                e.preventDefault();
                                return false;
                            }
                            listener(this,e);
                        },false);
            };
            // 刷新
            addEvent('refresh',function(el,e){
                e.preventDefault();
                location.replace('?' + Math.random(),true);
            });
            // 需要分享的内容，请放到ready里
            WeixinApi.ready(function(Api) {
                // 微信分享的数据
                wxData = {
                    "appId": "", // 服务号可以填写appId
                    "imgUrl" : 'http://115.28.152.90/weixin.jpg',
                    "link" : 'http://115.28.152.90:81/wlh2/h4',
                    "desc" : _desc,
                    "title" : "王力宏 - 就是现在"
                };
                // 分享的回调
                var wxCallbacks = {
                    // 收藏操作是否触发回调，默认是开启的
					async:true,
                    favorite : false,
                    // 分享操作开始之前
                    ready : function() {
                        // 你可以在这里对分享的数据进行重组
						//alert(_desc);
						this.dataLoaded({
                            desc : _desc
                        });
                        //alert("准备分享");
                    },
                    // 分享被用户自动取消
                    cancel : function(resp) {
                        // 你可以在你的页面上给用户一个小Tip，为什么要取消呢？
                        //alert("分享被取消，msg=" + resp.err_msg);
                    },
                    // 分享失败了
                    fail : function(resp) {
                        // 分享失败了，是不是可以告诉用户：不要紧，可能是网络问题，一会儿再试试？
                        //alert("分享失败，msg=" + resp.err_msg);
                    },
                    // 分享成功
                    confirm : function(resp) {
                        // 分享成功了，我们是不是可以做一些分享统计呢？
                        //alert("分享成功，msg=" + resp.err_msg);
                    },
                    // 整个分享过程结束
                    all : function(resp,shareTo) {
                        // 如果你做的是一个鼓励用户进行分享的产品，在这里是不是可以给用户一些反馈了？
                        //alert("分享" + (shareTo ? "到" + shareTo : "") + "结束，msg=" + resp.err_msg);
                    }
                };
                // 用户点开右上角popup菜单后，点击分享给好友，会执行下面这个代码
                Api.shareToFriend(wxData, wxCallbacks);
                // 点击分享到朋友圈，会执行下面这个代码
                Api.shareToTimeline(wxData, wxCallbacks);
                // 点击分享到腾讯微博，会执行下面这个代码
                Api.shareToWeibo(wxData, wxCallbacks);
                // iOS上，可以直接调用这个API进行分享，一句话搞定
                Api.generalShare(wxData,wxCallbacks);
            });
