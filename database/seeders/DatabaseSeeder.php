<?php

namespace Database\Seeders;

use App\Models;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Models\User::factory(100)->create();
        Models\Category::factory(10)->create();
        Models\Article::factory(10)->create();
        Models\Rating::factory(1000)->create();
    }
}
