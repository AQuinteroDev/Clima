<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Search extends Model
{
    protected $table = 'searches';

    protected $primaryKey = 'id';

    protected $fillable = [
        'user_id',
        'city',
        'country_code',
        'last_temperature',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
