<?php

namespace App\Http\Controllers\controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class masterController extends Controller
{
    public function Home(){
        return view('master');
    }
}
