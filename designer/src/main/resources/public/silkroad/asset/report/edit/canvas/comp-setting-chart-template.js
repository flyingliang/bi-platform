define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.compId,f=b.compType,g=c.$each,h=b.xAxis,i=(b.item,b.$index,b.yAxis),j=b.sAxis,k=b.candInds,l=b.candDims,m="";return m+='<div class="con-comp-setting-type1 j-comp-setting" data-comp-id="',m+=d(e),m+='" data-comp-type="',m+=d(f),m+='">\r\n    <div>\r\n        <div class="norm-empty-prompt">纵轴指标信息不能为空</div>\r\n    </div>\r\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-x" data-axis-type="x">\r\n        <span class="letter">横轴:</span>\r\n        ',g(h,function(a){m+='\r\n        <div class="item hover-bg j-root-line c-m" data-id="',m+=d(a.id),m+='">\r\n            <span class="item-text j-item-text icon-font" title="',m+=d(a.caption),m+="（",m+=d(a.name),m+='）">\r\n            ',m+=d(a.caption),a.name&&(m+="（",m+=d(a.name),m+="）"),m+='\r\n            </span>\r\n            <span class="icon hide j-delete" title="删除">×</span>\r\n        </div>\r\n        '}),m+='\r\n    </div>\r\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-y" data-axis-type="y">\r\n        <span class="letter">纵轴:</span>\r\n        ',g(i,function(a){m+='\r\n        <div class="item hover-bg j-root-line c-m" data-id="',m+=d(a.id),m+='">\r\n            ',null===a.chartType?m+='\r\n                <span class="icon-chart column j-icon-chart" chart-type="column" ></span>\r\n            ':(m+='\r\n                <span class="icon-chart ',m+=d(a.chartType),m+=' j-icon-chart" chart-type="',m+=d(a.chartType),m+='" ></span>\r\n            '),m+='\r\n            <span class="item-text j-item-text icon-font" title="',m+=d(a.caption),m+="（",m+=d(a.name),m+='）">\r\n            ',m+=d(a.caption),a.name&&(m+="（",m+=d(a.name),m+="）"),m+='\r\n            </span>\r\n            <span class="icon hide j-delete" title="删除">×</span>\r\n        </div>\r\n        '}),m+='\r\n    </div>\r\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-s" data-axis-type="s">\r\n        <span class="letter">过滤轴:</span>\r\n        ',g(j,function(a){m+='\r\n        <div class="item hover-bg j-root-line" data-id="',m+=d(a.id),m+='">\r\n            <span class="item-text j-item-text" title="',m+=d(a.caption),m+="（",m+=d(a.name),m+='）">\r\n            ',m+=d(a.caption),a.name&&(m+="（",m+=d(a.name),m+="）"),m+='\r\n            </span>\r\n            <span class="icon-letter j-delete" title="删除">×</span>\r\n        </div>\r\n        '}),m+='\r\n    </div>\r\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-cand-ind" data-axis-type="CAND_IND">\r\n        <span class="letter">候选指标:</span>\r\n        ',g(k,function(a){m+='\r\n        <div class="item hover-bg j-root-line" data-id="',m+=d(a.id),m+='">\r\n            ',null===a.chartType?m+='\r\n            <span class="icon-chart column j-icon-chart" chart-type="column" ></span>\r\n            ':(m+='\r\n            <span class="icon-chart ',m+=d(a.chartType),m+=' j-icon-chart" chart-type="',m+=d(a.chartType),m+='" ></span>\r\n            '),m+='\r\n            <span class="item-text j-item-text icon-font" title="',m+=d(a.caption),m+="（",m+=d(a.name),m+='）">\r\n            ',m+=d(a.caption),a.name&&(m+="（",m+=d(a.name),m+="）"),m+="\r\n            </span>\r\n            ",a.used||(m+='\r\n            <span class="icon hide j-delete" title="删除">×</span>\r\n            '),m+="\r\n        </div>\r\n        "}),m+='\r\n    </div>\r\n    <!--<div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-cand-dim" data-axis-type="CAND_DIM">-->\r\n        <!--<span class="letter">候选维度:</span>-->\r\n        <!--',g(l,function(a){m+='-->\r\n        <!--<div class="item hover-bg j-root-line" data-id="',m+=d(a.id),m+='">-->\r\n            <!--<span class="item-text j-item-text" title="',m+=d(a.caption),m+="（",m+=d(a.name),m+='）">-->\r\n            <!--',m+=d(a.caption),a.name&&(m+="（",m+=d(a.name),m+="）"),m+="-->\r\n            <!--</span>-->\r\n            <!--",a.used||(m+='-->\r\n            <!--<span class="icon-letter j-delete" title="删除">×</span>-->\r\n            <!--'),m+="-->\r\n        <!--</div>-->\r\n        <!--"}),m+='-->\r\n    <!--</div>-->\r\n    <div class="data-axis-line data-axis-line-48 data-btn-line">\r\n        <span class="letter">设置:</span>\r\n        <span class="icon-letter icon-letter-btn j-set-data-format">数据格式</span>\r\n        <span class="icon-letter icon-letter-btn j-set-topn">TOPN</span>\r\n    </div>\r\n</div>'}return{render:b}});