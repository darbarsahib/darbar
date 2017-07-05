// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25979__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25979__auto__){
return or__25979__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25979__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33475_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33475_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33480 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33481 = null;
var count__33482 = (0);
var i__33483 = (0);
while(true){
if((i__33483 < count__33482)){
var n = cljs.core._nth.call(null,chunk__33481,i__33483);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33484 = seq__33480;
var G__33485 = chunk__33481;
var G__33486 = count__33482;
var G__33487 = (i__33483 + (1));
seq__33480 = G__33484;
chunk__33481 = G__33485;
count__33482 = G__33486;
i__33483 = G__33487;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33480);
if(temp__4657__auto__){
var seq__33480__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33480__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33480__$1);
var G__33488 = cljs.core.chunk_rest.call(null,seq__33480__$1);
var G__33489 = c__26790__auto__;
var G__33490 = cljs.core.count.call(null,c__26790__auto__);
var G__33491 = (0);
seq__33480 = G__33488;
chunk__33481 = G__33489;
count__33482 = G__33490;
i__33483 = G__33491;
continue;
} else {
var n = cljs.core.first.call(null,seq__33480__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33492 = cljs.core.next.call(null,seq__33480__$1);
var G__33493 = null;
var G__33494 = (0);
var G__33495 = (0);
seq__33480 = G__33492;
chunk__33481 = G__33493;
count__33482 = G__33494;
i__33483 = G__33495;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33546_33557 = cljs.core.seq.call(null,deps);
var chunk__33547_33558 = null;
var count__33548_33559 = (0);
var i__33549_33560 = (0);
while(true){
if((i__33549_33560 < count__33548_33559)){
var dep_33561 = cljs.core._nth.call(null,chunk__33547_33558,i__33549_33560);
topo_sort_helper_STAR_.call(null,dep_33561,(depth + (1)),state);

var G__33562 = seq__33546_33557;
var G__33563 = chunk__33547_33558;
var G__33564 = count__33548_33559;
var G__33565 = (i__33549_33560 + (1));
seq__33546_33557 = G__33562;
chunk__33547_33558 = G__33563;
count__33548_33559 = G__33564;
i__33549_33560 = G__33565;
continue;
} else {
var temp__4657__auto___33566 = cljs.core.seq.call(null,seq__33546_33557);
if(temp__4657__auto___33566){
var seq__33546_33567__$1 = temp__4657__auto___33566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33546_33567__$1)){
var c__26790__auto___33568 = cljs.core.chunk_first.call(null,seq__33546_33567__$1);
var G__33569 = cljs.core.chunk_rest.call(null,seq__33546_33567__$1);
var G__33570 = c__26790__auto___33568;
var G__33571 = cljs.core.count.call(null,c__26790__auto___33568);
var G__33572 = (0);
seq__33546_33557 = G__33569;
chunk__33547_33558 = G__33570;
count__33548_33559 = G__33571;
i__33549_33560 = G__33572;
continue;
} else {
var dep_33573 = cljs.core.first.call(null,seq__33546_33567__$1);
topo_sort_helper_STAR_.call(null,dep_33573,(depth + (1)),state);

var G__33574 = cljs.core.next.call(null,seq__33546_33567__$1);
var G__33575 = null;
var G__33576 = (0);
var G__33577 = (0);
seq__33546_33557 = G__33574;
chunk__33547_33558 = G__33575;
count__33548_33559 = G__33576;
i__33549_33560 = G__33577;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33550){
var vec__33554 = p__33550;
var seq__33555 = cljs.core.seq.call(null,vec__33554);
var first__33556 = cljs.core.first.call(null,seq__33555);
var seq__33555__$1 = cljs.core.next.call(null,seq__33555);
var x = first__33556;
var xs = seq__33555__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33554,seq__33555,first__33556,seq__33555__$1,x,xs,get_deps__$1){
return (function (p1__33496_SHARP_){
return clojure.set.difference.call(null,p1__33496_SHARP_,x);
});})(vec__33554,seq__33555,first__33556,seq__33555__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33590 = cljs.core.seq.call(null,provides);
var chunk__33591 = null;
var count__33592 = (0);
var i__33593 = (0);
while(true){
if((i__33593 < count__33592)){
var prov = cljs.core._nth.call(null,chunk__33591,i__33593);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33594_33602 = cljs.core.seq.call(null,requires);
var chunk__33595_33603 = null;
var count__33596_33604 = (0);
var i__33597_33605 = (0);
while(true){
if((i__33597_33605 < count__33596_33604)){
var req_33606 = cljs.core._nth.call(null,chunk__33595_33603,i__33597_33605);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33606,prov);

var G__33607 = seq__33594_33602;
var G__33608 = chunk__33595_33603;
var G__33609 = count__33596_33604;
var G__33610 = (i__33597_33605 + (1));
seq__33594_33602 = G__33607;
chunk__33595_33603 = G__33608;
count__33596_33604 = G__33609;
i__33597_33605 = G__33610;
continue;
} else {
var temp__4657__auto___33611 = cljs.core.seq.call(null,seq__33594_33602);
if(temp__4657__auto___33611){
var seq__33594_33612__$1 = temp__4657__auto___33611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33594_33612__$1)){
var c__26790__auto___33613 = cljs.core.chunk_first.call(null,seq__33594_33612__$1);
var G__33614 = cljs.core.chunk_rest.call(null,seq__33594_33612__$1);
var G__33615 = c__26790__auto___33613;
var G__33616 = cljs.core.count.call(null,c__26790__auto___33613);
var G__33617 = (0);
seq__33594_33602 = G__33614;
chunk__33595_33603 = G__33615;
count__33596_33604 = G__33616;
i__33597_33605 = G__33617;
continue;
} else {
var req_33618 = cljs.core.first.call(null,seq__33594_33612__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33618,prov);

var G__33619 = cljs.core.next.call(null,seq__33594_33612__$1);
var G__33620 = null;
var G__33621 = (0);
var G__33622 = (0);
seq__33594_33602 = G__33619;
chunk__33595_33603 = G__33620;
count__33596_33604 = G__33621;
i__33597_33605 = G__33622;
continue;
}
} else {
}
}
break;
}

var G__33623 = seq__33590;
var G__33624 = chunk__33591;
var G__33625 = count__33592;
var G__33626 = (i__33593 + (1));
seq__33590 = G__33623;
chunk__33591 = G__33624;
count__33592 = G__33625;
i__33593 = G__33626;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33590);
if(temp__4657__auto__){
var seq__33590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33590__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33590__$1);
var G__33627 = cljs.core.chunk_rest.call(null,seq__33590__$1);
var G__33628 = c__26790__auto__;
var G__33629 = cljs.core.count.call(null,c__26790__auto__);
var G__33630 = (0);
seq__33590 = G__33627;
chunk__33591 = G__33628;
count__33592 = G__33629;
i__33593 = G__33630;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33590__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33598_33631 = cljs.core.seq.call(null,requires);
var chunk__33599_33632 = null;
var count__33600_33633 = (0);
var i__33601_33634 = (0);
while(true){
if((i__33601_33634 < count__33600_33633)){
var req_33635 = cljs.core._nth.call(null,chunk__33599_33632,i__33601_33634);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33635,prov);

var G__33636 = seq__33598_33631;
var G__33637 = chunk__33599_33632;
var G__33638 = count__33600_33633;
var G__33639 = (i__33601_33634 + (1));
seq__33598_33631 = G__33636;
chunk__33599_33632 = G__33637;
count__33600_33633 = G__33638;
i__33601_33634 = G__33639;
continue;
} else {
var temp__4657__auto___33640__$1 = cljs.core.seq.call(null,seq__33598_33631);
if(temp__4657__auto___33640__$1){
var seq__33598_33641__$1 = temp__4657__auto___33640__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33598_33641__$1)){
var c__26790__auto___33642 = cljs.core.chunk_first.call(null,seq__33598_33641__$1);
var G__33643 = cljs.core.chunk_rest.call(null,seq__33598_33641__$1);
var G__33644 = c__26790__auto___33642;
var G__33645 = cljs.core.count.call(null,c__26790__auto___33642);
var G__33646 = (0);
seq__33598_33631 = G__33643;
chunk__33599_33632 = G__33644;
count__33600_33633 = G__33645;
i__33601_33634 = G__33646;
continue;
} else {
var req_33647 = cljs.core.first.call(null,seq__33598_33641__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33647,prov);

var G__33648 = cljs.core.next.call(null,seq__33598_33641__$1);
var G__33649 = null;
var G__33650 = (0);
var G__33651 = (0);
seq__33598_33631 = G__33648;
chunk__33599_33632 = G__33649;
count__33600_33633 = G__33650;
i__33601_33634 = G__33651;
continue;
}
} else {
}
}
break;
}

var G__33652 = cljs.core.next.call(null,seq__33590__$1);
var G__33653 = null;
var G__33654 = (0);
var G__33655 = (0);
seq__33590 = G__33652;
chunk__33591 = G__33653;
count__33592 = G__33654;
i__33593 = G__33655;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33660_33664 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33661_33665 = null;
var count__33662_33666 = (0);
var i__33663_33667 = (0);
while(true){
if((i__33663_33667 < count__33662_33666)){
var ns_33668 = cljs.core._nth.call(null,chunk__33661_33665,i__33663_33667);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33668);

var G__33669 = seq__33660_33664;
var G__33670 = chunk__33661_33665;
var G__33671 = count__33662_33666;
var G__33672 = (i__33663_33667 + (1));
seq__33660_33664 = G__33669;
chunk__33661_33665 = G__33670;
count__33662_33666 = G__33671;
i__33663_33667 = G__33672;
continue;
} else {
var temp__4657__auto___33673 = cljs.core.seq.call(null,seq__33660_33664);
if(temp__4657__auto___33673){
var seq__33660_33674__$1 = temp__4657__auto___33673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33660_33674__$1)){
var c__26790__auto___33675 = cljs.core.chunk_first.call(null,seq__33660_33674__$1);
var G__33676 = cljs.core.chunk_rest.call(null,seq__33660_33674__$1);
var G__33677 = c__26790__auto___33675;
var G__33678 = cljs.core.count.call(null,c__26790__auto___33675);
var G__33679 = (0);
seq__33660_33664 = G__33676;
chunk__33661_33665 = G__33677;
count__33662_33666 = G__33678;
i__33663_33667 = G__33679;
continue;
} else {
var ns_33680 = cljs.core.first.call(null,seq__33660_33674__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33680);

var G__33681 = cljs.core.next.call(null,seq__33660_33674__$1);
var G__33682 = null;
var G__33683 = (0);
var G__33684 = (0);
seq__33660_33664 = G__33681;
chunk__33661_33665 = G__33682;
count__33662_33666 = G__33683;
i__33663_33667 = G__33684;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25979__auto__ = goog.require__;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33685__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33686__i = 0, G__33686__a = new Array(arguments.length -  0);
while (G__33686__i < G__33686__a.length) {G__33686__a[G__33686__i] = arguments[G__33686__i + 0]; ++G__33686__i;}
  args = new cljs.core.IndexedSeq(G__33686__a,0);
} 
return G__33685__delegate.call(this,args);};
G__33685.cljs$lang$maxFixedArity = 0;
G__33685.cljs$lang$applyTo = (function (arglist__33687){
var args = cljs.core.seq(arglist__33687);
return G__33685__delegate(args);
});
G__33685.cljs$core$IFn$_invoke$arity$variadic = G__33685__delegate;
return G__33685;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33688 = cljs.core._EQ_;
var expr__33689 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33688.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33689))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33688,expr__33689){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33688,expr__33689))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33688,expr__33689){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33691){if((e33691 instanceof Error)){
var e = e33691;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33691;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33688,expr__33689))
} else {
if(cljs.core.truth_(pred__33688.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33689))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33688.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33689))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33688.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33689))){
return ((function (pred__33688,expr__33689){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33692){if((e33692 instanceof Error)){
var e = e33692;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33692;

}
}})());
});
;})(pred__33688,expr__33689))
} else {
return ((function (pred__33688,expr__33689){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33688,expr__33689))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33693,callback){
var map__33696 = p__33693;
var map__33696__$1 = ((((!((map__33696 == null)))?((((map__33696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33696):map__33696);
var file_msg = map__33696__$1;
var request_url = cljs.core.get.call(null,map__33696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33696,map__33696__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33696,map__33696__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto__){
return (function (state_33720){
var state_val_33721 = (state_33720[(1)]);
if((state_val_33721 === (7))){
var inst_33716 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
var statearr_33722_33742 = state_33720__$1;
(statearr_33722_33742[(2)] = inst_33716);

(statearr_33722_33742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (1))){
var state_33720__$1 = state_33720;
var statearr_33723_33743 = state_33720__$1;
(statearr_33723_33743[(2)] = null);

(statearr_33723_33743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (4))){
var inst_33700 = (state_33720[(7)]);
var inst_33700__$1 = (state_33720[(2)]);
var state_33720__$1 = (function (){var statearr_33724 = state_33720;
(statearr_33724[(7)] = inst_33700__$1);

return statearr_33724;
})();
if(cljs.core.truth_(inst_33700__$1)){
var statearr_33725_33744 = state_33720__$1;
(statearr_33725_33744[(1)] = (5));

} else {
var statearr_33726_33745 = state_33720__$1;
(statearr_33726_33745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (6))){
var state_33720__$1 = state_33720;
var statearr_33727_33746 = state_33720__$1;
(statearr_33727_33746[(2)] = null);

(statearr_33727_33746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (3))){
var inst_33718 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33720__$1,inst_33718);
} else {
if((state_val_33721 === (2))){
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33720__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33721 === (11))){
var inst_33712 = (state_33720[(2)]);
var state_33720__$1 = (function (){var statearr_33728 = state_33720;
(statearr_33728[(8)] = inst_33712);

return statearr_33728;
})();
var statearr_33729_33747 = state_33720__$1;
(statearr_33729_33747[(2)] = null);

(statearr_33729_33747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (9))){
var inst_33704 = (state_33720[(9)]);
var inst_33706 = (state_33720[(10)]);
var inst_33708 = inst_33706.call(null,inst_33704);
var state_33720__$1 = state_33720;
var statearr_33730_33748 = state_33720__$1;
(statearr_33730_33748[(2)] = inst_33708);

(statearr_33730_33748[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (5))){
var inst_33700 = (state_33720[(7)]);
var inst_33702 = figwheel.client.file_reloading.blocking_load.call(null,inst_33700);
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33720__$1,(8),inst_33702);
} else {
if((state_val_33721 === (10))){
var inst_33704 = (state_33720[(9)]);
var inst_33710 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33704);
var state_33720__$1 = state_33720;
var statearr_33731_33749 = state_33720__$1;
(statearr_33731_33749[(2)] = inst_33710);

(statearr_33731_33749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (8))){
var inst_33700 = (state_33720[(7)]);
var inst_33706 = (state_33720[(10)]);
var inst_33704 = (state_33720[(2)]);
var inst_33705 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33706__$1 = cljs.core.get.call(null,inst_33705,inst_33700);
var state_33720__$1 = (function (){var statearr_33732 = state_33720;
(statearr_33732[(9)] = inst_33704);

(statearr_33732[(10)] = inst_33706__$1);

return statearr_33732;
})();
if(cljs.core.truth_(inst_33706__$1)){
var statearr_33733_33750 = state_33720__$1;
(statearr_33733_33750[(1)] = (9));

} else {
var statearr_33734_33751 = state_33720__$1;
(statearr_33734_33751[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28151__auto__))
;
return ((function (switch__28039__auto__,c__28151__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28040__auto__ = null;
var figwheel$client$file_reloading$state_machine__28040__auto____0 = (function (){
var statearr_33738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33738[(0)] = figwheel$client$file_reloading$state_machine__28040__auto__);

(statearr_33738[(1)] = (1));

return statearr_33738;
});
var figwheel$client$file_reloading$state_machine__28040__auto____1 = (function (state_33720){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_33720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e33739){if((e33739 instanceof Object)){
var ex__28043__auto__ = e33739;
var statearr_33740_33752 = state_33720;
(statearr_33740_33752[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33753 = state_33720;
state_33720 = G__33753;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28040__auto__ = function(state_33720){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28040__auto____1.call(this,state_33720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28040__auto____0;
figwheel$client$file_reloading$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28040__auto____1;
return figwheel$client$file_reloading$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_33741 = f__28152__auto__.call(null);
(statearr_33741[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_33741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33754,callback){
var map__33757 = p__33754;
var map__33757__$1 = ((((!((map__33757 == null)))?((((map__33757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33757):map__33757);
var file_msg = map__33757__$1;
var namespace = cljs.core.get.call(null,map__33757__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33757,map__33757__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33757,map__33757__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33759){
var map__33762 = p__33759;
var map__33762__$1 = ((((!((map__33762 == null)))?((((map__33762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33762):map__33762);
var file_msg = map__33762__$1;
var namespace = cljs.core.get.call(null,map__33762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33764){
var map__33767 = p__33764;
var map__33767__$1 = ((((!((map__33767 == null)))?((((map__33767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33767):map__33767);
var file_msg = map__33767__$1;
var namespace = cljs.core.get.call(null,map__33767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25967__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25967__auto__){
var or__25979__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25967__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33769,callback){
var map__33772 = p__33769;
var map__33772__$1 = ((((!((map__33772 == null)))?((((map__33772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33772):map__33772);
var file_msg = map__33772__$1;
var request_url = cljs.core.get.call(null,map__33772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28151__auto___33876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___33876,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___33876,out){
return (function (state_33858){
var state_val_33859 = (state_33858[(1)]);
if((state_val_33859 === (1))){
var inst_33832 = cljs.core.seq.call(null,files);
var inst_33833 = cljs.core.first.call(null,inst_33832);
var inst_33834 = cljs.core.next.call(null,inst_33832);
var inst_33835 = files;
var state_33858__$1 = (function (){var statearr_33860 = state_33858;
(statearr_33860[(7)] = inst_33834);

(statearr_33860[(8)] = inst_33835);

(statearr_33860[(9)] = inst_33833);

return statearr_33860;
})();
var statearr_33861_33877 = state_33858__$1;
(statearr_33861_33877[(2)] = null);

(statearr_33861_33877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (2))){
var inst_33841 = (state_33858[(10)]);
var inst_33835 = (state_33858[(8)]);
var inst_33840 = cljs.core.seq.call(null,inst_33835);
var inst_33841__$1 = cljs.core.first.call(null,inst_33840);
var inst_33842 = cljs.core.next.call(null,inst_33840);
var inst_33843 = (inst_33841__$1 == null);
var inst_33844 = cljs.core.not.call(null,inst_33843);
var state_33858__$1 = (function (){var statearr_33862 = state_33858;
(statearr_33862[(10)] = inst_33841__$1);

(statearr_33862[(11)] = inst_33842);

return statearr_33862;
})();
if(inst_33844){
var statearr_33863_33878 = state_33858__$1;
(statearr_33863_33878[(1)] = (4));

} else {
var statearr_33864_33879 = state_33858__$1;
(statearr_33864_33879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (3))){
var inst_33856 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33858__$1,inst_33856);
} else {
if((state_val_33859 === (4))){
var inst_33841 = (state_33858[(10)]);
var inst_33846 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33841);
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33858__$1,(7),inst_33846);
} else {
if((state_val_33859 === (5))){
var inst_33852 = cljs.core.async.close_BANG_.call(null,out);
var state_33858__$1 = state_33858;
var statearr_33865_33880 = state_33858__$1;
(statearr_33865_33880[(2)] = inst_33852);

(statearr_33865_33880[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (6))){
var inst_33854 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
var statearr_33866_33881 = state_33858__$1;
(statearr_33866_33881[(2)] = inst_33854);

(statearr_33866_33881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (7))){
var inst_33842 = (state_33858[(11)]);
var inst_33848 = (state_33858[(2)]);
var inst_33849 = cljs.core.async.put_BANG_.call(null,out,inst_33848);
var inst_33835 = inst_33842;
var state_33858__$1 = (function (){var statearr_33867 = state_33858;
(statearr_33867[(12)] = inst_33849);

(statearr_33867[(8)] = inst_33835);

return statearr_33867;
})();
var statearr_33868_33882 = state_33858__$1;
(statearr_33868_33882[(2)] = null);

(statearr_33868_33882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28151__auto___33876,out))
;
return ((function (switch__28039__auto__,c__28151__auto___33876,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto____0 = (function (){
var statearr_33872 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33872[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto__);

(statearr_33872[(1)] = (1));

return statearr_33872;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto____1 = (function (state_33858){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_33858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e33873){if((e33873 instanceof Object)){
var ex__28043__auto__ = e33873;
var statearr_33874_33883 = state_33858;
(statearr_33874_33883[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33884 = state_33858;
state_33858 = G__33884;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto__ = function(state_33858){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto____1.call(this,state_33858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___33876,out))
})();
var state__28153__auto__ = (function (){var statearr_33875 = f__28152__auto__.call(null);
(statearr_33875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___33876);

return statearr_33875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___33876,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33885,opts){
var map__33889 = p__33885;
var map__33889__$1 = ((((!((map__33889 == null)))?((((map__33889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33889):map__33889);
var eval_body__$1 = cljs.core.get.call(null,map__33889__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33889__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25967__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25967__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25967__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33891){var e = e33891;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33892_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33892_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33901){
var vec__33902 = p__33901;
var k = cljs.core.nth.call(null,vec__33902,(0),null);
var v = cljs.core.nth.call(null,vec__33902,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33905){
var vec__33906 = p__33905;
var k = cljs.core.nth.call(null,vec__33906,(0),null);
var v = cljs.core.nth.call(null,vec__33906,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33912,p__33913){
var map__34160 = p__33912;
var map__34160__$1 = ((((!((map__34160 == null)))?((((map__34160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34160):map__34160);
var opts = map__34160__$1;
var before_jsload = cljs.core.get.call(null,map__34160__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34160__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34160__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34161 = p__33913;
var map__34161__$1 = ((((!((map__34161 == null)))?((((map__34161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34161):map__34161);
var msg = map__34161__$1;
var files = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34161__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34314){
var state_val_34315 = (state_34314[(1)]);
if((state_val_34315 === (7))){
var inst_34175 = (state_34314[(7)]);
var inst_34178 = (state_34314[(8)]);
var inst_34176 = (state_34314[(9)]);
var inst_34177 = (state_34314[(10)]);
var inst_34183 = cljs.core._nth.call(null,inst_34176,inst_34178);
var inst_34184 = figwheel.client.file_reloading.eval_body.call(null,inst_34183,opts);
var inst_34185 = (inst_34178 + (1));
var tmp34316 = inst_34175;
var tmp34317 = inst_34176;
var tmp34318 = inst_34177;
var inst_34175__$1 = tmp34316;
var inst_34176__$1 = tmp34317;
var inst_34177__$1 = tmp34318;
var inst_34178__$1 = inst_34185;
var state_34314__$1 = (function (){var statearr_34319 = state_34314;
(statearr_34319[(7)] = inst_34175__$1);

(statearr_34319[(8)] = inst_34178__$1);

(statearr_34319[(9)] = inst_34176__$1);

(statearr_34319[(11)] = inst_34184);

(statearr_34319[(10)] = inst_34177__$1);

return statearr_34319;
})();
var statearr_34320_34406 = state_34314__$1;
(statearr_34320_34406[(2)] = null);

(statearr_34320_34406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (20))){
var inst_34218 = (state_34314[(12)]);
var inst_34226 = figwheel.client.file_reloading.sort_files.call(null,inst_34218);
var state_34314__$1 = state_34314;
var statearr_34321_34407 = state_34314__$1;
(statearr_34321_34407[(2)] = inst_34226);

(statearr_34321_34407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (27))){
var state_34314__$1 = state_34314;
var statearr_34322_34408 = state_34314__$1;
(statearr_34322_34408[(2)] = null);

(statearr_34322_34408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (1))){
var inst_34167 = (state_34314[(13)]);
var inst_34164 = before_jsload.call(null,files);
var inst_34165 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34166 = (function (){return ((function (inst_34167,inst_34164,inst_34165,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33909_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33909_SHARP_);
});
;})(inst_34167,inst_34164,inst_34165,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34167__$1 = cljs.core.filter.call(null,inst_34166,files);
var inst_34168 = cljs.core.not_empty.call(null,inst_34167__$1);
var state_34314__$1 = (function (){var statearr_34323 = state_34314;
(statearr_34323[(14)] = inst_34165);

(statearr_34323[(15)] = inst_34164);

(statearr_34323[(13)] = inst_34167__$1);

return statearr_34323;
})();
if(cljs.core.truth_(inst_34168)){
var statearr_34324_34409 = state_34314__$1;
(statearr_34324_34409[(1)] = (2));

} else {
var statearr_34325_34410 = state_34314__$1;
(statearr_34325_34410[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (24))){
var state_34314__$1 = state_34314;
var statearr_34326_34411 = state_34314__$1;
(statearr_34326_34411[(2)] = null);

(statearr_34326_34411[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (39))){
var inst_34268 = (state_34314[(16)]);
var state_34314__$1 = state_34314;
var statearr_34327_34412 = state_34314__$1;
(statearr_34327_34412[(2)] = inst_34268);

(statearr_34327_34412[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (46))){
var inst_34309 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
var statearr_34328_34413 = state_34314__$1;
(statearr_34328_34413[(2)] = inst_34309);

(statearr_34328_34413[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (4))){
var inst_34212 = (state_34314[(2)]);
var inst_34213 = cljs.core.List.EMPTY;
var inst_34214 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34213);
var inst_34215 = (function (){return ((function (inst_34212,inst_34213,inst_34214,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33910_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33910_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33910_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33910_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_34212,inst_34213,inst_34214,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34216 = cljs.core.filter.call(null,inst_34215,files);
var inst_34217 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34218 = cljs.core.concat.call(null,inst_34216,inst_34217);
var state_34314__$1 = (function (){var statearr_34329 = state_34314;
(statearr_34329[(12)] = inst_34218);

(statearr_34329[(17)] = inst_34212);

(statearr_34329[(18)] = inst_34214);

return statearr_34329;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34330_34414 = state_34314__$1;
(statearr_34330_34414[(1)] = (16));

} else {
var statearr_34331_34415 = state_34314__$1;
(statearr_34331_34415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (15))){
var inst_34202 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
var statearr_34332_34416 = state_34314__$1;
(statearr_34332_34416[(2)] = inst_34202);

(statearr_34332_34416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (21))){
var inst_34228 = (state_34314[(19)]);
var inst_34228__$1 = (state_34314[(2)]);
var inst_34229 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34228__$1);
var state_34314__$1 = (function (){var statearr_34333 = state_34314;
(statearr_34333[(19)] = inst_34228__$1);

return statearr_34333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34314__$1,(22),inst_34229);
} else {
if((state_val_34315 === (31))){
var inst_34312 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34314__$1,inst_34312);
} else {
if((state_val_34315 === (32))){
var inst_34268 = (state_34314[(16)]);
var inst_34273 = inst_34268.cljs$lang$protocol_mask$partition0$;
var inst_34274 = (inst_34273 & (64));
var inst_34275 = inst_34268.cljs$core$ISeq$;
var inst_34276 = (inst_34274) || (inst_34275);
var state_34314__$1 = state_34314;
if(cljs.core.truth_(inst_34276)){
var statearr_34334_34417 = state_34314__$1;
(statearr_34334_34417[(1)] = (35));

} else {
var statearr_34335_34418 = state_34314__$1;
(statearr_34335_34418[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (40))){
var inst_34289 = (state_34314[(20)]);
var inst_34288 = (state_34314[(2)]);
var inst_34289__$1 = cljs.core.get.call(null,inst_34288,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34290 = cljs.core.get.call(null,inst_34288,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34291 = cljs.core.not_empty.call(null,inst_34289__$1);
var state_34314__$1 = (function (){var statearr_34336 = state_34314;
(statearr_34336[(21)] = inst_34290);

(statearr_34336[(20)] = inst_34289__$1);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34291)){
var statearr_34337_34419 = state_34314__$1;
(statearr_34337_34419[(1)] = (41));

} else {
var statearr_34338_34420 = state_34314__$1;
(statearr_34338_34420[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (33))){
var state_34314__$1 = state_34314;
var statearr_34339_34421 = state_34314__$1;
(statearr_34339_34421[(2)] = false);

(statearr_34339_34421[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (13))){
var inst_34188 = (state_34314[(22)]);
var inst_34192 = cljs.core.chunk_first.call(null,inst_34188);
var inst_34193 = cljs.core.chunk_rest.call(null,inst_34188);
var inst_34194 = cljs.core.count.call(null,inst_34192);
var inst_34175 = inst_34193;
var inst_34176 = inst_34192;
var inst_34177 = inst_34194;
var inst_34178 = (0);
var state_34314__$1 = (function (){var statearr_34340 = state_34314;
(statearr_34340[(7)] = inst_34175);

(statearr_34340[(8)] = inst_34178);

(statearr_34340[(9)] = inst_34176);

(statearr_34340[(10)] = inst_34177);

return statearr_34340;
})();
var statearr_34341_34422 = state_34314__$1;
(statearr_34341_34422[(2)] = null);

(statearr_34341_34422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (22))){
var inst_34236 = (state_34314[(23)]);
var inst_34232 = (state_34314[(24)]);
var inst_34231 = (state_34314[(25)]);
var inst_34228 = (state_34314[(19)]);
var inst_34231__$1 = (state_34314[(2)]);
var inst_34232__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34231__$1);
var inst_34233 = (function (){var all_files = inst_34228;
var res_SINGLEQUOTE_ = inst_34231__$1;
var res = inst_34232__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34236,inst_34232,inst_34231,inst_34228,inst_34231__$1,inst_34232__$1,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33911_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33911_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34236,inst_34232,inst_34231,inst_34228,inst_34231__$1,inst_34232__$1,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34234 = cljs.core.filter.call(null,inst_34233,inst_34231__$1);
var inst_34235 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34236__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34235);
var inst_34237 = cljs.core.not_empty.call(null,inst_34236__$1);
var state_34314__$1 = (function (){var statearr_34342 = state_34314;
(statearr_34342[(26)] = inst_34234);

(statearr_34342[(23)] = inst_34236__$1);

(statearr_34342[(24)] = inst_34232__$1);

(statearr_34342[(25)] = inst_34231__$1);

return statearr_34342;
})();
if(cljs.core.truth_(inst_34237)){
var statearr_34343_34423 = state_34314__$1;
(statearr_34343_34423[(1)] = (23));

} else {
var statearr_34344_34424 = state_34314__$1;
(statearr_34344_34424[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (36))){
var state_34314__$1 = state_34314;
var statearr_34345_34425 = state_34314__$1;
(statearr_34345_34425[(2)] = false);

(statearr_34345_34425[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (41))){
var inst_34289 = (state_34314[(20)]);
var inst_34293 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34294 = cljs.core.map.call(null,inst_34293,inst_34289);
var inst_34295 = cljs.core.pr_str.call(null,inst_34294);
var inst_34296 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34295)].join('');
var inst_34297 = figwheel.client.utils.log.call(null,inst_34296);
var state_34314__$1 = state_34314;
var statearr_34346_34426 = state_34314__$1;
(statearr_34346_34426[(2)] = inst_34297);

(statearr_34346_34426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (43))){
var inst_34290 = (state_34314[(21)]);
var inst_34300 = (state_34314[(2)]);
var inst_34301 = cljs.core.not_empty.call(null,inst_34290);
var state_34314__$1 = (function (){var statearr_34347 = state_34314;
(statearr_34347[(27)] = inst_34300);

return statearr_34347;
})();
if(cljs.core.truth_(inst_34301)){
var statearr_34348_34427 = state_34314__$1;
(statearr_34348_34427[(1)] = (44));

} else {
var statearr_34349_34428 = state_34314__$1;
(statearr_34349_34428[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (29))){
var inst_34234 = (state_34314[(26)]);
var inst_34268 = (state_34314[(16)]);
var inst_34236 = (state_34314[(23)]);
var inst_34232 = (state_34314[(24)]);
var inst_34231 = (state_34314[(25)]);
var inst_34228 = (state_34314[(19)]);
var inst_34264 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34267 = (function (){var all_files = inst_34228;
var res_SINGLEQUOTE_ = inst_34231;
var res = inst_34232;
var files_not_loaded = inst_34234;
var dependencies_that_loaded = inst_34236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34268,inst_34236,inst_34232,inst_34231,inst_34228,inst_34264,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34266){
var map__34350 = p__34266;
var map__34350__$1 = ((((!((map__34350 == null)))?((((map__34350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34350):map__34350);
var namespace = cljs.core.get.call(null,map__34350__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34268,inst_34236,inst_34232,inst_34231,inst_34228,inst_34264,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34268__$1 = cljs.core.group_by.call(null,inst_34267,inst_34234);
var inst_34270 = (inst_34268__$1 == null);
var inst_34271 = cljs.core.not.call(null,inst_34270);
var state_34314__$1 = (function (){var statearr_34352 = state_34314;
(statearr_34352[(16)] = inst_34268__$1);

(statearr_34352[(28)] = inst_34264);

return statearr_34352;
})();
if(inst_34271){
var statearr_34353_34429 = state_34314__$1;
(statearr_34353_34429[(1)] = (32));

} else {
var statearr_34354_34430 = state_34314__$1;
(statearr_34354_34430[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (44))){
var inst_34290 = (state_34314[(21)]);
var inst_34303 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34290);
var inst_34304 = cljs.core.pr_str.call(null,inst_34303);
var inst_34305 = [cljs.core.str("not required: "),cljs.core.str(inst_34304)].join('');
var inst_34306 = figwheel.client.utils.log.call(null,inst_34305);
var state_34314__$1 = state_34314;
var statearr_34355_34431 = state_34314__$1;
(statearr_34355_34431[(2)] = inst_34306);

(statearr_34355_34431[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (6))){
var inst_34209 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
var statearr_34356_34432 = state_34314__$1;
(statearr_34356_34432[(2)] = inst_34209);

(statearr_34356_34432[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (28))){
var inst_34234 = (state_34314[(26)]);
var inst_34261 = (state_34314[(2)]);
var inst_34262 = cljs.core.not_empty.call(null,inst_34234);
var state_34314__$1 = (function (){var statearr_34357 = state_34314;
(statearr_34357[(29)] = inst_34261);

return statearr_34357;
})();
if(cljs.core.truth_(inst_34262)){
var statearr_34358_34433 = state_34314__$1;
(statearr_34358_34433[(1)] = (29));

} else {
var statearr_34359_34434 = state_34314__$1;
(statearr_34359_34434[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (25))){
var inst_34232 = (state_34314[(24)]);
var inst_34248 = (state_34314[(2)]);
var inst_34249 = cljs.core.not_empty.call(null,inst_34232);
var state_34314__$1 = (function (){var statearr_34360 = state_34314;
(statearr_34360[(30)] = inst_34248);

return statearr_34360;
})();
if(cljs.core.truth_(inst_34249)){
var statearr_34361_34435 = state_34314__$1;
(statearr_34361_34435[(1)] = (26));

} else {
var statearr_34362_34436 = state_34314__$1;
(statearr_34362_34436[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (34))){
var inst_34283 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
if(cljs.core.truth_(inst_34283)){
var statearr_34363_34437 = state_34314__$1;
(statearr_34363_34437[(1)] = (38));

} else {
var statearr_34364_34438 = state_34314__$1;
(statearr_34364_34438[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (17))){
var state_34314__$1 = state_34314;
var statearr_34365_34439 = state_34314__$1;
(statearr_34365_34439[(2)] = recompile_dependents);

(statearr_34365_34439[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (3))){
var state_34314__$1 = state_34314;
var statearr_34366_34440 = state_34314__$1;
(statearr_34366_34440[(2)] = null);

(statearr_34366_34440[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (12))){
var inst_34205 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
var statearr_34367_34441 = state_34314__$1;
(statearr_34367_34441[(2)] = inst_34205);

(statearr_34367_34441[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (2))){
var inst_34167 = (state_34314[(13)]);
var inst_34174 = cljs.core.seq.call(null,inst_34167);
var inst_34175 = inst_34174;
var inst_34176 = null;
var inst_34177 = (0);
var inst_34178 = (0);
var state_34314__$1 = (function (){var statearr_34368 = state_34314;
(statearr_34368[(7)] = inst_34175);

(statearr_34368[(8)] = inst_34178);

(statearr_34368[(9)] = inst_34176);

(statearr_34368[(10)] = inst_34177);

return statearr_34368;
})();
var statearr_34369_34442 = state_34314__$1;
(statearr_34369_34442[(2)] = null);

(statearr_34369_34442[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (23))){
var inst_34234 = (state_34314[(26)]);
var inst_34236 = (state_34314[(23)]);
var inst_34232 = (state_34314[(24)]);
var inst_34231 = (state_34314[(25)]);
var inst_34228 = (state_34314[(19)]);
var inst_34239 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34241 = (function (){var all_files = inst_34228;
var res_SINGLEQUOTE_ = inst_34231;
var res = inst_34232;
var files_not_loaded = inst_34234;
var dependencies_that_loaded = inst_34236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34236,inst_34232,inst_34231,inst_34228,inst_34239,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34240){
var map__34370 = p__34240;
var map__34370__$1 = ((((!((map__34370 == null)))?((((map__34370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34370):map__34370);
var request_url = cljs.core.get.call(null,map__34370__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34236,inst_34232,inst_34231,inst_34228,inst_34239,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34242 = cljs.core.reverse.call(null,inst_34236);
var inst_34243 = cljs.core.map.call(null,inst_34241,inst_34242);
var inst_34244 = cljs.core.pr_str.call(null,inst_34243);
var inst_34245 = figwheel.client.utils.log.call(null,inst_34244);
var state_34314__$1 = (function (){var statearr_34372 = state_34314;
(statearr_34372[(31)] = inst_34239);

return statearr_34372;
})();
var statearr_34373_34443 = state_34314__$1;
(statearr_34373_34443[(2)] = inst_34245);

(statearr_34373_34443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (35))){
var state_34314__$1 = state_34314;
var statearr_34374_34444 = state_34314__$1;
(statearr_34374_34444[(2)] = true);

(statearr_34374_34444[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (19))){
var inst_34218 = (state_34314[(12)]);
var inst_34224 = figwheel.client.file_reloading.expand_files.call(null,inst_34218);
var state_34314__$1 = state_34314;
var statearr_34375_34445 = state_34314__$1;
(statearr_34375_34445[(2)] = inst_34224);

(statearr_34375_34445[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (11))){
var state_34314__$1 = state_34314;
var statearr_34376_34446 = state_34314__$1;
(statearr_34376_34446[(2)] = null);

(statearr_34376_34446[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (9))){
var inst_34207 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
var statearr_34377_34447 = state_34314__$1;
(statearr_34377_34447[(2)] = inst_34207);

(statearr_34377_34447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (5))){
var inst_34178 = (state_34314[(8)]);
var inst_34177 = (state_34314[(10)]);
var inst_34180 = (inst_34178 < inst_34177);
var inst_34181 = inst_34180;
var state_34314__$1 = state_34314;
if(cljs.core.truth_(inst_34181)){
var statearr_34378_34448 = state_34314__$1;
(statearr_34378_34448[(1)] = (7));

} else {
var statearr_34379_34449 = state_34314__$1;
(statearr_34379_34449[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (14))){
var inst_34188 = (state_34314[(22)]);
var inst_34197 = cljs.core.first.call(null,inst_34188);
var inst_34198 = figwheel.client.file_reloading.eval_body.call(null,inst_34197,opts);
var inst_34199 = cljs.core.next.call(null,inst_34188);
var inst_34175 = inst_34199;
var inst_34176 = null;
var inst_34177 = (0);
var inst_34178 = (0);
var state_34314__$1 = (function (){var statearr_34380 = state_34314;
(statearr_34380[(32)] = inst_34198);

(statearr_34380[(7)] = inst_34175);

(statearr_34380[(8)] = inst_34178);

(statearr_34380[(9)] = inst_34176);

(statearr_34380[(10)] = inst_34177);

return statearr_34380;
})();
var statearr_34381_34450 = state_34314__$1;
(statearr_34381_34450[(2)] = null);

(statearr_34381_34450[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (45))){
var state_34314__$1 = state_34314;
var statearr_34382_34451 = state_34314__$1;
(statearr_34382_34451[(2)] = null);

(statearr_34382_34451[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (26))){
var inst_34234 = (state_34314[(26)]);
var inst_34236 = (state_34314[(23)]);
var inst_34232 = (state_34314[(24)]);
var inst_34231 = (state_34314[(25)]);
var inst_34228 = (state_34314[(19)]);
var inst_34251 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34253 = (function (){var all_files = inst_34228;
var res_SINGLEQUOTE_ = inst_34231;
var res = inst_34232;
var files_not_loaded = inst_34234;
var dependencies_that_loaded = inst_34236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34236,inst_34232,inst_34231,inst_34228,inst_34251,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34252){
var map__34383 = p__34252;
var map__34383__$1 = ((((!((map__34383 == null)))?((((map__34383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34383):map__34383);
var namespace = cljs.core.get.call(null,map__34383__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34383__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34236,inst_34232,inst_34231,inst_34228,inst_34251,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34254 = cljs.core.map.call(null,inst_34253,inst_34232);
var inst_34255 = cljs.core.pr_str.call(null,inst_34254);
var inst_34256 = figwheel.client.utils.log.call(null,inst_34255);
var inst_34257 = (function (){var all_files = inst_34228;
var res_SINGLEQUOTE_ = inst_34231;
var res = inst_34232;
var files_not_loaded = inst_34234;
var dependencies_that_loaded = inst_34236;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34236,inst_34232,inst_34231,inst_34228,inst_34251,inst_34253,inst_34254,inst_34255,inst_34256,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34234,inst_34236,inst_34232,inst_34231,inst_34228,inst_34251,inst_34253,inst_34254,inst_34255,inst_34256,state_val_34315,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34258 = setTimeout(inst_34257,(10));
var state_34314__$1 = (function (){var statearr_34385 = state_34314;
(statearr_34385[(33)] = inst_34256);

(statearr_34385[(34)] = inst_34251);

return statearr_34385;
})();
var statearr_34386_34452 = state_34314__$1;
(statearr_34386_34452[(2)] = inst_34258);

(statearr_34386_34452[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (16))){
var state_34314__$1 = state_34314;
var statearr_34387_34453 = state_34314__$1;
(statearr_34387_34453[(2)] = reload_dependents);

(statearr_34387_34453[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (38))){
var inst_34268 = (state_34314[(16)]);
var inst_34285 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34268);
var state_34314__$1 = state_34314;
var statearr_34388_34454 = state_34314__$1;
(statearr_34388_34454[(2)] = inst_34285);

(statearr_34388_34454[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (30))){
var state_34314__$1 = state_34314;
var statearr_34389_34455 = state_34314__$1;
(statearr_34389_34455[(2)] = null);

(statearr_34389_34455[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (10))){
var inst_34188 = (state_34314[(22)]);
var inst_34190 = cljs.core.chunked_seq_QMARK_.call(null,inst_34188);
var state_34314__$1 = state_34314;
if(inst_34190){
var statearr_34390_34456 = state_34314__$1;
(statearr_34390_34456[(1)] = (13));

} else {
var statearr_34391_34457 = state_34314__$1;
(statearr_34391_34457[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (18))){
var inst_34222 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
if(cljs.core.truth_(inst_34222)){
var statearr_34392_34458 = state_34314__$1;
(statearr_34392_34458[(1)] = (19));

} else {
var statearr_34393_34459 = state_34314__$1;
(statearr_34393_34459[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (42))){
var state_34314__$1 = state_34314;
var statearr_34394_34460 = state_34314__$1;
(statearr_34394_34460[(2)] = null);

(statearr_34394_34460[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (37))){
var inst_34280 = (state_34314[(2)]);
var state_34314__$1 = state_34314;
var statearr_34395_34461 = state_34314__$1;
(statearr_34395_34461[(2)] = inst_34280);

(statearr_34395_34461[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34315 === (8))){
var inst_34175 = (state_34314[(7)]);
var inst_34188 = (state_34314[(22)]);
var inst_34188__$1 = cljs.core.seq.call(null,inst_34175);
var state_34314__$1 = (function (){var statearr_34396 = state_34314;
(statearr_34396[(22)] = inst_34188__$1);

return statearr_34396;
})();
if(inst_34188__$1){
var statearr_34397_34462 = state_34314__$1;
(statearr_34397_34462[(1)] = (10));

} else {
var statearr_34398_34463 = state_34314__$1;
(statearr_34398_34463[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28039__auto__,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto____0 = (function (){
var statearr_34402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34402[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto__);

(statearr_34402[(1)] = (1));

return statearr_34402;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto____1 = (function (state_34314){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_34314);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e34403){if((e34403 instanceof Object)){
var ex__28043__auto__ = e34403;
var statearr_34404_34464 = state_34314;
(statearr_34404_34464[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34465 = state_34314;
state_34314 = G__34465;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto__ = function(state_34314){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto____1.call(this,state_34314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28153__auto__ = (function (){var statearr_34405 = f__28152__auto__.call(null);
(statearr_34405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_34405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__,map__34160,map__34160__$1,opts,before_jsload,on_jsload,reload_dependents,map__34161,map__34161__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28151__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34468,link){
var map__34471 = p__34468;
var map__34471__$1 = ((((!((map__34471 == null)))?((((map__34471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34471):map__34471);
var file = cljs.core.get.call(null,map__34471__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34471,map__34471__$1,file){
return (function (p1__34466_SHARP_,p2__34467_SHARP_){
if(cljs.core._EQ_.call(null,p1__34466_SHARP_,p2__34467_SHARP_)){
return p1__34466_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34471,map__34471__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34477){
var map__34478 = p__34477;
var map__34478__$1 = ((((!((map__34478 == null)))?((((map__34478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34478):map__34478);
var match_length = cljs.core.get.call(null,map__34478__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34478__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34473_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34473_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34480_SHARP_,p2__34481_SHARP_){
return cljs.core.assoc.call(null,p1__34480_SHARP_,cljs.core.get.call(null,p2__34481_SHARP_,key),p2__34481_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34482 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34482);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34482);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34483,p__34484){
var map__34489 = p__34483;
var map__34489__$1 = ((((!((map__34489 == null)))?((((map__34489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34489):map__34489);
var on_cssload = cljs.core.get.call(null,map__34489__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34490 = p__34484;
var map__34490__$1 = ((((!((map__34490 == null)))?((((map__34490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34490):map__34490);
var files_msg = map__34490__$1;
var files = cljs.core.get.call(null,map__34490__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1499200994298