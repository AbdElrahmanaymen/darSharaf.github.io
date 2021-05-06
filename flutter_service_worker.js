'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7d3d48efe328cb09f9a21ce45db69a5d",
"assets/assets/fonts/Bahij_Myriad_Arabic-Regular.ttf": "7b5d7454887a6c66c5e75dbe0b1418bd",
"assets/assets/fonts/Capriola-Regular.ttf": "65cf3b79071dbddf141319d5146b540c",
"assets/assets/fonts/D-DIN-Bold.otf": "c352e7b670254267d30d47bc3a52b3b2",
"assets/assets/fonts/D-DIN.otf": "d68d8669232a9e8215831889eba83db1",
"assets/assets/fonts/DINBold.ttf": "e07712419b190b368204f9c1c715912d",
"assets/assets/fonts/DINMedium.ttf": "902d51bb5dfdc3a3b8c11af3cc56f901",
"assets/assets/fonts/DINRoundPro-Medi.ttf": "a6128cfe3e0a95657c198ac972d3f762",
"assets/assets/fonts/DINRoundPro.ttf": "3d3084224db6045a3f2c4d9cd4ce4938",
"assets/assets/fonts/din_rounded_bold.ttf": "2082a2b59468cd233bb1064da7ca58b2",
"assets/assets/fonts/Finlandica-Bold.ttf": "08cd6978338f3a2d751b5a0c202f721c",
"assets/assets/fonts/Finlandica-Regular.ttf": "627401b0b0ec2a796d3dfb5c4f4598d6",
"assets/assets/images/9-01.png": "f3efd15fdc999060744f0cf9f2e1bfe6",
"assets/assets/images/coffee.jpg": "9948093d66b2a33cc501058b454ff9df",
"assets/assets/images/farm/1.jpg": "639ca26548dcaced3f19b9bae08666ca",
"assets/assets/images/farm/10.jpg": "dac0bbddaa580b5de2439196bee20c33",
"assets/assets/images/farm/11.jpg": "fed71f2ed624fb4dcd6ca67a3194a08d",
"assets/assets/images/farm/12.jpg": "2b1cc650e50b827424708ba4d6adb77f",
"assets/assets/images/farm/13.jpg": "c1500582a7adc579e0836e54b685c183",
"assets/assets/images/farm/14.jpg": "aff36da8f42855a4585ecfbb9583ab1c",
"assets/assets/images/farm/15.jpg": "b72b2c7614b5206b7cc44afccf58b0ee",
"assets/assets/images/farm/16.jpg": "8191af9b2e55e743087a952f68de40d2",
"assets/assets/images/farm/17.jpg": "7925007d60c1f188d8df5fede05b3c65",
"assets/assets/images/farm/18.jpg": "a4c0da04f03542b43ae55f0683bb3c51",
"assets/assets/images/farm/19.jpg": "b16f857a6f968f95564f1e45e4130f85",
"assets/assets/images/farm/2.jpg": "f05ffb2ef3839ff3d43216bf69e7f597",
"assets/assets/images/farm/20.jpg": "fd456207717955d133939e01e921f0d3",
"assets/assets/images/farm/21.jpg": "9e0be804c533b6e5ad0be91ece8c6bda",
"assets/assets/images/farm/22.jpg": "d21098335b7f49318f630940f24dfec4",
"assets/assets/images/farm/23.jpg": "29dda6da85b7f1615bfe06d158a6c862",
"assets/assets/images/farm/3.jpg": "6f1116eda3a05162a4412dc9e30a1f01",
"assets/assets/images/farm/4.jpg": "bc47137582b1f988b2315b73f3bff7bb",
"assets/assets/images/farm/5.jpg": "e6d861847adea2caab8bb1384034ec01",
"assets/assets/images/farm/6.jpg": "4e3b1adc39300e4208e9a607971a760d",
"assets/assets/images/farm/7.jpg": "df1d68853c1998e448d1bc7605a0a358",
"assets/assets/images/farm/8.jpg": "32459833bdc924663fff9656d5221814",
"assets/assets/images/farm/9.jpg": "d71bb3d4781b54ccfde642799d842dac",
"assets/assets/images/farm/Picture1.jpg": "cbe4e1f4c0212a55db3b41e44e4141ec",
"assets/assets/images/logo/Dar%2520Sharaf%2520logo44-1.jpg": "c10e2c7678ec9767d1c6012370eb4028",
"assets/assets/images/logo/Dar%2520Sharaf%2520logo44-2.jpg": "ffe35026b9d6b6827528ad9053e3a133",
"assets/assets/images/logo/Dar%2520Sharaf%2520logo44-3.jpg": "e1bc8162f0790cbe98b8cd5518bbe6a9",
"assets/assets/images/logo/Dar%2520Sharaf%2520logo44-4.jpg": "602f41c9ad224d5c9400a74ecbd45b6c",
"assets/assets/images/product/Product%2520(1).jpg": "54d51607ff57b040be5e980b5769c077",
"assets/assets/images/product/Product%2520(1)_grayscale.jpg": "dcb3fc43fb7c987743b4a493fca1423e",
"assets/assets/images/product/Product%2520(10).jpg": "3dabc5a2676e57ddd74cb1ac65546570",
"assets/assets/images/product/Product%2520(10)_grayscale.jpg": "c2542307d6f5c9419b67f08090ff5a62",
"assets/assets/images/product/Product%2520(11).jpg": "4c664c6d84a7b7bc6a6e94f3a564e8ec",
"assets/assets/images/product/Product%2520(11)_grayscale.jpg": "3edd2bff3c578c5efb8503bdb839afde",
"assets/assets/images/product/Product%2520(12).jpg": "054d8b4c3fa16d63d2708ae7cac3ae30",
"assets/assets/images/product/Product%2520(12)_grayscale.jpg": "879a89221924c29db724fda59468212a",
"assets/assets/images/product/Product%2520(13).jpg": "f5fe57a83122ab2d3af7322357d81f3e",
"assets/assets/images/product/Product%2520(13)_grayscale.jpg": "5e46496e60f2dbbd06b462302c2ce071",
"assets/assets/images/product/Product%2520(14).jpg": "3f1726085a2761782cef47addc71785f",
"assets/assets/images/product/Product%2520(14)_grayscale.jpg": "e586dd0d35a1f8c4f2587d76ded12d1b",
"assets/assets/images/product/Product%2520(15).jpg": "06f8740e5169ff34e20e122818f3e2c8",
"assets/assets/images/product/Product%2520(15)_grayscale.jpg": "3e52da26477ea4c088d45126b65e2ea6",
"assets/assets/images/product/Product%2520(16).jpg": "77ddfefddad42a2ef9b842115b29e765",
"assets/assets/images/product/Product%2520(16)_grayscale.jpg": "853795a6de7f870682839b183659008c",
"assets/assets/images/product/Product%2520(2).jpg": "efa9256c1ff6dc57b8c68a8a8ff49b0c",
"assets/assets/images/product/Product%2520(2)_grayscale.jpg": "b100f624e8f7a42431aec6a2004b908f",
"assets/assets/images/product/Product%2520(3).jpg": "5cc18333553b0e5919d616ccfcf83502",
"assets/assets/images/product/Product%2520(3)_grayscale.jpg": "df927361f58103dc5a3026a2760243bb",
"assets/assets/images/product/Product%2520(4).jpg": "f922015cb70734909789d1a55a5d4d44",
"assets/assets/images/product/Product%2520(4)_grayscale.jpg": "14a11874ef4ddb002e6feebbc6162621",
"assets/assets/images/product/Product%2520(5).jpg": "3b78f8996d324416a6cd640308273814",
"assets/assets/images/product/Product%2520(5)_grayscale.jpg": "ba34969539801719bdc05b87124388df",
"assets/assets/images/product/Product%2520(6).jpg": "563db723fcbee707384daa6ca7257f9d",
"assets/assets/images/product/Product%2520(6)_grayscale.jpg": "6e268d4a404fc2b5ec2742b3f5741e8f",
"assets/assets/images/product/Product%2520(7).jpg": "8e79d5a3bc3c41c5699a4d355ae9a077",
"assets/assets/images/product/Product%2520(7)_grayscale.jpg": "9631f1cbf3d1a5da77d0491a8aabbe10",
"assets/assets/images/product/Product%2520(8).jpg": "d9834c47040317ca7431fe5a1b3c9151",
"assets/assets/images/product/Product%2520(8)_grayscale.jpg": "f62fea54fe6c632be30b8c52ae590cec",
"assets/assets/images/product/Product%2520(9).jpg": "461d0af3a74968fd4472e94bdf54f310",
"assets/assets/images/product/Product%2520(9)_grayscale.jpg": "9d17679c1c231b9de50fb7855e511199",
"assets/assets/images/target.png": "96fa74709abafb3a58f5a7180b34e66d",
"assets/assets/images/value.png": "7ebe1f8748838707e3b6c2fad9725c03",
"assets/assets/images/vision.png": "971b54dae393cb6fbe045e610eea0c1c",
"assets/FontManifest.json": "6f7175594d777ea644541fac88e0debc",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "02ec84290dc089abe4395fa4b164baf4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "0179999a35f0b2427e6eba408b811f65",
"icons/Icon-192.png": "8e8060aac67fcd1eb28b53ea6c315edc",
"icons/Icon-512.png": "81bfa84b1c2e8861c208f0b07f934a2c",
"index.html": "eae2115acf4a2ab31f509361a9f44655",
"/": "eae2115acf4a2ab31f509361a9f44655",
"main.dart.js": "d772297cb3a235252134fbe218798576",
"manifest.json": "eda9c43823cbbdda65150dc2de972624",
"version.json": "152ca2f79dc54a039c7518061e215da7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
