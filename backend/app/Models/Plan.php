<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Plan extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'stripe_id',
        'price',
        'validity',
        'free'
    ];

    public function features(){
        return $this->hasMany(PlanFeature::class)->orderBy('title');
    }
}
