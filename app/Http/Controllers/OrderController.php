<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Check if the current user's role is admin or farmer
        if (Auth::user()->role === 'admin' || Auth::user()->role === 'farmer') {
            // Fetch all orders with user information
            $orders = Order::with('user')->get();
        } else {
            // Fetch orders belonging to the current user
            $orders = Auth::user()->orders()->with('user')->get();
        }
        
        // Pass the orders data to the view
        return Inertia::render("Admin/Orders/Index", [
            'orders' => $orders,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Order/PlaceOrder");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        // Validate the incoming request data
        $validatedData = $request->validate([
            'user_id' => 'required|integer',
            'status' => 'required|string',
            'payment_method' => 'required|string',
            'total_price' => 'required|numeric',
            'orderItems' => 'required|array',
            'orderItems.*.product_id' => 'required|integer',
            'orderItems.*.quantity' => 'required|integer|min:1',
            'orderItems.*.price' => 'required|numeric',
            'orderItems.*.image' => 'required|string',
        ]);
    
        // Create the order
        $order = Order::create([
            'user_id' => $validatedData['user_id'],
            'status' => $validatedData['status'],
            'payment_method' => $validatedData['payment_method'],
            'total_price' => $validatedData['total_price'],
        ]);
    
        // Create order items
        foreach ($validatedData['orderItems'] as $itemData) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $itemData['product_id'],
                'quantity' => $itemData['quantity'],
                'price' => $itemData['price'],
                'image' => $itemData['image'],
            ]);
        }
    
        // Redirect to the order details page
        return redirect()->route('orders.show', ['order' => $order->id]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Fetch the order details with order items and delivery information
        $order = Order::with('items','items.product','user.delivery')->findOrFail($id);

        // Pass the order data to the view
        return Inertia::render("Admin/Orders/Show", [
            'order' => $order,
        ]);
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
        // Find the order by its ID
        $order = Order::findOrFail($id);
        
        // Check if the payment was successful (you may need to adjust this condition based on your payment logic)
        $isPaymentSuccessful = true; // Replace this with your payment success condition
        
        if ($isPaymentSuccessful) {
            // Update the isPaid field to true
            $order->update(['is_paid' => true]);
            
            return redirect()->route('orders.show', ['order' => $order->id]);

        } else {
            // Handle the case where payment was not successful
            // You may want to return a different response or perform additional actions
            return response()->json(['message' => 'Order payment failed'], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}