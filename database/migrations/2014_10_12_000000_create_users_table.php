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
        Schema::create('users', function (Blueprint $table) {
		      $table->id();
					$table->string('firstName');
					$table->string('middleName')->nullable(); //nullable
					$table->string('lastName');
					$table->enum('role',['admin','alumni'])->default('alumni');
					$table->string('ubtebNo')->unique();
					$table->string('email')->unique();
					$table->string('phone');
					$table->enum('occupation',['employed','unEmployed','selfEmployed']);
					$table->string('position')->nullable();//if employed
					$table->string('organisation')->nullable();//if employed
					$table->string('businessName')->nullable();//if self
					$table->string('businessType')->nullable();//if self
					$table->string('country');
					$table->string('district');
					$table->string('password');
		      $table->timestamp('email_verified_at')->nullable();
		      $table->rememberToken();
					$table->softDeletes();
		      $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
