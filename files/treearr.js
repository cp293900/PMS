var TITEMS = [ 
 ["PMS請採購管理系統說明文件", "source/pms.htm", "2",
  ["00.基本介紹", "source/00.introduction.htm", "1",
   ["00-01.工作流程說明", "source/00-01.workflow.htm", "11"],
   ["00-02.登入畫面與基本操作", "source/00-02.install.htm", "11"]
  ],
  ["01.基本資料作業", "source/01.base.htm", "1",
   ["01-01.基本資料維護", "source/01-01.cpmsbase.htm", "11"],
   ["01-02.分店資料瀏覽", "source/01-02.pos104.htm", "11"],
   ["01-03.廠商資料瀏覽", "source/01-03.pos112.htm", "11"],
   ["01-04.品項主檔維護", "source/01-04.cpmsb10.htm", "11"],
   ["01-05.專案資料維護", "source/01-05.cpmsb07.htm", "11"],
   ["01-06.表單資料維護", "source/01-06.cpmsb08.htm", "11"],
   ["01-07.扣捕項目維護", "source/01-07.cpmsb06.htm", "11"]
  ],
  ["02.庫別庫存作業", "source/02.stock.htm", "1",
   ["02-01.庫存既保固查詢", "source/02-01.cpmsc01.htm", "11"],
   ["02-02.庫存調整作業", "source/02-02.cpmsd01.htm", "11"],
   ["02-03.庫存盤點作業", "source/02-03.cpmsd02.htm", "11"],
   ["02-04.庫存調撥作業", "source/02-04.cpmsd03.htm", "11"]
  ],
  ["03.保固維護作業", "source/03.warranty.htm", "1",
   ["03-01.品項保固調整作業", "source/03-01.cpmsd041.htm", "11"],
   ["03-02.整體保固調整作業", "source/03-02.cpmsd042.htm", "11"]
  ],
  ["04.請購採購作業", "source/04.purchase.htm", "1",
   ["04-01請購作業流程", "source/04-01.cpmsf01.htm", "11"],
   ["04-02詢價作業流程", "source/04-02.cpmsf02.htm", "11"],
   ["04-03採購作業流程", "source/04-03.cpmsf03.htm", "11"],
   ["04-04底稿作業流程", "source/04-04.cpmsf04.htm", "11"]
  ],
  ["05.驗收退貨作業", "source/05.acceptance.htm", "1",
   ["05-01採購驗收作業流程", "source/05-01.cpmsf03in.htm", "11"],
   ["05-02調撥驗收作業流程", "source/05-02.cpmsd03in.htm", "11"]
  ],
  ["06.結帳請款作業", "source/06.pay.htm", "1",
   ["06-01請款作業流程", "source/06-01.cpmsp01.htm", "11"]
  ],
  ["07.權限設定作業", "source/07.authority.htm", "1",
   ["07-01主管權限設定", "source/07-01.manager.htm", "11"],
   ["07-02成員權限設定", "source/07-02.member.htm", "11"]
  ]
 ]
];


var FITEMS = arr_flatten(TITEMS);

function arr_flatten (x) {
   var y = []; if (x == null) return y;
   for (var i=0; i<x.length; i++) {
      if (typeof(x[i]) == "object") {
         var flat = arr_flatten(x[i]);
         for (var j=0; j<flat.length; j++)
             y[y.length]=flat[j];
      } else {
         if ((i%3==0))
          y[y.length]=x[i+1];
      }
   }
   return y;
}

