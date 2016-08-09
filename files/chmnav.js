/*************************************************************************
 chm2web Navigation Script 1.0 
 Copyright (c) 2002-2007 A!K Research Labs (http://www.aklabs.com)
 http://chm2web.aklabs.com - HTML Help Conversion Utility
**************************************************************************/

var NV = ["pms.htm","00.introduction.htm","00-01.workflow.htm","00-02.install.htm","01.base.htm","01-01.cpmsbase.htm","01-02.pos104.htm","01-03.pos112.htm","01-04.cpmsb10.htm","01-05.cpmsb07.htm","01-06.cpmsb08.htm","01-07.cpmsb06.htm","02.stock.htm","02-01.cpmsc01.htm","02-02.cpmsd01.htm","02-03.cpmsd02.htm","02-04.cpmsd03.htm","03.warranty.htm","03-01.cpmsd041.htm","03-02.cpmsd042.htm","04.purchase.htm","04-01.cpmsf01.htm","04-02.cpmsf02.htm","04-03.cpmsf03.htm","04-04.cpmsf04.htm","05.acceptance.htm","05-01.cpmsf03in.htm","05-02.cpmsd03in.htm","06.pay.htm","06-01.cpmsp01.htm","07.authority.htm","07-01.manager.htm","07-02.member.htm"];
var s = "source/";
function getNav(op) { var p=chmtop.c2wtopf.pageid;var n=s+p; var m=NV.length-1;for(i=0;i<=m;i++){if(NV[i]==p){if(op=="next"){if (i<m) {curpage=i+1;return s+NV[i+1];} else return n;}else{if(i>0) {curpage=i-1;return s+NV[i-1];} else return n;}}} return n;}
function syncTopic(){open('helpheaderc.html', 'header');open('helpcontents.html','toc');}
