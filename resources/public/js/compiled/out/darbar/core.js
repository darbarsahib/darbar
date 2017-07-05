// Compiled by ClojureScript 1.9.229 {}
goog.provide('darbar.core');
goog.require('cljs.core');
goog.require('hipo.core');
cljs.core.enable_console_print_BANG_.call(null);
darbar.core.p = document.getElementById("player");
darbar.core.t = (new Date());
darbar.core.seconds_since_2am = ((((darbar.core.t.getHours() - (2)) * (3600)) + (darbar.core.t.getMinutes() * (60))) + darbar.core.t.getSeconds());
darbar.core.month_names = cljs.core.PersistentHashMap.fromArrays([(7),(1),(4),(6),(3),(12),(2),(11),(9),(5),(10),(8)],["July","January","April","June","March","December","February","November","September","May","October","August"]);
darbar.core.urls = (function (){var yyyy = darbar.core.t.getFullYear();
var m = (darbar.core.t.getMonth() + (1));
var d = darbar.core.t.getDate();
var mm = (((m >= (10)))?[cljs.core.str(m)].join(''):[cljs.core.str((0)),cljs.core.str(m)].join(''));
var dd = (((d >= (10)))?[cljs.core.str(d)].join(''):[cljs.core.str((0)),cljs.core.str(d)].join(''));
var month = darbar.core.month_names.call(null,m);
var prev_month = darbar.core.month_names.call(null,(m - (1)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("http://new.sgpc.net/kirtan/"),cljs.core.str(yyyy),cljs.core.str("/"),cljs.core.str(month),cljs.core.str("/recorded"),cljs.core.str(dd),cljs.core.str(mm),cljs.core.str(yyyy),cljs.core.str(".mp3")].join(''),[cljs.core.str("http://new.sgpc.net/kirtan/"),cljs.core.str(yyyy),cljs.core.str("/"),cljs.core.str(month),cljs.core.str("/recorded"),cljs.core.str(dd),cljs.core.str(mm),cljs.core.str(yyyy),cljs.core.str("%20(1).mp3")].join(''),[cljs.core.str("http://new.sgpc.net/kirtan/"),cljs.core.str(yyyy),cljs.core.str("/"),cljs.core.str(month),cljs.core.str("/recorded"),cljs.core.str(dd),cljs.core.str(mm),cljs.core.str(yyyy),cljs.core.str("%20(2).mp3")].join(''),[cljs.core.str("http://new.sgpc.net/kirtan/"),cljs.core.str(yyyy),cljs.core.str("/"),cljs.core.str(prev_month),cljs.core.str("/recorded"),cljs.core.str(dd),cljs.core.str(mm),cljs.core.str(yyyy),cljs.core.str(".mp3")].join(''),[cljs.core.str("http://new.sgpc.net/kirtan/"),cljs.core.str(yyyy),cljs.core.str("/"),cljs.core.str(prev_month),cljs.core.str("/recorded"),cljs.core.str(dd),cljs.core.str(mm),cljs.core.str(yyyy),cljs.core.str("%20(1).mp3")].join(''),[cljs.core.str("http://new.sgpc.net/kirtan/"),cljs.core.str(yyyy),cljs.core.str("/"),cljs.core.str(prev_month),cljs.core.str("/recorded"),cljs.core.str(dd),cljs.core.str(mm),cljs.core.str(yyyy),cljs.core.str("%20(2).mp3")].join('')], null);
})();
darbar.core.make_source = (function darbar$core$make_source(url){
var v40657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),url,new cljs.core.Keyword(null,"type","type",1174270348),"audio/mpeg"], null)], null);
var el__31661__auto__ = hipo.interpreter.create.call(null,v40657,null);
hipo.core.set_hiccup_BANG_.call(null,el__31661__auto__,v40657);

return el__31661__auto__;
});
darbar.core.els = cljs.core.map.call(null,darbar.core.make_source,darbar.core.urls);
cljs.core.doall.call(null,(function (){var iter__26759__auto__ = (function darbar$core$iter__40658(s__40659){
return (new cljs.core.LazySeq(null,(function (){
var s__40659__$1 = s__40659;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40659__$1);
if(temp__4657__auto__){
var s__40659__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40659__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__40659__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__40661 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__40660 = (0);
while(true){
if((i__40660 < size__26758__auto__)){
var el = cljs.core._nth.call(null,c__26757__auto__,i__40660);
cljs.core.chunk_append.call(null,b__40661,darbar.core.p.appendChild(el));

var G__40662 = (i__40660 + (1));
i__40660 = G__40662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40661),darbar$core$iter__40658.call(null,cljs.core.chunk_rest.call(null,s__40659__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40661),null);
}
} else {
var el = cljs.core.first.call(null,s__40659__$2);
return cljs.core.cons.call(null,darbar.core.p.appendChild(el),darbar$core$iter__40658.call(null,cljs.core.rest.call(null,s__40659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26759__auto__.call(null,darbar.core.els);
})());
(darbar.core.p["currentTime"] = darbar.core.seconds_since_2am);
darbar.core.p.play();
darbar.core.on_js_reload = (function darbar$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1499221523851