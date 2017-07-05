// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('darbar.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40665__delegate = function (x){
if(cljs.core.truth_(darbar.core.on_js_reload)){
return cljs.core.apply.call(null,darbar.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'darbar.core/on-js-reload' is missing");
}
};
var G__40665 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40666__i = 0, G__40666__a = new Array(arguments.length -  0);
while (G__40666__i < G__40666__a.length) {G__40666__a[G__40666__i] = arguments[G__40666__i + 0]; ++G__40666__i;}
  x = new cljs.core.IndexedSeq(G__40666__a,0);
} 
return G__40665__delegate.call(this,x);};
G__40665.cljs$lang$maxFixedArity = 0;
G__40665.cljs$lang$applyTo = (function (arglist__40667){
var x = cljs.core.seq(arglist__40667);
return G__40665__delegate(x);
});
G__40665.cljs$core$IFn$_invoke$arity$variadic = G__40665__delegate;
return G__40665;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1499221523890