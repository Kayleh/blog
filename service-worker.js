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

var precacheConfig = [["D:/Blog/public/7-sorting-algorithms/index.html","43adbbf147d8ec85098500a3ada9bb44"],["D:/Blog/public/AIO-blocking-model/index.html","b4788f2e6253a0be9cd424dc945aebe8"],["D:/Blog/public/BIO-blocking-model/index.html","75bb4784cdcc1b85ad21092fcc2b2851"],["D:/Blog/public/C-algorithm/index.html","6f04541a832a19e74cae3dfb4a6dbd8f"],["D:/Blog/public/C-programming/index.html","6eb4756c6cdfd0c23f854b7c52103500"],["D:/Blog/public/CAS-&-AQS/index.html","f5300bb0f70db95b3263188017407204"],["D:/Blog/public/Download/downloader-one-threads.gif","d36f71fb9a0921593e025f1483b75fa2"],["D:/Blog/public/Download/downloader-ten-threads.gif","f30be6ce0478ef99ea05f0bdbd6b4b02"],["D:/Blog/public/Download/idm.png","2f8e293d8c1671a04d3975942b7ed0ef"],["D:/Blog/public/Download/index.html","79d563b47f90f7ddc511422594cf6246"],["D:/Blog/public/Front-end-security/index.html","e88a096db8dbe50972b3b750afa6a38e"],["D:/Blog/public/Good-use-of-pointers/index.html","a2d12040e37962f913510485d304d406"],["D:/Blog/public/Head-First-Map/index.html","296f8dd0c14183bae6810042b69dc09c"],["D:/Blog/public/Head-First-Netty/15944ade0142471399997efd68e52948.png","8552db7ceabc450d9e0eb8db689155d6"],["D:/Blog/public/Head-First-Netty/23835a6ae2374897bf28a0b70fce9cc8.png","134204ffd0a90115b9567c793d867db9"],["D:/Blog/public/Head-First-Netty/40cf762660d9455eb6066119cf5eeb49.png","dab6b780993979fcb86ef14553c16720"],["D:/Blog/public/Head-First-Netty/419e8af300b24c9eaed71a76ddc2ddeb.png","e6bc4dec6eecb3ae30f55c7a6487e1f7"],["D:/Blog/public/Head-First-Netty/4c6e9319213b489bbfcc2d7697cf03b0.png","61d526a0cdd6037b06b63e1307048317"],["D:/Blog/public/Head-First-Netty/5fa70ed04e234fad9e524b3766051c4a.png","f5115d77799c384fa82068946d4d1ea6"],["D:/Blog/public/Head-First-Netty/7a95eeb933be4470acdc5f0f07afbc2a.png","3d826a5a72e611c31b30c10ee10a7bbb"],["D:/Blog/public/Head-First-Netty/92908e107d6a487bb930ab6cd6be269f.png","aa144d6ad2688f69b0f5ef7dc916a3f4"],["D:/Blog/public/Head-First-Netty/ae5c6ed3008d4323aaa817e9cb46437a.png","dd3a866c356ee7bd24d23319d08116ef"],["D:/Blog/public/Head-First-Netty/b3fc6eb690464940b4a9b1100cfed5a2.png","bd1aade8739efcfd403d31dc037da0dd"],["D:/Blog/public/Head-First-Netty/c77ea0ea4e554d65b61ee0a2eae78a0c.png","f74de0a1d853d01fc46f717d4706a7af"],["D:/Blog/public/Head-First-Netty/cc27d56addd74e82b6b6b349c7f3769b.png","7eefba893a65706eb6bbe4115cbd0b83"],["D:/Blog/public/Head-First-Netty/e7bac501d86e4e75a897686d7bab40fe.png","2737481fee9a7dd0236f1cb61e823293"],["D:/Blog/public/Head-First-Netty/index.html","465c3a671f8b523777edb8b551cf661e"],["D:/Blog/public/Head-First-Nginx/index.html","985b7aa9fb34d215ff43a35c61aa3adf"],["D:/Blog/public/IO-model/index.html","e69a8f5c280364e5ceab490359adb85c"],["D:/Blog/public/IO/index.html","21d18cb7f8e3dca1dc3076e2f2a764b9"],["D:/Blog/public/Implement-a-lock-based-on-ReentrantLock/index.html","e5aede64af4655f21b8005d62b994cb7"],["D:/Blog/public/Improve-Robustness-(1)/index.html","9dcb2eeab5f69854f25f3ea5d8636bae"],["D:/Blog/public/Improve-Robustness-(2)/index.html","c79bab3cfc5edb964b0bae19c31f3d48"],["D:/Blog/public/JVM-classloader-and-parent-delegation-mechanism/index.html","007893e0b39058e0f5a263d8a0579e84"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-10/index.html","5efd292658f4524496f2efca918f6fbb"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-2/index.html","b2b6f3d2027b891022a98f3d50924f79"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-3/index.html","4368b7cd1a8364c298abad41af4d274c"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-4/index.html","7898098ce47c59e4ce9a0fff7e2e3285"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-5/index.html","436a7612ba86a3e98bea64d7011f128b"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-6/index.html","e505c59b9eaa3b59fa77f5b7eccd7297"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-7/index.html","4c8e3f215ad7dcca9255b2dc860313ab"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-8/index.html","624c34f44040171a59921216f7314df1"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system-9/index.html","b10272d79c2db47e8befb31fa717a59a"],["D:/Blog/public/Java-high-performance-and-high-concurrency-spike-system/index.html","5749b8adbe65764f1bc2f74387ebeab2"],["D:/Blog/public/Java-network-programming/index.html","b99898d908a6d2276665ae00c8e84a2c"],["D:/Blog/public/NIO-blocking-model/index.html","6d085c3bcac26e6a36733b03f57a13e9"],["D:/Blog/public/Nacos：Configure-MySQL-data-source/index.html","c571f7ddafc8951a71ab56c009a66c0e"],["D:/Blog/public/Native-method/index.html","e10d93c9357ac4b5d1fdf481804f06de"],["D:/Blog/public/Proxy/index.html","d5e6b5c67b06e4ed7ce96a856ac279b6"],["D:/Blog/public/RPC-remoteprocedure-call-service-written-by-spinning-framework/index.html","a0bd3289699774b6c809f3146eb9eb3a"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/20190522105651307.png","3a91c65da4d71175fad52a41ba02aa0e"],["D:/Blog/public/Reflected-XSS-Vulnerability-inFont-Download-Website/index.html","75992f88ece9bc4c105d64aebd535610"],["D:/Blog/public/SQL-injection-vulnerability/055b34fa808266a8e9af8b9cea0865db.jpg","ac0205ae0bfe36b37627f5ee8edfb0ae"],["D:/Blog/public/SQL-injection-vulnerability/1617673856077.png","aea0973f9f9b30dec6fdb36ce9bae9c7"],["D:/Blog/public/SQL-injection-vulnerability/1617674097343.png","8e72f49a25652e404b78dcf0b2715e7a"],["D:/Blog/public/SQL-injection-vulnerability/584a947239ae725aab3ee529f701eb7d.jpg","1a5561beb345a593aceaeb7dfa6a9f2a"],["D:/Blog/public/SQL-injection-vulnerability/86d1024ab776770ef0a2f6e559ec83df.jpg","08b09522f103ece11a93a4d4e5638814"],["D:/Blog/public/SQL-injection-vulnerability/index.html","ad2c98d01aff2e7114e90d34dbafb561"],["D:/Blog/public/Sandbox-security-mechanism/index.html","a622fdbef682776ceb14e4d47e8d0a6d"],["D:/Blog/public/Spring-Cyclic-Ependencies/index.html","b22bf42e0b869677dfbd01939c8eff5a"],["D:/Blog/public/SpringBoot-startup-process/index.html","381fe5c8d920c3ff5c2dbdd74baec911"],["D:/Blog/public/SpringSecurity/index.html","2f87542c708f4460e7888b4c61f1de56"],["D:/Blog/public/SpringSecurity/rikcLoveimage-20210206022109352.png","72f9cf302b50672eee8fe5523d6f6546"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206021008467.png","86f1d8376be62231ecf9aafc9a62ee84"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210206023136065.png","028fce419e863fb661be73b70fa7fba4"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005345863.png","edfaf5e88a412dd7f44866c04ce1ceb9"],["D:/Blog/public/SpringSecurity/rikcLoverikcLoveimage-20210210005636400.png","2c6053faef117f9e45fae83296f726ba"],["D:/Blog/public/Thread_Pool/index.html","16692d931086821696ee58e6d60988c1"],["D:/Blog/public/Transaction-isolation-level/index.html","011b04e85042e2f5aa159cddd77882bd"],["D:/Blog/public/Unitest-framework/index.html","fe19b03cdc37f656fffb459321043690"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946553127518.png","967fe832bdf6d871d6f30ece5ec43821"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/020946560314133.png","7aac17dfa91ab67d31babf77c317a294"],["D:/Blog/public/What-happened-from-entering-the-URL-to-displaying-the-page/index.html","0a66c1a6f816ebc128debc45bb2219be"],["D:/Blog/public/about/index.html","2e42ac39ae30c5b41733b6d3cd338bc5"],["D:/Blog/public/adapter-mode/index.html","8c856ac42764a7c78118edaeb221e653"],["D:/Blog/public/agency-model/index.html","e91ccb86dd440e87337974fe44a8ffe4"],["D:/Blog/public/app-test/index.html","d9a159a49a4dbe84d6e26f9e658057d2"],["D:/Blog/public/appearance-mode/index.html","12a48b4af5e6a226d882e9e12516f2da"],["D:/Blog/public/archives/2019/01/index.html","45797afa55945c9dff0838babbc6e5e0"],["D:/Blog/public/archives/2019/07/index.html","f004e0017dc8df5adc16061bc474b5f9"],["D:/Blog/public/archives/2019/12/index.html","57c250177c079e46f5894eb7880474d8"],["D:/Blog/public/archives/2019/index.html","f478e87eb516f05e8a01829c09053116"],["D:/Blog/public/archives/2020/04/index.html","abde1fd3a373a72a9b2da1be9e6170ac"],["D:/Blog/public/archives/2020/05/index.html","c0ec0c2dbb4a196deef5673c750191ba"],["D:/Blog/public/archives/2020/06/index.html","fe01e51f4a353abb6b17a54a49134bef"],["D:/Blog/public/archives/2020/07/index.html","25ad77501a1c1908aad96b02f7af5ad6"],["D:/Blog/public/archives/2020/08/index.html","cc0309bc645d2ad477942e435e43d5f5"],["D:/Blog/public/archives/2020/09/index.html","f74bd3afbea8c15ebf398a07d12a35fb"],["D:/Blog/public/archives/2020/10/index.html","d3cbf795326f119513d598975bca1bff"],["D:/Blog/public/archives/2020/11/index.html","c13fff0862b30bcee5eabb3e7c242cdf"],["D:/Blog/public/archives/2020/12/index.html","50882059c35e54171b3b77da15ae38d7"],["D:/Blog/public/archives/2020/index.html","95f0ca65a8833c6747cb6d3fca192fd6"],["D:/Blog/public/archives/2021/01/index.html","828ef96dd6b2f5a6b998512af8046a5f"],["D:/Blog/public/archives/2021/02/index.html","835037880048b17a08d1b413b9a3868d"],["D:/Blog/public/archives/2021/03/index.html","bfdd2e579ef41f8ea145114fb8eb6b39"],["D:/Blog/public/archives/2021/04/index.html","050791deed3c10ea0fe83511f3c1f40b"],["D:/Blog/public/archives/2021/05/index.html","83b3951049a951ecc330aaaf0fd485ef"],["D:/Blog/public/archives/2021/06/index.html","6f24ac8f00d920619dae627780e74a60"],["D:/Blog/public/archives/2021/07/index.html","eadde0e2565ab3692c4534f5841eabde"],["D:/Blog/public/archives/2021/index.html","f134cb748fb1c7b134afb3475b21115e"],["D:/Blog/public/archives/index.html","135a20f899f05759a58da356c6b42887"],["D:/Blog/public/array/index.html","2c92c5907f72b48a232cc684028d1535"],["D:/Blog/public/automated-test-katalon/index.html","b3e1dc560c0208aa1b105e2f6f0f0c01"],["D:/Blog/public/automated-test-selenium/index.html","9099fd13bc0a81968bf86d5d194789a9"],["D:/Blog/public/binary-search-algorithm/index.html","33e0738aebf64835ceda30e2e64e89a9"],["D:/Blog/public/binary-sort-tree/index.html","ef87f8667b0ecda403672512c85a6c45"],["D:/Blog/public/bionioaio/index.html","ee6eefa7aba92f563314a80f2e6e0626"],["D:/Blog/public/bridge-mode/index.html","ef24010ab49d2aae32ef05d3e0faf7c2"],["D:/Blog/public/builder/index.html","256d372385883f33c61dcac91a4696a0"],["D:/Blog/public/c-pointer/index.html","bb7223e91de34d32dbe2f1f3b28de4cf"],["D:/Blog/public/categories/C/index.html","49f77f04d51c6a608f774b3d9ab297a6"],["D:/Blog/public/categories/SpringMVC/index.html","a1647d5a5fbcb248c4742ec2453233de"],["D:/Blog/public/categories/categories.html","912fb9af7a8a4fccbba9381fb54aac63"],["D:/Blog/public/categories/linux/index.html","6d249380396880e19624805023ee82e6"],["D:/Blog/public/categories/分布式/index.html","584fa077b760316dd7c54d21f6369670"],["D:/Blog/public/categories/分布式/page/2/index.html","ccf75bb88c0eaa443584bd471ecfe0ba"],["D:/Blog/public/categories/设计模式/index.html","8ff2c5d453121145acfacc1e8a2e7981"],["D:/Blog/public/categories/设计模式/page/2/index.html","24c38243cfc86dbf5f058d4ac6a5ba50"],["D:/Blog/public/categories/高数/index.html","50d351afce2d85daa0fe8ae3bef8e38b"],["D:/Blog/public/chain-of-responsibility-model/index.html","2197f2f49e70c4d3044c5bb25801fb48"],["D:/Blog/public/chinese-and-english-switching/index.html","ecdb7766e9eccaeabdb182c0b35d0f81"],["D:/Blog/public/combination-mode/index.html","12d85e2317e2b53f6649b105683b9faa"],["D:/Blog/public/command-mode/index.html","4a441004a04379d06d2861859540b7f1"],["D:/Blog/public/common-commands-of-unix/index.html","090a138abc4013fd00781d5de96af868"],["D:/Blog/public/computer-network/index.html","47e73780ddcffbe0b53be3d546d94a56"],["D:/Blog/public/concurrency-principle/index.html","2f685c2f336b7152999b682c23b1e372"],["D:/Blog/public/continuous/index.html","da95e3c970cf8e360455656079cd7125"],["D:/Blog/public/contract/index.html","67bb13e9e5419206a30f22fd52f0a252"],["D:/Blog/public/css/first.css","6f323def35d5c10d25aa3d426fecbd13"],["D:/Blog/public/css/style.css","9d4f02018c4a64e7569c971409c89675"],["D:/Blog/public/cycle-structure-programming/index.html","d74ef0877910ef11c48e5e08eeed78ca"],["D:/Blog/public/data-structures-and-algorithms/index.html","5ba8c1d36e82fc514d44cf34c4c2a58f"],["D:/Blog/public/deb/index.html","eb3470d718552117fdf36d25d57eb30c"],["D:/Blog/public/decorator-mode/index.html","49b35f883ed6f337529418b8533b5623"],["D:/Blog/public/definite-integral/index.html","12d837661c388d7beb288856bcbcb4b5"],["D:/Blog/public/dependence-reversal-principle/index.html","24fdfb17154459d3d01d74127e690bdd"],["D:/Blog/public/derivative/index.html","7e3ec525d27e8d385e7661a390fc1a4e"],["D:/Blog/public/design-patterns/index.html","7c11887d676e66d3a3a39059fe3b7315"],["D:/Blog/public/differential-equation/index.html","8f05a2446db06993dbf04875ef54bb9b"],["D:/Blog/public/differential/index.html","d63d7e32fc209298d12b193aa98f8cd0"],["D:/Blog/public/dimits-law/index.html","abfe00669c456e86bbe0c6bf50131ca9"],["D:/Blog/public/docker-virtualized-container/index.html","f5c841336889c1f56448de8501edfe11"],["D:/Blog/public/double-integral/index.html","14854c4700d72391d843e82eb11eaa52"],["D:/Blog/public/dynamic-array/index.html","1dbeff19e08da0e4fff032eaced767e5"],["D:/Blog/public/dynamic-programming/index.html","d05c1eab25725062164e67ed10a39dac"],["D:/Blog/public/encoding-algorithm/index.html","13203116370193f5f01db1ec981b6233"],["D:/Blog/public/eureka-service-registration-and-discovery/index.html","9cb6c92a1692015e6ee20bd6c8e3af4a"],["D:/Blog/public/extreme-value-and-maximum-value/index.html","14f9ec205a6a1ab369bba04f2c80256f"],["D:/Blog/public/factory-design-pattern/index.html","2ef0b5e0f8d09bd16330b3ec11fd2400"],["D:/Blog/public/file-input-and-output/index.html","7eb3f18798401c40eb07b688c2b6779a"],["D:/Blog/public/flyweight-model/index.html","0855fe7bad7090694c811a2f07e56746"],["D:/Blog/public/friends/index.html","e43ce3df7e1e0aeea3a9d27c1e91a39a"],["D:/Blog/public/function-graphing/index.html","c4acec2b3f2c5816a9da0dc416923963"],["D:/Blog/public/gateway-service-current-limit/index.html","576a40afd7fd2f204e52703a2b03a7bd"],["D:/Blog/public/gc/index.html","622b7e11f1f566c7a82c7910fe30f5d3"],["D:/Blog/public/generalized-integral/index.html","4e7af1fa56e55cee74da96829340e7a2"],["D:/Blog/public/google8102e2f35ce9e391.html","b9d7b561db52024d704386821c0e9a46"],["D:/Blog/public/gulp-compresses-static-resources/index.html","416ef100a7c169a7d5f8ad57c6667a3c"],["D:/Blog/public/hash-algorithm/index.html","ace7baf8dbb53d819ac3b78cf07471b1"],["D:/Blog/public/head-first-JVM(1)/1625672763247.png","66bc5af16475a8b1a69bff34294c0303"],["D:/Blog/public/head-first-JVM(1)/index.html","a02b573f1554b1e3e13c9ed99c87e325"],["D:/Blog/public/head-first-JVM(2)/index.html","dae777cf312ac251dfc9d9eaa6af77c3"],["D:/Blog/public/head-first-JVM(3)/index.html","6dfde04fefee06511f41b764a58f2e80"],["D:/Blog/public/heap-sort/index.html","77f94a19dc62a9c099d6d9d83646e77a"],["D:/Blog/public/http/index.html","58f66f91b23bb28770b67d488f77dc09"],["D:/Blog/public/indefinite-integral/index.html","ab201d0e6dbb607ff38650322b1da19d"],["D:/Blog/public/index.html","7ae3132632f73ac6f76b95e50b3abdef"],["D:/Blog/public/infinitesimal-and-infinite/index.html","2114f7267fd21b6e111cdfb42a1201db"],["D:/Blog/public/interface-isolation-principle/index.html","2b2daf4d87cda171d5ced1f2e5a61ec9"],["D:/Blog/public/interface-test/index.html","502cef1428a417b8b215d98fa20cf77c"],["D:/Blog/public/intermediary-model/index.html","053d9aaa5a263abf93d13d99712cda73"],["D:/Blog/public/interpolation-search-algorithm/index.html","0d8184ff9aa1f439a1582c197d4e1671"],["D:/Blog/public/interpreter-mode/index.html","ddf260705130a5e9e7c67738518aa77a"],["D:/Blog/public/introduction-to-computer-network/index.html","75762f4d45adc600bc0d412ebeecdaed"],["D:/Blog/public/introduction-to-operating-system/index.html","7fcc62a95a76e5fdd3d45b35d6887b5b"],["D:/Blog/public/inversion-of-control/index.html","92e79cf5bde6b5c2906c9d72a2c8e029"],["D:/Blog/public/iterator-mode/index.html","7950775a26969a179df4e279578f462e"],["D:/Blog/public/j2ee/index.html","32abde415d8b71b0fcd6a36715e188ba"],["D:/Blog/public/j2se/index.html","dcac247efd4aaec9f7753abd25873ebe"],["D:/Blog/public/jdbc/index.html","1d6eb9dfaa61d612c2d94145f2bfa364"],["D:/Blog/public/jdk/index.html","ee7ecfa7ab5005bde4b2b0f28e73120d"],["D:/Blog/public/jmm-memory-model/index.html","e563df0c7d87960055bf4ebb117285b6"],["D:/Blog/public/js/aplayer.js","f4d6fd12b69098d117f65cc0f1371a3d"],["D:/Blog/public/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["D:/Blog/public/js/issues.js","4868732e560db0465715cf9b221646bd"],["D:/Blog/public/js/search.js","4d3655faf8f9033e9faf5fda842a16a5"],["D:/Blog/public/js/tagcanvas.js","222f58419252597da4e4b17828824a8f"],["D:/Blog/public/js/tagcloud.js","4d5b86e9e3c1180eeb33394c7a0937f0"],["D:/Blog/public/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["D:/Blog/public/jvm-gc/index.html","76867cd3342a0c3d26886d791f4ac93b"],["D:/Blog/public/jvm/index.html","5d580b6a8002a0e30b8bd48a3a976928"],["D:/Blog/public/law-of-robida/index.html","652cd345e02ee0963516952d8e7ecf3d"],["D:/Blog/public/limit/index.html","176264c953f7ef13059edfd2cdbe8b41"],["D:/Blog/public/linear-search-algorithm/index.html","28a5830da43598f4660d58688d0e3610"],["D:/Blog/public/link/index.html","c4c4996257c9c8c9f5840f060a428211"],["D:/Blog/public/linked-list/index.html","867b4fffc67ee336ea03c1136c1945ed"],["D:/Blog/public/linux/index.html","06eacc75e80b4169c34c6cbf78e79036"],["D:/Blog/public/liskov-substitution-principle/index.html","c5698cd936ab21aab69fc9ab38cf5aec"],["D:/Blog/public/live2d-widget/README.html","f690ea516edd4e1fd865703e1edd42a8"],["D:/Blog/public/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["D:/Blog/public/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["D:/Blog/public/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["D:/Blog/public/live2d-widget/autoload.js","ed6060817a4de0735ea29ca62e644ee9"],["D:/Blog/public/live2d-widget/demo/demo.html","be4da92bd9216313f0bd6fdff2688f2d"],["D:/Blog/public/live2d-widget/demo/login.html","ea52e39eeb21f43642a7db7e81272d0a"],["D:/Blog/public/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["D:/Blog/public/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["D:/Blog/public/live2d-widget/waifu.css","840c54ebb5acded56b1d340d80b7dd21"],["D:/Blog/public/lock/index.html","529d7e19b783b00654e9204591c76f43"],["D:/Blog/public/memo-mode/index.html","a7ec4101be005eb69730c2ca59f8c374"],["D:/Blog/public/monotonicity-and-convexity-of-functions/index.html","3956dd8a5797013d175049d1eb1b9653"],["D:/Blog/public/multi-function/index.html","1328e11cfc932c8c41819662118027d9"],["D:/Blog/public/multithreading/index.html","db38537d0ddc09c7ebf8384dc853d4b8"],["D:/Blog/public/mvc/index.html","eef514879c5643ba1cf84ca2b392236a"],["D:/Blog/public/mybatis-cache/index.html","ccdce1516e32bd8da1abbf8c30facba1"],["D:/Blog/public/mybatis/index.html","6f4ec58ea2c1d7cf03f5c2b3c9a05ea9"],["D:/Blog/public/mysql/index.html","31b96a4f087b9abf38f7aba8578e6f59"],["D:/Blog/public/nacos-service-registration-and-configuration-center/index.html","f9cc883b33dc406a23bbecabd30a3e25"],["D:/Blog/public/null/1626105218415.png","6f52502a30acd365df3ee4e94cc44f72"],["D:/Blog/public/null/1626105579887.png","eb8ca23eac0a5ce0b8769e8cc2587909"],["D:/Blog/public/null/1626105649611.png","c5b7ae698956cd45992c6d4a00175f6a"],["D:/Blog/public/null/1626105684323.png","4f7a4804dcbe70219ee720a28e4eb49e"],["D:/Blog/public/null/1626105957986.png","1547b7498541d8a2a8fb1c916930fcbc"],["D:/Blog/public/null/1626106416493.png","f08a1cce7cdc5d1b3b2e7910cf4a4c08"],["D:/Blog/public/null/1626106429899.png","00f0bf5908ca2ab9a1cabb74b3777de4"],["D:/Blog/public/null/index.html","c63ba3a603fa0d0700d7c5a74c4c4a79"],["D:/Blog/public/objectoriented/index.html","d4ae11896478f292c06af0b0648c3394"],["D:/Blog/public/observer-mode/index.html","63a16baed9ad913ab390f897ffb1436c"],["D:/Blog/public/off-heap/index.html","bba3b8168c50bfe1dcd34166f1e04aca"],["D:/Blog/public/operating-system/index.html","7fcd9890398b4dff5a6cfcd62caf3df8"],["D:/Blog/public/page/10/index.html","29efd11a925875b3d2ff9fd1639d9e96"],["D:/Blog/public/page/11/index.html","567bf6c53ef44db7e0124815128a5088"],["D:/Blog/public/page/12/index.html","b83e31f18c7f5a1322b5ec4ab11fa60b"],["D:/Blog/public/page/13/index.html","570c6fe7d45bbf1c0adac1f7f6ca2f59"],["D:/Blog/public/page/14/index.html","c5f524749660ff41eab2c9fc4f7c3959"],["D:/Blog/public/page/15/index.html","e7be1bdcc02a0f410a1e59af61b71c39"],["D:/Blog/public/page/16/index.html","4b564efdcf9cc42a35e686008c2fd2b9"],["D:/Blog/public/page/17/index.html","98807c6cb7b473163175cd7dac60bc60"],["D:/Blog/public/page/18/index.html","e66de5319f46bdd23c3bc90dfa43a9bf"],["D:/Blog/public/page/19/index.html","80cf7c7da04704afd485cc928785b175"],["D:/Blog/public/page/2/index.html","fc5cdce403e88a826d610a68a68a1063"],["D:/Blog/public/page/20/index.html","6715f60420a314e5a7e3f5bfc43bf1ad"],["D:/Blog/public/page/3/index.html","f43f3be2449587c022158a3587976d80"],["D:/Blog/public/page/4/index.html","25c962e607baae845f60f45db7bcbf85"],["D:/Blog/public/page/5/index.html","e49c43642acc17b4f0cc98b58d00854b"],["D:/Blog/public/page/6/index.html","ce91e5ddb09352ce7425a7f2d32f07eb"],["D:/Blog/public/page/7/index.html","40bd0fb5a3a727083dabee1dd2cfcedf"],["D:/Blog/public/page/8/index.html","9389c11523db0211fccd093f5b66619a"],["D:/Blog/public/page/9/index.html","70375fcb3ea50ecc68fb8a0fd4722549"],["D:/Blog/public/palindrome/index.html","bb2b7963307577ae5535757e5b918ab9"],["D:/Blog/public/partial-derivative/index.html","4a7109d6675be7bf8100c306ff37b40b"],["D:/Blog/public/pass-by-value/index.html","59118de5563ef309e5d3ee6856983c47"],["D:/Blog/public/pictrue-bed/index.html","2b1a27508c0a20c3c9b49921e2c96fae"],["D:/Blog/public/principle-of-opening-and-closing/index.html","42a392fb4ac75b0506af33d2878f5657"],["D:/Blog/public/principles-of-computer-organization/index.html","ddbafa3b3c6516c6eed51bba04ccaec3"],["D:/Blog/public/program-test/index.html","82fba1b80e1c1b0e53d7804abd2be85f"],["D:/Blog/public/prototype/index.html","719bc5d1786d4b605eb0ee39c186b4f3"],["D:/Blog/public/queue/index.html","5468bf252e6de5fc1d04634ddf2a7b6e"],["D:/Blog/public/realize-modular-programming-with-functions/index.html","bc0146f2248c69c46da4da8c1d61e80d"],["D:/Blog/public/redis/index.html","02abaea543b93a09524bb762c5b85797"],["D:/Blog/public/reflection/index.html","f437be3bf692ab4875001c671d86bf5c"],["D:/Blog/public/resume/index.html","786f56a27af28a56872c5bd1c46fe116"],["D:/Blog/public/ribbon-load-balancing-service-call-degradation/index.html","90a51853f40d8b82dd3b62936d7b22fe"],["D:/Blog/public/seata-handles-distributed-transactions/index.html","3bc8f745740314c5da0051dffb98cda0"],["D:/Blog/public/select-structure-programming/index.html","aad664d5dcb90f7cde867d88cb7a252a"],["D:/Blog/public/sentinel-realizes-fusing-and-current-limiting/index.html","1f20abcc30a0afb86caed4189e54942f"],["D:/Blog/public/sequential-programming/index.html","7737fd790cfb777320c237204099826a"],["D:/Blog/public/series/index.html","2f5a3c1c2bbf76f4492c1425be6223dc"],["D:/Blog/public/single-point-login/index.html","933368e30d2cf6310353a9e84e4ec733"],["D:/Blog/public/single-responsibility-principle/index.html","3d4ec430e4b92941fb2ed98ae30ddceb"],["D:/Blog/public/singleton-mode/index.html","307ae1eee584f823912d96a007e25955"],["D:/Blog/public/snowflake-distributed-id-algorithm/index.html","84dcca3c5ae125ac9aee9aafd299c3d9"],["D:/Blog/public/sparsearray/index.html","959498153f84c68d0db6322f99f055b8"],["D:/Blog/public/spring-and-jwt/20210426122252495.png","f98345b72249b6454058e0942d1b26a3"],["D:/Blog/public/spring-and-jwt/20210426122931619.png","5fb96a59e9e2496ba0bb76a984448e12"],["D:/Blog/public/spring-and-jwt/20210426122959260.png","5fde7b4380732bb2518577eba658d60c"],["D:/Blog/public/spring-and-jwt/20210426123015114.png","1dd6a84a707e62237bc9fff25c16150f"],["D:/Blog/public/spring-and-jwt/20210426123031980.png","de3c35cde1eed0a4e2d1f1f4cddc9b88"],["D:/Blog/public/spring-and-jwt/20210426123106916.png","a26ca2005fce15bd5cd6c265d1426c89"],["D:/Blog/public/spring-and-jwt/20210426123124603.png","fd630f10465bb108fa6271ddae6fbd38"],["D:/Blog/public/spring-and-jwt/20210426123635828.png","fbc07404090ff31f9e08a60ca1a09851"],["D:/Blog/public/spring-and-jwt/index.html","4fa8c1472357ecd459566c076880e7c3"],["D:/Blog/public/spring-architecture/index.html","ec78365df8adcf237685488e7cedc7ce"],["D:/Blog/public/spring-relate/index.html","be3ab7f27f29f4fcc614da1fd993767f"],["D:/Blog/public/spring-springmvc-mybatis-integration/index.html","3018afd5818e74bd2b0cca74d064db32"],["D:/Blog/public/spring/index.html","f088e5049b7d654c76ba73bfed0ba6a3"],["D:/Blog/public/springcloud-alibaba/index.html","ccbaba977123c8eafbe9a83e361cb5c5"],["D:/Blog/public/springcloud-bus-message/index.html","6225b83c58ad6530d40a0385f327ca2a"],["D:/Blog/public/springcloud-config-distributed-configuration-center/index.html","df306276aa1eaf358951fce0cf5519b5"],["D:/Blog/public/springcloud-sleuth-distributed-request-link-tracking/index.html","e236d45799ba9b64aa93cb82e5dd1df9"],["D:/Blog/public/springcloud-stream-message-driver/index.html","53bf868d38b0552fb13a7575da7c9754"],["D:/Blog/public/springcloud/index.html","a8fb33af5c7c4ccb3b19aed0258621c7"],["D:/Blog/public/springmvc-environment-construction/index.html","0902e1cdae55a2fa0bca5cdb8dd95726"],["D:/Blog/public/springmvc-work-stream/index.html","042e20ddbf56c2db79a314b85615e078"],["D:/Blog/public/sql-injection-attacks/index.html","d52373009460f44c2d067689c83ef89a"],["D:/Blog/public/stack/index.html","09bc305da83cf18ceb74895bd27e0c76"],["D:/Blog/public/state-mode/index.html","e2667bbe3fc5a77f926b31d3562c456b"],["D:/Blog/public/strategy-mode/index.html","ccb5c2b2eed35fe19e2742775e7bd511"],["D:/Blog/public/synthetic-reuse-principle/index.html","5ead52d8edd3cb4fe4cee90a5a2a38c0"],["D:/Blog/public/tags/C/index.html","0837d0511c5759e0bcc8e4c9cc00b641"],["D:/Blog/public/tags/C/page/2/index.html","c79c62d8e623d16a884f3987cd976d39"],["D:/Blog/public/tags/Concurrency/index.html","6e0dd98e61911bb2e12a490f66596258"],["D:/Blog/public/tags/DesignPatterns/index.html","d74f9125d0559976a005e6b57401a141"],["D:/Blog/public/tags/DesignPatterns/page/2/index.html","ab5f25ee022f36501873bcb76c01bffc"],["D:/Blog/public/tags/DesignPatterns/page/3/index.html","a8c6fb01d263485165845a320cf2a944"],["D:/Blog/public/tags/DistributedMicroservices/index.html","944037ce3832b47bd1702e7fa7159d3e"],["D:/Blog/public/tags/DistributedMicroservices/page/2/index.html","aed850a60a70e58d04b033e41ab6d3ca"],["D:/Blog/public/tags/Interview/index.html","0f11a2765c13b67c4b86a6321149ecb6"],["D:/Blog/public/tags/Interview/page/2/index.html","867279b30be036ae70aaa685eb1e170c"],["D:/Blog/public/tags/Operating-Systems/index.html","4a09e4c623017c758093401c351828d2"],["D:/Blog/public/tags/about/index.html","62e4752770e0d06447342ab96c95b865"],["D:/Blog/public/tags/ad/index.html","ee39d5dce1143d2e3a32b983e457c72a"],["D:/Blog/public/tags/algorithm/index.html","45e8a28311cbb0517636e20ed430185b"],["D:/Blog/public/tags/algorithm/page/2/index.html","2819661aa8a28e8a8dc0e6d85c343748"],["D:/Blog/public/tags/computer/index.html","df6670cf81cbddf02902a6d7b442e75e"],["D:/Blog/public/tags/docker/index.html","37ff1aa3e2c0c82700dbf1284c78ee43"],["D:/Blog/public/tags/frame/index.html","69fd7666ac1a73a1c1156ae59941feee"],["D:/Blog/public/tags/front/index.html","55996dd56e290f4e8ec185f8d217252f"],["D:/Blog/public/tags/index.html","c6ed5e58478a5ef9d0b74c95afa978c8"],["D:/Blog/public/tags/io/index.html","8671b5a503e8a7fce1c1e802e4a68c7d"],["D:/Blog/public/tags/java/index.html","20dccf709ddae67c06b0087c45af371c"],["D:/Blog/public/tags/jvm/index.html","722cbbecf7b9c9e8ffa21d5ef2c7edbc"],["D:/Blog/public/tags/linux/index.html","58aedeee8c63a5b240b2e39a6014b067"],["D:/Blog/public/tags/maintain/index.html","868d828a475f485cf57fe8d823417e70"],["D:/Blog/public/tags/math/index.html","64bf132fff12ea341d05d1aacf857974"],["D:/Blog/public/tags/math/page/2/index.html","7be42bb1988cc4a431c965b71a3ba353"],["D:/Blog/public/tags/middleware/index.html","cf6f2ae5640c1d5525668418a2ae1b4f"],["D:/Blog/public/tags/network/index.html","1c8085dc804f80a14db1f65ad2b1e0cb"],["D:/Blog/public/tags/project/index.html","2ff47118318b77925e3007f37ce04d06"],["D:/Blog/public/tags/resume/index.html","280fb3102b3e8485e67e881ebcca0a59"],["D:/Blog/public/tags/security/index.html","5e25bace2c5041385cf7c31972b89484"],["D:/Blog/public/tags/sql/index.html","925e0b7f0bbf3326ceb4f0da18e433ae"],["D:/Blog/public/tags/test/index.html","bf71e22265119e426d1f91eadd2edbe4"],["D:/Blog/public/tcpip/index.html","2182372e93f383bffe39ddb658b2861d"],["D:/Blog/public/template-method/index.html","ab8584fb56940bb3879effa0e459e04b"],["D:/Blog/public/test-case/index.html","981806eafd9dbbb6dec032c81582c6a3"],["D:/Blog/public/the-cdn-acceleration-cache-of-jsdelivr-does-not-refresh/index.html","9bbbad283df2e30232e1e56a792e6379"],["D:/Blog/public/thread/index.html","6f7e11779c0bfbc6860491b3999e4f2a"],["D:/Blog/public/traffic-monetizationaccess-to-google-adsense/index.html","0079212964da712f102ad0ad0cbd1322"],["D:/Blog/public/ubuntu-set-ip/index.html","0cb862320291692813938a3da1cd085b"],["D:/Blog/public/undefined/index.html","38270f1bb717af0cc9f4952ea03fe598"],["D:/Blog/public/use-arrays-to-process-batch-data/index.html","4975164a904964f650f2f2c49b10aba0"],["D:/Blog/public/use-of-springmvcmodelattribute/index.html","943824165329bddbf919bf6513ec2ae1"],["D:/Blog/public/users-create-data-types-themselves/index.html","65af7415bc95c98ea503bd8dc2670c93"],["D:/Blog/public/visitor-mode/index.html","5c65d8cea59d31cddcf9a1cc293304a0"],["D:/Blog/public/xml/index.html","fa3d13720ac3d39b511f3b5ae32162be"],["D:/Blog/public/xss-crosssite-scripting-attack/index.html","b2e2f57ae689ada8d999e62eb7cd83bb"]];
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







