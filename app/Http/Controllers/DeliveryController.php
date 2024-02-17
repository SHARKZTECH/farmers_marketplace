<?php

namespace App\Http\Controllers;

use App\Models\Delivery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DeliveryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Delivery/Checkout");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'fullName' => 'required|string',
            'address' => 'required|string',
            'city' => 'required|string',
            'country' => 'required|string',
            'postalCode' => 'required|string',
            'phoneNumber' => 'required|string',
        ]);

        // Create a new delivery instance
        $delivery = new Delivery();

        // Populate the delivery instance with the validated data
        $delivery->fullName = $request->input('fullName');
        $delivery->address = $request->input('address');
        $delivery->city = $request->input('city');
        $delivery->country = $request->input('country');
        $delivery->postalCode = $request->input('postalCode');
        $delivery->phoneNumber = $request->input('phoneNumber');

        // Associate the delivery with the authenticated user
        $user = Auth::user();
        $user->delivery()->save($delivery);

        // Optionally, you can also return a response indicating success
        return response()->json(['message' => 'Delivery information stored successfully'], 200);
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}