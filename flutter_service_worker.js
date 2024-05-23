'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c8c6cd0746e0dcf176fa3632157a4c27",
".git/config": "731b68db6c16bf91cdeef2b715001958",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1b28c1b805e465a541c8d9197d3d3d88",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fb8b0a9a3e40d2f6d958cd89d559fb89",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7a9b8c3bfabefdedf939f8b291489eaa",
".git/logs/refs/heads/main": "0ae9abd740825481deb77547d76cee6c",
".git/logs/refs/remotes/origin/main": "285b32debd3cc9e75487b59895931f7b",
".git/objects/08/9ecf558e587613a127dd1c56f653c233711a2c": "b17ed76853865036c044304a00c0a4b1",
".git/objects/0c/11c640b3455a69ac7f0f6b26a77a2a7ac10c76": "764d16664af2d9e4d3f1c89f37a5e62d",
".git/objects/0e/dc05a3b9ddb071747e27528193d35544a3fc72": "836f9cd84f08056ccbf7275ce2b9e1ff",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/fb796b0f98468a56eabf1df6dc379b5aa97dfc": "87149e0c7d9284a502913e7d971928af",
".git/objects/12/dea2b4de1ca7501c2f2055555e60aa2e1048b7": "973d83422496c2e654ff7ebcfe27a60a",
".git/objects/17/dc6eca524c52f9e6d78e8d7fc7d3fabd7d0cd2": "5a1fa80644d58bc008dc3ea105e6f6dd",
".git/objects/17/e52e8550e5668f7117bcb755beb70c3a21c9e9": "4eb30428da8883413d4ae8c0889cbc44",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/f4bf8b713aac909e9238647d1dc322f5f0c5c7": "8982bf4f390d4eef89f9f531eeb8cd7e",
".git/objects/1c/d3b7a7b20e87471ef31d85910f73ca43dd6c3d": "9315ecf6e0b3870658cf3668d1b21b75",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/0c221de4f03fad8cd199c761d56793b67dc91b": "b6e78e594c8304d0d0ef4d7d8a3c493d",
".git/objects/24/cfef9a977a875ba4b33b791f2851da66fabcf4": "122740e429a81e2ae6a9aef2ccdb131e",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/330db862e7872235dcc6c290ab95aba4d733b1": "4b0c515e0a7f078f13cce07873a172d5",
".git/objects/28/a3b8ddd70402fa96e5bb0f9408019ccb6480b6": "30b8380ea9a211f50eee03a59a39fca1",
".git/objects/2c/842ae6b4df68a9591fa98469a92809980cf205": "bc8731bdd623630cfec17b30993cb021",
".git/objects/31/23dc93c5ea57da836feebd5f7019121551589f": "4a3d302a09333daf597a98a29d9bcf70",
".git/objects/37/91a5f124eac9c0083abaf4ccda8bb1d493cb1e": "9cae7419987286992cc0c9f407c2c5e1",
".git/objects/3d/8398ee1991ededfdf26b22a71ade43ff5f38ec": "32678a904f3d8b183bed21ed60803a6b",
".git/objects/3e/862389caa4f1d2031a4094da2dec3281ce638e": "e7bf67032c0684c7141878e7cc481b22",
".git/objects/43/56d615409f11b83204a89fd80660d24a2756e3": "164645ce68287dc2d09259df3f924862",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/ae41228b0819c7b89a0cfc1f2f6bfc509ddb7c": "b529e5401fc19c57d3e099d01305f020",
".git/objects/47/f76ca6b9ae8d522dbdf9e436de79fc14653d2c": "ff534ce63a668b100fc5e4209f8bfa7c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/6cceb129c2dba710c04ca79654b2450201b31b": "3accdfebd22c30eb7b524fe0be34708e",
".git/objects/4c/8a79f883b16fb354717856b024ae06cef01ee5": "004c685c3c4ac8738a10b7ee3456bf52",
".git/objects/54/1b2bd91125c3e9f1bbc6a762c56dc2ead75642": "23c16851dcf24375cddaeb5ab7aeb28b",
".git/objects/55/f16bd6f9d098231ed94d74808561c1709ccb98": "19ccd48502391549c333200f3357afd2",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/5528cd9e1446df7b0568d07d3337d46c017566": "af282a24c5da0c19e8338b94efb44145",
".git/objects/5e/2ef0907a4f129969099db1fbf0cadeb82fbb3d": "f8309aa54093355964aa33e76a1e5558",
".git/objects/61/6ab375e2bcc8ce3a18d535aabdb47129d60a4b": "ed59270a314659c95a730246c8f220d4",
".git/objects/62/5365b13de604796dbe6da8a7cb21849541749c": "7df400a5c675be1caec9a4b6fb6b979d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6f/4a4ea3c0a2a62d00187b772a4cf80078eb7ceb": "4da88c6e0b1a134292c35ad35564bcad",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/76/f44acfb1bcf01563c5729602fe3a0a3fee9f46": "b55c3888ddc7f2b0fa880a2f38e46ab2",
".git/objects/7b/e2041382bcb0ee5cce42fbfda612de17614bb9": "385112e1be34ebd51500f3c69b222f1e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/81/7130ad3292b366b1f27c0e108a10cafb36d4a2": "1e6eca6cee3392d609dd62ace4c2ec38",
".git/objects/83/7fc8d8b040ca104f8fb2ff022999a2221d0271": "1614570f5332359b3550135417e70f10",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/d60797ecf2a710286abbccc4e10b9fdc66c2b1": "ae49125ac61e8ab698bc43b6a4a42adc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3121af91d21b8eb46403389c774bba965ca4ac": "8956be4127510d58aa30f03b77c8217e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/83e7905b33a9b8fac630267e8ab0e659b13d50": "807005192dcaa0722cde0199b0ff1d40",
".git/objects/92/82d5b631673602b1dee544fba4202bd08817cd": "daa3538e3bd3876980f6693a8c306852",
".git/objects/93/de57060c1375d49cdebc6c6e0e1d8ebde0d94b": "fa5518d48c0110d5232a3f9d42a003f0",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/96/c393eb059264740a93d706e6eecfe6308fffa9": "94558f692bc4d683df104a2be200169e",
".git/objects/9d/e72420073c10f588cd89d0eb473707735a5f7f": "cf20c40a426158d4e610f09860888c58",
".git/objects/a3/335e54d52cc7f18c251e2386140a1dd39957bd": "6f243d08de21fab81e554ccfabe57537",
".git/objects/ad/a8438003dfdedc7cc3018b79b01bf84153a128": "115207887cc03bae5e6055452057e50b",
".git/objects/b2/0cb8e858da698fd5769e37727babb9b082823f": "cd885ecd261086a1434705049fc10c62",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/67281ffda42f6a2c995611dba79f804c07ed1a": "e946be9bab91ffd7fead42c7ee847824",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3d662f257e6bfd50a2cb2e233cf5382ae1f87e": "39f61e2b4dea65c233e526b511927211",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c8/79615be4b6c586d9114eff052b525e6ab7351b": "7680ce0328722b9aa0ff3654918ac3d5",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/cd/5b4608a03da0232b6737f432147ef4d938a00e": "91cd22e1891cb703ac829558eac96c8b",
".git/objects/cd/638c8c359f7fdea580b1a85f8a42cae45f2dcc": "d345d58ba5058947ebd0aaf71d56f931",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/91ada3f4061a91eeca283f97608176a08c4dfc": "7596e4040bc3a78780ae7e3b9989949d",
".git/objects/d1/f0dc37e5a1d6629bdc18b449515977d3eed88b": "f72e6e783c2973001676f423418dabb0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/db98439600374d5bdbad801c727bdf89bef640": "146a94300ed2b2de62c5bcf50578e376",
".git/objects/d9/69b481edb42de185c4d195d2ca4c8d3f8967ed": "a270f660b98dff7f01715c07a7dd8b01",
".git/objects/e7/d056e1a101048446ef9c59d97759ad2e5f91ef": "607cf7cf95b866cde77fc160d6c4975b",
".git/objects/e9/617bdeb823083a3d64331e729e5549874f058d": "a9b3853897092f17424fa376e1416b57",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/09a8ae5dddcd3735679ae32bf9a693a719c766": "8245e60ab6943ec28985148fe75bd6f1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/1a394633c19ef73b80a5ca2580a354dcbd6a48": "3f7675eac9d17afc5dd719cbe9152009",
".git/objects/fa/31f459a4d1b35eaf10d25f42bbc9ce54b3327f": "b72f6d13eb22c572a32d51614cb6dbbb",
".git/objects/fd/8c536a69dadd996fdb0e3234de8427f2b515e6": "52d7d52fd38e2b3e27d22cb97e0ce921",
".git/ORIG_HEAD": "2321bcb93cad7ee97100133ee1e973e6",
".git/refs/heads/main": "d8f076004750dfb467bc9be851ca6996",
".git/refs/remotes/origin/main": "d8f076004750dfb467bc9be851ca6996",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "addaa4e09802ce7d7e03e03d54ab03e5",
"assets/AssetManifest.bin.json": "4457f9401e3d2aaeb77d34437f5ce739",
"assets/AssetManifest.json": "93398e7fe555d63e40bca60ed874bac5",
"assets/assets/rive/dragon_rider.riv": "9e8bd8db4ebdeaef78f646ed7728b0bd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "fda2a7a115124e19203dda7cebf34397",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "52a28248e184bc2d0756a6fed491fa50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ff3623b7ecae3a1c5128c617f8e79123",
"/": "ff3623b7ecae3a1c5128c617f8e79123",
"main.dart.js": "3f17b4ac4c4c8d800539d48b21ab3589",
"manifest.json": "8b963c0046e26f5e494fff48be0e17f2",
"version.json": "fcb31fe12b9f3af227123fc9d10e632e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
