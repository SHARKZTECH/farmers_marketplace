<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all(); // Retrieve all products

        return Inertia::render("Products/Index", [
            'products' => $products, // Pass the products to the view
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::findOrFail($id); // Retrieve the product by ID

        return Inertia::render("Products/Show",[ 'product' => $product,]);
    }




}