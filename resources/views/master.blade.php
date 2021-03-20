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
  <script src="{{url('js/funcionesGenerales.js')}}"></script>
 
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

      <div class="page-wrapper mdc-toolbar-fixed-adjust">
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
  

  <div id="div_modal" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 id="h5_title" class="modal-title">Modal title</h5>
        <button type="button" onclick="$('#div_modal').hide();" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div id="div_modBody" class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" id="btn_modAcep"  class="btn btn-success btn-sm opera" >Aceptar</button>
        <button type="button" id="btn_modCancel" onclick="$('#div_modal').hide();"  class="btn btn-danger btn-sm opera" data-dismiss="modal">Cancelar</button>
      </div>
    </div>
  </div>
</div>

<!-- plugins:js -->  


  <script src="{{ url('assets/vendors/js/vendor.bundle.base.js')}}"></script>
  <script src="{{ url('assets/js/material.js')}}"></script>
  <script src="{{ url('assets/js/misc.js')}}"></script>

  


</body>
</html>
