<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Fetch all news from the database along with their associated users
        $news = News::with('user')->get();
        
        // Pass the news data to the view
        return Inertia::render("News/Index", [
            'news' => $news,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("News/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'location' => 'required|string',
            'demand_supply' => 'required|string',
            'contact_information' => 'required|string',
            'product_link' => 'nullable|string',
        ]);

        // Get the authenticated user
        $user = Auth::user();

        // Add the user_id to the validated data
        $validatedData['user_id'] = $user->id;

        // Create a new news instance with the validated data
        $news = News::create($validatedData);

    
        // Optionally, you can return a response indicating success
        return Redirect::route("news.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // Fetch the specific news item with its associated user from the database based on the provided ID
        $newsItem = News::with('user')->findOrFail($id);

        // Pass the news item data along with the associated user to the view
        return Inertia::render("News/Show", [
            'newsItem' => $newsItem,
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