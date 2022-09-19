'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "35ba753deaa6492d573c22089960a217",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a862fcb7bc61321df400c9f3b9c53c11",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "e430f2f229b1a9126b9b96896408ca3d",
"assets/web/images/aktien%2520analysieren.png": "46e67aac0230abaf56a5b0bfaca7e512",
"assets/web/images/analyse%2520tool.gif": "3fe3a5e921a252224bb04776e9ea4af9",
"assets/web/images/analyse%2520tool.png": "cd943462793fd7550c1432a981602fc7",
"assets/web/images/blog.png": "b5376dd971a65ce79b8d29b141cc7528",
"assets/web/images/buch.png": "f39bda71495c3c50692a1fb0bad9dcd3",
"assets/web/images/depot.png": "4f6c53b16ffe3e564660c2dc591e7fe4",
"assets/web/images/dividende.png": "664b65128f26385957b8ca4c5c181c3f",
"assets/web/images/geldfluss.png": "1b11e5c286882e07335779950cdd4a11",
"assets/web/images/investiere.png": "70d513016ee3d7b6bb8438d38e42fbea",
"assets/web/images/investments.png": "88f9f8c2044989261d7310b398697d01",
"assets/web/images/scalable%2520capital.gif": "bba6274237a37a17845a4f02ccc15617",
"assets/web/images/scalable%2520capital.png": "d7d65b0f66f95d4dd95b07af9f7dc930",
"assets/web/images/vivid.gif": "90ca14161ead8e5da300060aa5f75499",
"assets/web/images/vivid.png": "47c2fd8b5257ec0da5764c622dc2dac9",
"assets/web/images/zinseszins.png": "1a1e4d54998a045d276b0305362af956",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"custom.js": "d43dfea1655891d7a0279841436e0adf",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"images/aktien%20analysieren.png": "46e67aac0230abaf56a5b0bfaca7e512",
"images/analyse%20tool.gif": "3fe3a5e921a252224bb04776e9ea4af9",
"images/analyse%20tool.png": "cd943462793fd7550c1432a981602fc7",
"images/blog.png": "b5376dd971a65ce79b8d29b141cc7528",
"images/buch.png": "f39bda71495c3c50692a1fb0bad9dcd3",
"images/depot.png": "4f6c53b16ffe3e564660c2dc591e7fe4",
"images/dividende.png": "664b65128f26385957b8ca4c5c181c3f",
"images/geldfluss.png": "1b11e5c286882e07335779950cdd4a11",
"images/investiere.png": "70d513016ee3d7b6bb8438d38e42fbea",
"images/investments.png": "88f9f8c2044989261d7310b398697d01",
"images/scalable%20capital.gif": "bba6274237a37a17845a4f02ccc15617",
"images/scalable%20capital.png": "d7d65b0f66f95d4dd95b07af9f7dc930",
"images/vivid.gif": "90ca14161ead8e5da300060aa5f75499",
"images/vivid.png": "47c2fd8b5257ec0da5764c622dc2dac9",
"images/zinseszins.png": "1a1e4d54998a045d276b0305362af956",
"index.html": "0590f388387bcf30a0c7d2e5d448c09c",
"/": "0590f388387bcf30a0c7d2e5d448c09c",
"main.dart.js": "223a162a66d7e70e6a5eb2a0e2736878",
"manifest.json": "d42b886ef009c3c63eedf63051715954",
"version.json": "9089729682c4f421e6a2bb7791d8cda8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
