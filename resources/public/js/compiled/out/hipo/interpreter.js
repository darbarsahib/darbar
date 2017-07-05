// Compiled by ClojureScript 1.9.229 {}
goog.provide('hipo.interpreter');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('hipo.attribute');
goog.require('hipo.dom');
goog.require('hipo.hiccup');
goog.require('hipo.interceptor');
hipo.interpreter.set_attribute_BANG_ = (function hipo$interpreter$set_attribute_BANG_(el,ns,tag,sok,ov,nv,p__31182){
var map__31185 = p__31182;
var map__31185__$1 = ((((!((map__31185 == null)))?((((map__31185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31185):map__31185);
var m = map__31185__$1;
var interceptors = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(!((ov === nv))){
var temp__4655__auto__ = hipo.hiccup.listener_name__GT_event_name.call(null,cljs.core.name.call(null,sok));
if(cljs.core.truth_(temp__4655__auto__)){
var en = temp__4655__auto__;
if(!((cljs.core.map_QMARK_.call(null,ov)) && (cljs.core.map_QMARK_.call(null,nv)) && ((new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ov) === new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(nv))))){
var b__31042__auto__ = ((function (en,temp__4655__auto__,map__31185,map__31185__$1,m,interceptors){
return (function (){
var hn = [cljs.core.str("hipo_listener_"),cljs.core.str(en)].join('');
var temp__4655__auto___31187__$1 = (el[hn]);
if(cljs.core.truth_(temp__4655__auto___31187__$1)){
var l_31188 = temp__4655__auto___31187__$1;
el.removeEventListener(en,l_31188);
} else {
}

var temp__4657__auto__ = (function (){var or__25979__auto__ = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(nv);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return nv;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var nv__$1 = temp__4657__auto__;
el.addEventListener(en,nv__$1);

return (el[hn] = nv__$1);
} else {
return null;
}
});})(en,temp__4655__auto__,map__31185,map__31185__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-handler","update-handler",1389859106):new cljs.core.Keyword(null,"remove-handler","remove-handler",389960218)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
} else {
return null;
}
} else {
var b__31042__auto__ = ((function (temp__4655__auto__,map__31185,map__31185__$1,m,interceptors){
return (function (){
return hipo.attribute.set_value_BANG_.call(null,el,m,ns,tag,sok,ov,nv);
});})(temp__4655__auto__,map__31185,map__31185__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,(cljs.core.truth_(nv)?new cljs.core.Keyword(null,"update-attribute","update-attribute",102770530):new cljs.core.Keyword(null,"remove-attribute","remove-attribute",552745626)),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"name","name",1843675177),sok,new cljs.core.Keyword(null,"old-value","old-value",862546795),ov], null),(cljs.core.truth_(nv)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"new-value","new-value",1087038368),nv], null):null)));
}
}
} else {
return null;
}
});
hipo.interpreter.append_children_BANG_ = (function hipo$interpreter$append_children_BANG_(el,v,m){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var v__$1 = hipo.hiccup.flatten_children.call(null,v);
while(true){
if(cljs.core.empty_QMARK_.call(null,v__$1)){
return null;
} else {
var temp__4655__auto___31189 = cljs.core.nth.call(null,v__$1,(0));
if(cljs.core.truth_(temp__4655__auto___31189)){
var h_31190 = temp__4655__auto___31189;
el.appendChild(hipo.interpreter.create_child.call(null,h_31190,m));
} else {
}

var G__31191 = cljs.core.rest.call(null,v__$1);
v__$1 = G__31191;
continue;
}
break;
}
});
hipo.interpreter.default_create_element = (function hipo$interpreter$default_create_element(ns,tag,attrs,m){
var el = hipo.dom.create_element.call(null,ns,tag);
var seq__31202_31212 = cljs.core.seq.call(null,attrs);
var chunk__31203_31213 = null;
var count__31204_31214 = (0);
var i__31205_31215 = (0);
while(true){
if((i__31205_31215 < count__31204_31214)){
var vec__31206_31216 = cljs.core._nth.call(null,chunk__31203_31213,i__31205_31215);
var sok_31217 = cljs.core.nth.call(null,vec__31206_31216,(0),null);
var v_31218 = cljs.core.nth.call(null,vec__31206_31216,(1),null);
if(cljs.core.truth_(v_31218)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_31217,null,v_31218,m);
} else {
}

var G__31219 = seq__31202_31212;
var G__31220 = chunk__31203_31213;
var G__31221 = count__31204_31214;
var G__31222 = (i__31205_31215 + (1));
seq__31202_31212 = G__31219;
chunk__31203_31213 = G__31220;
count__31204_31214 = G__31221;
i__31205_31215 = G__31222;
continue;
} else {
var temp__4657__auto___31223 = cljs.core.seq.call(null,seq__31202_31212);
if(temp__4657__auto___31223){
var seq__31202_31224__$1 = temp__4657__auto___31223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31202_31224__$1)){
var c__26790__auto___31225 = cljs.core.chunk_first.call(null,seq__31202_31224__$1);
var G__31226 = cljs.core.chunk_rest.call(null,seq__31202_31224__$1);
var G__31227 = c__26790__auto___31225;
var G__31228 = cljs.core.count.call(null,c__26790__auto___31225);
var G__31229 = (0);
seq__31202_31212 = G__31226;
chunk__31203_31213 = G__31227;
count__31204_31214 = G__31228;
i__31205_31215 = G__31229;
continue;
} else {
var vec__31209_31230 = cljs.core.first.call(null,seq__31202_31224__$1);
var sok_31231 = cljs.core.nth.call(null,vec__31209_31230,(0),null);
var v_31232 = cljs.core.nth.call(null,vec__31209_31230,(1),null);
if(cljs.core.truth_(v_31232)){
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_31231,null,v_31232,m);
} else {
}

var G__31233 = cljs.core.next.call(null,seq__31202_31224__$1);
var G__31234 = null;
var G__31235 = (0);
var G__31236 = (0);
seq__31202_31212 = G__31233;
chunk__31203_31213 = G__31234;
count__31204_31214 = G__31235;
i__31205_31215 = G__31236;
continue;
}
} else {
}
}
break;
}

return el;
});
hipo.interpreter.create_element = (function hipo$interpreter$create_element(ns,tag,attrs,m){
var temp__4655__auto__ = new cljs.core.Keyword(null,"create-element-fn","create-element-fn",827380427).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return f.call(null,ns,tag,attrs,m);
} else {
return hipo.interpreter.default_create_element.call(null,ns,tag,attrs,m);
}
});
hipo.interpreter.create_vector = (function hipo$interpreter$create_vector(h,m){
if(cljs.core.vector_QMARK_.call(null,h)){
} else {
throw (new Error("Assert failed: (vector? h)"));
}

var key = hipo.hiccup.keyns.call(null,h);
var tag = hipo.hiccup.tag.call(null,h);
var attrs = hipo.hiccup.attributes.call(null,h);
var children = hipo.hiccup.children.call(null,h);
var el = hipo.interpreter.create_element.call(null,hipo.hiccup.key__GT_namespace.call(null,key,m),tag,attrs,m);
if(cljs.core.truth_(children)){
hipo.interpreter.append_children_BANG_.call(null,el,children,m);
} else {
}

return el;
});
hipo.interpreter.create_child = (function hipo$interpreter$create_child(o,m){
if(cljs.core.truth_((function (){var or__25979__auto__ = hipo.hiccup.literal_QMARK_.call(null,o);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.vector_QMARK_.call(null,o);
}
})())){
} else {
throw (new Error("Assert failed: (or (hic/literal? o) (vector? o))"));
}

if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,o))){
return document.createTextNode(o);
} else {
return hipo.interpreter.create_vector.call(null,o,m);
}
});
hipo.interpreter.append_to_parent = (function hipo$interpreter$append_to_parent(el,o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
return hipo.interpreter.append_children_BANG_.call(null,el,cljs.core.vec.call(null,o),m);
} else {
if(!((o == null))){
return el.appendChild(hipo.interpreter.create_child.call(null,o,m));
} else {
return null;
}
}
});
hipo.interpreter.create = (function hipo$interpreter$create(o,m){
if(cljs.core.seq_QMARK_.call(null,o)){
var f = document.createDocumentFragment();
hipo.interpreter.append_children_BANG_.call(null,f,cljs.core.vec.call(null,o),m);

return f;
} else {
if(!((o == null))){
return hipo.interpreter.create_child.call(null,o,m);
} else {
return null;
}
}
});
hipo.interpreter.reconciliate_attributes_BANG_ = (function hipo$interpreter$reconciliate_attributes_BANG_(el,ns,tag,om,nm,m){
var seq__31253_31269 = cljs.core.seq.call(null,nm);
var chunk__31255_31270 = null;
var count__31256_31271 = (0);
var i__31257_31272 = (0);
while(true){
if((i__31257_31272 < count__31256_31271)){
var vec__31259_31273 = cljs.core._nth.call(null,chunk__31255_31270,i__31257_31272);
var sok_31274 = cljs.core.nth.call(null,vec__31259_31273,(0),null);
var nv_31275 = cljs.core.nth.call(null,vec__31259_31273,(1),null);
var ov_31276 = cljs.core.get.call(null,om,sok_31274);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_31274,ov_31276,nv_31275,m);

var G__31277 = seq__31253_31269;
var G__31278 = chunk__31255_31270;
var G__31279 = count__31256_31271;
var G__31280 = (i__31257_31272 + (1));
seq__31253_31269 = G__31277;
chunk__31255_31270 = G__31278;
count__31256_31271 = G__31279;
i__31257_31272 = G__31280;
continue;
} else {
var temp__4657__auto___31281 = cljs.core.seq.call(null,seq__31253_31269);
if(temp__4657__auto___31281){
var seq__31253_31282__$1 = temp__4657__auto___31281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31253_31282__$1)){
var c__26790__auto___31283 = cljs.core.chunk_first.call(null,seq__31253_31282__$1);
var G__31284 = cljs.core.chunk_rest.call(null,seq__31253_31282__$1);
var G__31285 = c__26790__auto___31283;
var G__31286 = cljs.core.count.call(null,c__26790__auto___31283);
var G__31287 = (0);
seq__31253_31269 = G__31284;
chunk__31255_31270 = G__31285;
count__31256_31271 = G__31286;
i__31257_31272 = G__31287;
continue;
} else {
var vec__31262_31288 = cljs.core.first.call(null,seq__31253_31282__$1);
var sok_31289 = cljs.core.nth.call(null,vec__31262_31288,(0),null);
var nv_31290 = cljs.core.nth.call(null,vec__31262_31288,(1),null);
var ov_31291 = cljs.core.get.call(null,om,sok_31289);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok_31289,ov_31291,nv_31290,m);

var G__31292 = cljs.core.next.call(null,seq__31253_31282__$1);
var G__31293 = null;
var G__31294 = (0);
var G__31295 = (0);
seq__31253_31269 = G__31292;
chunk__31255_31270 = G__31293;
count__31256_31271 = G__31294;
i__31257_31272 = G__31295;
continue;
}
} else {
}
}
break;
}

var seq__31265 = cljs.core.seq.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
var chunk__31266 = null;
var count__31267 = (0);
var i__31268 = (0);
while(true){
if((i__31268 < count__31267)){
var sok = cljs.core._nth.call(null,chunk__31266,i__31268);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__31296 = seq__31265;
var G__31297 = chunk__31266;
var G__31298 = count__31267;
var G__31299 = (i__31268 + (1));
seq__31265 = G__31296;
chunk__31266 = G__31297;
count__31267 = G__31298;
i__31268 = G__31299;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31265);
if(temp__4657__auto__){
var seq__31265__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31265__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__31265__$1);
var G__31300 = cljs.core.chunk_rest.call(null,seq__31265__$1);
var G__31301 = c__26790__auto__;
var G__31302 = cljs.core.count.call(null,c__26790__auto__);
var G__31303 = (0);
seq__31265 = G__31300;
chunk__31266 = G__31301;
count__31267 = G__31302;
i__31268 = G__31303;
continue;
} else {
var sok = cljs.core.first.call(null,seq__31265__$1);
hipo.interpreter.set_attribute_BANG_.call(null,el,ns,tag,sok,cljs.core.get.call(null,om,sok),null,m);

var G__31304 = cljs.core.next.call(null,seq__31265__$1);
var G__31305 = null;
var G__31306 = (0);
var G__31307 = (0);
seq__31265 = G__31304;
chunk__31266 = G__31305;
count__31267 = G__31306;
i__31268 = G__31307;
continue;
}
} else {
return null;
}
}
break;
}
});
hipo.interpreter.child_key = (function hipo$interpreter$child_key(h){
return new cljs.core.Keyword("hipo","key","hipo/key",-1519246363).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,h));
});
hipo.interpreter.keyed_children__GT_indexed_map = (function hipo$interpreter$keyed_children__GT_indexed_map(v){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__26759__auto__ = (function hipo$interpreter$keyed_children__GT_indexed_map_$_iter__31312(s__31313){
return (new cljs.core.LazySeq(null,(function (){
var s__31313__$1 = s__31313;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__31313__$1);
if(temp__4657__auto__){
var s__31313__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31313__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__31313__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__31315 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__31314 = (0);
while(true){
if((i__31314 < size__26758__auto__)){
var ih = cljs.core._nth.call(null,c__26757__auto__,i__31314);
cljs.core.chunk_append.call(null,b__31315,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null));

var G__31316 = (i__31314 + (1));
i__31314 = G__31316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31315),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__31312.call(null,cljs.core.chunk_rest.call(null,s__31313__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31315),null);
}
} else {
var ih = cljs.core.first.call(null,s__31313__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,ih,(1))),ih], null),hipo$interpreter$keyed_children__GT_indexed_map_$_iter__31312.call(null,cljs.core.rest.call(null,s__31313__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26759__auto__.call(null,cljs.core.map_indexed.call(null,((function (iter__26759__auto__){
return (function (idx,itm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,itm], null);
});})(iter__26759__auto__))
,v));
})());
});
/**
 * Reconciliate a vector of children based on their associated key.
 */
hipo.interpreter.reconciliate_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_keyed_children_BANG_(el,och,nch,p__31317){
var map__31342 = p__31317;
var map__31342__$1 = ((((!((map__31342 == null)))?((((map__31342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31342):map__31342);
var m = map__31342__$1;
var interceptors = cljs.core.get.call(null,map__31342__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var om = hipo.interpreter.keyed_children__GT_indexed_map.call(null,och);
var nm = hipo.interpreter.keyed_children__GT_indexed_map.call(null,nch);
var cs = hipo.dom.children.call(null,el,cljs.core.apply.call(null,cljs.core.max,clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,nm)),cljs.core.set.call(null,cljs.core.keys.call(null,om)))));
var seq__31344_31366 = cljs.core.seq.call(null,nm);
var chunk__31345_31367 = null;
var count__31346_31368 = (0);
var i__31347_31369 = (0);
while(true){
if((i__31347_31369 < count__31346_31368)){
var vec__31348_31370 = cljs.core._nth.call(null,chunk__31345_31367,i__31347_31369);
var i_31371 = cljs.core.nth.call(null,vec__31348_31370,(0),null);
var vec__31351_31372 = cljs.core.nth.call(null,vec__31348_31370,(1),null);
var ii_31373 = cljs.core.nth.call(null,vec__31351_31372,(0),null);
var h_31374 = cljs.core.nth.call(null,vec__31351_31372,(1),null);
var temp__4655__auto___31375 = cljs.core.get.call(null,om,i_31371);
if(cljs.core.truth_(temp__4655__auto___31375)){
var vec__31354_31376 = temp__4655__auto___31375;
var iii_31377 = cljs.core.nth.call(null,vec__31354_31376,(0),null);
var oh_31378 = cljs.core.nth.call(null,vec__31354_31376,(1),null);
var cel_31379 = cljs.core.nth.call(null,cs,iii_31377);
if((ii_31373 === iii_31377)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_31379,oh_31378,h_31374,m);
} else {
var b__31042__auto___31380 = ((function (seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,cel_31379,vec__31354_31376,iii_31377,oh_31378,temp__4655__auto___31375,vec__31348_31370,i_31371,vec__31351_31372,ii_31373,h_31374,om,nm,cs,map__31342,map__31342__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_31379);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_31378,h_31374,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_31373,ncel);
});})(seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,cel_31379,vec__31354_31376,iii_31377,oh_31378,temp__4655__auto___31375,vec__31348_31370,i_31371,vec__31351_31372,ii_31373,h_31374,om,nm,cs,map__31342,map__31342__$1,m,interceptors))
;
var v__31043__auto___31381 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31381)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31381))){
b__31042__auto___31380.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31380,v__31043__auto___31381,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_31374,new cljs.core.Keyword(null,"index","index",-1531685915),ii_31373], null));
}
}
} else {
var b__31042__auto___31382 = ((function (seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,temp__4655__auto___31375,vec__31348_31370,i_31371,vec__31351_31372,ii_31373,h_31374,om,nm,cs,map__31342,map__31342__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_31373,hipo.interpreter.create_child.call(null,h_31374,m));
});})(seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,temp__4655__auto___31375,vec__31348_31370,i_31371,vec__31351_31372,ii_31373,h_31374,om,nm,cs,map__31342,map__31342__$1,m,interceptors))
;
var v__31043__auto___31383 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31383)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31383))){
b__31042__auto___31382.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31382,v__31043__auto___31383,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_31374,new cljs.core.Keyword(null,"index","index",-1531685915),ii_31373], null));
}
}

var G__31384 = seq__31344_31366;
var G__31385 = chunk__31345_31367;
var G__31386 = count__31346_31368;
var G__31387 = (i__31347_31369 + (1));
seq__31344_31366 = G__31384;
chunk__31345_31367 = G__31385;
count__31346_31368 = G__31386;
i__31347_31369 = G__31387;
continue;
} else {
var temp__4657__auto___31388 = cljs.core.seq.call(null,seq__31344_31366);
if(temp__4657__auto___31388){
var seq__31344_31389__$1 = temp__4657__auto___31388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31344_31389__$1)){
var c__26790__auto___31390 = cljs.core.chunk_first.call(null,seq__31344_31389__$1);
var G__31391 = cljs.core.chunk_rest.call(null,seq__31344_31389__$1);
var G__31392 = c__26790__auto___31390;
var G__31393 = cljs.core.count.call(null,c__26790__auto___31390);
var G__31394 = (0);
seq__31344_31366 = G__31391;
chunk__31345_31367 = G__31392;
count__31346_31368 = G__31393;
i__31347_31369 = G__31394;
continue;
} else {
var vec__31357_31395 = cljs.core.first.call(null,seq__31344_31389__$1);
var i_31396 = cljs.core.nth.call(null,vec__31357_31395,(0),null);
var vec__31360_31397 = cljs.core.nth.call(null,vec__31357_31395,(1),null);
var ii_31398 = cljs.core.nth.call(null,vec__31360_31397,(0),null);
var h_31399 = cljs.core.nth.call(null,vec__31360_31397,(1),null);
var temp__4655__auto___31400 = cljs.core.get.call(null,om,i_31396);
if(cljs.core.truth_(temp__4655__auto___31400)){
var vec__31363_31401 = temp__4655__auto___31400;
var iii_31402 = cljs.core.nth.call(null,vec__31363_31401,(0),null);
var oh_31403 = cljs.core.nth.call(null,vec__31363_31401,(1),null);
var cel_31404 = cljs.core.nth.call(null,cs,iii_31402);
if((ii_31398 === iii_31402)){
hipo.interpreter.reconciliate_BANG_.call(null,cel_31404,oh_31403,h_31399,m);
} else {
var b__31042__auto___31405 = ((function (seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,cel_31404,vec__31363_31401,iii_31402,oh_31403,temp__4655__auto___31400,vec__31357_31395,i_31396,vec__31360_31397,ii_31398,h_31399,seq__31344_31389__$1,temp__4657__auto___31388,om,nm,cs,map__31342,map__31342__$1,m,interceptors){
return (function (){
var ncel = el.removeChild(cel_31404);
hipo.interpreter.reconciliate_BANG_.call(null,ncel,oh_31403,h_31399,m);

return hipo.dom.insert_child_BANG_.call(null,el,ii_31398,ncel);
});})(seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,cel_31404,vec__31363_31401,iii_31402,oh_31403,temp__4655__auto___31400,vec__31357_31395,i_31396,vec__31360_31397,ii_31398,h_31399,seq__31344_31389__$1,temp__4657__auto___31388,om,nm,cs,map__31342,map__31342__$1,m,interceptors))
;
var v__31043__auto___31406 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31406)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31406))){
b__31042__auto___31405.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31405,v__31043__auto___31406,new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_31399,new cljs.core.Keyword(null,"index","index",-1531685915),ii_31398], null));
}
}
} else {
var b__31042__auto___31407 = ((function (seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,temp__4655__auto___31400,vec__31357_31395,i_31396,vec__31360_31397,ii_31398,h_31399,seq__31344_31389__$1,temp__4657__auto___31388,om,nm,cs,map__31342,map__31342__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,ii_31398,hipo.interpreter.create_child.call(null,h_31399,m));
});})(seq__31344_31366,chunk__31345_31367,count__31346_31368,i__31347_31369,temp__4655__auto___31400,vec__31357_31395,i_31396,vec__31360_31397,ii_31398,h_31399,seq__31344_31389__$1,temp__4657__auto___31388,om,nm,cs,map__31342,map__31342__$1,m,interceptors))
;
var v__31043__auto___31408 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31408)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31408))){
b__31042__auto___31407.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31407,v__31043__auto___31408,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h_31399,new cljs.core.Keyword(null,"index","index",-1531685915),ii_31398], null));
}
}

var G__31409 = cljs.core.next.call(null,seq__31344_31389__$1);
var G__31410 = null;
var G__31411 = (0);
var G__31412 = (0);
seq__31344_31366 = G__31409;
chunk__31345_31367 = G__31410;
count__31346_31368 = G__31411;
i__31347_31369 = G__31412;
continue;
}
} else {
}
}
break;
}

var d = cljs.core.count.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,om)),cljs.core.set.call(null,cljs.core.keys.call(null,nm))));
if((d > (0))){
var b__31042__auto__ = ((function (d,om,nm,cs,map__31342,map__31342__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(d,om,nm,cs,map__31342,map__31342__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
return null;
}
});
hipo.interpreter.reconciliate_non_keyed_children_BANG_ = (function hipo$interpreter$reconciliate_non_keyed_children_BANG_(el,och,nch,p__31413){
var map__31416 = p__31413;
var map__31416__$1 = ((((!((map__31416 == null)))?((((map__31416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31416):map__31416);
var m = map__31416__$1;
var interceptors = cljs.core.get.call(null,map__31416__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var oc = cljs.core.count.call(null,och);
var nc = cljs.core.count.call(null,nch);
var d = (oc - nc);
if((d > (0))){
var b__31042__auto___31418 = ((function (oc,nc,d,map__31416,map__31416__$1,m,interceptors){
return (function (){
return hipo.dom.remove_trailing_children_BANG_.call(null,el,d);
});})(oc,nc,d,map__31416,map__31416__$1,m,interceptors))
;
var v__31043__auto___31419 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31419)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31419))){
b__31042__auto___31418.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31418,v__31043__auto___31419,new cljs.core.Keyword(null,"remove-trailing","remove-trailing",-1590009193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"count","count",2139924085),d], null));
}
} else {
}

var n__26894__auto___31420 = (function (){var x__26317__auto__ = oc;
var y__26318__auto__ = nc;
return ((x__26317__auto__ < y__26318__auto__) ? x__26317__auto__ : y__26318__auto__);
})();
var i_31421 = (0);
while(true){
if((i_31421 < n__26894__auto___31420)){
var ov_31422 = cljs.core.nth.call(null,och,i_31421);
var nv_31423 = cljs.core.nth.call(null,nch,i_31421);
if(!(((ov_31422 == null)) && ((nv_31423 == null)))){
if((ov_31422 == null)){
var b__31042__auto___31424 = ((function (i_31421,ov_31422,nv_31423,n__26894__auto___31420,oc,nc,d,map__31416,map__31416__$1,m,interceptors){
return (function (){
return hipo.dom.insert_child_BANG_.call(null,el,i_31421,hipo.interpreter.create_child.call(null,nv_31423,m));
});})(i_31421,ov_31422,nv_31423,n__26894__auto___31420,oc,nc,d,map__31416,map__31416__$1,m,interceptors))
;
var v__31043__auto___31425 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31425)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31425))){
b__31042__auto___31424.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31424,v__31043__auto___31425,new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nv_31423,new cljs.core.Keyword(null,"index","index",-1531685915),i_31421], null));
}
} else {
if((nv_31423 == null)){
var b__31042__auto___31426 = ((function (i_31421,ov_31422,nv_31423,n__26894__auto___31420,oc,nc,d,map__31416,map__31416__$1,m,interceptors){
return (function (){
return hipo.dom.remove_child_BANG_.call(null,el,i_31421);
});})(i_31421,ov_31422,nv_31423,n__26894__auto___31420,oc,nc,d,map__31416,map__31416__$1,m,interceptors))
;
var v__31043__auto___31427 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31427)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31427))){
b__31042__auto___31426.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31426,v__31043__auto___31427,new cljs.core.Keyword(null,"remove","remove",-131428414),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"index","index",-1531685915),i_31421], null));
}
} else {
var temp__4655__auto___31428 = hipo.dom.child.call(null,el,i_31421);
if(cljs.core.truth_(temp__4655__auto___31428)){
var cel_31429 = temp__4655__auto___31428;
hipo.interpreter.reconciliate_BANG_.call(null,cel_31429,ov_31422,nv_31423,m);
} else {
}

}
}
} else {
}

var G__31430 = (i_31421 + (1));
i_31421 = G__31430;
continue;
} else {
}
break;
}

if((d < (0))){
if(((-1) === d)){
var temp__4655__auto__ = cljs.core.nth.call(null,nch,oc);
if(cljs.core.truth_(temp__4655__auto__)){
var h = temp__4655__auto__;
var b__31042__auto__ = ((function (h,temp__4655__auto__,oc,nc,d,map__31416,map__31416__$1,m,interceptors){
return (function (){
return el.appendChild(hipo.interpreter.create_child.call(null,h,m));
});})(h,temp__4655__auto__,oc,nc,d,map__31416,map__31416__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),h], null));
}
} else {
return null;
}
} else {
var f = document.createDocumentFragment();
var cs = ((((0) === oc))?nch:cljs.core.subvec.call(null,nch,oc));
var b__31042__auto___31431 = ((function (f,cs,oc,nc,d,map__31416,map__31416__$1,m,interceptors){
return (function (){
return hipo.interpreter.append_children_BANG_.call(null,f,cs,m);
});})(f,cs,oc,nc,d,map__31416,map__31416__$1,m,interceptors))
;
var v__31043__auto___31432 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31432)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31432))){
b__31042__auto___31431.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31431,v__31043__auto___31432,new cljs.core.Keyword(null,"append","append",-291298229),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),cs], null));
}

return el.appendChild(f);
}
} else {
return null;
}
});
hipo.interpreter.keyed_children_QMARK_ = (function hipo$interpreter$keyed_children_QMARK_(v){
return !((hipo.interpreter.child_key.call(null,cljs.core.nth.call(null,v,(0))) == null));
});
hipo.interpreter.reconciliate_children_BANG_ = (function hipo$interpreter$reconciliate_children_BANG_(el,och,nch,p__31433){
var map__31436 = p__31433;
var map__31436__$1 = ((((!((map__31436 == null)))?((((map__31436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31436):map__31436);
var m = map__31436__$1;
var interceptors = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.empty_QMARK_.call(null,nch)){
if(!(cljs.core.empty_QMARK_.call(null,och))){
var b__31042__auto__ = ((function (map__31436,map__31436__$1,m,interceptors){
return (function (){
return hipo.dom.clear_BANG_.call(null,el);
});})(map__31436,map__31436__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,new cljs.core.Keyword(null,"clear","clear",1877104959),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),el], null));
}
} else {
return null;
}
} else {
if(cljs.core.truth_(hipo.interpreter.keyed_children_QMARK_.call(null,nch))){
return hipo.interpreter.reconciliate_keyed_children_BANG_.call(null,el,och,nch,m);
} else {
return hipo.interpreter.reconciliate_non_keyed_children_BANG_.call(null,el,och,nch,m);
}
}
});
hipo.interpreter.reconciliate_vector_BANG_ = (function hipo$interpreter$reconciliate_vector_BANG_(el,oh,nh,p__31438){
var map__31441 = p__31438;
var map__31441__$1 = ((((!((map__31441 == null)))?((((map__31441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31441):map__31441);
var m = map__31441__$1;
var interceptors = cljs.core.get.call(null,map__31441__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.vector_QMARK_.call(null,nh)){
} else {
throw (new Error("Assert failed: (vector? nh)"));
}

if(cljs.core.truth_((function (){var or__25979__auto__ = hipo.hiccup.literal_QMARK_.call(null,oh);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return !((hipo.hiccup.tag.call(null,nh) === hipo.hiccup.tag.call(null,oh)));
}
})())){
var nel = hipo.interpreter.create_child.call(null,nh,m);
var b__31042__auto__ = ((function (nel,map__31441,map__31441__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_BANG_.call(null,el,nel);
});})(nel,map__31441,map__31441__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
var om = hipo.hiccup.attributes.call(null,oh);
var nm = hipo.hiccup.attributes.call(null,nh);
var och = hipo.hiccup.children.call(null,oh);
var nch = hipo.hiccup.children.call(null,nh);
var b__31042__auto___31443 = ((function (om,nm,och,nch,map__31441,map__31441__$1,m,interceptors){
return (function (){
return hipo.interpreter.reconciliate_children_BANG_.call(null,el,hipo.hiccup.flatten_children.call(null,och),hipo.hiccup.flatten_children.call(null,nch),m);
});})(om,nm,och,nch,map__31441,map__31441__$1,m,interceptors))
;
var v__31043__auto___31444 = interceptors;
if((cljs.core.not.call(null,v__31043__auto___31444)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto___31444))){
b__31042__auto___31443.call(null);
} else {
hipo.interceptor.call.call(null,b__31042__auto___31443,v__31043__auto___31444,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),och,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nch], null));
}

return hipo.interpreter.reconciliate_attributes_BANG_.call(null,el,hipo.hiccup.keyns.call(null,nh),hipo.hiccup.tag.call(null,nh),om,nm,m);
}
});
hipo.interpreter.reconciliate_BANG_ = (function hipo$interpreter$reconciliate_BANG_(el,oh,nh,p__31445){
var map__31448 = p__31445;
var map__31448__$1 = ((((!((map__31448 == null)))?((((map__31448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31448):map__31448);
var m = map__31448__$1;
var interceptors = cljs.core.get.call(null,map__31448__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.truth_((function (){var or__25979__auto__ = cljs.core.vector_QMARK_.call(null,nh);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return hipo.hiccup.literal_QMARK_.call(null,nh);
}
})())){
} else {
throw (new Error("Assert failed: (or (vector? nh) (hic/literal? nh))"));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

var b__31042__auto__ = ((function (map__31448,map__31448__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(hipo.hiccup.literal_QMARK_.call(null,nh))){
if(!((oh === nh))){
var b__31042__auto__ = ((function (map__31448,map__31448__$1,m,interceptors){
return (function (){
if(cljs.core.truth_(el.parentElement)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't replace root element. If you want to change root element's type it must be encapsulated in a static element."),cljs.core.str("\n"),cljs.core.str("(.-parentElement el)")].join('')));
}

return hipo.dom.replace_text_BANG_.call(null,el,[cljs.core.str(nh)].join(''));
});})(map__31448,map__31448__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,new cljs.core.Keyword(null,"replace","replace",-786587770),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"value","value",305978217),nh], null));
}
} else {
return null;
}
} else {
return hipo.interpreter.reconciliate_vector_BANG_.call(null,el,oh,nh,m);
}
});})(map__31448,map__31448__$1,m,interceptors))
;
var v__31043__auto__ = interceptors;
if((cljs.core.not.call(null,v__31043__auto__)) || (cljs.core.empty_QMARK_.call(null,v__31043__auto__))){
return b__31042__auto__.call(null);
} else {
return hipo.interceptor.call.call(null,b__31042__auto__,v__31043__auto__,new cljs.core.Keyword(null,"reconciliate","reconciliate",-527400739),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"target","target",253001721),el,new cljs.core.Keyword(null,"old-value","old-value",862546795),oh,new cljs.core.Keyword(null,"new-value","new-value",1087038368),nh], null));
}
});

//# sourceMappingURL=interpreter.js.map?rel=1499200990842