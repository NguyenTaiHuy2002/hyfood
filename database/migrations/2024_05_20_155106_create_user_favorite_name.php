<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_favourite', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('uf_product_id')->default(0);
            $table->integer('uf_user_id')->default(0);
            $table->unique(['uf_product_id', 'uf_user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_favourite');
    }
};
