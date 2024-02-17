<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AdminProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all(); // Retrieve all products

        return Inertia::render("Admin/Products/Index", [
            'products' => $products, // Pass the products to the view
        ]);
    
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Admin/Products/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string',
        'price' => 'required|numeric',
        'category' => 'required|string',
        'description' => 'required|string',
        'quantity' => 'required|integer',
        'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // validate image file
    ]);

    // Store the image in the storage directory
    $imageName = $request->file('image')->store('public/images'); 

    // Get the path of the stored image
    $imagePath = Storage::url($imageName);

    $user = Auth::user(); // Retrieve the authenticated user

    $product = new Product([
        'name' => $request->input('name'),
        'price' => $request->input('price'),
        'category' => $request->input('category'),
        'description' => $request->input('description'),
        'quantity' => $request->input('quantity'),
        'image' => $imagePath, // Store the image URL with the new path
        'user_id' => $user->id, // Set the user_id field
    ]);

    $product->save();

    return redirect()->route('products.index')->with('success', 'Product added successfully.');
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = Product::findOrFail($id); // Retrieve the product by ID

        return Inertia::render("Admin/Products/Edit", [
            'product' => $product, // Pass the product data to the view
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     $request->validate([
    //         'name' => 'required|string',
    //         'price' => 'required|numeric',
    //         'category' => 'required|string',
    //         'description' => 'required|string',
    //         'quantity' => 'required|integer',
    //         'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Allow nullable image field
    //     ]);
    
    //     // Find the product by ID
    //     $product = Product::findOrFail($id);
    
    //     // Delete previous image if a new one is provided
    //     if ($request->hasFile('image')) {
    //         Storage::delete($product->image); // Delete previous image
    //         $imageName = $request->file('image')->store('public/images');
    //         $product->image = $imageName;
    //     }

    
    //     // Update product data
    //     $product->name = $request->input('name');
    //     $product->price = $request->input('price');
    //     $product->category = $request->input('category');
    //     $product->description = $request->input('description');
    //     $product->quantity = $request->input('quantity');
    
    //     // Save the updated product
    //     $product->save();
    
    //     return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    // }

    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string',
            'price' => 'required|numeric',
            'category' => 'required|string',
            'description' => 'required|string',
            'quantity' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Allow nullable image field
        ]);

        // Find the product by ID
        $product = Product::findOrFail($id);



        // Update product data
        $product->name = $request->input('name');
        $product->price = $request->input('price');
        $product->category = $request->input('category');
        $product->description = $request->input('description');
        $product->quantity = $request->input('quantity');

        // Delete previous image if a new one is provided
        if ($request->hasFile('image')) {
            // Delete previous image
            Storage::delete($product->image); 
            // Store the new image
            $imageName = $request->file('image')->store('public/images');
            // Get the URL of the stored image
            $imagePath = Storage::url($imageName);
            $product->image = $imagePath;
        }

        // Save the updated product
        $product->save();

        return redirect()->route('products.index')->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}