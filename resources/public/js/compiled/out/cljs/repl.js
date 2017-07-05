// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35810){
var map__35835 = p__35810;
var map__35835__$1 = ((((!((map__35835 == null)))?((((map__35835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35835):map__35835);
var m = map__35835__$1;
var n = cljs.core.get.call(null,map__35835__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35835__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35837_35859 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35838_35860 = null;
var count__35839_35861 = (0);
var i__35840_35862 = (0);
while(true){
if((i__35840_35862 < count__35839_35861)){
var f_35863 = cljs.core._nth.call(null,chunk__35838_35860,i__35840_35862);
cljs.core.println.call(null,"  ",f_35863);

var G__35864 = seq__35837_35859;
var G__35865 = chunk__35838_35860;
var G__35866 = count__35839_35861;
var G__35867 = (i__35840_35862 + (1));
seq__35837_35859 = G__35864;
chunk__35838_35860 = G__35865;
count__35839_35861 = G__35866;
i__35840_35862 = G__35867;
continue;
} else {
var temp__4657__auto___35868 = cljs.core.seq.call(null,seq__35837_35859);
if(temp__4657__auto___35868){
var seq__35837_35869__$1 = temp__4657__auto___35868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35837_35869__$1)){
var c__26790__auto___35870 = cljs.core.chunk_first.call(null,seq__35837_35869__$1);
var G__35871 = cljs.core.chunk_rest.call(null,seq__35837_35869__$1);
var G__35872 = c__26790__auto___35870;
var G__35873 = cljs.core.count.call(null,c__26790__auto___35870);
var G__35874 = (0);
seq__35837_35859 = G__35871;
chunk__35838_35860 = G__35872;
count__35839_35861 = G__35873;
i__35840_35862 = G__35874;
continue;
} else {
var f_35875 = cljs.core.first.call(null,seq__35837_35869__$1);
cljs.core.println.call(null,"  ",f_35875);

var G__35876 = cljs.core.next.call(null,seq__35837_35869__$1);
var G__35877 = null;
var G__35878 = (0);
var G__35879 = (0);
seq__35837_35859 = G__35876;
chunk__35838_35860 = G__35877;
count__35839_35861 = G__35878;
i__35840_35862 = G__35879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35880 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35880);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35880)))?cljs.core.second.call(null,arglists_35880):arglists_35880));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35841_35881 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35842_35882 = null;
var count__35843_35883 = (0);
var i__35844_35884 = (0);
while(true){
if((i__35844_35884 < count__35843_35883)){
var vec__35845_35885 = cljs.core._nth.call(null,chunk__35842_35882,i__35844_35884);
var name_35886 = cljs.core.nth.call(null,vec__35845_35885,(0),null);
var map__35848_35887 = cljs.core.nth.call(null,vec__35845_35885,(1),null);
var map__35848_35888__$1 = ((((!((map__35848_35887 == null)))?((((map__35848_35887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35848_35887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35848_35887):map__35848_35887);
var doc_35889 = cljs.core.get.call(null,map__35848_35888__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35890 = cljs.core.get.call(null,map__35848_35888__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35886);

cljs.core.println.call(null," ",arglists_35890);

if(cljs.core.truth_(doc_35889)){
cljs.core.println.call(null," ",doc_35889);
} else {
}

var G__35891 = seq__35841_35881;
var G__35892 = chunk__35842_35882;
var G__35893 = count__35843_35883;
var G__35894 = (i__35844_35884 + (1));
seq__35841_35881 = G__35891;
chunk__35842_35882 = G__35892;
count__35843_35883 = G__35893;
i__35844_35884 = G__35894;
continue;
} else {
var temp__4657__auto___35895 = cljs.core.seq.call(null,seq__35841_35881);
if(temp__4657__auto___35895){
var seq__35841_35896__$1 = temp__4657__auto___35895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35841_35896__$1)){
var c__26790__auto___35897 = cljs.core.chunk_first.call(null,seq__35841_35896__$1);
var G__35898 = cljs.core.chunk_rest.call(null,seq__35841_35896__$1);
var G__35899 = c__26790__auto___35897;
var G__35900 = cljs.core.count.call(null,c__26790__auto___35897);
var G__35901 = (0);
seq__35841_35881 = G__35898;
chunk__35842_35882 = G__35899;
count__35843_35883 = G__35900;
i__35844_35884 = G__35901;
continue;
} else {
var vec__35850_35902 = cljs.core.first.call(null,seq__35841_35896__$1);
var name_35903 = cljs.core.nth.call(null,vec__35850_35902,(0),null);
var map__35853_35904 = cljs.core.nth.call(null,vec__35850_35902,(1),null);
var map__35853_35905__$1 = ((((!((map__35853_35904 == null)))?((((map__35853_35904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35853_35904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35853_35904):map__35853_35904);
var doc_35906 = cljs.core.get.call(null,map__35853_35905__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35907 = cljs.core.get.call(null,map__35853_35905__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35903);

cljs.core.println.call(null," ",arglists_35907);

if(cljs.core.truth_(doc_35906)){
cljs.core.println.call(null," ",doc_35906);
} else {
}

var G__35908 = cljs.core.next.call(null,seq__35841_35896__$1);
var G__35909 = null;
var G__35910 = (0);
var G__35911 = (0);
seq__35841_35881 = G__35908;
chunk__35842_35882 = G__35909;
count__35843_35883 = G__35910;
i__35844_35884 = G__35911;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35855 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35856 = null;
var count__35857 = (0);
var i__35858 = (0);
while(true){
if((i__35858 < count__35857)){
var role = cljs.core._nth.call(null,chunk__35856,i__35858);
var temp__4657__auto___35912__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35912__$1)){
var spec_35913 = temp__4657__auto___35912__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35913));
} else {
}

var G__35914 = seq__35855;
var G__35915 = chunk__35856;
var G__35916 = count__35857;
var G__35917 = (i__35858 + (1));
seq__35855 = G__35914;
chunk__35856 = G__35915;
count__35857 = G__35916;
i__35858 = G__35917;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35855);
if(temp__4657__auto____$1){
var seq__35855__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35855__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35855__$1);
var G__35918 = cljs.core.chunk_rest.call(null,seq__35855__$1);
var G__35919 = c__26790__auto__;
var G__35920 = cljs.core.count.call(null,c__26790__auto__);
var G__35921 = (0);
seq__35855 = G__35918;
chunk__35856 = G__35919;
count__35857 = G__35920;
i__35858 = G__35921;
continue;
} else {
var role = cljs.core.first.call(null,seq__35855__$1);
var temp__4657__auto___35922__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35922__$2)){
var spec_35923 = temp__4657__auto___35922__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35923));
} else {
}

var G__35924 = cljs.core.next.call(null,seq__35855__$1);
var G__35925 = null;
var G__35926 = (0);
var G__35927 = (0);
seq__35855 = G__35924;
chunk__35856 = G__35925;
count__35857 = G__35926;
i__35858 = G__35927;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1499200996101