<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Search;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class searchesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Search::class;
    public function definition(): array
    {        
        
        return [
            // 2. Para la ID del usuario, creamos uno nuevo automáticamente o usamos uno existente
            'user_id' => User::factory(), 
            
        ];
    }
}
