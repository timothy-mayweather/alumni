<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create('academic_infos', function (Blueprint $table) {
			$table->id();
			$table->string('institutions');
			$table->string('faculty');
			$table->string('course');
			$table->integer('gradYear');
			$table->string('hall');
			$table->string('responsibilities');
			$table->string('firstName')->nullable();
			$table->string('middleName')->nullable();
			$table->string('lastName')->nullable();
			$table->string('role')->nullable();
			$table->string('organisation')->nullable();
			$table->string('email')->nullable();
			$table->string('phone')->nullable();
			$table->foreignId('user_id')->unique();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists('academic_infos');
	}
};
