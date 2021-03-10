<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>SITA</title>
  <!-- plugins:css -->
  
  <LInk href="{{asset('/assets/vendors/mdi/css/materialdesignicons.min.css')}}" rel="stylesheet">
  <LInk href="{{asset('/assets/vendors/css/vendor.bundle.base.css')}}" rel="stylesheet">
  <LInk href="{{asset('/assets/css/demo/style.css')}}" rel="stylesheet">
  <!-- CSS only -->

  <LInk href="{{asset('/assets/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
  <script src="{{url('assets/bootstrap/js/bootstrap.bundle.min.js')}}"></script>
 
</head>
<body>

<script src="{{url('/assets/js/preloader.js')}}"></script>

  <div class="body-wrapper">
    <!-- partial:../../partials/_sidebar.html -->
    <aside class="mdc-drawer mdc-drawer--dismissible mdc-drawer--open">
     
      <div class="mdc-drawer__content">
          @include('menu.menu')

      </div>
    </aside>
    <!-- partial -->

    <div class="main-wrapper mdc-drawer-app-content">      
      <header class="mdc-top-app-bar" style="position: -webkit-sticky; position: sticky; top: 0;">
      <!-- mdc-top-app-bar -->
            @include('menu.header')
      </header>
      <!-- partial -->     

      <div class="">
      <!-- page-wrapper mdc-toolbar-fixed-adjust -->
        <main class="content-wrapper">
            <div class="mdc-layout-grid">
                <div class="mdc-layout-grid__inner">                
                    @yield('contenido') 
                </div>
            </div>
        </main>
        
        <footer >
              @include('footer.footer')
        </footer>
        <!-- partial -->
      </div>
    </div>
  </div>
  <!-- plugins:js -->
  
  <script src="{{ url('assets/vendors/js/vendor.bundle.base.js')}}"></script>
  <script src="{{ url('assets/js/material.js')}}"></script>
  <script src="{{ url('assets/js/misc.js')}}"></script>

  


</body>
</html>
