<div class="user-info">
          <p class="name">SITA</p>
          <!-- <p class="email">maparicio@nubay.com.mx</p> -->
        </div>
        <div class="mdc-list-group">
          <nav class="mdc-list mdc-drawer-menu">
            <div class="mdc-list-item mdc-drawer-item">
              <a class="mdc-drawer-link" href="{{ route('inicio')}}" >
                <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">home</i>
                Inicio
              </a>
            </div>
     
             <div class="mdc-list-item mdc-drawer-item">
              <a class="mdc-expansion-panel-link" href="#" data-toggle="expansionPanel" data-target="ui-sub-menu">
                <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">dashboard</i>
                Carga de Datos
                <i class="mdc-drawer-arrow material-icons">chevron_right</i>
              </a>
              <div class="mdc-expansion-panel" id="ui-sub-menu">
                <nav class="mdc-list mdc-drawer-submenu">
                  <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{ route('tutoria')}}" >
                      Tutorias
                    </a>
                  </div>
                  <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{ route('asesoria')}}" >
                      Asesorias
                    </a>
                  </div>
                </nav>
              </div>
            </div>

            
            <div class="mdc-list-item mdc-drawer-item">
              <a class="mdc-expansion-panel-link" href="#" data-toggle="expansionPanel" data-target="sample-page-submenu">
                <i class="material-icons mdc-list-item__start-detail mdc-drawer-item-icon" aria-hidden="true">description</i>
                Reportes
                <i class="mdc-drawer-arrow material-icons">chevron_right</i>
              </a>
              <div class="mdc-expansion-panel" id="sample-page-submenu">
                <nav class="mdc-list mdc-drawer-submenu">
                  <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('reptutoria')}}">
                      Rep - Tutorias
                    </a>
                  </div>
                   <div class="mdc-list-item mdc-drawer-item">
                    <a class="mdc-drawer-link" href="{{route('repasesoria')}}">
                    Rep - Asesorias
                    </a>
                  </div>                   
                  
                </nav>
              </div>
            </div>



            
          </nav>
        </div>
      
       