!function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);for(u&&u(e);p.length;)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-sell/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()}({0:function(t,e,s){t.exports=s("56d7")},"052e":function(t,e,s){"use strict";var a=s("55e9");s.n(a).a},"0b20":function(t,e,s){"use strict";var a=s("1f64");s.n(a).a},"101e":function(t,e,s){"use strict";var a=s("71a7");s.n(a).a},"1f64":function(t,e,s){},"231b":function(t,e,s){"use strict";var a=s("263b");s.n(a).a},"263b":function(t,e,s){},"26f1":function(t,e,s){},"291e":function(t,e,s){"use strict";var a=s("9430");s.n(a).a},"422d":function(t,e,s){},"46b8":function(t,e,s){"use strict";var a=s("c757");s.n(a).a},"55e9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e),s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=(s("fb6a"),s("ac1f"),s("841c"),s("4328")),n=s.n(i),o=(s("99af"),s("a9e3"),{name:"support-ico",props:{size:{type:Number},type:{type:Number}},computed:{iconCls:function(){return"icon-".concat(this.size," ").concat(["decrease","discount","special","invoice","guarantee"][this.type])}}}),r=(s("052e"),s("2877")),c=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"support-ico",class:this.iconCls})}),[],!1,null,"76afe132",null).exports,l={name:"v-header",props:{seller:{type:Object,default:function(){return{}}}},components:{SupportIco:c},methods:{showDetail:function(){this.headerDetailComp=this.headerDetailComp||this.$createHeaderDetail({$props:{seller:"seller"}}),this.headerDetailComp.show()}}},u=(s("c7ef"),Object(r.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header",on:{click:t.showDetail}},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{width:"64",height:"64",src:t.seller.avatar,alt:""}})]),s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[s("span",{staticClass:"brand"}),s("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),s("div",{staticClass:"description"},[t._v(" "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达 ")]),t.seller.supports?s("div",{staticClass:"support"},[s("support-ico",{attrs:{size:1,type:t.seller.supports[0].type}}),s("span",{staticClass:"textr"},[t._v(t._s(t.seller.supports[0].description))])],1):t._e(),t.seller.supports?s("div",{staticClass:"support-count"},[s("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),s("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()])]),s("div",{staticClass:"bulletin-wrapper"},[s("span",{staticClass:"bulletin-title"}),s("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),s("i",{staticClass:"icon-keyboard_arrow_right"})]),s("div",{staticClass:"background"},[s("img",{attrs:{width:"100%",height:"100%",src:t.seller.avatar,alt:""}})])])}),[],!1,null,null,null).exports),d=(s("c740"),{name:"tab",props:{tabs:{type:Array,default:function(){return[]}},initialIndex:{type:Number,default:0}},computed:{selectedLabel:{get:function(){return this.tabs[this.index].label},set:function(t){this.index=this.tabs.findIndex((function(e){return e.label===t}))}}},data:function(){return{index:this.initialIndex,slideOptions:{listenScroll:!0,probeType:3,directionLockThreshold:0}}},mounted:function(){this.onChange(this.index)},methods:{onScroll:function(t){var e=this.$refs.tabBar.$el.clientWidth,s=this.$refs.slide.slide.scrollerWidth,a=-t.x/s*e;this.$refs.tabBar.setSliderTransform(a)},onChange:function(t){this.index=t;var e=this.$refs.component[t];e&&e.fetch&&e.fetch()}}}),p=(s("be76"),Object(r.a)(d,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tab"},[s("cube-tab-bar",{ref:"tabBar",staticClass:"border-bottom-1px",attrs:{data:t.tabs,showSlider:"",useTransition:!1},model:{value:t.selectedLabel,callback:function(e){t.selectedLabel=e},expression:"selectedLabel"}}),s("div",{staticClass:"slider-wrapper"},[s("cube-slide",{ref:"slide",attrs:{loop:!1,"auto-play":!1,"show-dots":!1,"initial-index":t.index,options:t.slideOptions},on:{scroll:t.onScroll,change:t.onChange}},t._l(t.tabs,(function(t,e){return s("cube-slide-item",{key:e},[s(t.component,{ref:"component",refInFor:!0,tag:"component",attrs:{data:t.data}})],1)})),1)],1)],1)}),[],!1,null,"8cc119ea",null).exports),f=(s("4160"),s("b0c0"),s("159b"),{name:"cart-control",props:{food:{type:Object,default:function(){return{}}}},methods:{add:function(t){this.food.count?this.food.count++:this.$set(this.food,"count",1),this.$emit("add",t.target)},decrease:function(){this.food.count&&this.food.count--}}}),h=(s("a3c8"),Object(r.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-control"},[s("transition",{attrs:{name:"move"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(e){return e.stopPropagation(),t.decrease(e)}}},[s("span",{staticClass:"inner icon-remove_circle_outline"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),s("div",{staticClass:"cart-add icon-add_circle",on:{click:function(e){return e.stopPropagation(),t.add(e)}}})],1)}),[],!1,null,"81b8aec6",null).exports),v={name:"bubble",props:{num:{type:Number,default:0}}},m=(s("c26f"),Object(r.a)(v,(function(){var t=this.$createElement;return(this._self._c||t)("span",{staticClass:"bubble"},[this._v(" "+this._s(this.num)+" ")])}),[],!1,null,"796b5b30",null).exports);function C(){for(var t=[],e=0;e<10;e++)t.push({show:!1});return t}var _={name:"shop-cart",props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},fold:{type:Boolean,default:!0},sticky:{type:Boolean,default:!1}},components:{Bubble:m},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach((function(e){t+=e.price*e.count})),t},totalCount:function(){var t=0;return this.selectFoods.forEach((function(e){t+=e.count})),t},payDesc:function(){if(0===this.totalPrice)return"￥".concat(this.minPrice,"元起送");if(this.totalPrice<this.minPrice){var t=this.minPrice-this.totalPrice;return"还差￥".concat(t,"元起送")}return"去结算"},payClass:function(){return!this.totalCount||this.totalPrice<this.minPrice?"not-enough":"enough"}},data:function(){return{balls:C(),listFold:this.fold}},created:function(){this.dropBalls=[]},methods:{pay:function(t){this.totalPrice<this.minPrice||(this.$createDialog({title:"支付",content:"您需要支付".concat(this.totalPrice,"元")}).show(),t.stopPropagation())},drop:function(t){for(var e=0;e<this.balls.length;e++){var s=this.balls[e];if(!s.show)return s.show=!0,s.el=t,void this.dropBalls.push(s)}},beforeDrop:function(t){var e=this.dropBalls[this.dropBalls.length-1].el.getBoundingClientRect(),s=e.left-32,a=-(window.innerHeight-e.top-22);t.style.display="",t.style.transform=t.style.webkitTransform="translate3d(0,".concat(a,"px,0)");var i=t.getElementsByClassName("inner-hook")[0];i.style.transform=i.style.webkitTransform="translate3d(".concat(s,"px,0,0)")},dropping:function(t,e){this._reflow=document.body.offsetHeight,t.style.transform=t.style.webkitTransform="translate3d(0,0,0)",t.getElementsByClassName("inner-hook")[0].style.transform=t.style.webkitTransform="translate3d(0,0,0)",t.addEventListener("transitionend",e)},afterDrop:function(t){var e=this.dropBalls.shift();e&&(e.show=!1,t.style.display="none")},toggleList:function(){if(this.listFold){if(!this.totalCount)return;this.listFold=!1,this._showShopCartList(),this._showShopCartSticky()}else this.listFold=!0,this._hideShopCartList()},_showShopCartList:function(){var t=this;this.shopCartListComp=this.shopCartListComp||this.$createShopCartList({$props:{selectFoods:"selectFoods"},$events:{leave:function(){t._hideShopCartSticky()},hide:function(){t.listFold=!0},add:function(e){t.shopCartStickyComp.drop(e)}}}),this.shopCartListComp.show()},_hideShopCartList:function(){var t=this.sticky?this.$parent.list:this.shopCartListComp;t.hide&&t.hide()},_showShopCartSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{selectFoods:"selectFoods",deliveryPrice:"deliveryPrice",minPrice:"minPrice",fold:"listFold",list:this.shopCartListComp}}),this.shopCartStickyComp.show()},_hideShopCartSticky:function(){this.shopCartStickyComp.hide()}},watch:{fold:function(t){this.listFold=t},totalCount:function(t){this.fold||0!==t||this._hideShopCartList()}}},b=(s("291e"),Object(r.a)(_,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-cart"},[s("div",{staticClass:"content",on:{click:t.toggleList}},[s("div",{staticClass:"content-left"},[s("div",{staticClass:"logo-wrapper"},[s("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[s("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount>0"}],staticClass:"num"},[s("bubble",{attrs:{num:t.totalCount}})],1)]),s("div",{staticClass:"price",class:{highlight:t.totalPrice>0}},[t._v(" ￥"+t._s(t.totalPrice)+" ")]),s("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),s("div",{staticClass:"content-right"},[s("div",{staticClass:"pay",class:t.payClass,on:{click:t.pay}},[t._v(" "+t._s(t.payDesc)+" ")])])]),s("div",{staticClass:"ball-container"},t._l(t.balls,(function(e,a){return s("div",{key:a},[s("transition",{on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"ball.show"}],staticClass:"ball"},[s("div",{staticClass:"inner inner-hook"})])])],1)})),0)])}),[],!1,null,"e7bdb078",null).exports),g=s("d4ec"),y=s("bee2"),w=(s("d3b7"),s("bc3a")),x=s.n(w).a.create({baseURL:"https://vue-sell-1256738511.cos.ap-chengdu.myqcloud.com/",timeout:5e3});x.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),x.interceptors.response.use((function(t){var e=t.data;if(1===e.status)return e.data}),(function(t){return Promise.reject(t)}));var k=x,S=function(){function t(){Object(g.a)(this,t)}return Object(y.a)(t,null,[{key:"getSeller",value:function(t){return k({url:"seller.json",method:"get",params:t})}},{key:"getGoods",value:function(t){return k({url:"goods.json",method:"get",params:t})}},{key:"getRatings",value:function(t){return k({url:"ratings.json",method:"get",params:t})}}]),t}(),$={name:"goods",props:{data:Object,default:function(){return{}}},components:{Bubble:m,SupportIco:c,CartControl:h,ShopCart:b},data:function(){return{goods:[],selectedFood:{},scrollOptions:{click:!1,directionLockThreshold:0}}},computed:{seller:function(){return this.data.seller},selectFoods:function(){var t=[];return this.goods.forEach((function(e){e.foods.forEach((function(e){e.count&&t.push(e)}))})),t},barTxts:function(){var t=[];return this.goods.forEach((function(e){var s=e.type,a=e.name,i=e.foods,n=0;i.forEach((function(t){n+=t.count||0})),t.push({type:s,name:a,count:n})})),t}},methods:{fetch:function(){var t=this;if(!this.fetched){this.fetched=!0;var e={id:this.seller.id};S.getGoods(e).then((function(e){t.goods=e})).catch((function(t){}))}},selectFood:function(t){this.selectedFood=t,this._showFood(),this._showShopCartSticky()},onAdd:function(t){this.$refs.shopCart.drop(t)},_showFood:function(){var t=this;this.foodComp=this.foodComp||this.$createFood({$props:{food:"selectedFood"},$events:{add:function(e){t.shopCartStickyComp.drop(e)},leave:function(){t._hideShopCartSticky()}}}),this.foodComp.show()},_showShopCartSticky:function(){this.shopCartStickyComp=this.shopCartStickyComp||this.$createShopCartSticky({$props:{selectFoods:"selectFoods",deliveryPrice:this.seller.deliveryPrice,minPrice:this.seller.minPrice,fold:!0}}),this.shopCartStickyComp.show()},_hideShopCartSticky:function(){this.shopCartStickyComp.hide()}}},O=(s("231b"),Object(r.a)($,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},[s("div",{staticClass:"scroll-nav-wrapper"},[t.goods.length?s("cube-scroll-nav",{attrs:{side:"",data:t.goods,options:t.scrollOptions},scopedSlots:t._u([{key:"bar",fn:function(e){return[s("cube-scroll-nav-bar",{attrs:{direction:"vertical",labels:e.labels,txts:t.barTxts,current:e.current},scopedSlots:t._u([{key:"default",fn:function(e){return[s("div",{staticClass:"text"},[e.txt.type>=1?s("support-ico",{attrs:{size:3,type:e.txt.type}}):t._e(),s("span",[t._v(t._s(e.txt.name))]),e.txt.count?s("span",{staticClass:"num"},[s("bubble",{attrs:{num:e.txt.count}})],1):t._e()],1)]}}],null,!0)})]}}],null,!1,3706699198)},t._l(t.goods,(function(e){return s("cube-scroll-nav-panel",{key:e.name,attrs:{label:e.name,title:e.name}},[s("ul",t._l(e.foods,(function(e){return s("li",{key:e.name,staticClass:"food-item",on:{click:function(s){return t.selectFood(e)}}},[s("div",{staticClass:"icon"},[s("img",{attrs:{width:"57",height:"57",src:e.icon,alt:""}})]),s("div",{staticClass:"content"},[s("h2",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"desc"},[t._v(t._s(e.description))]),s("div",{staticClass:"extra"},[s("span",{staticClass:"count"},[t._v("月售"+t._s(e.sellCount)+"份")]),s("span",[t._v("好评率"+t._s(e.rating)+"%")])]),s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(e.price))]),s("span",{directives:[{name:"show",rawName:"v-show",value:e.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(e.oldPrice))])]),s("div",{staticClass:"cart-control-wrapper"},[s("cart-control",{attrs:{food:e},on:{add:t.onAdd}})],1)])])})),0)])})),1):t._e()],1),s("div",{staticClass:"shop-cart-wrapper"},[s("shop-cart",{ref:"shopCart",attrs:{"select-foods":t.selectFoods,"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice}})],1)])}),[],!1,null,"92e25d80",null).exports),P={name:"star",props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-".concat(this.size)},itemClasses:function(){for(var t=[],e=Math.floor(2*this.score)/2,s=!0&e,a=Math.floor(e),i=0;i<a;i++)t.push("on");for(s&&t.push("half");t.length<5;)t.push("off");return t}}},T=(s("5cdc"),Object(r.a)(P,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,(function(t,s){return e("span",{key:s,staticClass:"star-item",class:t})})),0)}),[],!1,null,null,null).exports),j=(s("4de4"),{name:"rating-select",props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},computed:{positives:function(){return this.ratings.filter((function(t){return 0===t.rateType}))},negatives:function(){return this.ratings.filter((function(t){return 1===t.rateType}))}},methods:{select:function(t){this.$emit("select",t)},toggleContent:function(){this.$emit("toggle")}}}),F=(s("d70a"),Object(r.a)(j,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"rating-select"},[s("div",{staticClass:"rating-type border-bottom-1px"},[s("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(e){return t.select(2)}}},[t._v(t._s(t.desc.all)),s("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),s("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(e){return t.select(0)}}},[t._v(t._s(t.desc.positive)),s("span",{staticClass:"count"},[t._v(t._s(t.positives.length))])]),s("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(e){return t.select(1)}}},[t._v(t._s(t.desc.negative)),s("span",{staticClass:"count"},[t._v(t._s(t.negatives.length))])])]),s("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[s("span",{staticClass:"icon-check_circle"}),s("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])}),[],!1,null,"82796be4",null).exports),N={name:"HelloWorld",props:{msg:String}},E=Object(r.a)(N,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"hello"})}),[],!1,null,null,null).exports,L={data:function(){return{selectType:2,onlyContent:!0}},computed:{computedRatings:function(){var t=this,e=[];return this.ratings.forEach((function(s){t.onlyContent&&!s.text||2!==t.selectType&&s.rateType!==t.selectType||e.push(s)})),e}},methods:{onSelect:function(t){this.selectType=t},onToggle:function(){this.onlyContent=!this.onlyContent}}},D=s("c1df"),R=s.n(D),B={name:"ratings",mixins:[L],props:{data:Object,default:function(){return{}}},components:{Star:T,RatingSelect:F,Split:E},computed:{seller:function(){return this.data.seller||{}}},data:function(){return{ratings:[],scrollOptions:{click:!1,directionLockThreshold:0}}},methods:{fetch:function(){var t=this;if(!this.fetched){this.fetched=!0;var e={id:this.seller.id};S.getRatings(e).then((function(e){t.ratings=e}))}},format:function(t){return R()(t).format("YYYY-MM-DD hh:mm")}},watch:{selectType:function(){var t=this;this.$nextTick((function(){t.$refs.scroll.refresh()}))}}},z=(s("0b20"),Object(r.a)(B,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ratings"},[s("cube-scroll",{ref:"scroll",staticClass:"ratings",attrs:{options:t.scrollOptions}},[s("div",{staticClass:"ratings-content"},[s("div",{staticClass:"overview"},[s("div",{staticClass:"overview-left"},[s("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),s("div",{staticClass:"title"},[t._v("综合评分")]),s("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),s("div",{staticClass:"overview-right"},[s("div",{staticClass:"score-wrapper"},[s("span",{staticClass:"title"},[t._v("服务态度")]),s("star",{attrs:{size:36,score:t.seller.serviceScore}}),s("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),s("div",{staticClass:"score-wrapper"},[s("span",{staticClass:"title"},[t._v("商品评分")]),s("star",{attrs:{size:36,score:t.seller.foodScore}}),s("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),s("div",{staticClass:"delivery-wrapper"},[s("span",{staticClass:"title"},[t._v("送达时间")]),s("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),s("split"),s("rating-select",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,ratings:t.ratings},on:{select:t.onSelect,toggle:t.onToggle}}),s("div",{staticClass:"rating-wrapper"},[s("ul",t._l(t.computedRatings,(function(e,a){return s("li",{key:a,staticClass:"rating-item border-bottom-1px"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.avatar,width:"28",height:"28",alt:""}})]),s("div",{staticClass:"content"},[s("h1",{staticClass:"name"},[t._v(t._s(e.username))]),s("div",{staticClass:"star-wrapper"},[s("star",{attrs:{size:24,score:e.score}}),s("span",{directives:[{name:"show",rawName:"v-show",value:e.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(e.deliveryTime))])],1),s("p",{staticClass:"text"},[t._v(t._s(e.text))]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.recommend&&e.recommend.length,expression:"rating.recommend&&rating.recommend.length"}],staticClass:"recommend"},[s("span",{staticClass:"icon-thumb_up"}),t._l(e.recommend,(function(e,a){return s("span",{key:a,staticClass:"item"},[t._v(" "+t._s(e)+" ")])}))],2),s("div",{staticClass:"time"},[t._v(t._s(t.format(e.rateTime)))])])])})),0)])],1)])],1)}),[],!1,null,"c2ba9ef8",null).exports),M=s("335a"),A={name:"seller",props:{data:Object,default:function(){return{}}},components:{Split:E,Star:T,SupportIco:c},computed:{seller:function(){return this.data.seller||{}},favoriteText:function(){return this.favorite?"已收藏":"收藏"}},data:function(){return{favorite:!1,sellerScrollOptions:{directionLockThreshold:0,click:!1},picScrollOptions:{scrollX:!0,stopPropagation:!0,directionLockThreshold:0}}},created:function(){var t,e,s,a;this.favorite=(t=this.seller.id,e="favorite",s=!1,(a=M.a.get("__seller__",{}))[t]&&a[t][e]||s)},methods:{toggleFavorite:function(){var t,e,s,a;this.favorite=!this.favorite,t=this.seller.id,e="favorite",s=this.favorite,(a=M.a.get("__seller__",{}))[t]||(a[t]={}),a[t][e]=s,M.a.set("__seller__",a)}}},I=(s("101e"),Object(r.a)(A,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("cube-scroll",{staticClass:"seller",attrs:{options:t.sellerScrollOptions}},[s("div",{staticClass:"seller-content"},[s("div",{staticClass:"overview"},[s("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),s("div",{staticClass:"desc border-bottom-1px"},[s("star",{attrs:{size:36,score:t.seller.score}}),s("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),s("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),s("ul",{staticClass:"remark"},[s("li",{staticClass:"block"},[s("h2",[t._v("起送价")]),s("div",{staticClass:"content"},[s("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元 ")])]),s("li",{staticClass:"block"},[s("h2",[t._v("商家配送")]),s("div",{staticClass:"content"},[s("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元 ")])]),s("li",{staticClass:"block"},[s("h2",[t._v("平均配送时间")]),s("div",{staticClass:"content"},[s("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟 ")])])]),s("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[s("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),s("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),s("split"),s("div",{staticClass:"bulletin"},[s("h1",{staticClass:"title"},[t._v("公告与活动")]),s("div",{staticClass:"content-wrapper border-bottom-1px"},[s("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t.seller.supports?s("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(e,a){return s("li",{key:a,staticClass:"support-item border-bottom-1px"},[s("support-ico",{attrs:{size:4,type:t.seller.supports[a].type}}),s("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])],1)})),0):t._e()]),s("split"),s("div",{staticClass:"pics"},[s("h1",{staticClass:"title"},[t._v("商家实景")]),s("cube-scroll",{staticClass:"pic-wrapper",attrs:{options:t.picScrollOptions}},[s("ul",{staticClass:"pic-list"},t._l(t.seller.pics,(function(t,e){return s("li",{key:e,staticClass:"pic-item"},[s("img",{attrs:{src:t,width:"120",height:"90"}})])})),0)])],1),s("split"),s("div",{staticClass:"info"},[s("h1",{staticClass:"title border-bottom-1px"},[t._v("商家信息")]),s("ul",t._l(t.seller.infos,(function(e,a){return s("li",{key:a,staticClass:"info-item border-bottom-1px"},[t._v(" "+t._s(e)+" ")])})),0)])],1)])}),[],!1,null,"6d28e334",null).exports),Y={name:"app",components:{VHeader:u,Tab:p},computed:{tabs:function(){return[{label:"商品",component:O,data:{seller:this.seller}},{label:"评价",component:z,data:{seller:this.seller}},{label:"商家",component:I,data:{seller:this.seller}}]}},data:function(){return{seller:{id:n.a.parse(location.search.slice(1)).id}}},created:function(){this._getSeller()},methods:{_getSeller:function(){var t=this,e={id:this.seller.id};S.getSeller(e).then((function(e){t.seller=Object.assign({},t.seller,e)})).catch((function(t){}))}}},H=(s("6c5d"),Object(r.a)(Y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("v-header",{attrs:{seller:this.seller}}),e("div",{staticClass:"tab-wrapper"},[e("tab",{attrs:{tabs:this.tabs,initialIndex:0}})],1)],1)}),[],!1,null,"0d3fd7c4",null).exports),W=(s("df49"),s("e7bd")),q=s("0c29"),G=s("cd5d"),J=s("6f24"),U=s("2696"),V=s("7c8a"),X=s("ae0c"),K=s("47fe"),Q=s("4403"),Z=s("1cf7"),tt=s("7add"),et=s("84d6"),st=s("d2c1"),at=s("291f"),it=s("7ced"),nt=s("09ad"),ot=s("81c3"),rt=s("6fe1"),ct=s("a801"),lt=s("031d"),ut=s("63b4"),dt=s("9173"),pt=s("8344"),ft=s("664d"),ht=s("0124"),vt=s("9736"),mt=s("1cc1"),Ct=s("e231"),_t=s("aea1"),bt=s("5f4e"),gt=s("0679"),yt=s("2799"),wt=s("bdd9"),xt=s("a2d2"),kt=s("ba90"),St=s("36b6"),$t=s("0f85");a.a.use(W.a),a.a.use(q.a),a.a.use(G.a),a.a.use(J.a),a.a.use(U.a),a.a.use(V.a),a.a.use(X.a),a.a.use(K.a),a.a.use(Q.a),a.a.use(Z.a),a.a.use(tt.a),a.a.use(et.a),a.a.use(st.a),a.a.use(at.a),a.a.use(it.a),a.a.use(nt.a),a.a.use(ot.a),a.a.use(rt.a),a.a.use(ct.a),a.a.use(lt.a),a.a.use(ut.a),a.a.use(dt.a),a.a.use(pt.a),a.a.use(ft.a),a.a.use(ht.a),a.a.use(vt.a),a.a.use(mt.a),a.a.use(Ct.a),a.a.use(_t.a),a.a.use(bt.a),a.a.use(gt.a),a.a.use(yt.a),a.a.use(wt.a),a.a.use(xt.a),a.a.use(kt.a),a.a.use(St.a),a.a.use($t.a);var Ot=s("9483");Object(Ot.a)("".concat("/vue-sell/","service-worker.js"),{ready:function(){},registered:function(){},cached:function(){},updatefound:function(){},updated:function(){},offline:function(){},error:function(t){}});var Pt=s("df9a"),Tt={data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0,this.$emit("show")},hide:function(){this.visible=!1,this.$emit("hide")}}},jt={name:"header-detail",mixins:[Tt],props:{seller:{type:Object,default:function(){return{}}}},components:{Star:T,SupportIco:c}},Ft=(s("b058"),Object(r.a)(jt,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"header-detail"},[s("div",{staticClass:"detail-wrapper clear-fix"},[s("div",{staticClass:"detail-main"},[s("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),s("div",{staticClass:"star-wrapper"},[s("star",{attrs:{size:48,score:t.seller.score}})],1),s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),s("div",{staticClass:"text"},[t._v("优惠信息")]),s("div",{staticClass:"line"})]),t.seller.supports?s("ul",{staticClass:"supports"},t._l(t.seller.supports,(function(e,a){return s("li",{key:a,staticClass:"support-item"},[s("support-ico",{attrs:{size:2,type:t.seller.supports[a].type}}),s("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[a].description))])],1)})),0):t._e(),s("div",{staticClass:"title"},[s("div",{staticClass:"line"}),s("div",{staticClass:"text"},[t._v("公告")]),s("div",{staticClass:"line"})]),s("div",{staticClass:"bulletin"},[s("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),s("div",{staticClass:"detail-close",on:{click:t.hide}},[s("i",{staticClass:"icon-close"})])])])}),[],!1,null,"29fa0f88",null).exports),Nt={name:"shop-cart-list",mixins:[Tt],props:{selectFoods:{type:Array,default:function(){return[]}}},components:{CartControl:h},created:function(){var t=this;this.$on("show",(function(){t.$nextTick((function(){t.$refs.listContent.refresh()}))}))},methods:{onAdd:function(t){this.$emit("add",t)},afterLeave:function(){this.$emit("leave")},maskClick:function(){this.hide()},empty:function(){var t=this;this.dialogComp=this.$createDialog({type:"confirm",content:"清空购物车？",$events:{confirm:function(){t.selectFoods.forEach((function(t){t.count=0})),t.hide()}}}),this.dialogComp.show()}}},Et=(s("46b8"),Object(r.a)(Nt,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("cube-popup",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],attrs:{"mask-closable":"",position:"bottom",type:"shop-cart-list","z-index":90},on:{"mask-click":t.maskClick}},[s("transition",{attrs:{name:"move"},on:{"after-leave":t.afterLeave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}]},[s("div",{staticClass:"list-header"},[s("h1",{staticClass:"title"},[t._v("购物车")]),s("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),s("cube-scroll",{ref:"listContent",staticClass:"list-content"},[s("ul",t._l(t.selectFoods,(function(e,a){return s("li",{key:a,staticClass:"food"},[s("span",{staticClass:"name"},[t._v(t._s(e.name))]),s("div",{staticClass:"price"},[s("span",[t._v("￥"+t._s(e.price*e.count))])]),s("div",{staticClass:"cart-control-wrapper"},[s("cart-control",{attrs:{food:e},on:{add:t.onAdd}})],1)])})),0)])],1)])],1)],1)}),[],!1,null,"7431c388",null).exports),Lt={name:"shop-cart-sticky",mixins:[Tt],components:{ShopCart:b},props:{selectFoods:{type:Array,default:function(){return[]}},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0},fold:{type:Boolean,default:!0},list:{type:Object,default:function(){return{}}}},methods:{drop:function(t){this.$refs.shopCart.drop(t)}}},Dt=(s("ed5c"),Object(r.a)(Lt,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"shop-cart-sticky"},[e("shop-cart",{ref:"shopCart",attrs:{selectFoods:this.selectFoods,deliveryPrice:this.deliveryPrice,minPrice:this.minPrice,fold:this.fold,sticky:""}})],1)}),[],!1,null,"549c922a",null).exports),Rt={name:"food",mixins:[Tt,L],props:{food:{type:Object,default:function(){return{}}}},components:{CartControl:h,RatingSelect:F,Split:E},computed:{ratings:function(){return this.food.ratings}},data:function(){return{desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},created:function(){var t=this;this.$on("show",(function(){t.$nextTick((function(){t.$refs.scroll.refresh()}))}))},methods:{afterLeave:function(){this.$emit("leave")},addFirst:function(t){this.$set(this.food,"count",1),this.$emit("add",t.target)},addFood:function(t){this.$emit("add",t)},format:function(t){return R()(t).format("YYYY-MM-DD hh:mm")}}},Bt=(s("a956"),Object(r.a)(Rt,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"move"},on:{"after-leave":t.afterLeave}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"food"},[s("cube-scroll",{ref:"scroll"},[s("div",{staticClass:"food-content"},[s("div",{staticClass:"image-header"},[s("img",{attrs:{src:t.food.image,alt:""}}),s("div",{staticClass:"back",on:{click:t.hide}},[s("i",{staticClass:"icon-arrow_lift"})])]),s("div",{staticClass:"content"},[s("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),s("div",{staticClass:"detail"},[s("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount)+"份")]),s("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),s("div",{staticClass:"price"},[s("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),s("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),s("div",{staticClass:"cart-control-wrapper"},[s("cart-control",{attrs:{food:t.food},on:{add:t.addFood}})],1),s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"buy",on:{click:t.addFirst}},[t._v(" 加入购物车 ")])])],1),s("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[s("h1",{staticClass:"title"},[t._v("商品信息")]),s("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),s("split"),s("div",{staticClass:"rating"},[s("h1",{staticClass:"title"},[t._v("商品评价")]),s("rating-select",{attrs:{selectType:t.selectType,onlyContent:t.onlyContent,desc:t.desc,ratings:t.ratings},on:{select:t.onSelect,toggle:t.onToggle}}),s("div",{staticClass:"rating-wrapper"},[s("ul",{directives:[{name:"show",rawName:"v-show",value:t.computedRatings&&t.computedRatings.length,expression:"computedRatings&&computedRatings.length"}]},t._l(t.computedRatings,(function(e,a){return s("li",{key:a,staticClass:"rating-item border-bottom-1px"},[s("div",{staticClass:"user"},[s("span",{staticClass:"name"},[t._v(t._s(e.username))]),s("img",{staticClass:"avatar",attrs:{src:e.avatar,width:"12",height:"12",alt:""}})]),s("div",{staticClass:"time"},[t._v(t._s(t.format(e.rateTime)))]),s("p",{staticClass:"text"},[s("span",{class:{"icon-thumb_up":0===e.rateType,"icon-thumb_down":1===e.rateType}}),t._v(t._s(e.text)+" ")])])})),0),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.computedRatings||!t.computedRatings.length,expression:"!computedRatings||!computedRatings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])],1)])}),[],!1,null,"4c4bd011",null).exports);Object(Pt.a)(a.a,Ft),Object(Pt.a)(a.a,Et),Object(Pt.a)(a.a,Dt),Object(Pt.a)(a.a,Bt),s("7ffd"),a.a.config.productionTip=!1,new a.a({render:function(t){return t(H)}}).$mount("#app")},"5cdc":function(t,e,s){"use strict";var a=s("fc79");s.n(a).a},6752:function(t,e,s){},"6c5d":function(t,e,s){"use strict";var a=s("e866");s.n(a).a},"71a7":function(t,e,s){},"7ffd":function(t,e,s){},8896:function(t,e,s){},9430:function(t,e,s){},"9c3e":function(t,e,s){},a3c8:function(t,e,s){"use strict";var a=s("d15f");s.n(a).a},a956:function(t,e,s){"use strict";var a=s("6752");s.n(a).a},b058:function(t,e,s){"use strict";var a=s("fb3f");s.n(a).a},be76:function(t,e,s){"use strict";var a=s("422d");s.n(a).a},c26f:function(t,e,s){"use strict";var a=s("cdb5");s.n(a).a},c757:function(t,e,s){},c7ef:function(t,e,s){"use strict";var a=s("8896");s.n(a).a},cdb5:function(t,e,s){},d15f:function(t,e,s){},d70a:function(t,e,s){"use strict";var a=s("9c3e");s.n(a).a},e866:function(t,e,s){},ed5c:function(t,e,s){"use strict";var a=s("26f1");s.n(a).a},fb3f:function(t,e,s){},fc79:function(t,e,s){}});