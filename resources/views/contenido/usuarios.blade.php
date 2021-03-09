<h1>listado de usuarios</h1>
@foreach($usuarios as $user)
<p>ID :{{$user -> cUSU_Id}},Nombre:{{ $user ->cUSU_Nombre}} </p>
@endforeach