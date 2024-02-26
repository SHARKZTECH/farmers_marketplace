<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'content',
        'location',
        'demand_supply',
        'contact_information',
        'product_link',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}