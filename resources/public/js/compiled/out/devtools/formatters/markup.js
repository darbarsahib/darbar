// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.markup');
goog.require('cljs.core');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.printing');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.templating');
goog.require('devtools.munging');
devtools.formatters.markup.print_with = (function devtools$formatters$markup$print_with(var_args){
var args__27061__auto__ = [];
var len__27054__auto___39992 = arguments.length;
var i__27055__auto___39993 = (0);
while(true){
if((i__27055__auto___39993 < len__27054__auto___39992)){
args__27061__auto__.push((arguments[i__27055__auto___39993]));

var G__39994 = (i__27055__auto___39993 + (1));
i__27055__auto___39993 = G__39994;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic = (function (method,value,tag,p__39987){
var vec__39988 = p__39987;
var max_level = cljs.core.nth.call(null,vec__39988,(0),null);
var job_fn = ((function (vec__39988,max_level){
return (function (){
return method.call(null,value,tag,devtools.formatters.markup.get_markup_db.call(null));
});})(vec__39988,max_level))
;
if(cljs.core.some_QMARK_.call(null,max_level)){
var _STAR_print_level_STAR_39991 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (max_level + (1));

try{return job_fn.call(null);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39991;
}} else {
return job_fn.call(null);
}
});

devtools.formatters.markup.print_with.cljs$lang$maxFixedArity = (3);

devtools.formatters.markup.print_with.cljs$lang$applyTo = (function (seq39983){
var G__39984 = cljs.core.first.call(null,seq39983);
var seq39983__$1 = cljs.core.next.call(null,seq39983);
var G__39985 = cljs.core.first.call(null,seq39983__$1);
var seq39983__$2 = cljs.core.next.call(null,seq39983__$1);
var G__39986 = cljs.core.first.call(null,seq39983__$2);
var seq39983__$3 = cljs.core.next.call(null,seq39983__$2);
return devtools.formatters.markup.print_with.cljs$core$IFn$_invoke$arity$variadic(G__39984,G__39985,G__39986,seq39983__$3);
});

devtools.formatters.markup.print_via_writer = (function devtools$formatters$markup$print_via_writer(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40002 = arguments.length;
var i__27055__auto___40003 = (0);
while(true){
if((i__27055__auto___40003 < len__27054__auto___40002)){
args__27061__auto__.push((arguments[i__27055__auto___40003]));

var G__40004 = (i__27055__auto___40003 + (1));
i__27055__auto___40003 = G__40004;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__39998){
var vec__39999 = p__39998;
var max_level = cljs.core.nth.call(null,vec__39999,(0),null);
return devtools.formatters.markup.print_with.call(null,devtools.formatters.printing.managed_print_via_writer,value,tag,max_level);
});

devtools.formatters.markup.print_via_writer.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup.print_via_writer.cljs$lang$applyTo = (function (seq39995){
var G__39996 = cljs.core.first.call(null,seq39995);
var seq39995__$1 = cljs.core.next.call(null,seq39995);
var G__39997 = cljs.core.first.call(null,seq39995__$1);
var seq39995__$2 = cljs.core.next.call(null,seq39995__$1);
return devtools.formatters.markup.print_via_writer.cljs$core$IFn$_invoke$arity$variadic(G__39996,G__39997,seq39995__$2);
});

devtools.formatters.markup.print_via_protocol = (function devtools$formatters$markup$print_via_protocol(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40012 = arguments.length;
var i__27055__auto___40013 = (0);
while(true){
if((i__27055__auto___40013 < len__27054__auto___40012)){
args__27061__auto__.push((arguments[i__27055__auto___40013]));

var G__40014 = (i__27055__auto___40013 + (1));
i__27055__auto___40013 = G__40014;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (value,tag,p__40008){
var vec__40009 = p__40008;
var max_level = cljs.core.nth.call(null,vec__40009,(0),null);
return devtools.formatters.markup.print_with.call(null,devtools.formatters.printing.managed_print_via_protocol,value,tag,max_level);
});

devtools.formatters.markup.print_via_protocol.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup.print_via_protocol.cljs$lang$applyTo = (function (seq40005){
var G__40006 = cljs.core.first.call(null,seq40005);
var seq40005__$1 = cljs.core.next.call(null,seq40005);
var G__40007 = cljs.core.first.call(null,seq40005__$1);
var seq40005__$2 = cljs.core.next.call(null,seq40005__$1);
return devtools.formatters.markup.print_via_protocol.cljs$core$IFn$_invoke$arity$variadic(G__40006,G__40007,seq40005__$2);
});

devtools.formatters.markup._LT_expandable_GT_ = (function devtools$formatters$markup$_LT_expandable_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40016 = arguments.length;
var i__27055__auto___40017 = (0);
while(true){
if((i__27055__auto___40017 < len__27054__auto___40016)){
args__27061__auto__.push((arguments[i__27055__auto___40017]));

var G__40018 = (i__27055__auto___40017 + (1));
i__27055__auto___40017 = G__40018;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var inner_markup = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expandable-inner-tag","expandable-inner-tag",-799648560)], null),children);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expandable-tag","expandable-tag",151027578),new cljs.core.Keyword(null,"expandable-symbol","expandable-symbol",1644611290),inner_markup], null);
});

devtools.formatters.markup._LT_expandable_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_expandable_GT_.cljs$lang$applyTo = (function (seq40015){
return devtools.formatters.markup._LT_expandable_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40015));
});

devtools.formatters.markup._LT_raw_surrogate_GT_ = (function devtools$formatters$markup$_LT_raw_surrogate_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40020 = arguments.length;
var i__27055__auto___40021 = (0);
while(true){
if((i__27055__auto___40021 < len__27054__auto___40020)){
args__27061__auto__.push((arguments[i__27055__auto___40021]));

var G__40022 = (i__27055__auto___40021 + (1));
i__27055__auto___40021 = G__40022;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["surrogate"], null),args);
});

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$lang$applyTo = (function (seq40019){
return devtools.formatters.markup._LT_raw_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40019));
});

devtools.formatters.markup._LT_surrogate_GT_ = (function devtools$formatters$markup$_LT_surrogate_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40028 = arguments.length;
var i__27055__auto___40029 = (0);
while(true){
if((i__27055__auto___40029 < len__27054__auto___40028)){
args__27061__auto__.push((arguments[i__27055__auto___40029]));

var G__40030 = (i__27055__auto___40029 + (1));
i__27055__auto___40029 = G__40030;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (p__40024){
var vec__40025 = p__40024;
var object = cljs.core.nth.call(null,vec__40025,(0),null);
var header = cljs.core.nth.call(null,vec__40025,(1),null);
var body = cljs.core.nth.call(null,vec__40025,(2),null);
var start_index = cljs.core.nth.call(null,vec__40025,(3),null);
var header__$1 = ((cljs.core.some_QMARK_.call(null,body))?devtools.formatters.markup._LT_expandable_GT_.call(null,header):header);
return devtools.formatters.markup._LT_raw_surrogate_GT_.call(null,object,header__$1,body,start_index);
});

devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_surrogate_GT_.cljs$lang$applyTo = (function (seq40023){
return devtools.formatters.markup._LT_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40023));
});

devtools.formatters.markup._LT_reference_GT_ = (function devtools$formatters$markup$_LT_reference_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40032 = arguments.length;
var i__27055__auto___40033 = (0);
while(true){
if((i__27055__auto___40033 < len__27054__auto___40032)){
args__27061__auto__.push((arguments[i__27055__auto___40033]));

var G__40034 = (i__27055__auto___40033 + (1));
i__27055__auto___40033 = G__40034;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["reference"], null),args);
});

devtools.formatters.markup._LT_reference_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_reference_GT_.cljs$lang$applyTo = (function (seq40031){
return devtools.formatters.markup._LT_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40031));
});

devtools.formatters.markup._LT_reference_surrogate_GT_ = (function devtools$formatters$markup$_LT_reference_surrogate_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40036 = arguments.length;
var i__27055__auto___40037 = (0);
while(true){
if((i__27055__auto___40037 < len__27054__auto___40036)){
args__27061__auto__.push((arguments[i__27055__auto___40037]));

var G__40038 = (i__27055__auto___40037 + (1));
i__27055__auto___40037 = G__40038;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return devtools.formatters.markup._LT_reference_GT_.call(null,cljs.core.apply.call(null,devtools.formatters.markup._LT_surrogate_GT_,args));
});

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$lang$applyTo = (function (seq40035){
return devtools.formatters.markup._LT_reference_surrogate_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40035));
});

devtools.formatters.markup._LT_circular_reference_GT_ = (function devtools$formatters$markup$_LT_circular_reference_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40040 = arguments.length;
var i__27055__auto___40041 = (0);
while(true){
if((i__27055__auto___40041 < len__27054__auto___40040)){
args__27061__auto__.push((arguments[i__27055__auto___40041]));

var G__40042 = (i__27055__auto___40041 + (1));
i__27055__auto___40041 = G__40042;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circular-reference-tag","circular-reference-tag",858973471),new cljs.core.Keyword(null,"circular-ref-icon","circular-ref-icon",-2087682919)], null),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circular-reference-body-tag","circular-reference-body-tag",-1301830023)], null),children));
});

devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_circular_reference_GT_.cljs$lang$applyTo = (function (seq40039){
return devtools.formatters.markup._LT_circular_reference_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40039));
});

devtools.formatters.markup._LT_native_reference_GT_ = (function devtools$formatters$markup$_LT_native_reference_GT_(object){
var reference = devtools.formatters.markup._LT_reference_GT_.call(null,object,(function (p1__40043_SHARP_){
return devtools.formatters.state.set_prevent_recursion.call(null,p1__40043_SHARP_,true);
}));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-reference-wrapper-tag","native-reference-wrapper-tag",2047690940),new cljs.core.Keyword(null,"native-reference-background","native-reference-background",-286129550),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-reference-tag","native-reference-tag",-1516119079),reference], null)], null);
});
devtools.formatters.markup._LT_header_expander_GT_ = (function devtools$formatters$markup$_LT_header_expander_GT_(object){
return devtools.formatters.markup._LT_reference_GT_.call(null,devtools.formatters.markup._LT_raw_surrogate_GT_.call(null,object,new cljs.core.Keyword(null,"header-expander-symbol","header-expander-symbol",907531743),new cljs.core.Keyword(null,"target","target",253001721)),devtools.formatters.state.reset_depth_limits);
});
devtools.formatters.markup._LT_cljs_land_GT_ = (function devtools$formatters$markup$_LT_cljs_land_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40045 = arguments.length;
var i__27055__auto___40046 = (0);
while(true){
if((i__27055__auto___40046 < len__27054__auto___40045)){
args__27061__auto__.push((arguments[i__27055__auto___40046]));

var G__40047 = (i__27055__auto___40046 + (1));
i__27055__auto___40046 = G__40047;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cljs-land-tag","cljs-land-tag",-7524377)], null),children);
});

devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$maxFixedArity = (0);

devtools.formatters.markup._LT_cljs_land_GT_.cljs$lang$applyTo = (function (seq40044){
return devtools.formatters.markup._LT_cljs_land_GT_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40044));
});

devtools.formatters.markup._LT_nil_GT_ = (function devtools$formatters$markup$_LT_nil_GT_(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nil-tag","nil-tag",-1587449115),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203)], null);
});
devtools.formatters.markup._LT_bool_GT_ = (function devtools$formatters$markup$_LT_bool_GT_(bool){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bool-tag","bool-tag",-10409808),[cljs.core.str(bool)].join('')], null);
});
devtools.formatters.markup._LT_keyword_GT_ = (function devtools$formatters$markup$_LT_keyword_GT_(keyword){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keyword-tag","keyword-tag",1587228387),[cljs.core.str(keyword)].join('')], null);
});
devtools.formatters.markup._LT_symbol_GT_ = (function devtools$formatters$markup$_LT_symbol_GT_(symbol){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"symbol-tag","symbol-tag",-100807517),[cljs.core.str(symbol)].join('')], null);
});
devtools.formatters.markup._LT_number_GT_ = (function devtools$formatters$markup$_LT_number_GT_(number){
if(cljs.core.integer_QMARK_.call(null,number)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integer-tag","integer-tag",698000472),number], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"float-tag","float-tag",-390834106),number], null);
}
});
devtools.formatters.markup._LT_string_GT_ = (function devtools$formatters$markup$_LT_string_GT_(string){
var dq = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"dq","dq",-1690275860));
var re_nl = (new RegExp("\n","g"));
var nl_marker = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"new-line-string-replacer","new-line-string-replacer",-753206206));
var inline_string = string.replace(re_nl,nl_marker);
var max_inline_string_size = (devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)) + devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
var quote_string = ((function (dq,re_nl,nl_marker,inline_string,max_inline_string_size){
return (function (s){
return [cljs.core.str(dq),cljs.core.str(s),cljs.core.str(dq)].join('');
});})(dq,re_nl,nl_marker,inline_string,max_inline_string_size))
;
var should_abbreviate_QMARK_ = (cljs.core.count.call(null,inline_string) > max_inline_string_size);
if(should_abbreviate_QMARK_){
var abbreviated_string = devtools.formatters.helpers.abbreviate_long_string.call(null,inline_string,devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-abbreviation-marker","string-abbreviation-marker",-347785112)),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-prefix-limit","string-prefix-limit",1256106332)),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"string-postfix-limit","string-postfix-limit",-1282205963)));
var abbreviated_string_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string-tag","string-tag",1639024494),quote_string.call(null,abbreviated_string)], null);
var string_with_nl_markers = string.replace(re_nl,[cljs.core.str(nl_marker),cljs.core.str("\n")].join(''));
var details_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded-string-tag","expanded-string-tag",-2125162127),string_with_nl_markers], null);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,string,abbreviated_string_markup,details_markup);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string-tag","string-tag",1639024494),quote_string.call(null,inline_string)], null);
}
});
devtools.formatters.markup._LT_preview_GT_ = (function devtools$formatters$markup$_LT_preview_GT_(value){
return devtools.formatters.markup.print_via_writer.call(null,value,new cljs.core.Keyword(null,"header-tag","header-tag",1594852433),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-print-level","max-print-level",-462237413)));
});
devtools.formatters.markup._LT_body_GT_ = (function devtools$formatters$markup$_LT_body_GT_(markup){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-tag","body-tag",433527431),markup], null);
});
devtools.formatters.markup._LT_aligned_body_GT_ = (function devtools$formatters$markup$_LT_aligned_body_GT_(markups_lists){
var prepend_li_tag = (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aligned-li-tag","aligned-li-tag",1727029722)], null),line);
} else {
return null;
}
});
var aligned_lines = cljs.core.keep.call(null,prepend_li_tag,markups_lists);
return devtools.formatters.markup._LT_body_GT_.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standard-ol-no-margin-tag","standard-ol-no-margin-tag",583023747)], null),aligned_lines));
});
devtools.formatters.markup._LT_standard_body_GT_ = (function devtools$formatters$markup$_LT_standard_body_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40054 = arguments.length;
var i__27055__auto___40055 = (0);
while(true){
if((i__27055__auto___40055 < len__27054__auto___40054)){
args__27061__auto__.push((arguments[i__27055__auto___40055]));

var G__40056 = (i__27055__auto___40055 + (1));
i__27055__auto___40055 = G__40056;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (markups_lists,p__40050){
var vec__40051 = p__40050;
var no_margin_QMARK_ = cljs.core.nth.call(null,vec__40051,(0),null);
var ol_tag = (cljs.core.truth_(no_margin_QMARK_)?new cljs.core.Keyword(null,"standard-ol-no-margin-tag","standard-ol-no-margin-tag",583023747):new cljs.core.Keyword(null,"standard-ol-tag","standard-ol-tag",1120081433));
var li_tag = (cljs.core.truth_(no_margin_QMARK_)?new cljs.core.Keyword(null,"standard-li-no-margin-tag","standard-li-no-margin-tag",-844555468):new cljs.core.Keyword(null,"standard-li-tag","standard-li-tag",-932749876));
var prepend_li_tag = ((function (ol_tag,li_tag,vec__40051,no_margin_QMARK_){
return (function (line){
if(cljs.core.truth_(line)){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [li_tag], null),line);
} else {
return null;
}
});})(ol_tag,li_tag,vec__40051,no_margin_QMARK_))
;
var lines_markups = cljs.core.keep.call(null,prepend_li_tag,markups_lists);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ol_tag], null),lines_markups);
});

devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_standard_body_GT_.cljs$lang$applyTo = (function (seq40048){
var G__40049 = cljs.core.first.call(null,seq40048);
var seq40048__$1 = cljs.core.next.call(null,seq40048);
return devtools.formatters.markup._LT_standard_body_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40049,seq40048__$1);
});

devtools.formatters.markup._LT_standard_body_reference_GT_ = (function devtools$formatters$markup$_LT_standard_body_reference_GT_(o){
return devtools.formatters.markup._LT_standard_body_GT_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_reference_GT_.call(null,o)], null)], null));
});
devtools.formatters.markup._LT_index_GT_ = (function devtools$formatters$markup$_LT_index_GT_(value){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-tag","index-tag",693492486),value,new cljs.core.Keyword(null,"line-index-separator","line-index-separator",-1735989246)], null);
});
devtools.formatters.markup.body_line = (function devtools$formatters$markup$body_line(index,value){
var index_markup = devtools.formatters.markup._LT_index_GT_.call(null,index);
var value_markup = devtools.formatters.markup.print_via_writer.call(null,value,new cljs.core.Keyword(null,"item-tag","item-tag",-988763304),devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"body-line-max-print-level","body-line-max-print-level",571158623)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index_markup,value_markup], null);
});
devtools.formatters.markup.prepare_body_lines = (function devtools$formatters$markup$prepare_body_lines(data,starting_index){
var work = data;
var index = starting_index;
var lines = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,work)){
return lines;
} else {
var G__40057 = cljs.core.rest.call(null,work);
var G__40058 = (index + (1));
var G__40059 = cljs.core.conj.call(null,lines,devtools.formatters.markup.body_line.call(null,index,cljs.core.first.call(null,work)));
work = G__40057;
index = G__40058;
lines = G__40059;
continue;
}
break;
}
});
devtools.formatters.markup.body_lines = (function devtools$formatters$markup$body_lines(value,starting_index){
var seq = cljs.core.seq.call(null,value);
var max_number_body_items = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-number-body-items","max-number-body-items",299914624));
var chunk = cljs.core.take.call(null,max_number_body_items,seq);
var rest = cljs.core.drop.call(null,max_number_body_items,seq);
var lines = devtools.formatters.markup.prepare_body_lines.call(null,chunk,starting_index);
var continue_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.take.call(null,(1),rest)));
if(!(continue_QMARK_)){
return lines;
} else {
var more_label_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-items-more-tag","body-items-more-tag",867141569),new cljs.core.Keyword(null,"body-items-more-label","body-items-more-label",-1561152123)], null);
var start_index = (starting_index + max_number_body_items);
var more_markup = devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,rest,more_label_markup,new cljs.core.Keyword(null,"target","target",253001721),start_index);
return cljs.core.conj.call(null,lines,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [more_markup], null));
}
});
devtools.formatters.markup._LT_details_GT_ = (function devtools$formatters$markup$_LT_details_GT_(value,starting_index){
var has_continuation_QMARK_ = (starting_index > (0));
var body_markup = devtools.formatters.markup._LT_standard_body_GT_.call(null,devtools.formatters.markup.body_lines.call(null,value,starting_index),has_continuation_QMARK_);
if(has_continuation_QMARK_){
return body_markup;
} else {
return devtools.formatters.markup._LT_body_GT_.call(null,body_markup);
}
});
devtools.formatters.markup._LT_list_details_GT_ = (function devtools$formatters$markup$_LT_list_details_GT_(items,_opts){
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.map.call(null,cljs.core.list,items));
});
devtools.formatters.markup._LT_list_GT_ = (function devtools$formatters$markup$_LT_list_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40067 = arguments.length;
var i__27055__auto___40068 = (0);
while(true){
if((i__27055__auto___40068 < len__27054__auto___40067)){
args__27061__auto__.push((arguments[i__27055__auto___40068]));

var G__40069 = (i__27055__auto___40068 + (1));
i__27055__auto___40068 = G__40069;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (items,max_count,p__40063){
var vec__40064 = p__40063;
var opts = cljs.core.nth.call(null,vec__40064,(0),null);
var items_markups = cljs.core.take.call(null,max_count,items);
var more_count = (cljs.core.count.call(null,items) - max_count);
var more_QMARK_ = (more_count > (0));
var separator = (function (){var or__25979__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"list-separator","list-separator",900562185);
}
})();
var more_symbol = ((more_QMARK_)?(function (){var temp__4655__auto__ = new cljs.core.Keyword(null,"more-symbol","more-symbol",-2139760242).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4655__auto__)){
var more_symbol = temp__4655__auto__;
if(cljs.core.fn_QMARK_.call(null,more_symbol)){
return more_symbol.call(null,more_count);
} else {
return more_symbol;
}
} else {
return devtools.formatters.helpers.get_more_marker.call(null,more_count);
}
})():null);
var preview_markup = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__25979__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"list-tag","list-tag",1555796884);
}
})(),(function (){var or__25979__auto__ = new cljs.core.Keyword(null,"open-symbol","open-symbol",674247825).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"list-open-symbol","list-open-symbol",-1162287443);
}
})()], null),cljs.core.interpose.call(null,separator,items_markups),((more_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,more_symbol], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__25979__auto__ = new cljs.core.Keyword(null,"close-symbol","close-symbol",1051951165).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"list-close-symbol","list-close-symbol",-1120016586);
}
})()], null));
if(more_QMARK_){
var details_markup = new cljs.core.Keyword(null,"details","details",1956795411).cljs$core$IFn$_invoke$arity$1(opts);
var default_details_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_list_details_GT_,items,opts);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,null,preview_markup,(function (){var or__25979__auto__ = details_markup;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return default_details_fn;
}
})());
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_list_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_list_GT_.cljs$lang$applyTo = (function (seq40060){
var G__40061 = cljs.core.first.call(null,seq40060);
var seq40060__$1 = cljs.core.next.call(null,seq40060);
var G__40062 = cljs.core.first.call(null,seq40060__$1);
var seq40060__$2 = cljs.core.next.call(null,seq40060__$1);
return devtools.formatters.markup._LT_list_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40061,G__40062,seq40060__$2);
});

devtools.formatters.markup._LT_meta_GT_ = (function devtools$formatters$markup$_LT_meta_GT_(metadata){
var body_fn = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-body-tag","meta-body-tag",1689183121),devtools.formatters.markup._LT_preview_GT_.call(null,metadata)], null);
});
var header = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-header-tag","meta-header-tag",-1207812581),"meta"], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-reference-tag","meta-reference-tag",914791936),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,metadata,header,body_fn)], null);
});
devtools.formatters.markup._LT_meta_wrapper_GT_ = (function devtools$formatters$markup$_LT_meta_wrapper_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40072 = arguments.length;
var i__27055__auto___40073 = (0);
while(true){
if((i__27055__auto___40073 < len__27054__auto___40072)){
args__27061__auto__.push((arguments[i__27055__auto___40073]));

var G__40074 = (i__27055__auto___40073 + (1));
i__27055__auto___40073 = G__40074;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (metadata,children){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-wrapper-tag","meta-wrapper-tag",1927429038)], null),children,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [devtools.formatters.markup._LT_meta_GT_.call(null,metadata)], null));
});

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$lang$applyTo = (function (seq40070){
var G__40071 = cljs.core.first.call(null,seq40070);
var seq40070__$1 = cljs.core.next.call(null,seq40070);
return devtools.formatters.markup._LT_meta_wrapper_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40071,seq40070__$1);
});

devtools.formatters.markup._LT_function_details_GT_ = (function devtools$formatters$markup$_LT_function_details_GT_(fn_obj,ns,_name,arities,prefix){
if(cljs.core.fn_QMARK_.call(null,fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var arities__$1 = cljs.core.map.call(null,devtools.formatters.helpers.wrap_arity,arities);
var make_arity_markup_list = ((function (arities__$1){
return (function (arity){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-multi-arity-args-indent-tag","fn-multi-arity-args-indent-tag",-1931373734),prefix], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-args-tag","fn-args-tag",549126831),arity], null)], null);
});})(arities__$1))
;
var arities_markupts_lists = (((cljs.core.count.call(null,arities__$1) > (1)))?cljs.core.map.call(null,make_arity_markup_list,arities__$1):null);
var ns_markups_list = ((!(cljs.core.empty_QMARK_.call(null,ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-ns-name-tag","fn-ns-name-tag",-900073712),ns], null)], null):null);
var native_markups_list = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,fn_obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.concat.call(null,arities_markupts_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_arities_GT_ = (function devtools$formatters$markup$_LT_arities_GT_(arities){
var multi_arity_QMARK_ = (cljs.core.count.call(null,arities) > (1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-args-tag","fn-args-tag",549126831),devtools.formatters.helpers.wrap_arity.call(null,((multi_arity_QMARK_)?devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"multi-arity-symbol","multi-arity-symbol",-420139653)):cljs.core.first.call(null,arities)))], null);
});
devtools.formatters.markup._LT_function_GT_ = (function devtools$formatters$markup$_LT_function_GT_(fn_obj){
if(cljs.core.fn_QMARK_.call(null,fn_obj)){
} else {
throw (new Error("Assert failed: (fn? fn-obj)"));
}

var vec__40078 = devtools.munging.parse_fn_info.call(null,fn_obj);
var ns = cljs.core.nth.call(null,vec__40078,(0),null);
var name = cljs.core.nth.call(null,vec__40078,(1),null);
var lambda_QMARK_ = cljs.core.empty_QMARK_.call(null,name);
var spacer_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"spacer","spacer",2067425139));
var rest_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"rest-symbol","rest-symbol",1021371174));
var multi_arity_symbol = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"multi-arity-symbol","multi-arity-symbol",-420139653));
var arities = devtools.munging.extract_arities.call(null,fn_obj,true,spacer_symbol,multi_arity_symbol,rest_symbol);
var arities_markup = devtools.formatters.markup._LT_arities_GT_.call(null,arities);
var name_markup = ((!(lambda_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-name-tag","fn-name-tag",555823755),name], null):null);
var icon_markup = ((lambda_QMARK_)?new cljs.core.Keyword(null,"lambda-icon","lambda-icon",980753546):new cljs.core.Keyword(null,"fn-icon","fn-icon",-1412665288));
var prefix_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-prefix-tag","fn-prefix-tag",1947411856),icon_markup,name_markup], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-header-tag","fn-header-tag",-1262068349),prefix_markup,arities_markup], null);
var details_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_function_details_GT_,fn_obj,ns,name,arities,prefix_markup);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,fn_obj,preview_markup,details_fn);
});
devtools.formatters.markup._LT_type_basis_item_GT_ = (function devtools$formatters$markup$_LT_type_basis_item_GT_(basis_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-basis-item-tag","type-basis-item-tag",50612816),cljs.core.name.call(null,basis_item)], null);
});
devtools.formatters.markup._LT_type_basis_GT_ = (function devtools$formatters$markup$_LT_type_basis_GT_(basis){
var item_markups = cljs.core.map.call(null,devtools.formatters.markup._LT_type_basis_item_GT_,basis);
var children_markups = cljs.core.interpose.call(null,new cljs.core.Keyword(null,"type-basis-item-separator","type-basis-item-separator",-2029193896),item_markups);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-basis-tag","type-basis-tag",-2122159204)], null),children_markups);
});
devtools.formatters.markup._LT_type_details_GT_ = (function devtools$formatters$markup$_LT_type_details_GT_(constructor_fn,ns,_name,basis){
var ns_markup = ((!(cljs.core.empty_QMARK_.call(null,ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-ns-name-tag","fn-ns-name-tag",-900073712),ns], null)], null):null);
var basis_markup = ((cljs.core.empty_QMARK_.call(null,basis))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-basis-symbol","empty-basis-symbol",-1971559593)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"basis-icon","basis-icon",1917779567),devtools.formatters.markup._LT_type_basis_GT_.call(null,basis)], null));
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,constructor_fn)], null);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [basis_markup,ns_markup,native_markup], null));
});
devtools.formatters.markup._LT_type_GT_ = (function devtools$formatters$markup$_LT_type_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40090 = arguments.length;
var i__27055__auto___40091 = (0);
while(true){
if((i__27055__auto___40091 < len__27054__auto___40090)){
args__27061__auto__.push((arguments[i__27055__auto___40091]));

var G__40092 = (i__27055__auto___40091 + (1));
i__27055__auto___40091 = G__40092;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__40083){
var vec__40084 = p__40083;
var header_tag = cljs.core.nth.call(null,vec__40084,(0),null);
var vec__40087 = devtools.munging.parse_constructor_info.call(null,constructor_fn);
var ns = cljs.core.nth.call(null,vec__40087,(0),null);
var name = cljs.core.nth.call(null,vec__40087,(1),null);
var basis = cljs.core.nth.call(null,vec__40087,(2),null);
var name_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-name-tag","type-name-tag",-1317275511),name], null);
var preview_markup = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__25979__auto__ = header_tag;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"type-header-tag","type-header-tag",1645372265);
}
})(),new cljs.core.Keyword(null,"type-symbol","type-symbol",-941894755),name_markup], null);
var details_markup_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_type_details_GT_,constructor_fn,ns,name,basis);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-wrapper-tag","type-wrapper-tag",-1732366004),new cljs.core.Keyword(null,"type-header-background","type-header-background",-810861696),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-ref-tag","type-ref-tag",2126727355),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,constructor_fn,preview_markup,details_markup_fn)], null)], null);
});

devtools.formatters.markup._LT_type_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_type_GT_.cljs$lang$applyTo = (function (seq40081){
var G__40082 = cljs.core.first.call(null,seq40081);
var seq40081__$1 = cljs.core.next.call(null,seq40081);
return devtools.formatters.markup._LT_type_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40082,seq40081__$1);
});

devtools.formatters.markup._LT_standalone_type_GT_ = (function devtools$formatters$markup$_LT_standalone_type_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40099 = arguments.length;
var i__27055__auto___40100 = (0);
while(true){
if((i__27055__auto___40100 < len__27054__auto___40099)){
args__27061__auto__.push((arguments[i__27055__auto___40100]));

var G__40101 = (i__27055__auto___40100 + (1));
i__27055__auto___40100 = G__40101;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor_fn,p__40095){
var vec__40096 = p__40095;
var header_tag = cljs.core.nth.call(null,vec__40096,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"standalone-type-tag","standalone-type-tag",-1677164791),devtools.formatters.markup._LT_type_GT_.call(null,constructor_fn,header_tag)], null);
});

devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_standalone_type_GT_.cljs$lang$applyTo = (function (seq40093){
var G__40094 = cljs.core.first.call(null,seq40093);
var seq40093__$1 = cljs.core.next.call(null,seq40093);
return devtools.formatters.markup._LT_standalone_type_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40094,seq40093__$1);
});

devtools.formatters.markup._LT_protocol_method_arity_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arity_GT_(arity_fn){
return devtools.formatters.markup._LT_reference_GT_.call(null,arity_fn);
});
devtools.formatters.markup._LT_protocol_method_arities_details_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_details_GT_(fns){
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.map.call(null,devtools.formatters.markup._LT_protocol_method_arity_GT_,fns));
});
devtools.formatters.markup._LT_protocol_method_arities_GT_ = (function devtools$formatters$markup$_LT_protocol_method_arities_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40108 = arguments.length;
var i__27055__auto___40109 = (0);
while(true){
if((i__27055__auto___40109 < len__27054__auto___40108)){
args__27061__auto__.push((arguments[i__27055__auto___40109]));

var G__40110 = (i__27055__auto___40109 + (1));
i__27055__auto___40109 = G__40110;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fns,p__40104){
var vec__40105 = p__40104;
var max_fns = cljs.core.nth.call(null,vec__40105,(0),null);
var max_fns__$1 = (function (){var or__25979__auto__ = max_fns;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-protocol-method-arities-list","max-protocol-method-arities-list",-45936465));
}
})();
var more_QMARK_ = (cljs.core.count.call(null,fns) > max_fns__$1);
var aritites_markups = cljs.core.map.call(null,devtools.formatters.markup._LT_protocol_method_arity_GT_,cljs.core.take.call(null,max_fns__$1,fns));
var preview_markup = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-header-tag","protocol-method-arities-header-tag",734407707),new cljs.core.Keyword(null,"protocol-method-arities-header-open-symbol","protocol-method-arities-header-open-symbol",1704200465)], null),cljs.core.interpose.call(null,new cljs.core.Keyword(null,"protocol-method-arities-list-header-separator","protocol-method-arities-list-header-separator",-115158954),aritites_markups),((more_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-more-symbol","protocol-method-arities-more-symbol",-477018522)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-arities-header-close-symbol","protocol-method-arities-header-close-symbol",-1375237120)], null));
if(more_QMARK_){
var details_markup_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,fns);
return devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,null,preview_markup,details_markup_fn);
} else {
return preview_markup;
}
});

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$lang$applyTo = (function (seq40102){
var G__40103 = cljs.core.first.call(null,seq40102);
var seq40102__$1 = cljs.core.next.call(null,seq40102);
return devtools.formatters.markup._LT_protocol_method_arities_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40103,seq40102__$1);
});

devtools.formatters.markup._LT_protocol_method_GT_ = (function devtools$formatters$markup$_LT_protocol_method_GT_(name,arities){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-tag","protocol-method-tag",2032279830),new cljs.core.Keyword(null,"method-icon","method-icon",-1678775281),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-method-name-tag","protocol-method-name-tag",-1030376744),name], null),devtools.formatters.markup._LT_protocol_method_arities_GT_.call(null,arities)], null);
});
devtools.formatters.markup._LT_protocol_details_GT_ = (function devtools$formatters$markup$_LT_protocol_details_GT_(obj,ns,_name,selector,_fast_QMARK_){
var protocol_obj = devtools.munging.get_protocol_object.call(null,selector);
var ns_markups_list = ((!(cljs.core.empty_QMARK_.call(null,ns)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns-icon","ns-icon",725601214),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-ns-name-tag","protocol-ns-name-tag",1832081510),ns], null)], null):null);
var native_markups_list = ((cljs.core.some_QMARK_.call(null,protocol_obj))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,protocol_obj)], null):null);
var methods$ = devtools.munging.collect_protocol_methods.call(null,obj,selector);
var methods_markups = cljs.core.map.call(null,((function (protocol_obj,ns_markups_list,native_markups_list,methods$){
return (function (p__40115){
var vec__40116 = p__40115;
var name = cljs.core.nth.call(null,vec__40116,(0),null);
var arities = cljs.core.nth.call(null,vec__40116,(1),null);
return devtools.formatters.markup._LT_protocol_method_GT_.call(null,name,arities);
});})(protocol_obj,ns_markups_list,native_markups_list,methods$))
,methods$);
var methods_markups_lists = cljs.core.map.call(null,cljs.core.list,methods_markups);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,cljs.core.concat.call(null,methods_markups_lists,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns_markups_list,native_markups_list], null)));
});
devtools.formatters.markup._LT_protocol_GT_ = (function devtools$formatters$markup$_LT_protocol_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40128 = arguments.length;
var i__27055__auto___40129 = (0);
while(true){
if((i__27055__auto___40129 < len__27054__auto___40128)){
args__27061__auto__.push((arguments[i__27055__auto___40129]));

var G__40130 = (i__27055__auto___40129 + (1));
i__27055__auto___40129 = G__40130;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocol,p__40122){
var vec__40123 = p__40122;
var tag = cljs.core.nth.call(null,vec__40123,(0),null);
var map__40126 = protocol;
var map__40126__$1 = ((((!((map__40126 == null)))?((((map__40126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40126):map__40126);
var ns = cljs.core.get.call(null,map__40126__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__40126__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var selector = cljs.core.get.call(null,map__40126__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var fast_QMARK_ = cljs.core.get.call(null,map__40126__$1,new cljs.core.Keyword(null,"fast?","fast?",-1813307150));
var preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__25979__auto__ = tag;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"protocol-name-tag","protocol-name-tag",1508238310);
}
})(),name], null);
var prefix_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(fast_QMARK_)?new cljs.core.Keyword(null,"fast-protocol-tag","fast-protocol-tag",2066025065):new cljs.core.Keyword(null,"slow-protocol-tag","slow-protocol-tag",2061129467)),new cljs.core.Keyword(null,"protocol-background","protocol-background",1111513794)], null);
if(cljs.core.some_QMARK_.call(null,obj)){
var details_markup_fn = cljs.core.partial.call(null,devtools.formatters.markup._LT_protocol_details_GT_,obj,ns,name,selector,fast_QMARK_);
return cljs.core.conj.call(null,prefix_markup,devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,obj,preview_markup,details_markup_fn));
} else {
return cljs.core.conj.call(null,prefix_markup,preview_markup);
}
});

devtools.formatters.markup._LT_protocol_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_protocol_GT_.cljs$lang$applyTo = (function (seq40119){
var G__40120 = cljs.core.first.call(null,seq40119);
var seq40119__$1 = cljs.core.next.call(null,seq40119);
var G__40121 = cljs.core.first.call(null,seq40119__$1);
var seq40119__$2 = cljs.core.next.call(null,seq40119__$1);
return devtools.formatters.markup._LT_protocol_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40120,G__40121,seq40119__$2);
});

devtools.formatters.markup._LT_more_protocols_GT_ = (function devtools$formatters$markup$_LT_more_protocols_GT_(more_count){
var fake_protocol = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),devtools.formatters.helpers.get_more_marker.call(null,more_count)], null);
return devtools.formatters.markup._LT_protocol_GT_.call(null,null,fake_protocol,new cljs.core.Keyword(null,"protocol-more-tag","protocol-more-tag",2098702865));
});
devtools.formatters.markup._LT_protocols_list_GT_ = (function devtools$formatters$markup$_LT_protocols_list_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40138 = arguments.length;
var i__27055__auto___40139 = (0);
while(true){
if((i__27055__auto___40139 < len__27054__auto___40138)){
args__27061__auto__.push((arguments[i__27055__auto___40139]));

var G__40140 = (i__27055__auto___40139 + (1));
i__27055__auto___40139 = G__40140;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,protocols,p__40134){
var vec__40135 = p__40134;
var max_protocols = cljs.core.nth.call(null,vec__40135,(0),null);
var max_protocols__$1 = (function (){var or__25979__auto__ = max_protocols;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-list-protocols","max-list-protocols",-537135129));
}
})();
var protocols_markups = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.formatters.markup._LT_protocol_GT_,obj),protocols);
return devtools.formatters.markup._LT_list_GT_.call(null,protocols_markups,max_protocols__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"protocols-header-tag","protocols-header-tag",-734413384),new cljs.core.Keyword(null,"open-symbol","open-symbol",674247825),new cljs.core.Keyword(null,"protocols-list-open-symbol","protocols-list-open-symbol",-729713043),new cljs.core.Keyword(null,"close-symbol","close-symbol",1051951165),new cljs.core.Keyword(null,"protocols-list-close-symbol","protocols-list-close-symbol",652072902),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"header-protocol-separator","header-protocol-separator",445531439),new cljs.core.Keyword(null,"more-symbol","more-symbol",-2139760242),devtools.formatters.markup._LT_more_protocols_GT_], null));
});

devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$maxFixedArity = (2);

devtools.formatters.markup._LT_protocols_list_GT_.cljs$lang$applyTo = (function (seq40131){
var G__40132 = cljs.core.first.call(null,seq40131);
var seq40131__$1 = cljs.core.next.call(null,seq40131);
var G__40133 = cljs.core.first.call(null,seq40131__$1);
var seq40131__$2 = cljs.core.next.call(null,seq40131__$1);
return devtools.formatters.markup._LT_protocols_list_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40132,G__40133,seq40131__$2);
});

devtools.formatters.markup._LT_field_GT_ = (function devtools$formatters$markup$_LT_field_GT_(name,value){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-tag","header-field-tag",-1403476101),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-name-tag","header-field-name-tag",82291956),[cljs.core.str(name)].join('')], null),new cljs.core.Keyword(null,"header-field-value-spacer","header-field-value-spacer",-1210630679),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header-field-value-tag","header-field-value-tag",-1708691701),devtools.formatters.markup._LT_reference_GT_.call(null,devtools.formatters.markup._LT_surrogate_GT_.call(null,value),(function (p1__40141_SHARP_){
return devtools.formatters.state.set_managed_print_level.call(null,p1__40141_SHARP_,(1));
}))], null),new cljs.core.Keyword(null,"header-field-separator","header-field-separator",-774444018)], null);
});
devtools.formatters.markup._LT_fields_details_row_GT_ = (function devtools$formatters$markup$_LT_fields_details_row_GT_(field){
var vec__40145 = field;
var name = cljs.core.nth.call(null,vec__40145,(0),null);
var value = cljs.core.nth.call(null,vec__40145,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-tr-tag","body-field-tr-tag",37280691),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td1-tag","body-field-td1-tag",256357429),new cljs.core.Keyword(null,"body-field-symbol","body-field-symbol",256897537),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-name-tag","body-field-name-tag",917867601),[cljs.core.str(name)].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td2-tag","body-field-td2-tag",94501500),new cljs.core.Keyword(null,"body-field-value-spacer","body-field-value-spacer",1279911362)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-td3-tag","body-field-td3-tag",-803119922),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body-field-value-tag","body-field-value-tag",800789079),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,value)], null)], null)], null);
});
devtools.formatters.markup._LT_fields_GT_ = (function devtools$formatters$markup$_LT_fields_GT_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40158 = arguments.length;
var i__27055__auto___40159 = (0);
while(true){
if((i__27055__auto___40159 < len__27054__auto___40158)){
args__27061__auto__.push((arguments[i__27055__auto___40159]));

var G__40160 = (i__27055__auto___40159 + (1));
i__27055__auto___40159 = G__40160;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (fields,p__40150){
var vec__40151 = p__40150;
var max_fields = cljs.core.nth.call(null,vec__40151,(0),null);
if((cljs.core.count.call(null,fields) === (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-header-tag","fields-header-tag",1339134308),new cljs.core.Keyword(null,"fields-header-no-fields-symbol","fields-header-no-fields-symbol",-1749204979)], null);
} else {
var max_fields__$1 = (function (){var or__25979__auto__ = max_fields;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"max-instance-header-fields","max-instance-header-fields",-126007269));
}
})();
var more_QMARK_ = (cljs.core.count.call(null,fields) > max_fields__$1);
var fields_markups = cljs.core.map.call(null,((function (max_fields__$1,more_QMARK_,vec__40151,max_fields){
return (function (p__40154){
var vec__40155 = p__40154;
var name = cljs.core.nth.call(null,vec__40155,(0),null);
var value = cljs.core.nth.call(null,vec__40155,(1),null);
return devtools.formatters.markup._LT_field_GT_.call(null,name,value);
});})(max_fields__$1,more_QMARK_,vec__40151,max_fields))
,cljs.core.take.call(null,max_fields__$1,fields));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-header-tag","fields-header-tag",1339134308),new cljs.core.Keyword(null,"fields-header-open-symbol","fields-header-open-symbol",-26243798)], null),fields_markups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((more_QMARK_)?new cljs.core.Keyword(null,"more-fields-symbol","more-fields-symbol",720022882):null),new cljs.core.Keyword(null,"fields-header-close-symbol","fields-header-close-symbol",1615181116)], null));
}
});

devtools.formatters.markup._LT_fields_GT_.cljs$lang$maxFixedArity = (1);

devtools.formatters.markup._LT_fields_GT_.cljs$lang$applyTo = (function (seq40148){
var G__40149 = cljs.core.first.call(null,seq40148);
var seq40148__$1 = cljs.core.next.call(null,seq40148);
return devtools.formatters.markup._LT_fields_GT_.cljs$core$IFn$_invoke$arity$variadic(G__40149,seq40148__$1);
});

devtools.formatters.markup._LT_fields_details_GT_ = (function devtools$formatters$markup$_LT_fields_details_GT_(fields,obj){
var protocols = devtools.munging.scan_protocols.call(null,obj);
var has_protocols_QMARK_ = !(cljs.core.empty_QMARK_.call(null,protocols));
var fields_markup = ((!((cljs.core.count.call(null,fields) === (0))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fields-icon","fields-icon",-436030420),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-body-fields-table-tag","instance-body-fields-table-tag",1306340776)], null),cljs.core.map.call(null,devtools.formatters.markup._LT_fields_details_row_GT_,fields))], null):null);
var protocols_list_markup = ((has_protocols_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocols-icon","protocols-icon",-517302494),devtools.formatters.markup._LT_protocols_list_GT_.call(null,obj,protocols)], null):null);
var native_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"native-icon","native-icon",-126040824),devtools.formatters.markup._LT_native_reference_GT_.call(null,obj)], null);
return devtools.formatters.markup._LT_aligned_body_GT_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fields_markup,protocols_list_markup,native_markup], null));
});
devtools.formatters.markup._LT_instance_GT_ = (function devtools$formatters$markup$_LT_instance_GT_(value){
var constructor_fn = devtools.formatters.helpers.get_constructor.call(null,value);
var vec__40165 = devtools.munging.parse_constructor_info.call(null,constructor_fn);
var _ns = cljs.core.nth.call(null,vec__40165,(0),null);
var _name = cljs.core.nth.call(null,vec__40165,(1),null);
var basis = cljs.core.nth.call(null,vec__40165,(2),null);
var custom_printing_QMARK_ = ((!((value == null)))?((((value.cljs$lang$protocol_mask$partition0$ & (2147483648))) || (value.cljs$core$IPrintWithWriter$))?true:false):false);
var type_markup = devtools.formatters.markup._LT_type_GT_.call(null,constructor_fn,new cljs.core.Keyword(null,"instance-type-header-tag","instance-type-header-tag",-1015702989));
var fields = devtools.formatters.helpers.fetch_fields_values.call(null,value,basis);
var fields_markup = devtools.formatters.markup._LT_fields_GT_.call(null,fields,((custom_printing_QMARK_)?(0):null));
var fields_details_markup_fn = ((function (constructor_fn,vec__40165,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup){
return (function (){
return devtools.formatters.markup._LT_fields_details_GT_.call(null,fields,value);
});})(constructor_fn,vec__40165,_ns,_name,basis,custom_printing_QMARK_,type_markup,fields,fields_markup))
;
var fields_preview_markup = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-value-tag","instance-value-tag",-1739593896),devtools.formatters.markup._LT_reference_surrogate_GT_.call(null,value,fields_markup,fields_details_markup_fn)], null);
var custom_printing_markup = ((custom_printing_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-custom-printing-wrapper-tag","instance-custom-printing-wrapper-tag",1461890684),new cljs.core.Keyword(null,"instance-custom-printing-background","instance-custom-printing-background",-248433646),devtools.formatters.markup.print_via_protocol.call(null,value,new cljs.core.Keyword(null,"instance-custom-printing-tag","instance-custom-printing-tag",-67034432))], null):null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"instance-header-tag","instance-header-tag",903623870),new cljs.core.Keyword(null,"instance-header-background","instance-header-background",1510357287),fields_preview_markup,custom_printing_markup,type_markup], null);
});
devtools.formatters.markup._LT_header_GT_ = (function devtools$formatters$markup$_LT_header_GT_(value){
return devtools.formatters.markup._LT_cljs_land_GT_.call(null,devtools.formatters.markup._LT_preview_GT_.call(null,value));
});
devtools.formatters.markup._LT_surrogate_header_GT_ = (function devtools$formatters$markup$_LT_surrogate_header_GT_(surrogate){
var or__25979__auto__ = devtools.formatters.templating.get_surrogate_header.call(null,surrogate);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return devtools.formatters.markup._LT_preview_GT_.call(null,devtools.formatters.templating.get_surrogate_target.call(null,surrogate));
}
});
devtools.formatters.markup._LT_surrogate_target_GT_ = (function devtools$formatters$markup$_LT_surrogate_target_GT_(surrogate){
var target = devtools.formatters.templating.get_surrogate_target.call(null,surrogate);
if(cljs.core.seqable_QMARK_.call(null,target)){
var starting_index = devtools.formatters.templating.get_surrogate_start_index.call(null,surrogate);
return devtools.formatters.markup._LT_details_GT_.call(null,target,starting_index);
} else {
return devtools.formatters.markup._LT_standard_body_reference_GT_.call(null,target);
}
});
devtools.formatters.markup._LT_surrogate_body_GT_ = (function devtools$formatters$markup$_LT_surrogate_body_GT_(surrogate){
var temp__4655__auto__ = devtools.formatters.templating.get_surrogate_body.call(null,surrogate);
if(cljs.core.truth_(temp__4655__auto__)){
var body = temp__4655__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"target","target",253001721),body)){
return devtools.formatters.markup._LT_surrogate_target_GT_.call(null,surrogate);
} else {
return body;
}
} else {
return null;
}
});
devtools.formatters.markup._LT_atomic_GT_ = (function devtools$formatters$markup$_LT_atomic_GT_(value){
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-nils","render-nils",1360008699),value,cljs.core.nil_QMARK_))){
return devtools.formatters.markup._LT_nil_GT_.call(null);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-bools","render-bools",1793659724),value,devtools.formatters.helpers.bool_QMARK_))){
return devtools.formatters.markup._LT_bool_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-strings","render-strings",-1497177335),value,cljs.core.string_QMARK_))){
return devtools.formatters.markup._LT_string_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-numbers","render-numbers",-1385392009),value,cljs.core.number_QMARK_))){
return devtools.formatters.markup._LT_number_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-keywords","render-keywords",1200455875),value,cljs.core.keyword_QMARK_))){
return devtools.formatters.markup._LT_keyword_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-symbols","render-symbols",-887705016),value,cljs.core.symbol_QMARK_))){
return devtools.formatters.markup._LT_symbol_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-instances","render-instances",-1803579686),value,devtools.formatters.helpers.should_render_instance_QMARK_))){
return devtools.formatters.markup._LT_instance_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-types","render-types",-129927851),value,devtools.formatters.helpers.cljs_type_QMARK_))){
return devtools.formatters.markup._LT_standalone_type_GT_.call(null,value);
} else {
if(cljs.core.truth_(devtools.formatters.helpers.should_render_QMARK_.call(null,new cljs.core.Keyword(null,"render-functions","render-functions",1273333002),value,devtools.formatters.helpers.cljs_function_QMARK_))){
return devtools.formatters.markup._LT_function_GT_.call(null,value);
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
});
devtools.formatters.markup.get_markup_db = (function devtools$formatters$markup$get_markup_db(){
if((devtools.formatters.markup._STAR_markup_db_STAR_ == null)){
devtools.formatters.markup._STAR_markup_db_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"aligned-body","aligned-body",-2124118747),new cljs.core.Keyword(null,"native-reference","native-reference",-2013708658),new cljs.core.Keyword(null,"reference-surrogate","reference-surrogate",274031791),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"protocol-method-arities","protocol-method-arities",-545542044),new cljs.core.Keyword(null,"surrogate-header","surrogate-header",1705524526),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"more-protocols","more-protocols",359555207),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"fields-details","fields-details",-269572714),new cljs.core.Keyword(null,"atomic","atomic",-120459460),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"standard-body","standard-body",-1563020798),new cljs.core.Keyword(null,"type-basis","type-basis",-1825246054),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"standalone-type","standalone-type",-802565278),new cljs.core.Keyword(null,"preview","preview",451279890),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206),new cljs.core.Keyword(null,"cljs-land","cljs-land",1255896927),new cljs.core.Keyword(null,"type-basis-item","type-basis-item",-1662150132),new cljs.core.Keyword(null,"protocol-method-arities-details","protocol-method-arities-details",1944702118),new cljs.core.Keyword(null,"fields-details-row","fields-details-row",2066344936),new cljs.core.Keyword(null,"standard-body-reference","standard-body-reference",1513301561),new cljs.core.Keyword(null,"surrogate-body","surrogate-body",-1618569585),new cljs.core.Keyword(null,"expandable","expandable",-704609097),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"protocol-method-arity","protocol-method-arity",-1861927833),new cljs.core.Keyword(null,"raw-surrogate","raw-surrogate",904931181),new cljs.core.Keyword(null,"type-details","type-details",477755178),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"meta-wrapper","meta-wrapper",-1989845587),new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"surrogate","surrogate",2122284260),new cljs.core.Keyword(null,"protocols-list","protocols-list",371434187),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"instance","instance",-2121349050),new cljs.core.Keyword(null,"reference","reference",-1711695023),new cljs.core.Keyword(null,"function-details","function-details",1501147310),new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"arities","arities",-1781122917),new cljs.core.Keyword(null,"header-expander","header-expander",-1606368578),new cljs.core.Keyword(null,"list-details","list-details",46031799),new cljs.core.Keyword(null,"circular-reference","circular-reference",970308727),new cljs.core.Keyword(null,"surrogate-target","surrogate-target",-1262730220),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"nil","nil",99600501),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"protocol-details","protocol-details",-121549824)],[devtools.formatters.markup._LT_aligned_body_GT_,devtools.formatters.markup._LT_native_reference_GT_,devtools.formatters.markup._LT_reference_surrogate_GT_,devtools.formatters.markup._LT_keyword_GT_,devtools.formatters.markup._LT_protocol_method_arities_GT_,devtools.formatters.markup._LT_surrogate_header_GT_,devtools.formatters.markup._LT_details_GT_,devtools.formatters.markup._LT_more_protocols_GT_,devtools.formatters.markup._LT_field_GT_,devtools.formatters.markup._LT_symbol_GT_,devtools.formatters.markup._LT_fields_details_GT_,devtools.formatters.markup._LT_atomic_GT_,devtools.formatters.markup._LT_string_GT_,devtools.formatters.markup._LT_standard_body_GT_,devtools.formatters.markup._LT_type_basis_GT_,devtools.formatters.markup._LT_bool_GT_,devtools.formatters.markup._LT_standalone_type_GT_,devtools.formatters.markup._LT_preview_GT_,devtools.formatters.markup._LT_header_GT_,devtools.formatters.markup._LT_protocol_method_GT_,devtools.formatters.markup._LT_cljs_land_GT_,devtools.formatters.markup._LT_type_basis_item_GT_,devtools.formatters.markup._LT_protocol_method_arities_details_GT_,devtools.formatters.markup._LT_fields_details_row_GT_,devtools.formatters.markup._LT_standard_body_reference_GT_,devtools.formatters.markup._LT_surrogate_body_GT_,devtools.formatters.markup._LT_expandable_GT_,devtools.formatters.markup._LT_type_GT_,devtools.formatters.markup._LT_protocol_method_arity_GT_,devtools.formatters.markup._LT_raw_surrogate_GT_,devtools.formatters.markup._LT_type_details_GT_,devtools.formatters.markup._LT_list_GT_,devtools.formatters.markup._LT_meta_wrapper_GT_,devtools.formatters.markup._LT_protocol_GT_,devtools.formatters.markup._LT_index_GT_,devtools.formatters.markup._LT_surrogate_GT_,devtools.formatters.markup._LT_protocols_list_GT_,devtools.formatters.markup._LT_meta_GT_,devtools.formatters.markup._LT_instance_GT_,devtools.formatters.markup._LT_reference_GT_,devtools.formatters.markup._LT_function_details_GT_,devtools.formatters.markup._LT_function_GT_,devtools.formatters.markup._LT_arities_GT_,devtools.formatters.markup._LT_header_expander_GT_,devtools.formatters.markup._LT_list_details_GT_,devtools.formatters.markup._LT_circular_reference_GT_,devtools.formatters.markup._LT_surrogate_target_GT_,devtools.formatters.markup._LT_fields_GT_,devtools.formatters.markup._LT_nil_GT_,devtools.formatters.markup._LT_body_GT_,devtools.formatters.markup._LT_number_GT_,devtools.formatters.markup._LT_protocol_details_GT_]);
} else {
}

return devtools.formatters.markup._STAR_markup_db_STAR_;
});

//# sourceMappingURL=markup.js.map?rel=1499201001258