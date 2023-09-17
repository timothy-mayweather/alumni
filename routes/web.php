<?php

use App\Http\Controllers\AcademicInfoController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

//Route::get('/', function () {
//    broadcast(new WebsocketDemoEvent('Init'));
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//});

Route::get('/', [AuthenticatedSessionController::class, 'create']);
Route::get('/command', static function (Request $request){
    $output = "";
    if($request->has('command')){
        Artisan::call($request->input('command'));
        $output = Artisan::output();
    }
    return "<form method='get' action='/command'>command: <input type='text' name='command'/><input type='submit'></form><div>$output</div>";
});

Route::get('/register/step2', [AcademicInfoController::class, 'create'])->name('register.step2');
Route::resource('academic', AcademicInfoController::class)->only(['store']);

Route::middleware(['auth','verified'])->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::get('/profile/{user}', [ProfileController::class, 'show'])->name('profile.show');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
	Route::get('/academic', [AcademicInfoController::class, 'edit'])->name('academic.edit');
	Route::get('/academic/{user}', [AcademicInfoController::class, 'show'])->name('academic.show');
	Route::patch('/academic', [AcademicInfoController::class, 'update'])->name('academic.update');
//	Route::get('/dashboard', function () {
//		return Inertia::render('Dashboard', ['init'=>json_encode([]), 'people'=>json_encode([])]);
//	})->middleware(['auth', 'verified'])->name('dashboard');
//
//	Route::resource('upload', App\Http\Controllers\UploadController::class)->only(['index','store'])->middleware(['auth','verified']);
//	Route::get('/reports/shared', [ReportController::class, 'createShared'])->name('reports.shared');
//	Route::resource('reports', ReportController::class)->middleware(['auth','verified']);
//	Route::get('templates', [ReportController::class, 'templates']);
//	Route::get('/template/{report}', [ReportController::class, 'template']);
	Route::resource('users', UserController::class)->only(['index','create', 'update'])->withTrashed(['update']);
});

require __DIR__.'/auth.php';
