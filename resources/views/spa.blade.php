@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];
$appJs = mix('dist/js/app.js');
$vendorJs = mix('dist/js/vendor.js');
$manifestJs = mix('dist/js/manifest.js');
$appCss = mix('dist/css/app.css');
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>{{ config('app.name') }}</title>

  <link rel="stylesheet" href="{{ (str_starts_with($appCss, '//') ? 'http:' : '').$appCss }}">
  <base href="{{ config('app.url') }}/editor/" >
</head>
<body>
  <div id="app"></div>

  <script>
    window.config = @json($config);
  </script>

  <script src="{{ (str_starts_with($manifestJs, '//') ? 'http:' : '').$manifestJs }}" defer></script>
  <script src="{{ (str_starts_with($appJs, '//') ? 'http:' : '').$appJs }}" defer></script>
  <script src="{{ (str_starts_with($vendorJs, '//') ? 'http:' : '').$vendorJs }}" defer></script>


</body>
</html>
