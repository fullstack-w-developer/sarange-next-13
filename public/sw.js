if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const r=e=>c(e,i),u={module:{uri:i},exports:n,require:r};s[i]=Promise.all(a.map((e=>u[e]||r(e)))).then((e=>(t(...e),n)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"274c68c204caf85a74a9bc120ea54f32"},{url:"/_next/static/1ZYCcwWUTWz9_X9lPJNN6/_buildManifest.js",revision:"f73e8c19daa8474d229371b8da40f744"},{url:"/_next/static/1ZYCcwWUTWz9_X9lPJNN6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-29d417d2662e1cac.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/07115393-e095433afd8ef75a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/1048-aa6c668ba733d45e.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/119-d4af027093cc5e27.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/12038df7-3aba2a5975c7e5cd.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/1427-9659f7517872d210.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/149-4f79a0fa9e6fa962.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/1831-1ba2b5cf2e032a1c.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/2139-69b2b2c225426e4a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/2190-7e84dd3003d66a19.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/2430-da8ef1a07edcc090.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3027-becb791e1a31a6e8.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3135-5ab761cc1ea28b51.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3148-39cbaeb136f7a4e5.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3224-1e5b5744ffca8265.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/335-696c829907d38a8a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3520-2defcd442f96c28f.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3563-811c9f7a6ba0f05b.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3601-3fa6be86ac77098a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3627521c-d84a8ea89e0721c8.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/381-cb61cb6d086e0099.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3834-6a1f6f0aa2327a16.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3835-8f7232d46aa52c50.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/3897-055f1822bff41e15.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/4027-75103dfdfacb649a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/4315-8ee2c15f36eb802b.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/4680-4dc35cdfb419c9dc.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/4741-553f2ae106efcaee.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/4cb6dfa8-8be1877d37c62e70.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/5175-ac26d734283d906a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/5295-6dc881d40f7510ec.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/5404-ba5aaae7ac3b43eb.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/5691-3f9524639c5337d6.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/602-84d18e1182a58da1.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/6277-4eb4d579735fac2d.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/6557-18c5932b864637c7.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/6582-77d1b74ea48b34b3.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/6685-81ce79546cb0722a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/6691-60b5f52713f71d95.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/6788-bbe5b3d8d021d24e.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/7043-1882677cd4aef735.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/7085-a00cfa0376d3e762.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/7196-4afd02d67a3096c6.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/7335-47efff9528e23cc4.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/7cb1fa1f-8c1c95df30c71407.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/8114-de9c68d42f6143b5.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/816-45bc053366259c6e.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/8826-54bf01435ae54817.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/8dc5345f-f0c6af852a5c45a7.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/9077-8d1eca80347885e4.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/9081a741-75b8a3f08057a1a1.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/9111-e3d50b2b5d048229.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/9170-6ded9da4c117bdf5.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/93854f56-f24d7f654b10caf6.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/9552-b628fd1f2a292703.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/9661-c7f76c1376c4885c.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/9765-fd2624f6b42ea21d.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/aboutus/page-a486e17e3711b422.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/card/page-ef3dbcf76fa9e165.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/counter/page-80a6d0dacf4f2381.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/driver/page-d12a6fbc82172f1c.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/layout-c084d792483e18e5.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/permission/page-33cc3105812c29ed.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/resources/%5Bid%5D/page-ca02fa3240e4c6a4.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/resources/page-af110e96ee116469.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/role/page-4a94adb9d643cfd1.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/route/page-2abde62e52ee24ae.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/transaction/page-bc56a7ec94c5680d.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/trip/page-8ed7565ee799a566.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/user/page-d21ae9dce26fa2b9.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/admin/withdraw/page-18ac6a95b02666c6.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/auth/forget/page-66295e56de6c68e4.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/auth/signin/page-f06377c44e7a9a89.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/auth/signup/information/page-0c9b3af61c7242cd.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/auth/signup/page-4bdbd128ee9f6159.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/auth/verify/page-d1bd861ba3821f23.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/callus/page-12afaa2c96fb6b88.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/cardblocking/page-478f089fbeb817ae.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/cardblocking/result/page-6e4612509687e12f.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/cardissuance/page-64bceeef93dbcbb5.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/cardissuance/result/page-74fbf23aec1542e8.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/inquiry/not-found-0698334fde4cb20c.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/inquiry/page-1e4e4f7d6d8d6069.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/inquiry/result/page-adaa28d5c99e6b1f.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/inventory/page-161f3d27ef7d36e3.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/inventory/result/page-93f83d342beb5348.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/layout-b54c468c9f007fdc.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/page-9a871740f629c65d.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/scan/page-baf0a544991433f0.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/serial/information/page-fdcf89ca5ebbdc13.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/serial/page-e0a499bf995129ea.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/transactions/layout-8db9c3a3a1865070.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/counter/transactions/page-cbff8b69d16a1fdb.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/checkout/page-61e784e941d2b7ec.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/checkout/recently/page-f097954c93a24674.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/checkout/result/page-d9d0c3a2f9756950.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/inquiry/not-found-9692ae0c45efa347.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/inquiry/page-266d2e9932abd805.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/layout-e5746686b80e4a64.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/page-dd65ca2ff09fba8d.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/profile/page-190cfc286af45e80.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/result/page-339b681e49c2266d.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/scan/page-b9fc836a12892d89.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/transactions/page-8c4c8d950b4ff515.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/trip/page-d77cfb85be5073dd.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/driver/username/page-52c8a49c4d29a6c3.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/error-f88d7bf26f3fb5d2.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/layout-c3ba1318d4209023.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/loading-3aa56adb116fe9c6.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/notifications/page-3435fac0f970325a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/page-0375b78c7099beed.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/rules/page-e1def78a78d07c17.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/servic/page-9b369aaf774a509e.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/cards/page-f860cd3b46fac19c.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/citynumber/page-f7412f4a580d4e10.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/inquiry/not-found-ab4fc5a7528a46f3.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/inquiry/page-929cbec7415efcf9.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/layout-683eed0e39f04afd.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/moneytransfer/1/page-4c3c6e1a099b83d2.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/moneytransfer/2/page-bfcfd0c634fd761e.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/moneytransfer/result/page-80421cf5726e0b53.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/not-found-da2167d872047ed7.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/page-f32ec318d61c795a.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/profile/edit/page-5379ad0fa3adb7c8.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/profile/page-e5bcc2059ab9397e.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/result/page-ed58ede898f1174f.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/scan/page-e70186b329e85e40.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/transactions/layout-5cd2faca8e30563c.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/transactions/page-2d072f99ff4556e3.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/app/user/trip/page-8b9195653886caf3.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/b5c10047-edba44aed8886de5.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/bc9c3264-bdc68840f2b493b8.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/bf6a786c-7d0c28d19a788fe4.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/d622d42c-bd2f19f1bd4e9b55.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/dc112a36-a26ec11f6dfc39b0.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/framework-4498e84bb0ba1830.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/main-7776c6bdb0dd7e92.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/main-app-8a1e0735dca6e044.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/pages/_app-8af45f6c5c3cbc8e.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/pages/_error-6aec2ce618e2a362.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-74233acf77b0b951.js",revision:"1ZYCcwWUTWz9_X9lPJNN6"},{url:"/_next/static/css/528c59c64b86df01.css",revision:"528c59c64b86df01"},{url:"/_next/static/media/81.eb6d4465.png",revision:"189d2f06a12a1da5dd2c3712fea981ea"},{url:"/_next/static/media/ArtinSharpFN Black.c3d8259b.ttf",revision:"c3d8259b"},{url:"/_next/static/media/ArtinSharpFN Bold.cf2dcf97.ttf",revision:"cf2dcf97"},{url:"/_next/static/media/ArtinSharpFN Light.054da398.ttf",revision:"054da398"},{url:"/_next/static/media/ArtinSharpFN Regular.c263d3e0.ttf",revision:"c263d3e0"},{url:"/_next/static/media/ArtinSharpFN Thin.9d264b5c.ttf",revision:"9d264b5c"},{url:"/_next/static/media/Estedad-Bold.70557754.ttf",revision:"70557754"},{url:"/_next/static/media/Estedad-ExtraBold.f9685d63.ttf",revision:"f9685d63"},{url:"/_next/static/media/Estedad-Medium.1c8fdfab.ttf",revision:"1c8fdfab"},{url:"/_next/static/media/Estedad-Regular.79810656.ttf",revision:"79810656"},{url:"/_next/static/media/NastaliqOnline.cf074167.png",revision:"db7ef2da6af26d32cd1cf1b4d8b58fe1"},{url:"/_next/static/media/Rectangle.52bf0be9.png",revision:"6f2a1ed52e1842dc147ce1e446927284"},{url:"/_next/static/media/Vector.63d9c4b3.svg",revision:"49f1526ca3f8732bb036f63720426ae2"},{url:"/_next/static/media/bg_header.3ae0a7ec.png",revision:"3560e645b4e70cdb59696fe18f7435a7"},{url:"/_next/static/media/bg_line_bottom.22ab6e23.svg",revision:"22ab6e23"},{url:"/_next/static/media/flag_iran.faacd6e5.png",revision:"e5023d9bda76471fb0ca2bbbb182cd2d"},{url:"/_next/static/media/logo_white.af245689.svg",revision:"2b0a5e9b19be4f4e63573905cb53f10b"},{url:"/_next/static/media/logout.010e23b5.svg",revision:"c1f42dde7d1734a668e47f28c928ea86"},{url:"/_next/static/media/paymeny_card.1eb6e7f9.jpg",revision:"27a848cdef182b9c816e36529f3ec147"},{url:"/_next/static/media/repier.921459bc.png",revision:"89b74278d22af900a8a65753da478f17"},{url:"/_next/static/media/result.f8ff1c03.svg",revision:"5e36c9f4a05f337210744b9ced1fdd72"},{url:"/_next/static/media/sms.75d5f136.svg",revision:"cd5cacd9c44c79a89ab2f535ff35da78"},{url:"/_next/static/media/static__img__mobile-slider__4.light.e10c2106.jpg",revision:"50ed3d9e7bab51893bc08443bd101a2e"},{url:"/_next/static/media/static__svg__Skeleton.light.7ee6a6c6.svg",revision:"775d78bd787f3d34763417fdd2ccc3c0"},{url:"/_next/static/media/static__svg__logo.a502f174.svg",revision:"a14ce31943e5f141c65514ca3b3c0c95"},{url:"/_next/static/media/transform.8e444d47.jpeg",revision:"c2fce31d9a0e27ab92e72c1ecb7197f9"},{url:"/_next/static/media/user.3b37565d.png",revision:"93e883ffba9fda5802fad5266da44407"},{url:"/_next/static/media/ایتا.03268f68.png",revision:"104ebb82a55022e712a39b486874145b"},{url:"/_next/static/media/بله.335812c2.png",revision:"ec28199593280208be34037033de7ec8"},{url:"/_next/static/media/روبیکا.e0ad04eb.png",revision:"d2da42f61f6ede8dc1b5eb1785a9d74d"},{url:"/firebase-messaging-sw.js",revision:"56c1182914bf8f417cad91a47f84a1e2"},{url:"/manifest.json",revision:"1b90bcef5c628406bc740917b23cec54"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
