/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Blog/public/404.html","0b61fdeadae9264ba8614cd987c3b0ec"],["D:/Blog/public/7-sorting-algorithms/index.html","18eff6d2323fc7c57cf7cbdd8cb984fb"],["D:/Blog/public/AIO-blocking-model/index.html","9dcb1d3dcf36501ea53db4f0203a196b"],["D:/Blog/public/BIO-blocking-model/index.html","98a826ee4ffa2c6d2ce44e0c0c90d8bc"],["D:/Blog/public/C-algorithm/index.html","1000f0ec3a833da0e8ba98ca43ac2739"],["D:/Blog/public/C-programming/index.html","0a00c16ab20a0bceaa152a6708e0f3a1"],["D:/Blog/public/Good-use-of-pointers/index.html","1742ce36985e04da978c71ea237ecc9e"],["D:/Blog/public/IO-model/index.html","bbc71a797e7d5c99f17d1f59f219b878"],["D:/Blog/public/IO/index.html","4fd5e1fa596314185d1c882a6e93416d"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","f25ad001cfc1f8dc12377df1765d42b8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","749dd988b8b1b7acf30bc5e1167f2d2b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","c1dad8c2220f26acfe8c08bdac847f97"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","e26e0d4b6d37437333c3f11d4a1c0b08"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","2e9340d4a9cc92a255127a32cfe06880"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","8ef3045f0985eb48e2d0f122d5633aa8"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","ab7ff469251cd6349a23d8290882b644"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","70da23c384519a71e48d71442b5be7df"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","ecd01b613c41e1c2aa274fc3bdfc389a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","eb83d1a92a80c218cfaa53782ec2c118"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","cc203c33f43e7f298242155fdac7b349"],["D:/Blog/public/Java-network-programming/index.html","f0b08db1ed9abbb98f1e200dc21b982f"],["D:/Blog/public/NIO-blocking-model/index.html","62e2e32238a4dbe3eb499547adcfaa5a"],["D:/Blog/public/Native-method/index.html","b82b0c59553ecce659417c2ad75c90d8"],["D:/Blog/public/Sandbox-security-mechanism/index.html","1b3759a81a2b1774e0b9a00d6c84faef"],["D:/Blog/public/about/index.html","ed478d9ed103a2f496ce98fb386ed38c"],["D:/Blog/public/adapter-mode/index.html","9840123c2ed31e8a5fb30bf8d5605fca"],["D:/Blog/public/agency-model/index.html","75fb13ecdd592204060bf7e644dd15c5"],["D:/Blog/public/appearance-mode/index.html","d2d3b0a9c006004f69aa6f48fb04784f"],["D:/Blog/public/archives/2019/01/index.html","dc07b7dd1792b0855f63730ce591e1d9"],["D:/Blog/public/archives/2019/07/index.html","c462b25728703046fc5398aad7e778e1"],["D:/Blog/public/archives/2019/12/index.html","8204a21109152eb543aa8262f7149b74"],["D:/Blog/public/archives/2019/index.html","b12bf06a842df31119ebe9171e716fb0"],["D:/Blog/public/archives/2020/04/index.html","9913a226443aaae33220b835b6a11874"],["D:/Blog/public/archives/2020/05/index.html","4a4ff3a950535be7377983ed2ba9acee"],["D:/Blog/public/archives/2020/05/page/2/index.html","81be28057cd14248873017ab39e67362"],["D:/Blog/public/archives/2020/06/index.html","4816ab61ae46fe0e868744108df27788"],["D:/Blog/public/archives/2020/06/page/2/index.html","4e3348a240889c3aea78b7d3f560c789"],["D:/Blog/public/archives/2020/06/page/3/index.html","325cf586959c5f5d671d0563161e7b40"],["D:/Blog/public/archives/2020/06/page/4/index.html","ea0d3e3eb5f99f0fd6208270724abbda"],["D:/Blog/public/archives/2020/07/index.html","92ca856107c2fe49a03b59f7d2391a28"],["D:/Blog/public/archives/2020/07/page/2/index.html","a7e4c489733431385bad480eb8d73be4"],["D:/Blog/public/archives/2020/07/page/3/index.html","6ce93a2fd2cbc89ef8021858dd77ff1a"],["D:/Blog/public/archives/2020/08/index.html","1cb723c2eab131e4f9eb39bca7cf38bf"],["D:/Blog/public/archives/2020/08/page/2/index.html","2cd91c8d7f4518f04e3da3c540f78cbe"],["D:/Blog/public/archives/2020/08/page/3/index.html","c87ffa69ff063dee43281fb4f32f2eca"],["D:/Blog/public/archives/2020/09/index.html","b7160996b14e0b934547296396ea4199"],["D:/Blog/public/archives/2020/09/page/2/index.html","09d6fc3838e9a173f3305ee47a1c3cc0"],["D:/Blog/public/archives/2020/10/index.html","1c8cb287b9f2f6823b3cfb29f030df1e"],["D:/Blog/public/archives/2020/10/page/2/index.html","04e5029ef5b8280249a7a9c76c314361"],["D:/Blog/public/archives/2020/11/index.html","2242dcac700d5a391bf3376d707eeea1"],["D:/Blog/public/archives/2020/12/index.html","1a272e48c86918ed0c527f94e64a1af0"],["D:/Blog/public/archives/2020/12/page/2/index.html","b95b60f8555f1cd9f239dd8a05cd8735"],["D:/Blog/public/archives/2020/12/page/3/index.html","8c9d66eaa69432c55caeb983d316a461"],["D:/Blog/public/archives/2020/index.html","c605a495c894c04b6966ef676cf3ed5b"],["D:/Blog/public/archives/2020/page/10/index.html","501a1bd81365550e010b4872f8ee3e4f"],["D:/Blog/public/archives/2020/page/11/index.html","f309e7dbb43e635416ddca25f533a1fc"],["D:/Blog/public/archives/2020/page/12/index.html","df9c01ee3856679d84384bd76ab88f12"],["D:/Blog/public/archives/2020/page/13/index.html","4b5239a19e50731254686bd6b150be73"],["D:/Blog/public/archives/2020/page/14/index.html","47ef3060163addeec446837c692a176d"],["D:/Blog/public/archives/2020/page/15/index.html","5a1c14c1b48e675a6197b4b0572bb9d2"],["D:/Blog/public/archives/2020/page/16/index.html","3b0a5c29a1dbf0554ac218af55c5aa7d"],["D:/Blog/public/archives/2020/page/17/index.html","59a2f4b19a4df58202b7fbb0368cedd6"],["D:/Blog/public/archives/2020/page/2/index.html","04ef5a066a2c001e78b9ab2b8287d338"],["D:/Blog/public/archives/2020/page/3/index.html","514a4f39fb9ad486f96ed876161c4f2d"],["D:/Blog/public/archives/2020/page/4/index.html","3b7f6784e5d133945f89d3a22d1d23df"],["D:/Blog/public/archives/2020/page/5/index.html","f493d6215cf4cb3c207210d5b722cd66"],["D:/Blog/public/archives/2020/page/6/index.html","94112e4d1da8e58cf3156da68bdbaaa5"],["D:/Blog/public/archives/2020/page/7/index.html","c03c600ae952eee44598dac9fa0ba64e"],["D:/Blog/public/archives/2020/page/8/index.html","48161a3634e8a79627ab147a13f53618"],["D:/Blog/public/archives/2020/page/9/index.html","952de5821d7e43d0bfbb61681394df43"],["D:/Blog/public/archives/index.html","3054408dcb3c3987e562ac03d5358533"],["D:/Blog/public/archives/page/10/index.html","54881699f63498f0684b144ef28565cd"],["D:/Blog/public/archives/page/11/index.html","7475bda75c6c3a9c39dabe8efd40d050"],["D:/Blog/public/archives/page/12/index.html","7475bda75c6c3a9c39dabe8efd40d050"],["D:/Blog/public/archives/page/13/index.html","7475bda75c6c3a9c39dabe8efd40d050"],["D:/Blog/public/archives/page/14/index.html","91d566e7fc3c33422dca09c16c4260df"],["D:/Blog/public/archives/page/15/index.html","91d566e7fc3c33422dca09c16c4260df"],["D:/Blog/public/archives/page/16/index.html","fcf427473cba8217ff226d788154a943"],["D:/Blog/public/archives/page/17/index.html","fcf427473cba8217ff226d788154a943"],["D:/Blog/public/archives/page/2/index.html","3054408dcb3c3987e562ac03d5358533"],["D:/Blog/public/archives/page/3/index.html","3054408dcb3c3987e562ac03d5358533"],["D:/Blog/public/archives/page/4/index.html","3acc063a043fcfe7e4c2dbf159769951"],["D:/Blog/public/archives/page/5/index.html","3acc063a043fcfe7e4c2dbf159769951"],["D:/Blog/public/archives/page/6/index.html","3acc063a043fcfe7e4c2dbf159769951"],["D:/Blog/public/archives/page/7/index.html","3a1f3016ea51e05bc09c6c1c72c0ee69"],["D:/Blog/public/archives/page/8/index.html","3a1f3016ea51e05bc09c6c1c72c0ee69"],["D:/Blog/public/archives/page/9/index.html","54881699f63498f0684b144ef28565cd"],["D:/Blog/public/array/index.html","0305d5f7719fbc34714dfc80030fd6be"],["D:/Blog/public/binary-search-algorithm/index.html","804e3597d9dff9b9803639da664a250b"],["D:/Blog/public/binary-sort-tree/index.html","a8fb53967f765310c03ffe2fa855c15b"],["D:/Blog/public/bionioaio/37237-20151222220329015-207666376.png","3f26be583240201c9e02e86490b8e1bf"],["D:/Blog/public/bionioaio/index.html","3a3532b8a08b0080a0d88a94ad589ef2"],["D:/Blog/public/bridge-mode/index.html","7ede7702eb8bd175cc5910385605eb65"],["D:/Blog/public/builder/index.html","e9830988aabfd54639b10a33e32400d8"],["D:/Blog/public/c-pointer/index.html","003d7933de1e701adb4241e4d581b778"],["D:/Blog/public/categories/C/index.html","8d08514f66987d6e367baea2813c2dcc"],["D:/Blog/public/categories/SpringMVC/index.html","1af0703e8f03789733787795a57c157f"],["D:/Blog/public/categories/index.html","4a88690a79309f47599845229b8832b9"],["D:/Blog/public/categories/linux/index.html","a740a49d3e673ab367cb9905cac3e9b9"],["D:/Blog/public/categories/分布式/index.html","e7ad14d0bcaed17aac4fc78c9bc66cd0"],["D:/Blog/public/categories/分布式/page/2/index.html","b84966c90eee489531754e51bdfd1654"],["D:/Blog/public/categories/前端/index.html","3f6f290aeb93f03351ad19888e6fe81b"],["D:/Blog/public/categories/设计模式/index.html","2c94fc262abc60f1f86d77d906a03922"],["D:/Blog/public/categories/设计模式/page/2/index.html","859044bcd281614da7c2b507bbf837dc"],["D:/Blog/public/categories/高数/index.html","651e8cb8a3008a58a006eab8f3ed9fc6"],["D:/Blog/public/chain-of-responsibility-model/index.html","9604e01397da29caeb65d5ebd2ec20d6"],["D:/Blog/public/chinese-and-english-switching/index.html","212f5624879ad7fad33e219fb3e5184e"],["D:/Blog/public/combination-mode/index.html","1f03a87035e4a4442a11f8d6d74e29ef"],["D:/Blog/public/command-mode/index.html","784a65af9e389541124d65b33e8fcd1a"],["D:/Blog/public/common-commands-of-unix/index.html","098f7241492926599c5c50b24911a1c6"],["D:/Blog/public/computer-network/index.html","12fa52a687d64e5706d917574aff6e99"],["D:/Blog/public/concurrency-principle/index.html","b35622c0026caad78cde24ceb9930152"],["D:/Blog/public/continuous/index.html","1872ab3b9b72d1e07c8b935f2641a2fd"],["D:/Blog/public/contract/index.html","9455ba0cb84dfdb3badab1ef34b41b63"],["D:/Blog/public/css/first.css","cb70f4b2ada7e5ac265b0566178aeb88"],["D:/Blog/public/css/style.css","d0bf86c2a91ecf3fcc0dc9f75bae4b30"],["D:/Blog/public/cycle-structure-programming/index.html","abc43002025dacf654b2823643da5455"],["D:/Blog/public/data-structures-and-algorithms/index.html","0066785c5b18dbd9bd42e87b589e9aaa"],["D:/Blog/public/deb/index.html","7163b8f40cf6ce613e3d995d9940728d"],["D:/Blog/public/decorator-mode/index.html","0f772486cc4687c2556eb235646593eb"],["D:/Blog/public/definite-integral/index.html","29e70efb1f97585bc344aba281f8c24a"],["D:/Blog/public/dependence-reversal-principle/index.html","caaec07ec8ecb4a43d27d9142fedb59d"],["D:/Blog/public/derivative/index.html","e19de628d7237b6b63477a3092cd6d72"],["D:/Blog/public/design-patterns/index.html","0ade0d68796ba9d1bc4a897915239f60"],["D:/Blog/public/differential-equation/index.html","714d336a80641394771ce84ea0ff8f2d"],["D:/Blog/public/differential/index.html","b753c9a2086708370e23e7c252167ce0"],["D:/Blog/public/dimits-law/index.html","b7794fd658628bad9c4e24434e02dbdf"],["D:/Blog/public/docker-virtualized-container/index.html","8c87ecded0ae5662d2312b7160fc2d4c"],["D:/Blog/public/double-integral/index.html","b0522f5c082a5ac47efdadd4048727db"],["D:/Blog/public/dynamic-array/index.html","162f12ec25ebb201f4408237eef229a8"],["D:/Blog/public/encoding-algorithm/index.html","68f6a25ebcb1aa2c7249e6b592e5be3b"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","5d25ed9008855ac86a45faa6befc68f8"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","943e9b9cdf40a3a00044b8e73a280802"],["D:/Blog/public/factory-design-pattern/index.html","bc5754ea071f13a65cdd3611ce5821b6"],["D:/Blog/public/file-input-and-output/index.html","2d2c9f2048b4ce523091008096ccf487"],["D:/Blog/public/flyweight-model/index.html","eb5fdb8db5ccd12e6562ca6892c9e75f"],["D:/Blog/public/friends/index.html","a91bcaaa12311f8928d31ca091b1bce3"],["D:/Blog/public/function-graphing/index.html","4506c6a4b38022765ad18142c50e9941"],["D:/Blog/public/gateway-service-current-limit/index.html","83df39c7e92d67a9e927da98eac33a95"],["D:/Blog/public/gc/index.html","7335d963b56c95cd426e5f34703d3beb"],["D:/Blog/public/generalized-integral/index.html","64e8d0ad272f14b07620ce4db256d15e"],["D:/Blog/public/google8102e2f35ce9e391.html","4b9043aa3e0bff527963f413f07afc48"],["D:/Blog/public/gulp-compresses-static-resources/index.html","ce20ba6f0fdb77fe184d9e6cb46a1df5"],["D:/Blog/public/hash-algorithm/index.html","ed7db66ad846c3e3e95fcf930fe8779b"],["D:/Blog/public/heap-sort/index.html","9cc91906f3ed274386fb920e764ff674"],["D:/Blog/public/hexo-next-add-tags-and-category-pages/index.html","899da555934e8d34219194f74aa2c285"],["D:/Blog/public/http/index.html","99b58d023bc35c3ea30a9c08569df773"],["D:/Blog/public/indefinite-integral/index.html","12d293f4033bbecadde4f2106be94e8b"],["D:/Blog/public/index.html","477ebaa9af8cd6e04dfbb6204a7bd1c8"],["D:/Blog/public/infinitesimal-and-infinite/index.html","e881cbf79ce54f45242491c4205f2578"],["D:/Blog/public/interface-isolation-principle/index.html","79891f61c72fed8f93deadfe3ac1fb64"],["D:/Blog/public/intermediary-model/index.html","4bcf862126352265477dff1545254383"],["D:/Blog/public/interpolation-search-algorithm/index.html","9073e22ccedc45e93618341b326ae22e"],["D:/Blog/public/interpreter-mode/index.html","e9e5a75b10ae81d7517024837fc2a23c"],["D:/Blog/public/introduction-to-computer-network/index.html","30ee31bfee85ca56d72c2d7b771eb340"],["D:/Blog/public/introduction-to-operating-system/index.html","5ad658a1e3b94f6e5b590f408e6cb256"],["D:/Blog/public/inversion-of-control/index.html","f5791175ebb16048c7642e3d8c7a658e"],["D:/Blog/public/io-Interview/index.html","fbaf336e7c18529eda6d55d010c4c322"],["D:/Blog/public/iterator-mode/index.html","00f271f6993b7aa865585d458fc47579"],["D:/Blog/public/j2ee/index.html","5ef6d96aca648230dad6d4a4e1a4b258"],["D:/Blog/public/j2se/index.html","af51701678e1ffed32f4125e16cce748"],["D:/Blog/public/jdbc/index.html","b9626b05d15e9a615c873944a5f9ed16"],["D:/Blog/public/jdk/index.html","53b38525fb71d80c8bb9e016b53a19a1"],["D:/Blog/public/jmm-memory-model/index.html","44e547be65ae2b10e749c430ee6afa13"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","02f3ba5b83f74ddc0d832efa860b217c"],["D:/Blog/public/jvm/index.html","75b28160b306fae0a0d60e9604a6af11"],["D:/Blog/public/law-of-robida/index.html","e3da69c91b799fe01ebc62eccada8acb"],["D:/Blog/public/limit/index.html","94d2469c0a38b41cb4c1b215ba04962d"],["D:/Blog/public/linear-search-algorithm/index.html","4efbf92ec4cf70764e6f9ebe7af33863"],["D:/Blog/public/link/index.html","9d24dd978fec5da0ce0abd08180a9d7b"],["D:/Blog/public/linked-list/index.html","ac1f2dba8f372f26d19f3a2140c88d8a"],["D:/Blog/public/linux/index.html","324873fceee24ef82af1b4ecda946ea4"],["D:/Blog/public/liskov-substitution-principle/index.html","30961ac61e519b506b22f9d9fb3646b6"],["D:/Blog/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/Blog/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/Blog/public/lock/index.html","008391f2ce7a4df106fb61230ced3a93"],["D:/Blog/public/maintenance-1/index.html","ae41e9329d4cf526f5e04e447f09949f"],["D:/Blog/public/maintenance-2/index.html","b2214b7289de8f6485be91ef561fb2b6"],["D:/Blog/public/maintenance-3/index.html","0eaede9721a2a9d2cdae5c4d45eb1a41"],["D:/Blog/public/memo-mode/index.html","cbeb862615eeef655a169a4953192ab5"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","c446bed21ede649f6e9496f9e122319d"],["D:/Blog/public/multi-function/index.html","38c9295bd609cb4f019789bf25b53860"],["D:/Blog/public/multithreading/index.html","d82f38ce7cfd04cc84e80880c9b71387"],["D:/Blog/public/mvc/index.html","97ce5b0b25268ae3fbf4ccb1ca4e5859"],["D:/Blog/public/mybatis/index.html","f253bad69d5f4422654b7808767a28a2"],["D:/Blog/public/mysql/index.html","fa824a92238c9948cd020f3f726be986"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","a5912372816b37f41c3de0740e33d5e8"],["D:/Blog/public/null/index.html","1a0478367d7f2fe3de951145ae95231a"],["D:/Blog/public/objectoriented/index.html","972cc2b01c5130d95396a921a28e20c6"],["D:/Blog/public/observer-mode/index.html","9e35673288417e103751671d33090ef3"],["D:/Blog/public/off-heap/index.html","1f3ad90d78d2c47ee65841a64665c286"],["D:/Blog/public/operating-system/index.html","dba6a516689438d98ee017ddfd2be757"],["D:/Blog/public/page/10/index.html","ac0fde0a540d38d9d13a3a9047c3c9ed"],["D:/Blog/public/page/11/index.html","a68b720610cd08601780d42fbc11bb1d"],["D:/Blog/public/page/12/index.html","bd7f0d39aa7aac3e41050637ce9c836e"],["D:/Blog/public/page/13/index.html","3c35908c725e302b5905c95f0f8d7f39"],["D:/Blog/public/page/14/index.html","ea3469511176d1bb795059d8746ee4d0"],["D:/Blog/public/page/15/index.html","88e3609e7a933560bacba5982c2ec02a"],["D:/Blog/public/page/16/index.html","a52b3209d8b387bc32f544f62923e965"],["D:/Blog/public/page/17/index.html","fa77b96e74fc92fccd77274dedf3c6bc"],["D:/Blog/public/page/2/index.html","42845c87c4eb23722fe71ddfbac3d7c7"],["D:/Blog/public/page/3/index.html","1dba0f4d9b02a0c259fe5969735e894f"],["D:/Blog/public/page/4/index.html","5cdde9014682dcda3827b9f2ee8c03cb"],["D:/Blog/public/page/5/index.html","fc9c209ff2c3e5275a2a5fd06fcd927d"],["D:/Blog/public/page/6/index.html","9cc1614a3ddf1e94111d9bb1c0196402"],["D:/Blog/public/page/7/index.html","9f3dc0c092649049f3b30c2172e434e6"],["D:/Blog/public/page/8/index.html","054e197f783ff9cb4cf3e0d24d797085"],["D:/Blog/public/page/9/index.html","9361c08fecb39c74eb81e37fb46019f7"],["D:/Blog/public/palindrome/index.html","d3ddfa64e874bc25d8b4febcf7334759"],["D:/Blog/public/partial-derivative/index.html","e4e2c22e98063d8273b0e247eecad121"],["D:/Blog/public/pass-by-value/index.html","0da9750d037fd033f0797d84c7ac36fd"],["D:/Blog/public/pictrue-bed/index.html","2d5425c36945d1ec5df4af7ef096008b"],["D:/Blog/public/principle-of-opening-and-closing/index.html","31163622a0c8b0738962b3f702cc76da"],["D:/Blog/public/principles-of-computer-organization/index.html","16ebc71d19c6fac38d5b11f43586b1ba"],["D:/Blog/public/prototype/index.html","4464c8e9a5a44828d068c1e152291eb8"],["D:/Blog/public/queue/index.html","8ff70fc57207de526a7a97a7effabd6e"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","f390bc7b5e6ee8299fea2774cb631c53"],["D:/Blog/public/redis/index.html","62698b0f9b0ecd16b152d3882943acbf"],["D:/Blog/public/reflection/index.html","8c8cc6d9bb86105442cbe4b01160a995"],["D:/Blog/public/resume/index.html","e4e2403f2bc8d241bffb45bc6bf0cec9"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","8fd4384ac479607af5dea9400ffc7618"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","c2105065db40c46f33cb9d466c0c4283"],["D:/Blog/public/select-structure-programming/index.html","293214059337550dc5566feaeef01f9d"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","6977efc867779b22ec2dd3330fa2cddb"],["D:/Blog/public/sequential-programming/index.html","8d0c6837e86f9ce5fda7ae3439c858d4"],["D:/Blog/public/series/index.html","eee3f188897627620ab6ed15ee87337e"],["D:/Blog/public/single-point-login/index.html","a24ce7edaaf51e369636f11ed0fc83d2"],["D:/Blog/public/single-responsibility-principle/index.html","f5949a97d40c0f5999f52846850aa7c3"],["D:/Blog/public/singleton-mode/index.html","31e97dc6022ea5b0b940210b79234a04"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","a5805f8961d9f508dcc67c90db7856c9"],["D:/Blog/public/sparsearray-sparse-array/index.html","798b6963a32606a5fd9e2d925172e556"],["D:/Blog/public/spring-architecture/index.html","7385fc58ec06930d337fe23f4f06332d"],["D:/Blog/public/spring-relate/index.html","7674982cce095fafb2b42985ddda0efa"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","29321ae9f469831880fbeb2014bb5c1e"],["D:/Blog/public/spring/index.html","33b7b1c72c14a86bbb442f32ee6829f9"],["D:/Blog/public/springcloud-alibaba/index.html","df2f807e340861176856f1b90e2c4d5d"],["D:/Blog/public/springcloud-bus-message/index.html","04e8230ed4b15d45d3ceff81b2a4fb8c"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","82e32f2c87fcff85c5120794959f2c5c"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","78179dbc8dc639ec34d620359ceaf736"],["D:/Blog/public/springcloud-stream-message-driver/index.html","4d5de27a9a194544820d0090bf3c4693"],["D:/Blog/public/springcloud/index.html","eb572403570ae3de30a4bdaa7674b58b"],["D:/Blog/public/springmvc-environment-construction/index.html","fc192211d692af2104880a4c26e2dceb"],["D:/Blog/public/springmvc-work-stream/index.html","df5c9b2df4dc5f00491917aa307febd3"],["D:/Blog/public/sql-injection-attacks/index.html","f99f031f7e6d085ef628114198957627"],["D:/Blog/public/stack/index.html","968f711b200d2791dd411b238eea26df"],["D:/Blog/public/state-mode/index.html","2c5cc770a59b80a3ba2af70644c2b1bf"],["D:/Blog/public/strategy-mode/index.html","1adf1bd1ae53889f81bd5d88495bfe65"],["D:/Blog/public/synthetic-reuse-principle/index.html","872d5c0a5bb63ddbd997a27f95cbb5ee"],["D:/Blog/public/tags/C/index.html","c275db643cff92c4ddbffe0c06734222"],["D:/Blog/public/tags/C/page/2/index.html","b37a708d295337eaec27519b12b8879b"],["D:/Blog/public/tags/Concurrency/index.html","641d148e6f3fd4e55e72a97dae8e74d2"],["D:/Blog/public/tags/DesignPatterns/index.html","3613508a383df2afb130b9434dd37774"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","fe9c2c7a3efc48cceec8417fa9c824df"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","f9cabb2a5b0cbeb1a7a0d4b986eaf5c1"],["D:/Blog/public/tags/DistributedMicroservices/index.html","4887b255bfb1441ec0f39e6ec48aeb8e"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","b550d3ce24ef6c51449af67a44f25f73"],["D:/Blog/public/tags/Interview/index.html","4a93a73f70855f7b16a80879a04f2895"],["D:/Blog/public/tags/Interview/page/2/index.html","1c408d6d3599c316eeb4cfc357a96edd"],["D:/Blog/public/tags/JVM/index.html","6f617eb06180805d69c17263d1cb5e0a"],["D:/Blog/public/tags/Operating-Systems/index.html","1d45f6eabbe6d103995965976f436928"],["D:/Blog/public/tags/about/index.html","d584f86d724ff93133c5f7262d7c1fdd"],["D:/Blog/public/tags/ad/index.html","ad1bae82f8db5c82e6e294d1a93e4399"],["D:/Blog/public/tags/dataAlgorithm/index.html","c7cf3e7ac98030deebe9ebcef4e83c5b"],["D:/Blog/public/tags/dataAlgorithm/page/2/index.html","4dfc70bd485e4353b3dc6ce55046cad9"],["D:/Blog/public/tags/docker/index.html","7b39b2c28a905aa00dbc134691c96c58"],["D:/Blog/public/tags/frame/index.html","22d3b37f60ad9e53a81870056a98be46"],["D:/Blog/public/tags/front/index.html","eb44b2861c2b4f69c619aa8e2224e98b"],["D:/Blog/public/tags/index.html","86f720fa718429f268b09c16a108f8e8"],["D:/Blog/public/tags/index2.html","eaa45ebbfcfad876bcc364f04b6f6b56"],["D:/Blog/public/tags/io/index.html","81478ced4c5286570ad83eda94440a09"],["D:/Blog/public/tags/linux/index.html","188563b7cc2d5db4f4ef5d5081684269"],["D:/Blog/public/tags/maintain/index.html","771956367688880026c302b359d6bb1a"],["D:/Blog/public/tags/math/index.html","13dc33a2bbbe04c7cc6c86707fb9364c"],["D:/Blog/public/tags/math/page/2/index.html","37ca6072a0321878f092402ae635af74"],["D:/Blog/public/tags/network/index.html","82e98f07c58d52b87e0fa89fb9f2a333"],["D:/Blog/public/tags/project/index.html","d02754dee79ac027f198f12780c0db69"],["D:/Blog/public/tags/resume/index.html","bf6a4157737191ff72e1658a96f581ce"],["D:/Blog/public/tags/safe/index.html","e01f931f2176059bbff501e7b8a57500"],["D:/Blog/public/tags/sql/index.html","b43f78af848d08d1262a8f577e5303b4"],["D:/Blog/public/tcpip/index.html","9d2af3786e1860b0be0ec86c59fb16b0"],["D:/Blog/public/template-method/index.html","371f80ce0264344bd70f8fa5752b3c40"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","0f5d6bb8f58511a9ed77c16c660c036b"],["D:/Blog/public/thread/index.html","e4224d4bdd29f137fd390ee5bf6a2a37"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","8cd40a88e6531aa6d788c014cf4cefca"],["D:/Blog/public/ubuntu-set-ip/index.html","dcf2b5ab36cef1cb6ca997c7787a554c"],["D:/Blog/public/undefined/640.jpg","92157f8b7a12cf7b692600d96f615542"],["D:/Blog/public/undefined/index.html","c2f7a7f671a277c05511c345bfa6fa1d"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","3122a31bc2688feb4a01714e150301bb"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","1b674fd0a52307c5079cc2cdb5f9b2ee"],["D:/Blog/public/users-create-data-types-themselves/index.html","c98ed152e8535a16729e515c8f55711c"],["D:/Blog/public/visitor-mode/index.html","9e2e163ab4594ad53b50113bcb55dad5"],["D:/Blog/public/xml/index.html","31a626f0bf72179377fb29204e8b8007"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","026761dfed79e40a8b5d38f10a4c2741"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







