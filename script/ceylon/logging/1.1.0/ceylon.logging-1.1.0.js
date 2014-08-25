(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/logging/1.1.0/ceylon.logging-1.1.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
var m$147=require('ceylon/collection/1.1.0/ceylon.collection-1.1.0');
m$1.$addmod$(m$147,'ceylon.collection/1.1.0');
function Category(){var $3oo={t:'u',l:[{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration}]};$3oo.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Category'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$prop$getLogger),m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$init$Logger().$$.prototype.$prop$getCategory)].rt$({t:m$1.ValueDeclaration$meta$declaration}))];},d:['ceylon.logging','Category']};};return $3oo;}
ex$.Category=Category;
function Logger(logger$){
    logger$.log$defs$exception=function($3op,$3oq,$3or){return null;};
}
Logger.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$prop$getLogger)].rt$({t:m$1.ValueDeclaration$meta$declaration}))];},d:['ceylon.logging','Logger']};};
ex$.Logger=Logger;
function $init$Logger(){
    if(Logger.$$===undefined){
        m$1.initTypeProtoI(Logger,'ceylon.logging::Logger');
        (function(logger$){
            logger$.Message$Logger=function(){var $3os={t:'u',l:[{t:m$1.$_String},{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_String},Arguments$Callable:{t:m$1.Empty}}}]};$3os.$crtmm$=function(){return{mod:$CCMM$,$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$at:Message')];},d:['ceylon.logging','Logger','$at','Message']};};return $3os;};
            logger$.$prop$getCategory={$crtmm$:function(){return{mod:$CCMM$,$t:Category(),$cont:Logger,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$at:category')];},d:['ceylon.logging','Logger','$at','category']};}};
            logger$.$prop$getPriority={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Priority},$cont:Logger,pa:1029,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$at:priority'),m$1.see([m$1.OpenValue$jsint(m$1.lmp$(ex$,'ceylon.logging'),$prop$getDefaultPriority),m$1.OpenFunction(m$1.lmp$(ex$,'ceylon.logging'),$init$Logger().$$.prototype.enabled)].rt$({t:'u',l:[{t:m$1.ValueDeclaration$meta$declaration},{t:m$1.FunctionDeclaration$meta$declaration}]}))];},d:['ceylon.logging','Logger','$at','priority']};}};
            logger$.render=function($3ot){
                var logger$=this;
                var $3ou=$3ot;
                if(m$1.is$($3ot,{t:m$1.$_String})) {
                    return $3ou;
                }else if(m$1.is$($3ot,{t:m$1.Callable,a:{Return$Callable:{t:m$1.$_String},Arguments$Callable:{t:m$1.Empty}}})) {
                    return $3ou();
                }
            };logger$.render.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_String},ps:[{nm:'message',mt:'prm',$t:Logger.Message$Logger()}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:render')];},d:['ceylon.logging','Logger','$m','render']};};
            logger$.enabled=function($3ov){
                var logger$=this;
                return (logger$.priority.compare($3ov)!==m$1.getLarger());
            };
            logger$.enabled.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'priority',mt:'prm',$t:{t:Priority}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:enabled')];},d:['ceylon.logging','Logger','$m','enabled']};};
            logger$.log={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'priority',mt:'prm',$t:{t:Priority}},{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:Logger,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:log')];},d:['ceylon.logging','Logger','$m','log']};}};logger$.fatal$defs$exception=function($3ow,$3ox){return null;};
            logger$.fatal=function($3ow,$3ox){
                var logger$=this;
                if($3ox===undefined){$3ox=logger$.fatal$defs$exception($3ow,$3ox);}
                return logger$.log(getFatal(),$3ow,$3ox);
            };
            logger$.fatal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:fatal')];},d:['ceylon.logging','Logger','$m','fatal']};};
            logger$.error$defs$exception=function($3oy,$3oz){return null;};
            logger$.error=function($3oy,$3oz){
                var logger$=this;
                if($3oz===undefined){$3oz=logger$.error$defs$exception($3oy,$3oz);}
                return logger$.log(getError(),$3oy,$3oz);
            };
            logger$.error.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:error')];},d:['ceylon.logging','Logger','$m','error']};};
            logger$.warn$defs$exception=function($3p0,$3p1){return null;};
            logger$.warn=function($3p0,$3p1){
                var logger$=this;
                if($3p1===undefined){$3p1=logger$.warn$defs$exception($3p0,$3p1);}
                return logger$.log(getWarn(),$3p0,$3p1);
            };
            logger$.warn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:warn')];},d:['ceylon.logging','Logger','$m','warn']};};
            logger$.info$defs$exception=function($3p2,$3p3){return null;};
            logger$.info=function($3p2,$3p3){
                var logger$=this;
                if($3p3===undefined){$3p3=logger$.info$defs$exception($3p2,$3p3);}
                return logger$.log(getInfo(),$3p2,$3p3);
            };
            logger$.info.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:info')];},d:['ceylon.logging','Logger','$m','info']};};
            logger$.debug$defs$exception=function($3p4,$3p5){return null;};
            logger$.debug=function($3p4,$3p5){
                var logger$=this;
                if($3p5===undefined){$3p5=logger$.debug$defs$exception($3p4,$3p5);}
                return logger$.log(getDebug(),$3p4,$3p5);
            };
            logger$.debug.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:debug')];},d:['ceylon.logging','Logger','$m','debug']};};
            logger$.trace$defs$exception=function($3p6,$3p7){return null;};
            logger$.trace=function($3p6,$3p7){
                var logger$=this;
                if($3p7===undefined){$3p7=logger$.trace$defs$exception($3p6,$3p7);}
                return logger$.log(getTrace(),$3p6,$3p7);
            };
            logger$.trace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:Logger,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Logger:$m:trace')];},d:['ceylon.logging','Logger','$m','trace']};};
        })(Logger.$$.prototype);
    }
    return Logger;
}
ex$.$init$Logger=$init$Logger;
$init$Logger();
var $3p8;function $valinit$$3p8(){if($3p8===undefined)$3p8=m$1.$JsCallable((function($3p9){
    var $3pa;
    if(m$1.nn$(($3pa=getLoggers().$_get($3p9.name)))){
        return $3pa;
    }else {
        var $3pb=LoggerImpl($3p9);
        getLoggers().put($3p9.name,$3pb);
        return $3pb;
    }
}),[{nm:'p2',mt:'prm',$t:Category()}],{Return$Callable:{t:Logger},Arguments$Callable:{t:'T',l:[Category()]}});return $3p8;};$valinit$$3p8();
function getLogger(){return $valinit$$3p8();}
ex$.getLogger=getLogger;
function setLogger($3pc){return $3p8=$3pc;};
ex$.setLogger=setLogger;
var $prop$getLogger={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Callable,a:{Return$Callable:{t:Logger},Arguments$Callable:{t:'T',l:[{$t:Category()}]}}},pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:logger')];},d:['ceylon.logging','logger']};}};
ex$.$prop$getLogger=$prop$getLogger;
$prop$getLogger.get=getLogger;
getLogger.$crtmm$=$prop$getLogger.$crtmm$;
$prop$getLogger.set=setLogger;
if(setLogger.$crtmm$===undefined)setLogger.$crtmm$=$prop$getLogger.$crtmm$;
var $3pd;function $valinit$$3pd(){if($3pd===undefined)$3pd=m$147.HashMap(undefined,undefined,undefined,{Key$HashMap:{t:m$1.$_String},Item$HashMap:{t:Logger}});return $3pd;};$valinit$$3pd();
function getLoggers(){return $valinit$$3pd();}
ex$.getLoggers=getLoggers;
var $prop$getLoggers={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$147.MutableMap,a:{Key$MutableMap:{t:m$1.$_String},Item$MutableMap:{t:Logger}}},d:['ceylon.logging','loggers']};}};
ex$.$prop$getLoggers=$prop$getLoggers;
$prop$getLoggers.get=getLoggers;
getLoggers.$crtmm$=$prop$getLoggers.$crtmm$;
function LoggerImpl(category,loggerImpl$){
    $init$LoggerImpl();
    if(loggerImpl$===undefined)loggerImpl$=new LoggerImpl.$$;
    loggerImpl$.category_=category;
    Logger(loggerImpl$);
    loggerImpl$.$3pe_=null;
    loggerImpl$.$prop$get$3pe={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Priority}]},$cont:LoggerImpl,pa:1027,d:['ceylon.logging','LoggerImpl','$at','explicitPriority$jm0rg3']};}};
    loggerImpl$.$prop$get$3pe.get=function(){return $3pe};
    return loggerImpl$;
}
LoggerImpl.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'category',mt:'prm',$t:Category(),pa:3}],sts:[{t:Logger}],d:['ceylon.logging','LoggerImpl']};};
function $init$LoggerImpl(){
    if(LoggerImpl.$$===undefined){
        m$1.initTypeProto(LoggerImpl,'ceylon.logging::LoggerImpl',m$1.Basic,$init$Logger());
        (function(loggerImpl$){
            m$1.atr$(loggerImpl$,'$3pe',function(){return this.$3pe_;},function($3pf){return this.$3pe_=$3pf;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Priority}]},$cont:LoggerImpl,pa:1027,d:['ceylon.logging','LoggerImpl','$at','explicitPriority$jm0rg3']};});
            m$1.atr$(loggerImpl$,'priority',function(){
                var loggerImpl$=this;
                return ($3pg=loggerImpl$.$3pe,m$1.nn$($3pg)?$3pg:getDefaultPriority());
                var $3pg;
            },function($3ph){
                var loggerImpl$=this;
                loggerImpl$.$3pe=$3ph;
            },function(){return{mod:$CCMM$,$t:{t:Priority},$cont:LoggerImpl,pa:1027,d:['ceylon.logging','LoggerImpl','$at','priority']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:LoggerImpl,d:['ceylon.logging','LoggerImpl','$at','priority','$set']};});loggerImpl$.log=function($3pi,$3pj,$3pk){
                var loggerImpl$=this;
                if($3pk===undefined){$3pk=loggerImpl$.log$defs$exception($3pi,$3pj,$3pk);}
                if(loggerImpl$.enabled($3pi)){
                    var $3pm;for(var $3pl=getLogWriters().iterator();($3pm=$3pl.next())!==m$1.getFinished();){
                        $3pm($3pi,loggerImpl$.category,loggerImpl$.render($3pj),$3pk);
                    }
                }
            };loggerImpl$.log.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'priority',mt:'prm',$t:{t:Priority}},{nm:'message',mt:'prm',$t:Logger.Message$Logger()},{nm:'exception',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}}],$cont:LoggerImpl,pa:3,d:['ceylon.logging','LoggerImpl','$m','log']};};
            m$1.atr$(loggerImpl$,'category',function(){return this.category_;},undefined,function(){return{mod:$CCMM$,$t:Category(),$cont:LoggerImpl,pa:3,d:['ceylon.logging','LoggerImpl','$at','category']};});
        })(LoggerImpl.$$.prototype);
    }
    return LoggerImpl;
}
ex$.$init$LoggerImpl=$init$LoggerImpl;
$init$LoggerImpl();
function LogWriter(){var $3pn={t:m$1.Callable,a:{Return$Callable:{t:m$1.Anything},Arguments$Callable:{t:'T',l:[{t:Priority},{t:'u',l:[{t:m$1.Module$meta$declaration},{t:m$1.Package$meta$declaration}]},{t:m$1.$_String},{t:'u',l:[{t:m$1.Null},{t:m$1.Exception}]}]}}};$3pn.$crtmm$=function(){return{mod:$CCMM$,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:LogWriter'),m$1.see([m$1.OpenFunction(m$1.lmp$(ex$,'ceylon.logging'),addLogWriter)].rt$({t:m$1.FunctionDeclaration$meta$declaration}))];},d:['ceylon.logging','LogWriter']};};return $3pn;}
ex$.LogWriter=LogWriter;
var addLogWriter=function($3po){
    return getLogWriters().add($3po);
};
addLogWriter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'log',mt:'prm',$t:LogWriter()}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:addLogWriter')];},d:['ceylon.logging','addLogWriter']};};
ex$.addLogWriter=addLogWriter;
var $3pp;function $valinit$$3pp(){if($3pp===undefined)$3pp=m$147.ArrayList(undefined,undefined,undefined,{Element$ArrayList:LogWriter()});return $3pp;};$valinit$$3pp();
function getLogWriters(){return $valinit$$3pp();}
ex$.getLogWriters=getLogWriters;
var $prop$getLogWriters={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$147.MutableList,a:{Element$MutableList:LogWriter()}},d:['ceylon.logging','logWriters']};}};
ex$.$prop$getLogWriters=$prop$getLogWriters;
$prop$getLogWriters.get=getLogWriters;
getLogWriters.$crtmm$=$prop$getLogWriters.$crtmm$;
ex$.$mod$ans$=function(){return[m$1.doc("Defines a platform-neutral API for writing log messages.\nThis module does not actually define any infrastructure\nfor log message output, so the program must register a\n[[LogWriter]] function at startup by calling \n[[addLogWriter]].\n\n    addLogWriter {\n        void log(Priority p, Category c, String m, Exception? e) {\n            value print = p<=info \n                    then process.writeLine \n                    else process.writeError;\n            print(\"[``system.milliseconds``] ``p.string`` ``m``\");\n            if (exists e) {\n                printStackTrace(e, print);\n            }\n        }\n    };\n\nLog messages are written to a [[Logger]]. A canonical \n`Logger` instance for a package or module may be obtained \nby calling [[logger]].\n\n    Logger logger = logger(`module hello`);\n\nThe methods [[Logger.fatal]], [[Logger.error]], \n[[Logger.warn]], [[Logger.info]], [[Logger.debug]], and \n[[Logger.trace]] write log messages with various\n[[priorities|Priority]].\n\n    logger.debug(\"trying to do something\");\n    try {\n        doSomething();\n    }\n    catch (e) {\n        logger.error(\"something bad happened\", e);\n    }\n\nFor log messages with interpolated expressions, these\nmethods accept an anonymous function.\n  \n    logger.debug(()=>\"trying to do ``something``\");\n    try {\n        do(something);\n    }\n    catch (e) {\n        logger.error(()=>\"badness happened doing ``something``\", e);\n    }\n \nBy default, only log messages with priority at least \n[[info]] are sent to the `LogWriter` functions. To change\nthe minimum priority, assign to [[defaultPriority]].\n\n    defaultPriority = debug;\n\nAlternatively, we can assign an explicit priority to a\nspecific `Logger` by assigning to [[Logger.priority]].\n\n    logger(`module hello`).priority = debug;\n\nFor integration with other logging libraries, it is\npossible to completely replace the [[logger]] function\nwith a custom function for producing `Logger`s.\n\n    logger = (Category category)\n        => JDKLoggerImpl(JDKLogger.getLogger(category.qualifiedName));")];};
ex$.$mod$imps=function(){return{
'ceylon.collection/1.1.0':[]
};};
ex$.$pkg$ans$ceylon$logging=function(){return[m$1.shared()];};
function Priority(string,$3pq,priority$){
    $init$Priority();
    if(priority$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    priority$.$$targs$$={Other$Comparable:{t:Priority}};
    priority$.string_=string;
    priority$.$3pq_=$3pq;
    m$1.Comparable({Other$Comparable:{t:Priority}},priority$);
    priority$.$prop$getString={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Priority,pa:3,an:function(){return[m$1.doc("The name of this priority.")];},d:['ceylon.logging','Priority','$at','string']};}};
    priority$.$prop$getString.get=function(){return string};
    priority$.$prop$get$3pq={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Priority,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Priority:$at:integer$cyjscj')];},d:['ceylon.logging','Priority','$at','integer$cyjscj']};}};
    priority$.$prop$get$3pq.get=function(){return $3pq};
    return priority$;
}
Priority.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String},pa:3,an:function(){return[m$1.doc("The name of this priority.")];}},{nm:'integer',mt:'prm',$t:{t:m$1.Integer},an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Priority:$at:integer$cyjscj')];}}],sts:[{t:m$1.Comparable,a:{Other$Comparable:{t:Priority}}}],of:[$prop$getFatal,$prop$getError,$prop$getWarn,$prop$getInfo,$prop$getDebug,$prop$getTrace],pa:257,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Priority')];},d:['ceylon.logging','Priority']};};
ex$.Priority=Priority;
function $init$Priority(){
    if(Priority.$$===undefined){
        m$1.initTypeProto(Priority,'ceylon.logging::Priority',m$1.Basic,m$1.Comparable);
        (function(priority$){
            m$1.atr$(priority$,'string',function(){return this.string_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:Priority,pa:3,an:function(){return[m$1.doc("The name of this priority.")];},d:['ceylon.logging','Priority','$at','string']};});
            m$1.atr$(priority$,'$3pq',function(){return this.$3pq_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Priority,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:Priority:$at:integer$cyjscj')];},d:['ceylon.logging','Priority','$at','integer$cyjscj']};});
            priority$.compare=function($3pr){
                var priority$=this;
                return priority$.$3pq.compare($3pr.$3pq);
            };
        })(Priority.$$.prototype);
    }
    return Priority;
}
ex$.$init$Priority=$init$Priority;
$init$Priority();
function $3ps(){
    var fatal$=new $3ps.$$;Priority("FATAL",100,fatal$);
    return fatal$;
};$3ps.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:fatal')];},d:['ceylon.logging','fatal']};};
function $init$getFatal(){
    if($3ps.$$===undefined){
        m$1.initTypeProto($3ps,'ceylon.logging::fatal',$init$Priority());
    }
    return $3ps;
}
ex$.$init$getFatal=$init$getFatal;
$init$getFatal();
var $3pt;
function getFatal(){
    if($3pt===undefined){$3pt=$init$getFatal()();$3pt.$crtmm$=getFatal.$crtmm$;}
    return $3pt;
}
ex$.getFatal=getFatal;
getFatal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3ps},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:fatal')];},d:['ceylon.logging','fatal']};};
$prop$getFatal={get:getFatal,$crtmm$:getFatal.$crtmm$};
getFatal=getFatal;$prop$getFatal=getFatal;
ex$.$prop$getFatal=$prop$getFatal;
function $3pu(){
    var error$=new $3pu.$$;Priority("ERROR",90,error$);
    return error$;
};$3pu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:error')];},d:['ceylon.logging','error']};};
function $init$getError(){
    if($3pu.$$===undefined){
        m$1.initTypeProto($3pu,'ceylon.logging::error',$init$Priority());
    }
    return $3pu;
}
ex$.$init$getError=$init$getError;
$init$getError();
var $3pv;
function getError(){
    if($3pv===undefined){$3pv=$init$getError()();$3pv.$crtmm$=getError.$crtmm$;}
    return $3pv;
}
ex$.getError=getError;
getError.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3pu},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:error')];},d:['ceylon.logging','error']};};
$prop$getError={get:getError,$crtmm$:getError.$crtmm$};
getError=getError;$prop$getError=getError;
ex$.$prop$getError=$prop$getError;
function $3pw(){
    var warn$=new $3pw.$$;Priority("WARN",80,warn$);
    return warn$;
};$3pw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:warn')];},d:['ceylon.logging','warn']};};
function $init$getWarn(){
    if($3pw.$$===undefined){
        m$1.initTypeProto($3pw,'ceylon.logging::warn',$init$Priority());
    }
    return $3pw;
}
ex$.$init$getWarn=$init$getWarn;
$init$getWarn();
var $3px;
function getWarn(){
    if($3px===undefined){$3px=$init$getWarn()();$3px.$crtmm$=getWarn.$crtmm$;}
    return $3px;
}
ex$.getWarn=getWarn;
getWarn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3pw},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:warn')];},d:['ceylon.logging','warn']};};
$prop$getWarn={get:getWarn,$crtmm$:getWarn.$crtmm$};
getWarn=getWarn;$prop$getWarn=getWarn;
ex$.$prop$getWarn=$prop$getWarn;
function $3py(){
    var info$=new $3py.$$;Priority("INFO",70,info$);
    return info$;
};$3py.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:info')];},d:['ceylon.logging','info']};};
function $init$getInfo(){
    if($3py.$$===undefined){
        m$1.initTypeProto($3py,'ceylon.logging::info',$init$Priority());
    }
    return $3py;
}
ex$.$init$getInfo=$init$getInfo;
$init$getInfo();
var $3pz;
function getInfo(){
    if($3pz===undefined){$3pz=$init$getInfo()();$3pz.$crtmm$=getInfo.$crtmm$;}
    return $3pz;
}
ex$.getInfo=getInfo;
getInfo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3py},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:info')];},d:['ceylon.logging','info']};};
$prop$getInfo={get:getInfo,$crtmm$:getInfo.$crtmm$};
getInfo=getInfo;$prop$getInfo=getInfo;
ex$.$prop$getInfo=$prop$getInfo;
function $3q0(){
    var debug$=new $3q0.$$;Priority("DEBUG",60,debug$);
    return debug$;
};$3q0.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:debug')];},d:['ceylon.logging','debug']};};
function $init$getDebug(){
    if($3q0.$$===undefined){
        m$1.initTypeProto($3q0,'ceylon.logging::debug',$init$Priority());
    }
    return $3q0;
}
ex$.$init$getDebug=$init$getDebug;
$init$getDebug();
var $3q1;
function getDebug(){
    if($3q1===undefined){$3q1=$init$getDebug()();$3q1.$crtmm$=getDebug.$crtmm$;}
    return $3q1;
}
ex$.getDebug=getDebug;
getDebug.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3q0},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:debug')];},d:['ceylon.logging','debug']};};
$prop$getDebug={get:getDebug,$crtmm$:getDebug.$crtmm$};
getDebug=getDebug;$prop$getDebug=getDebug;
ex$.$prop$getDebug=$prop$getDebug;
function $3q2(){
    var trace$=new $3q2.$$;Priority("FINE",50,trace$);
    return trace$;
};$3q2.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Priority},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:trace')];},d:['ceylon.logging','trace']};};
function $init$getTrace(){
    if($3q2.$$===undefined){
        m$1.initTypeProto($3q2,'ceylon.logging::trace',$init$Priority());
    }
    return $3q2;
}
ex$.$init$getTrace=$init$getTrace;
$init$getTrace();
var $3q3;
function getTrace(){
    if($3q3===undefined){$3q3=$init$getTrace()();$3q3.$crtmm$=getTrace.$crtmm$;}
    return $3q3;
}
ex$.getTrace=getTrace;
getTrace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$3q2},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:trace')];},d:['ceylon.logging','trace']};};
$prop$getTrace={get:getTrace,$crtmm$:getTrace.$crtmm$};
getTrace=getTrace;$prop$getTrace=getTrace;
ex$.$prop$getTrace=$prop$getTrace;
var $3q4;function $valinit$$3q4(){if($3q4===undefined)$3q4=getInfo();return $3q4;};$valinit$$3q4();
function getDefaultPriority(){return $valinit$$3q4();}
ex$.getDefaultPriority=getDefaultPriority;
function setDefaultPriority($3q5){return $3q4=$3q5;};
ex$.setDefaultPriority=setDefaultPriority;
var $prop$getDefaultPriority={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Priority},pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.logging:defaultPriority')];},d:['ceylon.logging','defaultPriority']};}};
ex$.$prop$getDefaultPriority=$prop$getDefaultPriority;
$prop$getDefaultPriority.get=getDefaultPriority;
getDefaultPriority.$crtmm$=$prop$getDefaultPriority.$crtmm$;
$prop$getDefaultPriority.set=setDefaultPriority;
if(setDefaultPriority.$crtmm$===undefined)setDefaultPriority.$crtmm$=$prop$getDefaultPriority.$crtmm$;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
