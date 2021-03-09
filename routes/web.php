<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\controller\masterController;
use App\Http\Controllers\controller\cargaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('auth.login');
    //return view('welcome');
});


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard',  [masterController::class, 'Home'])->name('master');
Route::middleware(['auth:sanctum', 'verified'])->get('/tutoria',  [cargaController::class, 'carga'])->name('tutoria');
Route::middleware(['auth:sanctum', 'verified'])->get('/asesoria',  [cargaController::class, 'carga'])->name('asesoria');



Route::middleware(['auth:sanctum', 'verified'])->get('/master', function () {
    return view('dashboard');
})->name('dashboard');
 