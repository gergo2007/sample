<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    use HasFactory;

    public function user()
    {
        $this->belongsTo(User::class);
    }

    public function article()
    {
        $this->belongsTo(Article::class);
    }
}
