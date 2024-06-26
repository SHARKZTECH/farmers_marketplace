<?php

use App\Http\Controllers\AdminProductsController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\DeliveryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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

Route::get('/', function () {
    // Retrieve the first 8 products as featuredProducts
    $featuredProducts = Product::take(8)->get();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'featuredProducts' => $featuredProducts,
    ]);
});

Route::resource('/cart', CartController::class);

Route::get('/products', [ProductsController::class,'index'])->name("productslist");
Route::get('/products/{id}', [ProductsController::class,'show'])->name("products.show");


Route::get('/dashboard', function () {
    $user = Auth::user();
    // Check if the user is an admin or farmer
    if ($user->role === 'admin' || $user->role === 'farmer') {
        // Total count of all orders
        $totalOrders = Order::count();        
        // Total count of orders with pending status
        $pendingOrders = Order::where('status', 'pending')->count();        
        // Total order count with status completed
        $completedOrders = Order::where('status', 'completed')->count();
    } else {
        // Fetch orders for the current user
        $userOrders = $user->orders();
        // Total count of orders for the current user
        $totalOrders = $userOrders->count();        
        // Total count of orders with pending status for the current user
        $pendingOrders = $userOrders->where('status', 'pending')->count();        
        // Total order count with status completed for the current user
        $completedOrders = $userOrders->where('status', 'completed')->count();
    }

    return Inertia::render('Dashboard', [
        'totalOrders' => $totalOrders,
        'pendingOrders' => $pendingOrders,
        'completedOrders' => $completedOrders,
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::resource('admin/products', AdminProductsController::class);
    Route::resource('/delivery', DeliveryController::class);
    Route::resource('/orders', OrderController::class);
    Route::resource('/users', UsersController::class);

    Route::get('/news/create', [NewsController::class,'create'])->name("news.create");
    Route::post('/news', [NewsController::class,'store'])->name("news.store");
});

Route::get('/news', [NewsController::class,'index'])->name("news.index");
Route::get('/news/{id}', [NewsController::class,'show'])->name("news.show");



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';