(function(define) { define(function(require, ex$, module) {

var _CTM$;function $CCMM$(){if (_CTM$===undefined)_CTM$=require('ceylon/collection/1.1.0/ceylon.collection-1.1.0-model').$CCMM$;return _CTM$;}
ex$.$CCMM$=$CCMM$;
var m$1=require('ceylon/language/1.1.0/ceylon.language-1.1.0');
m$1.$addmod$(m$1,'ceylon.language/1.1.0');
function ArrayList($2,$3,$4,$$targs$$,arrayList$){
    $init$ArrayList();
    if(arrayList$===undefined)arrayList$=new ArrayList.$$;
    m$1.set_type_args(arrayList$,$$targs$$);
    if($2===undefined){$2=(0);}
    arrayList$.$2_=$2;
    if($3===undefined){$3=m$1.Float(1.5);}
    arrayList$.$3_=$3;
    if($4===undefined){$4=m$1.getEmpty();}
    arrayList$.$4_=$4;
    MutableList({Element$MutableList:$$targs$$.Element$ArrayList},arrayList$);
    Stack({Element$Stack:$$targs$$.Element$ArrayList},arrayList$);
    Queue({Element$Queue:$$targs$$.Element$ArrayList},arrayList$);
    arrayList$.$prop$get$2={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};}};
    arrayList$.$prop$get$2.get=function(){return $2};
    arrayList$.$prop$get$3={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};}};
    arrayList$.$prop$get$3.get=function(){return $3};
    arrayList$.$prop$get$4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},$cont:ArrayList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','ArrayList','$at','elements$thp018']};}};
    arrayList$.$prop$get$4.get=function(){return $4};
    m$1.asrt$(((arrayList$.$2>=0)),"initial capacity cannot be negative: \'initialCapacity >= 0\' at ArrayList.ceylon (34:11-34:32)",'33:4-34:33','ArrayList.ceylon');
    m$1.asrt$(((arrayList$.$2<=m$1.getRuntime().maxArraySize)),"initial capacity too large: \'initialCapacity <= runtime.maxArraySize\' at ArrayList.ceylon (37:11-37:51)",'36:4-37:52','ArrayList.ceylon');
    m$1.asrt$(((arrayList$.$3.compare(m$1.Float(1.0))!==m$1.getSmaller())),"growth factor must be at least 1.0: \'growthFactor >= 1.0\' at ArrayList.ceylon (40:11-40:31)",'39:4-40:32','ArrayList.ceylon');
    arrayList$.$5_=m$1.$_Array(arrayList$.$4,{Element$Array:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}});
    arrayList$.$prop$get$5={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','array$i32poi']};}};
    arrayList$.$prop$get$5.get=function(){return $5};
    arrayList$.$6_=arrayList$.$5.size;
    arrayList$.$prop$get$6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','length$u7by4j']};}};
    arrayList$.$prop$get$6.get=function(){return $6};
    m$1.atr$(arrayList$,'size',function(){
        return arrayList$.$6;
    },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
    if((arrayList$.$6<arrayList$.$2)){
        var $7=arrayList$.$8(arrayList$.$2);
        $prop$get$7={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,d:['ceylon.collection','ArrayList','$at','newArray$k8tsh']};}};
        $prop$get$7.get=function(){return $7};
        arrayList$.$5.copyTo($7,0,0,arrayList$.$6);
        arrayList$.$5=$7;
    }
    arrayList$.$prop$getCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};}};
    arrayList$.$prop$getCapacity.get=function(){return capacity};
    arrayList$.measure=function($9,$a){
        return arrayList$.span(($b=measureToSpan($9,$a).sequence(),$b.$_get(0)),$b.$_get(1));
    };
    arrayList$.deleteMeasure=function($c,$d){
        return arrayList$.deleteSpan(($e=measureToSpan($c,$d).sequence(),$e.$_get(0)),$e.$_get(1));
    };
    arrayList$.spanFrom=function($f){
        return ($g=(($f>=arrayList$.$6)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($g)?$g:arrayList$.span($f,arrayList$.$6.minus(1)));
    };
    var $g;
    arrayList$.spanTo=function($h){
        return ($i=(($h<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($i)?$i:arrayList$.span(0,$h));
    };
    var $i;
    m$1.atr$(arrayList$,'lastIndex',function(){
        return ((arrayList$.$6>=1)?arrayList$.$6.minus(1):null);
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
    arrayList$.equals=function($j){
        return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(this,$j);
    };
    m$1.atr$(arrayList$,'hash',function(){
        return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
    },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
    arrayList$.clone=function(){
        return ArrayList(arrayList$.size,arrayList$.$3,arrayList$,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});
    };
    arrayList$.$_push=function($k){
        return arrayList$.add($k);
    };
    arrayList$.$_pop=function(){
        return arrayList$.deleteLast();
    };
    m$1.atr$(arrayList$,'top',function(){
        return arrayList$.last;
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
    arrayList$.offer=function($l){
        return arrayList$.add($l);
    };
    arrayList$.accept=function(){
        return arrayList$.deleteFirst();
    };
    m$1.atr$(arrayList$,'back',function(){
        return arrayList$.last;
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
    m$1.atr$(arrayList$,'front',function(){
        return arrayList$.first;
    },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
    return arrayList$;
}
ArrayList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$ArrayList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$ArrayList'}},{t:Stack,a:{Element$Stack:'Element$ArrayList'}},{t:Queue,a:{Element$Queue:'Element$ArrayList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','ArrayList']};};
ex$.ArrayList=ArrayList;
function $init$ArrayList(){
    if(ArrayList.$$===undefined){
        m$1.initTypeProto(ArrayList,'ceylon.collection::ArrayList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
        (function(arrayList$){
            m$1.atr$(arrayList$,'$2',function(){return this.$2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','ArrayList','$at','initialCapacity$28ur5n']};});
            m$1.atr$(arrayList$,'$3',function(){return this.$3_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:growthFactor$yahbl9')];},d:['ceylon.collection','ArrayList','$at','growthFactor$yahbl9']};});
            m$1.atr$(arrayList$,'$4',function(){return this.$4_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}},$cont:ArrayList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','ArrayList','$at','elements$thp018']};});
            arrayList$.$8=function($m){
                var arrayList$=this;
                return m$1.arrayOfSize($m,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},arrayList$.$$targs$$.Element$ArrayList]}});
            };
            arrayList$.$8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','store$4f5qdi']};};
            m$1.atr$(arrayList$,'$5',function(){return this.$5_;},function($n){return this.$5_=$n;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','array$i32poi']};});
            m$1.atr$(arrayList$,'$6',function(){return this.$6_;},function($o){return this.$6_=$o;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1027,d:['ceylon.collection','ArrayList','$at','length$u7by4j']};});
            m$1.atr$(arrayList$,'size',function(){
                var arrayList$=this;
                return arrayList$.$6;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','size']};});
            arrayList$.$p=function($q){
                var arrayList$=this;
                var $r=arrayList$.$6.plus($q);
                var $s=m$1.getRuntime().maxArraySize;
                if(($r>$s)){
                    throw m$1.wrapexc(m$1.OverflowException(),'61:12-61:37','ceylon/collection/ArrayList.ceylon');
                }
                if(($r>arrayList$.$5.size)){
                    var $t=$r.times(arrayList$.$3).integer;
                    var $u=($v=((($t<$r)||($t>$s))?$s:null),m$1.nn$($v)?$v:$t);
                    var $v;
                    var $w=arrayList$.$8($u);
                    arrayList$.$5.copyTo($w);
                    arrayList$.$5=$w;
                }
            };arrayList$.$p.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,d:['ceylon.collection','ArrayList','$m','grow$67gtuw']};};
            arrayList$.add=function($x){
                var arrayList$=this;
                arrayList$.$p(1);
                arrayList$.$5.set(($y=arrayList$.$6,arrayList$.$6=$y.successor,$y),$x);
                var $y;
            };arrayList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','add']};};
            arrayList$.addAll=function($z){
                var arrayList$=this;
                arrayList$.$p($z.size);
                var $11;for(var $10=$z.iterator();($11=$10.next())!==m$1.getFinished();){
                    arrayList$.$5.set(($12=arrayList$.$6,arrayList$.$6=$12.successor,$12),$11);
                    var $12;
                }
            };arrayList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ArrayList'}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','addAll']};};
            arrayList$.clear=function(){
                var arrayList$=this;
                arrayList$.$6=(0);
                arrayList$.$5=arrayList$.$8(arrayList$.$2);
            };arrayList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','clear']};};
            m$1.atr$(arrayList$,'capacity',function(){
                var arrayList$=this;
                return arrayList$.$5.size;
            },function($13){
                var arrayList$=this;
                m$1.asrt$((($13>=arrayList$.size)),"capacity must be at least as large as list size: \'capacity >= size\' at ArrayList.ceylon (99:15-99:32)",'98:8-99:33','ArrayList.ceylon');
                m$1.asrt$((($13<=m$1.getRuntime().maxArraySize)),"capacity too large: \'capacity <= runtime.maxArraySize\' at ArrayList.ceylon (101:15-101:48)",'100:8-101:49','ArrayList.ceylon');
                var $14=arrayList$.$8($13);
                $prop$get$14={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:{setter:arrayList$.$prop$getCapacity.set},d:['ceylon.collection','ArrayList','$at','capacity','$set','$at','resized$igciy5']};}};
                $prop$get$14.get=function(){return $14};
                arrayList$.$5.copyTo($14,0,0,arrayList$.$6);
                arrayList$.$5=$14;
            },function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:1025,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity')];},d:['ceylon.collection','ArrayList','$at','capacity']};},function(){return{mod:$CCMM$,$t:{t:m$1.Anything},$cont:ArrayList,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ArrayList:$at:capacity:$set')];},d:['ceylon.collection','ArrayList','$at','capacity','$set']};});
            arrayList$.getFromFirst=function($15){
                var arrayList$=this;
                if(($16=$15,$16.compare((0))!==m$1.getSmaller()&&$16.compare(arrayList$.$6)===m$1.getSmaller())){
                    return arrayList$.$5.getFromFirst($15);
                }else {
                    return null;
                }
            };arrayList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','getFromFirst']};};
            arrayList$.iterator=function(){
                var arrayList$=this;
                function $17($$targs$$){
                    var $17$=new $17.$$;$17$.outer$=arrayList$;
                    $17$.$$targs$$=$$targs$$;
                    m$1.Iterator({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList},$17$);
                    $17$.$18_=(0);
                    $17$.$prop$get$18={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$17,pa:1024,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','index$ciz003']};}};
                    $17$.$prop$get$18.get=function(){return $18};
                    $17$.$19_=arrayList$.$5.iterator();
                    $17$.$prop$get$19={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:$17,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','arrayIterator$wkszna']};}};
                    $17$.$prop$get$19.get=function(){return $19};
                    return $17$;
                };$17.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:arrayList$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}}],d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4']};};
                function $init$$17(){
                    if($17.$$===undefined){
                        m$1.initTypeProto($17,'ceylon.collection::ArrayList.iterator',m$1.Basic,m$1.Iterator);
                        (function($17$){
                            m$1.atr$($17$,'$18',function(){return this.$18_;},function($1a){return this.$18_=$1a;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$17,pa:1024,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','index$ciz003']};});
                            m$1.atr$($17$,'$19',function(){return this.$19_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']}}},$cont:$17,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$at','arrayIterator$wkszna']};});
                            $17$.next=function(){
                                var $17$=this;
                                if((($1b=$17$.$18,$17$.$18=$1b.successor,$1b)<arrayList$.$6)){
                                    var $1c;
                                    if(m$1.nn$(($1c=$17$.$19.next()))){
                                        return $1c;
                                    }else {
                                        var $1d;
                                        m$1.asrt$((m$1.is$(($1d=null),arrayList$.$$targs$$.Element$ArrayList)),"Assertion failed: \'is Element null\' at ArrayList.ceylon (126:31-126:47)",'126:24-126:48','ArrayList.ceylon');
                                        return $1d;
                                    }
                                }else {
                                    return m$1.getFinished();
                                }
                                var $1b;
                            };$17$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Finished},'Element$ArrayList']},ps:[],$cont:$17,pa:3,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb4','$m','next']};};
                        })($17.$$.prototype);
                    }
                    return $17;
                }
                $init$$17();
                var $1e;
                function get$1e(){
                    if($1e===undefined){$1e=$init$$17()({Element$Iterator:arrayList$.$$targs$$.Element$ArrayList});$1e.$crtmm$=get$1e.$crtmm$;}
                    return $1e;
                }
                get$1e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$17},$cont:arrayList$.iterator,d:['ceylon.collection','ArrayList','$m','iterator','$o','iterator$uwzcb3']};};
                $prop$get$1e={get:get$1e,$crtmm$:get$1e.$crtmm$};
                get$17=get$1e;$prop$get$17=get$1e;
                return get$1e();
            };arrayList$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$ArrayList'}},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','iterator']};};
            arrayList$.insert=function($1f,$1g){
                var arrayList$=this;
                m$1.asrt$((($1h=$1f,$1h.compare((0))!==m$1.getSmaller()&&$1h.compare(arrayList$.$6)!==m$1.getLarger())),"index may not be negative or greater than the\nlength of the list: \'0 <= index <= length\' at ArrayList.ceylon (141:15-141:36)",'139:8-141:37','ArrayList.ceylon');
                arrayList$.$p(1);
                if(($1f<arrayList$.$6)){
                    arrayList$.$5.copyTo(arrayList$.$5,$1f,$1f.plus(1),arrayList$.$6.minus($1f));
                }
                ($1i=arrayList$.$6,arrayList$.$6=$1i.successor,$1i);
                var $1i;
                arrayList$.$5.set($1f,$1g);
            };arrayList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','insert']};};
            arrayList$.$_delete=function($1j){
                var arrayList$=this;
                if(($1k=$1j,$1k.compare((0))!==m$1.getSmaller()&&$1k.compare(arrayList$.$6)===m$1.getSmaller())){
                    var $1l=arrayList$.$5.$_get($1j);
                    arrayList$.$5.copyTo(arrayList$.$5,$1j.plus(1),$1j,arrayList$.$6.minus($1j).minus(1));
                    ($1m=arrayList$.$6,arrayList$.$6=$1m.predecessor,$1m);
                    var $1m;
                    arrayList$.$5.set(arrayList$.$6,null);
                    return $1l;
                }else {
                    return null;
                }
            };arrayList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','delete']};};
            arrayList$.remove=function($1n){
                var arrayList$=this;
                var $1o=(0);
                function set$1o($1p){return $1o=$1p;};
                var $1q=(0);
                function set$1q($1r){return $1q=$1r;};
                while(($1o<arrayList$.$6)){
                    var $1s;
                    if(m$1.nn$(($1s=arrayList$.$5.$_get(($1t=$1o,$1o=$1t.successor,$1t))))){
                        if((!$1s.equals($1n))){
                            arrayList$.$5.set(($1u=$1q,$1q=$1u.successor,$1u),$1s);
                            var $1u;
                        }
                    }else {
                        arrayList$.$5.set(($1v=$1q,$1q=$1v.successor,$1v),null);
                        var $1v;
                    }
                    var $1t;
                }
                arrayList$.$6=$1q;
                while(($1q<$1o)){
                    arrayList$.$5.set(($1w=$1q,$1q=$1w.successor,$1w),null);
                    var $1w;
                }
            };arrayList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','remove']};};
            arrayList$.removeAll=function($1x){
                var arrayList$=this;
                var $1y=(0);
                function set$1y($1z){return $1y=$1z;};
                var $20=(0);
                function set$20($21){return $20=$21;};
                while(($1y<arrayList$.$6)){
                    var $22;
                    if(m$1.nn$(($22=arrayList$.$5.$_get(($23=$1y,$1y=$23.successor,$23))))){
                        if(!$1x.contains($22)){
                            arrayList$.$5.set(($24=$20,$20=$24.successor,$24),$22);
                            var $24;
                        }
                    }else {
                        arrayList$.$5.set(($25=$20,$20=$25.successor,$25),null);
                        var $25;
                    }
                    var $23;
                }
                arrayList$.$6=$20;
                while(($20<$1y)){
                    arrayList$.$5.set(($26=$20,$20=$26.successor,$26),null);
                    var $26;
                }
            };arrayList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeAll']};};
            arrayList$.removeFirst=function($27){
                var arrayList$=this;
                var $28;
                if(m$1.nn$(($28=arrayList$.firstOccurrence($27)))){
                    arrayList$.$_delete($28);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeFirst']};};
            arrayList$.removeLast=function($29){
                var arrayList$=this;
                var $2a;
                if(m$1.nn$(($2a=arrayList$.lastOccurrence($29)))){
                    arrayList$.$_delete($2a);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','removeLast']};};
            arrayList$.prune=function(){
                var arrayList$=this;
                var $2b=(0);
                function set$2b($2c){return $2b=$2c;};
                var $2d=(0);
                function set$2d($2e){return $2d=$2e;};
                while(($2b<arrayList$.$6)){
                    var $2f;
                    if(m$1.nn$(($2f=arrayList$.$5.$_get(($2g=$2b,$2b=$2g.successor,$2g))))){
                        arrayList$.$5.set(($2h=$2d,$2d=$2h.successor,$2h),$2f);
                        var $2h;
                    }
                    var $2g;
                }
                arrayList$.$6=$2d;
                while(($2d<$2b)){
                    arrayList$.$5.set(($2i=$2d,$2d=$2i.successor,$2i),null);
                    var $2i;
                }
            };arrayList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','prune']};};
            arrayList$.$_replace=function($2j,$2k){
                var arrayList$=this;
                var $2l=(0);
                function set$2l($2m){return $2l=$2m;};
                while(($2l<arrayList$.$6)){
                    var $2n;
                    if(m$1.nn$(($2n=arrayList$.$5.$_get($2l)))&&$2n.equals($2j)){
                        arrayList$.$5.set($2l,$2k);
                    }
                    ($2o=$2l,$2l=$2o.successor,$2o);
                    var $2o;
                }
            };arrayList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replace']};};
            arrayList$.replaceFirst=function($2p,$2q){
                var arrayList$=this;
                var $2r;
                if(m$1.nn$(($2r=arrayList$.firstOccurrence($2p)))){
                    arrayList$.set($2r,$2q);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceFirst']};};
            arrayList$.replaceLast=function($2s,$2t){
                var arrayList$=this;
                var $2u;
                if(m$1.nn$(($2u=arrayList$.lastOccurrence($2s)))){
                    arrayList$.set($2u,$2t);
                    return true;
                }else {
                    return false;
                }
            };arrayList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ArrayList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','replaceLast']};};
            arrayList$.infill=function($2v){
                var arrayList$=this;
                var $2w=(0);
                function set$2w($2x){return $2w=$2x;};
                while(($2w<arrayList$.$6)){
                    if(!m$1.nn$(arrayList$.$5.$_get($2w))){
                        arrayList$.$5.set($2w,$2v);
                    }
                    ($2y=$2w,$2w=$2y.successor,$2y);
                    var $2y;
                }
            };arrayList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','infill']};};
            m$1.atr$(arrayList$,'first',function(){
                var arrayList$=this;
                if((arrayList$.$6>0)){
                    return arrayList$.$5.$_get(0);
                }else {
                    return null;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','first']};});arrayList$.set=function($2z,$30){
                var arrayList$=this;
                m$1.asrt$((($31=$2z,$31.compare((0))!==m$1.getSmaller()&&$31.compare(arrayList$.$6)===m$1.getSmaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at ArrayList.ceylon (290:15-290:31)",'288:8-290:32','ArrayList.ceylon');
                arrayList$.$5.set($2z,$30);
            };arrayList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ArrayList'}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','set']};};
            arrayList$.span=function($32,$33){
                var arrayList$=this;
                var $34=spanToMeasure($32,$33,arrayList$.$6);
                var $35=$34.$_get(0);
                var $36=$34.$_get(1);
                var $37=$34.$_get(2);
                var $38=($39=$36,$3a=arrayList$.$3,$3b=arrayList$.skip($35).take($36),ArrayList($39,$3a,$3b,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList}));
                var $39,$3a,$3b;
                return ($3c=($37?$38.reversed:null),m$1.nn$($3c)?$3c:$38);
                var $3c;
            };arrayList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$ArrayList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','span']};};
            arrayList$.deleteSpan=function($3d,$3e){
                var arrayList$=this;
                var $3f=spanToMeasure($3d,$3e,arrayList$.$6);
                var $3g=$3f.$_get(0);
                var $3h=$3f.$_get(1);
                if((($3g<arrayList$.$6)&&($3h>0))){
                    var $3i=$3g.plus($3h);
                    arrayList$.$5.copyTo(arrayList$.$5,$3i,$3g,arrayList$.$6.minus($3i));
                    var $3j=arrayList$.$6.minus($3h);
                    function set$3j($3k){return $3j=$3k;};
                    while(($3j<arrayList$.$6)){
                        arrayList$.$5.set(($3l=$3j,$3j=$3l.successor,$3l),null);
                        var $3l;
                    }
                    (arrayList$.$6=arrayList$.$6.minus($3h));
                }
            };arrayList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','deleteSpan']};};
            arrayList$.measure=function($9,$a){
                var arrayList$=this;
                return arrayList$.span(($3m=measureToSpan($9,$a).sequence(),$3m.$_get(0)),$3m.$_get(1));
            };arrayList$.deleteMeasure=function($c,$d){
                var arrayList$=this;
                return arrayList$.deleteSpan(($3n=measureToSpan($c,$d).sequence(),$3n.$_get(0)),$3n.$_get(1));
            };arrayList$.truncate=function($3o){
                var arrayList$=this;
                m$1.asrt$((($3o>=0)),"Assertion failed: \'size >= 0\' at ArrayList.ceylon (330:15-330:25)",'330:8-330:26','ArrayList.ceylon');
                if(($3o<arrayList$.$6)){
                    var $3p=$3o;
                    function set$3p($3q){return $3p=$3q;};
                    while(($3p<arrayList$.$6)){
                        arrayList$.$5.set(($3r=$3p,$3p=$3r.successor,$3r),null);
                        var $3r;
                    }
                    arrayList$.$6=$3o;
                }
            };arrayList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$m','truncate']};};
            arrayList$.spanFrom=function($f){
                var arrayList$=this;
                return ($3s=(($f>=arrayList$.$6)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($3s)?$3s:arrayList$.span($f,arrayList$.$6.minus(1)));
            };arrayList$.spanTo=function($h){
                var arrayList$=this;
                return ($3t=(($h<0)?ArrayList(undefined,undefined,undefined,{Element$ArrayList:{t:m$1.Nothing}}):null),m$1.nn$($3t)?$3t:arrayList$.span(0,$h));
            };m$1.atr$(arrayList$,'lastIndex',function(){
                var arrayList$=this;
                return ((arrayList$.$6>=1)?arrayList$.$6.minus(1):null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','lastIndex']};});
            arrayList$.equals=function($j){
                var arrayList$=this;
                return arrayList$.getT$all()['ceylon.language::List'].$$.prototype.equals.call(this,$j);
            };m$1.atr$(arrayList$,'hash',function(){
                var arrayList$=this;
                return m$1.attrGetter(arrayList$.getT$all()['ceylon.language::List'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','hash']};});
            arrayList$.clone=function(){
                var arrayList$=this;
                return ArrayList(arrayList$.size,arrayList$.$3,arrayList$,{Element$ArrayList:arrayList$.$$targs$$.Element$ArrayList});
            };arrayList$.$_push=function($k){
                var arrayList$=this;
                return arrayList$.add($k);
            };arrayList$.$_pop=function(){
                var arrayList$=this;
                return arrayList$.deleteLast();
            };m$1.atr$(arrayList$,'top',function(){
                var arrayList$=this;
                return arrayList$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','top']};});
            arrayList$.offer=function($l){
                var arrayList$=this;
                return arrayList$.add($l);
            };arrayList$.accept=function(){
                var arrayList$=this;
                return arrayList$.deleteFirst();
            };m$1.atr$(arrayList$,'back',function(){
                var arrayList$=this;
                return arrayList$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','back']};});
            m$1.atr$(arrayList$,'front',function(){
                var arrayList$=this;
                return arrayList$.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$ArrayList']},$cont:ArrayList,pa:3,d:['ceylon.collection','ArrayList','$at','front']};});
        })(ArrayList.$$.prototype);
    }
    return ArrayList;
}
ex$.$init$ArrayList=$init$ArrayList;
$init$ArrayList();
var $3s,$3t;
function Cell(element,rest,$$targs$$,cell$){
    $init$Cell();
    if(cell$===undefined)cell$=new Cell.$$;
    m$1.set_type_args(cell$,$$targs$$);
    cell$.element_=element;
    cell$.rest_=rest;
    cell$.$prop$getElement={$crtmm$:function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};}};
    cell$.$prop$getElement.get=function(){return element};
    cell$.$prop$getRest={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};}};
    cell$.$prop$getRest.get=function(){return rest};
    return cell$;
}
Cell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'element',mt:'prm',$t:'Element$Cell',pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},pa:1025,an:function(){return[m$1.doc("The next link in the list.")];}}],tp:{Element$Cell:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Cell')];},d:['ceylon.collection','Cell']};};
function $init$Cell(){
    if(Cell.$$===undefined){
        m$1.initTypeProto(Cell,'ceylon.collection::Cell',m$1.Basic);
        (function(cell$){
            m$1.atr$(cell$,'element',function(){return this.element_;},function($3u){return this.element_=$3u;},function(){return{mod:$CCMM$,$t:'Element$Cell',$cont:Cell,pa:1025,an:function(){return[m$1.doc("The element belonging to this link.")];},d:['ceylon.collection','Cell','$at','element']};});
            m$1.atr$(cell$,'rest',function(){return this.rest_;},function($3v){return this.rest_=$3v;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$Cell'}}]},$cont:Cell,pa:1025,an:function(){return[m$1.doc("The next link in the list.")];},d:['ceylon.collection','Cell','$at','rest']};});
            cell$.clone=function(){
                var cell$=this;
                return Cell(cell$.element,($3w=cell$.rest,m$1.JsCallable($3w,m$1.nn$($3w)?$3w.clone:null))(),{Element$Cell:cell$.$$targs$$.Element$Cell});
            };
            cell$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$Cell'}},ps:[],$cont:Cell,pa:1,d:['ceylon.collection','Cell','$m','clone']};};
        })(Cell.$$.prototype);
    }
    return Cell;
}
ex$.$init$Cell=$init$Cell;
$init$Cell();
var $3w;
function CellIterator($3x,$$targs$$,cellIterator$){
    $init$CellIterator();
    if(cellIterator$===undefined)cellIterator$=new CellIterator.$$;
    m$1.set_type_args(cellIterator$,$$targs$$);
    cellIterator$.$3x_=$3x;
    m$1.Iterator({Element$Iterator:$$targs$$.Element$CellIterator},cellIterator$);
    cellIterator$.$prop$get$3x={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};}};
    cellIterator$.$prop$get$3x.get=function(){return $3x};
    return cellIterator$;
}
CellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},pa:1024}],tp:{Element$CellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$CellIterator'}}],d:['ceylon.collection','CellIterator']};};
function $init$CellIterator(){
    if(CellIterator.$$===undefined){
        m$1.initTypeProto(CellIterator,'ceylon.collection::CellIterator',m$1.Basic,m$1.Iterator);
        (function(cellIterator$){
            m$1.atr$(cellIterator$,'$3x',function(){return this.$3x_;},function($3y){return this.$3x_=$3y;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$CellIterator'}}]},$cont:CellIterator,pa:1024,d:['ceylon.collection','CellIterator','$at','iter$5t8f0a']};});
            cellIterator$.next=function(){
                var cellIterator$=this;
                var $3z;
                if(m$1.nn$(($3z=cellIterator$.$3x))){
                    (cellIterator$.$3x=$3z.rest);
                    return $3z.element;
                }
                return m$1.getFinished();
            };cellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$CellIterator',{t:m$1.Finished}]},ps:[],$cont:CellIterator,pa:3,d:['ceylon.collection','CellIterator','$m','next']};};
        })(CellIterator.$$.prototype);
    }
    return CellIterator;
}
ex$.$init$CellIterator=$init$CellIterator;
$init$CellIterator();
function frequencies($40,$$$mptypes){
    var $41=HashMap(undefined,undefined,undefined,{Key$HashMap:$$$mptypes.Element$frequencies,Item$HashMap:{t:Counter}});
    var $43;for(var $42=$40.iterator();($43=$42.next())!==m$1.getFinished();){
        var $44;
        if(m$1.nn$(($44=$41.$_get($43)))){
            ($45=$44,$46=$45.count,$45.count=$46.successor,$46);
            var $45,$46;
        }else {
            $41.put($43,Counter(1));
        }
    }
    return $41.mapItems(m$1.$JsCallable((function($47,$48){
        return $48.count;
    }),[{nm:'e',mt:'prm',$t:'Element$frequencies'},{nm:'c',mt:'prm',$t:{t:Counter}}],{Return$Callable:{t:m$1.Integer},Arguments$Callable:{t:'T',l:[$$$mptypes.Element$frequencies,{t:Counter}]}}),{Result$mapItems:{t:m$1.Integer}});
}
ex$.frequencies=frequencies;
frequencies.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Element$frequencies',Item$Map:{t:m$1.Integer}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$frequencies'}}}],tp:{Element$frequencies:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:frequencies')];},d:['ceylon.collection','frequencies']};};
function Counter(count,counter$){
    $init$Counter();
    if(counter$===undefined)counter$=new Counter.$$;
    counter$.count_=count;
    counter$.$prop$getCount={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};}};
    counter$.$prop$getCount.get=function(){return count};
    return counter$;
}
Counter.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'count',mt:'prm',$t:{t:m$1.Integer},pa:1025}],d:['ceylon.collection','Counter']};};
function $init$Counter(){
    if(Counter.$$===undefined){
        m$1.initTypeProto(Counter,'ceylon.collection::Counter',m$1.Basic);
        (function(counter$){
            m$1.atr$(counter$,'count',function(){return this.count_;},function($49){return this.count_=$49;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Counter,pa:1025,d:['ceylon.collection','Counter','$at','count']};});
        })(Counter.$$.prototype);
    }
    return Counter;
}
ex$.$init$Counter=$init$Counter;
$init$Counter();
function group($4a,$4b,$$$mptypes){
    var $4c=HashMap(undefined,undefined,undefined,{Key$HashMap:$$$mptypes.Group$group,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$$$mptypes.Element$group}}});
    var $4e;for(var $4d=$4a.iterator();($4e=$4d.next())!==m$1.getFinished();){
        var $4f=$4b($4e);
        var $4g;
        if(m$1.nn$(($4g=$4c.$_get($4f)))){
            $4g.add($4e);
        }else {
            var $4h=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Element$group});
            $4h.add($4e);
            $4c.put($4f,$4h);
        }
    }
    function $4i($4j,$4k){
        var $4l;
        m$1.asrt$((m$1.is$(($4l=$4k.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Element$group}})),"Assertion failed: \'is [Element+] result = list.sequence()\' at group.ceylon (30:14-30:53)",'30:8-30:54','group.ceylon');
        return $4l;
    };$4i.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}},ps:[{nm:'group',mt:'prm',$t:'Group$group'},{nm:'list',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Element$group'}}}],$cont:group,d:['ceylon.collection','group','$m','mapping$dp6ds0']};};
    return $4c.mapItems(m$1.JsCallable(0,$4i),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Element$group}}});
}
ex$.group=group;
group.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Group$group',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Element$group'}}}},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$group'}}},{nm:'grouping',mt:'prm',$pt:'f',$t:'Group$group',an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group:$m:grouping$h95l9c')];}}],tp:{Group$group:{sts:[{t:m$1.$_Object}]},Element$group:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:group')];},d:['ceylon.collection','group']};};
function HashMap($4m,$4n,$4o,$$targs$$,hashMap$){
    $init$HashMap();
    if(hashMap$===undefined)hashMap$=new HashMap.$$;
    m$1.set_type_args(hashMap$,$$targs$$);
    if($4m===undefined){$4m=getLinked();}
    hashMap$.$4m_=$4m;
    if($4n===undefined){$4n=Hashtable();}
    hashMap$.$4n_=$4n;
    if($4o===undefined){$4o=m$1.getEmpty();}
    hashMap$.$4o_=$4o;
    MutableMap({Key$MutableMap:$$targs$$.Key$HashMap,Item$MutableMap:$$targs$$.Item$HashMap},hashMap$);
    hashMap$.$prop$get$4m={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};}};
    hashMap$.$prop$get$4m.get=function(){return $4m};
    hashMap$.$prop$get$4o={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};}};
    hashMap$.$prop$get$4o.get=function(){return $4o};
    hashMap$.$prop$get$4n={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};}};
    hashMap$.$prop$get$4n.get=function(){return $4n};
    hashMap$.$4p_=entryStore(hashMap$.$4n.initialCapacity,{Item$entryStore:hashMap$.$$targs$$.Item$HashMap,Key$entryStore:hashMap$.$$targs$$.Key$HashMap});
    hashMap$.$prop$get$4p={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','store$9kaiqz']};}};
    hashMap$.$prop$get$4p.get=function(){return $4p};
    hashMap$.$4q_=(0);
    hashMap$.$prop$get$4q={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','length$g7vp02']};}};
    hashMap$.$prop$get$4q.get=function(){return $4q};
    hashMap$.$4r_=null;
    hashMap$.$prop$get$4r={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','head$7e95fo']};}};
    hashMap$.$prop$get$4r.get=function(){return $4r};
    hashMap$.$4s_=null;
    hashMap$.$prop$get$4s={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','tip$66h29t']};}};
    hashMap$.$prop$get$4s.get=function(){return $4s};
    var $4u;for(var $4t=hashMap$.$4o.iterator();($4u=$4t.next())!==m$1.getFinished();){
        if(hashMap$.$4v(hashMap$.$4p,$4u)){
            ($4w=hashMap$.$4q,hashMap$.$4q=$4w.successor,$4w);
            var $4w;
        }
    }
    hashMap$.$4x();
    return hashMap$;
}
HashMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$HashMap:{sts:[{t:m$1.$_Object}]},Item$HashMap:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap'),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','HashMap']};};
ex$.HashMap=HashMap;
function $init$HashMap(){
    if(HashMap.$$===undefined){
        m$1.initTypeProto(HashMap,'ceylon.collection::HashMap',m$1.Basic,$init$MutableMap());
        (function(hashMap$){
            m$1.atr$(hashMap$,'$4m',function(){return this.$4m_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:stability$b6pnod')];},d:['ceylon.collection','HashMap','$at','stability$b6pnod']};});
            m$1.atr$(hashMap$,'$4o',function(){return this.$4o_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},$cont:HashMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','HashMap','$at','entries$ujasno']};});
            m$1.atr$(hashMap$,'$4n',function(){return this.$4n_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashMap:$at:hashtable$uda49w')];},d:['ceylon.collection','HashMap','$at','hashtable$uda49w']};});
            m$1.atr$(hashMap$,'$4p',function(){return this.$4p_;},function($4y){return this.$4p_=$4y;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','store$9kaiqz']};});
            m$1.atr$(hashMap$,'$4q',function(){return this.$4q_;},function($4z){return this.$4q_=$4z;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','length$g7vp02']};});
            m$1.atr$(hashMap$,'$4r',function(){return this.$4r_;},function($50){return this.$4r_=$50;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','head$7e95fo']};});
            m$1.atr$(hashMap$,'$4s',function(){return this.$4s_;},function($51){return this.$4s_=$51;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:HashMap,pa:1027,d:['ceylon.collection','HashMap','$at','tip$66h29t']};});
            hashMap$.$52=function($53,$54){
                var hashMap$=this;
                return $53.hash.remainder($54.size).magnitude;
            };
            hashMap$.$52.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','storeIndex$e9z3xh']};};
            hashMap$.$55=function($56,$57){
                var hashMap$=this;
                if(hashMap$.$4m.equals(getLinked())){
                    var $58=LinkedCell($56,$57,hashMap$.$4s,{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}});
                    var $59;
                    if(m$1.nn$(($59=hashMap$.$4s))){
                        ($59.next=$58);
                    }
                    hashMap$.$4s=$58;
                    if(!m$1.nn$(hashMap$.$4r)){
                        hashMap$.$4r=$58;
                    }
                    return $58;
                }else {
                    return Cell($56,$57,{Element$Cell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}});
                }
            };hashMap$.$55.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}},ps:[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','createCell$a7w20a']};};
            hashMap$.$5a=function($5b){
                var hashMap$=this;
                if(hashMap$.$4m.equals(getLinked())){
                    var $5c;
                    m$1.asrt$((m$1.is$(($5c=$5b),{t:LinkedCell,a:{Element$LinkedCell:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}})),"Assertion failed: \'is LinkedCell<Key->Item> cell\' at HashMap.ceylon (77:19-77:49)",'77:12-77:50','HashMap.ceylon');
                    var $5d;
                    if(m$1.nn$(($5d=$5c.previous))){
                        ($5d.next=$5c.next);
                    }else {
                        hashMap$.$4r=$5c.next;
                    }
                    var $5e;
                    if(m$1.nn$(($5e=$5c.next))){
                        ($5e.previous=$5c.previous);
                    }else {
                        hashMap$.$4s=$5c.previous;
                    }
                }
            };hashMap$.$5a.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','deleteCell$bxnuyp']};};
            hashMap$.$4v=function($5f,$5g){
                var hashMap$=this;
                var $5h=hashMap$.$52($5g.key,$5f);
                var $5i=$5f.$_get($5h);
                function set$5i($5j){return $5i=$5j;};
                var $5k;
                while(m$1.nn$(($5k=$5i))){
                    if($5k.element.key.equals($5g.key)){
                        ($5k.element=$5g);
                        return false;
                    }
                    $5i=$5k.rest;
                }
                $5f.set($5h,hashMap$.$55($5g,$5f.$_get($5h)));
                return true;
            };hashMap$.$4v.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}],$cont:HashMap,d:['ceylon.collection','HashMap','$m','addToStore$vlhtif']};};
            hashMap$.$4x=function(){
                var hashMap$=this;
                if(hashMap$.$4n.rehash(hashMap$.$4q,hashMap$.$4p.size)){
                    var $5l=entryStore(hashMap$.$4n.capacity(hashMap$.$4q),{Item$entryStore:hashMap$.$$targs$$.Item$HashMap,Key$entryStore:hashMap$.$$targs$$.Key$HashMap});
                    var $5m=(0);
                    function set$5m($5n){return $5m=$5n;};
                    while(($5m<hashMap$.$4p.size)){
                        var $5o=hashMap$.$4p.$_get($5m);
                        function set$5o($5p){return $5o=$5p;};
                        var $5q;
                        while(m$1.nn$(($5q=$5o))){
                            $5o=$5q.rest;
                            var $5r=hashMap$.$52($5q.element.key,$5l);
                            var $5s=$5l.$_get($5r);
                            ($5q.rest=$5s);
                            $5l.set($5r,$5q);
                        }
                        ($5t=$5m,$5m=$5t.successor,$5t);
                        var $5t;
                    }
                    hashMap$.$4p=$5l;
                }
            };hashMap$.$4x.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,d:['ceylon.collection','HashMap','$m','checkRehash$glqfdp']};};
            hashMap$.put=function($5u,$5v){
                var hashMap$=this;
                var $5w=hashMap$.$52($5u,hashMap$.$4p);
                var $5x=m$1.Entry($5u,$5v,{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap});
                var $5y=hashMap$.$4p.$_get($5w);
                function set$5y($5z){return $5y=$5z;};
                var $60;
                while(m$1.nn$(($60=$5y))){
                    if($60.element.key.equals($5u)){
                        var $61=$60.element.item;
                        ($60.element=$5x);
                        return $61;
                    }
                    $5y=$60.rest;
                }
                hashMap$.$4p.set($5w,hashMap$.$55($5x,hashMap$.$4p.$_get($5w)));
                ($62=hashMap$.$4q,hashMap$.$4q=$62.successor,$62);
                var $62;
                hashMap$.$4x();
                return null;
            };hashMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'},{nm:'item',mt:'prm',$t:'Item$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','put']};};
            hashMap$.putAll=function($63){
                var hashMap$=this;
                var $65;for(var $64=$63.iterator();($65=$64.next())!==m$1.getFinished();){
                    if(hashMap$.$4v(hashMap$.$4p,$65)){
                        ($66=hashMap$.$4q,hashMap$.$4q=$66.successor,$66);
                        var $66;
                    }
                }
                hashMap$.$4x();
            };hashMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','putAll']};};
            hashMap$.remove=function($67){
                var hashMap$=this;
                var $68=hashMap$.$52($67,hashMap$.$4p);
                var $69;
                while(m$1.nn$(($69=hashMap$.$4p.$_get($68)))&&$69.element.key.equals($67)){
                    hashMap$.$4p.set($68,$69.rest);
                    ($6a=hashMap$.$4q,hashMap$.$4q=$6a.predecessor,$6a);
                    var $6a;
                    return $69.element.item;
                }
                var $6b=hashMap$.$4p.$_get($68);
                function set$6b($6c){return $6b=$6c;};
                var $6d;
                while(m$1.nn$(($6d=$6b))){
                    var $6e=$6d.rest;
                    var $6f;
                    if(m$1.nn$(($6f=$6e))&&$6f.element.key.equals($67)){
                        ($6d.rest=$6f.rest);
                        hashMap$.$5a($6d);
                        ($6g=hashMap$.$4q,hashMap$.$4q=$6g.predecessor,$6g);
                        var $6g;
                        return $6f.element.item;
                    }else {
                        $6b=$6e;
                    }
                }
                return null;
            };hashMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:'Key$HashMap'}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','remove']};};
            hashMap$.clear=function(){
                var hashMap$=this;
                var $6h=(0);
                function set$6h($6i){return $6h=$6i;};
                while(($6h<hashMap$.$4p.size)){
                    hashMap$.$4p.set(($6j=$6h,$6h=$6j.successor,$6j),null);
                    var $6j;
                }
                hashMap$.$4q=(0);
                hashMap$.$4r=null;
                hashMap$.$4s=null;
            };hashMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clear']};};
            m$1.atr$(hashMap$,'size',function(){
                var hashMap$=this;
                return hashMap$.$4q;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','size']};});
            hashMap$.$_get=function($6k){
                var hashMap$=this;
                if(hashMap$.empty){
                    return null;
                }
                var $6l=hashMap$.$52($6k,hashMap$.$4p);
                var $6m=hashMap$.$4p.$_get($6l);
                function set$6m($6n){return $6m=$6n;};
                var $6o;
                while(m$1.nn$(($6o=$6m))){
                    if($6o.element.key.equals($6k)){
                        return $6o.element.item;
                    }
                    $6m=$6o.rest;
                }
                return null;
            };hashMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$HashMap']},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','get']};};
            m$1.atr$(hashMap$,'first',function(){
                var hashMap$=this;
                if(hashMap$.$4m.equals(getLinked())){
                    return ($6p=hashMap$.$4r,m$1.nn$($6p)?$6p.element:null);
                    var $6p;
                }else {
                    return ($6q=hashMap$.$4p.$_get(0),m$1.nn$($6q)?$6q.element:null);
                    var $6q;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}]},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','first']};});hashMap$.iterator=function(){
                var hashMap$=this;
                return ($6r=(hashMap$.$4m.equals(getLinked())?LinkedCellIterator(hashMap$.$4r,{Element$LinkedCellIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}):null),m$1.nn$($6r)?$6r:StoreIterator(hashMap$.$4p,{Element$StoreIterator:{t:m$1.Entry,a:{Key$Entry:hashMap$.$$targs$$.Key$HashMap,Item$Entry:hashMap$.$$targs$$.Item$HashMap}}}));
            };hashMap$.count=function($6s){
                var hashMap$=this;
                var $6t=(0);
                function set$6t($6u){return $6t=$6u;};
                var $6v=(0);
                function set$6v($6w){return $6v=$6w;};
                while(($6t<hashMap$.$4p.size)){
                    var $6x=hashMap$.$4p.$_get($6t);
                    function set$6x($6y){return $6x=$6y;};
                    var $6z;
                    while(m$1.nn$(($6z=$6x))){
                        if($6s($6z.element)){
                            ($70=$6v,$6v=$70.successor,$70);
                            var $70;
                        }
                        $6x=$6z.rest;
                    }
                    ($71=$6t,$6t=$71.successor,$71);
                    var $71;
                }
                return $6v;
            };hashMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','count']};};
            m$1.atr$(hashMap$,'hash',function(){
                var hashMap$=this;
                var $72=(0);
                function set$72($73){return $72=$73;};
                $prop$get$72={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashMap$.$prop$getHash,pa:1024,d:['ceylon.collection','HashMap','$at','hash','$at','index$ua0xrb']};}};
                $prop$get$72.get=function(){return $72};
                $prop$get$72.set=set$72;
                if(set$72.$crtmm$===undefined)set$72.$crtmm$=$prop$get$72.$crtmm$;
                var $74=(0);
                function set$74($75){return $74=$75;};
                $prop$get$74={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashMap$.$prop$getHash,pa:1024,d:['ceylon.collection','HashMap','$at','hash','$at','hash$wnzjr7']};}};
                $prop$get$74.get=function(){return $74};
                $prop$get$74.set=set$74;
                if(set$74.$crtmm$===undefined)set$74.$crtmm$=$prop$get$74.$crtmm$;
                while(($72<hashMap$.$4p.size)){
                    var $76=hashMap$.$4p.$_get($72);
                    function set$76($77){return $76=$77;};
                    $prop$get$76={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$HashMap',Item$Entry:'Item$HashMap'}}}}]},$cont:hashMap$.$prop$getHash,pa:1027,d:['ceylon.collection','HashMap','$at','hash','$at','bucket$k6f2to']};}};
                    $prop$get$76.get=function(){return $76};
                    $prop$get$76.set=set$76;
                    if(set$76.$crtmm$===undefined)set$76.$crtmm$=$prop$get$76.$crtmm$;
                    var $78;
                    while(m$1.nn$(($78=$76))){
                        ($74=$74.plus($78.element.hash));
                        $76=$78.rest;
                    }
                    ($79=$72,$72=$79.successor,$79);
                    var $79;
                }
                return $74;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$at','hash']};});hashMap$.equals=function($7a){
                var hashMap$=this;
                var $7b;
                if(m$1.is$(($7b=$7a),{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.$_Object}}})&&(hashMap$.size==$7b.size)){
                    var $7c=(0);
                    function set$7c($7d){return $7c=$7d;};
                    while(($7c<hashMap$.$4p.size)){
                        var $7e=hashMap$.$4p.$_get($7c);
                        function set$7e($7f){return $7e=$7f;};
                        var $7g;
                        while(m$1.nn$(($7g=$7e))){
                            var $7h;
                            if(m$1.nn$(($7h=$7b.$_get($7g.element.key)))){
                                if((!$7h.equals($7g.element.item))){
                                    return false;
                                }
                            }else {
                                return false;
                            }
                            $7e=$7g.rest;
                        }
                        ($7i=$7c,$7c=$7i.successor,$7i);
                        var $7i;
                    }
                    return true;
                }
                return false;
            };hashMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','equals']};};
            hashMap$.clone=function(){
                var hashMap$=this;
                var $7j=HashMap(undefined,undefined,undefined,{Key$HashMap:hashMap$.$$targs$$.Key$HashMap,Item$HashMap:hashMap$.$$targs$$.Item$HashMap});
                ($7j.$4q=hashMap$.$4q);
                ($7j.$4p=entryStore(hashMap$.$4p.size,{Item$entryStore:hashMap$.$$targs$$.Item$HashMap,Key$entryStore:hashMap$.$$targs$$.Key$HashMap}));
                var $7k=(0);
                function set$7k($7l){return $7k=$7l;};
                while(($7k<hashMap$.$4p.size)){
                    var $7m;
                    if(m$1.nn$(($7m=hashMap$.$4p.$_get($7k)))){
                        $7j.$4p.set($7k,$7m.clone());
                    }
                    ($7n=$7k,$7k=$7n.successor,$7n);
                    var $7n;
                }
                ($7j.$4r=hashMap$.$4r);
                ($7j.$4s=hashMap$.$4s);
                return $7j;
            };hashMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$HashMap',Item$MutableMap:'Item$HashMap'}},ps:[],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','clone']};};
            hashMap$.contains=function($7o){
                var hashMap$=this;
                var $7p=(0);
                function set$7p($7q){return $7p=$7q;};
                while(($7p<hashMap$.$4p.size)){
                    var $7r=hashMap$.$4p.$_get($7p);
                    function set$7r($7s){return $7r=$7s;};
                    var $7t;
                    while(m$1.nn$(($7t=$7r))){
                        if($7t.element.item.equals($7o)){
                            return true;
                        }
                        $7r=$7t.rest;
                    }
                    ($7u=$7p,$7p=$7u.successor,$7u);
                    var $7u;
                }
                return false;
            };hashMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashMap,pa:3,d:['ceylon.collection','HashMap','$m','contains']};};
        })(HashMap.$$.prototype);
    }
    return HashMap;
}
ex$.$init$HashMap=$init$HashMap;
$init$HashMap();
var $6r;
function HashSet($7v,$7w,$7x,$$targs$$,hashSet$){
    $init$HashSet();
    if(hashSet$===undefined)hashSet$=new HashSet.$$;
    m$1.set_type_args(hashSet$,$$targs$$);
    if($7v===undefined){$7v=getLinked();}
    hashSet$.$7v_=$7v;
    if($7w===undefined){$7w=Hashtable();}
    hashSet$.$7w_=$7w;
    if($7x===undefined){$7x=m$1.getEmpty();}
    hashSet$.$7x_=$7x;
    MutableSet({Element$MutableSet:$$targs$$.Element$HashSet},hashSet$);
    hashSet$.$prop$get$7v={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};}};
    hashSet$.$prop$get$7v.get=function(){return $7v};
    hashSet$.$prop$get$7x={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};}};
    hashSet$.$prop$get$7x.get=function(){return $7x};
    hashSet$.$prop$get$7w={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};}};
    hashSet$.$prop$get$7w.get=function(){return $7w};
    hashSet$.$7y_=elementStore(hashSet$.$7w.initialCapacity,{Element$elementStore:hashSet$.$$targs$$.Element$HashSet});
    hashSet$.$prop$get$7y={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','store$coggxh']};}};
    hashSet$.$prop$get$7y.get=function(){return $7y};
    hashSet$.$7z_=(0);
    hashSet$.$prop$get$7z={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','length$d3pqtk']};}};
    hashSet$.$prop$get$7z.get=function(){return $7z};
    hashSet$.$80_=null;
    hashSet$.$prop$get$80={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','head$aif3m6']};}};
    hashSet$.$prop$get$80.get=function(){return $80};
    hashSet$.$81_=null;
    hashSet$.$prop$get$81={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','tip$9an0gb']};}};
    hashSet$.$prop$get$81.get=function(){return $81};
    var $83;for(var $82=hashSet$.$7x.iterator();($83=$82.next())!==m$1.getFinished();){
        if(hashSet$.$84(hashSet$.$7y,$83)){
            ($85=hashSet$.$7z,hashSet$.$7z=$85.successor,$85);
            var $85;
        }
    }
    hashSet$.$86();
    return hashSet$;
}
HashSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'stability',mt:'prm',def:1,$t:{t:Stability},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];}},{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$HashSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$HashSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet'),m$1.by(["Stéphane Épardaud","Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','HashSet']};};
ex$.HashSet=HashSet;
function $init$HashSet(){
    if(HashSet.$$===undefined){
        m$1.initTypeProto(HashSet,'ceylon.collection::HashSet',m$1.Basic,$init$MutableSet());
        (function(hashSet$){
            m$1.atr$(hashSet$,'$7v',function(){return this.$7v_;},undefined,function(){return{mod:$CCMM$,$t:{t:Stability},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:stability$82jphv')];},d:['ceylon.collection','HashSet','$at','stability$82jphv']};});
            m$1.atr$(hashSet$,'$7x',function(){return this.$7x_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}},$cont:HashSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','HashSet','$at','elements$ce2sq9']};});
            m$1.atr$(hashSet$,'$7w',function(){return this.$7w_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:HashSet,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:HashSet:$at:hashtable$xhg2ge')];},d:['ceylon.collection','HashSet','$at','hashtable$xhg2ge']};});
            m$1.atr$(hashSet$,'$7y',function(){return this.$7y_;},function($87){return this.$7y_=$87;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','store$coggxh']};});
            m$1.atr$(hashSet$,'$7z',function(){return this.$7z_;},function($88){return this.$7z_=$88;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','length$d3pqtk']};});
            m$1.atr$(hashSet$,'$80',function(){return this.$80_;},function($89){return this.$80_=$89;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','head$aif3m6']};});
            m$1.atr$(hashSet$,'$81',function(){return this.$81_;},function($8a){return this.$81_=$8a;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$HashSet'}}]},$cont:HashSet,pa:1027,d:['ceylon.collection','HashSet','$at','tip$9an0gb']};});
            hashSet$.$8b=function($8c,$8d){
                var hashSet$=this;
                return $8c.hash.remainder($8d.size).magnitude;
            };
            hashSet$.$8b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.$_Object}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','storeIndex$b5t5qz']};};
            hashSet$.$8e=function($8f,$8g){
                var hashSet$=this;
                if(hashSet$.$7v.equals(getLinked())){
                    var $8h=LinkedCell($8f,$8g,hashSet$.$81,{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet});
                    var $8i;
                    if(m$1.nn$(($8i=hashSet$.$81))){
                        ($8i.next=$8h);
                    }
                    hashSet$.$81=$8h;
                    if(!m$1.nn$(hashSet$.$80)){
                        hashSet$.$80=$8h;
                    }
                    return $8h;
                }else {
                    return Cell($8f,$8g,{Element$Cell:hashSet$.$$targs$$.Element$HashSet});
                }
            };hashSet$.$8e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:Cell,a:{Element$Cell:'Element$HashSet'}},ps:[{nm:'elem',mt:'prm',$t:'Element$HashSet'},{nm:'rest',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','createCell$73q3ts']};};
            hashSet$.$8j=function($8k){
                var hashSet$=this;
                if(hashSet$.$7v.equals(getLinked())){
                    var $8l;
                    m$1.asrt$((m$1.is$(($8l=$8k),{t:LinkedCell,a:{Element$LinkedCell:hashSet$.$$targs$$.Element$HashSet}})),"Assertion failed: \'is LinkedCell<Element> cell\' at HashSet.ceylon (75:19-75:47)",'75:12-75:48','HashSet.ceylon');
                    var $8m;
                    if(m$1.nn$(($8m=$8l.previous))){
                        ($8m.next=$8l.next);
                    }else {
                        hashSet$.$80=$8l.next;
                    }
                    var $8n;
                    if(m$1.nn$(($8n=$8l.next))){
                        ($8n.previous=$8l.previous);
                    }else {
                        hashSet$.$81=$8l.previous;
                    }
                }
            };hashSet$.$8j.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'cell',mt:'prm',$t:{t:Cell,a:{Element$Cell:'Element$HashSet'}}}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','deleteCell$8thws7']};};
            hashSet$.$84=function($8o,$8p){
                var hashSet$=this;
                var $8q=hashSet$.$8b($8p,$8o);
                var $8r=$8o.$_get($8q);
                function set$8r($8s){return $8r=$8s;};
                var $8t;
                while(m$1.nn$(($8t=$8r))){
                    if($8t.element.equals($8p)){
                        ($8t.element=$8p);
                        return false;
                    }
                    $8r=$8t.rest;
                }
                $8o.set($8q,hashSet$.$8e($8p,$8o.$_get($8q)));
                return true;
            };hashSet$.$84.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,d:['ceylon.collection','HashSet','$m','addToStore$ypnrox']};};
            hashSet$.$86=function(){
                var hashSet$=this;
                if(hashSet$.$7w.rehash(hashSet$.$7z,hashSet$.$7y.size)){
                    var $8u=elementStore(hashSet$.$7w.capacity(hashSet$.$7z),{Element$elementStore:hashSet$.$$targs$$.Element$HashSet});
                    var $8v=(0);
                    function set$8v($8w){return $8v=$8w;};
                    while(($8v<hashSet$.$7y.size)){
                        var $8x=hashSet$.$7y.$_get($8v);
                        function set$8x($8y){return $8x=$8y;};
                        var $8z;
                        while(m$1.nn$(($8z=$8x))){
                            $8x=$8z.rest;
                            var $90=hashSet$.$8b($8z.element,$8u);
                            var $91=$8u.$_get($90);
                            function set$91($92){return $91=$92;};
                            var $93;
                            while(m$1.nn$(($93=($94=$91,m$1.nn$($94)?$94.rest:null)))){
                                $91=$93;
                            }
                            var $94;
                            ($8z.rest=$91);
                            $8u.set($90,$8z);
                        }
                        ($95=$8v,$8v=$95.successor,$95);
                        var $95;
                    }
                    hashSet$.$7y=$8u;
                }
            };hashSet$.$86.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,d:['ceylon.collection','HashSet','$m','checkRehash$dhkh77']};};
            hashSet$.add=function($96){
                var hashSet$=this;
                if(hashSet$.$84(hashSet$.$7y,$96)){
                    ($97=hashSet$.$7z,hashSet$.$7z=$97.successor,$97);
                    var $97;
                    hashSet$.$86();
                    return true;
                }
                return false;
            };hashSet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','add']};};
            hashSet$.addAll=function($98){
                var hashSet$=this;
                var $99=false;
                function set$99($9a){return $99=$9a;};
                var $9c;for(var $9b=$98.iterator();($9c=$9b.next())!==m$1.getFinished();){
                    if(hashSet$.$84(hashSet$.$7y,$9c)){
                        ($9d=hashSet$.$7z,hashSet$.$7z=$9d.successor,$9d);
                        var $9d;
                        $99=true;
                    }
                }
                if($99){
                    hashSet$.$86();
                }
                return $99;
            };hashSet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$HashSet'}}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','addAll']};};
            hashSet$.remove=function($9e){
                var hashSet$=this;
                var $9f=false;
                function set$9f($9g){return $9f=$9g;};
                var $9h=hashSet$.$8b($9e,hashSet$.$7y);
                var $9i;
                while(m$1.nn$(($9i=hashSet$.$7y.$_get($9h)))&&$9i.element.equals($9e)){
                    hashSet$.$7y.set($9h,$9i.rest);
                    ($9j=hashSet$.$7z,hashSet$.$7z=$9j.predecessor,$9j);
                    var $9j;
                    $9f=true;
                }
                var $9k=hashSet$.$7y.$_get($9h);
                function set$9k($9l){return $9k=$9l;};
                var $9m;
                while(m$1.nn$(($9m=$9k))){
                    var $9n=$9m.rest;
                    var $9o;
                    if(m$1.nn$(($9o=$9n))&&$9o.element.equals($9e)){
                        ($9m.rest=$9o.rest);
                        hashSet$.$8j($9m);
                        ($9p=hashSet$.$7z,hashSet$.$7z=$9p.predecessor,$9p);
                        var $9p;
                        $9f=true;
                    }else {
                        $9k=$9n;
                    }
                }
                return $9f;
            };hashSet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$HashSet'}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','remove']};};
            hashSet$.clear=function(){
                var hashSet$=this;
                var $9q=(0);
                function set$9q($9r){return $9q=$9r;};
                while(($9q<hashSet$.$7y.size)){
                    hashSet$.$7y.set(($9s=$9q,$9q=$9s.successor,$9s),null);
                    var $9s;
                }
                hashSet$.$7z=(0);
                hashSet$.$80=null;
                hashSet$.$81=null;
            };hashSet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clear']};};
            m$1.atr$(hashSet$,'size',function(){
                var hashSet$=this;
                return hashSet$.$7z;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','size']};});
            hashSet$.iterator=function(){
                var hashSet$=this;
                return ($9t=(hashSet$.$7v.equals(getLinked())?LinkedCellIterator(hashSet$.$80,{Element$LinkedCellIterator:hashSet$.$$targs$$.Element$HashSet}):null),m$1.nn$($9t)?$9t:StoreIterator(hashSet$.$7y,{Element$StoreIterator:hashSet$.$$targs$$.Element$HashSet}));
            };hashSet$.count=function($9u){
                var hashSet$=this;
                var $9v=(0);
                function set$9v($9w){return $9v=$9w;};
                var $9x=(0);
                function set$9x($9y){return $9x=$9y;};
                while(($9x<hashSet$.$7y.size)){
                    var $9z=hashSet$.$7y.$_get($9x);
                    function set$9z($a0){return $9z=$a0;};
                    var $a1;
                    while(m$1.nn$(($a1=$9z))){
                        if($9u($a1.element)){
                            ($a2=$9v,$9v=$a2.successor,$a2);
                            var $a2;
                        }
                        $9z=$a1.rest;
                    }
                    ($a3=$9x,$9x=$a3.successor,$a3);
                    var $a3;
                }
                return $9v;
            };hashSet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','count']};};
            m$1.atr$(hashSet$,'hash',function(){
                var hashSet$=this;
                var $a4=(0);
                function set$a4($a5){return $a4=$a5;};
                $prop$get$a4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashSet$.$prop$getHash,pa:1024,d:['ceylon.collection','HashSet','$at','hash','$at','index$cchzr1']};}};
                $prop$get$a4.get=function(){return $a4};
                $prop$get$a4.set=set$a4;
                if(set$a4.$crtmm$===undefined)set$a4.$crtmm$=$prop$get$a4.$crtmm$;
                var $a6=(0);
                function set$a6($a7){return $a6=$a7;};
                $prop$get$a6={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:hashSet$.$prop$getHash,pa:1024,d:['ceylon.collection','HashSet','$at','hash','$at','hash$eqglqx']};}};
                $prop$get$a6.get=function(){return $a6};
                $prop$get$a6.set=set$a6;
                if(set$a6.$crtmm$===undefined)set$a6.$crtmm$=$prop$get$a6.$crtmm$;
                while(($a4<hashSet$.$7y.size)){
                    var $a8=hashSet$.$7y.$_get($a4);
                    function set$a8($a9){return $a8=$a9;};
                    $prop$get$a8={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]},$cont:hashSet$.$prop$getHash,pa:1027,d:['ceylon.collection','HashSet','$at','hash','$at','bucket$wk08dy']};}};
                    $prop$get$a8.get=function(){return $a8};
                    $prop$get$a8.set=set$a8;
                    if(set$a8.$crtmm$===undefined)set$a8.$crtmm$=$prop$get$a8.$crtmm$;
                    var $aa;
                    while(m$1.nn$(($aa=$a8))){
                        ($a6=$a6.plus($aa.element.hash));
                        $a8=$aa.rest;
                    }
                    ($ab=$a4,$a4=$ab.successor,$ab);
                    var $ab;
                }
                return $a6;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','hash']};});hashSet$.equals=function($ac){
                var hashSet$=this;
                var $ad;
                if(m$1.is$(($ad=$ac),{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}})&&(hashSet$.size==$ad.size)){
                    var $ae=(0);
                    function set$ae($af){return $ae=$af;};
                    while(($ae<hashSet$.$7y.size)){
                        var $ag=hashSet$.$7y.$_get($ae);
                        function set$ag($ah){return $ag=$ah;};
                        var $ai;
                        while(m$1.nn$(($ai=$ag))){
                            if(!$ad.contains($ai.element)){
                                return false;
                            }
                            $ag=$ai.rest;
                        }
                        ($aj=$ae,$ae=$aj.successor,$aj);
                        var $aj;
                    }
                    return true;
                }
                return false;
            };hashSet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','equals']};};
            hashSet$.clone=function(){
                var hashSet$=this;
                var $ak=HashSet(undefined,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
                ($ak.$7z=hashSet$.$7z);
                ($ak.$7y=elementStore(hashSet$.$7y.size,{Element$elementStore:hashSet$.$$targs$$.Element$HashSet}));
                var $al=(0);
                function set$al($am){return $al=$am;};
                while(($al<hashSet$.$7y.size)){
                    var $an;
                    if(m$1.nn$(($an=hashSet$.$7y.$_get($al)))){
                        $ak.$7y.set($al,$an.clone());
                    }
                    ($ao=$al,$al=$ao.successor,$ao);
                    var $ao;
                }
                ($ak.$80=hashSet$.$80);
                ($ak.$81=hashSet$.$81);
                return $ak;
            };hashSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','clone']};};
            hashSet$.contains=function($ap){
                var hashSet$=this;
                var $aq=(0);
                function set$aq($ar){return $aq=$ar;};
                while(($aq<hashSet$.$7y.size)){
                    var $as=hashSet$.$7y.$_get($aq);
                    function set$as($at){return $as=$at;};
                    var $au;
                    while(m$1.nn$(($au=$as))){
                        if($au.element.equals($ap)){
                            return true;
                        }
                        $as=$au.rest;
                    }
                    ($av=$aq,$aq=$av.successor,$av);
                    var $av;
                }
                return false;
            };hashSet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$m','contains']};};
            hashSet$.complement=function($aw,$$$mptypes){
                var hashSet$=this;
                var $ax=HashSet(undefined,undefined,undefined,{Element$HashSet:hashSet$.$$targs$$.Element$HashSet});
                var $az;for(var $ay=hashSet$.iterator();($az=$ay.next())!==m$1.getFinished();){
                    if(!$aw.contains($az)){
                        $ax.add($az);
                    }
                }
                return $ax;
            };hashSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$HashSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:HashSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','complement']};};
            hashSet$.exclusiveUnion=function($b0,$$$mptypes){
                var hashSet$=this;
                var $b1=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[hashSet$.$$targs$$.Element$HashSet,$$$mptypes.Other$exclusiveUnion]}});
                var $b3;for(var $b2=hashSet$.iterator();($b3=$b2.next())!==m$1.getFinished();){
                    if(!$b0.contains($b3)){
                        $b1.add($b3);
                    }
                }
                var $b5;for(var $b4=$b0.iterator();($b5=$b4.next())!==m$1.getFinished();){
                    if(!hashSet$.contains($b5)){
                        $b1.add($b5);
                    }
                }
                return $b1;
            };hashSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:HashSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','exclusiveUnion']};};
            hashSet$.intersection=function($b6,$$$mptypes){
                var hashSet$=this;
                var $b7=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'i',l:[hashSet$.$$targs$$.Element$HashSet,$$$mptypes.Other$intersection]}});
                var $b9;for(var $b8=hashSet$.iterator();($b9=$b8.next())!==m$1.getFinished();){
                    var $ba;
                    if($b6.contains($b9)&&m$1.is$(($ba=$b9),$$$mptypes.Other$intersection)){
                        $b7.add($ba);
                    }
                }
                return $b7;
            };hashSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$HashSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:HashSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','intersection']};};
            hashSet$.union=function($bb,$$$mptypes){
                var hashSet$=this;
                var $bc=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[hashSet$.$$targs$$.Element$HashSet,$$$mptypes.Other$union]}});
                $bc.addAll(hashSet$);
                $bc.addAll($bb);
                return $bc;
            };hashSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$HashSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:HashSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','HashSet','$m','union']};};
            m$1.atr$(hashSet$,'first',function(){
                var hashSet$=this;
                if(hashSet$.$7v.equals(getLinked())){
                    return ($bd=hashSet$.$80,m$1.nn$($bd)?$bd.element:null);
                    var $bd;
                }else {
                    return ($be=hashSet$.$7y.coalesced.first,m$1.nn$($be)?$be.element:null);
                    var $be;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','first']};});m$1.atr$(hashSet$,'last',function(){
                var hashSet$=this;
                if(hashSet$.$7v.equals(getLinked())){
                    return ($bf=hashSet$.$81,m$1.nn$($bf)?$bf.element:null);
                    var $bf;
                }else {
                    var $bg=hashSet$.$7y.coalesced.last;
                    function set$bg($bh){return $bg=$bh;};
                    $prop$get$bg={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$HashSet'}}]},$cont:hashSet$.$prop$getLast,pa:1027,d:['ceylon.collection','HashSet','$at','last','$at','bucket$t0cods']};}};
                    $prop$get$bg.get=function(){return $bg};
                    $prop$get$bg.set=set$bg;
                    if(set$bg.$crtmm$===undefined)set$bg.$crtmm$=$prop$get$bg.$crtmm$;
                    var $bi;
                    while(m$1.nn$(($bi=($bj=$bg,m$1.nn$($bj)?$bj.rest:null)))){
                        $bg=$bi;
                    }
                    var $bj;
                    return ($bk=$bg,m$1.nn$($bk)?$bk.element:null);
                    var $bk;
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$HashSet']},$cont:HashSet,pa:3,d:['ceylon.collection','HashSet','$at','last']};});
        })(HashSet.$$.prototype);
    }
    return HashSet;
}
ex$.$init$HashSet=$init$HashSet;
$init$HashSet();
var $9t;
function Hashtable(initialCapacity,loadFactor,growthFactor,hashtable$){
    $init$Hashtable();
    if(hashtable$===undefined)hashtable$=new Hashtable.$$;
    if(initialCapacity===undefined){initialCapacity=(16);}
    hashtable$.initialCapacity_=initialCapacity;
    if(loadFactor===undefined){loadFactor=m$1.Float(0.75);}
    hashtable$.loadFactor_=loadFactor;
    if(growthFactor===undefined){growthFactor=m$1.Float(2.0);}
    hashtable$.growthFactor_=growthFactor;
    hashtable$.$prop$getInitialCapacity={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};}};
    hashtable$.$prop$getInitialCapacity.get=function(){return initialCapacity};
    hashtable$.$prop$getLoadFactor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};}};
    hashtable$.$prop$getLoadFactor.get=function(){return loadFactor};
    hashtable$.$prop$getGrowthFactor={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};}};
    hashtable$.$prop$getGrowthFactor.get=function(){return growthFactor};
    m$1.asrt$(((hashtable$.initialCapacity>=0)),"initial capacity cannot be negative: \'initialCapacity>=0\' at Hashtable.ceylon (32:11-32:30)",'31:4-32:31','Hashtable.ceylon');
    m$1.asrt$(((hashtable$.initialCapacity<=m$1.getRuntime().maxArraySize)),"initial capacity too large: \'initialCapacity<=runtime.maxArraySize\' at Hashtable.ceylon (35:11-35:49)",'34:4-35:50','Hashtable.ceylon');
    m$1.asrt$((hashtable$.loadFactor.compare(m$1.Float(0.0)).equals(m$1.getLarger())),"load factor must be positive: \'loadFactor>0.0\' at Hashtable.ceylon (38:11-38:26)",'37:4-38:27','Hashtable.ceylon');
    m$1.asrt$(((hashtable$.growthFactor.compare(m$1.Float(1.0))!==m$1.getSmaller())),"growth factor must be at least 1.0: \'growthFactor>=1.0\' at Hashtable.ceylon (41:11-41:29)",'40:4-41:30','Hashtable.ceylon');
    return hashtable$;
}
Hashtable.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];}},{nm:'loadFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable')];},d:['ceylon.collection','Hashtable']};};
ex$.Hashtable=Hashtable;
function $init$Hashtable(){
    if(Hashtable.$$===undefined){
        m$1.initTypeProto(Hashtable,'ceylon.collection::Hashtable',m$1.Basic);
        (function(hashtable$){
            m$1.atr$(hashtable$,'initialCapacity',function(){return this.initialCapacity_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:Hashtable,pa:1,an:function(){return[m$1.doc("The initial capacity of the backing array.")];},d:['ceylon.collection','Hashtable','$at','initialCapacity']};});
            m$1.atr$(hashtable$,'loadFactor',function(){return this.loadFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:loadFactor')];},d:['ceylon.collection','Hashtable','$at','loadFactor']};});
            m$1.atr$(hashtable$,'growthFactor',function(){return this.growthFactor_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:Hashtable,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Hashtable:$at:growthFactor')];},d:['ceylon.collection','Hashtable','$at','growthFactor']};});
            hashtable$.rehash=function($bl,$bm){
                var hashtable$=this;
                return (($bl>$bm.times(hashtable$.loadFactor).integer)&&(hashtable$.capacity($bl)>$bm));
            };
            hashtable$.rehash.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}},{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','rehash']};};
            hashtable$.capacity=function($bn){
                var hashtable$=this;
                var $bo=m$1.getRuntime().maxArraySize;
                var $bp=$bn.times(hashtable$.growthFactor).integer;
                return ($bq=(($bp>$bo)?$bo:null),m$1.nn$($bq)?$bq:$bp);
                var $bq;
            };hashtable$.capacity.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:Hashtable,pa:1,d:['ceylon.collection','Hashtable','$m','capacity']};};
        })(Hashtable.$$.prototype);
    }
    return Hashtable;
}
ex$.$init$Hashtable=$init$Hashtable;
$init$Hashtable();
function IdentityMap($br,$bs,$$targs$$,identityMap$){
    $init$IdentityMap();
    if(identityMap$===undefined)identityMap$=new IdentityMap.$$;
    m$1.set_type_args(identityMap$,$$targs$$);
    if($br===undefined){$br=Hashtable();}
    identityMap$.$br_=$br;
    if($bs===undefined){$bs=m$1.getEmpty();}
    identityMap$.$bs_=$bs;
    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap,Item$Entry:$$targs$$.Item$IdentityMap}}},identityMap$);
    m$1.Collection({Element$Collection:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$IdentityMap,Item$Entry:$$targs$$.Item$IdentityMap}}},identityMap$);
    m$1.Correspondence({Item$Correspondence:$$targs$$.Item$IdentityMap,Key$Correspondence:$$targs$$.Key$IdentityMap},identityMap$);
    identityMap$.$prop$get$bs={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};}};
    identityMap$.$prop$get$bs.get=function(){return $bs};
    identityMap$.$prop$get$br={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};}};
    identityMap$.$prop$get$br.get=function(){return $br};
    identityMap$.$bt_=entryStore(identityMap$.$br.initialCapacity,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
    identityMap$.$prop$get$bt={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};}};
    identityMap$.$prop$get$bt.get=function(){return $bt};
    identityMap$.$bu_=(0);
    identityMap$.$prop$get$bu={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};}};
    identityMap$.$prop$get$bu.get=function(){return $bu};
    var $bw;for(var $bv=identityMap$.$bs.iterator();($bw=$bv.next())!==m$1.getFinished();){
        if(identityMap$.$bx(identityMap$.$bt,$bw)){
            ($by=identityMap$.$bu,identityMap$.$bu=$by.successor,$by);
            var $by;
        }
    }
    identityMap$.$bz();
    return identityMap$;
}
IdentityMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$IdentityMap:{sts:[{t:m$1.Identifiable}]},Item$IdentityMap:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Collection,a:{Element$Collection:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},{t:m$1.Correspondence,a:{Item$Correspondence:'Item$IdentityMap',Key$Correspondence:'Key$IdentityMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','IdentityMap']};};
ex$.IdentityMap=IdentityMap;
function $init$IdentityMap(){
    if(IdentityMap.$$===undefined){
        m$1.initTypeProto(IdentityMap,'ceylon.collection::IdentityMap',m$1.Basic,m$1.Correspondence,m$1.Iterable,m$1.Collection);
        (function(identityMap$){
            m$1.atr$(identityMap$,'$bs',function(){return this.$bs_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}},$cont:IdentityMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','IdentityMap','$at','entries$yyuq4k']};});
            m$1.atr$(identityMap$,'$br',function(){return this.$br_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentityMap,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentityMap','$at','hashtable$ysu1qs']};});
            m$1.atr$(identityMap$,'$bt',function(){return this.$bt_;},function($c0){return this.$bt_=$c0;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','store$dzug7v']};});
            m$1.atr$(identityMap$,'$bu',function(){return this.$bu_;},function($c1){return this.$bu_=$c1;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:1027,d:['ceylon.collection','IdentityMap','$at','length$bsbrj6']};});
            identityMap$.$c2=function($c3,$c4){
                var identityMap$=this;
                return m$1.identityHash($c3).remainder($c4.size).magnitude;
            };
            identityMap$.$c2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'key',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','storeIndex$9uf6gl']};};
            identityMap$.$bx=function($c5,$c6){
                var identityMap$=this;
                var $c7=identityMap$.$c2($c6.key,$c5);
                var $c8=$c5.$_get($c7);
                function set$c8($c9){return $c8=$c9;};
                var $ca;
                while(m$1.nn$(($ca=$c8))){
                    if(($ca.element.key===$c6.key)){
                        ($ca.element=$c6);
                        return false;
                    }
                    $c8=$ca.rest;
                }
                $c5.set($c7,Cell($c6,$c5.$_get($c7),{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}}));
                return true;
            };identityMap$.$bx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]}}}},{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','addToStore$z02azt']};};
            identityMap$.$bz=function(){
                var identityMap$=this;
                if(identityMap$.$br.rehash(identityMap$.$bu,identityMap$.$bt.size)){
                    var $cb=entryStore(identityMap$.$br.capacity(identityMap$.$bu),{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap});
                    var $cc=(0);
                    function set$cc($cd){return $cc=$cd;};
                    while(($cc<identityMap$.$bt.size)){
                        var $ce=identityMap$.$bt.$_get($cc);
                        function set$ce($cf){return $ce=$cf;};
                        var $cg;
                        while(m$1.nn$(($cg=$ce))){
                            $ce=$cg.rest;
                            var $ch=identityMap$.$c2($cg.element.key,$cb);
                            var $ci=$cb.$_get($ch);
                            function set$ci($cj){return $ci=$cj;};
                            var $ck;
                            while(m$1.nn$(($ck=($cl=$ci,m$1.nn$($cl)?$cl.rest:null)))){
                                $ci=$ck;
                            }
                            var $cl;
                            ($cg.rest=$ci);
                            $cb.set($ch,$cg);
                        }
                        ($cm=$cc,$cc=$cm.successor,$cm);
                        var $cm;
                    }
                    identityMap$.$bt=$cb;
                }
            };identityMap$.$bz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,d:['ceylon.collection','IdentityMap','$m','checkRehash$c66hwt']};};
            identityMap$.put=function($cn,$co){
                var identityMap$=this;
                var $cp=identityMap$.$c2($cn,identityMap$.$bt);
                var $cq=identityMap$.$bt.$_get($cp);
                function set$cq($cr){return $cq=$cr;};
                var $cs;
                while(m$1.nn$(($cs=$cq))){
                    if(($cs.element.key===$cn)){
                        var $ct=$cs.element.item;
                        ($cs.element=m$1.Entry($cn,$co,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}));
                        return $ct;
                    }
                    $cq=$cs.rest;
                }
                identityMap$.$bt.set($cp,Cell(m$1.Entry($cn,$co,{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}),identityMap$.$bt.$_get($cp),{Element$Cell:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}}));
                ($cu=identityMap$.$bu,identityMap$.$bu=$cu.successor,$cu);
                var $cu;
                identityMap$.$bz();
                return null;
            };identityMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'},{nm:'item',mt:'prm',$t:'Item$IdentityMap'}],$cont:IdentityMap,pa:1,d:['ceylon.collection','IdentityMap','$m','put']};};
            identityMap$.putAll=function($cv){
                var identityMap$=this;
                var $cx;for(var $cw=$cv.iterator();($cx=$cw.next())!==m$1.getFinished();){
                    if(identityMap$.$bx(identityMap$.$bt,$cx)){
                        ($cy=identityMap$.$bu,identityMap$.$bu=$cy.successor,$cy);
                        var $cy;
                    }
                }
                identityMap$.$bz();
            };identityMap$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentityMap:$m:putAll')];},d:['ceylon.collection','IdentityMap','$m','putAll']};};
            identityMap$.remove=function($cz){
                var identityMap$=this;
                var $d0=identityMap$.$c2($cz,identityMap$.$bt);
                var $d1;
                while(m$1.nn$(($d1=identityMap$.$bt.$_get($d0)))&&$d1.element.key.equals($cz)){
                    identityMap$.$bt.set($d0,$d1.rest);
                    ($d2=identityMap$.$bu,identityMap$.$bu=$d2.predecessor,$d2);
                    var $d2;
                    return $d1.element.item;
                }
                var $d3=identityMap$.$bt.$_get($d0);
                function set$d3($d4){return $d3=$d4;};
                var $d5;
                while(m$1.nn$(($d5=$d3))){
                    var $d6=$d5.rest;
                    var $d7;
                    if(m$1.nn$(($d7=$d6))&&$d7.element.key.equals($cz)){
                        ($d5.rest=$d7.rest);
                        ($d8=identityMap$.$bu,identityMap$.$bu=$d8.predecessor,$d8);
                        var $d8;
                        return $d7.element.item;
                    }else {
                        $d3=$d6;
                    }
                }
                return null;
            };identityMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes a key/value mapping if it exists")];},d:['ceylon.collection','IdentityMap','$m','remove']};};
            identityMap$.clear=function(){
                var identityMap$=this;
                var $d9=(0);
                function set$d9($da){return $d9=$da;};
                while(($d9<identityMap$.$bt.size)){
                    identityMap$.$bt.set(($db=$d9,$d9=$db.successor,$db),null);
                    var $db;
                }
                identityMap$.$bu=(0);
            };identityMap$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentityMap,pa:1,an:function(){return[m$1.doc("Removes every key/value mapping")];},d:['ceylon.collection','IdentityMap','$m','clear']};};
            m$1.atr$(identityMap$,'size',function(){
                var identityMap$=this;
                return identityMap$.$bu;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','size']};});
            identityMap$.$_get=function($dc){
                var identityMap$=this;
                if(identityMap$.empty){
                    return null;
                }
                var $dd=identityMap$.$c2($dc,identityMap$.$bt);
                var $de=identityMap$.$bt.$_get($dd);
                function set$de($df){return $de=$df;};
                var $dg;
                while(m$1.nn$(($dg=$de))){
                    if(($dg.element.key===$dc)){
                        return $dg.element.item;
                    }
                    $de=$dg.rest;
                }
                return null;
            };identityMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$IdentityMap']},ps:[{nm:'key',mt:'prm',$t:'Key$IdentityMap'}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','get']};};
            identityMap$.iterator=function(){
                var identityMap$=this;
                return StoreIterator(identityMap$.$bt,{Element$StoreIterator:{t:m$1.Entry,a:{Key$Entry:identityMap$.$$targs$$.Key$IdentityMap,Item$Entry:identityMap$.$$targs$$.Item$IdentityMap}}});
            };identityMap$.count=function($dh){
                var identityMap$=this;
                var $di=(0);
                function set$di($dj){return $di=$dj;};
                var $dk=(0);
                function set$dk($dl){return $dk=$dl;};
                while(($di<identityMap$.$bt.size)){
                    var $dm=identityMap$.$bt.$_get($di);
                    function set$dm($dn){return $dm=$dn;};
                    var $do;
                    while(m$1.nn$(($do=$dm))){
                        if($dh($do.element)){
                            ($dp=$dk,$dk=$dp.successor,$dp);
                            var $dp;
                        }
                        $dm=$do.rest;
                    }
                    ($dq=$di,$di=$dq.successor,$dq);
                    var $dq;
                }
                return $dk;
            };identityMap$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','count']};};
            m$1.atr$(identityMap$,'hash',function(){
                var identityMap$=this;
                var $dr=(0);
                function set$dr($ds){return $dr=$ds;};
                $prop$get$dr={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identityMap$.$prop$getHash,pa:1024,d:['ceylon.collection','IdentityMap','$at','hash','$at','index$jhy9br']};}};
                $prop$get$dr.get=function(){return $dr};
                $prop$get$dr.set=set$dr;
                if(set$dr.$crtmm$===undefined)set$dr.$crtmm$=$prop$get$dr.$crtmm$;
                var $dt=(17);
                function set$dt($du){return $dt=$du;};
                $prop$get$dt={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identityMap$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentityMap','$at','hash','$at','hash$lvwvbn']};}};
                $prop$get$dt.get=function(){return $dt};
                $prop$get$dt.set=set$dt;
                if(set$dt.$crtmm$===undefined)set$dt.$crtmm$=$prop$get$dt.$crtmm$;
                while(($dr<identityMap$.$bt.size)){
                    var $dv=identityMap$.$bt.$_get($dr);
                    function set$dv($dw){return $dv=$dw;};
                    $prop$get$dv={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$IdentityMap',Item$Entry:'Item$IdentityMap'}}}}]},$cont:identityMap$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentityMap','$at','hash','$at','bucket$tvfqo4']};}};
                    $prop$get$dv.get=function(){return $dv};
                    $prop$get$dv.set=set$dv;
                    if(set$dv.$crtmm$===undefined)set$dv.$crtmm$=$prop$get$dv.$crtmm$;
                    var $dx;
                    while(m$1.nn$(($dx=$dv))){
                        $dt=$dt.times(31).plus(m$1.identityHash($dx.element.key));
                        $dt=$dt.times(31).plus($dx.element.item.hash);
                        $dv=$dx.rest;
                    }
                    ($dy=$dr,$dr=$dy.successor,$dy);
                    var $dy;
                }
                return $dt;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$at','hash']};});identityMap$.equals=function($dz){
                var identityMap$=this;
                var $e0;
                if(m$1.is$(($e0=$dz),{t:IdentityMap,a:{Key$IdentityMap:{t:m$1.$_Object},Item$IdentityMap:{t:m$1.$_Object}}})&&(identityMap$.size==$e0.size)){
                    var $e1=(0);
                    function set$e1($e2){return $e1=$e2;};
                    while(($e1<identityMap$.$bt.size)){
                        var $e3=identityMap$.$bt.$_get($e1);
                        function set$e3($e4){return $e3=$e4;};
                        var $e5;
                        while(m$1.nn$(($e5=$e3))){
                            var $e6;
                            if(m$1.nn$(($e6=$e0.$_get($e5.element.key)))){
                                if((!$e6.equals($e5.element.item))){
                                    return false;
                                }
                            }else {
                                return false;
                            }
                            $e3=$e5.rest;
                        }
                        ($e7=$e1,$e1=$e7.successor,$e7);
                        var $e7;
                    }
                    return true;
                }
                return false;
            };identityMap$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','equals']};};
            identityMap$.clone=function(){
                var identityMap$=this;
                var $e8=IdentityMap(undefined,undefined,{Key$IdentityMap:identityMap$.$$targs$$.Key$IdentityMap,Item$IdentityMap:identityMap$.$$targs$$.Item$IdentityMap});
                ($e8.$bu=identityMap$.$bu);
                ($e8.$bt=entryStore(identityMap$.$bt.size,{Item$entryStore:identityMap$.$$targs$$.Item$IdentityMap,Key$entryStore:identityMap$.$$targs$$.Key$IdentityMap}));
                var $e9=(0);
                function set$e9($ea){return $e9=$ea;};
                while(($e9<identityMap$.$bt.size)){
                    var $eb;
                    if(m$1.nn$(($eb=identityMap$.$bt.$_get($e9)))){
                        $e8.$bt.set($e9,$eb.clone());
                    }
                    ($ec=$e9,$e9=$ec.successor,$ec);
                    var $ec;
                }
                return $e8;
            };identityMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentityMap,a:{Key$IdentityMap:'Key$IdentityMap',Item$IdentityMap:'Item$IdentityMap'}},ps:[],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','clone']};};
            identityMap$.contains=function($ed){
                var identityMap$=this;
                var $ee=(0);
                function set$ee($ef){return $ee=$ef;};
                while(($ee<identityMap$.$bt.size)){
                    var $eg=identityMap$.$bt.$_get($ee);
                    function set$eg($eh){return $eg=$eh;};
                    var $ei;
                    while(m$1.nn$(($ei=$eg))){
                        if($ei.element.item.equals($ed)){
                            return true;
                        }
                        $eg=$ei.rest;
                    }
                    ($ej=$ee,$ee=$ej.successor,$ej);
                    var $ej;
                }
                return false;
            };identityMap$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentityMap,pa:3,d:['ceylon.collection','IdentityMap','$m','contains']};};
        })(IdentityMap.$$.prototype);
    }
    return IdentityMap;
}
ex$.$init$IdentityMap=$init$IdentityMap;
$init$IdentityMap();
function IdentitySet($ek,$el,$$targs$$,identitySet$){
    $init$IdentitySet();
    if(identitySet$===undefined)identitySet$=new IdentitySet.$$;
    m$1.set_type_args(identitySet$,$$targs$$);
    if($ek===undefined){$ek=Hashtable();}
    identitySet$.$ek_=$ek;
    if($el===undefined){$el=m$1.getEmpty();}
    identitySet$.$el_=$el;
    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:$$targs$$.Element$IdentitySet},identitySet$);
    m$1.Collection({Element$Collection:$$targs$$.Element$IdentitySet},identitySet$);
    identitySet$.$prop$get$el={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};}};
    identitySet$.$prop$get$el.get=function(){return $el};
    identitySet$.$prop$get$ek={$crtmm$:function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};}};
    identitySet$.$prop$get$ek.get=function(){return $ek};
    identitySet$.$em_=elementStore(identitySet$.$ek.initialCapacity,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
    identitySet$.$prop$get$em={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};}};
    identitySet$.$prop$get$em.get=function(){return $em};
    identitySet$.$en_=(0);
    identitySet$.$prop$get$en={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};}};
    identitySet$.$prop$get$en.get=function(){return $en};
    var $ep;for(var $eo=identitySet$.$el.iterator();($ep=$eo.next())!==m$1.getFinished();){
        if(identitySet$.$eq(identitySet$.$em,$ep)){
            ($er=identitySet$.$en,identitySet$.$en=$er.successor,$er);
            var $er;
        }
    }
    identitySet$.$es();
    return identitySet$;
}
IdentitySet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'hashtable',mt:'prm',def:1,$t:{t:Hashtable},an:function(){return[m$1.doc("Performance-related settings for the backing array.")];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$IdentitySet:{sts:[{t:m$1.Identifiable}]}},sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},{t:m$1.Collection,a:{Element$Collection:'Element$IdentitySet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:IdentitySet'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','IdentitySet']};};
ex$.IdentitySet=IdentitySet;
function $init$IdentitySet(){
    if(IdentitySet.$$===undefined){
        m$1.initTypeProto(IdentitySet,'ceylon.collection::IdentitySet',m$1.Basic,m$1.Iterable,m$1.Collection);
        (function(identitySet$){
            m$1.atr$(identitySet$,'$el',function(){return this.$el_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}},$cont:IdentitySet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','IdentitySet','$at','elements$7yiv9d']};});
            m$1.atr$(identitySet$,'$ek',function(){return this.$ek_;},undefined,function(){return{mod:$CCMM$,$t:{t:Hashtable},$cont:IdentitySet,an:function(){return[m$1.doc("Performance-related settings for the backing array.")];},d:['ceylon.collection','IdentitySet','$at','hashtable$x4421u']};});
            m$1.atr$(identitySet$,'$em',function(){return this.$em_;},function($et){return this.$em_=$et;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','store$h40eed']};});
            m$1.atr$(identitySet$,'$en',function(){return this.$en_;},function($eu){return this.$en_=$eu;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:1027,d:['ceylon.collection','IdentitySet','$at','length$8o5tco']};});
            identitySet$.$ev=function($ew,$ex){
                var identitySet$=this;
                return m$1.identityHash($ew).remainder($ex.size).magnitude;
            };
            identitySet$.$ev.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'elem',mt:'prm',$t:{t:m$1.Identifiable}},{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','storeIndex$6q98a3']};};
            identitySet$.$eq=function($ey,$ez){
                var identitySet$=this;
                var $f0=identitySet$.$ev($ez,$ey);
                var $f1=$ey.$_get($f0);
                function set$f1($f2){return $f1=$f2;};
                var $f3;
                while(m$1.nn$(($f3=$f1))){
                    if(($f3.element===$ez)){
                        ($f3.element=$ez);
                        return false;
                    }
                    $f1=$f3.rest;
                }
                $ey.set($f0,Cell($ez,$ey.$_get($f0),{Element$Cell:identitySet$.$$targs$$.Element$IdentitySet}));
                return true;
            };identitySet$.$eq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]}}}},{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','addToStore$vvwctb']};};
            identitySet$.$es=function(){
                var identitySet$=this;
                if(identitySet$.$ek.rehash(identitySet$.$en,identitySet$.$em.size)){
                    var $f4=elementStore(identitySet$.$ek.capacity(identitySet$.$en),{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet});
                    var $f5=(0);
                    function set$f5($f6){return $f5=$f6;};
                    while(($f5<identitySet$.$em.size)){
                        var $f7=identitySet$.$em.$_get($f5);
                        function set$f7($f8){return $f7=$f8;};
                        var $f9;
                        while(m$1.nn$(($f9=$f7))){
                            $f7=$f9.rest;
                            var $fa=identitySet$.$ev($f9.element,$f4);
                            var $fb=$f4.$_get($fa);
                            function set$fb($fc){return $fb=$fc;};
                            var $fd;
                            while(m$1.nn$(($fd=($fe=$fb,m$1.nn$($fe)?$fe.rest:null)))){
                                $fb=$fd;
                            }
                            var $fe;
                            ($f9.rest=$fb);
                            $f4.set($fa,$f9);
                        }
                        ($ff=$f5,$f5=$ff.successor,$ff);
                        var $ff;
                    }
                    identitySet$.$em=$f4;
                }
            };identitySet$.$es.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,d:['ceylon.collection','IdentitySet','$m','checkRehash$920jqb']};};
            identitySet$.add=function($fg){
                var identitySet$=this;
                if(identitySet$.$eq(identitySet$.$em,$fg)){
                    ($fh=identitySet$.$en,identitySet$.$en=$fh.successor,$fh);
                    var $fh;
                    identitySet$.$es();
                    return true;
                }
                return false;
            };identitySet$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','add']};};
            identitySet$.addAll=function($fi){
                var identitySet$=this;
                var $fj=false;
                function set$fj($fk){return $fj=$fk;};
                var $fm;for(var $fl=$fi.iterator();($fm=$fl.next())!==m$1.getFinished();){
                    ($fj=$fj||identitySet$.add($fm));
                }
                if($fj){
                    identitySet$.$es();
                }
                return $fj;
            };identitySet$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$IdentitySet'}}}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','addAll']};};
            identitySet$.remove=function($fn){
                var identitySet$=this;
                var $fo=false;
                function set$fo($fp){return $fo=$fp;};
                var $fq=identitySet$.$ev($fn,identitySet$.$em);
                var $fr;
                while(m$1.nn$(($fr=identitySet$.$em.$_get($fq)))&&$fr.element.equals($fn)){
                    identitySet$.$em.set($fq,$fr.rest);
                    ($fs=identitySet$.$en,identitySet$.$en=$fs.predecessor,$fs);
                    var $fs;
                    $fo=true;
                }
                var $ft=identitySet$.$em.$_get($fq);
                function set$ft($fu){return $ft=$fu;};
                var $fv;
                while(m$1.nn$(($fv=$ft))){
                    var $fw=$fv.rest;
                    var $fx;
                    if(m$1.nn$(($fx=$fw))&&$fx.element.equals($fn)){
                        ($fv.rest=$fx.rest);
                        ($fy=identitySet$.$en,identitySet$.$en=$fy.predecessor,$fy);
                        var $fy;
                        $fo=true;
                    }else {
                        $ft=$fw;
                    }
                }
                return $fo;
            };identitySet$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$IdentitySet'}],$cont:IdentitySet,pa:1,d:['ceylon.collection','IdentitySet','$m','remove']};};
            identitySet$.clear=function(){
                var identitySet$=this;
                var $fz=(0);
                function set$fz($g0){return $fz=$g0;};
                while(($fz<identitySet$.$em.size)){
                    identitySet$.$em.set(($g1=$fz,$fz=$g1.successor,$g1),null);
                    var $g1;
                }
                identitySet$.$en=(0);
            };identitySet$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:IdentitySet,pa:1,an:function(){return[m$1.doc("Removes every element")];},d:['ceylon.collection','IdentitySet','$m','clear']};};
            m$1.atr$(identitySet$,'size',function(){
                var identitySet$=this;
                return identitySet$.$en;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','size']};});
            identitySet$.iterator=function(){
                var identitySet$=this;
                return StoreIterator(identitySet$.$em,{Element$StoreIterator:identitySet$.$$targs$$.Element$IdentitySet});
            };identitySet$.count=function($g2){
                var identitySet$=this;
                var $g3=(0);
                function set$g3($g4){return $g3=$g4;};
                var $g5=(0);
                function set$g5($g6){return $g5=$g6;};
                while(($g5<identitySet$.$em.size)){
                    var $g7=identitySet$.$em.$_get($g5);
                    function set$g7($g8){return $g7=$g8;};
                    var $g9;
                    while(m$1.nn$(($g9=$g7))){
                        if($g2($g9.element)){
                            ($ga=$g3,$g3=$ga.successor,$ga);
                            var $ga;
                        }
                        $g7=$g9.rest;
                    }
                    ($gb=$g5,$g5=$gb.successor,$gb);
                    var $gb;
                }
                return $g3;
            };identitySet$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','count']};};
            m$1.atr$(identitySet$,'hash',function(){
                var identitySet$=this;
                var $gc=(0);
                function set$gc($gd){return $gc=$gd;};
                $prop$get$gc={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identitySet$.$prop$getHash,pa:1024,d:['ceylon.collection','IdentitySet','$at','hash','$at','index$1kfbbh']};}};
                $prop$get$gc.get=function(){return $gc};
                $prop$get$gc.set=set$gc;
                if(set$gc.$crtmm$===undefined)set$gc.$crtmm$=$prop$get$gc.$crtmm$;
                var $ge=(17);
                function set$ge($gf){return $ge=$gf;};
                $prop$get$ge={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:identitySet$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentitySet','$at','hash','$at','hash$3ydxbd']};}};
                $prop$get$ge.get=function(){return $ge};
                $prop$get$ge.set=set$ge;
                if(set$ge.$crtmm$===undefined)set$ge.$crtmm$=$prop$get$ge.$crtmm$;
                while(($gc<identitySet$.$em.size)){
                    var $gg=identitySet$.$em.$_get($gc);
                    function set$gg($gh){return $gg=$gh;};
                    $prop$get$gg={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$IdentitySet'}}]},$cont:identitySet$.$prop$getHash,pa:1027,d:['ceylon.collection','IdentitySet','$at','hash','$at','bucket$hhul3u']};}};
                    $prop$get$gg.get=function(){return $gg};
                    $prop$get$gg.set=set$gg;
                    if(set$gg.$crtmm$===undefined)set$gg.$crtmm$=$prop$get$gg.$crtmm$;
                    var $gi;
                    while(m$1.nn$(($gi=$gg))){
                        $ge=$ge.times(31).plus(m$1.identityHash($gi));
                        $gg=$gi.rest;
                    }
                    ($gj=$gc,$gc=$gj.successor,$gj);
                    var $gj;
                }
                return $ge;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$at','hash']};});identitySet$.equals=function($gk){
                var identitySet$=this;
                var $gl;
                if(m$1.is$(($gl=$gk),{t:IdentitySet,a:{Element$IdentitySet:{t:m$1.$_Object}}})&&(identitySet$.size==$gl.size)){
                    var $gm=(0);
                    function set$gm($gn){return $gm=$gn;};
                    while(($gm<identitySet$.$em.size)){
                        var $go=identitySet$.$em.$_get($gm);
                        function set$go($gp){return $go=$gp;};
                        var $gq;
                        while(m$1.nn$(($gq=$go))){
                            if(!$gl.contains($gq.element)){
                                return false;
                            }
                            $go=$gq.rest;
                        }
                        ($gr=$gm,$gm=$gr.successor,$gr);
                        var $gr;
                    }
                    return true;
                }
                return false;
            };identitySet$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','equals']};};
            identitySet$.clone=function(){
                var identitySet$=this;
                var $gs=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
                ($gs.$en=identitySet$.$en);
                ($gs.$em=elementStore(identitySet$.$em.size,{Element$elementStore:identitySet$.$$targs$$.Element$IdentitySet}));
                var $gt=(0);
                function set$gt($gu){return $gt=$gu;};
                while(($gt<identitySet$.$em.size)){
                    var $gv;
                    if(m$1.nn$(($gv=identitySet$.$em.$_get($gt)))){
                        $gs.$em.set($gt,$gv.clone());
                    }
                    ($gw=$gt,$gt=$gw.successor,$gw);
                    var $gw;
                }
                return $gs;
            };identitySet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','clone']};};
            identitySet$.contains=function($gx){
                var identitySet$=this;
                var $gy;
                if(m$1.is$(($gy=$gx),{t:m$1.Identifiable})){
                    var $gz=(0);
                    function set$gz($h0){return $gz=$h0;};
                    while(($gz<identitySet$.$em.size)){
                        var $h1=identitySet$.$em.$_get($gz);
                        function set$h1($h2){return $h1=$h2;};
                        var $h3;
                        while(m$1.nn$(($h3=$h1))){
                            if(($h3.element===$gy)){
                                return true;
                            }
                            $h1=$h3.rest;
                        }
                        ($h4=$gz,$gz=$h4.successor,$h4);
                        var $h4;
                    }
                }
                return false;
            };identitySet$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:IdentitySet,pa:3,d:['ceylon.collection','IdentitySet','$m','contains']};};
            identitySet$.superset=function($h5,$$$mptypes){
                var identitySet$=this;
                var $h7;for(var $h6=$h5.iterator();($h7=$h6.next())!==m$1.getFinished();){
                    if(!identitySet$.contains($h7)){
                        return false;
                    }
                }
                if(m$1.getFinished()===$h7){
                    return true;
                }
            };identitySet$.superset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$superset'}}}],$cont:IdentitySet,tp:{Other$superset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','superset']};};
            identitySet$.subset=function($h8,$$$mptypes){
                var identitySet$=this;
                var $ha;for(var $h9=identitySet$.iterator();($ha=$h9.next())!==m$1.getFinished();){
                    if(!$h8.contains($ha)){
                        return false;
                    }
                }
                if(m$1.getFinished()===$ha){
                    return true;
                }
            };identitySet$.subset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$subset'}}}],$cont:IdentitySet,tp:{Other$subset:{sts:[{t:m$1.Identifiable}]}},pa:9,d:['ceylon.collection','IdentitySet','$m','subset']};};
            identitySet$.complement=function($hb,$$$mptypes){
                var identitySet$=this;
                var $hc=IdentitySet(undefined,undefined,{Element$IdentitySet:identitySet$.$$targs$$.Element$IdentitySet});
                var $he;for(var $hd=identitySet$.iterator();($he=$hd.next())!==m$1.getFinished();){
                    if(!$hb.contains($he)){
                        $hc.add($he);
                    }
                }
                return $hc;
            };identitySet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:'Element$IdentitySet'}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$complement'}}}],$cont:IdentitySet,tp:{Other$complement:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','complement']};};
            identitySet$.exclusiveUnion=function($hf,$$$mptypes){
                var identitySet$=this;
                var $hg=IdentitySet(undefined,undefined,{Element$IdentitySet:{t:'u',l:[identitySet$.$$targs$$.Element$IdentitySet,$$$mptypes.Other$exclusiveUnion]}});
                var $hi;for(var $hh=identitySet$.iterator();($hi=$hh.next())!==m$1.getFinished();){
                    if(!$hf.contains($hi)){
                        $hg.add($hi);
                    }
                }
                var $hk;for(var $hj=$hf.iterator();($hk=$hj.next())!==m$1.getFinished();){
                    if(!identitySet$.contains($hk)){
                        $hg.add($hk);
                    }
                }
                return $hg;
            };identitySet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$exclusiveUnion'}}}],$cont:IdentitySet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','exclusiveUnion']};};
            identitySet$.intersection=function($hl,$$$mptypes){
                var identitySet$=this;
                var $hm=IdentitySet(undefined,undefined,{Element$IdentitySet:{t:'i',l:[identitySet$.$$targs$$.Element$IdentitySet,$$$mptypes.Other$intersection]}});
                var $ho;for(var $hn=identitySet$.iterator();($ho=$hn.next())!==m$1.getFinished();){
                    var $hp;
                    if($hl.contains($ho)&&m$1.is$(($hp=$ho),$$$mptypes.Other$intersection)){
                        $hm.add($hp);
                    }
                }
                return $hm;
            };identitySet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'i',l:['Element$IdentitySet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$intersection'}}}],$cont:IdentitySet,tp:{Other$intersection:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','intersection']};};
            identitySet$.union=function($hq,$$$mptypes){
                var identitySet$=this;
                var $hr=IdentitySet(undefined,undefined,{Element$IdentitySet:{t:'u',l:[identitySet$.$$targs$$.Element$IdentitySet,$$$mptypes.Other$union]}});
                $hr.addAll(identitySet$);
                $hr.addAll($hq);
                return $hr;
            };identitySet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:IdentitySet,a:{Element$IdentitySet:{t:'u',l:['Element$IdentitySet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:IdentitySet,a:{Element$IdentitySet:'Other$union'}}}],$cont:IdentitySet,tp:{Other$union:{sts:[{t:m$1.Identifiable}]}},pa:1,d:['ceylon.collection','IdentitySet','$m','union']};};
        })(IdentitySet.$$.prototype);
    }
    return IdentitySet;
}
ex$.$init$IdentitySet=$init$IdentitySet;
$init$IdentitySet();
function invert($hs,$$$mptypes){
    var $ht=HashMap(undefined,undefined,undefined,{Key$HashMap:$$$mptypes.Item$invert,Item$HashMap:{t:ArrayList,a:{Element$ArrayList:$$$mptypes.Key$invert}}});
    var $hv;for(var $hu=$hs.iterator();($hv=$hu.next())!==m$1.getFinished();){
        var $hw=$hv.key,$hx=$hv.item;
        var $hy;
        if(m$1.nn$(($hy=$ht.$_get($hx)))){
            $hy.add($hw);
        }else {
            var $hz=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Key$invert});
            $hz.add($hw);
            $ht.put($hx,$hz);
        }
    }
    function $i0($i1,$i2){
        var $i3;
        m$1.asrt$((m$1.is$(($i3=$i2.sequence()),{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Key$invert}})),"Assertion failed: \'is [Key+] result = sa.sequence()\' at invert.ceylon (21:14-21:47)",'21:8-21:48','invert.ceylon');
        return $i3;
    };$i0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}},ps:[{nm:'item',mt:'prm',$t:'Item$invert'},{nm:'sa',mt:'prm',$t:{t:ArrayList,a:{Element$ArrayList:'Key$invert'}}}],$cont:invert,d:['ceylon.collection','invert','$m','mapping$ii3181']};};
    return $ht.mapItems(m$1.JsCallable(0,$i0),{Result$mapItems:{t:m$1.Sequence,a:{Element$Sequence:$$$mptypes.Key$invert}}});
};invert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Item$invert',Item$Map:{t:m$1.Sequence,a:{Element$Sequence:'Key$invert'}}}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$invert',Item$Map:'Item$invert'}}}],tp:{Key$invert:{sts:[{t:m$1.$_Object}]},Item$invert:{sts:[{t:m$1.$_Object}]}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:invert')];},d:['ceylon.collection','invert']};};
function LinkedCell($i4,$i5,previous,$$targs$$,linkedCell$){
    $init$LinkedCell();
    if(linkedCell$===undefined)linkedCell$=new LinkedCell.$$;
    m$1.set_type_args(linkedCell$,$$targs$$);
    linkedCell$.$i4_=$i4;
    linkedCell$.$i5_=$i5;
    linkedCell$.previous_=previous;
    Cell(linkedCell$.$i4,linkedCell$.$i5,{Element$Cell:linkedCell$.$$targs$$.Element$LinkedCell},linkedCell$);
    linkedCell$.$i6_=null;
    linkedCell$.$prop$getNext={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};}};
    linkedCell$.$prop$getNext.get=function(){return next};
    linkedCell$.$prop$getPrevious={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};}};
    linkedCell$.$prop$getPrevious.get=function(){return previous};
    return linkedCell$;
}
LinkedCell.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Cell,a:{Element$Cell:'Element$LinkedCell'}},ps:[{nm:'car',mt:'prm',$t:'Element$LinkedCell'},{nm:'cdr',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedCell'}}]}},{nm:'previous',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},pa:1025}],tp:{Element$LinkedCell:{}},d:['ceylon.collection','LinkedCell']};};
function $init$LinkedCell(){
    if(LinkedCell.$$===undefined){
        m$1.initTypeProto(LinkedCell,'ceylon.collection::LinkedCell',$init$Cell());
        (function(linkedCell$){
            m$1.atr$(linkedCell$,'next',function(){return this.$i6_;},function($i7){return this.$i6_=$i7;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','next']};});
            m$1.atr$(linkedCell$,'previous',function(){return this.previous_;},function($i8){return this.previous_=$i8;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCell'}}]},$cont:LinkedCell,pa:1025,d:['ceylon.collection','LinkedCell','$at','previous']};});
            m$1.atr$(linkedCell$,'$i4',function(){return this.$i4_;},undefined,function(){return{mod:$CCMM$,$t:'Element$LinkedCell',$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','car$c10yed']};});
            m$1.atr$(linkedCell$,'$i5',function(){return this.$i5_;},undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedCell'}}]},$cont:LinkedCell,d:['ceylon.collection','LinkedCell','$at','cdr$c13omy']};});
        })(LinkedCell.$$.prototype);
    }
    return LinkedCell;
}
ex$.$init$LinkedCell=$init$LinkedCell;
$init$LinkedCell();
function LinkedCellIterator($i9,$$targs$$,linkedCellIterator$){
    $init$LinkedCellIterator();
    if(linkedCellIterator$===undefined)linkedCellIterator$=new LinkedCellIterator.$$;
    m$1.set_type_args(linkedCellIterator$,$$targs$$);
    linkedCellIterator$.$i9_=$i9;
    m$1.Iterator({Element$Iterator:$$targs$$.Element$LinkedCellIterator},linkedCellIterator$);
    linkedCellIterator$.$prop$get$i9={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};}};
    linkedCellIterator$.$prop$get$i9.get=function(){return $i9};
    return linkedCellIterator$;
}
LinkedCellIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'iter',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},pa:1024}],tp:{Element$LinkedCellIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$LinkedCellIterator'}}],d:['ceylon.collection','LinkedCellIterator']};};
function $init$LinkedCellIterator(){
    if(LinkedCellIterator.$$===undefined){
        m$1.initTypeProto(LinkedCellIterator,'ceylon.collection::LinkedCellIterator',m$1.Basic,m$1.Iterator);
        (function(linkedCellIterator$){
            m$1.atr$(linkedCellIterator$,'$i9',function(){return this.$i9_;},function($ia){return this.$i9_=$ia;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:LinkedCell,a:{Element$LinkedCell:'Element$LinkedCellIterator'}}]},$cont:LinkedCellIterator,pa:1024,d:['ceylon.collection','LinkedCellIterator','$at','iter$rxmm2v']};});
            linkedCellIterator$.next=function(){
                var linkedCellIterator$=this;
                var $ib;
                if(m$1.nn$(($ib=linkedCellIterator$.$i9))){
                    (linkedCellIterator$.$i9=$ib.next);
                    return $ib.element;
                }
                return m$1.getFinished();
            };linkedCellIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$LinkedCellIterator',{t:m$1.Finished}]},ps:[],$cont:LinkedCellIterator,pa:3,d:['ceylon.collection','LinkedCellIterator','$m','next']};};
        })(LinkedCellIterator.$$.prototype);
    }
    return LinkedCellIterator;
}
ex$.$init$LinkedCellIterator=$init$LinkedCellIterator;
$init$LinkedCellIterator();
function LinkedList($ic,$$targs$$,linkedList$){
    $init$LinkedList();
    if(linkedList$===undefined)linkedList$=new LinkedList.$$;
    m$1.set_type_args(linkedList$,$$targs$$);
    if($ic===undefined){$ic=m$1.getEmpty();}
    linkedList$.$ic_=$ic;
    MutableList({Element$MutableList:$$targs$$.Element$LinkedList},linkedList$);
    Stack({Element$Stack:$$targs$$.Element$LinkedList},linkedList$);
    Queue({Element$Queue:$$targs$$.Element$LinkedList},linkedList$);
    linkedList$.$prop$get$ic={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},$cont:LinkedList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','LinkedList','$at','elements$59t65o']};}};
    linkedList$.$prop$get$ic.get=function(){return $ic};
    linkedList$.$id_=null;
    linkedList$.$prop$get$id={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};}};
    linkedList$.$prop$get$id.get=function(){return $id};
    linkedList$.$ie_=null;
    linkedList$.$prop$get$ie={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};}};
    linkedList$.$prop$get$ie.get=function(){return $ie};
    linkedList$.$if_=(0);
    linkedList$.$prop$get$if={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};}};
    linkedList$.$prop$get$if.get=function(){return $if};
    var $ih;for(var $ig=linkedList$.$ic.iterator();($ih=$ig.next())!==m$1.getFinished();){
        linkedList$.$ii($ih);
    }
    return linkedList$;
}
LinkedList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},an:function(){return[m$1.doc("The initial elements of the list.")];}}],tp:{Element$LinkedList:{}},sts:[{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},{t:Stack,a:{Element$Stack:'Element$LinkedList'}},{t:Queue,a:{Element$Queue:'Element$LinkedList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:LinkedList'),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','LinkedList']};};
ex$.LinkedList=LinkedList;
function $init$LinkedList(){
    if(LinkedList.$$===undefined){
        m$1.initTypeProto(LinkedList,'ceylon.collection::LinkedList',m$1.Basic,$init$MutableList(),$init$Stack(),$init$Queue());
        (function(linkedList$){
            m$1.atr$(linkedList$,'$ic',function(){return this.$ic_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}},$cont:LinkedList,an:function(){return[m$1.doc("The initial elements of the list.")];},d:['ceylon.collection','LinkedList','$at','elements$59t65o']};});
            m$1.atr$(linkedList$,'$id',function(){return this.$id_;},function($ij){return this.$id_=$ij;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','head$hmoq6r']};});
            m$1.atr$(linkedList$,'$ie',function(){return this.$ie_;},function($ik){return this.$ie_=$ik;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','tail$9m8bs3']};});
            m$1.atr$(linkedList$,'$if',function(){return this.$if_;},function($il){return this.$if_=$il;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:1027,d:['ceylon.collection','LinkedList','$at','length$5zg48z']};});
            linkedList$.$ii=function($im){
                var linkedList$=this;
                var $in=Cell($im,null,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
                var $io;
                if(m$1.nn$(($io=linkedList$.$ie))){
                    ($io.rest=$in);
                    (linkedList$.$ie=$in);
                }else {
                    linkedList$.$ie=(linkedList$.$id=$in);
                }
                ($ip=linkedList$.$if,linkedList$.$if=$ip.successor,$ip);
                var $ip;
            };linkedList$.$ii.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','addToTail$qbzc49']};};
            linkedList$.set=function($iq,$ir){
                var linkedList$=this;
                m$1.asrt$((($is=$iq,$is.compare((0))!==m$1.getSmaller()&&$is.compare(linkedList$.$if)===m$1.getSmaller())),"index may not be negative or greater than the\nlast index in the list: \'0<=index<length\' at LinkedList.ceylon (48:15-48:31)",'46:8-48:32','LinkedList.ceylon');
                var $it=linkedList$.$id;
                function set$it($iu){return $it=$iu;};
                var $iv=(0);
                function set$iv($iw){return $iv=$iw;};
                var $ix;
                while(m$1.nn$(($ix=$it))){
                    if((($iy=$iv,$iv=$iy.successor,$iy)==$iq)){
                        ($ix.element=$ir);
                        return;
                    }
                    var $iy;
                    $it=$ix.rest;
                }
            };linkedList$.set.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','set']};};
            linkedList$.insert=function($iz,$j0){
                var linkedList$=this;
                m$1.asrt$((($j1=$iz,$j1.compare((0))!==m$1.getSmaller()&&$j1.compare(linkedList$.$if)!==m$1.getLarger())),"index may not be negative or greater than the\nlength of the list: \'0<=index<=length\' at LinkedList.ceylon (63:15-63:32)",'61:8-63:33','LinkedList.ceylon');
                if(($iz==linkedList$.$if)){
                    linkedList$.add($j0);
                }else {
                    if(($iz==0)){
                        linkedList$.$id=Cell($j0,linkedList$.$id,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList});
                        ($j2=linkedList$.$if,linkedList$.$if=$j2.successor,$j2);
                        var $j2;
                    }else {
                        var $j3=linkedList$.$id;
                        function set$j3($j4){return $j3=$j4;};
                        var $j5=(0);
                        function set$j5($j6){return $j5=$j6;};
                        var $j7;
                        while(m$1.nn$(($j7=$j3))){
                            var $j8=$j7.rest;
                            if((($j5=$j5.successor)==$iz)){
                                ($j7.rest=Cell($j0,$j8,{Element$Cell:linkedList$.$$targs$$.Element$LinkedList}));
                                ($j9=linkedList$.$if,linkedList$.$if=$j9.successor,$j9);
                                var $j9;
                                return;
                            }
                            $j3=$j8;
                        }
                        m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (91:23-91:29)",'91:16-91:30','LinkedList.ceylon');
                    }
                }
            };linkedList$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','insert']};};
            linkedList$.add=function($ja){
                var linkedList$=this;
                linkedList$.$ii($ja);
            };linkedList$.add.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','add']};};
            linkedList$.addAll=function($jb){
                var linkedList$=this;
                var $jd;for(var $jc=$jb.iterator();($jd=$jc.next())!==m$1.getFinished();){
                    linkedList$.add($jd);
                }
            };linkedList$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$LinkedList'}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','addAll']};};
            linkedList$.$_delete=function($je){
                var linkedList$=this;
                if(($je==0)){
                    var $jf;
                    if(m$1.nn$(($jf=linkedList$.$id))){
                        var $jg;
                        if(m$1.nn$(($jg=$jf.rest))){
                            linkedList$.$id=$jg;
                        }else {
                            linkedList$.$id=(linkedList$.$ie=null);
                        }
                        ($jh=linkedList$.$if,linkedList$.$if=$jh.predecessor,$jh);
                        var $jh;
                        return $jf.element;
                    }else {
                        return null;
                    }
                }else {
                    if(($ji=$je,$ji.compare((0))===m$1.getLarger()&&$ji.compare(linkedList$.$if)===m$1.getSmaller())){
                        var $jj=linkedList$.$id;
                        function set$jj($jk){return $jj=$jk;};
                        var $jl=(0);
                        function set$jl($jm){return $jl=$jm;};
                        var $jn;
                        while(m$1.nn$(($jn=$jj))){
                            var $jo=$jn.rest;
                            if((($jl=$jl.successor)==$je)){
                                var $jp;
                                if(m$1.nn$(($jp=($jq=$jo,m$1.nn$($jq)?$jq.rest:null)))){
                                    ($jn.rest=$jp);
                                }else {
                                    linkedList$.$ie=$jn;
                                    ($jn.rest=null);
                                }
                                var $jq;
                                ($jr=linkedList$.$if,linkedList$.$if=$jr.predecessor,$jr);
                                var $jr;
                                return ($js=$jo,m$1.nn$($js)?$js.element:null);
                                var $js;
                            }else {
                                $jj=$jo;
                            }
                        }
                        m$1.asrt$((false),"Assertion failed: \'false\' at LinkedList.ceylon (142:19-142:25)",'142:12-142:26','LinkedList.ceylon');
                    }else {
                        return null;
                    }
                }
            };linkedList$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','delete']};};
            linkedList$.remove=function($jt){
                var linkedList$=this;
                var $ju,$jv;
                while(m$1.nn$(($ju=linkedList$.$id))&&m$1.nn$(($jv=$ju.element))&&$jv.equals($jt)){
                    var $jw;
                    if(m$1.nn$(($jw=$ju.rest))){
                        linkedList$.$id=$jw;
                    }else {
                        linkedList$.$id=(linkedList$.$ie=null);
                    }
                    ($jx=linkedList$.$if,linkedList$.$if=$jx.predecessor,$jx);
                    var $jx;
                }
                var $jy=linkedList$.$id;
                function set$jy($jz){return $jy=$jz;};
                var $k0;
                while(m$1.nn$(($k0=$jy))){
                    var $k1=$k0.rest;
                    var $k2,$k3;
                    if(m$1.nn$(($k2=$k1))&&m$1.nn$(($k3=$k2.element))&&$k3.equals($jt)){
                        var $k4;
                        if(m$1.nn$(($k4=$k2.rest))){
                            ($k0.rest=$k4);
                        }else {
                            ($k0.rest=(linkedList$.$ie=null));
                        }
                        ($k5=linkedList$.$if,linkedList$.$if=$k5.predecessor,$k5);
                        var $k5;
                    }else {
                        $jy=$k1;
                    }
                }
            };linkedList$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','remove']};};
            linkedList$.removeAll=function($k6){
                var linkedList$=this;
                var $k7,$k8;
                while(m$1.nn$(($k7=linkedList$.$id))&&m$1.nn$(($k8=$k7.element))&&$k6.contains($k8)){
                    var $k9;
                    if(m$1.nn$(($k9=$k7.rest))){
                        linkedList$.$id=$k9;
                    }else {
                        linkedList$.$id=(linkedList$.$ie=null);
                    }
                    ($ka=linkedList$.$if,linkedList$.$if=$ka.predecessor,$ka);
                    var $ka;
                }
                var $kb=linkedList$.$id;
                function set$kb($kc){return $kb=$kc;};
                var $kd;
                while(m$1.nn$(($kd=$kb))){
                    var $ke=$kd.rest;
                    var $kf,$kg;
                    if(m$1.nn$(($kf=$ke))&&m$1.nn$(($kg=$kf.element))&&$k6.contains($kg)){
                        var $kh;
                        if(m$1.nn$(($kh=$kf.rest))){
                            ($kd.rest=$kh);
                        }else {
                            ($kd.rest=(linkedList$.$ie=null));
                        }
                        ($ki=linkedList$.$if,linkedList$.$if=$ki.predecessor,$ki);
                        var $ki;
                    }else {
                        $kb=$ke;
                    }
                }
            };linkedList$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeAll']};};
            linkedList$.removeFirst=function($kj){
                var linkedList$=this;
                var $kk,$kl;
                if(m$1.nn$(($kk=linkedList$.$id))&&m$1.nn$(($kl=$kk.element))&&$kl.equals($kj)){
                    var $km;
                    if(m$1.nn$(($km=$kk.rest))){
                        linkedList$.$id=$km;
                    }else {
                        linkedList$.$id=(linkedList$.$ie=null);
                    }
                    ($kn=linkedList$.$if,linkedList$.$if=$kn.predecessor,$kn);
                    var $kn;
                    return true;
                }
                var $ko=linkedList$.$id;
                function set$ko($kp){return $ko=$kp;};
                var $kq;
                while(m$1.nn$(($kq=$ko))){
                    var $kr=$kq.rest;
                    var $ks,$kt;
                    if(m$1.nn$(($ks=$kr))&&m$1.nn$(($kt=$ks.element))&&$kt.equals($kj)){
                        var $ku;
                        if(m$1.nn$(($ku=$ks.rest))){
                            ($kq.rest=$ku);
                        }else {
                            ($kq.rest=(linkedList$.$ie=null));
                        }
                        ($kv=linkedList$.$if,linkedList$.$if=$kv.predecessor,$kv);
                        var $kv;
                        return true;
                    }
                    $ko=$kr;
                }
                return false;
            };linkedList$.removeFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeFirst']};};
            linkedList$.removeLast=function($kw){
                var linkedList$=this;
                var $kx=null;
                function set$kx($ky){return $kx=$ky;};
                var $kz,$l0;
                while(m$1.nn$(($kz=linkedList$.$id))&&m$1.nn$(($l0=$kz.element))&&$l0.equals($kw)){
                    var $l1;
                    if(m$1.nn$(($l1=$kz.rest))){
                        $kx=$kz;
                    }else {
                        linkedList$.$id=(linkedList$.$ie=null);
                        ($l2=linkedList$.$if,linkedList$.$if=$l2.predecessor,$l2);
                        var $l2;
                        return true;
                    }
                }
                var $l3=linkedList$.$id;
                function set$l3($l4){return $l3=$l4;};
                var $l5;
                while(m$1.nn$(($l5=$l3))){
                    var $l6=$l5.rest;
                    var $l7,$l8;
                    if(m$1.nn$(($l7=$l6))&&m$1.nn$(($l8=$l7.element))&&$l8.equals($kw)){
                        var $l9;
                        if(m$1.nn$(($l9=$l7.rest))){
                            $kx=$l5;
                        }else {
                            ($l5.rest=(linkedList$.$ie=null));
                            ($la=linkedList$.$if,linkedList$.$if=$la.predecessor,$la);
                            var $la;
                            return true;
                        }
                    }else {
                        $l3=$l6;
                    }
                }
                var $lb;
                if(m$1.nn$(($lb=$kx))){
                    var $lc;
                    m$1.asrt$((m$1.nn$(($lc=linkedList$.$id))),"Assertion failed: \'exists cell=head\' at LinkedList.ceylon (280:19-280:36)",'280:12-280:37','LinkedList.ceylon');
                    if(($lb===$lc)){
                        linkedList$.$id=$lb.rest;
                    }else {
                        var $ld;
                        m$1.asrt$((m$1.nn$(($ld=($le=$lb.rest,m$1.nn$($le)?$le.rest:null)))),"Assertion failed: \'exists more = last.rest?.rest\' at LinkedList.ceylon (285:23-285:53)",'285:16-285:54','LinkedList.ceylon');
                        var $le;
                        ($lc.rest=$ld);
                    }
                    ($lf=linkedList$.$if,linkedList$.$if=$lf.predecessor,$lf);
                    var $lf;
                    return true;
                }else {
                    return false;
                }
            };linkedList$.removeLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','removeLast']};};
            linkedList$.prune=function(){
                var linkedList$=this;
                var $lg;
                while(m$1.nn$(($lg=linkedList$.$id))&&!m$1.nn$($lg.element)){
                    var $lh;
                    if(m$1.nn$(($lh=$lg.rest))){
                        linkedList$.$id=$lh;
                    }else {
                        linkedList$.$id=(linkedList$.$ie=null);
                    }
                    ($li=linkedList$.$if,linkedList$.$if=$li.predecessor,$li);
                    var $li;
                }
                var $lj=linkedList$.$id;
                function set$lj($lk){return $lj=$lk;};
                var $ll;
                while(m$1.nn$(($ll=$lj))){
                    var $lm=$ll.rest;
                    var $ln;
                    if(m$1.nn$(($ln=$lm))&&!m$1.nn$($ln.element)){
                        var $lo;
                        if(m$1.nn$(($lo=$ln.rest))){
                            ($ll.rest=$lo);
                        }else {
                            ($ll.rest=(linkedList$.$ie=null));
                        }
                        ($lp=linkedList$.$if,linkedList$.$if=$lp.predecessor,$lp);
                        var $lp;
                    }else {
                        $lj=$lm;
                    }
                }
            };linkedList$.prune.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','prune']};};
            linkedList$.$_replace=function($lq,$lr){
                var linkedList$=this;
                var $ls=linkedList$.$id;
                function set$ls($lt){return $ls=$lt;};
                var $lu;
                while(m$1.nn$(($lu=$ls))){
                    var $lv;
                    if(m$1.nn$(($lv=$lu.element))&&$lv.equals($lq)){
                        ($lu.element=$lr);
                    }
                    $ls=$lu.rest;
                }
            };linkedList$.$_replace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replace']};};
            linkedList$.replaceFirst=function($lw,$lx){
                var linkedList$=this;
                var $ly=linkedList$.$id;
                function set$ly($lz){return $ly=$lz;};
                var $m0;
                while(m$1.nn$(($m0=$ly))){
                    var $m1;
                    if(m$1.nn$(($m1=$m0.element))&&$m1.equals($lw)){
                        ($m0.element=$lx);
                        return true;
                    }
                    $ly=$m0.rest;
                }
                return false;
            };linkedList$.replaceFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceFirst']};};
            linkedList$.replaceLast=function($m2,$m3){
                var linkedList$=this;
                var $m4=null;
                function set$m4($m5){return $m4=$m5;};
                var $m6=linkedList$.$id;
                function set$m6($m7){return $m6=$m7;};
                var $m8;
                while(m$1.nn$(($m8=$m6))){
                    var $m9;
                    if(m$1.nn$(($m9=$m8.element))&&$m9.equals($m2)){
                        $m4=$m8;
                    }
                    $m6=$m8.rest;
                }
                var $ma;
                if(m$1.nn$(($ma=$m4))){
                    ($ma.element=$m3);
                    return true;
                }else {
                    return false;
                }
            };linkedList$.replaceLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$LinkedList',{t:m$1.$_Object}]}},{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','replaceLast']};};
            linkedList$.infill=function($mb){
                var linkedList$=this;
                var $mc=linkedList$.$id;
                function set$mc($md){return $mc=$md;};
                var $me;
                while(m$1.nn$(($me=$mc))){
                    if(!m$1.nn$($me.element)){
                        ($me.element=$mb);
                    }
                    $mc=$me.rest;
                }
            };linkedList$.infill.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$LinkedList'}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','infill']};};
            linkedList$.clear=function(){
                var linkedList$=this;
                linkedList$.$if=(0);
                linkedList$.$id=(linkedList$.$ie=null);
            };linkedList$.clear.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clear']};};
            linkedList$.getFromFirst=function($mf){
                var linkedList$=this;
                var $mg=linkedList$.$id;
                function set$mg($mh){return $mg=$mh;};
                var $mi=(0);
                function set$mi($mj){return $mi=$mj;};
                var $mk;
                while(m$1.nn$(($mk=$mg))){
                    if((($ml=$mi,$mi=$ml.successor,$ml)==$mf)){
                        return $mk.element;
                    }
                    var $ml;
                    $mg=$mk.rest;
                }
                return null;
            };linkedList$.getFromFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','getFromFirst']};};
            linkedList$.spanFrom=function($mm){
                var linkedList$=this;
                var $mn=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                var $mo=linkedList$.$id;
                function set$mo($mp){return $mo=$mp;};
                var $mq=(0);
                function set$mq($mr){return $mq=$mr;};
                var $ms;
                while(m$1.nn$(($ms=$mo))){
                    if(($mq>=$mm)){
                        $mn.add($ms.element);
                    }
                    ($mt=$mq,$mq=$mt.successor,$mt);
                    var $mt;
                    $mo=$ms.rest;
                }
                return $mn;
            };linkedList$.spanFrom.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanFrom']};};
            linkedList$.spanTo=function($mu){
                var linkedList$=this;
                var $mv=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                var $mw=linkedList$.$id;
                function set$mw($mx){return $mw=$mx;};
                var $my=(0);
                function set$my($mz){return $my=$mz;};
                var $n0;
                while(m$1.nn$(($n0=$mw))){
                    if(($my>$mu)){
                        break;
                    }
                    $mv.add($n0.element);
                    ($n1=$my,$my=$n1.successor,$n1);
                    var $n1;
                    $mw=$n0.rest;
                }
                return $mv;
            };linkedList$.spanTo.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','spanTo']};};
            linkedList$.span=function($n2,$n3){
                var linkedList$=this;
                var $n4=spanToMeasure($n2,$n3,linkedList$.$if);
                var $n5=$n4.$_get(0);
                var $n6=$n4.$_get(1);
                var $n7=$n4.$_get(2);
                var $n8=LinkedList(linkedList$.skip($n5).take($n6),{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                return ($n9=($n7?$n8.reversed:null),m$1.nn$($n9)?$n9:$n8);
                var $n9;
            };linkedList$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$LinkedList'}},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','span']};};
            linkedList$.deleteSpan=function($na,$nb){
                var linkedList$=this;
                var $nc=spanToMeasure($na,$nb,linkedList$.$if);
                var $nd=$nc.$_get(0);
                var $ne=$nc.$_get(1);
                if((($nd<linkedList$.$if)&&($ne>0))){
                    var $nf=($nd>0);
                    var $ng=linkedList$.$nh($nd.minus(1),linkedList$.$id);
                    var $ni=$ne.plus(($nj=($nf?1:null),m$1.nn$($nj)?$nj:(0)));
                    var $nj;
                    var $nk=linkedList$.$nh($ni,($nl=$ng,m$1.nn$($nl)?$nl:linkedList$.$id));
                    var $nl;
                    if(!$nf){
                        linkedList$.$id=($nm=$ng,m$1.nn$($nm)?$nm:$nk);
                        var $nm;
                    }
                    var $nn;
                    if(m$1.nn$(($nn=$ng))){
                        ($nn.rest=$nk);
                    }
                    if(($ne>=linkedList$.$if)){
                        linkedList$.$ie=null;
                    }
                    (linkedList$.$if=linkedList$.$if.minus($ne));
                }
            };linkedList$.deleteSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','deleteSpan']};};
            linkedList$.$nh=function($no,$np){
                var linkedList$=this;
                if(($no<0)){
                    return null;
                }
                var $nq=$np;
                function set$nq($nr){return $nq=$nr;};
                var $ns;
                if(m$1.nn$(($ns=$np))&&($no>0)){
                    var $nu=(1),$nt=$no,$nv=$nu.compare($nt),$nw=$nv===m$1.getSmaller()?'successor':'predecessor';for(var $nx=m$1.eorl$($nv);$nx($nt,$nu);$nu=$nu[$nw]){
                        $nq=($ny=$nq,m$1.nn$($ny)?$ny.rest:null);
                        var $ny;
                    }
                }
                return $nq;
            };linkedList$.$nh.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},ps:[{nm:'cells',mt:'prm',$t:{t:m$1.Integer}},{nm:'start',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]}}],$cont:LinkedList,d:['ceylon.collection','LinkedList','$m','advanceBy$cg1mjm']};};
            linkedList$.measure=function($nz,$o0){
                var linkedList$=this;
                return linkedList$.span(($o1=measureToSpan($nz,$o0).sequence(),$o1.$_get(0)),$o1.$_get(1));
            };linkedList$.deleteMeasure=function($o2,$o3){
                var linkedList$=this;
                return linkedList$.deleteSpan(($o4=measureToSpan($o2,$o3).sequence(),$o4.$_get(0)),$o4.$_get(1));
            };linkedList$.defines=function($o5){
                var linkedList$=this;
                return (($o5>=0)&&($o5<linkedList$.$if));
            };linkedList$.contains=function($o6){
                var linkedList$=this;
                var $o7=linkedList$.$id;
                function set$o7($o8){return $o7=$o8;};
                var $o9;
                while(m$1.nn$(($o9=$o7))){
                    var $oa;
                    if(m$1.nn$(($oa=$o9.element))){
                        if($oa.equals($o6)){
                            return true;
                        }
                    }
                    $o7=$o9.rest;
                }
                return false;
            };linkedList$.contains.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','contains']};};
            m$1.atr$(linkedList$,'size',function(){
                var linkedList$=this;
                return linkedList$.$if;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','size']};});
            linkedList$.count=function($ob){
                var linkedList$=this;
                var $oc=linkedList$.$id;
                function set$oc($od){return $oc=$od;};
                var $oe=(0);
                function set$oe($of){return $oe=$of;};
                var $og;
                while(m$1.nn$(($og=$oc))){
                    if($ob($og.element)){
                        ($oh=$oe,$oe=$oh.successor,$oh);
                        var $oh;
                    }
                    $oc=$og.rest;
                }
                return $oe;
            };linkedList$.count.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','count']};};
            m$1.atr$(linkedList$,'lastIndex',function(){
                var linkedList$=this;
                return (!linkedList$.empty?linkedList$.$if.minus(1):null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','lastIndex']};});
            linkedList$.iterator=function(){
                var linkedList$=this;
                return CellIterator(linkedList$.$id,{Element$CellIterator:linkedList$.$$targs$$.Element$LinkedList});
            };linkedList$.clone=function(){
                var linkedList$=this;
                var $oi=LinkedList(undefined,{Element$LinkedList:linkedList$.$$targs$$.Element$LinkedList});
                ($oi.$id=linkedList$.$id);
                ($oi.$ie=linkedList$.$ie);
                ($oi.$if=linkedList$.size);
                return $oi;
            };linkedList$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','clone']};};
            m$1.atr$(linkedList$,'hash',function(){
                var linkedList$=this;
                var $oj=(17);
                function set$oj($ok){return $oj=$ok;};
                $prop$get$oj={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:linkedList$.$prop$getHash,pa:1027,d:['ceylon.collection','LinkedList','$at','hash','$at','hash$ywj17o']};}};
                $prop$get$oj.get=function(){return $oj};
                $prop$get$oj.set=set$oj;
                if(set$oj.$crtmm$===undefined)set$oj.$crtmm$=$prop$get$oj.$crtmm$;
                var $ol=linkedList$.$id;
                function set$ol($om){return $ol=$om;};
                $prop$get$ol={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$LinkedList'}}]},$cont:linkedList$.$prop$getHash,pa:1027,d:['ceylon.collection','LinkedList','$at','hash','$at','iter$z1rk4i']};}};
                $prop$get$ol.get=function(){return $ol};
                $prop$get$ol.set=set$ol;
                if(set$ol.$crtmm$===undefined)set$ol.$crtmm$=$prop$get$ol.$crtmm$;
                var $on;
                while(m$1.nn$(($on=$ol))){
                    var $oo;
                    if(m$1.nn$(($oo=$on.element))){
                        $oj=$oj.times(31).plus($oo.hash);
                    }else {
                        $oj=$oj.times(31);
                    }
                    $ol=$on.rest;
                }
                return $oj;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','hash']};});linkedList$.equals=function($op){
                var linkedList$=this;
                var $oq;
                if(m$1.is$(($oq=$op),{t:m$1.List,a:{Element$List:{t:m$1.Anything}}})&&(linkedList$.$if==$oq.size)){
                    var $or=linkedList$.$id;
                    function set$or($os){return $or=$os;};
                    var $ot=$oq.iterator();
                    function set$ot($ou){return $ot=$ou;};
                    var $ov;
                    while(m$1.nn$(($ov=$or))){
                        var $ow;
                        if(!m$1.is$(($ow=$ot.next()),{t:m$1.Finished})){
                            var $ox=$ov.element;
                            var $oy;
                            if(m$1.nn$(($oy=$ow))){
                                var $oz;
                                if(m$1.nn$(($oz=$ox))&&$oz.equals($oy)){
                                    $or=$ov.rest;
                                }else {
                                    return false;
                                }
                            }else {
                                var $p0;
                                if(m$1.nn$(($p0=$ox))){
                                    return false;
                                }else {
                                    $or=$ov.rest;
                                }
                            }
                        }else {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            };linkedList$.equals.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'that',mt:'prm',$t:{t:m$1.$_Object}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','equals']};};
            linkedList$.truncate=function($p1){
                var linkedList$=this;
                m$1.asrt$((($p1>=0)),"Assertion failed: \'size>=0\' at LinkedList.ceylon (594:15-594:23)",'594:8-594:24','LinkedList.ceylon');
                if(($p1==0)){
                    linkedList$.$id=(linkedList$.$ie=null);
                    linkedList$.$if=(0);
                }else {
                    var $p2=(0);
                    function set$p2($p3){return $p2=$p3;};
                    var $p4=linkedList$.$id;
                    function set$p4($p5){return $p4=$p5;};
                    var $p6;
                    while((($p2=$p2.successor)<$p1)&&m$1.nn$(($p6=$p4))){
                        $p4=$p6.rest;
                    }
                    var $p7;
                    if(m$1.nn$(($p7=$p4))){
                        ($p7.rest=null);
                        linkedList$.$ie=$p7;
                        linkedList$.$if=$p1;
                    }
                }
            };linkedList$.truncate.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','truncate']};};
            linkedList$.firstIndexWhere=function($p8){
                var linkedList$=this;
                var $p9=(0);
                function set$p9($pa){return $p9=$pa;};
                var $pc;for(var $pb=linkedList$.iterator();($pc=$pb.next())!==m$1.getFinished();){
                    var $pd;
                    if(m$1.nn$(($pd=$pc))&&$p8($pd)){
                        return $p9;
                    }
                    ($pe=$p9,$p9=$pe.successor,$pe);
                    var $pe;
                }
                return null;
            };linkedList$.firstIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("The predicate function the indexed elements \nmust satisfy")];}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','firstIndexWhere']};};
            linkedList$.lastIndexWhere=function($pf){
                var linkedList$=this;
                var $pg=(0);
                function set$pg($ph){return $pg=$ph;};
                var $pi=null;
                function set$pi($pj){return $pi=$pj;};
                var $pl;for(var $pk=linkedList$.iterator();($pl=$pk.next())!==m$1.getFinished();){
                    var $pm;
                    if(m$1.nn$(($pm=$pl))&&$pf($pm)){
                        $pi=$pg;
                    }
                    ($pn=$pg,$pg=$pn.successor,$pn);
                    var $pn;
                }
                return $pi;
            };linkedList$.lastIndexWhere.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc("The predicate function the indexed elements \nmust satisfy.")];}}],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','lastIndexWhere']};};
            m$1.atr$(linkedList$,'first',function(){
                var linkedList$=this;
                return ($po=linkedList$.$id,m$1.nn$($po)?$po.element:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','first']};});
            m$1.atr$(linkedList$,'last',function(){
                var linkedList$=this;
                return ($pp=linkedList$.$ie,m$1.nn$($pp)?$pp.element:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','last']};});
            linkedList$.$_push=function($pq){
                var linkedList$=this;
                return linkedList$.insert(0,$pq);
            };linkedList$.$_pop=function(){
                var linkedList$=this;
                return linkedList$.deleteFirst();
            };m$1.atr$(linkedList$,'top',function(){
                var linkedList$=this;
                return linkedList$.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','top']};});
            linkedList$.offer=function($pr){
                var linkedList$=this;
                return linkedList$.add($pr);
            };linkedList$.accept=function(){
                var linkedList$=this;
                return linkedList$.deleteFirst();
            };m$1.atr$(linkedList$,'back',function(){
                var linkedList$=this;
                return linkedList$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','back']};});
            m$1.atr$(linkedList$,'front',function(){
                var linkedList$=this;
                return linkedList$.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$LinkedList']},$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$at','front']};});
            linkedList$.sequence=function(){
                var linkedList$=this;
                return m$1.$_Array(linkedList$,{Element$Array:linkedList$.$$targs$$.Element$LinkedList}).sequence();
            };
            linkedList$.sequence.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Sequential,a:{Element$Sequential:'Element$LinkedList'}},ps:[],$cont:LinkedList,pa:3,d:['ceylon.collection','LinkedList','$m','sequence']};};
        })(LinkedList.$$.prototype);
    }
    return LinkedList;
}
ex$.$init$LinkedList=$init$LinkedList;
$init$LinkedList();
var $po,$pp;
var entryStore=function($ps,$$$mptypes){
    return m$1.arrayOfSize($ps,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:$$$mptypes.Key$entryStore,Item$Entry:$$$mptypes.Item$entryStore}}}}]}});
};
entryStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:{t:m$1.Entry,a:{Key$Entry:'Key$entryStore',Item$Entry:'Item$entryStore'}}}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Key$entryStore:{sts:[{t:m$1.$_Object}]},Item$entryStore:{sts:[{t:m$1.$_Object}]}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:entryStore')];},d:['ceylon.collection','entryStore']};};
var elementStore=function($pt,$$$mptypes){
    return m$1.arrayOfSize($pt,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:$$$mptypes.Element$elementStore}}]}});
};
elementStore.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$elementStore'}}]}}},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],tp:{Element$elementStore:{}},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:elementStore')];},d:['ceylon.collection','elementStore']};};
ex$.$mod$ans$=function(){return[m$1.doc("Library providing general-purpose mutable lists, sets, and \nmaps.\n\nThe following interfaces define abstract mutable collection \ntypes:\n\n- [[MutableList]] is a mutable [[List]],\n- [[MutableSet]] is a mutable [[Set]], and\n- [[MutableMap]] is a mutable [[Map]].\n\nThese interfaces define abstract sorted collection types:\n\n- [[SortedSet]] is a sorted [[Set]], and\n- [[SortedMap]] is a sorted [[Map]].\n\nIn addition, dedicated [[Stack]] and [[Queue]] interfaces \nare defined, representing specialized kinds of lists.\n\nThese concrete implementations are provided:\n\n- [[ArrayList]] is a `MutableList` implemented using an\n  [[Array]].\n- [[LinkedList]] is a `MutableList` implemented using a\n  singly-linked list.\n- [[PriorityQueue]] is a `Queue` implemented using an\n  [[Array]] where the front of the queue is the smallest element\n- [[HashSet]] is a mutable hash set implemented using an \n  [[Array]] of singly-linked lists.\n- [[HashMap]] is a mutable hash map implemented using an \n  [[Array]] of singly-linked lists of [[Entry]]s.\n- [[TreeSet]] is a mutable `SortedSet` implemented using a \n  red/black binary tree.\n- [[TreeMap]] is a mutable `SortedMap` implemented using a \n  red/black binary tree.\n\nThe functions [[unmodifiableList]], [[unmodifiableSet]],\nand [[unmodifiableMap]] may be used to hide these mutable \nlist, set, and map implementations from clients. \n\nFinally, [[IdentitySet]] and [[IdentityMap]] are provided."),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String})),m$1.license("Apache Software License")];};
function MutableList($$targs$$,mutableList$){
    m$1.List({Element$List:$$targs$$.Element$MutableList},mutableList$);
    ListMutator({Element$ListMutator:$$targs$$.Element$MutableList},mutableList$);
    m$1.set_type_args(mutableList$,$$targs$$);
}
MutableList.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableList:{}},sts:[{t:m$1.List,a:{Element$List:'Element$MutableList'}},{t:ListMutator,a:{Element$ListMutator:'Element$MutableList'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList)].rt$({t:m$1.ClassDeclaration$meta$declaration})),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','MutableList']};};
ex$.MutableList=MutableList;
function $init$MutableList(){
    if(MutableList.$$===undefined){
        m$1.initTypeProtoI(MutableList,'ceylon.collection::MutableList',$init$ListMutator(),m$1.List);
        (function(mutableList$){
            mutableList$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:delete')];},d:['ceylon.collection','MutableList','$m','delete']};}};mutableList$.deleteFirst=function(){
                var mutableList$=this;
                return mutableList$.$_delete(0);
            };
            mutableList$.deleteFirst.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteFirst')];},d:['ceylon.collection','MutableList','$m','deleteFirst']};};
            mutableList$.deleteLast=function(){
                var mutableList$=this;
                return mutableList$.$_delete(mutableList$.size.minus(1));
            };
            mutableList$.deleteLast.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$MutableList']},ps:[],$cont:MutableList,pa:11,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:deleteLast')];},d:['ceylon.collection','MutableList','$m','deleteLast']};};
            mutableList$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableList,a:{Element$MutableList:'Element$MutableList'}},ps:[],$cont:MutableList,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableList:$m:clone')];},d:['ceylon.collection','MutableList','$m','clone']};}};
        })(MutableList.$$.prototype);
    }
    return MutableList;
}
ex$.$init$MutableList=$init$MutableList;
$init$MutableList();
function ListMutator($$targs$$,listMutator$){
    m$1.List({Element$List:{t:m$1.Anything}},listMutator$);
    m$1.set_type_args(listMutator$,$$targs$$);
}
ListMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$ListMutator:{dv:'in'}},sts:[{t:m$1.List,a:{Element$List:{t:m$1.Anything}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableList)].rt$({t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','ListMutator']};};
ex$.ListMutator=ListMutator;
function $init$ListMutator(){
    if(ListMutator.$$===undefined){
        m$1.initTypeProtoI(ListMutator,'ceylon.collection::ListMutator',m$1.List);
        (function(listMutator$){
            listMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:add')];},d:['ceylon.collection','ListMutator','$m','add']};}};listMutator$.addAll={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$ListMutator'}}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:addAll')];},d:['ceylon.collection','ListMutator','$m','addAll']};}};listMutator$.set={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:set'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex`")];},d:['ceylon.collection','ListMutator','$m','set']};}};listMutator$.insert={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'element',mt:'prm',$t:'Element$ListMutator'}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:insert'),m$1.$_throws("AssertionError","if the given index is out of bounds, that\nis, if `index<0` or if `index>lastIndex+1`")];},d:['ceylon.collection','ListMutator','$m','insert']};}};listMutator$.$_delete={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:delete')];},d:['ceylon.collection','ListMutator','$m','delete']};}};listMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:remove')];},d:['ceylon.collection','ListMutator','$m','remove']};}};listMutator$.removeAll={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]}}},an:function(){return[m$1.doc("The non-null values to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeAll')];},d:['ceylon.collection','ListMutator','$m','removeAll']};}};listMutator$.removeFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeFirst')];},d:['ceylon.collection','ListMutator','$m','removeFirst']};}};listMutator$.removeLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to remove")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:removeLast')];},d:['ceylon.collection','ListMutator','$m','removeLast']};}};listMutator$.prune={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:prune')];},d:['ceylon.collection','ListMutator','$m','prune']};}};listMutator$.$_replace={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replace')];},d:['ceylon.collection','ListMutator','$m','replace']};}};listMutator$.replaceFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceFirst')];},d:['ceylon.collection','ListMutator','$m','replaceFirst']};}};listMutator$.replaceLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:{t:'i',l:['Element$ListMutator',{t:m$1.$_Object}]},an:function(){return[m$1.doc("The non-null value to replace")];}},{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:replaceLast')];},d:['ceylon.collection','ListMutator','$m','replaceLast']};}};listMutator$.infill={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'replacement',mt:'prm',$t:'Element$ListMutator',an:function(){return[m$1.doc("The replacement value")];}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:infill')];},d:['ceylon.collection','ListMutator','$m','infill']};}};listMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:clear')];},d:['ceylon.collection','ListMutator','$m','clear']};}};listMutator$.deleteFirst={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteFirst')];},d:['ceylon.collection','ListMutator','$m','deleteFirst']};}};listMutator$.deleteLast={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteLast')];},d:['ceylon.collection','ListMutator','$m','deleteLast']};}};listMutator$.deleteSpan={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteSpan')];},d:['ceylon.collection','ListMutator','$m','deleteSpan']};}};listMutator$.deleteMeasure={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:deleteMeasure')];},d:['ceylon.collection','ListMutator','$m','deleteMeasure']};}};listMutator$.truncate={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],$cont:ListMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:ListMutator:$m:truncate'),m$1.$_throws("AssertionError","if `size<0`")];},d:['ceylon.collection','ListMutator','$m','truncate']};}};
        })(ListMutator.$$.prototype);
    }
    return ListMutator;
}
ex$.$init$ListMutator=$init$ListMutator;
$init$ListMutator();
var measureToSpan=function($pu,$pv){
    return ($pw=(($pv<=0)?m$1.tpl$([(-1),(-1)],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]}):null),m$1.nn$($pw)?$pw:m$1.tpl$([$pu,$pu.plus($pv).minus(1)],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer}]}));
};
measureToSpan.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:measureToSpan')];},d:['ceylon.collection','measureToSpan']};};
var $pw;
function spanToMeasure($px,$py,$pz){
    if((($pz==0)||(($px<0)&&($py<0)))){
        return m$1.tpl$([0,0,false],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]});
    }
    var $q0=($px>$py);
    var $q1=largest(0,($q2=($q0?$py:null),m$1.nn$($q2)?$q2:$px));
    var $q2;
    var $q3=smallest($pz.minus(1),($q4=($q0?$px:null),m$1.nn$($q4)?$q4:$py));
    var $q4;
    return m$1.tpl$([$q1,(1).plus($q3).minus($q1),$q0],{t:'T',l:[{t:m$1.Integer},{t:m$1.Integer},{t:m$1.$_Boolean}]});
};spanToMeasure.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{$t:{t:m$1.Integer}},{$t:{t:m$1.Integer}},{$t:{t:m$1.$_Boolean}}]},ps:[{nm:'from',mt:'prm',$t:{t:m$1.Integer}},{nm:'to',mt:'prm',$t:{t:m$1.Integer}},{nm:'size',mt:'prm',$t:{t:m$1.Integer}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:spanToMeasure')];},d:['ceylon.collection','spanToMeasure']};};
var largest=function($q5,$q6){
    return ($q7=(($q5>$q6)?$q5:null),m$1.nn$($q7)?$q7:$q6);
};
largest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','largest']};};
var $q7;
var smallest=function($q8,$q9){
    return ($qa=(($q8<$q9)?$q8:null),m$1.nn$($qa)?$qa:$q9);
};
smallest.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'x',mt:'prm',$t:{t:m$1.Integer}},{nm:'y',mt:'prm',$t:{t:m$1.Integer}}],d:['ceylon.collection','smallest']};};
var $qa;
function MutableMap($$targs$$,mutableMap$){
    m$1.Map({Key$Map:$$targs$$.Key$MutableMap,Item$Map:$$targs$$.Item$MutableMap},mutableMap$);
    MapMutator({Item$MapMutator:$$targs$$.Item$MutableMap,Key$MapMutator:$$targs$$.Key$MutableMap},mutableMap$);
    m$1.set_type_args(mutableMap$,$$targs$$);
}
MutableMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MutableMap:{sts:[{t:m$1.$_Object}]},Item$MutableMap:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Map,a:{Key$Map:'Key$MutableMap',Item$Map:'Item$MutableMap'}},{t:MapMutator,a:{Item$MapMutator:'Item$MutableMap',Key$MapMutator:'Key$MutableMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashMap)].rt$({t:m$1.ClassDeclaration$meta$declaration})),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','MutableMap']};};
ex$.MutableMap=MutableMap;
function $init$MutableMap(){
    if(MutableMap.$$===undefined){
        m$1.initTypeProtoI(MutableMap,'ceylon.collection::MutableMap',$init$MapMutator(),m$1.Map);
        (function(mutableMap$){
            mutableMap$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'},{nm:'item',mt:'prm',$t:'Item$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:put')];},d:['ceylon.collection','MutableMap','$m','put']};}};mutableMap$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$MutableMap']},ps:[{nm:'key',mt:'prm',$t:'Key$MutableMap'}],$cont:MutableMap,pa:7,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableMap:$m:remove')];},d:['ceylon.collection','MutableMap','$m','remove']};}};mutableMap$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableMap,a:{Key$MutableMap:'Key$MutableMap',Item$MutableMap:'Item$MutableMap'}},ps:[],$cont:MutableMap,pa:7,d:['ceylon.collection','MutableMap','$m','clone']};}};
        })(MutableMap.$$.prototype);
    }
    return MutableMap;
}
ex$.$init$MutableMap=$init$MutableMap;
$init$MutableMap();
function MapMutator($$targs$$,mapMutator$){
    m$1.Map({Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.$_Object}},mapMutator$);
    m$1.set_type_args(mapMutator$,$$targs$$);
}
MapMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$MapMutator:{dv:'in',sts:[{t:m$1.$_Object}]},Item$MapMutator:{dv:'in',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Map,a:{Key$Map:{t:m$1.$_Object},Item$Map:{t:m$1.$_Object}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableMap)].rt$({t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','MapMutator']};};
ex$.MapMutator=MapMutator;
function $init$MapMutator(){
    if(MapMutator.$$===undefined){
        m$1.initTypeProtoI(MapMutator,'ceylon.collection::MapMutator',m$1.Map);
        (function(mapMutator$){
            mapMutator$.put={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'},{nm:'item',mt:'prm',$t:'Item$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:put')];},d:['ceylon.collection','MapMutator','$m','put']};}};mapMutator$.putAll=function($qb){
                var mapMutator$=this;
                var $qd;for(var $qc=$qb.iterator();($qd=$qc.next())!==m$1.getFinished();){
                    var $qe=$qd.key,$qf=$qd.item;
                    mapMutator$.put($qe,$qf);
                }
            };mapMutator$.putAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$MapMutator',Item$Entry:'Item$MapMutator'}}}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:putAll')];},d:['ceylon.collection','MapMutator','$m','putAll']};};
            mapMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.$_Object}]},ps:[{nm:'key',mt:'prm',$t:'Key$MapMutator'}],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:remove')];},d:['ceylon.collection','MapMutator','$m','remove']};}};mapMutator$.removeAll=function($qg){
                var mapMutator$=this;
                var $qi;for(var $qh=$qg.iterator();($qi=$qh.next())!==m$1.getFinished();){
                    mapMutator$.remove($qi);
                }
            };mapMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'keys',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Key$MapMutator'}}}],$cont:MapMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:removeAll')];},d:['ceylon.collection','MapMutator','$m','removeAll']};};
            mapMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:MapMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MapMutator:$m:clear')];},d:['ceylon.collection','MapMutator','$m','clear']};}};
        })(MapMutator.$$.prototype);
    }
    return MapMutator;
}
ex$.$init$MapMutator=$init$MapMutator;
$init$MapMutator();
function MutableSet($$targs$$,mutableSet$){
    m$1.Set({Element$Set:$$targs$$.Element$MutableSet},mutableSet$);
    SetMutator({Element$SetMutator:$$targs$$.Element$MutableSet},mutableSet$);
    m$1.set_type_args(mutableSet$,$$targs$$);
}
MutableSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$MutableSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$MutableSet'}},{t:SetMutator,a:{Element$SetMutator:'Element$MutableSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:MutableSet'),m$1.by(["Stéphane Épardaud"].rt$({t:m$1.$_String})),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),HashSet)].rt$({t:m$1.ClassDeclaration$meta$declaration}))];},d:['ceylon.collection','MutableSet']};};
ex$.MutableSet=MutableSet;
function $init$MutableSet(){
    if(MutableSet.$$===undefined){
        m$1.initTypeProtoI(MutableSet,'ceylon.collection::MutableSet',$init$SetMutator(),m$1.Set);
        (function(mutableSet$){
            mutableSet$.clone={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:MutableSet,a:{Element$MutableSet:'Element$MutableSet'}},ps:[],$cont:MutableSet,pa:7,d:['ceylon.collection','MutableSet','$m','clone']};}};
        })(MutableSet.$$.prototype);
    }
    return MutableSet;
}
ex$.$init$MutableSet=$init$MutableSet;
$init$MutableSet();
function SetMutator($$targs$$,setMutator$){
    m$1.Set({Element$Set:{t:m$1.$_Object}},setMutator$);
    m$1.set_type_args(setMutator$,$$targs$$);
}
SetMutator.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SetMutator:{dv:'in',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:{t:m$1.$_Object}}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator'),m$1.see([m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),MutableSet)].rt$({t:m$1.InterfaceDeclaration$meta$declaration}))];},d:['ceylon.collection','SetMutator']};};
ex$.SetMutator=SetMutator;
function $init$SetMutator(){
    if(SetMutator.$$===undefined){
        m$1.initTypeProtoI(SetMutator,'ceylon.collection::SetMutator',m$1.Set);
        (function(setMutator$){
            setMutator$.add={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:add')];},d:['ceylon.collection','SetMutator','$m','add']};}};setMutator$.addAll=function($qj){
                var setMutator$=this;
                var $qk=false;
                function set$qk($ql){return $qk=$ql;};
                var $qn;for(var $qm=$qj.iterator();($qn=$qm.next())!==m$1.getFinished();){
                    if(setMutator$.add($qn)){
                        $qk=true;
                    }
                }
                return $qk;
            };setMutator$.addAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:addAll')];},d:['ceylon.collection','SetMutator','$m','addAll']};};
            setMutator$.remove={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'element',mt:'prm',$t:'Element$SetMutator'}],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:remove')];},d:['ceylon.collection','SetMutator','$m','remove']};}};setMutator$.removeAll=function($qo){
                var setMutator$=this;
                var $qp=false;
                function set$qp($qq){return $qp=$qq;};
                var $qs;for(var $qr=$qo.iterator();($qs=$qr.next())!==m$1.getFinished();){
                    if(setMutator$.remove($qs)){
                        $qp=true;
                    }
                }
                return $qp;
            };setMutator$.removeAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SetMutator'}}}],$cont:SetMutator,pa:9,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:removeAll')];},d:['ceylon.collection','SetMutator','$m','removeAll']};};
            setMutator$.clear={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:SetMutator,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SetMutator:$m:clear')];},d:['ceylon.collection','SetMutator','$m','clear']};}};
        })(SetMutator.$$.prototype);
    }
    return SetMutator;
}
ex$.$init$SetMutator=$init$SetMutator;
$init$SetMutator();
ex$.$pkg$ans$ceylon$collection=function(){return[m$1.shared()];};
function partition($qt,$qu,$$$mptypes){
    var $qv=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Element$partition});
    var $qw=ArrayList(undefined,undefined,undefined,{Element$ArrayList:$$$mptypes.Element$partition});
    var $qy;for(var $qx=$qt.iterator();($qy=$qx.next())!==m$1.getFinished();){
        if($qu($qy)){
            $qv.add($qy);
        }else {
            $qw.add($qy);
        }
    }
    return m$1.tpl$([$qv.sequence(),$qw.sequence()],{t:'T',l:[{t:m$1.Sequential,a:{Element$Sequential:$$$mptypes.Element$partition}},{t:m$1.Sequential,a:{Element$Sequential:$$$mptypes.Element$partition}}]});
}
ex$.partition=partition;
partition.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'T',l:[{$t:{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}},{$t:{t:m$1.Sequential,a:{Element$Sequential:'Element$partition'}}}]},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$partition'}}},{nm:'selecting',mt:'prm',$pt:'f',$t:{t:m$1.$_Boolean},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition:$m:selecting$1pd776')];}}],tp:{Element$partition:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:partition')];},d:['ceylon.collection','partition']};};
function PriorityQueue($qz,$r0,$r1,$r2,$$targs$$,priorityQueue$){
    $init$PriorityQueue();
    if(priorityQueue$===undefined)priorityQueue$=new PriorityQueue.$$;
    m$1.set_type_args(priorityQueue$,$$targs$$);
    priorityQueue$.$qz_=$qz;
    if($r0===undefined){$r0=(0);}
    priorityQueue$.$r0_=$r0;
    if($r1===undefined){$r1=m$1.Float(1.5);}
    priorityQueue$.$r1_=$r1;
    if($r2===undefined){$r2=m$1.getEmpty();}
    priorityQueue$.$r2_=$r2;
    m$1.Collection({Element$Collection:$$targs$$.Element$PriorityQueue},priorityQueue$);
    Queue({Element$Queue:$$targs$$.Element$PriorityQueue},priorityQueue$);
    priorityQueue$.$prop$get$r0={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};}};
    priorityQueue$.$prop$get$r0.get=function(){return $r0};
    priorityQueue$.$prop$get$r1={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};}};
    priorityQueue$.$prop$get$r1.get=function(){return $r1};
    priorityQueue$.$qz=$qz;
    priorityQueue$.$prop$get$r2={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};}};
    priorityQueue$.$prop$get$r2.get=function(){return $r2};
    priorityQueue$.$prop$get$r3={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};}};
    priorityQueue$.$prop$get$r3.get=function(){return $r3};
    priorityQueue$.$prop$get$r4={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};}};
    priorityQueue$.$prop$get$r4.get=function(){return $r4};
    if(priorityQueue$.$r5(priorityQueue$.$r2)){
        priorityQueue$.$r4=priorityQueue$.$r2.size;
        priorityQueue$.$r3=priorityQueue$.$r6(($r7=((priorityQueue$.$r4>priorityQueue$.$r0)?priorityQueue$.$r4:null),m$1.nn$($r7)?$r7:priorityQueue$.$r0));
        var $r7;
    }else {
        priorityQueue$.$r4=(0);
        priorityQueue$.$r3=priorityQueue$.$r6(priorityQueue$.$r0);
    }
    priorityQueue$.$r8();
    priorityQueue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};}};
    priorityQueue$.$prop$getFront.get=function(){return front};
    priorityQueue$.$prop$getLast={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};}};
    priorityQueue$.$prop$getLast.get=function(){return last};
    priorityQueue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};}};
    priorityQueue$.$prop$getBack.get=function(){return back};
    return priorityQueue$;
}
PriorityQueue.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Comparison},an:function(){return[m$1.doc("A comparator function used to order elements.")];}},{nm:'initialCapacity',mt:'prm',def:1,$t:{t:m$1.Integer},an:function(){return[m$1.doc("The initial size of the backing array.")];}},{nm:'growthFactor',mt:'prm',def:1,$t:{t:m$1.Float},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},an:function(){return[m$1.doc("The initial elements of the queue.")];}}],tp:{Element$PriorityQueue:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},{t:Queue,a:{Element$Queue:'Element$PriorityQueue'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue'),m$1.by(["Loic Rouchon"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','PriorityQueue']};};
ex$.PriorityQueue=PriorityQueue;
function $init$PriorityQueue(){
    if(PriorityQueue.$$===undefined){
        m$1.initTypeProto(PriorityQueue,'ceylon.collection::PriorityQueue',m$1.Basic,$init$Queue(),m$1.Collection);
        (function(priorityQueue$){
            m$1.atr$(priorityQueue$,'$r0',function(){return this.$r0_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial size of the backing array.")];},d:['ceylon.collection','PriorityQueue','$at','initialCapacity$gi6pup']};});
            m$1.atr$(priorityQueue$,'$r1',function(){return this.$r1_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Float},$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:growthFactor$k15cw7')];},d:['ceylon.collection','PriorityQueue','$at','growthFactor$k15cw7']};});
            m$1.atr$(priorityQueue$,'$r2',function(){return this.$r2_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}},$cont:PriorityQueue,an:function(){return[m$1.doc("The initial elements of the queue.")];},d:['ceylon.collection','PriorityQueue','$at','elements$ra338u']};});
            priorityQueue$.$r6=function($r9){
                var priorityQueue$=this;
                return m$1.arrayOfSize($r9,null,{Element$arrayOfSize:{t:'u',l:[{t:m$1.Null},priorityQueue$.$$targs$$.Element$PriorityQueue]}});
            };
            priorityQueue$.$r6.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},ps:[{nm:'capacity',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','store$iohp2k']};};
            priorityQueue$.$r5=function($ra){
                var priorityQueue$=this;
                return m$1.is$($ra,{t:'u',l:[{t:m$1.Collection,a:{Element$Collection:priorityQueue$.$$targs$$.Element$PriorityQueue}},{t:m$1.Sequential,a:{Element$Sequential:priorityQueue$.$$targs$$.Element$PriorityQueue}}]});
            };
            priorityQueue$.$r5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'elements',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$PriorityQueue'}}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','haveKnownSize$7k454f']};};
            m$1.atr$(priorityQueue$,'$r3',function(){return this.$r3_;},function($rb){return this.$r3_=$rb;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']}}},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','array$3tqqzg']};});
            m$1.atr$(priorityQueue$,'$r4',function(){return this.$r4_;},function($rc){return this.$r4_=$rc;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:1027,d:['ceylon.collection','PriorityQueue','$at','length$qkg55j']};});
            priorityQueue$.$rd=function($re){
                var priorityQueue$=this;
                var $rf=priorityQueue$.$r4.plus($re);
                var $rg=m$1.getRuntime().maxArraySize;
                if(($rf>$rg)){
                    throw m$1.wrapexc(m$1.OverflowException(),'51:12-51:37','ceylon/collection/PriorityQueue.ceylon');
                }
                if(($rf>priorityQueue$.$r3.size)){
                    var $rh=$rf.times(priorityQueue$.$r1).integer;
                    var $ri=($rj=((($rh<$rf)||($rh>$rg))?$rg:null),m$1.nn$($rj)?$rj:$rh);
                    var $rj;
                    var $rk=priorityQueue$.$r6($ri);
                    priorityQueue$.$r3.copyTo($rk);
                    priorityQueue$.$r3=$rk;
                }
            };priorityQueue$.$rd.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'increment',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','grow$kgssjy']};};
            priorityQueue$.$rl=function($rm){
                var priorityQueue$=this;
                priorityQueue$.$rd(1);
                priorityQueue$.$r3.set(priorityQueue$.$r4,$rm);
                ($rn=priorityQueue$.$r4,priorityQueue$.$r4=$rn.successor,$rn);
                var $rn;
            };priorityQueue$.$rl.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','add$lnahnw']};};
            priorityQueue$.$ro=function($rp){
                var priorityQueue$=this;
                return $rp.plus(1).divided(2).minus(1);
            };
            priorityQueue$.$ro.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:parent$w5yb7')];},d:['ceylon.collection','PriorityQueue','$m','parent$w5yb7']};};
            priorityQueue$.$rq=function($rr){
                var priorityQueue$=this;
                return $rr.times(2).plus(1);
            };
            priorityQueue$.$rq.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:leftChild$bif9ts')];},d:['ceylon.collection','PriorityQueue','$m','leftChild$bif9ts']};};
            priorityQueue$.$rs=function($rt){
                var priorityQueue$=this;
                return $rt.times(2).plus(2);
            };
            priorityQueue$.$rs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:rightChild$rhsywd')];},d:['ceylon.collection','PriorityQueue','$m','rightChild$rhsywd']};};
            priorityQueue$.$ru=function($rv){
                var priorityQueue$=this;
                var $rw;
                m$1.asrt$((m$1.nn$(($rw=priorityQueue$.$r3.$_get($rv)))),"Assertion failed: \'exists element = array[index]\' at PriorityQueue.ceylon (91:14-91:44)",'91:8-91:45','PriorityQueue.ceylon');
                return $rw;
            };priorityQueue$.$ru.$crtmm$=function(){return{mod:$CCMM$,$t:'Element$PriorityQueue',ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','elt$lqn120']};};
            priorityQueue$.$rx=function($ry,$rz){
                var priorityQueue$=this;
                return priorityQueue$.$qz(priorityQueue$.$ru($ry),priorityQueue$.$ru($rz));
            };
            priorityQueue$.$rx.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Comparison},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','compareIndexes$ilkd5i']};};
            priorityQueue$.$s0=function($s1,$s2){
                var priorityQueue$=this;
                var $s3=priorityQueue$.$r3.$_get($s1);
                priorityQueue$.$r3.set($s1,priorityQueue$.$r3.$_get($s2));
                priorityQueue$.$r3.set($s2,$s3);
            };priorityQueue$.$s0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'first',mt:'prm',$t:{t:m$1.Integer}},{nm:'second',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','swap$snqivi']};};
            priorityQueue$.$s4=function($s5){
                var priorityQueue$=this;
                if(($s5==0)){
                    return;
                }
                var $s6=priorityQueue$.$ro($s5);
                if(priorityQueue$.$rx($s5,$s6).equals(m$1.getSmaller())){
                    priorityQueue$.$s0($s5,$s6);
                    priorityQueue$.$s4($s6);
                }
            };priorityQueue$.$s4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleUp$yevw4e']};};
            priorityQueue$.$s7=function($s8){
                var priorityQueue$=this;
                var $s9=priorityQueue$.$rq($s8);
                if(($s9>=priorityQueue$.$r4)){
                    return null;
                }
                var $sa=priorityQueue$.$rs($s8);
                if(($sa>=priorityQueue$.$r4)){
                    return $s9;
                }
                var $sb=priorityQueue$.$rx($s9,$sa);
                if($sb.equals(m$1.getSmaller())){
                    return $s9;
                }
                return $sa;
            };priorityQueue$.$s7.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','minChildrenIndex$1y297w']};};
            priorityQueue$.$sc=function($sd){
                var priorityQueue$=this;
                var $se;
                if(m$1.nn$(($se=priorityQueue$.$s7($sd)))&&priorityQueue$.$rx($se,$sd).equals(m$1.getSmaller())){
                    priorityQueue$.$s0($sd,$se);
                    priorityQueue$.$sc($se);
                }
            };priorityQueue$.$sc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}}],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','bubbleDown$daf9xt']};};
            priorityQueue$.$r8=function(){
                var priorityQueue$=this;
                if(priorityQueue$.$r5(priorityQueue$.$r2)){
                    var $sf=(0);
                    function set$sf($sg){return $sf=$sg;};
                    var $si;for(var $sh=priorityQueue$.$r2.iterator();($si=$sh.next())!==m$1.getFinished();){
                        priorityQueue$.$r3.set(($sj=$sf,$sf=$sj.successor,$sj),$si);
                        var $sj;
                    }
                }else {
                    var $sl;for(var $sk=priorityQueue$.$r2.iterator();($sl=$sk.next())!==m$1.getFinished();){
                        priorityQueue$.$rl($sl);
                    }
                }
                if((priorityQueue$.$r4>0)){
                    var $sn=priorityQueue$.$ro(priorityQueue$.$r4.minus(1)),$sm=(0),$so=$sn.compare($sm),$sp=$so===m$1.getSmaller()?'successor':'predecessor';for(var $sq=m$1.eorl$($so);$sq($sm,$sn);$sn=$sn[$sp]){
                        priorityQueue$.$sc($sn);
                    }
                }
            };priorityQueue$.$r8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:PriorityQueue,d:['ceylon.collection','PriorityQueue','$m','addInitialElements$lh42w3']};};
            m$1.atr$(priorityQueue$,'size',function(){
                var priorityQueue$=this;
                return priorityQueue$.$r4;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$at','size']};});
            m$1.atr$(priorityQueue$,'front',function(){
                var priorityQueue$=this;
                return priorityQueue$.$r3.$_get(0);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:front')];},d:['ceylon.collection','PriorityQueue','$at','front']};});
            m$1.atr$(priorityQueue$,'last',function(){
                var priorityQueue$=this;
                return priorityQueue$.$r3.$_get(priorityQueue$.$r4.minus(1));
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:last')];},d:['ceylon.collection','PriorityQueue','$at','last']};});
            m$1.atr$(priorityQueue$,'back',function(){
                var priorityQueue$=this;
                return priorityQueue$.last;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$at:back')];},d:['ceylon.collection','PriorityQueue','$at','back']};});
            priorityQueue$.offer=function($sr){
                var priorityQueue$=this;
                priorityQueue$.$rl($sr);
                priorityQueue$.$s4(priorityQueue$.$r4.minus(1));
            };priorityQueue$.offer.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$PriorityQueue'}],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc("Add a new element to the queue.")];},d:['ceylon.collection','PriorityQueue','$m','offer']};};
            priorityQueue$.accept=function(){
                var priorityQueue$=this;
                var $ss=priorityQueue$.front;
                if((priorityQueue$.$r4>0)){
                    priorityQueue$.$r3.set(0,priorityQueue$.last);
                    priorityQueue$.$r3.set((priorityQueue$.$r4=priorityQueue$.$r4.predecessor),null);
                    priorityQueue$.$sc(0);
                }
                return $ss;
            };priorityQueue$.accept.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$PriorityQueue']},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:accept')];},d:['ceylon.collection','PriorityQueue','$m','accept']};};
            priorityQueue$.iterator=function(){
                var priorityQueue$=this;
                if((priorityQueue$.$r4>0)){
                    var $st=false;
                    var $sv=false;
                    var $su=(function(){
                        function $sw($$targs$$){
                            var $sw$=new $sw.$$;$sw$.outer$=priorityQueue$;
                            $sw$.$$targs$$=$$targs$$;
                            m$1.Iterator({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue},$sw$);
                            $sw$.$sx_=(0);
                            $sw$.$prop$get$sx={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$sw,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};}};
                            $sw$.$prop$get$sx.get=function(){return $sx};
                            return $sw$;
                        };$sw.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:priorityQueue$.iterator,sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}}],d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q']};};
                        function $init$$sw(){
                            if($sw.$$===undefined){
                                m$1.initTypeProto($sw,'ceylon.collection::PriorityQueue.it',m$1.Basic,m$1.Iterator);
                                (function($sw$){
                                    m$1.atr$($sw$,'$sx',function(){return this.$sx_;},function($sy){return this.$sx_=$sy;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$sw,pa:1024,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$at','index$epjk09']};});
                                    $sw$.next=function(){
                                        var $sw$=this;
                                        var $sz=priorityQueue$.$r3.$_get($sw$.$sx);
                                        var $t0;
                                        if(m$1.nn$(($t0=$sz))){
                                            ($t1=$sw$.$sx,$sw$.$sx=$t1.successor,$t1);
                                            var $t1;
                                            return $t0;
                                        }
                                        m$1.asrt$((($sw$.$sx==priorityQueue$.$r4)),"Assertion failed: \'index == length\' at PriorityQueue.ceylon (208:26-208:42)",'208:20-208:43','PriorityQueue.ceylon');
                                        return m$1.getFinished();
                                    };$sw$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$PriorityQueue',{t:m$1.Finished}]},ps:[],$cont:$sw,pa:3,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3q','$m','next']};};
                                })($sw.$$.prototype);
                            }
                            return $sw;
                        }
                        $init$$sw();
                        var $t2;
                        function get$t2(){
                            if($t2===undefined){$t2=$init$$sw()({Element$Iterator:priorityQueue$.$$targs$$.Element$PriorityQueue});$t2.$crtmm$=get$t2.$crtmm$;}
                            return $t2;
                        }
                        get$t2.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$sw},$cont:priorityQueue$.iterator,d:['ceylon.collection','PriorityQueue','$m','iterator','$o','it$vzhf3p']};};
                        $prop$get$t2={get:get$t2,$crtmm$:get$t2.$crtmm$};
                        get$sw=get$t2;$prop$get$sw=get$t2;
                        return get$t2();
                    }());if($su!==undefined){return $su;}
                }
                else {
                    return m$1.getEmptyIterator();
                }
            };priorityQueue$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:PriorityQueue:$m:iterator')];},d:['ceylon.collection','PriorityQueue','$m','iterator']};};
            priorityQueue$.clone=function(){
                var priorityQueue$=this;
                var $t3=($t4=m$1.JsCallable(priorityQueue$,priorityQueue$.$qz),$t5=priorityQueue$.$r4,$t6=priorityQueue$.$r1,PriorityQueue($t4,$t5,$t6,undefined,{Element$PriorityQueue:priorityQueue$.$$targs$$.Element$PriorityQueue}));
                var $t4,$t5,$t6;
                ($t3.$r4=priorityQueue$.$r4);
                ($t3.$r3=priorityQueue$.$r3.clone());
                return $t3;
            };priorityQueue$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Element$PriorityQueue'}},ps:[],$cont:PriorityQueue,pa:3,d:['ceylon.collection','PriorityQueue','$m','clone']};};
        })(PriorityQueue.$$.prototype);
    }
    return PriorityQueue;
}
ex$.$init$PriorityQueue=$init$PriorityQueue;
$init$PriorityQueue();
function Queue($$targs$$,queue$){
    m$1.set_type_args(queue$,$$targs$$);
}
Queue.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Queue:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Stack)].rt$({t:'u',l:[{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}]}))];},d:['ceylon.collection','Queue']};};
ex$.Queue=Queue;
function $init$Queue(){
    if(Queue.$$===undefined){
        m$1.initTypeProtoI(Queue,'ceylon.collection::Queue');
        (function(queue$){
            queue$.offer={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Queue'}],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:offer')];},d:['ceylon.collection','Queue','$m','offer']};}};queue$.accept={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},ps:[],$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$m:accept')];},d:['ceylon.collection','Queue','$m','accept']};}};queue$.$prop$getFront={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:front')];},d:['ceylon.collection','Queue','$at','front']};}};
            queue$.$prop$getBack={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Queue']},$cont:Queue,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Queue:$at:back')];},d:['ceylon.collection','Queue','$at','back']};}};
        })(Queue.$$.prototype);
    }
    return Queue;
}
ex$.$init$Queue=$init$Queue;
$init$Queue();
function SortedMap($$targs$$,sortedMap$){
    m$1.Map({Key$Map:$$targs$$.Key$SortedMap,Item$Map:$$targs$$.Item$SortedMap},sortedMap$);
    m$1.Ranged({Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:$$targs$$.Item$SortedMap,Key$SortedMap:$$targs$$.Key$SortedMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$SortedMap,Item$Entry:$$targs$$.Item$SortedMap}},Index$Ranged:$$targs$$.Key$SortedMap},sortedMap$);
    m$1.set_type_args(sortedMap$,$$targs$$);
}
SortedMap.$crtmm$=function(){return{mod:$CCMM$,tp:{Key$SortedMap:{sts:[{t:m$1.$_Object}]},Item$SortedMap:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Map,a:{Key$Map:'Key$SortedMap',Item$Map:'Item$SortedMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedMap,a:{Item$SortedMap:'Item$SortedMap',Key$SortedMap:'Key$SortedMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}},Index$Ranged:'Key$SortedMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','SortedMap']};};
ex$.SortedMap=SortedMap;
function $init$SortedMap(){
    if(SortedMap.$$===undefined){
        m$1.initTypeProtoI(SortedMap,'ceylon.collection::SortedMap',m$1.Ranged,m$1.Map);
        (function(sortedMap$){
            sortedMap$.higherEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:higherEntries')];},d:['ceylon.collection','SortedMap','$m','higherEntries']};}};sortedMap$.lowerEntries={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$SortedMap',Item$Entry:'Item$SortedMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$SortedMap'}],$cont:SortedMap,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedMap:$m:lowerEntries')];},d:['ceylon.collection','SortedMap','$m','lowerEntries']};}};
        })(SortedMap.$$.prototype);
    }
    return SortedMap;
}
ex$.$init$SortedMap=$init$SortedMap;
$init$SortedMap();
function SortedSet($$targs$$,sortedSet$){
    m$1.Set({Element$Set:$$targs$$.Element$SortedSet},sortedSet$);
    m$1.Ranged({Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:$$targs$$.Element$SortedSet}},Element$Ranged:$$targs$$.Element$SortedSet,Index$Ranged:$$targs$$.Element$SortedSet},sortedSet$);
    m$1.set_type_args(sortedSet$,$$targs$$);
}
SortedSet.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$SortedSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$SortedSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:SortedSet,a:{Element$SortedSet:'Element$SortedSet'}},Element$Ranged:'Element$SortedSet',Index$Ranged:'Element$SortedSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','SortedSet']};};
ex$.SortedSet=SortedSet;
function $init$SortedSet(){
    if(SortedSet.$$===undefined){
        m$1.initTypeProtoI(SortedSet,'ceylon.collection::SortedSet',m$1.Ranged,m$1.Set);
        (function(sortedSet$){
            sortedSet$.higherElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:higherElements')];},d:['ceylon.collection','SortedSet','$m','higherElements']};}};sortedSet$.lowerElements={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$SortedSet'}},ps:[{nm:'element',mt:'prm',$t:'Element$SortedSet'}],$cont:SortedSet,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:SortedSet:$m:lowerElements')];},d:['ceylon.collection','SortedSet','$m','lowerElements']};}};
        })(SortedSet.$$.prototype);
    }
    return SortedSet;
}
ex$.$init$SortedSet=$init$SortedSet;
$init$SortedSet();
function Stability(stability$){
    $init$Stability();
    if(stability$===undefined)m$1.throwexc(m$1.InvocationException$meta$model("Cannot instantiate abstract class"),'?','?')
    return stability$;
}
Stability.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],of:[$prop$getUnlinked,$prop$getLinked],pa:257,d:['ceylon.collection','Stability']};};
ex$.Stability=Stability;
function $init$Stability(){
    if(Stability.$$===undefined){
        m$1.initTypeProto(Stability,'ceylon.collection::Stability',m$1.Basic);
    }
    return Stability;
}
ex$.$init$Stability=$init$Stability;
$init$Stability();
function $t7(){
    var unlinked$=new $t7.$$;Stability(unlinked$);
    return unlinked$;
};$t7.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},pa:1,d:['ceylon.collection','unlinked']};};
function $init$getUnlinked(){
    if($t7.$$===undefined){
        m$1.initTypeProto($t7,'ceylon.collection::unlinked',$init$Stability());
    }
    return $t7;
}
ex$.$init$getUnlinked=$init$getUnlinked;
$init$getUnlinked();
var $t8;
function getUnlinked(){
    if($t8===undefined){$t8=$init$getUnlinked()();$t8.$crtmm$=getUnlinked.$crtmm$;}
    return $t8;
}
ex$.getUnlinked=getUnlinked;
getUnlinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$t7},pa:1,d:['ceylon.collection','unlinked']};};
$prop$getUnlinked={get:getUnlinked,$crtmm$:getUnlinked.$crtmm$};
getUnlinked=getUnlinked;$prop$getUnlinked=getUnlinked;
ex$.$prop$getUnlinked=$prop$getUnlinked;
function $t9(){
    var linked$=new $t9.$$;Stability(linked$);
    return linked$;
};$t9.$crtmm$=function(){return{mod:$CCMM$,'super':{t:Stability},pa:1,d:['ceylon.collection','linked']};};
function $init$getLinked(){
    if($t9.$$===undefined){
        m$1.initTypeProto($t9,'ceylon.collection::linked',$init$Stability());
    }
    return $t9;
}
ex$.$init$getLinked=$init$getLinked;
$init$getLinked();
var $ta;
function getLinked(){
    if($ta===undefined){$ta=$init$getLinked()();$ta.$crtmm$=getLinked.$crtmm$;}
    return $ta;
}
ex$.getLinked=getLinked;
getLinked.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$t9},pa:1,d:['ceylon.collection','linked']};};
$prop$getLinked={get:getLinked,$crtmm$:getLinked.$crtmm$};
getLinked=getLinked;$prop$getLinked=getLinked;
ex$.$prop$getLinked=$prop$getLinked;
function Stack($$targs$$,stack$){
    m$1.set_type_args(stack$,$$targs$$);
}
Stack.$crtmm$=function(){return{mod:$CCMM$,tp:{Element$Stack:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack'),m$1.see([m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),LinkedList),m$1.OpenClass$jsint(m$1.lmp$(ex$,'ceylon.collection'),ArrayList),m$1.OpenInterface$jsint(m$1.lmp$(ex$,'ceylon.collection'),Queue)].rt$({t:'u',l:[{t:m$1.ClassDeclaration$meta$declaration},{t:m$1.InterfaceDeclaration$meta$declaration}]}))];},d:['ceylon.collection','Stack']};};
ex$.Stack=Stack;
function $init$Stack(){
    if(Stack.$$===undefined){
        m$1.initTypeProtoI(Stack,'ceylon.collection::Stack');
        (function(stack$){
            stack$.$_push={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'element',mt:'prm',$t:'Element$Stack'}],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:push')];},d:['ceylon.collection','Stack','$m','push']};}};stack$.$_pop={$fml:1,$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},ps:[],$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$m:pop')];},d:['ceylon.collection','Stack','$m','pop']};}};stack$.$prop$getTop={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$Stack']},$cont:Stack,pa:5,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:Stack:$at:top')];},d:['ceylon.collection','Stack','$at','top']};}};
        })(Stack.$$.prototype);
    }
    return Stack;
}
ex$.$init$Stack=$init$Stack;
$init$Stack();
function StoreIterator($tb,$$targs$$,storeIterator$){
    $init$StoreIterator();
    if(storeIterator$===undefined)storeIterator$=new StoreIterator.$$;
    m$1.set_type_args(storeIterator$,$$targs$$);
    storeIterator$.$tb_=$tb;
    m$1.Iterator({Element$Iterator:$$targs$$.Element$StoreIterator},storeIterator$);
    storeIterator$.$tc_=(0);
    storeIterator$.$prop$get$tc={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};}};
    storeIterator$.$prop$get$tc.get=function(){return $tc};
    storeIterator$.$td_=storeIterator$.$tb.$_get(storeIterator$.$tc);
    storeIterator$.$prop$get$td={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};}};
    storeIterator$.$prop$get$td.get=function(){return $td};
    return storeIterator$;
}
StoreIterator.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'store',mt:'prm',$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}}}],tp:{Element$StoreIterator:{}},sts:[{t:m$1.Iterator,a:{Element$Iterator:'Element$StoreIterator'}}],d:['ceylon.collection','StoreIterator']};};
function $init$StoreIterator(){
    if(StoreIterator.$$===undefined){
        m$1.initTypeProto(StoreIterator,'ceylon.collection::StoreIterator',m$1.Basic,m$1.Iterator);
        (function(storeIterator$){
            m$1.atr$(storeIterator$,'$tc',function(){return this.$tc_;},function($te){return this.$tc_=$te;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StoreIterator,pa:1024,d:['ceylon.collection','StoreIterator','$at','index$e2or89']};});
            m$1.atr$(storeIterator$,'$td',function(){return this.$td_;},function($tf){return this.$td_=$tf;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]},$cont:StoreIterator,pa:1027,d:['ceylon.collection','StoreIterator','$at','bucket$xzowap']};});
            storeIterator$.next=function(){
                var storeIterator$=this;
                if(!m$1.nn$(storeIterator$.$td)){
                    while(((storeIterator$.$tc=storeIterator$.$tc.successor)<storeIterator$.$tb.size)){
                        storeIterator$.$td=storeIterator$.$tb.$_get(storeIterator$.$tc);
                        if(m$1.nn$(storeIterator$.$td)){
                            break;
                        }
                    }
                }
                var $tg;
                if(m$1.nn$(($tg=storeIterator$.$td))){
                    var $th=$tg.element;
                    (storeIterator$.$td=$tg.rest);
                    return $th;
                }
                return m$1.getFinished();
            };storeIterator$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:['Element$StoreIterator',{t:m$1.Finished}]},ps:[],$cont:StoreIterator,pa:3,d:['ceylon.collection','StoreIterator','$m','next']};};
            m$1.atr$(storeIterator$,'$tb',function(){return this.$tb_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:'u',l:[{t:m$1.Null},{t:Cell,a:{Element$Cell:'Element$StoreIterator'}}]}}},$cont:StoreIterator,d:['ceylon.collection','StoreIterator','$at','store$ds37oi']};});
        })(StoreIterator.$$.prototype);
    }
    return StoreIterator;
}
ex$.$init$StoreIterator=$init$StoreIterator;
$init$StoreIterator();
function StringBuilder(stringBuilder$){
    $init$StringBuilder();
    if(stringBuilder$===undefined)stringBuilder$=new StringBuilder.$$;
    stringBuilder$.$ti_=m$1.arrayOfSize(10,m$1.Character(88,true),{Element$arrayOfSize:{t:m$1.Character}});
    stringBuilder$.$prop$get$ti={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:StringBuilder,pa:1027,an:function(){return[m$1.doc("The storage")];},d:['ceylon.collection','StringBuilder','$at','array$xaubxz']};}};
    stringBuilder$.$prop$get$ti.get=function(){return $ti};
    stringBuilder$.$tj_=(0);
    stringBuilder$.$prop$get$tj={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringBuilder,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$at:length$ezkbv2')];},d:['ceylon.collection','StringBuilder','$at','length$ezkbv2']};}};
    stringBuilder$.$prop$get$tj.get=function(){return $tj};
    stringBuilder$.$prop$getSize={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$at:size')];},d:['ceylon.collection','StringBuilder','$at','size']};}};
    stringBuilder$.$prop$getSize.get=function(){return size};
    return stringBuilder$;
}
StringBuilder.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder')];},d:['ceylon.collection','StringBuilder']};};
ex$.StringBuilder=StringBuilder;
function $init$StringBuilder(){
    if(StringBuilder.$$===undefined){
        m$1.initTypeProto(StringBuilder,'ceylon.collection::StringBuilder',m$1.Basic);
        (function(stringBuilder$){
            m$1.atr$(stringBuilder$,'$ti',function(){return this.$ti_;},function($tk){return this.$ti_=$tk;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},$cont:StringBuilder,pa:1027,an:function(){return[m$1.doc("The storage")];},d:['ceylon.collection','StringBuilder','$at','array$xaubxz']};});
            m$1.atr$(stringBuilder$,'$tj',function(){return this.$tj_;},function($tl){return this.$tj_=$tl;},function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringBuilder,pa:1027,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$at:length$ezkbv2')];},d:['ceylon.collection','StringBuilder','$at','length$ezkbv2']};});
            stringBuilder$.$tm=function($tn,$to){
                var stringBuilder$=this;
                var $tp=stringBuilder$.$tj.plus($to);
                var $tq=$tn.times(2).plus(2);
                function set$tq($tr){return $tq=$tr;};
                m$1.asrt$((($tp>0)),"Overflow: \'requiredSize > 0\' at StringBuilder.ceylon (23:15-23:32)",'22:8-23:33','StringBuilder.ceylon');
                if(($tq<$tp)){
                    $tq=$tp;
                }
                m$1.asrt$((($tq<=m$1.getRuntime().maxArraySize)),"Required array too large: \'result <= runtime.maxArraySize\' at StringBuilder.ceylon (28:15-28:46)",'27:8-28:47','StringBuilder.ceylon');
                return $tq;
            };stringBuilder$.$tm.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Integer},ps:[{nm:'existingSize',mt:'prm',$t:{t:m$1.Integer}},{nm:'extra',mt:'prm',$t:{t:m$1.Integer}}],$cont:StringBuilder,an:function(){return[m$1.doc("Resize policy")];},d:['ceylon.collection','StringBuilder','$m','newSize$1de0h']};};
            stringBuilder$.$ts=function($tt){
                var stringBuilder$=this;
                if((stringBuilder$.$ti.size>=stringBuilder$.$tj.plus($tt))){
                    return stringBuilder$.$ti;
                }else {
                    var $tu=m$1.arrayOfSize(stringBuilder$.$tm(stringBuilder$.$ti.size,$tt),m$1.Character(88,true),{Element$arrayOfSize:{t:m$1.Character}});
                    stringBuilder$.$ti.copyTo($tu);
                    stringBuilder$.$ti=$tu;
                    return $tu;
                }
            };stringBuilder$.$ts.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Array,a:{Element$Array:{t:m$1.Character}}},ps:[{nm:'extra',mt:'prm',$t:{t:m$1.Integer}}],$cont:StringBuilder,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:getStorage$hr4ru3')];},d:['ceylon.collection','StringBuilder','$m','getStorage$hr4ru3']};};
            m$1.atr$(stringBuilder$,'string',function(){
                var stringBuilder$=this;
                return m$1.$_String(stringBuilder$.$ti.take(stringBuilder$.$tj));
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:StringBuilder,pa:3,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$at:string')];},d:['ceylon.collection','StringBuilder','$at','string']};});stringBuilder$.append=function($tv){
                var stringBuilder$=this;
                if(!$tv.empty){
                    var $tw=stringBuilder$.$ts($tv.size);
                    var $tx=(0);
                    function set$tx($ty){return $tx=$ty;};
                    while(($tx<$tv.size)){
                        var $tz;
                        m$1.asrt$((m$1.nn$(($tz=$tv.$_get($tx)))),"Assertion failed: \'exists char=string[i]\' at StringBuilder.ceylon (62:22-62:44)",'62:16-62:45','StringBuilder.ceylon');
                        $tw.set(stringBuilder$.$tj.plus($tx),$tz);
                        ($u0=$tx,$tx=$u0.successor,$u0);
                        var $u0;
                    }
                    (stringBuilder$.$tj=stringBuilder$.$tj.plus($tv.size));
                }
                return stringBuilder$;
            };stringBuilder$.append.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:append')];},d:['ceylon.collection','StringBuilder','$m','append']};};
            stringBuilder$.appendAll=function($u1){
                var stringBuilder$=this;
                var $u3;for(var $u2=$u1.iterator();($u3=$u2.next())!==m$1.getFinished();){
                    stringBuilder$.append($u3);
                }
                return stringBuilder$;
            };stringBuilder$.appendAll.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'strings',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.$_String}}}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:appendAll')];},d:['ceylon.collection','StringBuilder','$m','appendAll']};};
            stringBuilder$.appendCharacter=function($u4){
                var stringBuilder$=this;
                var $u5=stringBuilder$.$ts(1);
                $u5.set(stringBuilder$.$tj,$u4);
                ($u6=stringBuilder$.$tj,stringBuilder$.$tj=$u6.successor,$u6);
                var $u6;
                return stringBuilder$;
            };stringBuilder$.appendCharacter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'character',mt:'prm',$t:{t:m$1.Character}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc("Append the given [[character]].")];},d:['ceylon.collection','StringBuilder','$m','appendCharacter']};};
            stringBuilder$.appendNewline=function(){
                var stringBuilder$=this;
                stringBuilder$.appendCharacter(m$1.Character(10,true));
                return stringBuilder$;
            };stringBuilder$.appendNewline.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc("Append a newline character.")];},d:['ceylon.collection','StringBuilder','$m','appendNewline']};};
            stringBuilder$.appendSpace=function(){
                var stringBuilder$=this;
                stringBuilder$.appendCharacter(m$1.Character(32,true));
                return stringBuilder$;
            };stringBuilder$.appendSpace.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc("Append a space character.")];},d:['ceylon.collection','StringBuilder','$m','appendSpace']};};
            stringBuilder$.reset=function(){
                var stringBuilder$=this;
                stringBuilder$.$tj=(0);
                return stringBuilder$;
            };stringBuilder$.reset.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:reset')];},d:['ceylon.collection','StringBuilder','$m','reset']};};
            stringBuilder$.insert=function($u7,$u8){
                var stringBuilder$=this;
                if(!$u8.empty){
                    var $u9=stringBuilder$.$ts($u8.size);
                    $u9.copyTo($u9,$u7,$u7.plus($u8.size),stringBuilder$.$tj.minus($u7));
                    var $ua=(0);
                    function set$ua($ub){return $ua=$ub;};
                    while(($ua<$u8.size)){
                        var $uc;
                        m$1.asrt$((m$1.nn$(($uc=$u8.$_get($ua)))),"Assertion failed: \'exists char = string[i]\' at StringBuilder.ceylon (122:22-122:46)",'122:16-122:47','StringBuilder.ceylon');
                        $u9.set($u7.plus($ua),$uc);
                        ($ud=$ua,$ua=$ud.successor,$ud);
                        var $ud;
                    }
                    (stringBuilder$.$tj=stringBuilder$.$tj.plus($u8.size));
                }
                return stringBuilder$;
            };stringBuilder$.insert.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'string',mt:'prm',$t:{t:m$1.$_String}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:insert')];},d:['ceylon.collection','StringBuilder','$m','insert']};};
            stringBuilder$.insertCharacter=function($ue,$uf){
                var stringBuilder$=this;
                return stringBuilder$.insert($ue,$uf.string);
            };stringBuilder$.insertCharacter.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer}},{nm:'character',mt:'prm',$t:{t:m$1.Character}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:insertCharacter')];},d:['ceylon.collection','StringBuilder','$m','insertCharacter']};};
            stringBuilder$.$_delete$defs$length=function($ug,$uh){return 1;};
            stringBuilder$.$_delete=function($ug,$uh){
                var stringBuilder$=this;
                if($uh===undefined){$uh=stringBuilder$.$_delete$defs$length($ug,$uh);}
                if(($ug<0)){
                    $ug=(0);
                }else {
                    if(($ug>=stringBuilder$.$tj)){
                        return stringBuilder$;
                    }
                }
                var $ui=smallest($ug.plus($uh),stringBuilder$.$tj);
                stringBuilder$.$ti.copyTo(stringBuilder$.$ti,$ui,$ug,stringBuilder$.$tj.minus($ui));
                if(($ug.plus($uh)>stringBuilder$.$tj)){
                    (stringBuilder$.$tj=$ug);
                }else {
                    ($uj=stringBuilder$,$uj.$tj=$uj.$tj.minus($uh));
                    var $uj;
                }
                return stringBuilder$;
            };stringBuilder$.$_delete.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'index',mt:'prm',$t:{t:m$1.Integer},pa:1027},{nm:'length',mt:'prm',def:1,$t:{t:m$1.Integer}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:delete')];},d:['ceylon.collection','StringBuilder','$m','delete']};};
            stringBuilder$.deleteInitial=function($uk){
                var stringBuilder$=this;
                return stringBuilder$.$_delete(0,$uk);
            };
            stringBuilder$.deleteInitial.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:deleteInitial')];},d:['ceylon.collection','StringBuilder','$m','deleteInitial']};};
            stringBuilder$.deleteTerminal=function($ul){
                var stringBuilder$=this;
                return stringBuilder$.$_delete(stringBuilder$.size.minus($ul),$ul);
            };
            stringBuilder$.deleteTerminal.$crtmm$=function(){return{mod:$CCMM$,$t:{t:StringBuilder},ps:[{nm:'length',mt:'prm',$t:{t:m$1.Integer}}],$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$m:deleteTerminal')];},d:['ceylon.collection','StringBuilder','$m','deleteTerminal']};};
            m$1.atr$(stringBuilder$,'size',function(){
                var stringBuilder$=this;
                return stringBuilder$.$tj;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:StringBuilder,pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:StringBuilder:$at:size')];},d:['ceylon.collection','StringBuilder','$at','size']};});
        })(StringBuilder.$$.prototype);
    }
    return StringBuilder;
}
ex$.$init$StringBuilder=$init$StringBuilder;
$init$StringBuilder();
function TreeMap($um,$un,$$targs$$,treeMap$){
    $init$TreeMap();
    if(treeMap$===undefined)treeMap$=new TreeMap.$$;
    m$1.set_type_args(treeMap$,$$targs$$);
    treeMap$.$um_=$um;
    if($un===undefined){$un=m$1.getEmpty();}
    treeMap$.$un_=$un;
    MutableMap({Key$MutableMap:$$targs$$.Key$TreeMap,Item$MutableMap:$$targs$$.Item$TreeMap},treeMap$);
    SortedMap({Item$SortedMap:$$targs$$.Item$TreeMap,Key$SortedMap:$$targs$$.Key$TreeMap},treeMap$);
    m$1.Ranged({Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:$$targs$$.Key$TreeMap,Item$TreeMap:$$targs$$.Item$TreeMap}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:$$targs$$.Key$TreeMap,Item$Entry:$$targs$$.Item$TreeMap}},Index$Ranged:$$targs$$.Key$TreeMap},treeMap$);
    treeMap$.$um=$um;
    treeMap$.$prop$get$un={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};}};
    treeMap$.$prop$get$un.get=function(){return $un};
    treeMap$.$uo_=null;
    treeMap$.$prop$get$uo={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};}};
    treeMap$.$prop$get$uo.get=function(){return $uo};
    var $uq;for(var $up=treeMap$.$un.iterator();($uq=$up.next())!==m$1.getFinished();){
        var $ur=$uq.key,$us=$uq.item;
        treeMap$.put($ur,$us);
    }
    treeMap$.$ut_=treeMap$.$uu();
    return treeMap$;
}
TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Comparison},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$m:compare$l83nqh')];}},{nm:'entries',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},an:function(){return[m$1.doc("The initial entries in the map.")];}}],tp:{Key$TreeMap:{sts:[{t:m$1.$_Object}]},Item$TreeMap:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableMap,a:{Key$MutableMap:'Key$TreeMap',Item$MutableMap:'Item$TreeMap'}},{t:SortedMap,a:{Item$SortedMap:'Item$TreeMap',Key$SortedMap:'Key$TreeMap'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},Element$Ranged:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},Index$Ranged:'Key$TreeMap'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap'),m$1.see([m$1.OpenFunction(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeMap)].rt$({t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','TreeMap']};};
ex$.TreeMap=TreeMap;
function $init$TreeMap(){
    if(TreeMap.$$===undefined){
        m$1.initTypeProto(TreeMap,'ceylon.collection::TreeMap',m$1.Basic,$init$SortedMap(),$init$MutableMap(),m$1.Ranged);
        (function(treeMap$){
            m$1.atr$(treeMap$,'$un',function(){return this.$un_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},$cont:TreeMap,an:function(){return[m$1.doc("The initial entries in the map.")];},d:['ceylon.collection','TreeMap','$at','entries$25gqqk']};});
            function Node$TreeMap(key,item,red,$uv$){
                $init$Node$TreeMap();
                if($uv$===undefined)$uv$=new this.Node$TreeMap.$$;
                $uv$.outer$=this;
                $uv$.key_=key;
                $uv$.item_=item;
                $uv$.red_=red;
                $uv$.$prop$getKey={$crtmm$:function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};}};
                $uv$.$prop$getKey.get=function(){return key};
                $uv$.$prop$getItem={$crtmm$:function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};}};
                $uv$.$prop$getItem.get=function(){return item};
                $uv$.$uw_=null;
                $uv$.$prop$getLeft={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};}};
                $uv$.$prop$getLeft.get=function(){return left};
                $uv$.$ux_=null;
                $uv$.$prop$getRight={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};}};
                $uv$.$prop$getRight.get=function(){return right};
                $uv$.$uy_=null;
                $uv$.$prop$getParent={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};}};
                $uv$.$prop$getParent.get=function(){return parent};
                $uv$.$prop$getRed={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};}};
                $uv$.$prop$getRed.get=function(){return red};
                $uv$.$prop$getGrandparent={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};}};
                $uv$.$prop$getGrandparent.get=function(){return grandparent};
                $uv$.$prop$getUncle={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};}};
                $uv$.$prop$getUncle.get=function(){return uncle};
                return $uv$;
            }
            Node$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap',pa:1025},{nm:'item',mt:'prm',$t:'Item$TreeMap',pa:1025},{nm:'red',mt:'prm',$t:{t:m$1.$_Boolean},pa:1025}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$c','Node$7z3hge']};};
            function $init$Node$TreeMap(){
                if(Node$TreeMap.$$===undefined){
                    m$1.initTypeProto(Node$TreeMap,'ceylon.collection::TreeMap.Node',m$1.Basic);
                    TreeMap.Node$TreeMap=Node$TreeMap;
                    (function($uv$){
                        m$1.atr$($uv$,'key',function(){return this.key_;},function($uz){return this.key_=$uz;},function(){return{mod:$CCMM$,$t:'Key$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','key']};});
                        m$1.atr$($uv$,'item',function(){return this.item_;},function($v0){return this.item_=$v0;},function(){return{mod:$CCMM$,$t:'Item$TreeMap',$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','item']};});
                        m$1.atr$($uv$,'left',function(){return this.$uw_;},function($v1){return this.$uw_=$v1;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','left']};});
                        m$1.atr$($uv$,'right',function(){return this.$ux_;},function($v2){return this.$ux_=$v2;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','right']};});
                        m$1.atr$($uv$,'parent',function(){return this.$uy_;},function($v3){return this.$uy_=$v3;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','parent']};});
                        m$1.atr$($uv$,'red',function(){return this.red_;},function($v4){return this.red_=$v4;},function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1025,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','red']};});
                        m$1.atr$($uv$,'onLeft',function(){
                            var $uv$=this;
                            var $v5;
                            if(m$1.nn$(($v5=($v6=$uv$.parent,m$1.nn$($v6)?$v6.left:null)))){
                                return $uv$.equals($v5);
                            }else {
                                return false;
                            }
                            var $v6;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onLeft']};});m$1.atr$($uv$,'onRight',function(){
                            var $uv$=this;
                            var $v7;
                            if(m$1.nn$(($v7=($v8=$uv$.parent,m$1.nn$($v8)?$v8.right:null)))){
                                return $uv$.equals($v7);
                            }else {
                                return false;
                            }
                            var $v8;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','onRight']};});m$1.atr$($uv$,'grandparent',function(){
                            var $uv$=this;
                            return ($v9=$uv$.parent,m$1.nn$($v9)?$v9.parent:null);
                        },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','grandparent']};});
                        m$1.atr$($uv$,'sibling',function(){
                            var $uv$=this;
                            var $va;
                            if(m$1.nn$(($va=$uv$.parent))){
                                if($uv$.onLeft){
                                    return $va.right;
                                }else {
                                    if($uv$.onRight){
                                        return $va.left;
                                    }else {
                                        m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (58:27-58:33)",'58:20-58:34','TreeMap.ceylon');
                                    }
                                }
                            }else {
                                return null;
                            }
                        },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','sibling']};});m$1.atr$($uv$,'uncle',function(){
                            var $uv$=this;
                            return ($vb=$uv$.parent,m$1.nn$($vb)?$vb.sibling:null);
                        },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','uncle']};});
                        m$1.atr$($uv$,'rightmostChild',function(){
                            var $uv$=this;
                            var $vc=$uv$;
                            function set$vc($vd){return $vc=$vd;};
                            $prop$get$vc={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:$uv$.$prop$getRightmostChild,pa:1027,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild','$at','rightmost$31dipc']};}};
                            $prop$get$vc.get=function(){return $vc};
                            $prop$get$vc.set=set$vc;
                            if(set$vc.$crtmm$===undefined)set$vc.$crtmm$=$prop$get$vc.$crtmm$;
                            var $ve;
                            while(m$1.nn$(($ve=$vc.right))){
                                $vc=$ve;
                            }
                            return $vc;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','rightmostChild']};});m$1.atr$($uv$,'leftmostChild',function(){
                            var $uv$=this;
                            var $vf=$uv$;
                            function set$vf($vg){return $vf=$vg;};
                            $prop$get$vf={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:$uv$.$prop$getLeftmostChild,pa:1027,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild','$at','leftmost$2f9iww']};}};
                            $prop$get$vf.get=function(){return $vf};
                            $prop$get$vf.set=set$vf;
                            if(set$vf.$crtmm$===undefined)set$vf.$crtmm$=$prop$get$vf.$crtmm$;
                            var $vh;
                            while(m$1.nn$(($vh=$vf.left))){
                                $vf=$vh;
                            }
                            return $vf;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','leftmostChild']};});m$1.atr$($uv$,'string',function(){
                            var $uv$=this;
                            var $vi=StringBuilder();
                            $prop$get$vi={$crtmm$:function(){return{mod:$CCMM$,$t:{t:StringBuilder},$cont:$uv$.$prop$getString,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string','$at','stringBuilder$kitzdj']};}};
                            $prop$get$vi.get=function(){return $vi};
                            var $vj;
                            if(m$1.nn$(($vj=$uv$.left))){
                                $vi.append($vj.string).append(", ");
                            }
                            $vi.append($uv$.key.string).append("->").append($uv$.item.string);
                            var $vk;
                            if(m$1.nn$(($vk=$uv$.right))){
                                $vi.append(", ").append($vk.string);
                            }
                            return $vi.string;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:treeMap$.Node$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','string']};});$uv$.clone=function($vl){
                            var $uv$=this;
                            var $vm=$vl.Node$TreeMap($uv$.key,$uv$.item,$uv$.red);
                            var $vn;
                            if(m$1.nn$(($vn=$uv$.left))){
                                var $vo=$vn.clone($vl);
                                ($vm.left=$vo);
                                ($vo.parent=$vm);
                            }
                            var $vp;
                            if(m$1.nn$(($vp=$uv$.right))){
                                var $vq=$vp.clone($vl);
                                ($vm.right=$vq);
                                ($vq.parent=$vm);
                            }
                            return $vm;
                        };$uv$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.Node$TreeMap},ps:[{nm:'clonedMap',mt:'prm',$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}}}],$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$m','clone']};};
                        m$1.atr$($uv$,'size',function(){
                            var $uv$=this;
                            var $vr=(1);
                            function set$vr($vs){return $vr=$vs;};
                            $prop$get$vr={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:$uv$.$prop$getSize,pa:1024,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size','$at','size$vkmi5i']};}};
                            $prop$get$vr.get=function(){return $vr};
                            $prop$get$vr.set=set$vr;
                            if(set$vr.$crtmm$===undefined)set$vr.$crtmm$=$prop$get$vr.$crtmm$;
                            var $vt;
                            if(m$1.nn$(($vt=$uv$.left))){
                                ($vr=$vr.plus($vt.size));
                            }
                            var $vu;
                            if(m$1.nn$(($vu=$uv$.right))){
                                ($vr=$vr.plus($vu.size));
                            }
                            return $vr;
                        },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:treeMap$.Node$TreeMap,pa:1,d:['ceylon.collection','TreeMap','$c','Node$7z3hge','$at','size']};});
                    })(Node$TreeMap.$$.prototype);
                }
                return Node$TreeMap;
            }
            treeMap$.$init$Node$TreeMap=$init$Node$TreeMap;
            $init$Node$TreeMap();
            treeMap$.Node$TreeMap=Node$TreeMap;
            treeMap$.$vv=function($vw){
                var treeMap$=this;
                var $vx;
                if(m$1.nn$(($vx=$vw))){
                    return $vx.red;
                }else {
                    return false;
                }
            };treeMap$.$vv.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.$_Boolean},ps:[{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','isRed$pt60u3']};};
            m$1.atr$(treeMap$,'$uo',function(){return this.$uo_;},function($vy){return this.$uo_=$vy;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$at','root$w9iz1a']};});
            treeMap$.$vz=function($w0){
                var treeMap$=this;
                var $w1=treeMap$.$uo;
                function set$w1($w2){return $w1=$w2;};
                var $w3;
                while(m$1.nn$(($w3=$w1))){
                    var $w4=treeMap$.$um($w0,$w3.key);
                    if($w4===m$1.getEqual()) {
                        return $w3;
                    }else if($w4===m$1.getSmaller()) {
                        $w1=$w3.left;
                    }else if($w4===m$1.getLarger()) {
                        $w1=$w3.right;
                    }
                }
                return $w1;
            };treeMap$.$vz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','lookup$pd1hl6']};};
            treeMap$.$w5=function($w6){
                var treeMap$=this;
                var $w7=treeMap$.$uo;
                function set$w7($w8){return $w7=$w8;};
                var $w9;
                while(m$1.nn$(($w9=$w7))){
                    var $wa=treeMap$.$um($w6,$w9.key);
                    if($wa===m$1.getEqual()) {
                        return $w9;
                    }else if($wa===m$1.getSmaller()) {
                        if(!m$1.nn$($w9.left)){
                            var $wb=$w9;
                            function set$wb($wc){return $wb=$wc;};
                            var $wd;
                            while(m$1.nn$(($wd=$wb.parent))&&$wb.onLeft){
                                $wb=$wd;
                            }
                            return $wb.parent;
                        }
                        $w7=$w9.left;
                    }else if($wa===m$1.getLarger()) {
                        if(!m$1.nn$($w9.right)){
                            return $w9;
                        }
                        $w7=$w9.right;
                    }
                }
                return $w7;
            };treeMap$.$w5.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','ceiling$by99mn']};};
            treeMap$.$we=function($wf){
                var treeMap$=this;
                var $wg=treeMap$.$uo;
                function set$wg($wh){return $wg=$wh;};
                var $wi;
                while(m$1.nn$(($wi=$wg))){
                    var $wj=treeMap$.$um($wf,$wi.key);
                    if($wj===m$1.getEqual()) {
                        return $wi;
                    }else if($wj===m$1.getSmaller()) {
                        if(!m$1.nn$($wi.left)){
                            return $wi;
                        }
                        $wg=$wi.left;
                    }else if($wj===m$1.getLarger()) {
                        if(!m$1.nn$($wi.right)){
                            var $wk=$wi;
                            function set$wk($wl){return $wk=$wl;};
                            var $wm;
                            while(m$1.nn$(($wm=$wk.parent))&&$wk.onRight){
                                $wk=$wm;
                            }
                            return $wk.parent;
                        }
                        $wg=$wi.right;
                    }
                }
                return $wg;
            };treeMap$.$we.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','floor$u13blk']};};
            treeMap$.$wn=function($wo,$wp){
                var treeMap$=this;
                var $wq;
                if(m$1.nn$(($wq=$wo.parent))){
                    if($wo.onLeft){
                        ($wq.left=$wp);
                    }else {
                        if($wo.onRight){
                            ($wq.right=$wp);
                        }else {
                            m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (223:23-223:29)",'223:16-223:30','TreeMap.ceylon');
                        }
                    }
                }else {
                    treeMap$.$uo=$wp;
                }
                var $wr;
                if(m$1.nn$(($wr=$wp))){
                    ($wr.parent=$wo.parent);
                }
            };treeMap$.$wn.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'old',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'node',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','replaceNode$sb7ik2']};};
            treeMap$.$ws=function($wt,$wu){
                var treeMap$=this;
                ($wt.left=$wu);
                var $wv;
                if(m$1.nn$(($wv=$wu))){
                    ($wv.parent=$wt);
                }
            };treeMap$.$ws.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'left',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setLeftChild$7ba4nt']};};
            treeMap$.$ww=function($wx,$wy){
                var treeMap$=this;
                ($wx.right=$wy);
                var $wz;
                if(m$1.nn$(($wz=$wy))){
                    ($wz.parent=$wx);
                }
            };treeMap$.$ww.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'right',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','setRightChild$y2zjj6']};};
            treeMap$.$x0=function($x1){
                var treeMap$=this;
                var $x2;
                m$1.asrt$((m$1.nn$(($x2=$x1.right))),"Assertion failed: \'exists right = node.right\' at TreeMap.ceylon (249:15-249:41)",'249:8-249:42','TreeMap.ceylon');
                treeMap$.$wn($x1,$x2);
                var $x3=$x2.left;
                treeMap$.$ww($x1,$x3);
                treeMap$.$ws($x2,$x1);
            };treeMap$.$x0.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateLeft$bf2pku']};};
            treeMap$.$x4=function($x5){
                var treeMap$=this;
                var $x6;
                m$1.asrt$((m$1.nn$(($x6=$x5.left))),"Assertion failed: \'exists left = node.left\' at TreeMap.ceylon (257:15-257:39)",'257:8-257:40','TreeMap.ceylon');
                var $x7=$x6.right;
                treeMap$.$wn($x5,$x6);
                treeMap$.$ws($x5,$x7);
                treeMap$.$ww($x6,$x5);
            };treeMap$.$x4.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','rotateRight$lztmmz']};};
            treeMap$.$x8=function($x9){
                var treeMap$=this;
                var $xa;
                if(m$1.nn$(($xa=$x9.parent))){
                    if(treeMap$.$vv($xa)){
                        var $xb;
                        if(m$1.nn$(($xb=$x9.uncle))&&treeMap$.$vv($xb)){
                            ($xa.red=false);
                            ($xb.red=false);
                            var $xc;
                            m$1.asrt$((m$1.nn$(($xc=$x9.grandparent))),"Assertion failed: \'exists grandparent=newNode.grandparent\' at TreeMap.ceylon (274:27-274:66)",'274:20-274:67','TreeMap.ceylon');
                            ($xc.red=true);
                            treeMap$.$x8($xc);
                        }else {
                            var $xd;
                            if(($x9.onRight&&$xa.onLeft)){
                                treeMap$.$x0($xa);
                                var $xe;
                                m$1.asrt$((m$1.nn$(($xe=$x9.left))),"Assertion failed: \'exists nl=newNode.left\' at TreeMap.ceylon (283:31-283:54)",'283:24-283:55','TreeMap.ceylon');
                                $xd=$xe;
                            }else {
                                if(($x9.onLeft&&$xa.onRight)){
                                    treeMap$.$x4($xa);
                                    var $xf;
                                    m$1.asrt$((m$1.nn$(($xf=$x9.right))),"Assertion failed: \'exists nr=newNode.right\' at TreeMap.ceylon (288:31-288:55)",'288:24-288:56','TreeMap.ceylon');
                                    $xd=$xf;
                                }else {
                                    $xd=$x9;
                                }
                            }
                            var $xg;
                            m$1.asrt$((m$1.nn$(($xg=$xd.parent))),"Assertion failed: \'exists adjustedParent=adjustedNode.parent\' at TreeMap.ceylon (295:27-295:69)",'295:20-295:70','TreeMap.ceylon');
                            ($xg.red=false);
                            var $xh;
                            m$1.asrt$((m$1.nn$(($xh=$xd.grandparent))),"Assertion failed: \'exists grandparent=adjustedNode.grandparent\' at TreeMap.ceylon (297:27-297:71)",'297:20-297:72','TreeMap.ceylon');
                            ($xh.red=true);
                            if(($xd.onLeft&&$xg.onLeft)){
                                treeMap$.$x4($xh);
                            }else {
                                if(($xd.onRight&&$xg.onRight)){
                                    treeMap$.$x0($xh);
                                }else {
                                    m$1.asrt$((false),"Assertion failed: \'false\' at TreeMap.ceylon (306:31-306:37)",'306:24-306:38','TreeMap.ceylon');
                                }
                            }
                        }
                    }
                }else {
                    ($x9.red=false);
                }
            };treeMap$.$x8.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'newNode',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','balanceAfterInsert$9owhr7']};};
            treeMap$.put=function($xi,$xj){
                var treeMap$=this;
                var $xk=treeMap$.Node$TreeMap($xi,$xj,true);
                var $xl;
                if(m$1.nn$(($xl=treeMap$.$uo))){
                    var $xm=$xl;
                    function set$xm($xn){return $xm=$xn;};
                    while(true){
                        var $xo=treeMap$.$um($xi,$xm.key);
                        if($xo===m$1.getLarger()) {
                            var $xp;
                            if(m$1.nn$(($xp=$xm.right))){
                                $xm=$xp;
                            }else {
                                ($xm.right=$xk);
                                break;
                            }
                        }else if($xo===m$1.getSmaller()) {
                            var $xq;
                            if(m$1.nn$(($xq=$xm.left))){
                                $xm=$xq;
                            }else {
                                ($xm.left=$xk);
                                break;
                            }
                        }else if($xo===m$1.getEqual()) {
                            var $xr=$xm.item;
                            ($xm.item=$xj);
                            return $xr;
                        }
                    }
                    ($xk.parent=$xm);
                }else {
                    treeMap$.$uo=$xk;
                }
                treeMap$.$x8($xk);
                return null;
            };treeMap$.put.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'},{nm:'item',mt:'prm',$t:'Item$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','put']};};
            function $uu(){
                var $uu$=new this.$uu.$$;$uu$.outer$=this;
                return $uu$;
            };$uu.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1e')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e']};};
            function $init$removeCases(){
                if($uu.$$===undefined){
                    m$1.initTypeProto($uu,'ceylon.collection::TreeMap.removeCases',m$1.Basic);
                    TreeMap.$uu=$uu;
                    (function($uu$){
                        $uu$.$xs=function($xt){
                            var $uu$=this;
                            var $xu;
                            if(m$1.nn$(($xu=$xt.left))){
                                m$1.asrt$((!m$1.nn$($xt.right)),"Assertion failed: \'!node.right exists\' at TreeMap.ceylon (367:23-367:42)",'367:16-367:43','TreeMap.ceylon');
                                return $xu;
                            }else {
                                var $xv;
                                if(m$1.nn$(($xv=$xt.right))){
                                    m$1.asrt$((!m$1.nn$($xt.left)),"Assertion failed: \'!node.left exists\' at TreeMap.ceylon (371:23-371:41)",'371:16-371:42','TreeMap.ceylon');
                                    return $xv;
                                }else {
                                    return null;
                                }
                            }
                        };$uu$.$xs.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:TreeMap.Node$TreeMap},{t:m$1.Null}]},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:treeMap$.$uu,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','getAndEnsureAtMostOneChild$j2uuc0']};};
                        $uu$.removeNodeWithAtMostOneChild=function($xw){
                            var $uu$=this;
                            var $xx=$uu$.$xs($xw);
                            if(!$xw.red&&$uu$.outer$.$vv($xx)){
                                var $xy;
                                m$1.asrt$((m$1.nn$(($xy=$xx))),"Assertion failed: \'exists child\' at TreeMap.ceylon (382:22-382:35)",'382:16-382:36','TreeMap.ceylon');
                                ($xy.red=false);
                            }else {
                                if(!$xw.red){
                                    $uu$.$xz($xw,$xw.sibling);
                                }
                            }
                            $uu$.outer$.$wn($xw,$xx);
                        };$uu$.removeNodeWithAtMostOneChild.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:treeMap$.$uu,pa:1,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','removeNodeWithAtMostOneChild']};};
                        $uu$.$xz=function($y0,$y1){
                            var $uu$=this;
                            var $y2;
                            if(m$1.nn$(($y2=$uu$.outer$.$uo))&&!($y2===$y0)){
                                $uu$.$y3($y0,$y1);
                            }
                        };$uu$.$xz.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:treeMap$.$uu,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case1$l9jgd2']};};
                        $uu$.$y3=function($y4,$y5){
                            var $uu$=this;
                            var $y6;
                            m$1.asrt$((m$1.nn$(($y6=$y4.parent))),"Assertion failed: \'exists p = node.parent\' at TreeMap.ceylon (398:18-398:41)",'398:12-398:42','TreeMap.ceylon');
                            var $y7;
                            if(m$1.nn$(($y7=$y5))&&$y7.red){
                                ($y6.red=true);
                                ($y7.red=false);
                                if($y4.onLeft){
                                    $uu$.outer$.$x0($y6);
                                }else {
                                    $uu$.outer$.$x4($y6);
                                }
                            }
                            var $y8;
                            m$1.asrt$((m$1.nn$(($y8=$y4.parent))),"Assertion failed: \'exists newParent = node.parent\' at TreeMap.ceylon (408:18-408:49)",'408:12-408:50','TreeMap.ceylon');
                            $uu$.$y9($y4,$y8,$y4.sibling);
                        };$uu$.$y3.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sibling',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:treeMap$.$uu,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case2$l9jhf3']};};
                        $uu$.$y9=function($ya,$yb,$yc){
                            var $uu$=this;
                            var $yd;
                            m$1.asrt$((m$1.nn$(($yd=$yc))),"Assertion failed: \'exists s\' at TreeMap.ceylon (413:18-413:27)",'413:12-413:28','TreeMap.ceylon');
                            var $ye=$uu$.outer$.$vv($yd.left);
                            var $yf=$uu$.outer$.$vv($yd.right);
                            if(!$yd.red&&!$yb.red&&!$ye&&!$yf){
                                ($yd.red=true);
                                $uu$.$xz($yb,$yb.sibling);
                            }else {
                                $uu$.$yg($ya,$yb,$yd,$ye,$yf);
                            }
                        };$uu$.$y9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:treeMap$.$uu,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case3$l9jih4']};};
                        $uu$.$yg=function($yh,$yi,$yj,$yk,$yl){
                            var $uu$=this;
                            if(!$yj.red&&$yi.red&&!$yk&&!$yl){
                                ($yj.red=true);
                                ($yi.red=false);
                            }else {
                                $uu$.$ym($yh,$yi,$yj,$yk,$yl);
                            }
                        };$uu$.$yg.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$uu,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case4$l9jjj5']};};
                        $uu$.$ym=function($yn,$yo,$yp,$yq,$yr){
                            var $uu$=this;
                            if(!$yp.red&&$yq&&!$yr&&$yn.onLeft){
                                ($yp.red=true);
                                var $ys;
                                m$1.asrt$((m$1.nn$(($ys=$yp.left))),"Assertion failed: \'exists sl = s.left\' at TreeMap.ceylon (436:23-436:42)",'436:16-436:43','TreeMap.ceylon');
                                ($ys.red=false);
                                $uu$.outer$.$x4($yp);
                            }else {
                                if(!$yp.red&&!$yq&&$yr&&$yn.onRight){
                                    ($yp.red=true);
                                    var $yt;
                                    m$1.asrt$((m$1.nn$(($yt=$yp.right))),"Assertion failed: \'exists sr = s.right\' at TreeMap.ceylon (441:23-441:43)",'441:16-441:44','TreeMap.ceylon');
                                    ($yt.red=false);
                                    $uu$.outer$.$x0($yp);
                                }
                            }
                            var $yu,$yv;
                            m$1.asrt$((m$1.nn$(($yu=$yn.parent))&&m$1.nn$(($yv=$yn.sibling))),"Assertion failed: \'exists newParent = node.parent, exists newS = node.sibling\' at TreeMap.ceylon (445:18-445:77)",'445:12-445:78','TreeMap.ceylon');
                            $uu$.$yw($yn,$yu,$yv);
                        };$uu$.$ym.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'sLeftRed',mt:'prm',$t:{t:m$1.$_Boolean}},{nm:'sRightRed',mt:'prm',$t:{t:m$1.$_Boolean}}],$cont:treeMap$.$uu,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case5$l9jkl6']};};
                        $uu$.$yw=function($yx,$yy,$yz){
                            var $uu$=this;
                            ($yz.red=$yy.red);
                            ($yy.red=false);
                            var $z0;
                            if($yx.onLeft&&m$1.nn$(($z0=$yz.right))){
                                ($z0.red=false);
                                $uu$.outer$.$x0($yy);
                            }else {
                                var $z1;
                                if(m$1.nn$(($z1=$yz.left))){
                                    ($z1.red=false);
                                    $uu$.outer$.$x4($yy);
                                }
                            }
                        };$uu$.$yw.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'p',mt:'prm',$t:{t:TreeMap.Node$TreeMap}},{nm:'s',mt:'prm',$t:{t:TreeMap.Node$TreeMap}}],$cont:treeMap$.$uu,d:['ceylon.collection','TreeMap','$o','removeCases$osfi1e','$m','case6$l9jln7']};};
                    })($uu.$$.prototype);
                }
                return $uu;
            }
            treeMap$.$init$removeCases=$init$removeCases;
            $init$removeCases();
            m$1.atr$(treeMap$,'$ut',function(){return this.$ut_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeMap.$uu},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};});
            treeMap$.$uu=$uu;treeMap$.$uu.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap.$uu},$cont:TreeMap,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeMap:$o:removeCases$osfi1f')];},d:['ceylon.collection','TreeMap','$o','removeCases$osfi1f']};};
            treeMap$.remove=function($z2){
                var treeMap$=this;
                var $z3;
                if(m$1.nn$(($z3=treeMap$.$vz($z2)))){
                    var $z4;
                    var $z5,$z6;
                    if(m$1.nn$(($z5=$z3.left))&&m$1.nn$(($z6=$z3.right))){
                        $z4=$z5.rightmostChild;
                        ($z3.key=$z4.key);
                        ($z3.item=$z4.item);
                    }else {
                        $z4=$z3;
                    }
                    treeMap$.$ut.removeNodeWithAtMostOneChild($z4);
                    return $z3.item;
                }else {
                    return null;
                }
            };treeMap$.remove.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Item$TreeMap']},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','remove']};};
            treeMap$.higherEntries=function($z7){
                var treeMap$=this;
                function $z8($$targs$$){
                    var $z8$=new $z8.$$;$z8$.outer$=treeMap$;
                    $z8$.$$targs$$=$$targs$$;
                    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}},$z8$);
                    return $z8$;
                };$z8.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:treeMap$.higherEntries,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$m','higherEntries','$o','iterable$3nr49a']};};
                function $init$$z8(){
                    if($z8.$$===undefined){
                        m$1.initTypeProto($z8,'ceylon.collection::TreeMap.iterable',m$1.Basic,m$1.Iterable);
                        (function($z8$){
                            $z8$.iterator=function(){
                                var $z8$=this;
                                return treeMap$.NodeIterator$TreeMap(treeMap$.$we($z7));
                            };
                        })($z8.$$.prototype);
                    }
                    return $z8;
                }
                $init$$z8();
                var $z9;
                function get$z9(){
                    if($z9===undefined){$z9=$init$$z8()({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}});$z9.$crtmm$=get$z9.$crtmm$;}
                    return $z9;
                }
                get$z9.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$z8},$cont:treeMap$.higherEntries,d:['ceylon.collection','TreeMap','$m','higherEntries','$o','iterable$3nr49b']};};
                $prop$get$z9={get:get$z9,$crtmm$:get$z9.$crtmm$};
                get$z8=get$z9;$prop$get$z8=get$z9;
                return get$z9();
            };treeMap$.higherEntries.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','higherEntries']};};
            treeMap$.lowerEntries=function($za){
                var treeMap$=this;
                function $zb($$targs$$){
                    var $zb$=new $zb.$$;$zb$.outer$=treeMap$;
                    $zb$.$$targs$$=$$targs$$;
                    m$1.Iterable({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}},$zb$);
                    return $zb$;
                };$zb.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:treeMap$.lowerEntries,sts:[{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$m','lowerEntries','$o','iterable$y21z9o']};};
                function $init$$zb(){
                    if($zb.$$===undefined){
                        m$1.initTypeProto($zb,'ceylon.collection::TreeMap.iterable',m$1.Basic,m$1.Iterable);
                        (function($zb$){
                            $zb$.iterator=function(){
                                var $zb$=this;
                                return treeMap$.ReverseNodeIterator$TreeMap(treeMap$.$w5($za));
                            };
                        })($zb.$$.prototype);
                    }
                    return $zb;
                }
                $init$$zb();
                var $zc;
                function get$zc(){
                    if($zc===undefined){$zc=$init$$zb()({Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}});$zc.$crtmm$=get$zc.$crtmm$;}
                    return $zc;
                }
                get$zc.$crtmm$=function(){return{mod:$CCMM$,$t:{t:$zb},$cont:treeMap$.lowerEntries,d:['ceylon.collection','TreeMap','$m','lowerEntries','$o','iterable$y21z9p']};};
                $prop$get$zc={get:get$zc,$crtmm$:get$zc.$crtmm$};
                get$zb=get$zc;$prop$get$zb=get$zc;
                return get$zc();
            };treeMap$.lowerEntries.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},ps:[{nm:'key',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','lowerEntries']};};
            function NodeIterator$TreeMap($zd,$ze$){
                $init$NodeIterator$TreeMap();
                if($ze$===undefined)$ze$=new this.NodeIterator$TreeMap.$$;
                $ze$.outer$=this;
                $ze$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$ze$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$ze$.outer$.$$targs$$.Item$TreeMap}}};
                if($zd===undefined){$zd=($zf=$ze$.outer$.$uo,m$1.nn$($zf)?$zf.leftmostChild:null);}
                $ze$.$zd_=$zd;
                m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$ze$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$ze$.outer$.$$targs$$.Item$TreeMap}}},$ze$);
                $ze$.$prop$get$zd={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};}};
                $ze$.$prop$get$zd.get=function(){return $zd};
                return $ze$;
            }
            NodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc']};};
            function $init$NodeIterator$TreeMap(){
                if(NodeIterator$TreeMap.$$===undefined){
                    m$1.initTypeProto(NodeIterator$TreeMap,'ceylon.collection::TreeMap.NodeIterator',m$1.Basic,m$1.Iterator);
                    TreeMap.NodeIterator$TreeMap=NodeIterator$TreeMap;
                    (function($ze$){
                        m$1.atr$($ze$,'$zd',function(){return this.$zd_;},function($zg){return this.$zd_=$zg;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.NodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$at','current$5dq3a0']};});
                        $ze$.next=function(){
                            var $ze$=this;
                            var $zh;
                            var $zi;
                            if(m$1.nn$(($zi=$ze$.$zd))){
                                $zh=m$1.Entry($zi.key,$zi.item,{Key$Entry:$ze$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$ze$.outer$.$$targs$$.Item$TreeMap});
                            }else {
                                $zh=m$1.getFinished();
                            }
                            var $zj,$zk;
                            if(m$1.nn$(($zj=$ze$.$zd))&&m$1.nn$(($zk=$zj.right))){
                                $ze$.$zd=$zk;
                                var $zl;
                                while(m$1.nn$(($zl=($zm=$ze$.$zd,m$1.nn$($zm)?$zm.left:null)))){
                                    $ze$.$zd=$zl;
                                }
                                var $zm;
                            }else {
                                var $zn;
                                if(m$1.nn$(($zn=$ze$.$zd))){
                                    var $zo=$zn;
                                    function set$zo($zp){return $zo=$zp;};
                                    var $zq;
                                    while(m$1.nn$(($zq=$zo.parent))&&$zo.onRight){
                                        $zo=$zq;
                                    }
                                    $ze$.$zd=$zo.parent;
                                }else {
                                    $ze$.$zd=null;
                                }
                            }
                            return $zh;
                        };$ze$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.NodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','NodeIterator$6tiwsc','$m','next']};};
                    })(NodeIterator$TreeMap.$$.prototype);
                }
                return NodeIterator$TreeMap;
            }
            treeMap$.$init$NodeIterator$TreeMap=$init$NodeIterator$TreeMap;
            $init$NodeIterator$TreeMap();
            treeMap$.NodeIterator$TreeMap=NodeIterator$TreeMap;
            function ReverseNodeIterator$TreeMap($zr,$zs$){
                $init$ReverseNodeIterator$TreeMap();
                if($zs$===undefined)$zs$=new this.ReverseNodeIterator$TreeMap.$$;
                $zs$.outer$=this;
                $zs$.$$targs$$={Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$zs$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$zs$.outer$.$$targs$$.Item$TreeMap}}};
                if($zr===undefined){$zr=($zt=$zs$.outer$.$uo,m$1.nn$($zt)?$zt.rightmostChild:null);}
                $zs$.$zr_=$zr;
                m$1.Iterator({Element$Iterator:{t:m$1.Entry,a:{Key$Entry:$zs$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$zs$.outer$.$$targs$$.Item$TreeMap}}},$zs$);
                $zs$.$prop$get$zr={$crtmm$:function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};}};
                $zs$.$prop$get$zr.get=function(){return $zr};
                return $zs$;
            }
            ReverseNodeIterator$TreeMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'current',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},pa:1027}],$cont:TreeMap,sts:[{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}}],d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966']};};
            function $init$ReverseNodeIterator$TreeMap(){
                if(ReverseNodeIterator$TreeMap.$$===undefined){
                    m$1.initTypeProto(ReverseNodeIterator$TreeMap,'ceylon.collection::TreeMap.ReverseNodeIterator',m$1.Basic,m$1.Iterator);
                    TreeMap.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
                    (function($zs$){
                        m$1.atr$($zs$,'$zr',function(){return this.$zr_;},function($zu){return this.$zr_=$zu;},function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]},$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:1027,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$at','current$suzjhm']};});
                        $zs$.next=function(){
                            var $zs$=this;
                            var $zv;
                            var $zw;
                            if(m$1.nn$(($zw=$zs$.$zr))){
                                $zv=m$1.Entry($zw.key,$zw.item,{Key$Entry:$zs$.outer$.$$targs$$.Key$TreeMap,Item$Entry:$zs$.outer$.$$targs$$.Item$TreeMap});
                            }else {
                                $zv=m$1.getFinished();
                            }
                            var $zx,$zy;
                            if(m$1.nn$(($zx=$zs$.$zr))&&m$1.nn$(($zy=$zx.left))){
                                $zs$.$zr=$zy;
                                var $zz;
                                while(m$1.nn$(($zz=($100=$zs$.$zr,m$1.nn$($100)?$100.right:null)))){
                                    $zs$.$zr=$zz;
                                }
                                var $100;
                            }else {
                                var $101;
                                if(m$1.nn$(($101=$zs$.$zr))){
                                    $zs$.$zr=$101.parent;
                                    var $102=$101;
                                    function set$102($103){return $102=$103;};
                                    var $104;
                                    while(m$1.nn$(($104=$zs$.$zr))&&$102.onLeft){
                                        $102=$104;
                                        $zs$.$zr=$104.parent;
                                    }
                                }else {
                                    $zs$.$zr=null;
                                }
                            }
                            return $zv;
                        };$zs$.next.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}},{t:m$1.Finished}]},ps:[],$cont:treeMap$.ReverseNodeIterator$TreeMap,pa:3,d:['ceylon.collection','TreeMap','$c','ReverseNodeIterator$z6e966','$m','next']};};
                    })(ReverseNodeIterator$TreeMap.$$.prototype);
                }
                return ReverseNodeIterator$TreeMap;
            }
            treeMap$.$init$ReverseNodeIterator$TreeMap=$init$ReverseNodeIterator$TreeMap;
            $init$ReverseNodeIterator$TreeMap();
            treeMap$.ReverseNodeIterator$TreeMap=ReverseNodeIterator$TreeMap;
            treeMap$.iterator=function(){
                var treeMap$=this;
                return treeMap$.NodeIterator$TreeMap();
            };
            treeMap$.iterator.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Iterator,a:{Element$Iterator:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','iterator']};};
            treeMap$.clone=function(){
                var treeMap$=this;
                var $105=TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$um),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),undefined,{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
                ($105.$uo=($106=treeMap$.$uo,m$1.JsCallable($106,m$1.nn$($106)?$106.clone:null))($105));
                var $106;
                return $105;
            };treeMap$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','clone']};};
            treeMap$.$_get=function($107){
                var treeMap$=this;
                var $108;
                if(m$1.is$(($108=$107),treeMap$.$$targs$$.Key$TreeMap)){
                    return ($109=treeMap$.$vz($108),m$1.nn$($109)?$109.item:null);
                    var $109;
                }else {
                    return null;
                }
            };treeMap$.$_get.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:'i',l:['Item$TreeMap',{t:m$1.$_Object}]}]},ps:[{nm:'key',mt:'prm',$t:{t:m$1.$_Object}}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','get']};};
            treeMap$.clear=function(){
                var treeMap$=this;
                return (treeMap$.$uo=null);
            };m$1.atr$(treeMap$,'size',function(){
                var treeMap$=this;
                return ($10a=($10b=treeMap$.$uo,m$1.nn$($10b)?$10b.size:null),m$1.nn$($10a)?$10a:(0));
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','size']};});
            m$1.atr$(treeMap$,'string',function(){
                var treeMap$=this;
                var $10c;
                if(m$1.nn$(($10c=treeMap$.$uo))){
                    return "{ ".plus($10c.string).plus(" }");
                }else {
                    return "{}";
                }
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.$_String},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','string']};});treeMap$.equals=function($10d){
                var treeMap$=this;
                return treeMap$.getT$all()['ceylon.language::Map'].$$.prototype.equals.call(this,$10d);
            };m$1.atr$(treeMap$,'hash',function(){
                var treeMap$=this;
                return m$1.attrGetter(treeMap$.getT$all()['ceylon.language::Map'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','hash']};});
            treeMap$.assertInvariants=function(){
                var treeMap$=this;
                treeMap$.$10e();
                treeMap$.$10f();
                treeMap$.$10g();
            };treeMap$.assertInvariants.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,pa:1,d:['ceylon.collection','TreeMap','$m','assertInvariants']};};
            treeMap$.$10e=function(){
                var treeMap$=this;
                m$1.asrt$((!treeMap$.$vv(treeMap$.$uo)),"Assertion failed: \'!isRed(root)\' at TreeMap.ceylon (603:15-603:28)",'603:8-603:29','TreeMap.ceylon');
            };treeMap$.$10e.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackRoot$37b14f']};};
            treeMap$.$10f$defs$node=function($10h){var treeMap$=this;
            return treeMap$.$uo;};
            treeMap$.$10f=function($10h){
                var treeMap$=this;
                if($10h===undefined){$10h=treeMap$.$10f$defs$node($10h);}
                var $10i;
                if(m$1.nn$(($10i=$10h))){
                    if(treeMap$.$vv($10i)){
                        m$1.asrt$((!treeMap$.$vv($10i.left)),"Assertion failed: \'!isRed(node.left)\' at TreeMap.ceylon (609:23-609:41)",'609:16-609:42','TreeMap.ceylon');
                        m$1.asrt$((!treeMap$.$vv($10i.right)),"Assertion failed: \'!isRed(node.right)\' at TreeMap.ceylon (610:23-610:42)",'610:16-610:43','TreeMap.ceylon');
                        m$1.asrt$((!treeMap$.$vv($10i.parent)),"Assertion failed: \'!isRed(node.parent)\' at TreeMap.ceylon (611:23-611:43)",'611:16-611:44','TreeMap.ceylon');
                    }
                    treeMap$.$10f($10i.left);
                    treeMap$.$10f($10i.right);
                }
            };treeMap$.$10f.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Anything},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertColors$bbyw4y']};};
            treeMap$.$10g$defs$node=function($10j,$10k,$10l){var treeMap$=this;
            return treeMap$.$uo;};
            treeMap$.$10g$defs$blackCount=function($10j,$10k,$10l){return 0;};
            treeMap$.$10g$defs$pathBlackCount=function($10j,$10k,$10l){return null;};
            treeMap$.$10g=function($10j,$10k,$10l){
                var treeMap$=this;
                if($10j===undefined){$10j=treeMap$.$10g$defs$node($10j,$10k,$10l);}
                if($10k===undefined){$10k=treeMap$.$10g$defs$blackCount($10j,$10k,$10l);}
                if($10l===undefined){$10l=treeMap$.$10g$defs$pathBlackCount($10j,$10k,$10l);}
                var $10j=$10j;
                var $10k=$10k;
                function set$10k($10m){return $10k=$10m;};
                var $10l=$10l;
                function set$10l($10n){return $10l=$10n;};
                if(!treeMap$.$vv($10j)){
                    ($10o=$10k,$10k=$10o.successor,$10o);
                    var $10o;
                }
                var $10p;
                if(m$1.nn$(($10p=$10j))){
                    $10l=treeMap$.$10g($10p.left,$10k,$10l);
                    $10l=treeMap$.$10g($10p.right,$10k,$10l);
                    return $10l;
                }else {
                    var $10q;
                    if(m$1.nn$(($10q=$10l))){
                        m$1.asrt$((($10k==$10q)),"Assertion failed: \'blackCount == count\' at TreeMap.ceylon (635:23-635:43)",'635:16-635:44','TreeMap.ceylon');
                    }else {
                        $10l=$10k;
                    }
                    return $10l;
                }
            };treeMap$.$10g.$crtmm$=function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},ps:[{nm:'node',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:TreeMap.Node$TreeMap}]}},{nm:'blackCount',mt:'prm',def:1,$t:{t:m$1.Integer},pa:1024},{nm:'pathBlackCount',mt:'prm',def:1,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},pa:1027}],$cont:TreeMap,d:['ceylon.collection','TreeMap','$m','assertBlackNodesInPaths$9l267p']};};
            m$1.atr$(treeMap$,'first',function(){
                var treeMap$=this;
                var $10r;
                if(m$1.nn$(($10r=($10s=treeMap$.$uo,m$1.nn$($10s)?$10s.leftmostChild:null)))){
                    return m$1.Entry($10r.key,$10r.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap});
                }
                var $10s;
                return null;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','first']};});m$1.atr$(treeMap$,'last',function(){
                var treeMap$=this;
                var $10t;
                if(m$1.nn$(($10t=($10u=treeMap$.$uo,m$1.nn$($10u)?$10u.rightmostChild:null)))){
                    return m$1.Entry($10t.key,$10t.item,{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap});
                }
                var $10u;
                return null;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}]},$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$at','last']};});treeMap$.measure=function($10v,$10w){
                var treeMap$=this;
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$um),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),treeMap$.higherEntries($10v).take($10w),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };treeMap$.span=function($10x,$10y){
                var treeMap$=this;
                var $10z;
                if(treeMap$.$um($10x,$10y).equals(m$1.getLarger())){
                    $10z=treeMap$.lowerEntries($10x).takeWhile(m$1.$JsCallable((function($110){
                        return (!treeMap$.$um($110.key,$10y).equals(m$1.getSmaller()));
                    }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}]}}));
                }else {
                    $10z=treeMap$.higherEntries($10x).takeWhile(m$1.$JsCallable((function($111){
                        return (!treeMap$.$um($111.key,$10y).equals(m$1.getLarger()));
                    }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}]}}));
                }
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$um),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),$10z,{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };treeMap$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$TreeMap',Item$TreeMap:'Item$TreeMap'}},ps:[{nm:'from',mt:'prm',$t:'Key$TreeMap'},{nm:'to',mt:'prm',$t:'Key$TreeMap'}],$cont:TreeMap,pa:3,d:['ceylon.collection','TreeMap','$m','span']};};
            treeMap$.spanFrom=function($112){
                var treeMap$=this;
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$um),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),treeMap$.higherEntries($112),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };treeMap$.spanTo=function($113){
                var treeMap$=this;
                return TreeMap(m$1.$JsCallable(m$1.JsCallable(treeMap$,treeMap$.$um),[{nm:'x',mt:'prm',$t:'Key$TreeMap'},{nm:'y',mt:'prm',$t:'Key$TreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeMap$.$$targs$$.Key$TreeMap,treeMap$.$$targs$$.Key$TreeMap]}}),treeMap$.takeWhile(m$1.$JsCallable((function($114){
                    return (!treeMap$.$um($114.key,$113).equals(m$1.getLarger()));
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Key$TreeMap',Item$Entry:'Item$TreeMap'}}}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeMap$.$$targs$$.Key$TreeMap,Item$Entry:treeMap$.$$targs$$.Item$TreeMap}}]}})),{Item$TreeMap:treeMap$.$$targs$$.Item$TreeMap,Key$TreeMap:treeMap$.$$targs$$.Key$TreeMap});
            };
        })(TreeMap.$$.prototype);
    }
    return TreeMap;
}
ex$.$init$TreeMap=$init$TreeMap;
$init$TreeMap();
var $v9,$vb,$zf,$zt,$10a,$10b;
var naturalOrderTreeMap=function($115,$$$mptypes){
    return TreeMap(m$1.$JsCallable((function($116,$117){
        return $116.compare($117);
    }),[{nm:'x',mt:'prm',$t:'Key$naturalOrderTreeMap'},{nm:'y',mt:'prm',$t:'Key$naturalOrderTreeMap'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[$$$mptypes.Key$naturalOrderTreeMap,$$$mptypes.Key$naturalOrderTreeMap]}}),$115,{Item$TreeMap:$$$mptypes.Item$naturalOrderTreeMap,Key$TreeMap:$$$mptypes.Key$naturalOrderTreeMap});
};
naturalOrderTreeMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Key$naturalOrderTreeMap',Item$TreeMap:'Item$naturalOrderTreeMap'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:{t:m$1.Entry,a:{Key$Entry:'Key$naturalOrderTreeMap',Item$Entry:'Item$naturalOrderTreeMap'}}}}}],tp:{Key$naturalOrderTreeMap:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Key$naturalOrderTreeMap'}}]},Item$naturalOrderTreeMap:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeMap')];},d:['ceylon.collection','naturalOrderTreeMap']};};
ex$.naturalOrderTreeMap=naturalOrderTreeMap;
function TreeSet($118,$119,$$targs$$,treeSet$){
    $init$TreeSet();
    if(treeSet$===undefined)treeSet$=new TreeSet.$$;
    m$1.set_type_args(treeSet$,$$targs$$);
    treeSet$.$118_=$118;
    if($119===undefined){$119=m$1.getEmpty();}
    treeSet$.$119_=$119;
    MutableSet({Element$MutableSet:$$targs$$.Element$TreeSet},treeSet$);
    SortedSet({Element$SortedSet:$$targs$$.Element$TreeSet},treeSet$);
    m$1.Ranged({Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:$$targs$$.Element$TreeSet}},Element$Ranged:$$targs$$.Element$TreeSet,Index$Ranged:$$targs$$.Element$TreeSet},treeSet$);
    treeSet$.$118=$118;
    treeSet$.$prop$get$119={$crtmm$:function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},$cont:TreeSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','TreeSet','$at','elements$py9pun']};}};
    treeSet$.$prop$get$119.get=function(){return $119};
    treeSet$.$11a_=treeSet$.$11b();
    treeSet$.$11c_=TreeMap(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$118),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.$119.$_map(m$1.$JsCallable((function($11d){
        return m$1.Entry($11d,treeSet$.$11a,{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}});
    }),[{nm:'e',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}}},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}}),{Result$map:{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.Basic}}}}),{Item$TreeMap:{t:m$1.Basic},Key$TreeMap:treeSet$.$$targs$$.Element$TreeSet});
    treeSet$.$prop$get$11c={$crtmm$:function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:{t:m$1.Basic}}},$cont:TreeSet,pa:1024,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};}};
    treeSet$.$prop$get$11c.get=function(){return $11c};
    return treeSet$;
}
TreeSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'compare',mt:'prm',$pt:'f',$t:{t:m$1.Comparison},an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet:$m:compare$i3xpjz')];}},{nm:'elements',mt:'prm',def:1,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},an:function(){return[m$1.doc("The initial elements of the set.")];}}],tp:{Element$TreeSet:{sts:[{t:m$1.$_Object}]}},sts:[{t:MutableSet,a:{Element$MutableSet:'Element$TreeSet'}},{t:SortedSet,a:{Element$SortedSet:'Element$TreeSet'}},{t:m$1.Ranged,a:{Subrange$Ranged:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},Element$Ranged:'Element$TreeSet',Index$Ranged:'Element$TreeSet'}}],pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:TreeSet'),m$1.see([m$1.OpenFunction(m$1.lmp$(ex$,'ceylon.collection'),naturalOrderTreeSet)].rt$({t:m$1.FunctionDeclaration$meta$declaration})),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','TreeSet']};};
ex$.TreeSet=TreeSet;
function $init$TreeSet(){
    if(TreeSet.$$===undefined){
        m$1.initTypeProto(TreeSet,'ceylon.collection::TreeSet',m$1.Basic,$init$SortedSet(),$init$MutableSet(),m$1.Ranged);
        (function(treeSet$){
            m$1.atr$(treeSet$,'$119',function(){return this.$119_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$TreeSet'}},$cont:TreeSet,an:function(){return[m$1.doc("The initial elements of the set.")];},d:['ceylon.collection','TreeSet','$at','elements$py9pun']};});
            function $11b(){
                var $11b$=new this.$11b.$$;$11b$.outer$=this;
                return $11b$;
            };$11b.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},$cont:TreeSet,d:['ceylon.collection','TreeSet','$o','present$b4mj24']};};
            function $init$present(){
                if($11b.$$===undefined){
                    m$1.initTypeProto($11b,'ceylon.collection::TreeSet.present',m$1.Basic);
                    TreeSet.$11b=$11b;
                }
                return $11b;
            }
            treeSet$.$init$present=$init$present;
            $init$present();
            m$1.atr$(treeSet$,'$11a',function(){return this.$11a_;},undefined,function(){return{mod:$CCMM$,$t:{t:TreeSet.$11b},$cont:TreeSet,d:['ceylon.collection','TreeSet','$o','present$b4mj23']};});
            treeSet$.$11b=$11b;treeSet$.$11b.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet.$11b},$cont:TreeSet,d:['ceylon.collection','TreeSet','$o','present$b4mj23']};};
            m$1.atr$(treeSet$,'$11c',function(){return this.$11c_;},function($11e){return this.$11c_=$11e;},function(){return{mod:$CCMM$,$t:{t:TreeMap,a:{Key$TreeMap:'Element$TreeSet',Item$TreeMap:{t:m$1.Basic}}},$cont:TreeSet,pa:1024,d:['ceylon.collection','TreeSet','$at','map$n8fv26']};});
            treeSet$.add=function($11f){
                var treeSet$=this;
                return !m$1.nn$(treeSet$.$11c.put($11f,treeSet$.$11a));
            };treeSet$.remove=function($11g){
                var treeSet$=this;
                return m$1.nn$(treeSet$.$11c.remove($11g));
            };treeSet$.clear=function(){
                var treeSet$=this;
                return treeSet$.$11c.clear();
            };treeSet$.clone=function(){
                var treeSet$=this;
                var $11h=TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$118),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),undefined,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
                ($11h.$11c=treeSet$.$11c.clone());
                return $11h;
            };treeSet$.clone.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','clone']};};
            treeSet$.complement=function($11i,$$$mptypes){
                var treeSet$=this;
                var $11j=HashSet(undefined,undefined,undefined,{Element$HashSet:treeSet$.$$targs$$.Element$TreeSet});
                var $11l;for(var $11k=treeSet$.iterator();($11l=$11k.next())!==m$1.getFinished();){
                    if(!$11i.contains($11l)){
                        $11j.add($11l);
                    }
                }
                return $11j;
            };treeSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:'Element$TreeSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:TreeSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','complement']};};
            treeSet$.exclusiveUnion=function($11m,$$$mptypes){
                var treeSet$=this;
                var $11n=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[treeSet$.$$targs$$.Element$TreeSet,$$$mptypes.Other$exclusiveUnion]}});
                var $11p;for(var $11o=treeSet$.iterator();($11p=$11o.next())!==m$1.getFinished();){
                    if(!$11m.contains($11p)){
                        $11n.add($11p);
                    }
                }
                var $11r;for(var $11q=$11m.iterator();($11r=$11q.next())!==m$1.getFinished();){
                    if(!treeSet$.contains($11r)){
                        $11n.add($11r);
                    }
                }
                return $11n;
            };treeSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:TreeSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','exclusiveUnion']};};
            treeSet$.intersection=function($11s,$$$mptypes){
                var treeSet$=this;
                var $11t=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'i',l:[treeSet$.$$targs$$.Element$TreeSet,$$$mptypes.Other$intersection]}});
                var $11v;for(var $11u=treeSet$.iterator();($11v=$11u.next())!==m$1.getFinished();){
                    var $11w;
                    if($11s.contains($11v)&&m$1.is$(($11w=$11v),$$$mptypes.Other$intersection)){
                        $11t.add($11w);
                    }
                }
                return $11t;
            };treeSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'i',l:['Element$TreeSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:TreeSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','intersection']};};
            treeSet$.union=function($11x,$$$mptypes){
                var treeSet$=this;
                var $11y=HashSet(undefined,undefined,undefined,{Element$HashSet:{t:'u',l:[treeSet$.$$targs$$.Element$TreeSet,$$$mptypes.Other$union]}});
                $11y.addAll(treeSet$);
                $11y.addAll($11x);
                return $11y;
            };treeSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:HashSet,a:{Element$HashSet:{t:'u',l:['Element$TreeSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:TreeSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','TreeSet','$m','union']};};
            treeSet$.iterator=function(){
                var treeSet$=this;
                return treeSet$.$11c.$_map(m$1.$JsCallable((function($11z){
                    return $11z.key;
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Element$TreeSet',Item$Entry:{t:m$1.$_Object}}}}],{Return$Callable:treeSet$.$$targs$$.Element$TreeSet,Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.$_Object}}}]}}),{Result$map:treeSet$.$$targs$$.Element$TreeSet}).iterator();
            };m$1.atr$(treeSet$,'first',function(){
                var treeSet$=this;
                return ($120=treeSet$.$11c.first,m$1.nn$($120)?$120.key:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','first']};});
            m$1.atr$(treeSet$,'last',function(){
                var treeSet$=this;
                return ($121=treeSet$.$11c.last,m$1.nn$($121)?$121.key:null);
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$TreeSet']},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','last']};});
            treeSet$.higherElements=function($122){
                var treeSet$=this;
                return treeSet$.$11c.higherEntries($122).$_map(m$1.$JsCallable((function($123){
                    return $123.key;
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Element$TreeSet',Item$Entry:{t:m$1.$_Object}}}}],{Return$Callable:treeSet$.$$targs$$.Element$TreeSet,Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.$_Object}}}]}}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.lowerElements=function($124){
                var treeSet$=this;
                return treeSet$.$11c.lowerEntries($124).$_map(m$1.$JsCallable((function($125){
                    return $125.key;
                }),[{nm:'entry',mt:'prm',$t:{t:m$1.Entry,a:{Key$Entry:'Element$TreeSet',Item$Entry:{t:m$1.$_Object}}}}],{Return$Callable:treeSet$.$$targs$$.Element$TreeSet,Arguments$Callable:{t:'T',l:[{t:m$1.Entry,a:{Key$Entry:treeSet$.$$targs$$.Element$TreeSet,Item$Entry:{t:m$1.$_Object}}}]}}),{Result$map:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.measure=function($126,$127){
                var treeSet$=this;
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$118),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.higherElements($126).take($127),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.span=function($128,$129){
                var treeSet$=this;
                var $12a;
                if(treeSet$.$118($128,$129).equals(m$1.getLarger())){
                    $12a=treeSet$.lowerElements($128).takeWhile(m$1.$JsCallable((function($12b){
                        return (!treeSet$.$118($12b,$129).equals(m$1.getSmaller()));
                    }),[{nm:'elem',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}}));
                }else {
                    $12a=treeSet$.higherElements($128).takeWhile(m$1.$JsCallable((function($12c){
                        return (!treeSet$.$118($12c,$129).equals(m$1.getLarger()));
                    }),[{nm:'elem',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}}));
                }
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$118),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),$12a,{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.span.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$TreeSet'}},ps:[{nm:'from',mt:'prm',$t:'Element$TreeSet'},{nm:'to',mt:'prm',$t:'Element$TreeSet'}],$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$m','span']};};
            treeSet$.spanFrom=function($12d){
                var treeSet$=this;
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$118),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.higherElements($12d),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.spanTo=function($12e){
                var treeSet$=this;
                return TreeSet(m$1.$JsCallable(m$1.JsCallable(treeSet$,treeSet$.$118),[{nm:'x',mt:'prm',$t:'Element$TreeSet'},{nm:'y',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet,treeSet$.$$targs$$.Element$TreeSet]}}),treeSet$.takeWhile(m$1.$JsCallable((function($12f){
                    return (!treeSet$.$118($12f,$12e).equals(m$1.getLarger()));
                }),[{nm:'elem',mt:'prm',$t:'Element$TreeSet'}],{Return$Callable:{t:m$1.$_Boolean},Arguments$Callable:{t:'T',l:[treeSet$.$$targs$$.Element$TreeSet]}})),{Element$TreeSet:treeSet$.$$targs$$.Element$TreeSet});
            };treeSet$.equals=function($12g){
                var treeSet$=this;
                return treeSet$.getT$all()['ceylon.language::Set'].$$.prototype.equals.call(this,$12g);
            };m$1.atr$(treeSet$,'hash',function(){
                var treeSet$=this;
                return m$1.attrGetter(treeSet$.getT$all()['ceylon.language::Set'],'hash').call(this);
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:TreeSet,pa:3,d:['ceylon.collection','TreeSet','$at','hash']};});
        })(TreeSet.$$.prototype);
    }
    return TreeSet;
}
ex$.$init$TreeSet=$init$TreeSet;
$init$TreeSet();
var $120,$121;
var naturalOrderTreeSet=function($12h,$$$mptypes){
    return TreeSet(m$1.$JsCallable((function($12i,$12j){
        return $12i.compare($12j);
    }),[{nm:'x',mt:'prm',$t:'Element$naturalOrderTreeSet'},{nm:'y',mt:'prm',$t:'Element$naturalOrderTreeSet'}],{Return$Callable:{t:m$1.Comparison},Arguments$Callable:{t:'T',l:[$$$mptypes.Element$naturalOrderTreeSet,$$$mptypes.Element$naturalOrderTreeSet]}}),$12h,{Element$TreeSet:$$$mptypes.Element$naturalOrderTreeSet});
};
naturalOrderTreeSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:TreeSet,a:{Element$TreeSet:'Element$naturalOrderTreeSet'}},ps:[{nm:'entries',mt:'prm',$t:{t:m$1.Iterable,a:{Absent$Iterable:{t:m$1.Null},Element$Iterable:'Element$naturalOrderTreeSet'}}}],tp:{Element$naturalOrderTreeSet:{sts:[{t:m$1.Comparable,a:{Other$Comparable:'Element$naturalOrderTreeSet'}}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:naturalOrderTreeSet')];},d:['ceylon.collection','naturalOrderTreeSet']};};
ex$.naturalOrderTreeSet=naturalOrderTreeSet;
function UnmodifiableList($12k,$$targs$$,unmodifiableList$){
    $init$UnmodifiableList();
    if(unmodifiableList$===undefined)unmodifiableList$=new UnmodifiableList.$$;
    m$1.set_type_args(unmodifiableList$,$$targs$$);
    unmodifiableList$.$12k_=$12k;
    m$1.List({Element$List:$$targs$$.Element$UnmodifiableList},unmodifiableList$);
    return unmodifiableList$;
}
UnmodifiableList.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}}],tp:{Element$UnmodifiableList:{dv:'out'}},sts:[{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableList'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableList']};};
function $init$UnmodifiableList(){
    if(UnmodifiableList.$$===undefined){
        m$1.initTypeProto(UnmodifiableList,'ceylon.collection::UnmodifiableList',m$1.Basic,m$1.List);
        (function(unmodifiableList$){
            unmodifiableList$.getFromFirst=function($12l){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.getFromFirst($12l);
            };m$1.atr$(unmodifiableList$,'size',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.size;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','size']};});
            m$1.atr$(unmodifiableList$,'lastIndex',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.lastIndex;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},{t:m$1.Integer}]},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','lastIndex']};});
            m$1.atr$(unmodifiableList$,'first',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.first;
            },undefined,function(){return{mod:$CCMM$,$t:{t:'u',l:[{t:m$1.Null},'Element$UnmodifiableList']},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','first']};});
            m$1.atr$(unmodifiableList$,'rest',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.rest;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','rest']};});
            unmodifiableList$.iterator=function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.iterator();
            };m$1.atr$(unmodifiableList$,'reversed',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.reversed;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','reversed']};});
            unmodifiableList$.measure=function($12m,$12n){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.measure($12m,$12n);
            };unmodifiableList$.span=function($12o,$12p){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.span($12o,$12p);
            };unmodifiableList$.spanFrom=function($12q){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.spanFrom($12q);
            };unmodifiableList$.spanTo=function($12r){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.spanTo($12r);
            };unmodifiableList$.equals=function($12s){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.equals($12s);
            };m$1.atr$(unmodifiableList$,'hash',function(){
                var unmodifiableList$=this;
                return unmodifiableList$.$12k.hash;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableList,pa:3,d:['ceylon.collection','UnmodifiableList','$at','hash']};});
            unmodifiableList$.clone=function(){
                var unmodifiableList$=this;
                return UnmodifiableList(unmodifiableList$.$12k.clone(),{Element$UnmodifiableList:unmodifiableList$.$$targs$$.Element$UnmodifiableList});
            };m$1.atr$(unmodifiableList$,'$12k',function(){return this.$12k_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$UnmodifiableList'}},$cont:UnmodifiableList,d:['ceylon.collection','UnmodifiableList','$at','list$1bhyan']};});
        })(UnmodifiableList.$$.prototype);
    }
    return UnmodifiableList;
}
ex$.$init$UnmodifiableList=$init$UnmodifiableList;
$init$UnmodifiableList();
var unmodifiableList=function($12t,$$$mptypes){
    return UnmodifiableList($12t,{Element$UnmodifiableList:$$$mptypes.Element$unmodifiableList});
};
unmodifiableList.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}},ps:[{nm:'list',mt:'prm',$t:{t:m$1.List,a:{Element$List:'Element$unmodifiableList'}}}],tp:{Element$unmodifiableList:{}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableList')];},d:['ceylon.collection','unmodifiableList']};};
ex$.unmodifiableList=unmodifiableList;
function UnmodifiableMap($12u,$$targs$$,unmodifiableMap$){
    $init$UnmodifiableMap();
    if(unmodifiableMap$===undefined)unmodifiableMap$=new UnmodifiableMap.$$;
    m$1.set_type_args(unmodifiableMap$,$$targs$$);
    unmodifiableMap$.$12u_=$12u;
    m$1.Map({Key$Map:$$targs$$.Key$UnmodifiableMap,Item$Map:$$targs$$.Item$UnmodifiableMap},unmodifiableMap$);
    var items=unmodifiableMap$.$12u.items;
    m$1.atr$(unmodifiableMap$,'items',function(){return items;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','items']};});
    return unmodifiableMap$;
}
UnmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}}],tp:{Key$UnmodifiableMap:{dv:'out',sts:[{t:m$1.$_Object}]},Item$UnmodifiableMap:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableMap'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableMap']};};
function $init$UnmodifiableMap(){
    if(UnmodifiableMap.$$===undefined){
        m$1.initTypeProto(UnmodifiableMap,'ceylon.collection::UnmodifiableMap',m$1.Basic,m$1.Map);
        (function(unmodifiableMap$){
            unmodifiableMap$.$_get=function($12v){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$12u.$_get($12v);
            };unmodifiableMap$.defines=function($12w){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$12u.defines($12w);
            };unmodifiableMap$.iterator=function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$12u.iterator();
            };m$1.atr$(unmodifiableMap$,'size',function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$12u.size;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','size']};});
            m$1.atr$(unmodifiableMap$,'keys',function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$12u.keys;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Collection,a:{Element$Collection:'Key$UnmodifiableMap'}},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','keys']};});
            delete unmodifiableMap$.items;
            unmodifiableMap$.equals=function($12x){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$12u.equals($12x);
            };m$1.atr$(unmodifiableMap$,'hash',function(){
                var unmodifiableMap$=this;
                return unmodifiableMap$.$12u.hash;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableMap,pa:3,d:['ceylon.collection','UnmodifiableMap','$at','hash']};});
            unmodifiableMap$.clone=function(){
                var unmodifiableMap$=this;
                return UnmodifiableMap(unmodifiableMap$.$12u.clone(),{Key$UnmodifiableMap:unmodifiableMap$.$$targs$$.Key$UnmodifiableMap,Item$UnmodifiableMap:unmodifiableMap$.$$targs$$.Item$UnmodifiableMap});
            };m$1.atr$(unmodifiableMap$,'$12u',function(){return this.$12u_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$UnmodifiableMap',Item$Map:'Item$UnmodifiableMap'}},$cont:UnmodifiableMap,d:['ceylon.collection','UnmodifiableMap','$at','map$7h6pyp']};});
        })(UnmodifiableMap.$$.prototype);
    }
    return UnmodifiableMap;
}
ex$.$init$UnmodifiableMap=$init$UnmodifiableMap;
$init$UnmodifiableMap();
var unmodifiableMap=function($12y,$$$mptypes){
    return UnmodifiableMap($12y,{Key$UnmodifiableMap:$$$mptypes.Key$unmodifiableMap,Item$UnmodifiableMap:$$$mptypes.Item$unmodifiableMap});
};
unmodifiableMap.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}},ps:[{nm:'map',mt:'prm',$t:{t:m$1.Map,a:{Key$Map:'Key$unmodifiableMap',Item$Map:'Item$unmodifiableMap'}}}],tp:{Key$unmodifiableMap:{sts:[{t:m$1.$_Object}]},Item$unmodifiableMap:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableMap')];},d:['ceylon.collection','unmodifiableMap']};};
ex$.unmodifiableMap=unmodifiableMap;
function UnmodifiableSet($12z,$$targs$$,unmodifiableSet$){
    $init$UnmodifiableSet();
    if(unmodifiableSet$===undefined)unmodifiableSet$=new UnmodifiableSet.$$;
    m$1.set_type_args(unmodifiableSet$,$$targs$$);
    unmodifiableSet$.$12z_=$12z;
    m$1.Set({Element$Set:$$targs$$.Element$UnmodifiableSet},unmodifiableSet$);
    return unmodifiableSet$;
}
UnmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,'super':{t:m$1.Basic},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}}],tp:{Element$UnmodifiableSet:{dv:'out',sts:[{t:m$1.$_Object}]}},sts:[{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}}],an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:UnmodifiableSet'),m$1.by(["Gavin King"].rt$({t:m$1.$_String}))];},d:['ceylon.collection','UnmodifiableSet']};};
function $init$UnmodifiableSet(){
    if(UnmodifiableSet.$$===undefined){
        m$1.initTypeProto(UnmodifiableSet,'ceylon.collection::UnmodifiableSet',m$1.Basic,m$1.Set);
        (function(unmodifiableSet$){
            unmodifiableSet$.iterator=function(){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.iterator();
            };m$1.atr$(unmodifiableSet$,'size',function(){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.size;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','size']};});
            unmodifiableSet$.contains=function($130){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.contains($130);
            };unmodifiableSet$.complement=function($131,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.complement($131,{Other$complement:$$$mptypes.Other$complement});
            };
            unmodifiableSet$.complement.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$complement'}}}],$cont:UnmodifiableSet,tp:{Other$complement:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','complement']};};
            unmodifiableSet$.exclusiveUnion=function($132,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.exclusiveUnion($132,{Other$exclusiveUnion:$$$mptypes.Other$exclusiveUnion});
            };
            unmodifiableSet$.exclusiveUnion.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$exclusiveUnion']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$exclusiveUnion'}}}],$cont:UnmodifiableSet,tp:{Other$exclusiveUnion:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','exclusiveUnion']};};
            unmodifiableSet$.intersection=function($133,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.intersection($133,{Other$intersection:$$$mptypes.Other$intersection});
            };
            unmodifiableSet$.intersection.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'i',l:['Element$UnmodifiableSet','Other$intersection']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$intersection'}}}],$cont:UnmodifiableSet,tp:{Other$intersection:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','intersection']};};
            unmodifiableSet$.union=function($134,$$$mptypes){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.union($134,{Other$union:$$$mptypes.Other$union});
            };
            unmodifiableSet$.union.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:{t:'u',l:['Element$UnmodifiableSet','Other$union']}}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Other$union'}}}],$cont:UnmodifiableSet,tp:{Other$union:{sts:[{t:m$1.$_Object}]}},pa:3,d:['ceylon.collection','UnmodifiableSet','$m','union']};};
            unmodifiableSet$.superset=function($135){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.superset($135);
            };unmodifiableSet$.subset=function($136){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.subset($136);
            };unmodifiableSet$.equals=function($137){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.equals($137);
            };m$1.atr$(unmodifiableSet$,'hash',function(){
                var unmodifiableSet$=this;
                return unmodifiableSet$.$12z.hash;
            },undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Integer},$cont:UnmodifiableSet,pa:3,d:['ceylon.collection','UnmodifiableSet','$at','hash']};});
            unmodifiableSet$.clone=function(){
                var unmodifiableSet$=this;
                return UnmodifiableSet(unmodifiableSet$.$12z.clone(),{Element$UnmodifiableSet:unmodifiableSet$.$$targs$$.Element$UnmodifiableSet});
            };m$1.atr$(unmodifiableSet$,'$12z',function(){return this.$12z_;},undefined,function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$UnmodifiableSet'}},$cont:UnmodifiableSet,d:['ceylon.collection','UnmodifiableSet','$at','set$4htprx']};});
        })(UnmodifiableSet.$$.prototype);
    }
    return UnmodifiableSet;
}
ex$.$init$UnmodifiableSet=$init$UnmodifiableSet;
$init$UnmodifiableSet();
var unmodifiableSet=function($138,$$$mptypes){
    return UnmodifiableSet($138,{Element$UnmodifiableSet:$$$mptypes.Element$unmodifiableSet});
};
unmodifiableSet.$crtmm$=function(){return{mod:$CCMM$,$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}},ps:[{nm:'set',mt:'prm',$t:{t:m$1.Set,a:{Element$Set:'Element$unmodifiableSet'}}}],tp:{Element$unmodifiableSet:{sts:[{t:m$1.$_Object}]}},pa:1,an:function(){return[m$1.doc$($CCMM$,'ceylon.collection:unmodifiableSet')];},d:['ceylon.collection','unmodifiableSet']};};
ex$.unmodifiableSet=unmodifiableSet;
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
