<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\Request;
use App\Models\AcademicInfo;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;

class AcademicInfoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
	    return Inertia::render('Auth/Register', ['step'=>2]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
	    $user = User::where('email','=',$request->session()->get('userEmail'))->first();
	    $user->password = $request->session()->get('userPassword');

	    $validated = $request->validate([
		    'institutions' => 'required|string',
		    'faculty' => 'required|string',
		    'course' => 'required|string',
		    'gradYear' => 'required|int|max:'.date('Y').'|digits:4|min:1950',
		    'hall' => 'required|string',
		    'responsibilities' =>'required|string',
		    'firstName' => 'string|nullable',//prominent
		    'middleName' => 'string|nullable',//prominent
		    'lastName' => 'string|nullable',//prominent
		    'role' => 'string|nullable',
		    'organisation' => 'string|nullable',
		    'email' => 'email|nullable',
		    'phone' => 'string|nullable',
	    ]);

			$validated['user_id'] = $user->id;
	    AcademicInfo::create($validated);

	    Auth::login($user);
			$request->session()->forget(['userEmail','userPassword']);

	    return redirect(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
	    return Inertia::render('Academic/Edit',['academicInfo'=>$user->academicInfo->toArray(), 'user'=>$user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request): Response
    {
	    return Inertia::render('Academic/Edit',['academicInfo'=>$request->user()->academicInfo->toArray()]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
	    $validated = $request->validate([
		    'institutions' => 'required|string',
		    'faculty' => 'required|string',
		    'course' => 'required|string',
		    'gradYear' => 'required|int|max:'.date('Y').'|digits:4|min:1950',
		    'hall' => 'required|string',
		    'responsibilities' =>'required|string',
		    'firstName' => 'string|nullable',//prominent
		    'middleName' => 'string|nullable',//prominent
		    'lastName' => 'string|nullable',//prominent
		    'role' => 'string|nullable',
		    'organisation' => 'string|nullable',
		    'email' => 'email|nullable',
		    'phone' => 'string|nullable',
	    ]);

	    $academicInfo = $request->user()->academicInfo;
	    $academicInfo->fill($validated);
	    $academicInfo->save();

	    return Redirect::route('academic.edit');
    }

}
