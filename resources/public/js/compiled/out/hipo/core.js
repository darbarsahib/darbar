// Compiled by ClojureScript 1.9.229 {}
goog.provide('hipo.core');
goog.require('cljs.core');
goog.require('hipo.interceptor');
goog.require('hipo.interpreter');
hipo.core.hiccup_property = "hipo_hiccup";
hipo.core.get_hiccup = (function hipo$core$get_hiccup(el){
return (el[hipo.core.hiccup_property]);
});
hipo.core.set_hiccup_BANG_ = (function hipo$core$set_hiccup_BANG_(el,h){
return (el[hipo.core.hiccup_property] = h);
});
/**
 * Reconciliate an existing DOM element to match an hiccup style vector.
 * Reconciliation works by diffing the hiccup used to create the DOM element with a new hiccup. Element created with `hipo.core/create` can be reconcilied without providing the previous hiccup.
 * Last argument is an optional map of options.
 * 
 * Options:
 * 
 * * force-compilation? fail create if DOM construction can't be fully compiled
 * * force-interpretation? bypass the DOM construction compilation
 * * create-element-fn
 * * namespaces
 * * attribute-handlers
 * * interceptors
 *   
 */
hipo.core.reconciliate_BANG_ = (function hipo$core$reconciliate_BANG_(var_args){
var args31671 = [];
var len__27054__auto___31674 = arguments.length;
var i__27055__auto___31675 = (0);
while(true){
if((i__27055__auto___31675 < len__27054__auto___31674)){
args31671.push((arguments[i__27055__auto___31675]));

var G__31676 = (i__27055__auto___31675 + (1));
i__27055__auto___31675 = G__31676;
continue;
} else {
}
break;
}

var G__31673 = args31671.length;
switch (G__31673) {
case 2:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31671.length)].join('')));

}
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (el,nh){
return hipo.core.reconciliate_BANG_.call(null,el,nh,cljs.core.PersistentArrayMap.EMPTY);
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (el,nh,m){
return hipo.core.reconciliate_BANG_.call(null,el,hipo.core.get_hiccup.call(null,el),nh,m);
});

hipo.core.reconciliate_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (el,oh,nh,m){
if(!((oh == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Previous hiccup can't be nil"),cljs.core.str("\n"),cljs.core.str("(not (nil? oh))")].join('')));
}

hipo.core.set_hiccup_BANG_.call(null,el,nh);

return hipo.interpreter.reconciliate_BANG_.call(null,el,oh,nh,m);
});

hipo.core.reconciliate_BANG_.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=core.js.map?rel=1499200990968