// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args28196 = [];
var len__27054__auto___28202 = arguments.length;
var i__27055__auto___28203 = (0);
while(true){
if((i__27055__auto___28203 < len__27054__auto___28202)){
args28196.push((arguments[i__27055__auto___28203]));

var G__28204 = (i__27055__auto___28203 + (1));
i__27055__auto___28203 = G__28204;
continue;
} else {
}
break;
}

var G__28198 = args28196.length;
switch (G__28198) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28196.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async28199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28199 = (function (f,blockable,meta28200){
this.f = f;
this.blockable = blockable;
this.meta28200 = meta28200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28201,meta28200__$1){
var self__ = this;
var _28201__$1 = this;
return (new cljs.core.async.t_cljs$core$async28199(self__.f,self__.blockable,meta28200__$1));
});

cljs.core.async.t_cljs$core$async28199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28201){
var self__ = this;
var _28201__$1 = this;
return self__.meta28200;
});

cljs.core.async.t_cljs$core$async28199.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28200","meta28200",-1555273311,null)], null);
});

cljs.core.async.t_cljs$core$async28199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28199";

cljs.core.async.t_cljs$core$async28199.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28199");
});

cljs.core.async.__GT_t_cljs$core$async28199 = (function cljs$core$async$__GT_t_cljs$core$async28199(f__$1,blockable__$1,meta28200){
return (new cljs.core.async.t_cljs$core$async28199(f__$1,blockable__$1,meta28200));
});

}

return (new cljs.core.async.t_cljs$core$async28199(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args28208 = [];
var len__27054__auto___28211 = arguments.length;
var i__27055__auto___28212 = (0);
while(true){
if((i__27055__auto___28212 < len__27054__auto___28211)){
args28208.push((arguments[i__27055__auto___28212]));

var G__28213 = (i__27055__auto___28212 + (1));
i__27055__auto___28212 = G__28213;
continue;
} else {
}
break;
}

var G__28210 = args28208.length;
switch (G__28210) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28208.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args28215 = [];
var len__27054__auto___28218 = arguments.length;
var i__27055__auto___28219 = (0);
while(true){
if((i__27055__auto___28219 < len__27054__auto___28218)){
args28215.push((arguments[i__27055__auto___28219]));

var G__28220 = (i__27055__auto___28219 + (1));
i__27055__auto___28219 = G__28220;
continue;
} else {
}
break;
}

var G__28217 = args28215.length;
switch (G__28217) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28215.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args28222 = [];
var len__27054__auto___28225 = arguments.length;
var i__27055__auto___28226 = (0);
while(true){
if((i__27055__auto___28226 < len__27054__auto___28225)){
args28222.push((arguments[i__27055__auto___28226]));

var G__28227 = (i__27055__auto___28226 + (1));
i__27055__auto___28226 = G__28227;
continue;
} else {
}
break;
}

var G__28224 = args28222.length;
switch (G__28224) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28222.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28229 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28229);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28229,ret){
return (function (){
return fn1.call(null,val_28229);
});})(val_28229,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args28230 = [];
var len__27054__auto___28233 = arguments.length;
var i__27055__auto___28234 = (0);
while(true){
if((i__27055__auto___28234 < len__27054__auto___28233)){
args28230.push((arguments[i__27055__auto___28234]));

var G__28235 = (i__27055__auto___28234 + (1));
i__27055__auto___28234 = G__28235;
continue;
} else {
}
break;
}

var G__28232 = args28230.length;
switch (G__28232) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28230.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26894__auto___28237 = n;
var x_28238 = (0);
while(true){
if((x_28238 < n__26894__auto___28237)){
(a[x_28238] = (0));

var G__28239 = (x_28238 + (1));
x_28238 = G__28239;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28240 = (i + (1));
i = G__28240;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async28244 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28244 = (function (alt_flag,flag,meta28245){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta28245 = meta28245;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28246,meta28245__$1){
var self__ = this;
var _28246__$1 = this;
return (new cljs.core.async.t_cljs$core$async28244(self__.alt_flag,self__.flag,meta28245__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28246){
var self__ = this;
var _28246__$1 = this;
return self__.meta28245;
});})(flag))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28244.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28244.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28245","meta28245",-1653487916,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28244.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28244.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28244";

cljs.core.async.t_cljs$core$async28244.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28244");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async28244 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28244(alt_flag__$1,flag__$1,meta28245){
return (new cljs.core.async.t_cljs$core$async28244(alt_flag__$1,flag__$1,meta28245));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28244(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async28250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28250 = (function (alt_handler,flag,cb,meta28251){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta28251 = meta28251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28252,meta28251__$1){
var self__ = this;
var _28252__$1 = this;
return (new cljs.core.async.t_cljs$core$async28250(self__.alt_handler,self__.flag,self__.cb,meta28251__$1));
});

cljs.core.async.t_cljs$core$async28250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28252){
var self__ = this;
var _28252__$1 = this;
return self__.meta28251;
});

cljs.core.async.t_cljs$core$async28250.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28251","meta28251",360034726,null)], null);
});

cljs.core.async.t_cljs$core$async28250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28250";

cljs.core.async.t_cljs$core$async28250.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async28250");
});

cljs.core.async.__GT_t_cljs$core$async28250 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28250(alt_handler__$1,flag__$1,cb__$1,meta28251){
return (new cljs.core.async.t_cljs$core$async28250(alt_handler__$1,flag__$1,cb__$1,meta28251));
});

}

return (new cljs.core.async.t_cljs$core$async28250(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28253_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28253_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28254_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28254_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25979__auto__ = wport;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28255 = (i + (1));
i = G__28255;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25979__auto__ = ret;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25967__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25967__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___28261 = arguments.length;
var i__27055__auto___28262 = (0);
while(true){
if((i__27055__auto___28262 < len__27054__auto___28261)){
args__27061__auto__.push((arguments[i__27055__auto___28262]));

var G__28263 = (i__27055__auto___28262 + (1));
i__27055__auto___28262 = G__28263;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28258){
var map__28259 = p__28258;
var map__28259__$1 = ((((!((map__28259 == null)))?((((map__28259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28259):map__28259);
var opts = map__28259__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28256){
var G__28257 = cljs.core.first.call(null,seq28256);
var seq28256__$1 = cljs.core.next.call(null,seq28256);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28257,seq28256__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args28264 = [];
var len__27054__auto___28314 = arguments.length;
var i__27055__auto___28315 = (0);
while(true){
if((i__27055__auto___28315 < len__27054__auto___28314)){
args28264.push((arguments[i__27055__auto___28315]));

var G__28316 = (i__27055__auto___28315 + (1));
i__27055__auto___28315 = G__28316;
continue;
} else {
}
break;
}

var G__28266 = args28264.length;
switch (G__28266) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28264.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28151__auto___28318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___28318){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___28318){
return (function (state_28290){
var state_val_28291 = (state_28290[(1)]);
if((state_val_28291 === (7))){
var inst_28286 = (state_28290[(2)]);
var state_28290__$1 = state_28290;
var statearr_28292_28319 = state_28290__$1;
(statearr_28292_28319[(2)] = inst_28286);

(statearr_28292_28319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (1))){
var state_28290__$1 = state_28290;
var statearr_28293_28320 = state_28290__$1;
(statearr_28293_28320[(2)] = null);

(statearr_28293_28320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (4))){
var inst_28269 = (state_28290[(7)]);
var inst_28269__$1 = (state_28290[(2)]);
var inst_28270 = (inst_28269__$1 == null);
var state_28290__$1 = (function (){var statearr_28294 = state_28290;
(statearr_28294[(7)] = inst_28269__$1);

return statearr_28294;
})();
if(cljs.core.truth_(inst_28270)){
var statearr_28295_28321 = state_28290__$1;
(statearr_28295_28321[(1)] = (5));

} else {
var statearr_28296_28322 = state_28290__$1;
(statearr_28296_28322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (13))){
var state_28290__$1 = state_28290;
var statearr_28297_28323 = state_28290__$1;
(statearr_28297_28323[(2)] = null);

(statearr_28297_28323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (6))){
var inst_28269 = (state_28290[(7)]);
var state_28290__$1 = state_28290;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28290__$1,(11),to,inst_28269);
} else {
if((state_val_28291 === (3))){
var inst_28288 = (state_28290[(2)]);
var state_28290__$1 = state_28290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28290__$1,inst_28288);
} else {
if((state_val_28291 === (12))){
var state_28290__$1 = state_28290;
var statearr_28298_28324 = state_28290__$1;
(statearr_28298_28324[(2)] = null);

(statearr_28298_28324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (2))){
var state_28290__$1 = state_28290;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28290__$1,(4),from);
} else {
if((state_val_28291 === (11))){
var inst_28279 = (state_28290[(2)]);
var state_28290__$1 = state_28290;
if(cljs.core.truth_(inst_28279)){
var statearr_28299_28325 = state_28290__$1;
(statearr_28299_28325[(1)] = (12));

} else {
var statearr_28300_28326 = state_28290__$1;
(statearr_28300_28326[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (9))){
var state_28290__$1 = state_28290;
var statearr_28301_28327 = state_28290__$1;
(statearr_28301_28327[(2)] = null);

(statearr_28301_28327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (5))){
var state_28290__$1 = state_28290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28302_28328 = state_28290__$1;
(statearr_28302_28328[(1)] = (8));

} else {
var statearr_28303_28329 = state_28290__$1;
(statearr_28303_28329[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (14))){
var inst_28284 = (state_28290[(2)]);
var state_28290__$1 = state_28290;
var statearr_28304_28330 = state_28290__$1;
(statearr_28304_28330[(2)] = inst_28284);

(statearr_28304_28330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (10))){
var inst_28276 = (state_28290[(2)]);
var state_28290__$1 = state_28290;
var statearr_28305_28331 = state_28290__$1;
(statearr_28305_28331[(2)] = inst_28276);

(statearr_28305_28331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28291 === (8))){
var inst_28273 = cljs.core.async.close_BANG_.call(null,to);
var state_28290__$1 = state_28290;
var statearr_28306_28332 = state_28290__$1;
(statearr_28306_28332[(2)] = inst_28273);

(statearr_28306_28332[(1)] = (10));


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
});})(c__28151__auto___28318))
;
return ((function (switch__28039__auto__,c__28151__auto___28318){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_28310 = [null,null,null,null,null,null,null,null];
(statearr_28310[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_28310[(1)] = (1));

return statearr_28310;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_28290){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28311){if((e28311 instanceof Object)){
var ex__28043__auto__ = e28311;
var statearr_28312_28333 = state_28290;
(statearr_28312_28333[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28334 = state_28290;
state_28290 = G__28334;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_28290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_28290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___28318))
})();
var state__28153__auto__ = (function (){var statearr_28313 = f__28152__auto__.call(null);
(statearr_28313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___28318);

return statearr_28313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___28318))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28522){
var vec__28523 = p__28522;
var v = cljs.core.nth.call(null,vec__28523,(0),null);
var p = cljs.core.nth.call(null,vec__28523,(1),null);
var job = vec__28523;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28151__auto___28709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___28709,res,vec__28523,v,p,job,jobs,results){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___28709,res,vec__28523,v,p,job,jobs,results){
return (function (state_28530){
var state_val_28531 = (state_28530[(1)]);
if((state_val_28531 === (1))){
var state_28530__$1 = state_28530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28530__$1,(2),res,v);
} else {
if((state_val_28531 === (2))){
var inst_28527 = (state_28530[(2)]);
var inst_28528 = cljs.core.async.close_BANG_.call(null,res);
var state_28530__$1 = (function (){var statearr_28532 = state_28530;
(statearr_28532[(7)] = inst_28527);

return statearr_28532;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28530__$1,inst_28528);
} else {
return null;
}
}
});})(c__28151__auto___28709,res,vec__28523,v,p,job,jobs,results))
;
return ((function (switch__28039__auto__,c__28151__auto___28709,res,vec__28523,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0 = (function (){
var statearr_28536 = [null,null,null,null,null,null,null,null];
(statearr_28536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__);

(statearr_28536[(1)] = (1));

return statearr_28536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1 = (function (state_28530){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28537){if((e28537 instanceof Object)){
var ex__28043__auto__ = e28537;
var statearr_28538_28710 = state_28530;
(statearr_28538_28710[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28711 = state_28530;
state_28530 = G__28711;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = function(state_28530){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1.call(this,state_28530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___28709,res,vec__28523,v,p,job,jobs,results))
})();
var state__28153__auto__ = (function (){var statearr_28539 = f__28152__auto__.call(null);
(statearr_28539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___28709);

return statearr_28539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___28709,res,vec__28523,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28540){
var vec__28541 = p__28540;
var v = cljs.core.nth.call(null,vec__28541,(0),null);
var p = cljs.core.nth.call(null,vec__28541,(1),null);
var job = vec__28541;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26894__auto___28712 = n;
var __28713 = (0);
while(true){
if((__28713 < n__26894__auto___28712)){
var G__28544_28714 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28544_28714) {
case "compute":
var c__28151__auto___28716 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28713,c__28151__auto___28716,G__28544_28714,n__26894__auto___28712,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (__28713,c__28151__auto___28716,G__28544_28714,n__26894__auto___28712,jobs,results,process,async){
return (function (state_28557){
var state_val_28558 = (state_28557[(1)]);
if((state_val_28558 === (1))){
var state_28557__$1 = state_28557;
var statearr_28559_28717 = state_28557__$1;
(statearr_28559_28717[(2)] = null);

(statearr_28559_28717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (2))){
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28557__$1,(4),jobs);
} else {
if((state_val_28558 === (3))){
var inst_28555 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28557__$1,inst_28555);
} else {
if((state_val_28558 === (4))){
var inst_28547 = (state_28557[(2)]);
var inst_28548 = process.call(null,inst_28547);
var state_28557__$1 = state_28557;
if(cljs.core.truth_(inst_28548)){
var statearr_28560_28718 = state_28557__$1;
(statearr_28560_28718[(1)] = (5));

} else {
var statearr_28561_28719 = state_28557__$1;
(statearr_28561_28719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (5))){
var state_28557__$1 = state_28557;
var statearr_28562_28720 = state_28557__$1;
(statearr_28562_28720[(2)] = null);

(statearr_28562_28720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (6))){
var state_28557__$1 = state_28557;
var statearr_28563_28721 = state_28557__$1;
(statearr_28563_28721[(2)] = null);

(statearr_28563_28721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28558 === (7))){
var inst_28553 = (state_28557[(2)]);
var state_28557__$1 = state_28557;
var statearr_28564_28722 = state_28557__$1;
(statearr_28564_28722[(2)] = inst_28553);

(statearr_28564_28722[(1)] = (3));


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
});})(__28713,c__28151__auto___28716,G__28544_28714,n__26894__auto___28712,jobs,results,process,async))
;
return ((function (__28713,switch__28039__auto__,c__28151__auto___28716,G__28544_28714,n__26894__auto___28712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0 = (function (){
var statearr_28568 = [null,null,null,null,null,null,null];
(statearr_28568[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__);

(statearr_28568[(1)] = (1));

return statearr_28568;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1 = (function (state_28557){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28569){if((e28569 instanceof Object)){
var ex__28043__auto__ = e28569;
var statearr_28570_28723 = state_28557;
(statearr_28570_28723[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28724 = state_28557;
state_28557 = G__28724;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = function(state_28557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1.call(this,state_28557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__;
})()
;})(__28713,switch__28039__auto__,c__28151__auto___28716,G__28544_28714,n__26894__auto___28712,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_28571 = f__28152__auto__.call(null);
(statearr_28571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___28716);

return statearr_28571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(__28713,c__28151__auto___28716,G__28544_28714,n__26894__auto___28712,jobs,results,process,async))
);


break;
case "async":
var c__28151__auto___28725 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28713,c__28151__auto___28725,G__28544_28714,n__26894__auto___28712,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (__28713,c__28151__auto___28725,G__28544_28714,n__26894__auto___28712,jobs,results,process,async){
return (function (state_28584){
var state_val_28585 = (state_28584[(1)]);
if((state_val_28585 === (1))){
var state_28584__$1 = state_28584;
var statearr_28586_28726 = state_28584__$1;
(statearr_28586_28726[(2)] = null);

(statearr_28586_28726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28585 === (2))){
var state_28584__$1 = state_28584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28584__$1,(4),jobs);
} else {
if((state_val_28585 === (3))){
var inst_28582 = (state_28584[(2)]);
var state_28584__$1 = state_28584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28584__$1,inst_28582);
} else {
if((state_val_28585 === (4))){
var inst_28574 = (state_28584[(2)]);
var inst_28575 = async.call(null,inst_28574);
var state_28584__$1 = state_28584;
if(cljs.core.truth_(inst_28575)){
var statearr_28587_28727 = state_28584__$1;
(statearr_28587_28727[(1)] = (5));

} else {
var statearr_28588_28728 = state_28584__$1;
(statearr_28588_28728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28585 === (5))){
var state_28584__$1 = state_28584;
var statearr_28589_28729 = state_28584__$1;
(statearr_28589_28729[(2)] = null);

(statearr_28589_28729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28585 === (6))){
var state_28584__$1 = state_28584;
var statearr_28590_28730 = state_28584__$1;
(statearr_28590_28730[(2)] = null);

(statearr_28590_28730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28585 === (7))){
var inst_28580 = (state_28584[(2)]);
var state_28584__$1 = state_28584;
var statearr_28591_28731 = state_28584__$1;
(statearr_28591_28731[(2)] = inst_28580);

(statearr_28591_28731[(1)] = (3));


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
});})(__28713,c__28151__auto___28725,G__28544_28714,n__26894__auto___28712,jobs,results,process,async))
;
return ((function (__28713,switch__28039__auto__,c__28151__auto___28725,G__28544_28714,n__26894__auto___28712,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0 = (function (){
var statearr_28595 = [null,null,null,null,null,null,null];
(statearr_28595[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__);

(statearr_28595[(1)] = (1));

return statearr_28595;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1 = (function (state_28584){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28596){if((e28596 instanceof Object)){
var ex__28043__auto__ = e28596;
var statearr_28597_28732 = state_28584;
(statearr_28597_28732[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28733 = state_28584;
state_28584 = G__28733;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = function(state_28584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1.call(this,state_28584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__;
})()
;})(__28713,switch__28039__auto__,c__28151__auto___28725,G__28544_28714,n__26894__auto___28712,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_28598 = f__28152__auto__.call(null);
(statearr_28598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___28725);

return statearr_28598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(__28713,c__28151__auto___28725,G__28544_28714,n__26894__auto___28712,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28734 = (__28713 + (1));
__28713 = G__28734;
continue;
} else {
}
break;
}

var c__28151__auto___28735 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___28735,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___28735,jobs,results,process,async){
return (function (state_28620){
var state_val_28621 = (state_28620[(1)]);
if((state_val_28621 === (1))){
var state_28620__$1 = state_28620;
var statearr_28622_28736 = state_28620__$1;
(statearr_28622_28736[(2)] = null);

(statearr_28622_28736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (2))){
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28620__$1,(4),from);
} else {
if((state_val_28621 === (3))){
var inst_28618 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28620__$1,inst_28618);
} else {
if((state_val_28621 === (4))){
var inst_28601 = (state_28620[(7)]);
var inst_28601__$1 = (state_28620[(2)]);
var inst_28602 = (inst_28601__$1 == null);
var state_28620__$1 = (function (){var statearr_28623 = state_28620;
(statearr_28623[(7)] = inst_28601__$1);

return statearr_28623;
})();
if(cljs.core.truth_(inst_28602)){
var statearr_28624_28737 = state_28620__$1;
(statearr_28624_28737[(1)] = (5));

} else {
var statearr_28625_28738 = state_28620__$1;
(statearr_28625_28738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (5))){
var inst_28604 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28620__$1 = state_28620;
var statearr_28626_28739 = state_28620__$1;
(statearr_28626_28739[(2)] = inst_28604);

(statearr_28626_28739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (6))){
var inst_28606 = (state_28620[(8)]);
var inst_28601 = (state_28620[(7)]);
var inst_28606__$1 = cljs.core.async.chan.call(null,(1));
var inst_28607 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28608 = [inst_28601,inst_28606__$1];
var inst_28609 = (new cljs.core.PersistentVector(null,2,(5),inst_28607,inst_28608,null));
var state_28620__$1 = (function (){var statearr_28627 = state_28620;
(statearr_28627[(8)] = inst_28606__$1);

return statearr_28627;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28620__$1,(8),jobs,inst_28609);
} else {
if((state_val_28621 === (7))){
var inst_28616 = (state_28620[(2)]);
var state_28620__$1 = state_28620;
var statearr_28628_28740 = state_28620__$1;
(statearr_28628_28740[(2)] = inst_28616);

(statearr_28628_28740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28621 === (8))){
var inst_28606 = (state_28620[(8)]);
var inst_28611 = (state_28620[(2)]);
var state_28620__$1 = (function (){var statearr_28629 = state_28620;
(statearr_28629[(9)] = inst_28611);

return statearr_28629;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28620__$1,(9),results,inst_28606);
} else {
if((state_val_28621 === (9))){
var inst_28613 = (state_28620[(2)]);
var state_28620__$1 = (function (){var statearr_28630 = state_28620;
(statearr_28630[(10)] = inst_28613);

return statearr_28630;
})();
var statearr_28631_28741 = state_28620__$1;
(statearr_28631_28741[(2)] = null);

(statearr_28631_28741[(1)] = (2));


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
});})(c__28151__auto___28735,jobs,results,process,async))
;
return ((function (switch__28039__auto__,c__28151__auto___28735,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0 = (function (){
var statearr_28635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__);

(statearr_28635[(1)] = (1));

return statearr_28635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1 = (function (state_28620){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28636){if((e28636 instanceof Object)){
var ex__28043__auto__ = e28636;
var statearr_28637_28742 = state_28620;
(statearr_28637_28742[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28743 = state_28620;
state_28620 = G__28743;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = function(state_28620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1.call(this,state_28620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___28735,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_28638 = f__28152__auto__.call(null);
(statearr_28638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___28735);

return statearr_28638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___28735,jobs,results,process,async))
);


var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__,jobs,results,process,async){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto__,jobs,results,process,async){
return (function (state_28676){
var state_val_28677 = (state_28676[(1)]);
if((state_val_28677 === (7))){
var inst_28672 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28678_28744 = state_28676__$1;
(statearr_28678_28744[(2)] = inst_28672);

(statearr_28678_28744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (20))){
var state_28676__$1 = state_28676;
var statearr_28679_28745 = state_28676__$1;
(statearr_28679_28745[(2)] = null);

(statearr_28679_28745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (1))){
var state_28676__$1 = state_28676;
var statearr_28680_28746 = state_28676__$1;
(statearr_28680_28746[(2)] = null);

(statearr_28680_28746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (4))){
var inst_28641 = (state_28676[(7)]);
var inst_28641__$1 = (state_28676[(2)]);
var inst_28642 = (inst_28641__$1 == null);
var state_28676__$1 = (function (){var statearr_28681 = state_28676;
(statearr_28681[(7)] = inst_28641__$1);

return statearr_28681;
})();
if(cljs.core.truth_(inst_28642)){
var statearr_28682_28747 = state_28676__$1;
(statearr_28682_28747[(1)] = (5));

} else {
var statearr_28683_28748 = state_28676__$1;
(statearr_28683_28748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (15))){
var inst_28654 = (state_28676[(8)]);
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28676__$1,(18),to,inst_28654);
} else {
if((state_val_28677 === (21))){
var inst_28667 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28684_28749 = state_28676__$1;
(statearr_28684_28749[(2)] = inst_28667);

(statearr_28684_28749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (13))){
var inst_28669 = (state_28676[(2)]);
var state_28676__$1 = (function (){var statearr_28685 = state_28676;
(statearr_28685[(9)] = inst_28669);

return statearr_28685;
})();
var statearr_28686_28750 = state_28676__$1;
(statearr_28686_28750[(2)] = null);

(statearr_28686_28750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (6))){
var inst_28641 = (state_28676[(7)]);
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28676__$1,(11),inst_28641);
} else {
if((state_val_28677 === (17))){
var inst_28662 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
if(cljs.core.truth_(inst_28662)){
var statearr_28687_28751 = state_28676__$1;
(statearr_28687_28751[(1)] = (19));

} else {
var statearr_28688_28752 = state_28676__$1;
(statearr_28688_28752[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (3))){
var inst_28674 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28676__$1,inst_28674);
} else {
if((state_val_28677 === (12))){
var inst_28651 = (state_28676[(10)]);
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28676__$1,(14),inst_28651);
} else {
if((state_val_28677 === (2))){
var state_28676__$1 = state_28676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28676__$1,(4),results);
} else {
if((state_val_28677 === (19))){
var state_28676__$1 = state_28676;
var statearr_28689_28753 = state_28676__$1;
(statearr_28689_28753[(2)] = null);

(statearr_28689_28753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (11))){
var inst_28651 = (state_28676[(2)]);
var state_28676__$1 = (function (){var statearr_28690 = state_28676;
(statearr_28690[(10)] = inst_28651);

return statearr_28690;
})();
var statearr_28691_28754 = state_28676__$1;
(statearr_28691_28754[(2)] = null);

(statearr_28691_28754[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (9))){
var state_28676__$1 = state_28676;
var statearr_28692_28755 = state_28676__$1;
(statearr_28692_28755[(2)] = null);

(statearr_28692_28755[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (5))){
var state_28676__$1 = state_28676;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28693_28756 = state_28676__$1;
(statearr_28693_28756[(1)] = (8));

} else {
var statearr_28694_28757 = state_28676__$1;
(statearr_28694_28757[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (14))){
var inst_28654 = (state_28676[(8)]);
var inst_28656 = (state_28676[(11)]);
var inst_28654__$1 = (state_28676[(2)]);
var inst_28655 = (inst_28654__$1 == null);
var inst_28656__$1 = cljs.core.not.call(null,inst_28655);
var state_28676__$1 = (function (){var statearr_28695 = state_28676;
(statearr_28695[(8)] = inst_28654__$1);

(statearr_28695[(11)] = inst_28656__$1);

return statearr_28695;
})();
if(inst_28656__$1){
var statearr_28696_28758 = state_28676__$1;
(statearr_28696_28758[(1)] = (15));

} else {
var statearr_28697_28759 = state_28676__$1;
(statearr_28697_28759[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (16))){
var inst_28656 = (state_28676[(11)]);
var state_28676__$1 = state_28676;
var statearr_28698_28760 = state_28676__$1;
(statearr_28698_28760[(2)] = inst_28656);

(statearr_28698_28760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (10))){
var inst_28648 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28699_28761 = state_28676__$1;
(statearr_28699_28761[(2)] = inst_28648);

(statearr_28699_28761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (18))){
var inst_28659 = (state_28676[(2)]);
var state_28676__$1 = state_28676;
var statearr_28700_28762 = state_28676__$1;
(statearr_28700_28762[(2)] = inst_28659);

(statearr_28700_28762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28677 === (8))){
var inst_28645 = cljs.core.async.close_BANG_.call(null,to);
var state_28676__$1 = state_28676;
var statearr_28701_28763 = state_28676__$1;
(statearr_28701_28763[(2)] = inst_28645);

(statearr_28701_28763[(1)] = (10));


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
});})(c__28151__auto__,jobs,results,process,async))
;
return ((function (switch__28039__auto__,c__28151__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0 = (function (){
var statearr_28705 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28705[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__);

(statearr_28705[(1)] = (1));

return statearr_28705;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1 = (function (state_28676){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28706){if((e28706 instanceof Object)){
var ex__28043__auto__ = e28706;
var statearr_28707_28764 = state_28676;
(statearr_28707_28764[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28765 = state_28676;
state_28676 = G__28765;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__ = function(state_28676){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1.call(this,state_28676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28040__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto__,jobs,results,process,async))
})();
var state__28153__auto__ = (function (){var statearr_28708 = f__28152__auto__.call(null);
(statearr_28708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_28708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__,jobs,results,process,async))
);

return c__28151__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28766 = [];
var len__27054__auto___28769 = arguments.length;
var i__27055__auto___28770 = (0);
while(true){
if((i__27055__auto___28770 < len__27054__auto___28769)){
args28766.push((arguments[i__27055__auto___28770]));

var G__28771 = (i__27055__auto___28770 + (1));
i__27055__auto___28770 = G__28771;
continue;
} else {
}
break;
}

var G__28768 = args28766.length;
switch (G__28768) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28766.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28773 = [];
var len__27054__auto___28776 = arguments.length;
var i__27055__auto___28777 = (0);
while(true){
if((i__27055__auto___28777 < len__27054__auto___28776)){
args28773.push((arguments[i__27055__auto___28777]));

var G__28778 = (i__27055__auto___28777 + (1));
i__27055__auto___28777 = G__28778;
continue;
} else {
}
break;
}

var G__28775 = args28773.length;
switch (G__28775) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28773.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28780 = [];
var len__27054__auto___28833 = arguments.length;
var i__27055__auto___28834 = (0);
while(true){
if((i__27055__auto___28834 < len__27054__auto___28833)){
args28780.push((arguments[i__27055__auto___28834]));

var G__28835 = (i__27055__auto___28834 + (1));
i__27055__auto___28834 = G__28835;
continue;
} else {
}
break;
}

var G__28782 = args28780.length;
switch (G__28782) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28780.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28151__auto___28837 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___28837,tc,fc){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___28837,tc,fc){
return (function (state_28808){
var state_val_28809 = (state_28808[(1)]);
if((state_val_28809 === (7))){
var inst_28804 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
var statearr_28810_28838 = state_28808__$1;
(statearr_28810_28838[(2)] = inst_28804);

(statearr_28810_28838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (1))){
var state_28808__$1 = state_28808;
var statearr_28811_28839 = state_28808__$1;
(statearr_28811_28839[(2)] = null);

(statearr_28811_28839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (4))){
var inst_28785 = (state_28808[(7)]);
var inst_28785__$1 = (state_28808[(2)]);
var inst_28786 = (inst_28785__$1 == null);
var state_28808__$1 = (function (){var statearr_28812 = state_28808;
(statearr_28812[(7)] = inst_28785__$1);

return statearr_28812;
})();
if(cljs.core.truth_(inst_28786)){
var statearr_28813_28840 = state_28808__$1;
(statearr_28813_28840[(1)] = (5));

} else {
var statearr_28814_28841 = state_28808__$1;
(statearr_28814_28841[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (13))){
var state_28808__$1 = state_28808;
var statearr_28815_28842 = state_28808__$1;
(statearr_28815_28842[(2)] = null);

(statearr_28815_28842[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (6))){
var inst_28785 = (state_28808[(7)]);
var inst_28791 = p.call(null,inst_28785);
var state_28808__$1 = state_28808;
if(cljs.core.truth_(inst_28791)){
var statearr_28816_28843 = state_28808__$1;
(statearr_28816_28843[(1)] = (9));

} else {
var statearr_28817_28844 = state_28808__$1;
(statearr_28817_28844[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (3))){
var inst_28806 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28808__$1,inst_28806);
} else {
if((state_val_28809 === (12))){
var state_28808__$1 = state_28808;
var statearr_28818_28845 = state_28808__$1;
(statearr_28818_28845[(2)] = null);

(statearr_28818_28845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (2))){
var state_28808__$1 = state_28808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28808__$1,(4),ch);
} else {
if((state_val_28809 === (11))){
var inst_28785 = (state_28808[(7)]);
var inst_28795 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28808__$1,(8),inst_28795,inst_28785);
} else {
if((state_val_28809 === (9))){
var state_28808__$1 = state_28808;
var statearr_28819_28846 = state_28808__$1;
(statearr_28819_28846[(2)] = tc);

(statearr_28819_28846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (5))){
var inst_28788 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28789 = cljs.core.async.close_BANG_.call(null,fc);
var state_28808__$1 = (function (){var statearr_28820 = state_28808;
(statearr_28820[(8)] = inst_28788);

return statearr_28820;
})();
var statearr_28821_28847 = state_28808__$1;
(statearr_28821_28847[(2)] = inst_28789);

(statearr_28821_28847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (14))){
var inst_28802 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
var statearr_28822_28848 = state_28808__$1;
(statearr_28822_28848[(2)] = inst_28802);

(statearr_28822_28848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (10))){
var state_28808__$1 = state_28808;
var statearr_28823_28849 = state_28808__$1;
(statearr_28823_28849[(2)] = fc);

(statearr_28823_28849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28809 === (8))){
var inst_28797 = (state_28808[(2)]);
var state_28808__$1 = state_28808;
if(cljs.core.truth_(inst_28797)){
var statearr_28824_28850 = state_28808__$1;
(statearr_28824_28850[(1)] = (12));

} else {
var statearr_28825_28851 = state_28808__$1;
(statearr_28825_28851[(1)] = (13));

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
});})(c__28151__auto___28837,tc,fc))
;
return ((function (switch__28039__auto__,c__28151__auto___28837,tc,fc){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_28829 = [null,null,null,null,null,null,null,null,null];
(statearr_28829[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_28829[(1)] = (1));

return statearr_28829;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_28808){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28830){if((e28830 instanceof Object)){
var ex__28043__auto__ = e28830;
var statearr_28831_28852 = state_28808;
(statearr_28831_28852[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28853 = state_28808;
state_28808 = G__28853;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_28808){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_28808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___28837,tc,fc))
})();
var state__28153__auto__ = (function (){var statearr_28832 = f__28152__auto__.call(null);
(statearr_28832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___28837);

return statearr_28832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___28837,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto__){
return (function (state_28917){
var state_val_28918 = (state_28917[(1)]);
if((state_val_28918 === (7))){
var inst_28913 = (state_28917[(2)]);
var state_28917__$1 = state_28917;
var statearr_28919_28940 = state_28917__$1;
(statearr_28919_28940[(2)] = inst_28913);

(statearr_28919_28940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28918 === (1))){
var inst_28897 = init;
var state_28917__$1 = (function (){var statearr_28920 = state_28917;
(statearr_28920[(7)] = inst_28897);

return statearr_28920;
})();
var statearr_28921_28941 = state_28917__$1;
(statearr_28921_28941[(2)] = null);

(statearr_28921_28941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28918 === (4))){
var inst_28900 = (state_28917[(8)]);
var inst_28900__$1 = (state_28917[(2)]);
var inst_28901 = (inst_28900__$1 == null);
var state_28917__$1 = (function (){var statearr_28922 = state_28917;
(statearr_28922[(8)] = inst_28900__$1);

return statearr_28922;
})();
if(cljs.core.truth_(inst_28901)){
var statearr_28923_28942 = state_28917__$1;
(statearr_28923_28942[(1)] = (5));

} else {
var statearr_28924_28943 = state_28917__$1;
(statearr_28924_28943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28918 === (6))){
var inst_28897 = (state_28917[(7)]);
var inst_28900 = (state_28917[(8)]);
var inst_28904 = (state_28917[(9)]);
var inst_28904__$1 = f.call(null,inst_28897,inst_28900);
var inst_28905 = cljs.core.reduced_QMARK_.call(null,inst_28904__$1);
var state_28917__$1 = (function (){var statearr_28925 = state_28917;
(statearr_28925[(9)] = inst_28904__$1);

return statearr_28925;
})();
if(inst_28905){
var statearr_28926_28944 = state_28917__$1;
(statearr_28926_28944[(1)] = (8));

} else {
var statearr_28927_28945 = state_28917__$1;
(statearr_28927_28945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28918 === (3))){
var inst_28915 = (state_28917[(2)]);
var state_28917__$1 = state_28917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28917__$1,inst_28915);
} else {
if((state_val_28918 === (2))){
var state_28917__$1 = state_28917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28917__$1,(4),ch);
} else {
if((state_val_28918 === (9))){
var inst_28904 = (state_28917[(9)]);
var inst_28897 = inst_28904;
var state_28917__$1 = (function (){var statearr_28928 = state_28917;
(statearr_28928[(7)] = inst_28897);

return statearr_28928;
})();
var statearr_28929_28946 = state_28917__$1;
(statearr_28929_28946[(2)] = null);

(statearr_28929_28946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28918 === (5))){
var inst_28897 = (state_28917[(7)]);
var state_28917__$1 = state_28917;
var statearr_28930_28947 = state_28917__$1;
(statearr_28930_28947[(2)] = inst_28897);

(statearr_28930_28947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28918 === (10))){
var inst_28911 = (state_28917[(2)]);
var state_28917__$1 = state_28917;
var statearr_28931_28948 = state_28917__$1;
(statearr_28931_28948[(2)] = inst_28911);

(statearr_28931_28948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28918 === (8))){
var inst_28904 = (state_28917[(9)]);
var inst_28907 = cljs.core.deref.call(null,inst_28904);
var state_28917__$1 = state_28917;
var statearr_28932_28949 = state_28917__$1;
(statearr_28932_28949[(2)] = inst_28907);

(statearr_28932_28949[(1)] = (10));


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
});})(c__28151__auto__))
;
return ((function (switch__28039__auto__,c__28151__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28040__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28040__auto____0 = (function (){
var statearr_28936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28936[(0)] = cljs$core$async$reduce_$_state_machine__28040__auto__);

(statearr_28936[(1)] = (1));

return statearr_28936;
});
var cljs$core$async$reduce_$_state_machine__28040__auto____1 = (function (state_28917){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28937){if((e28937 instanceof Object)){
var ex__28043__auto__ = e28937;
var statearr_28938_28950 = state_28917;
(statearr_28938_28950[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28951 = state_28917;
state_28917 = G__28951;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28040__auto__ = function(state_28917){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28040__auto____1.call(this,state_28917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28040__auto____0;
cljs$core$async$reduce_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28040__auto____1;
return cljs$core$async$reduce_$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_28939 = f__28152__auto__.call(null);
(statearr_28939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_28939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__,f__$1){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto__,f__$1){
return (function (state_28971){
var state_val_28972 = (state_28971[(1)]);
if((state_val_28972 === (1))){
var inst_28966 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28971__$1,(2),inst_28966);
} else {
if((state_val_28972 === (2))){
var inst_28968 = (state_28971[(2)]);
var inst_28969 = f__$1.call(null,inst_28968);
var state_28971__$1 = state_28971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28971__$1,inst_28969);
} else {
return null;
}
}
});})(c__28151__auto__,f__$1))
;
return ((function (switch__28039__auto__,c__28151__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__28040__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28040__auto____0 = (function (){
var statearr_28976 = [null,null,null,null,null,null,null];
(statearr_28976[(0)] = cljs$core$async$transduce_$_state_machine__28040__auto__);

(statearr_28976[(1)] = (1));

return statearr_28976;
});
var cljs$core$async$transduce_$_state_machine__28040__auto____1 = (function (state_28971){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_28971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e28977){if((e28977 instanceof Object)){
var ex__28043__auto__ = e28977;
var statearr_28978_28980 = state_28971;
(statearr_28978_28980[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28981 = state_28971;
state_28971 = G__28981;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28040__auto__ = function(state_28971){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28040__auto____1.call(this,state_28971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28040__auto____0;
cljs$core$async$transduce_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28040__auto____1;
return cljs$core$async$transduce_$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto__,f__$1))
})();
var state__28153__auto__ = (function (){var statearr_28979 = f__28152__auto__.call(null);
(statearr_28979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__,f__$1))
);

return c__28151__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28982 = [];
var len__27054__auto___29034 = arguments.length;
var i__27055__auto___29035 = (0);
while(true){
if((i__27055__auto___29035 < len__27054__auto___29034)){
args28982.push((arguments[i__27055__auto___29035]));

var G__29036 = (i__27055__auto___29035 + (1));
i__27055__auto___29035 = G__29036;
continue;
} else {
}
break;
}

var G__28984 = args28982.length;
switch (G__28984) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28982.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto__){
return (function (state_29009){
var state_val_29010 = (state_29009[(1)]);
if((state_val_29010 === (7))){
var inst_28991 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29011_29038 = state_29009__$1;
(statearr_29011_29038[(2)] = inst_28991);

(statearr_29011_29038[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (1))){
var inst_28985 = cljs.core.seq.call(null,coll);
var inst_28986 = inst_28985;
var state_29009__$1 = (function (){var statearr_29012 = state_29009;
(statearr_29012[(7)] = inst_28986);

return statearr_29012;
})();
var statearr_29013_29039 = state_29009__$1;
(statearr_29013_29039[(2)] = null);

(statearr_29013_29039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (4))){
var inst_28986 = (state_29009[(7)]);
var inst_28989 = cljs.core.first.call(null,inst_28986);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29009__$1,(7),ch,inst_28989);
} else {
if((state_val_29010 === (13))){
var inst_29003 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29014_29040 = state_29009__$1;
(statearr_29014_29040[(2)] = inst_29003);

(statearr_29014_29040[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (6))){
var inst_28994 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28994)){
var statearr_29015_29041 = state_29009__$1;
(statearr_29015_29041[(1)] = (8));

} else {
var statearr_29016_29042 = state_29009__$1;
(statearr_29016_29042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (3))){
var inst_29007 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29009__$1,inst_29007);
} else {
if((state_val_29010 === (12))){
var state_29009__$1 = state_29009;
var statearr_29017_29043 = state_29009__$1;
(statearr_29017_29043[(2)] = null);

(statearr_29017_29043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (2))){
var inst_28986 = (state_29009[(7)]);
var state_29009__$1 = state_29009;
if(cljs.core.truth_(inst_28986)){
var statearr_29018_29044 = state_29009__$1;
(statearr_29018_29044[(1)] = (4));

} else {
var statearr_29019_29045 = state_29009__$1;
(statearr_29019_29045[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (11))){
var inst_29000 = cljs.core.async.close_BANG_.call(null,ch);
var state_29009__$1 = state_29009;
var statearr_29020_29046 = state_29009__$1;
(statearr_29020_29046[(2)] = inst_29000);

(statearr_29020_29046[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (9))){
var state_29009__$1 = state_29009;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29021_29047 = state_29009__$1;
(statearr_29021_29047[(1)] = (11));

} else {
var statearr_29022_29048 = state_29009__$1;
(statearr_29022_29048[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (5))){
var inst_28986 = (state_29009[(7)]);
var state_29009__$1 = state_29009;
var statearr_29023_29049 = state_29009__$1;
(statearr_29023_29049[(2)] = inst_28986);

(statearr_29023_29049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (10))){
var inst_29005 = (state_29009[(2)]);
var state_29009__$1 = state_29009;
var statearr_29024_29050 = state_29009__$1;
(statearr_29024_29050[(2)] = inst_29005);

(statearr_29024_29050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29010 === (8))){
var inst_28986 = (state_29009[(7)]);
var inst_28996 = cljs.core.next.call(null,inst_28986);
var inst_28986__$1 = inst_28996;
var state_29009__$1 = (function (){var statearr_29025 = state_29009;
(statearr_29025[(7)] = inst_28986__$1);

return statearr_29025;
})();
var statearr_29026_29051 = state_29009__$1;
(statearr_29026_29051[(2)] = null);

(statearr_29026_29051[(1)] = (2));


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
});})(c__28151__auto__))
;
return ((function (switch__28039__auto__,c__28151__auto__){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_29030 = [null,null,null,null,null,null,null,null];
(statearr_29030[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_29030[(1)] = (1));

return statearr_29030;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_29009){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_29009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e29031){if((e29031 instanceof Object)){
var ex__28043__auto__ = e29031;
var statearr_29032_29052 = state_29009;
(statearr_29032_29052[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29053 = state_29009;
state_29009 = G__29053;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_29009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_29009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_29033 = f__28152__auto__.call(null);
(statearr_29033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_29033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26642__auto__ = (((_ == null))?null:_);
var m__26643__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,_);
} else {
var m__26643__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29279 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29279 = (function (mult,ch,cs,meta29280){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta29280 = meta29280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_29281,meta29280__$1){
var self__ = this;
var _29281__$1 = this;
return (new cljs.core.async.t_cljs$core$async29279(self__.mult,self__.ch,self__.cs,meta29280__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_29281){
var self__ = this;
var _29281__$1 = this;
return self__.meta29280;
});})(cs))
;

cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29279.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async29279.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29280","meta29280",-1520013558,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async29279.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29279.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29279";

cljs.core.async.t_cljs$core$async29279.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29279");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async29279 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async29279(mult__$1,ch__$1,cs__$1,meta29280){
return (new cljs.core.async.t_cljs$core$async29279(mult__$1,ch__$1,cs__$1,meta29280));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async29279(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28151__auto___29504 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___29504,cs,m,dchan,dctr,done){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___29504,cs,m,dchan,dctr,done){
return (function (state_29416){
var state_val_29417 = (state_29416[(1)]);
if((state_val_29417 === (7))){
var inst_29412 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29418_29505 = state_29416__$1;
(statearr_29418_29505[(2)] = inst_29412);

(statearr_29418_29505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (20))){
var inst_29315 = (state_29416[(7)]);
var inst_29327 = cljs.core.first.call(null,inst_29315);
var inst_29328 = cljs.core.nth.call(null,inst_29327,(0),null);
var inst_29329 = cljs.core.nth.call(null,inst_29327,(1),null);
var state_29416__$1 = (function (){var statearr_29419 = state_29416;
(statearr_29419[(8)] = inst_29328);

return statearr_29419;
})();
if(cljs.core.truth_(inst_29329)){
var statearr_29420_29506 = state_29416__$1;
(statearr_29420_29506[(1)] = (22));

} else {
var statearr_29421_29507 = state_29416__$1;
(statearr_29421_29507[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (27))){
var inst_29357 = (state_29416[(9)]);
var inst_29284 = (state_29416[(10)]);
var inst_29359 = (state_29416[(11)]);
var inst_29364 = (state_29416[(12)]);
var inst_29364__$1 = cljs.core._nth.call(null,inst_29357,inst_29359);
var inst_29365 = cljs.core.async.put_BANG_.call(null,inst_29364__$1,inst_29284,done);
var state_29416__$1 = (function (){var statearr_29422 = state_29416;
(statearr_29422[(12)] = inst_29364__$1);

return statearr_29422;
})();
if(cljs.core.truth_(inst_29365)){
var statearr_29423_29508 = state_29416__$1;
(statearr_29423_29508[(1)] = (30));

} else {
var statearr_29424_29509 = state_29416__$1;
(statearr_29424_29509[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (1))){
var state_29416__$1 = state_29416;
var statearr_29425_29510 = state_29416__$1;
(statearr_29425_29510[(2)] = null);

(statearr_29425_29510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (24))){
var inst_29315 = (state_29416[(7)]);
var inst_29334 = (state_29416[(2)]);
var inst_29335 = cljs.core.next.call(null,inst_29315);
var inst_29293 = inst_29335;
var inst_29294 = null;
var inst_29295 = (0);
var inst_29296 = (0);
var state_29416__$1 = (function (){var statearr_29426 = state_29416;
(statearr_29426[(13)] = inst_29334);

(statearr_29426[(14)] = inst_29294);

(statearr_29426[(15)] = inst_29296);

(statearr_29426[(16)] = inst_29295);

(statearr_29426[(17)] = inst_29293);

return statearr_29426;
})();
var statearr_29427_29511 = state_29416__$1;
(statearr_29427_29511[(2)] = null);

(statearr_29427_29511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (39))){
var state_29416__$1 = state_29416;
var statearr_29431_29512 = state_29416__$1;
(statearr_29431_29512[(2)] = null);

(statearr_29431_29512[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (4))){
var inst_29284 = (state_29416[(10)]);
var inst_29284__$1 = (state_29416[(2)]);
var inst_29285 = (inst_29284__$1 == null);
var state_29416__$1 = (function (){var statearr_29432 = state_29416;
(statearr_29432[(10)] = inst_29284__$1);

return statearr_29432;
})();
if(cljs.core.truth_(inst_29285)){
var statearr_29433_29513 = state_29416__$1;
(statearr_29433_29513[(1)] = (5));

} else {
var statearr_29434_29514 = state_29416__$1;
(statearr_29434_29514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (15))){
var inst_29294 = (state_29416[(14)]);
var inst_29296 = (state_29416[(15)]);
var inst_29295 = (state_29416[(16)]);
var inst_29293 = (state_29416[(17)]);
var inst_29311 = (state_29416[(2)]);
var inst_29312 = (inst_29296 + (1));
var tmp29428 = inst_29294;
var tmp29429 = inst_29295;
var tmp29430 = inst_29293;
var inst_29293__$1 = tmp29430;
var inst_29294__$1 = tmp29428;
var inst_29295__$1 = tmp29429;
var inst_29296__$1 = inst_29312;
var state_29416__$1 = (function (){var statearr_29435 = state_29416;
(statearr_29435[(18)] = inst_29311);

(statearr_29435[(14)] = inst_29294__$1);

(statearr_29435[(15)] = inst_29296__$1);

(statearr_29435[(16)] = inst_29295__$1);

(statearr_29435[(17)] = inst_29293__$1);

return statearr_29435;
})();
var statearr_29436_29515 = state_29416__$1;
(statearr_29436_29515[(2)] = null);

(statearr_29436_29515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (21))){
var inst_29338 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29440_29516 = state_29416__$1;
(statearr_29440_29516[(2)] = inst_29338);

(statearr_29440_29516[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (31))){
var inst_29364 = (state_29416[(12)]);
var inst_29368 = done.call(null,null);
var inst_29369 = cljs.core.async.untap_STAR_.call(null,m,inst_29364);
var state_29416__$1 = (function (){var statearr_29441 = state_29416;
(statearr_29441[(19)] = inst_29368);

return statearr_29441;
})();
var statearr_29442_29517 = state_29416__$1;
(statearr_29442_29517[(2)] = inst_29369);

(statearr_29442_29517[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (32))){
var inst_29357 = (state_29416[(9)]);
var inst_29356 = (state_29416[(20)]);
var inst_29359 = (state_29416[(11)]);
var inst_29358 = (state_29416[(21)]);
var inst_29371 = (state_29416[(2)]);
var inst_29372 = (inst_29359 + (1));
var tmp29437 = inst_29357;
var tmp29438 = inst_29356;
var tmp29439 = inst_29358;
var inst_29356__$1 = tmp29438;
var inst_29357__$1 = tmp29437;
var inst_29358__$1 = tmp29439;
var inst_29359__$1 = inst_29372;
var state_29416__$1 = (function (){var statearr_29443 = state_29416;
(statearr_29443[(9)] = inst_29357__$1);

(statearr_29443[(20)] = inst_29356__$1);

(statearr_29443[(11)] = inst_29359__$1);

(statearr_29443[(21)] = inst_29358__$1);

(statearr_29443[(22)] = inst_29371);

return statearr_29443;
})();
var statearr_29444_29518 = state_29416__$1;
(statearr_29444_29518[(2)] = null);

(statearr_29444_29518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (40))){
var inst_29384 = (state_29416[(23)]);
var inst_29388 = done.call(null,null);
var inst_29389 = cljs.core.async.untap_STAR_.call(null,m,inst_29384);
var state_29416__$1 = (function (){var statearr_29445 = state_29416;
(statearr_29445[(24)] = inst_29388);

return statearr_29445;
})();
var statearr_29446_29519 = state_29416__$1;
(statearr_29446_29519[(2)] = inst_29389);

(statearr_29446_29519[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (33))){
var inst_29375 = (state_29416[(25)]);
var inst_29377 = cljs.core.chunked_seq_QMARK_.call(null,inst_29375);
var state_29416__$1 = state_29416;
if(inst_29377){
var statearr_29447_29520 = state_29416__$1;
(statearr_29447_29520[(1)] = (36));

} else {
var statearr_29448_29521 = state_29416__$1;
(statearr_29448_29521[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (13))){
var inst_29305 = (state_29416[(26)]);
var inst_29308 = cljs.core.async.close_BANG_.call(null,inst_29305);
var state_29416__$1 = state_29416;
var statearr_29449_29522 = state_29416__$1;
(statearr_29449_29522[(2)] = inst_29308);

(statearr_29449_29522[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (22))){
var inst_29328 = (state_29416[(8)]);
var inst_29331 = cljs.core.async.close_BANG_.call(null,inst_29328);
var state_29416__$1 = state_29416;
var statearr_29450_29523 = state_29416__$1;
(statearr_29450_29523[(2)] = inst_29331);

(statearr_29450_29523[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (36))){
var inst_29375 = (state_29416[(25)]);
var inst_29379 = cljs.core.chunk_first.call(null,inst_29375);
var inst_29380 = cljs.core.chunk_rest.call(null,inst_29375);
var inst_29381 = cljs.core.count.call(null,inst_29379);
var inst_29356 = inst_29380;
var inst_29357 = inst_29379;
var inst_29358 = inst_29381;
var inst_29359 = (0);
var state_29416__$1 = (function (){var statearr_29451 = state_29416;
(statearr_29451[(9)] = inst_29357);

(statearr_29451[(20)] = inst_29356);

(statearr_29451[(11)] = inst_29359);

(statearr_29451[(21)] = inst_29358);

return statearr_29451;
})();
var statearr_29452_29524 = state_29416__$1;
(statearr_29452_29524[(2)] = null);

(statearr_29452_29524[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (41))){
var inst_29375 = (state_29416[(25)]);
var inst_29391 = (state_29416[(2)]);
var inst_29392 = cljs.core.next.call(null,inst_29375);
var inst_29356 = inst_29392;
var inst_29357 = null;
var inst_29358 = (0);
var inst_29359 = (0);
var state_29416__$1 = (function (){var statearr_29453 = state_29416;
(statearr_29453[(9)] = inst_29357);

(statearr_29453[(27)] = inst_29391);

(statearr_29453[(20)] = inst_29356);

(statearr_29453[(11)] = inst_29359);

(statearr_29453[(21)] = inst_29358);

return statearr_29453;
})();
var statearr_29454_29525 = state_29416__$1;
(statearr_29454_29525[(2)] = null);

(statearr_29454_29525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (43))){
var state_29416__$1 = state_29416;
var statearr_29455_29526 = state_29416__$1;
(statearr_29455_29526[(2)] = null);

(statearr_29455_29526[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (29))){
var inst_29400 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29456_29527 = state_29416__$1;
(statearr_29456_29527[(2)] = inst_29400);

(statearr_29456_29527[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (44))){
var inst_29409 = (state_29416[(2)]);
var state_29416__$1 = (function (){var statearr_29457 = state_29416;
(statearr_29457[(28)] = inst_29409);

return statearr_29457;
})();
var statearr_29458_29528 = state_29416__$1;
(statearr_29458_29528[(2)] = null);

(statearr_29458_29528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (6))){
var inst_29348 = (state_29416[(29)]);
var inst_29347 = cljs.core.deref.call(null,cs);
var inst_29348__$1 = cljs.core.keys.call(null,inst_29347);
var inst_29349 = cljs.core.count.call(null,inst_29348__$1);
var inst_29350 = cljs.core.reset_BANG_.call(null,dctr,inst_29349);
var inst_29355 = cljs.core.seq.call(null,inst_29348__$1);
var inst_29356 = inst_29355;
var inst_29357 = null;
var inst_29358 = (0);
var inst_29359 = (0);
var state_29416__$1 = (function (){var statearr_29459 = state_29416;
(statearr_29459[(29)] = inst_29348__$1);

(statearr_29459[(9)] = inst_29357);

(statearr_29459[(30)] = inst_29350);

(statearr_29459[(20)] = inst_29356);

(statearr_29459[(11)] = inst_29359);

(statearr_29459[(21)] = inst_29358);

return statearr_29459;
})();
var statearr_29460_29529 = state_29416__$1;
(statearr_29460_29529[(2)] = null);

(statearr_29460_29529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (28))){
var inst_29375 = (state_29416[(25)]);
var inst_29356 = (state_29416[(20)]);
var inst_29375__$1 = cljs.core.seq.call(null,inst_29356);
var state_29416__$1 = (function (){var statearr_29461 = state_29416;
(statearr_29461[(25)] = inst_29375__$1);

return statearr_29461;
})();
if(inst_29375__$1){
var statearr_29462_29530 = state_29416__$1;
(statearr_29462_29530[(1)] = (33));

} else {
var statearr_29463_29531 = state_29416__$1;
(statearr_29463_29531[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (25))){
var inst_29359 = (state_29416[(11)]);
var inst_29358 = (state_29416[(21)]);
var inst_29361 = (inst_29359 < inst_29358);
var inst_29362 = inst_29361;
var state_29416__$1 = state_29416;
if(cljs.core.truth_(inst_29362)){
var statearr_29464_29532 = state_29416__$1;
(statearr_29464_29532[(1)] = (27));

} else {
var statearr_29465_29533 = state_29416__$1;
(statearr_29465_29533[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (34))){
var state_29416__$1 = state_29416;
var statearr_29466_29534 = state_29416__$1;
(statearr_29466_29534[(2)] = null);

(statearr_29466_29534[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (17))){
var state_29416__$1 = state_29416;
var statearr_29467_29535 = state_29416__$1;
(statearr_29467_29535[(2)] = null);

(statearr_29467_29535[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (3))){
var inst_29414 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29416__$1,inst_29414);
} else {
if((state_val_29417 === (12))){
var inst_29343 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29468_29536 = state_29416__$1;
(statearr_29468_29536[(2)] = inst_29343);

(statearr_29468_29536[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (2))){
var state_29416__$1 = state_29416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29416__$1,(4),ch);
} else {
if((state_val_29417 === (23))){
var state_29416__$1 = state_29416;
var statearr_29469_29537 = state_29416__$1;
(statearr_29469_29537[(2)] = null);

(statearr_29469_29537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (35))){
var inst_29398 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29470_29538 = state_29416__$1;
(statearr_29470_29538[(2)] = inst_29398);

(statearr_29470_29538[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (19))){
var inst_29315 = (state_29416[(7)]);
var inst_29319 = cljs.core.chunk_first.call(null,inst_29315);
var inst_29320 = cljs.core.chunk_rest.call(null,inst_29315);
var inst_29321 = cljs.core.count.call(null,inst_29319);
var inst_29293 = inst_29320;
var inst_29294 = inst_29319;
var inst_29295 = inst_29321;
var inst_29296 = (0);
var state_29416__$1 = (function (){var statearr_29471 = state_29416;
(statearr_29471[(14)] = inst_29294);

(statearr_29471[(15)] = inst_29296);

(statearr_29471[(16)] = inst_29295);

(statearr_29471[(17)] = inst_29293);

return statearr_29471;
})();
var statearr_29472_29539 = state_29416__$1;
(statearr_29472_29539[(2)] = null);

(statearr_29472_29539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (11))){
var inst_29293 = (state_29416[(17)]);
var inst_29315 = (state_29416[(7)]);
var inst_29315__$1 = cljs.core.seq.call(null,inst_29293);
var state_29416__$1 = (function (){var statearr_29473 = state_29416;
(statearr_29473[(7)] = inst_29315__$1);

return statearr_29473;
})();
if(inst_29315__$1){
var statearr_29474_29540 = state_29416__$1;
(statearr_29474_29540[(1)] = (16));

} else {
var statearr_29475_29541 = state_29416__$1;
(statearr_29475_29541[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (9))){
var inst_29345 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29476_29542 = state_29416__$1;
(statearr_29476_29542[(2)] = inst_29345);

(statearr_29476_29542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (5))){
var inst_29291 = cljs.core.deref.call(null,cs);
var inst_29292 = cljs.core.seq.call(null,inst_29291);
var inst_29293 = inst_29292;
var inst_29294 = null;
var inst_29295 = (0);
var inst_29296 = (0);
var state_29416__$1 = (function (){var statearr_29477 = state_29416;
(statearr_29477[(14)] = inst_29294);

(statearr_29477[(15)] = inst_29296);

(statearr_29477[(16)] = inst_29295);

(statearr_29477[(17)] = inst_29293);

return statearr_29477;
})();
var statearr_29478_29543 = state_29416__$1;
(statearr_29478_29543[(2)] = null);

(statearr_29478_29543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (14))){
var state_29416__$1 = state_29416;
var statearr_29479_29544 = state_29416__$1;
(statearr_29479_29544[(2)] = null);

(statearr_29479_29544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (45))){
var inst_29406 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29480_29545 = state_29416__$1;
(statearr_29480_29545[(2)] = inst_29406);

(statearr_29480_29545[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (26))){
var inst_29348 = (state_29416[(29)]);
var inst_29402 = (state_29416[(2)]);
var inst_29403 = cljs.core.seq.call(null,inst_29348);
var state_29416__$1 = (function (){var statearr_29481 = state_29416;
(statearr_29481[(31)] = inst_29402);

return statearr_29481;
})();
if(inst_29403){
var statearr_29482_29546 = state_29416__$1;
(statearr_29482_29546[(1)] = (42));

} else {
var statearr_29483_29547 = state_29416__$1;
(statearr_29483_29547[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (16))){
var inst_29315 = (state_29416[(7)]);
var inst_29317 = cljs.core.chunked_seq_QMARK_.call(null,inst_29315);
var state_29416__$1 = state_29416;
if(inst_29317){
var statearr_29484_29548 = state_29416__$1;
(statearr_29484_29548[(1)] = (19));

} else {
var statearr_29485_29549 = state_29416__$1;
(statearr_29485_29549[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (38))){
var inst_29395 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29486_29550 = state_29416__$1;
(statearr_29486_29550[(2)] = inst_29395);

(statearr_29486_29550[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (30))){
var state_29416__$1 = state_29416;
var statearr_29487_29551 = state_29416__$1;
(statearr_29487_29551[(2)] = null);

(statearr_29487_29551[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (10))){
var inst_29294 = (state_29416[(14)]);
var inst_29296 = (state_29416[(15)]);
var inst_29304 = cljs.core._nth.call(null,inst_29294,inst_29296);
var inst_29305 = cljs.core.nth.call(null,inst_29304,(0),null);
var inst_29306 = cljs.core.nth.call(null,inst_29304,(1),null);
var state_29416__$1 = (function (){var statearr_29488 = state_29416;
(statearr_29488[(26)] = inst_29305);

return statearr_29488;
})();
if(cljs.core.truth_(inst_29306)){
var statearr_29489_29552 = state_29416__$1;
(statearr_29489_29552[(1)] = (13));

} else {
var statearr_29490_29553 = state_29416__$1;
(statearr_29490_29553[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (18))){
var inst_29341 = (state_29416[(2)]);
var state_29416__$1 = state_29416;
var statearr_29491_29554 = state_29416__$1;
(statearr_29491_29554[(2)] = inst_29341);

(statearr_29491_29554[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (42))){
var state_29416__$1 = state_29416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29416__$1,(45),dchan);
} else {
if((state_val_29417 === (37))){
var inst_29375 = (state_29416[(25)]);
var inst_29284 = (state_29416[(10)]);
var inst_29384 = (state_29416[(23)]);
var inst_29384__$1 = cljs.core.first.call(null,inst_29375);
var inst_29385 = cljs.core.async.put_BANG_.call(null,inst_29384__$1,inst_29284,done);
var state_29416__$1 = (function (){var statearr_29492 = state_29416;
(statearr_29492[(23)] = inst_29384__$1);

return statearr_29492;
})();
if(cljs.core.truth_(inst_29385)){
var statearr_29493_29555 = state_29416__$1;
(statearr_29493_29555[(1)] = (39));

} else {
var statearr_29494_29556 = state_29416__$1;
(statearr_29494_29556[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29417 === (8))){
var inst_29296 = (state_29416[(15)]);
var inst_29295 = (state_29416[(16)]);
var inst_29298 = (inst_29296 < inst_29295);
var inst_29299 = inst_29298;
var state_29416__$1 = state_29416;
if(cljs.core.truth_(inst_29299)){
var statearr_29495_29557 = state_29416__$1;
(statearr_29495_29557[(1)] = (10));

} else {
var statearr_29496_29558 = state_29416__$1;
(statearr_29496_29558[(1)] = (11));

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
});})(c__28151__auto___29504,cs,m,dchan,dctr,done))
;
return ((function (switch__28039__auto__,c__28151__auto___29504,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28040__auto__ = null;
var cljs$core$async$mult_$_state_machine__28040__auto____0 = (function (){
var statearr_29500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29500[(0)] = cljs$core$async$mult_$_state_machine__28040__auto__);

(statearr_29500[(1)] = (1));

return statearr_29500;
});
var cljs$core$async$mult_$_state_machine__28040__auto____1 = (function (state_29416){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_29416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e29501){if((e29501 instanceof Object)){
var ex__28043__auto__ = e29501;
var statearr_29502_29559 = state_29416;
(statearr_29502_29559[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29560 = state_29416;
state_29416 = G__29560;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28040__auto__ = function(state_29416){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28040__auto____1.call(this,state_29416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28040__auto____0;
cljs$core$async$mult_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28040__auto____1;
return cljs$core$async$mult_$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___29504,cs,m,dchan,dctr,done))
})();
var state__28153__auto__ = (function (){var statearr_29503 = f__28152__auto__.call(null);
(statearr_29503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___29504);

return statearr_29503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___29504,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29561 = [];
var len__27054__auto___29564 = arguments.length;
var i__27055__auto___29565 = (0);
while(true){
if((i__27055__auto___29565 < len__27054__auto___29564)){
args29561.push((arguments[i__27055__auto___29565]));

var G__29566 = (i__27055__auto___29565 + (1));
i__27055__auto___29565 = G__29566;
continue;
} else {
}
break;
}

var G__29563 = args29561.length;
switch (G__29563) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29561.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m);
} else {
var m__26643__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,state_map);
} else {
var m__26643__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26642__auto__ = (((m == null))?null:m);
var m__26643__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,m,mode);
} else {
var m__26643__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___29578 = arguments.length;
var i__27055__auto___29579 = (0);
while(true){
if((i__27055__auto___29579 < len__27054__auto___29578)){
args__27061__auto__.push((arguments[i__27055__auto___29579]));

var G__29580 = (i__27055__auto___29579 + (1));
i__27055__auto___29579 = G__29580;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29572){
var map__29573 = p__29572;
var map__29573__$1 = ((((!((map__29573 == null)))?((((map__29573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29573):map__29573);
var opts = map__29573__$1;
var statearr_29575_29581 = state;
(statearr_29575_29581[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__29573,map__29573__$1,opts){
return (function (val){
var statearr_29576_29582 = state;
(statearr_29576_29582[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29573,map__29573__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_29577_29583 = state;
(statearr_29577_29583[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29568){
var G__29569 = cljs.core.first.call(null,seq29568);
var seq29568__$1 = cljs.core.next.call(null,seq29568);
var G__29570 = cljs.core.first.call(null,seq29568__$1);
var seq29568__$2 = cljs.core.next.call(null,seq29568__$1);
var G__29571 = cljs.core.first.call(null,seq29568__$2);
var seq29568__$3 = cljs.core.next.call(null,seq29568__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29569,G__29570,G__29571,seq29568__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29749 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29750){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29750 = meta29750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29751,meta29750__$1){
var self__ = this;
var _29751__$1 = this;
return (new cljs.core.async.t_cljs$core$async29749(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29750__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29751){
var self__ = this;
var _29751__$1 = this;
return self__.meta29750;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29750","meta29750",-1129722667,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29749.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29749";

cljs.core.async.t_cljs$core$async29749.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29749");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29749 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29749(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29750){
return (new cljs.core.async.t_cljs$core$async29749(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29750));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29749(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28151__auto___29914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___29914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___29914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29851){
var state_val_29852 = (state_29851[(1)]);
if((state_val_29852 === (7))){
var inst_29767 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
var statearr_29853_29915 = state_29851__$1;
(statearr_29853_29915[(2)] = inst_29767);

(statearr_29853_29915[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (20))){
var inst_29779 = (state_29851[(7)]);
var state_29851__$1 = state_29851;
var statearr_29854_29916 = state_29851__$1;
(statearr_29854_29916[(2)] = inst_29779);

(statearr_29854_29916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (27))){
var state_29851__$1 = state_29851;
var statearr_29855_29917 = state_29851__$1;
(statearr_29855_29917[(2)] = null);

(statearr_29855_29917[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (1))){
var inst_29755 = (state_29851[(8)]);
var inst_29755__$1 = calc_state.call(null);
var inst_29757 = (inst_29755__$1 == null);
var inst_29758 = cljs.core.not.call(null,inst_29757);
var state_29851__$1 = (function (){var statearr_29856 = state_29851;
(statearr_29856[(8)] = inst_29755__$1);

return statearr_29856;
})();
if(inst_29758){
var statearr_29857_29918 = state_29851__$1;
(statearr_29857_29918[(1)] = (2));

} else {
var statearr_29858_29919 = state_29851__$1;
(statearr_29858_29919[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (24))){
var inst_29825 = (state_29851[(9)]);
var inst_29802 = (state_29851[(10)]);
var inst_29811 = (state_29851[(11)]);
var inst_29825__$1 = inst_29802.call(null,inst_29811);
var state_29851__$1 = (function (){var statearr_29859 = state_29851;
(statearr_29859[(9)] = inst_29825__$1);

return statearr_29859;
})();
if(cljs.core.truth_(inst_29825__$1)){
var statearr_29860_29920 = state_29851__$1;
(statearr_29860_29920[(1)] = (29));

} else {
var statearr_29861_29921 = state_29851__$1;
(statearr_29861_29921[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (4))){
var inst_29770 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
if(cljs.core.truth_(inst_29770)){
var statearr_29862_29922 = state_29851__$1;
(statearr_29862_29922[(1)] = (8));

} else {
var statearr_29863_29923 = state_29851__$1;
(statearr_29863_29923[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (15))){
var inst_29796 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
if(cljs.core.truth_(inst_29796)){
var statearr_29864_29924 = state_29851__$1;
(statearr_29864_29924[(1)] = (19));

} else {
var statearr_29865_29925 = state_29851__$1;
(statearr_29865_29925[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (21))){
var inst_29801 = (state_29851[(12)]);
var inst_29801__$1 = (state_29851[(2)]);
var inst_29802 = cljs.core.get.call(null,inst_29801__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29803 = cljs.core.get.call(null,inst_29801__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29804 = cljs.core.get.call(null,inst_29801__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29851__$1 = (function (){var statearr_29866 = state_29851;
(statearr_29866[(12)] = inst_29801__$1);

(statearr_29866[(13)] = inst_29803);

(statearr_29866[(10)] = inst_29802);

return statearr_29866;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29851__$1,(22),inst_29804);
} else {
if((state_val_29852 === (31))){
var inst_29833 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
if(cljs.core.truth_(inst_29833)){
var statearr_29867_29926 = state_29851__$1;
(statearr_29867_29926[(1)] = (32));

} else {
var statearr_29868_29927 = state_29851__$1;
(statearr_29868_29927[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (32))){
var inst_29810 = (state_29851[(14)]);
var state_29851__$1 = state_29851;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29851__$1,(35),out,inst_29810);
} else {
if((state_val_29852 === (33))){
var inst_29801 = (state_29851[(12)]);
var inst_29779 = inst_29801;
var state_29851__$1 = (function (){var statearr_29869 = state_29851;
(statearr_29869[(7)] = inst_29779);

return statearr_29869;
})();
var statearr_29870_29928 = state_29851__$1;
(statearr_29870_29928[(2)] = null);

(statearr_29870_29928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (13))){
var inst_29779 = (state_29851[(7)]);
var inst_29786 = inst_29779.cljs$lang$protocol_mask$partition0$;
var inst_29787 = (inst_29786 & (64));
var inst_29788 = inst_29779.cljs$core$ISeq$;
var inst_29789 = (inst_29787) || (inst_29788);
var state_29851__$1 = state_29851;
if(cljs.core.truth_(inst_29789)){
var statearr_29871_29929 = state_29851__$1;
(statearr_29871_29929[(1)] = (16));

} else {
var statearr_29872_29930 = state_29851__$1;
(statearr_29872_29930[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (22))){
var inst_29810 = (state_29851[(14)]);
var inst_29811 = (state_29851[(11)]);
var inst_29809 = (state_29851[(2)]);
var inst_29810__$1 = cljs.core.nth.call(null,inst_29809,(0),null);
var inst_29811__$1 = cljs.core.nth.call(null,inst_29809,(1),null);
var inst_29812 = (inst_29810__$1 == null);
var inst_29813 = cljs.core._EQ_.call(null,inst_29811__$1,change);
var inst_29814 = (inst_29812) || (inst_29813);
var state_29851__$1 = (function (){var statearr_29873 = state_29851;
(statearr_29873[(14)] = inst_29810__$1);

(statearr_29873[(11)] = inst_29811__$1);

return statearr_29873;
})();
if(cljs.core.truth_(inst_29814)){
var statearr_29874_29931 = state_29851__$1;
(statearr_29874_29931[(1)] = (23));

} else {
var statearr_29875_29932 = state_29851__$1;
(statearr_29875_29932[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (36))){
var inst_29801 = (state_29851[(12)]);
var inst_29779 = inst_29801;
var state_29851__$1 = (function (){var statearr_29876 = state_29851;
(statearr_29876[(7)] = inst_29779);

return statearr_29876;
})();
var statearr_29877_29933 = state_29851__$1;
(statearr_29877_29933[(2)] = null);

(statearr_29877_29933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (29))){
var inst_29825 = (state_29851[(9)]);
var state_29851__$1 = state_29851;
var statearr_29878_29934 = state_29851__$1;
(statearr_29878_29934[(2)] = inst_29825);

(statearr_29878_29934[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (6))){
var state_29851__$1 = state_29851;
var statearr_29879_29935 = state_29851__$1;
(statearr_29879_29935[(2)] = false);

(statearr_29879_29935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (28))){
var inst_29821 = (state_29851[(2)]);
var inst_29822 = calc_state.call(null);
var inst_29779 = inst_29822;
var state_29851__$1 = (function (){var statearr_29880 = state_29851;
(statearr_29880[(15)] = inst_29821);

(statearr_29880[(7)] = inst_29779);

return statearr_29880;
})();
var statearr_29881_29936 = state_29851__$1;
(statearr_29881_29936[(2)] = null);

(statearr_29881_29936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (25))){
var inst_29847 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
var statearr_29882_29937 = state_29851__$1;
(statearr_29882_29937[(2)] = inst_29847);

(statearr_29882_29937[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (34))){
var inst_29845 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
var statearr_29883_29938 = state_29851__$1;
(statearr_29883_29938[(2)] = inst_29845);

(statearr_29883_29938[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (17))){
var state_29851__$1 = state_29851;
var statearr_29884_29939 = state_29851__$1;
(statearr_29884_29939[(2)] = false);

(statearr_29884_29939[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (3))){
var state_29851__$1 = state_29851;
var statearr_29885_29940 = state_29851__$1;
(statearr_29885_29940[(2)] = false);

(statearr_29885_29940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (12))){
var inst_29849 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29851__$1,inst_29849);
} else {
if((state_val_29852 === (2))){
var inst_29755 = (state_29851[(8)]);
var inst_29760 = inst_29755.cljs$lang$protocol_mask$partition0$;
var inst_29761 = (inst_29760 & (64));
var inst_29762 = inst_29755.cljs$core$ISeq$;
var inst_29763 = (inst_29761) || (inst_29762);
var state_29851__$1 = state_29851;
if(cljs.core.truth_(inst_29763)){
var statearr_29886_29941 = state_29851__$1;
(statearr_29886_29941[(1)] = (5));

} else {
var statearr_29887_29942 = state_29851__$1;
(statearr_29887_29942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (23))){
var inst_29810 = (state_29851[(14)]);
var inst_29816 = (inst_29810 == null);
var state_29851__$1 = state_29851;
if(cljs.core.truth_(inst_29816)){
var statearr_29888_29943 = state_29851__$1;
(statearr_29888_29943[(1)] = (26));

} else {
var statearr_29889_29944 = state_29851__$1;
(statearr_29889_29944[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (35))){
var inst_29836 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
if(cljs.core.truth_(inst_29836)){
var statearr_29890_29945 = state_29851__$1;
(statearr_29890_29945[(1)] = (36));

} else {
var statearr_29891_29946 = state_29851__$1;
(statearr_29891_29946[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (19))){
var inst_29779 = (state_29851[(7)]);
var inst_29798 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29779);
var state_29851__$1 = state_29851;
var statearr_29892_29947 = state_29851__$1;
(statearr_29892_29947[(2)] = inst_29798);

(statearr_29892_29947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (11))){
var inst_29779 = (state_29851[(7)]);
var inst_29783 = (inst_29779 == null);
var inst_29784 = cljs.core.not.call(null,inst_29783);
var state_29851__$1 = state_29851;
if(inst_29784){
var statearr_29893_29948 = state_29851__$1;
(statearr_29893_29948[(1)] = (13));

} else {
var statearr_29894_29949 = state_29851__$1;
(statearr_29894_29949[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (9))){
var inst_29755 = (state_29851[(8)]);
var state_29851__$1 = state_29851;
var statearr_29895_29950 = state_29851__$1;
(statearr_29895_29950[(2)] = inst_29755);

(statearr_29895_29950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (5))){
var state_29851__$1 = state_29851;
var statearr_29896_29951 = state_29851__$1;
(statearr_29896_29951[(2)] = true);

(statearr_29896_29951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (14))){
var state_29851__$1 = state_29851;
var statearr_29897_29952 = state_29851__$1;
(statearr_29897_29952[(2)] = false);

(statearr_29897_29952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (26))){
var inst_29811 = (state_29851[(11)]);
var inst_29818 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29811);
var state_29851__$1 = state_29851;
var statearr_29898_29953 = state_29851__$1;
(statearr_29898_29953[(2)] = inst_29818);

(statearr_29898_29953[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (16))){
var state_29851__$1 = state_29851;
var statearr_29899_29954 = state_29851__$1;
(statearr_29899_29954[(2)] = true);

(statearr_29899_29954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (38))){
var inst_29841 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
var statearr_29900_29955 = state_29851__$1;
(statearr_29900_29955[(2)] = inst_29841);

(statearr_29900_29955[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (30))){
var inst_29803 = (state_29851[(13)]);
var inst_29802 = (state_29851[(10)]);
var inst_29811 = (state_29851[(11)]);
var inst_29828 = cljs.core.empty_QMARK_.call(null,inst_29802);
var inst_29829 = inst_29803.call(null,inst_29811);
var inst_29830 = cljs.core.not.call(null,inst_29829);
var inst_29831 = (inst_29828) && (inst_29830);
var state_29851__$1 = state_29851;
var statearr_29901_29956 = state_29851__$1;
(statearr_29901_29956[(2)] = inst_29831);

(statearr_29901_29956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (10))){
var inst_29755 = (state_29851[(8)]);
var inst_29775 = (state_29851[(2)]);
var inst_29776 = cljs.core.get.call(null,inst_29775,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29777 = cljs.core.get.call(null,inst_29775,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29778 = cljs.core.get.call(null,inst_29775,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29779 = inst_29755;
var state_29851__$1 = (function (){var statearr_29902 = state_29851;
(statearr_29902[(7)] = inst_29779);

(statearr_29902[(16)] = inst_29778);

(statearr_29902[(17)] = inst_29777);

(statearr_29902[(18)] = inst_29776);

return statearr_29902;
})();
var statearr_29903_29957 = state_29851__$1;
(statearr_29903_29957[(2)] = null);

(statearr_29903_29957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (18))){
var inst_29793 = (state_29851[(2)]);
var state_29851__$1 = state_29851;
var statearr_29904_29958 = state_29851__$1;
(statearr_29904_29958[(2)] = inst_29793);

(statearr_29904_29958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (37))){
var state_29851__$1 = state_29851;
var statearr_29905_29959 = state_29851__$1;
(statearr_29905_29959[(2)] = null);

(statearr_29905_29959[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29852 === (8))){
var inst_29755 = (state_29851[(8)]);
var inst_29772 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29755);
var state_29851__$1 = state_29851;
var statearr_29906_29960 = state_29851__$1;
(statearr_29906_29960[(2)] = inst_29772);

(statearr_29906_29960[(1)] = (10));


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
});})(c__28151__auto___29914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28039__auto__,c__28151__auto___29914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28040__auto__ = null;
var cljs$core$async$mix_$_state_machine__28040__auto____0 = (function (){
var statearr_29910 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29910[(0)] = cljs$core$async$mix_$_state_machine__28040__auto__);

(statearr_29910[(1)] = (1));

return statearr_29910;
});
var cljs$core$async$mix_$_state_machine__28040__auto____1 = (function (state_29851){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_29851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e29911){if((e29911 instanceof Object)){
var ex__28043__auto__ = e29911;
var statearr_29912_29961 = state_29851;
(statearr_29912_29961[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29962 = state_29851;
state_29851 = G__29962;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28040__auto__ = function(state_29851){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28040__auto____1.call(this,state_29851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28040__auto____0;
cljs$core$async$mix_$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28040__auto____1;
return cljs$core$async$mix_$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___29914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28153__auto__ = (function (){var statearr_29913 = f__28152__auto__.call(null);
(statearr_29913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___29914);

return statearr_29913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___29914,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26643__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v,ch);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29963 = [];
var len__27054__auto___29966 = arguments.length;
var i__27055__auto___29967 = (0);
while(true){
if((i__27055__auto___29967 < len__27054__auto___29966)){
args29963.push((arguments[i__27055__auto___29967]));

var G__29968 = (i__27055__auto___29967 + (1));
i__27055__auto___29967 = G__29968;
continue;
} else {
}
break;
}

var G__29965 = args29963.length;
switch (G__29965) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29963.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26642__auto__ = (((p == null))?null:p);
var m__26643__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,p,v);
} else {
var m__26643__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29971 = [];
var len__27054__auto___30096 = arguments.length;
var i__27055__auto___30097 = (0);
while(true){
if((i__27055__auto___30097 < len__27054__auto___30096)){
args29971.push((arguments[i__27055__auto___30097]));

var G__30098 = (i__27055__auto___30097 + (1));
i__27055__auto___30097 = G__30098;
continue;
} else {
}
break;
}

var G__29973 = args29971.length;
switch (G__29973) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29971.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25979__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25979__auto__,mults){
return (function (p1__29970_SHARP_){
if(cljs.core.truth_(p1__29970_SHARP_.call(null,topic))){
return p1__29970_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29970_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25979__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29974 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29975){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29975 = meta29975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29976,meta29975__$1){
var self__ = this;
var _29976__$1 = this;
return (new cljs.core.async.t_cljs$core$async29974(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29975__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29976){
var self__ = this;
var _29976__$1 = this;
return self__.meta29975;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29975","meta29975",840209272,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29974.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29974.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29974";

cljs.core.async.t_cljs$core$async29974.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async29974");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29974 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29975){
return (new cljs.core.async.t_cljs$core$async29974(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29975));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29974(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28151__auto___30100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30100,mults,ensure_mult,p){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30100,mults,ensure_mult,p){
return (function (state_30048){
var state_val_30049 = (state_30048[(1)]);
if((state_val_30049 === (7))){
var inst_30044 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
var statearr_30050_30101 = state_30048__$1;
(statearr_30050_30101[(2)] = inst_30044);

(statearr_30050_30101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (20))){
var state_30048__$1 = state_30048;
var statearr_30051_30102 = state_30048__$1;
(statearr_30051_30102[(2)] = null);

(statearr_30051_30102[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (1))){
var state_30048__$1 = state_30048;
var statearr_30052_30103 = state_30048__$1;
(statearr_30052_30103[(2)] = null);

(statearr_30052_30103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (24))){
var inst_30027 = (state_30048[(7)]);
var inst_30036 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30027);
var state_30048__$1 = state_30048;
var statearr_30053_30104 = state_30048__$1;
(statearr_30053_30104[(2)] = inst_30036);

(statearr_30053_30104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (4))){
var inst_29979 = (state_30048[(8)]);
var inst_29979__$1 = (state_30048[(2)]);
var inst_29980 = (inst_29979__$1 == null);
var state_30048__$1 = (function (){var statearr_30054 = state_30048;
(statearr_30054[(8)] = inst_29979__$1);

return statearr_30054;
})();
if(cljs.core.truth_(inst_29980)){
var statearr_30055_30105 = state_30048__$1;
(statearr_30055_30105[(1)] = (5));

} else {
var statearr_30056_30106 = state_30048__$1;
(statearr_30056_30106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (15))){
var inst_30021 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
var statearr_30057_30107 = state_30048__$1;
(statearr_30057_30107[(2)] = inst_30021);

(statearr_30057_30107[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (21))){
var inst_30041 = (state_30048[(2)]);
var state_30048__$1 = (function (){var statearr_30058 = state_30048;
(statearr_30058[(9)] = inst_30041);

return statearr_30058;
})();
var statearr_30059_30108 = state_30048__$1;
(statearr_30059_30108[(2)] = null);

(statearr_30059_30108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (13))){
var inst_30003 = (state_30048[(10)]);
var inst_30005 = cljs.core.chunked_seq_QMARK_.call(null,inst_30003);
var state_30048__$1 = state_30048;
if(inst_30005){
var statearr_30060_30109 = state_30048__$1;
(statearr_30060_30109[(1)] = (16));

} else {
var statearr_30061_30110 = state_30048__$1;
(statearr_30061_30110[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (22))){
var inst_30033 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
if(cljs.core.truth_(inst_30033)){
var statearr_30062_30111 = state_30048__$1;
(statearr_30062_30111[(1)] = (23));

} else {
var statearr_30063_30112 = state_30048__$1;
(statearr_30063_30112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (6))){
var inst_29979 = (state_30048[(8)]);
var inst_30027 = (state_30048[(7)]);
var inst_30029 = (state_30048[(11)]);
var inst_30027__$1 = topic_fn.call(null,inst_29979);
var inst_30028 = cljs.core.deref.call(null,mults);
var inst_30029__$1 = cljs.core.get.call(null,inst_30028,inst_30027__$1);
var state_30048__$1 = (function (){var statearr_30064 = state_30048;
(statearr_30064[(7)] = inst_30027__$1);

(statearr_30064[(11)] = inst_30029__$1);

return statearr_30064;
})();
if(cljs.core.truth_(inst_30029__$1)){
var statearr_30065_30113 = state_30048__$1;
(statearr_30065_30113[(1)] = (19));

} else {
var statearr_30066_30114 = state_30048__$1;
(statearr_30066_30114[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (25))){
var inst_30038 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
var statearr_30067_30115 = state_30048__$1;
(statearr_30067_30115[(2)] = inst_30038);

(statearr_30067_30115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (17))){
var inst_30003 = (state_30048[(10)]);
var inst_30012 = cljs.core.first.call(null,inst_30003);
var inst_30013 = cljs.core.async.muxch_STAR_.call(null,inst_30012);
var inst_30014 = cljs.core.async.close_BANG_.call(null,inst_30013);
var inst_30015 = cljs.core.next.call(null,inst_30003);
var inst_29989 = inst_30015;
var inst_29990 = null;
var inst_29991 = (0);
var inst_29992 = (0);
var state_30048__$1 = (function (){var statearr_30068 = state_30048;
(statearr_30068[(12)] = inst_29991);

(statearr_30068[(13)] = inst_29989);

(statearr_30068[(14)] = inst_29992);

(statearr_30068[(15)] = inst_30014);

(statearr_30068[(16)] = inst_29990);

return statearr_30068;
})();
var statearr_30069_30116 = state_30048__$1;
(statearr_30069_30116[(2)] = null);

(statearr_30069_30116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (3))){
var inst_30046 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30048__$1,inst_30046);
} else {
if((state_val_30049 === (12))){
var inst_30023 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
var statearr_30070_30117 = state_30048__$1;
(statearr_30070_30117[(2)] = inst_30023);

(statearr_30070_30117[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (2))){
var state_30048__$1 = state_30048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30048__$1,(4),ch);
} else {
if((state_val_30049 === (23))){
var state_30048__$1 = state_30048;
var statearr_30071_30118 = state_30048__$1;
(statearr_30071_30118[(2)] = null);

(statearr_30071_30118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (19))){
var inst_29979 = (state_30048[(8)]);
var inst_30029 = (state_30048[(11)]);
var inst_30031 = cljs.core.async.muxch_STAR_.call(null,inst_30029);
var state_30048__$1 = state_30048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30048__$1,(22),inst_30031,inst_29979);
} else {
if((state_val_30049 === (11))){
var inst_29989 = (state_30048[(13)]);
var inst_30003 = (state_30048[(10)]);
var inst_30003__$1 = cljs.core.seq.call(null,inst_29989);
var state_30048__$1 = (function (){var statearr_30072 = state_30048;
(statearr_30072[(10)] = inst_30003__$1);

return statearr_30072;
})();
if(inst_30003__$1){
var statearr_30073_30119 = state_30048__$1;
(statearr_30073_30119[(1)] = (13));

} else {
var statearr_30074_30120 = state_30048__$1;
(statearr_30074_30120[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (9))){
var inst_30025 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
var statearr_30075_30121 = state_30048__$1;
(statearr_30075_30121[(2)] = inst_30025);

(statearr_30075_30121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (5))){
var inst_29986 = cljs.core.deref.call(null,mults);
var inst_29987 = cljs.core.vals.call(null,inst_29986);
var inst_29988 = cljs.core.seq.call(null,inst_29987);
var inst_29989 = inst_29988;
var inst_29990 = null;
var inst_29991 = (0);
var inst_29992 = (0);
var state_30048__$1 = (function (){var statearr_30076 = state_30048;
(statearr_30076[(12)] = inst_29991);

(statearr_30076[(13)] = inst_29989);

(statearr_30076[(14)] = inst_29992);

(statearr_30076[(16)] = inst_29990);

return statearr_30076;
})();
var statearr_30077_30122 = state_30048__$1;
(statearr_30077_30122[(2)] = null);

(statearr_30077_30122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (14))){
var state_30048__$1 = state_30048;
var statearr_30081_30123 = state_30048__$1;
(statearr_30081_30123[(2)] = null);

(statearr_30081_30123[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (16))){
var inst_30003 = (state_30048[(10)]);
var inst_30007 = cljs.core.chunk_first.call(null,inst_30003);
var inst_30008 = cljs.core.chunk_rest.call(null,inst_30003);
var inst_30009 = cljs.core.count.call(null,inst_30007);
var inst_29989 = inst_30008;
var inst_29990 = inst_30007;
var inst_29991 = inst_30009;
var inst_29992 = (0);
var state_30048__$1 = (function (){var statearr_30082 = state_30048;
(statearr_30082[(12)] = inst_29991);

(statearr_30082[(13)] = inst_29989);

(statearr_30082[(14)] = inst_29992);

(statearr_30082[(16)] = inst_29990);

return statearr_30082;
})();
var statearr_30083_30124 = state_30048__$1;
(statearr_30083_30124[(2)] = null);

(statearr_30083_30124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (10))){
var inst_29991 = (state_30048[(12)]);
var inst_29989 = (state_30048[(13)]);
var inst_29992 = (state_30048[(14)]);
var inst_29990 = (state_30048[(16)]);
var inst_29997 = cljs.core._nth.call(null,inst_29990,inst_29992);
var inst_29998 = cljs.core.async.muxch_STAR_.call(null,inst_29997);
var inst_29999 = cljs.core.async.close_BANG_.call(null,inst_29998);
var inst_30000 = (inst_29992 + (1));
var tmp30078 = inst_29991;
var tmp30079 = inst_29989;
var tmp30080 = inst_29990;
var inst_29989__$1 = tmp30079;
var inst_29990__$1 = tmp30080;
var inst_29991__$1 = tmp30078;
var inst_29992__$1 = inst_30000;
var state_30048__$1 = (function (){var statearr_30084 = state_30048;
(statearr_30084[(12)] = inst_29991__$1);

(statearr_30084[(13)] = inst_29989__$1);

(statearr_30084[(14)] = inst_29992__$1);

(statearr_30084[(17)] = inst_29999);

(statearr_30084[(16)] = inst_29990__$1);

return statearr_30084;
})();
var statearr_30085_30125 = state_30048__$1;
(statearr_30085_30125[(2)] = null);

(statearr_30085_30125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (18))){
var inst_30018 = (state_30048[(2)]);
var state_30048__$1 = state_30048;
var statearr_30086_30126 = state_30048__$1;
(statearr_30086_30126[(2)] = inst_30018);

(statearr_30086_30126[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30049 === (8))){
var inst_29991 = (state_30048[(12)]);
var inst_29992 = (state_30048[(14)]);
var inst_29994 = (inst_29992 < inst_29991);
var inst_29995 = inst_29994;
var state_30048__$1 = state_30048;
if(cljs.core.truth_(inst_29995)){
var statearr_30087_30127 = state_30048__$1;
(statearr_30087_30127[(1)] = (10));

} else {
var statearr_30088_30128 = state_30048__$1;
(statearr_30088_30128[(1)] = (11));

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
});})(c__28151__auto___30100,mults,ensure_mult,p))
;
return ((function (switch__28039__auto__,c__28151__auto___30100,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30092[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30092[(1)] = (1));

return statearr_30092;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30048){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30093){if((e30093 instanceof Object)){
var ex__28043__auto__ = e30093;
var statearr_30094_30129 = state_30048;
(statearr_30094_30129[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30130 = state_30048;
state_30048 = G__30130;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30100,mults,ensure_mult,p))
})();
var state__28153__auto__ = (function (){var statearr_30095 = f__28152__auto__.call(null);
(statearr_30095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30100);

return statearr_30095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30100,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args30131 = [];
var len__27054__auto___30134 = arguments.length;
var i__27055__auto___30135 = (0);
while(true){
if((i__27055__auto___30135 < len__27054__auto___30134)){
args30131.push((arguments[i__27055__auto___30135]));

var G__30136 = (i__27055__auto___30135 + (1));
i__27055__auto___30135 = G__30136;
continue;
} else {
}
break;
}

var G__30133 = args30131.length;
switch (G__30133) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30131.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args30138 = [];
var len__27054__auto___30141 = arguments.length;
var i__27055__auto___30142 = (0);
while(true){
if((i__27055__auto___30142 < len__27054__auto___30141)){
args30138.push((arguments[i__27055__auto___30142]));

var G__30143 = (i__27055__auto___30142 + (1));
i__27055__auto___30142 = G__30143;
continue;
} else {
}
break;
}

var G__30140 = args30138.length;
switch (G__30140) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30138.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args30145 = [];
var len__27054__auto___30216 = arguments.length;
var i__27055__auto___30217 = (0);
while(true){
if((i__27055__auto___30217 < len__27054__auto___30216)){
args30145.push((arguments[i__27055__auto___30217]));

var G__30218 = (i__27055__auto___30217 + (1));
i__27055__auto___30217 = G__30218;
continue;
} else {
}
break;
}

var G__30147 = args30145.length;
switch (G__30147) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30145.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28151__auto___30220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30220,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30220,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_30186){
var state_val_30187 = (state_30186[(1)]);
if((state_val_30187 === (7))){
var state_30186__$1 = state_30186;
var statearr_30188_30221 = state_30186__$1;
(statearr_30188_30221[(2)] = null);

(statearr_30188_30221[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (1))){
var state_30186__$1 = state_30186;
var statearr_30189_30222 = state_30186__$1;
(statearr_30189_30222[(2)] = null);

(statearr_30189_30222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (4))){
var inst_30150 = (state_30186[(7)]);
var inst_30152 = (inst_30150 < cnt);
var state_30186__$1 = state_30186;
if(cljs.core.truth_(inst_30152)){
var statearr_30190_30223 = state_30186__$1;
(statearr_30190_30223[(1)] = (6));

} else {
var statearr_30191_30224 = state_30186__$1;
(statearr_30191_30224[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (15))){
var inst_30182 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
var statearr_30192_30225 = state_30186__$1;
(statearr_30192_30225[(2)] = inst_30182);

(statearr_30192_30225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (13))){
var inst_30175 = cljs.core.async.close_BANG_.call(null,out);
var state_30186__$1 = state_30186;
var statearr_30193_30226 = state_30186__$1;
(statearr_30193_30226[(2)] = inst_30175);

(statearr_30193_30226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (6))){
var state_30186__$1 = state_30186;
var statearr_30194_30227 = state_30186__$1;
(statearr_30194_30227[(2)] = null);

(statearr_30194_30227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (3))){
var inst_30184 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30186__$1,inst_30184);
} else {
if((state_val_30187 === (12))){
var inst_30172 = (state_30186[(8)]);
var inst_30172__$1 = (state_30186[(2)]);
var inst_30173 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_30172__$1);
var state_30186__$1 = (function (){var statearr_30195 = state_30186;
(statearr_30195[(8)] = inst_30172__$1);

return statearr_30195;
})();
if(cljs.core.truth_(inst_30173)){
var statearr_30196_30228 = state_30186__$1;
(statearr_30196_30228[(1)] = (13));

} else {
var statearr_30197_30229 = state_30186__$1;
(statearr_30197_30229[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (2))){
var inst_30149 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_30150 = (0);
var state_30186__$1 = (function (){var statearr_30198 = state_30186;
(statearr_30198[(7)] = inst_30150);

(statearr_30198[(9)] = inst_30149);

return statearr_30198;
})();
var statearr_30199_30230 = state_30186__$1;
(statearr_30199_30230[(2)] = null);

(statearr_30199_30230[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (11))){
var inst_30150 = (state_30186[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30186,(10),Object,null,(9));
var inst_30159 = chs__$1.call(null,inst_30150);
var inst_30160 = done.call(null,inst_30150);
var inst_30161 = cljs.core.async.take_BANG_.call(null,inst_30159,inst_30160);
var state_30186__$1 = state_30186;
var statearr_30200_30231 = state_30186__$1;
(statearr_30200_30231[(2)] = inst_30161);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30186__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (9))){
var inst_30150 = (state_30186[(7)]);
var inst_30163 = (state_30186[(2)]);
var inst_30164 = (inst_30150 + (1));
var inst_30150__$1 = inst_30164;
var state_30186__$1 = (function (){var statearr_30201 = state_30186;
(statearr_30201[(7)] = inst_30150__$1);

(statearr_30201[(10)] = inst_30163);

return statearr_30201;
})();
var statearr_30202_30232 = state_30186__$1;
(statearr_30202_30232[(2)] = null);

(statearr_30202_30232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (5))){
var inst_30170 = (state_30186[(2)]);
var state_30186__$1 = (function (){var statearr_30203 = state_30186;
(statearr_30203[(11)] = inst_30170);

return statearr_30203;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30186__$1,(12),dchan);
} else {
if((state_val_30187 === (14))){
var inst_30172 = (state_30186[(8)]);
var inst_30177 = cljs.core.apply.call(null,f,inst_30172);
var state_30186__$1 = state_30186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30186__$1,(16),out,inst_30177);
} else {
if((state_val_30187 === (16))){
var inst_30179 = (state_30186[(2)]);
var state_30186__$1 = (function (){var statearr_30204 = state_30186;
(statearr_30204[(12)] = inst_30179);

return statearr_30204;
})();
var statearr_30205_30233 = state_30186__$1;
(statearr_30205_30233[(2)] = null);

(statearr_30205_30233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (10))){
var inst_30154 = (state_30186[(2)]);
var inst_30155 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_30186__$1 = (function (){var statearr_30206 = state_30186;
(statearr_30206[(13)] = inst_30154);

return statearr_30206;
})();
var statearr_30207_30234 = state_30186__$1;
(statearr_30207_30234[(2)] = inst_30155);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30186__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30187 === (8))){
var inst_30168 = (state_30186[(2)]);
var state_30186__$1 = state_30186;
var statearr_30208_30235 = state_30186__$1;
(statearr_30208_30235[(2)] = inst_30168);

(statearr_30208_30235[(1)] = (5));


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
});})(c__28151__auto___30220,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28039__auto__,c__28151__auto___30220,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30212[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30212[(1)] = (1));

return statearr_30212;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30186){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30213){if((e30213 instanceof Object)){
var ex__28043__auto__ = e30213;
var statearr_30214_30236 = state_30186;
(statearr_30214_30236[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30213;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30237 = state_30186;
state_30186 = G__30237;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30186){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30220,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28153__auto__ = (function (){var statearr_30215 = f__28152__auto__.call(null);
(statearr_30215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30220);

return statearr_30215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30220,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args30239 = [];
var len__27054__auto___30297 = arguments.length;
var i__27055__auto___30298 = (0);
while(true){
if((i__27055__auto___30298 < len__27054__auto___30297)){
args30239.push((arguments[i__27055__auto___30298]));

var G__30299 = (i__27055__auto___30298 + (1));
i__27055__auto___30298 = G__30299;
continue;
} else {
}
break;
}

var G__30241 = args30239.length;
switch (G__30241) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30239.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___30301 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30301,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30301,out){
return (function (state_30273){
var state_val_30274 = (state_30273[(1)]);
if((state_val_30274 === (7))){
var inst_30253 = (state_30273[(7)]);
var inst_30252 = (state_30273[(8)]);
var inst_30252__$1 = (state_30273[(2)]);
var inst_30253__$1 = cljs.core.nth.call(null,inst_30252__$1,(0),null);
var inst_30254 = cljs.core.nth.call(null,inst_30252__$1,(1),null);
var inst_30255 = (inst_30253__$1 == null);
var state_30273__$1 = (function (){var statearr_30275 = state_30273;
(statearr_30275[(7)] = inst_30253__$1);

(statearr_30275[(8)] = inst_30252__$1);

(statearr_30275[(9)] = inst_30254);

return statearr_30275;
})();
if(cljs.core.truth_(inst_30255)){
var statearr_30276_30302 = state_30273__$1;
(statearr_30276_30302[(1)] = (8));

} else {
var statearr_30277_30303 = state_30273__$1;
(statearr_30277_30303[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (1))){
var inst_30242 = cljs.core.vec.call(null,chs);
var inst_30243 = inst_30242;
var state_30273__$1 = (function (){var statearr_30278 = state_30273;
(statearr_30278[(10)] = inst_30243);

return statearr_30278;
})();
var statearr_30279_30304 = state_30273__$1;
(statearr_30279_30304[(2)] = null);

(statearr_30279_30304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (4))){
var inst_30243 = (state_30273[(10)]);
var state_30273__$1 = state_30273;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30273__$1,(7),inst_30243);
} else {
if((state_val_30274 === (6))){
var inst_30269 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30280_30305 = state_30273__$1;
(statearr_30280_30305[(2)] = inst_30269);

(statearr_30280_30305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (3))){
var inst_30271 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30273__$1,inst_30271);
} else {
if((state_val_30274 === (2))){
var inst_30243 = (state_30273[(10)]);
var inst_30245 = cljs.core.count.call(null,inst_30243);
var inst_30246 = (inst_30245 > (0));
var state_30273__$1 = state_30273;
if(cljs.core.truth_(inst_30246)){
var statearr_30282_30306 = state_30273__$1;
(statearr_30282_30306[(1)] = (4));

} else {
var statearr_30283_30307 = state_30273__$1;
(statearr_30283_30307[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (11))){
var inst_30243 = (state_30273[(10)]);
var inst_30262 = (state_30273[(2)]);
var tmp30281 = inst_30243;
var inst_30243__$1 = tmp30281;
var state_30273__$1 = (function (){var statearr_30284 = state_30273;
(statearr_30284[(10)] = inst_30243__$1);

(statearr_30284[(11)] = inst_30262);

return statearr_30284;
})();
var statearr_30285_30308 = state_30273__$1;
(statearr_30285_30308[(2)] = null);

(statearr_30285_30308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (9))){
var inst_30253 = (state_30273[(7)]);
var state_30273__$1 = state_30273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30273__$1,(11),out,inst_30253);
} else {
if((state_val_30274 === (5))){
var inst_30267 = cljs.core.async.close_BANG_.call(null,out);
var state_30273__$1 = state_30273;
var statearr_30286_30309 = state_30273__$1;
(statearr_30286_30309[(2)] = inst_30267);

(statearr_30286_30309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (10))){
var inst_30265 = (state_30273[(2)]);
var state_30273__$1 = state_30273;
var statearr_30287_30310 = state_30273__$1;
(statearr_30287_30310[(2)] = inst_30265);

(statearr_30287_30310[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30274 === (8))){
var inst_30243 = (state_30273[(10)]);
var inst_30253 = (state_30273[(7)]);
var inst_30252 = (state_30273[(8)]);
var inst_30254 = (state_30273[(9)]);
var inst_30257 = (function (){var cs = inst_30243;
var vec__30248 = inst_30252;
var v = inst_30253;
var c = inst_30254;
return ((function (cs,vec__30248,v,c,inst_30243,inst_30253,inst_30252,inst_30254,state_val_30274,c__28151__auto___30301,out){
return (function (p1__30238_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__30238_SHARP_);
});
;})(cs,vec__30248,v,c,inst_30243,inst_30253,inst_30252,inst_30254,state_val_30274,c__28151__auto___30301,out))
})();
var inst_30258 = cljs.core.filterv.call(null,inst_30257,inst_30243);
var inst_30243__$1 = inst_30258;
var state_30273__$1 = (function (){var statearr_30288 = state_30273;
(statearr_30288[(10)] = inst_30243__$1);

return statearr_30288;
})();
var statearr_30289_30311 = state_30273__$1;
(statearr_30289_30311[(2)] = null);

(statearr_30289_30311[(1)] = (2));


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
});})(c__28151__auto___30301,out))
;
return ((function (switch__28039__auto__,c__28151__auto___30301,out){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30293 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30293[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30293[(1)] = (1));

return statearr_30293;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30273){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30294){if((e30294 instanceof Object)){
var ex__28043__auto__ = e30294;
var statearr_30295_30312 = state_30273;
(statearr_30295_30312[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30313 = state_30273;
state_30273 = G__30313;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30301,out))
})();
var state__28153__auto__ = (function (){var statearr_30296 = f__28152__auto__.call(null);
(statearr_30296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30301);

return statearr_30296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30301,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args30314 = [];
var len__27054__auto___30363 = arguments.length;
var i__27055__auto___30364 = (0);
while(true){
if((i__27055__auto___30364 < len__27054__auto___30363)){
args30314.push((arguments[i__27055__auto___30364]));

var G__30365 = (i__27055__auto___30364 + (1));
i__27055__auto___30364 = G__30365;
continue;
} else {
}
break;
}

var G__30316 = args30314.length;
switch (G__30316) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30314.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___30367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30367,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30367,out){
return (function (state_30340){
var state_val_30341 = (state_30340[(1)]);
if((state_val_30341 === (7))){
var inst_30322 = (state_30340[(7)]);
var inst_30322__$1 = (state_30340[(2)]);
var inst_30323 = (inst_30322__$1 == null);
var inst_30324 = cljs.core.not.call(null,inst_30323);
var state_30340__$1 = (function (){var statearr_30342 = state_30340;
(statearr_30342[(7)] = inst_30322__$1);

return statearr_30342;
})();
if(inst_30324){
var statearr_30343_30368 = state_30340__$1;
(statearr_30343_30368[(1)] = (8));

} else {
var statearr_30344_30369 = state_30340__$1;
(statearr_30344_30369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (1))){
var inst_30317 = (0);
var state_30340__$1 = (function (){var statearr_30345 = state_30340;
(statearr_30345[(8)] = inst_30317);

return statearr_30345;
})();
var statearr_30346_30370 = state_30340__$1;
(statearr_30346_30370[(2)] = null);

(statearr_30346_30370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (4))){
var state_30340__$1 = state_30340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30340__$1,(7),ch);
} else {
if((state_val_30341 === (6))){
var inst_30335 = (state_30340[(2)]);
var state_30340__$1 = state_30340;
var statearr_30347_30371 = state_30340__$1;
(statearr_30347_30371[(2)] = inst_30335);

(statearr_30347_30371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (3))){
var inst_30337 = (state_30340[(2)]);
var inst_30338 = cljs.core.async.close_BANG_.call(null,out);
var state_30340__$1 = (function (){var statearr_30348 = state_30340;
(statearr_30348[(9)] = inst_30337);

return statearr_30348;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30340__$1,inst_30338);
} else {
if((state_val_30341 === (2))){
var inst_30317 = (state_30340[(8)]);
var inst_30319 = (inst_30317 < n);
var state_30340__$1 = state_30340;
if(cljs.core.truth_(inst_30319)){
var statearr_30349_30372 = state_30340__$1;
(statearr_30349_30372[(1)] = (4));

} else {
var statearr_30350_30373 = state_30340__$1;
(statearr_30350_30373[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (11))){
var inst_30317 = (state_30340[(8)]);
var inst_30327 = (state_30340[(2)]);
var inst_30328 = (inst_30317 + (1));
var inst_30317__$1 = inst_30328;
var state_30340__$1 = (function (){var statearr_30351 = state_30340;
(statearr_30351[(10)] = inst_30327);

(statearr_30351[(8)] = inst_30317__$1);

return statearr_30351;
})();
var statearr_30352_30374 = state_30340__$1;
(statearr_30352_30374[(2)] = null);

(statearr_30352_30374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (9))){
var state_30340__$1 = state_30340;
var statearr_30353_30375 = state_30340__$1;
(statearr_30353_30375[(2)] = null);

(statearr_30353_30375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (5))){
var state_30340__$1 = state_30340;
var statearr_30354_30376 = state_30340__$1;
(statearr_30354_30376[(2)] = null);

(statearr_30354_30376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (10))){
var inst_30332 = (state_30340[(2)]);
var state_30340__$1 = state_30340;
var statearr_30355_30377 = state_30340__$1;
(statearr_30355_30377[(2)] = inst_30332);

(statearr_30355_30377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30341 === (8))){
var inst_30322 = (state_30340[(7)]);
var state_30340__$1 = state_30340;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30340__$1,(11),out,inst_30322);
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
});})(c__28151__auto___30367,out))
;
return ((function (switch__28039__auto__,c__28151__auto___30367,out){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30359 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30359[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30359[(1)] = (1));

return statearr_30359;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30340){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30360){if((e30360 instanceof Object)){
var ex__28043__auto__ = e30360;
var statearr_30361_30378 = state_30340;
(statearr_30361_30378[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30379 = state_30340;
state_30340 = G__30379;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30340){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30367,out))
})();
var state__28153__auto__ = (function (){var statearr_30362 = f__28152__auto__.call(null);
(statearr_30362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30367);

return statearr_30362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30367,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30387 = (function (map_LT_,f,ch,meta30388){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30388 = meta30388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30389,meta30388__$1){
var self__ = this;
var _30389__$1 = this;
return (new cljs.core.async.t_cljs$core$async30387(self__.map_LT_,self__.f,self__.ch,meta30388__$1));
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30389){
var self__ = this;
var _30389__$1 = this;
return self__.meta30388;
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30390 = (function (map_LT_,f,ch,meta30388,_,fn1,meta30391){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30388 = meta30388;
this._ = _;
this.fn1 = fn1;
this.meta30391 = meta30391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30392,meta30391__$1){
var self__ = this;
var _30392__$1 = this;
return (new cljs.core.async.t_cljs$core$async30390(self__.map_LT_,self__.f,self__.ch,self__.meta30388,self__._,self__.fn1,meta30391__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30392){
var self__ = this;
var _30392__$1 = this;
return self__.meta30391;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30380_SHARP_){
return f1.call(null,(((p1__30380_SHARP_ == null))?null:self__.f.call(null,p1__30380_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30390.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30388","meta30388",1717092134,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30387","cljs.core.async/t_cljs$core$async30387",41933369,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30391","meta30391",-1348870981,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30390";

cljs.core.async.t_cljs$core$async30390.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30390");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30390 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30390(map_LT___$1,f__$1,ch__$1,meta30388__$1,___$2,fn1__$1,meta30391){
return (new cljs.core.async.t_cljs$core$async30390(map_LT___$1,f__$1,ch__$1,meta30388__$1,___$2,fn1__$1,meta30391));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30390(self__.map_LT_,self__.f,self__.ch,self__.meta30388,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25967__auto__ = ret;
if(cljs.core.truth_(and__25967__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25967__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30387.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30388","meta30388",1717092134,null)], null);
});

cljs.core.async.t_cljs$core$async30387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30387";

cljs.core.async.t_cljs$core$async30387.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30387");
});

cljs.core.async.__GT_t_cljs$core$async30387 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30387(map_LT___$1,f__$1,ch__$1,meta30388){
return (new cljs.core.async.t_cljs$core$async30387(map_LT___$1,f__$1,ch__$1,meta30388));
});

}

return (new cljs.core.async.t_cljs$core$async30387(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30396 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30396 = (function (map_GT_,f,ch,meta30397){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30397 = meta30397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30398,meta30397__$1){
var self__ = this;
var _30398__$1 = this;
return (new cljs.core.async.t_cljs$core$async30396(self__.map_GT_,self__.f,self__.ch,meta30397__$1));
});

cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30398){
var self__ = this;
var _30398__$1 = this;
return self__.meta30397;
});

cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30396.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30397","meta30397",1990489876,null)], null);
});

cljs.core.async.t_cljs$core$async30396.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30396";

cljs.core.async.t_cljs$core$async30396.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30396");
});

cljs.core.async.__GT_t_cljs$core$async30396 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30396(map_GT___$1,f__$1,ch__$1,meta30397){
return (new cljs.core.async.t_cljs$core$async30396(map_GT___$1,f__$1,ch__$1,meta30397));
});

}

return (new cljs.core.async.t_cljs$core$async30396(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30402 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30402 = (function (filter_GT_,p,ch,meta30403){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30403 = meta30403;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30404,meta30403__$1){
var self__ = this;
var _30404__$1 = this;
return (new cljs.core.async.t_cljs$core$async30402(self__.filter_GT_,self__.p,self__.ch,meta30403__$1));
});

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30404){
var self__ = this;
var _30404__$1 = this;
return self__.meta30403;
});

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30402.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30402.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30403","meta30403",-1270259925,null)], null);
});

cljs.core.async.t_cljs$core$async30402.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30402.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30402";

cljs.core.async.t_cljs$core$async30402.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.core.async/t_cljs$core$async30402");
});

cljs.core.async.__GT_t_cljs$core$async30402 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30402(filter_GT___$1,p__$1,ch__$1,meta30403){
return (new cljs.core.async.t_cljs$core$async30402(filter_GT___$1,p__$1,ch__$1,meta30403));
});

}

return (new cljs.core.async.t_cljs$core$async30402(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30405 = [];
var len__27054__auto___30449 = arguments.length;
var i__27055__auto___30450 = (0);
while(true){
if((i__27055__auto___30450 < len__27054__auto___30449)){
args30405.push((arguments[i__27055__auto___30450]));

var G__30451 = (i__27055__auto___30450 + (1));
i__27055__auto___30450 = G__30451;
continue;
} else {
}
break;
}

var G__30407 = args30405.length;
switch (G__30407) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30405.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___30453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30453,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30453,out){
return (function (state_30428){
var state_val_30429 = (state_30428[(1)]);
if((state_val_30429 === (7))){
var inst_30424 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30430_30454 = state_30428__$1;
(statearr_30430_30454[(2)] = inst_30424);

(statearr_30430_30454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (1))){
var state_30428__$1 = state_30428;
var statearr_30431_30455 = state_30428__$1;
(statearr_30431_30455[(2)] = null);

(statearr_30431_30455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (4))){
var inst_30410 = (state_30428[(7)]);
var inst_30410__$1 = (state_30428[(2)]);
var inst_30411 = (inst_30410__$1 == null);
var state_30428__$1 = (function (){var statearr_30432 = state_30428;
(statearr_30432[(7)] = inst_30410__$1);

return statearr_30432;
})();
if(cljs.core.truth_(inst_30411)){
var statearr_30433_30456 = state_30428__$1;
(statearr_30433_30456[(1)] = (5));

} else {
var statearr_30434_30457 = state_30428__$1;
(statearr_30434_30457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (6))){
var inst_30410 = (state_30428[(7)]);
var inst_30415 = p.call(null,inst_30410);
var state_30428__$1 = state_30428;
if(cljs.core.truth_(inst_30415)){
var statearr_30435_30458 = state_30428__$1;
(statearr_30435_30458[(1)] = (8));

} else {
var statearr_30436_30459 = state_30428__$1;
(statearr_30436_30459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (3))){
var inst_30426 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30428__$1,inst_30426);
} else {
if((state_val_30429 === (2))){
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30428__$1,(4),ch);
} else {
if((state_val_30429 === (11))){
var inst_30418 = (state_30428[(2)]);
var state_30428__$1 = state_30428;
var statearr_30437_30460 = state_30428__$1;
(statearr_30437_30460[(2)] = inst_30418);

(statearr_30437_30460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (9))){
var state_30428__$1 = state_30428;
var statearr_30438_30461 = state_30428__$1;
(statearr_30438_30461[(2)] = null);

(statearr_30438_30461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (5))){
var inst_30413 = cljs.core.async.close_BANG_.call(null,out);
var state_30428__$1 = state_30428;
var statearr_30439_30462 = state_30428__$1;
(statearr_30439_30462[(2)] = inst_30413);

(statearr_30439_30462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (10))){
var inst_30421 = (state_30428[(2)]);
var state_30428__$1 = (function (){var statearr_30440 = state_30428;
(statearr_30440[(8)] = inst_30421);

return statearr_30440;
})();
var statearr_30441_30463 = state_30428__$1;
(statearr_30441_30463[(2)] = null);

(statearr_30441_30463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30429 === (8))){
var inst_30410 = (state_30428[(7)]);
var state_30428__$1 = state_30428;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30428__$1,(11),out,inst_30410);
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
});})(c__28151__auto___30453,out))
;
return ((function (switch__28039__auto__,c__28151__auto___30453,out){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30445 = [null,null,null,null,null,null,null,null,null];
(statearr_30445[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30445[(1)] = (1));

return statearr_30445;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30428){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30446){if((e30446 instanceof Object)){
var ex__28043__auto__ = e30446;
var statearr_30447_30464 = state_30428;
(statearr_30447_30464[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30465 = state_30428;
state_30428 = G__30465;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30428){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30453,out))
})();
var state__28153__auto__ = (function (){var statearr_30448 = f__28152__auto__.call(null);
(statearr_30448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30453);

return statearr_30448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30453,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30466 = [];
var len__27054__auto___30469 = arguments.length;
var i__27055__auto___30470 = (0);
while(true){
if((i__27055__auto___30470 < len__27054__auto___30469)){
args30466.push((arguments[i__27055__auto___30470]));

var G__30471 = (i__27055__auto___30470 + (1));
i__27055__auto___30470 = G__30471;
continue;
} else {
}
break;
}

var G__30468 = args30466.length;
switch (G__30468) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30466.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28151__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto__){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto__){
return (function (state_30638){
var state_val_30639 = (state_30638[(1)]);
if((state_val_30639 === (7))){
var inst_30634 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30640_30681 = state_30638__$1;
(statearr_30640_30681[(2)] = inst_30634);

(statearr_30640_30681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (20))){
var inst_30604 = (state_30638[(7)]);
var inst_30615 = (state_30638[(2)]);
var inst_30616 = cljs.core.next.call(null,inst_30604);
var inst_30590 = inst_30616;
var inst_30591 = null;
var inst_30592 = (0);
var inst_30593 = (0);
var state_30638__$1 = (function (){var statearr_30641 = state_30638;
(statearr_30641[(8)] = inst_30592);

(statearr_30641[(9)] = inst_30591);

(statearr_30641[(10)] = inst_30590);

(statearr_30641[(11)] = inst_30615);

(statearr_30641[(12)] = inst_30593);

return statearr_30641;
})();
var statearr_30642_30682 = state_30638__$1;
(statearr_30642_30682[(2)] = null);

(statearr_30642_30682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (1))){
var state_30638__$1 = state_30638;
var statearr_30643_30683 = state_30638__$1;
(statearr_30643_30683[(2)] = null);

(statearr_30643_30683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (4))){
var inst_30579 = (state_30638[(13)]);
var inst_30579__$1 = (state_30638[(2)]);
var inst_30580 = (inst_30579__$1 == null);
var state_30638__$1 = (function (){var statearr_30644 = state_30638;
(statearr_30644[(13)] = inst_30579__$1);

return statearr_30644;
})();
if(cljs.core.truth_(inst_30580)){
var statearr_30645_30684 = state_30638__$1;
(statearr_30645_30684[(1)] = (5));

} else {
var statearr_30646_30685 = state_30638__$1;
(statearr_30646_30685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (15))){
var state_30638__$1 = state_30638;
var statearr_30650_30686 = state_30638__$1;
(statearr_30650_30686[(2)] = null);

(statearr_30650_30686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (21))){
var state_30638__$1 = state_30638;
var statearr_30651_30687 = state_30638__$1;
(statearr_30651_30687[(2)] = null);

(statearr_30651_30687[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (13))){
var inst_30592 = (state_30638[(8)]);
var inst_30591 = (state_30638[(9)]);
var inst_30590 = (state_30638[(10)]);
var inst_30593 = (state_30638[(12)]);
var inst_30600 = (state_30638[(2)]);
var inst_30601 = (inst_30593 + (1));
var tmp30647 = inst_30592;
var tmp30648 = inst_30591;
var tmp30649 = inst_30590;
var inst_30590__$1 = tmp30649;
var inst_30591__$1 = tmp30648;
var inst_30592__$1 = tmp30647;
var inst_30593__$1 = inst_30601;
var state_30638__$1 = (function (){var statearr_30652 = state_30638;
(statearr_30652[(8)] = inst_30592__$1);

(statearr_30652[(9)] = inst_30591__$1);

(statearr_30652[(10)] = inst_30590__$1);

(statearr_30652[(12)] = inst_30593__$1);

(statearr_30652[(14)] = inst_30600);

return statearr_30652;
})();
var statearr_30653_30688 = state_30638__$1;
(statearr_30653_30688[(2)] = null);

(statearr_30653_30688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (22))){
var state_30638__$1 = state_30638;
var statearr_30654_30689 = state_30638__$1;
(statearr_30654_30689[(2)] = null);

(statearr_30654_30689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (6))){
var inst_30579 = (state_30638[(13)]);
var inst_30588 = f.call(null,inst_30579);
var inst_30589 = cljs.core.seq.call(null,inst_30588);
var inst_30590 = inst_30589;
var inst_30591 = null;
var inst_30592 = (0);
var inst_30593 = (0);
var state_30638__$1 = (function (){var statearr_30655 = state_30638;
(statearr_30655[(8)] = inst_30592);

(statearr_30655[(9)] = inst_30591);

(statearr_30655[(10)] = inst_30590);

(statearr_30655[(12)] = inst_30593);

return statearr_30655;
})();
var statearr_30656_30690 = state_30638__$1;
(statearr_30656_30690[(2)] = null);

(statearr_30656_30690[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (17))){
var inst_30604 = (state_30638[(7)]);
var inst_30608 = cljs.core.chunk_first.call(null,inst_30604);
var inst_30609 = cljs.core.chunk_rest.call(null,inst_30604);
var inst_30610 = cljs.core.count.call(null,inst_30608);
var inst_30590 = inst_30609;
var inst_30591 = inst_30608;
var inst_30592 = inst_30610;
var inst_30593 = (0);
var state_30638__$1 = (function (){var statearr_30657 = state_30638;
(statearr_30657[(8)] = inst_30592);

(statearr_30657[(9)] = inst_30591);

(statearr_30657[(10)] = inst_30590);

(statearr_30657[(12)] = inst_30593);

return statearr_30657;
})();
var statearr_30658_30691 = state_30638__$1;
(statearr_30658_30691[(2)] = null);

(statearr_30658_30691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (3))){
var inst_30636 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30638__$1,inst_30636);
} else {
if((state_val_30639 === (12))){
var inst_30624 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30659_30692 = state_30638__$1;
(statearr_30659_30692[(2)] = inst_30624);

(statearr_30659_30692[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (2))){
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30638__$1,(4),in$);
} else {
if((state_val_30639 === (23))){
var inst_30632 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30660_30693 = state_30638__$1;
(statearr_30660_30693[(2)] = inst_30632);

(statearr_30660_30693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (19))){
var inst_30619 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30661_30694 = state_30638__$1;
(statearr_30661_30694[(2)] = inst_30619);

(statearr_30661_30694[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (11))){
var inst_30604 = (state_30638[(7)]);
var inst_30590 = (state_30638[(10)]);
var inst_30604__$1 = cljs.core.seq.call(null,inst_30590);
var state_30638__$1 = (function (){var statearr_30662 = state_30638;
(statearr_30662[(7)] = inst_30604__$1);

return statearr_30662;
})();
if(inst_30604__$1){
var statearr_30663_30695 = state_30638__$1;
(statearr_30663_30695[(1)] = (14));

} else {
var statearr_30664_30696 = state_30638__$1;
(statearr_30664_30696[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (9))){
var inst_30626 = (state_30638[(2)]);
var inst_30627 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30638__$1 = (function (){var statearr_30665 = state_30638;
(statearr_30665[(15)] = inst_30626);

return statearr_30665;
})();
if(cljs.core.truth_(inst_30627)){
var statearr_30666_30697 = state_30638__$1;
(statearr_30666_30697[(1)] = (21));

} else {
var statearr_30667_30698 = state_30638__$1;
(statearr_30667_30698[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (5))){
var inst_30582 = cljs.core.async.close_BANG_.call(null,out);
var state_30638__$1 = state_30638;
var statearr_30668_30699 = state_30638__$1;
(statearr_30668_30699[(2)] = inst_30582);

(statearr_30668_30699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (14))){
var inst_30604 = (state_30638[(7)]);
var inst_30606 = cljs.core.chunked_seq_QMARK_.call(null,inst_30604);
var state_30638__$1 = state_30638;
if(inst_30606){
var statearr_30669_30700 = state_30638__$1;
(statearr_30669_30700[(1)] = (17));

} else {
var statearr_30670_30701 = state_30638__$1;
(statearr_30670_30701[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (16))){
var inst_30622 = (state_30638[(2)]);
var state_30638__$1 = state_30638;
var statearr_30671_30702 = state_30638__$1;
(statearr_30671_30702[(2)] = inst_30622);

(statearr_30671_30702[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30639 === (10))){
var inst_30591 = (state_30638[(9)]);
var inst_30593 = (state_30638[(12)]);
var inst_30598 = cljs.core._nth.call(null,inst_30591,inst_30593);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30638__$1,(13),out,inst_30598);
} else {
if((state_val_30639 === (18))){
var inst_30604 = (state_30638[(7)]);
var inst_30613 = cljs.core.first.call(null,inst_30604);
var state_30638__$1 = state_30638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30638__$1,(20),out,inst_30613);
} else {
if((state_val_30639 === (8))){
var inst_30592 = (state_30638[(8)]);
var inst_30593 = (state_30638[(12)]);
var inst_30595 = (inst_30593 < inst_30592);
var inst_30596 = inst_30595;
var state_30638__$1 = state_30638;
if(cljs.core.truth_(inst_30596)){
var statearr_30672_30703 = state_30638__$1;
(statearr_30672_30703[(1)] = (10));

} else {
var statearr_30673_30704 = state_30638__$1;
(statearr_30673_30704[(1)] = (11));

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
});})(c__28151__auto__))
;
return ((function (switch__28039__auto__,c__28151__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28040__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28040__auto____0 = (function (){
var statearr_30677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30677[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28040__auto__);

(statearr_30677[(1)] = (1));

return statearr_30677;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28040__auto____1 = (function (state_30638){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30678){if((e30678 instanceof Object)){
var ex__28043__auto__ = e30678;
var statearr_30679_30705 = state_30638;
(statearr_30679_30705[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30706 = state_30638;
state_30638 = G__30706;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28040__auto__ = function(state_30638){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28040__auto____1.call(this,state_30638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28040__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28040__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto__))
})();
var state__28153__auto__ = (function (){var statearr_30680 = f__28152__auto__.call(null);
(statearr_30680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto__);

return statearr_30680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto__))
);

return c__28151__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30707 = [];
var len__27054__auto___30710 = arguments.length;
var i__27055__auto___30711 = (0);
while(true){
if((i__27055__auto___30711 < len__27054__auto___30710)){
args30707.push((arguments[i__27055__auto___30711]));

var G__30712 = (i__27055__auto___30711 + (1));
i__27055__auto___30711 = G__30712;
continue;
} else {
}
break;
}

var G__30709 = args30707.length;
switch (G__30709) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30707.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30714 = [];
var len__27054__auto___30717 = arguments.length;
var i__27055__auto___30718 = (0);
while(true){
if((i__27055__auto___30718 < len__27054__auto___30717)){
args30714.push((arguments[i__27055__auto___30718]));

var G__30719 = (i__27055__auto___30718 + (1));
i__27055__auto___30718 = G__30719;
continue;
} else {
}
break;
}

var G__30716 = args30714.length;
switch (G__30716) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30714.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30721 = [];
var len__27054__auto___30772 = arguments.length;
var i__27055__auto___30773 = (0);
while(true){
if((i__27055__auto___30773 < len__27054__auto___30772)){
args30721.push((arguments[i__27055__auto___30773]));

var G__30774 = (i__27055__auto___30773 + (1));
i__27055__auto___30773 = G__30774;
continue;
} else {
}
break;
}

var G__30723 = args30721.length;
switch (G__30723) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30721.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___30776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30776,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30776,out){
return (function (state_30747){
var state_val_30748 = (state_30747[(1)]);
if((state_val_30748 === (7))){
var inst_30742 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
var statearr_30749_30777 = state_30747__$1;
(statearr_30749_30777[(2)] = inst_30742);

(statearr_30749_30777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30748 === (1))){
var inst_30724 = null;
var state_30747__$1 = (function (){var statearr_30750 = state_30747;
(statearr_30750[(7)] = inst_30724);

return statearr_30750;
})();
var statearr_30751_30778 = state_30747__$1;
(statearr_30751_30778[(2)] = null);

(statearr_30751_30778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30748 === (4))){
var inst_30727 = (state_30747[(8)]);
var inst_30727__$1 = (state_30747[(2)]);
var inst_30728 = (inst_30727__$1 == null);
var inst_30729 = cljs.core.not.call(null,inst_30728);
var state_30747__$1 = (function (){var statearr_30752 = state_30747;
(statearr_30752[(8)] = inst_30727__$1);

return statearr_30752;
})();
if(inst_30729){
var statearr_30753_30779 = state_30747__$1;
(statearr_30753_30779[(1)] = (5));

} else {
var statearr_30754_30780 = state_30747__$1;
(statearr_30754_30780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30748 === (6))){
var state_30747__$1 = state_30747;
var statearr_30755_30781 = state_30747__$1;
(statearr_30755_30781[(2)] = null);

(statearr_30755_30781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30748 === (3))){
var inst_30744 = (state_30747[(2)]);
var inst_30745 = cljs.core.async.close_BANG_.call(null,out);
var state_30747__$1 = (function (){var statearr_30756 = state_30747;
(statearr_30756[(9)] = inst_30744);

return statearr_30756;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30747__$1,inst_30745);
} else {
if((state_val_30748 === (2))){
var state_30747__$1 = state_30747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30747__$1,(4),ch);
} else {
if((state_val_30748 === (11))){
var inst_30727 = (state_30747[(8)]);
var inst_30736 = (state_30747[(2)]);
var inst_30724 = inst_30727;
var state_30747__$1 = (function (){var statearr_30757 = state_30747;
(statearr_30757[(10)] = inst_30736);

(statearr_30757[(7)] = inst_30724);

return statearr_30757;
})();
var statearr_30758_30782 = state_30747__$1;
(statearr_30758_30782[(2)] = null);

(statearr_30758_30782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30748 === (9))){
var inst_30727 = (state_30747[(8)]);
var state_30747__$1 = state_30747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30747__$1,(11),out,inst_30727);
} else {
if((state_val_30748 === (5))){
var inst_30724 = (state_30747[(7)]);
var inst_30727 = (state_30747[(8)]);
var inst_30731 = cljs.core._EQ_.call(null,inst_30727,inst_30724);
var state_30747__$1 = state_30747;
if(inst_30731){
var statearr_30760_30783 = state_30747__$1;
(statearr_30760_30783[(1)] = (8));

} else {
var statearr_30761_30784 = state_30747__$1;
(statearr_30761_30784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30748 === (10))){
var inst_30739 = (state_30747[(2)]);
var state_30747__$1 = state_30747;
var statearr_30762_30785 = state_30747__$1;
(statearr_30762_30785[(2)] = inst_30739);

(statearr_30762_30785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30748 === (8))){
var inst_30724 = (state_30747[(7)]);
var tmp30759 = inst_30724;
var inst_30724__$1 = tmp30759;
var state_30747__$1 = (function (){var statearr_30763 = state_30747;
(statearr_30763[(7)] = inst_30724__$1);

return statearr_30763;
})();
var statearr_30764_30786 = state_30747__$1;
(statearr_30764_30786[(2)] = null);

(statearr_30764_30786[(1)] = (2));


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
});})(c__28151__auto___30776,out))
;
return ((function (switch__28039__auto__,c__28151__auto___30776,out){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30768 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30768[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30768[(1)] = (1));

return statearr_30768;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30747){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30769){if((e30769 instanceof Object)){
var ex__28043__auto__ = e30769;
var statearr_30770_30787 = state_30747;
(statearr_30770_30787[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30788 = state_30747;
state_30747 = G__30788;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30776,out))
})();
var state__28153__auto__ = (function (){var statearr_30771 = f__28152__auto__.call(null);
(statearr_30771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30776);

return statearr_30771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30776,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30789 = [];
var len__27054__auto___30859 = arguments.length;
var i__27055__auto___30860 = (0);
while(true){
if((i__27055__auto___30860 < len__27054__auto___30859)){
args30789.push((arguments[i__27055__auto___30860]));

var G__30861 = (i__27055__auto___30860 + (1));
i__27055__auto___30860 = G__30861;
continue;
} else {
}
break;
}

var G__30791 = args30789.length;
switch (G__30791) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30789.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___30863 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30863,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30863,out){
return (function (state_30829){
var state_val_30830 = (state_30829[(1)]);
if((state_val_30830 === (7))){
var inst_30825 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
var statearr_30831_30864 = state_30829__$1;
(statearr_30831_30864[(2)] = inst_30825);

(statearr_30831_30864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (1))){
var inst_30792 = (new Array(n));
var inst_30793 = inst_30792;
var inst_30794 = (0);
var state_30829__$1 = (function (){var statearr_30832 = state_30829;
(statearr_30832[(7)] = inst_30794);

(statearr_30832[(8)] = inst_30793);

return statearr_30832;
})();
var statearr_30833_30865 = state_30829__$1;
(statearr_30833_30865[(2)] = null);

(statearr_30833_30865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (4))){
var inst_30797 = (state_30829[(9)]);
var inst_30797__$1 = (state_30829[(2)]);
var inst_30798 = (inst_30797__$1 == null);
var inst_30799 = cljs.core.not.call(null,inst_30798);
var state_30829__$1 = (function (){var statearr_30834 = state_30829;
(statearr_30834[(9)] = inst_30797__$1);

return statearr_30834;
})();
if(inst_30799){
var statearr_30835_30866 = state_30829__$1;
(statearr_30835_30866[(1)] = (5));

} else {
var statearr_30836_30867 = state_30829__$1;
(statearr_30836_30867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (15))){
var inst_30819 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
var statearr_30837_30868 = state_30829__$1;
(statearr_30837_30868[(2)] = inst_30819);

(statearr_30837_30868[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (13))){
var state_30829__$1 = state_30829;
var statearr_30838_30869 = state_30829__$1;
(statearr_30838_30869[(2)] = null);

(statearr_30838_30869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (6))){
var inst_30794 = (state_30829[(7)]);
var inst_30815 = (inst_30794 > (0));
var state_30829__$1 = state_30829;
if(cljs.core.truth_(inst_30815)){
var statearr_30839_30870 = state_30829__$1;
(statearr_30839_30870[(1)] = (12));

} else {
var statearr_30840_30871 = state_30829__$1;
(statearr_30840_30871[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (3))){
var inst_30827 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30829__$1,inst_30827);
} else {
if((state_val_30830 === (12))){
var inst_30793 = (state_30829[(8)]);
var inst_30817 = cljs.core.vec.call(null,inst_30793);
var state_30829__$1 = state_30829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30829__$1,(15),out,inst_30817);
} else {
if((state_val_30830 === (2))){
var state_30829__$1 = state_30829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30829__$1,(4),ch);
} else {
if((state_val_30830 === (11))){
var inst_30809 = (state_30829[(2)]);
var inst_30810 = (new Array(n));
var inst_30793 = inst_30810;
var inst_30794 = (0);
var state_30829__$1 = (function (){var statearr_30841 = state_30829;
(statearr_30841[(7)] = inst_30794);

(statearr_30841[(10)] = inst_30809);

(statearr_30841[(8)] = inst_30793);

return statearr_30841;
})();
var statearr_30842_30872 = state_30829__$1;
(statearr_30842_30872[(2)] = null);

(statearr_30842_30872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (9))){
var inst_30793 = (state_30829[(8)]);
var inst_30807 = cljs.core.vec.call(null,inst_30793);
var state_30829__$1 = state_30829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30829__$1,(11),out,inst_30807);
} else {
if((state_val_30830 === (5))){
var inst_30802 = (state_30829[(11)]);
var inst_30797 = (state_30829[(9)]);
var inst_30794 = (state_30829[(7)]);
var inst_30793 = (state_30829[(8)]);
var inst_30801 = (inst_30793[inst_30794] = inst_30797);
var inst_30802__$1 = (inst_30794 + (1));
var inst_30803 = (inst_30802__$1 < n);
var state_30829__$1 = (function (){var statearr_30843 = state_30829;
(statearr_30843[(11)] = inst_30802__$1);

(statearr_30843[(12)] = inst_30801);

return statearr_30843;
})();
if(cljs.core.truth_(inst_30803)){
var statearr_30844_30873 = state_30829__$1;
(statearr_30844_30873[(1)] = (8));

} else {
var statearr_30845_30874 = state_30829__$1;
(statearr_30845_30874[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (14))){
var inst_30822 = (state_30829[(2)]);
var inst_30823 = cljs.core.async.close_BANG_.call(null,out);
var state_30829__$1 = (function (){var statearr_30847 = state_30829;
(statearr_30847[(13)] = inst_30822);

return statearr_30847;
})();
var statearr_30848_30875 = state_30829__$1;
(statearr_30848_30875[(2)] = inst_30823);

(statearr_30848_30875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (10))){
var inst_30813 = (state_30829[(2)]);
var state_30829__$1 = state_30829;
var statearr_30849_30876 = state_30829__$1;
(statearr_30849_30876[(2)] = inst_30813);

(statearr_30849_30876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30830 === (8))){
var inst_30802 = (state_30829[(11)]);
var inst_30793 = (state_30829[(8)]);
var tmp30846 = inst_30793;
var inst_30793__$1 = tmp30846;
var inst_30794 = inst_30802;
var state_30829__$1 = (function (){var statearr_30850 = state_30829;
(statearr_30850[(7)] = inst_30794);

(statearr_30850[(8)] = inst_30793__$1);

return statearr_30850;
})();
var statearr_30851_30877 = state_30829__$1;
(statearr_30851_30877[(2)] = null);

(statearr_30851_30877[(1)] = (2));


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
});})(c__28151__auto___30863,out))
;
return ((function (switch__28039__auto__,c__28151__auto___30863,out){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30855[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30855[(1)] = (1));

return statearr_30855;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30829){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30856){if((e30856 instanceof Object)){
var ex__28043__auto__ = e30856;
var statearr_30857_30878 = state_30829;
(statearr_30857_30878[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30879 = state_30829;
state_30829 = G__30879;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30863,out))
})();
var state__28153__auto__ = (function (){var statearr_30858 = f__28152__auto__.call(null);
(statearr_30858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30863);

return statearr_30858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30863,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30880 = [];
var len__27054__auto___30954 = arguments.length;
var i__27055__auto___30955 = (0);
while(true){
if((i__27055__auto___30955 < len__27054__auto___30954)){
args30880.push((arguments[i__27055__auto___30955]));

var G__30956 = (i__27055__auto___30955 + (1));
i__27055__auto___30955 = G__30956;
continue;
} else {
}
break;
}

var G__30882 = args30880.length;
switch (G__30882) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30880.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28151__auto___30958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28151__auto___30958,out){
return (function (){
var f__28152__auto__ = (function (){var switch__28039__auto__ = ((function (c__28151__auto___30958,out){
return (function (state_30924){
var state_val_30925 = (state_30924[(1)]);
if((state_val_30925 === (7))){
var inst_30920 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30926_30959 = state_30924__$1;
(statearr_30926_30959[(2)] = inst_30920);

(statearr_30926_30959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (1))){
var inst_30883 = [];
var inst_30884 = inst_30883;
var inst_30885 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30924__$1 = (function (){var statearr_30927 = state_30924;
(statearr_30927[(7)] = inst_30884);

(statearr_30927[(8)] = inst_30885);

return statearr_30927;
})();
var statearr_30928_30960 = state_30924__$1;
(statearr_30928_30960[(2)] = null);

(statearr_30928_30960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (4))){
var inst_30888 = (state_30924[(9)]);
var inst_30888__$1 = (state_30924[(2)]);
var inst_30889 = (inst_30888__$1 == null);
var inst_30890 = cljs.core.not.call(null,inst_30889);
var state_30924__$1 = (function (){var statearr_30929 = state_30924;
(statearr_30929[(9)] = inst_30888__$1);

return statearr_30929;
})();
if(inst_30890){
var statearr_30930_30961 = state_30924__$1;
(statearr_30930_30961[(1)] = (5));

} else {
var statearr_30931_30962 = state_30924__$1;
(statearr_30931_30962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (15))){
var inst_30914 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30932_30963 = state_30924__$1;
(statearr_30932_30963[(2)] = inst_30914);

(statearr_30932_30963[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (13))){
var state_30924__$1 = state_30924;
var statearr_30933_30964 = state_30924__$1;
(statearr_30933_30964[(2)] = null);

(statearr_30933_30964[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (6))){
var inst_30884 = (state_30924[(7)]);
var inst_30909 = inst_30884.length;
var inst_30910 = (inst_30909 > (0));
var state_30924__$1 = state_30924;
if(cljs.core.truth_(inst_30910)){
var statearr_30934_30965 = state_30924__$1;
(statearr_30934_30965[(1)] = (12));

} else {
var statearr_30935_30966 = state_30924__$1;
(statearr_30935_30966[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (3))){
var inst_30922 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30924__$1,inst_30922);
} else {
if((state_val_30925 === (12))){
var inst_30884 = (state_30924[(7)]);
var inst_30912 = cljs.core.vec.call(null,inst_30884);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30924__$1,(15),out,inst_30912);
} else {
if((state_val_30925 === (2))){
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30924__$1,(4),ch);
} else {
if((state_val_30925 === (11))){
var inst_30888 = (state_30924[(9)]);
var inst_30892 = (state_30924[(10)]);
var inst_30902 = (state_30924[(2)]);
var inst_30903 = [];
var inst_30904 = inst_30903.push(inst_30888);
var inst_30884 = inst_30903;
var inst_30885 = inst_30892;
var state_30924__$1 = (function (){var statearr_30936 = state_30924;
(statearr_30936[(7)] = inst_30884);

(statearr_30936[(11)] = inst_30904);

(statearr_30936[(8)] = inst_30885);

(statearr_30936[(12)] = inst_30902);

return statearr_30936;
})();
var statearr_30937_30967 = state_30924__$1;
(statearr_30937_30967[(2)] = null);

(statearr_30937_30967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (9))){
var inst_30884 = (state_30924[(7)]);
var inst_30900 = cljs.core.vec.call(null,inst_30884);
var state_30924__$1 = state_30924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30924__$1,(11),out,inst_30900);
} else {
if((state_val_30925 === (5))){
var inst_30888 = (state_30924[(9)]);
var inst_30892 = (state_30924[(10)]);
var inst_30885 = (state_30924[(8)]);
var inst_30892__$1 = f.call(null,inst_30888);
var inst_30893 = cljs.core._EQ_.call(null,inst_30892__$1,inst_30885);
var inst_30894 = cljs.core.keyword_identical_QMARK_.call(null,inst_30885,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30895 = (inst_30893) || (inst_30894);
var state_30924__$1 = (function (){var statearr_30938 = state_30924;
(statearr_30938[(10)] = inst_30892__$1);

return statearr_30938;
})();
if(cljs.core.truth_(inst_30895)){
var statearr_30939_30968 = state_30924__$1;
(statearr_30939_30968[(1)] = (8));

} else {
var statearr_30940_30969 = state_30924__$1;
(statearr_30940_30969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (14))){
var inst_30917 = (state_30924[(2)]);
var inst_30918 = cljs.core.async.close_BANG_.call(null,out);
var state_30924__$1 = (function (){var statearr_30942 = state_30924;
(statearr_30942[(13)] = inst_30917);

return statearr_30942;
})();
var statearr_30943_30970 = state_30924__$1;
(statearr_30943_30970[(2)] = inst_30918);

(statearr_30943_30970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (10))){
var inst_30907 = (state_30924[(2)]);
var state_30924__$1 = state_30924;
var statearr_30944_30971 = state_30924__$1;
(statearr_30944_30971[(2)] = inst_30907);

(statearr_30944_30971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30925 === (8))){
var inst_30888 = (state_30924[(9)]);
var inst_30884 = (state_30924[(7)]);
var inst_30892 = (state_30924[(10)]);
var inst_30897 = inst_30884.push(inst_30888);
var tmp30941 = inst_30884;
var inst_30884__$1 = tmp30941;
var inst_30885 = inst_30892;
var state_30924__$1 = (function (){var statearr_30945 = state_30924;
(statearr_30945[(14)] = inst_30897);

(statearr_30945[(7)] = inst_30884__$1);

(statearr_30945[(8)] = inst_30885);

return statearr_30945;
})();
var statearr_30946_30972 = state_30924__$1;
(statearr_30946_30972[(2)] = null);

(statearr_30946_30972[(1)] = (2));


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
});})(c__28151__auto___30958,out))
;
return ((function (switch__28039__auto__,c__28151__auto___30958,out){
return (function() {
var cljs$core$async$state_machine__28040__auto__ = null;
var cljs$core$async$state_machine__28040__auto____0 = (function (){
var statearr_30950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30950[(0)] = cljs$core$async$state_machine__28040__auto__);

(statearr_30950[(1)] = (1));

return statearr_30950;
});
var cljs$core$async$state_machine__28040__auto____1 = (function (state_30924){
while(true){
var ret_value__28041__auto__ = (function (){try{while(true){
var result__28042__auto__ = switch__28039__auto__.call(null,state_30924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28042__auto__;
}
break;
}
}catch (e30951){if((e30951 instanceof Object)){
var ex__28043__auto__ = e30951;
var statearr_30952_30973 = state_30924;
(statearr_30952_30973[(5)] = ex__28043__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28041__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30974 = state_30924;
state_30924 = G__30974;
continue;
} else {
return ret_value__28041__auto__;
}
break;
}
});
cljs$core$async$state_machine__28040__auto__ = function(state_30924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28040__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28040__auto____1.call(this,state_30924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28040__auto____0;
cljs$core$async$state_machine__28040__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28040__auto____1;
return cljs$core$async$state_machine__28040__auto__;
})()
;})(switch__28039__auto__,c__28151__auto___30958,out))
})();
var state__28153__auto__ = (function (){var statearr_30953 = f__28152__auto__.call(null);
(statearr_30953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28151__auto___30958);

return statearr_30953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28153__auto__);
});})(c__28151__auto___30958,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1499200990100