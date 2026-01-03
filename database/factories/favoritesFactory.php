<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Favorites;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class favoritesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Favorites::class;
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
        ];
    }
}
