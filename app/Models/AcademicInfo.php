<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicInfo extends Model
{
    use HasFactory;

		protected $fillable =[
			'institutions',
			'faculty',
			'course',
			'gradYear',
			'hall',
			'responsibilities',
			'firstName',
			'middleName',
			'lastName',
			'role',
			'organisation',
			'email',
			'phone',
			'user_id'
		];
}
