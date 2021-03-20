<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\controller\masterController;
use App\Http\Controllers\controller\cargaController;
use App\Http\Controllers\controller\reportesController;

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


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard',  [masterController::class, 'Home'])->name('inicio');
Route::middleware(['auth:sanctum', 'verified'])->get('/tutoria',  [cargaController::class, 'carga'])->name('tutoria');
Route::middleware(['auth:sanctum', 'verified'])->get('/asesoria',  [cargaController::class, 'carga'])->name('asesoria');

Route::middleware(['auth:sanctum', 'verified'])->post('/registra',  [cargaController::class, 'InsertaSesiones'])->name('registra');
Route::middleware(['auth:sanctum', 'verified'])->post('/consultaSes',  [cargaController::class, 'consultaSesiones'])->name('consultaSes');
Route::middleware(['auth:sanctum', 'verified'])->post('/eliminaSes',  [cargaController::class, 'eliminaSesiones'])->name('eliminaSes');

Route::middleware(['auth:sanctum', 'verified'])->get('/reptutoria',  [reportesController::class, 'ReporteConcentrado'])->name('reptutoria');
Route::middleware(['auth:sanctum', 'verified'])->get('/repasesoria',  [reportesController::class, 'ReporteConcentrado'])->name('repasesoria');


Route::middleware(['auth:sanctum', 'verified'])->post('/consultaConcentrado',  [reportesController::class, 'consultaConcentradoSes'])->name('consultaConcentrado');




/* 
Route::middleware(['auth:sanctum', 'verified'])->get('/master', function () {
    return view('dashboard');
})->name('dashboard');
  */