'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "223e70b36b548a46bc0a2e59208e3346",
"assets/AssetManifest.json": "a830f9e64064f1227919bd3e52eda56e",
"assets/assets/app-256-transparent.png": "a94ca4249e3bd64abd7f9bbc7a457798",
"assets/assets/app.png": "8945c92bd7989d5675a8ff96c107fe31",
"assets/assets/background-creative-island-dark.webp": "10e35c32c6217e20f7eb871c05415f4a",
"assets/assets/background-creative-island.webp": "c5bbe21c3786381630303e45cacfd3fb",
"assets/assets/background-dark.png": "c558445198cddab5cd45c554d05306c3",
"assets/assets/background-discovery-dark.webp": "98011f3b0fd311289a811a4ec8f18123",
"assets/assets/background-discovery.png": "b703b00bec948918b64d9bd5e8c87761",
"assets/assets/background-team-dark.png": "f92cfb793b1ef79a0b3656dc6f4c09e2",
"assets/assets/background-team.png": "ff69fdc017de5d06a5675ccd3727cea3",
"assets/assets/background.png": "82b4381cc08b5a195d0176a5c101d261",
"assets/assets/friendroom.png": "5b48aede3df7711cc2de79c3a2371f61",
"assets/assets/image-broken.png": "808db4e6bca0cbeaf4e3e06686a85042",
"assets/assets/light-dark-auto.png": "fda70f15df204c1adfadcca78807b7b4",
"assets/assets/openai.png": "06836823b1e3f7a54b3cce5a3fc56e18",
"assets/assets/share.png": "643bdbc529555114fb80001200923794",
"assets/assets/transport.png": "b3f2047ce3c06d730d1d0aaee2c3801a",
"assets/assets/wechat.png": "cfbce0d6bbe22a70685d264989025025",
"assets/FontManifest.json": "e07c701a26f6255a8abc89fbc6b37e4c",
"assets/fonts/MaterialIcons-Regular.otf": "6f613e4ed306e2d415a4b4c9a06c4fbd",
"assets/NOTICES": "77d0593f61a2e24f9bf1263278a9b749",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "43116accd58915ba31b9e3f8bbb37632",
"assets/packages/flutter_iconpicker/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/flutter_iconpicker/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/flutter_iconpicker/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/flutter_iconpicker/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/loading_more_list/assets/empty.jpeg": "52a69bab9f87bcf0052d8e55ea314977",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/packages/sign_in_button/assets/logos/2.0x/facebook_new.png": "dd8e500c6d946b0f7c24eb8b94b1ea8c",
"assets/packages/sign_in_button/assets/logos/2.0x/google_dark.png": "68d675bc88e8b2a9079fdfb632a974aa",
"assets/packages/sign_in_button/assets/logos/2.0x/google_light.png": "1f00e2bbc0c16b9e956bafeddebe7bf2",
"assets/packages/sign_in_button/assets/logos/3.0x/facebook_new.png": "689ce8e0056bb542425547325ce690ba",
"assets/packages/sign_in_button/assets/logos/3.0x/google_dark.png": "c75b35db06cb33eb7c52af696026d299",
"assets/packages/sign_in_button/assets/logos/3.0x/google_light.png": "3aeb09c8261211cfc16ac080a555c43c",
"assets/packages/sign_in_button/assets/logos/facebook_new.png": "93cb650d10a738a579b093556d4341be",
"assets/packages/sign_in_button/assets/logos/google_dark.png": "d18b748c2edbc5c4e3bc221a1ec64438",
"assets/packages/sign_in_button/assets/logos/google_light.png": "f71e2d0b0a2bc7d1d8ab757194a02cac",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "70966ac5070483983c1cdf0d85dad94a",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/Icon-192.png": "d6f0fcda257605a3fe3dc0ad022a1125",
"icons/Icon-512.png": "064c7b16339e7b59bbaa13732746715e",
"icons/Icon-maskable-192.png": "d6f0fcda257605a3fe3dc0ad022a1125",
"icons/Icon-maskable-512.png": "f6633118ac9d15ac611f0d403e0e0df0",
"index.html": "ac9d347584103e188b6cbe4c977511b3",
"/": "ac9d347584103e188b6cbe4c977511b3",
"main.dart.js": "552da6101f3ba0d82db54f9605267cd0",
"manifest.json": "029572256775a183ca582ac6e5a9d511",
"splash/img/dark-1x.png": "356771c44fa0d5a678c0818574c4c5be",
"splash/img/dark-2x.png": "9ca0109d122130ec970b44d6a5b0a824",
"splash/img/dark-3x.png": "700f2d961062f0206af0234bf60e6ed8",
"splash/img/dark-4x.png": "fbafd1888d164bc303740fc794eafe5f",
"splash/img/light-1x.png": "356771c44fa0d5a678c0818574c4c5be",
"splash/img/light-2x.png": "9ca0109d122130ec970b44d6a5b0a824",
"splash/img/light-3x.png": "700f2d961062f0206af0234bf60e6ed8",
"splash/img/light-4x.png": "fbafd1888d164bc303740fc794eafe5f",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "0547575a914b641f91314bc1c5a0eeee",
"sqflite_sw.js": "7794eaa54dd4ab831a484e5af974ab5c",
"sqlite3.wasm": "8e4ed39391f4e06cd7ae00a2692cc91c",
"version.json": "0a71ab4cffa581bc4825db4fae94e2ef"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
